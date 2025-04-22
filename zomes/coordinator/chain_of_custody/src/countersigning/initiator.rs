use hdk::prelude::*;

use chain_of_custody_integrity::*;

use crate::Signal;

use super::common::create_custody_transfer;
use super::responder::TransactionPreflight;

#[hdk_extern]
pub fn receive_custody_transfer_request(custody_transfer: CustodyTransfer) -> ExternResult<()> {
    let call_info = call_info()?;

    if call_info.provenance.ne(&custody_transfer.current_custodian) {
        return Ok(());
    }

    emit_signal(Signal::NewCustodyTransferRequest { custody_transfer })?;

    Ok(())
}

#[hdk_extern]
pub fn attempt_create_custody_transfer(custody_transfer: CustodyTransfer) -> ExternResult<Record> {
    let my_pub_key = agent_info()?.agent_initial_pubkey;

    let countersigning_agents = vec![
        (AgentPubKey::from(my_pub_key.clone()), vec![]),
        (
            AgentPubKey::from(custody_transfer.current_custodian.clone()),
            vec![],
        ),
    ];
    let preflight_request =
        build_preflight_request(custody_transfer.clone(), countersigning_agents)?;

    let response = call_remote(
        custody_transfer.current_custodian.clone().into(),
        zome_info()?.name,
        "transaction_preflight".into(),
        None,
        TransactionPreflight {
            preflight_request: preflight_request.clone(),
        },
    )?;

    let result = match response.clone() {
        ZomeCallResponse::Ok(result) => Ok(result),
        _ => Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Error with fn transaction_preflight: {:?}",
            response
        )))),
    }?;

    let counterparty_response: PreflightResponse = result.decode().map_err(|e| {
        wasm_error!(WasmErrorInner::Guest(format!(
            "Failed to decode PreflightResponse: {}",
            e
        )))
    })?;

    let my_response = match accept_countersigning_preflight_request(preflight_request)? {
        PreflightRequestAcceptance::Accepted(response) => Ok(response),
        _ => Err(wasm_error!(WasmErrorInner::Guest(String::from(
            "Couldn't lock our own chain",
        )))),
    }?;

    let response = call_remote(
        custody_transfer.current_custodian.clone().into(),
        zome_info()?.name,
        "request_create_custody_transfer".into(),
        None,
        vec![my_response.clone(), counterparty_response.clone()],
    )?;

    let result = match response {
        ZomeCallResponse::Ok(result) => Ok(result),
        _ => Err(wasm_error!(WasmErrorInner::Guest(format!(
            "Error with fn request_create_custody_transfer{:?}",
            response
        )))),
    }?;

    let _counterparty_action_hash: ActionHash = result.decode().map_err(|e| {
        wasm_error!(WasmErrorInner::Guest(format!(
            "Failed to decode response of request_create_custody_transfer remote call: {}",
            e
        )))
    })?;

    let action_hash = create_custody_transfer(
        custody_transfer.clone(),
        vec![my_response, counterparty_response],
    )?;

    let record = get(action_hash.clone(), GetOptions::default())?.ok_or(wasm_error!(
        WasmErrorInner::Guest(String::from(
            "Could not find the newly created CustodyTransfer"
        ))
    ))?;

    Ok(record)
}

fn build_preflight_request(
    custody_transfer: CustodyTransfer,
    countersigning_agents: CounterSigningAgents,
) -> ExternResult<PreflightRequest> {
    let custody_transfer_hash = hash_entry(&custody_transfer)?;

    let times = session_times_from_millis(5_000)?;

    let transaction_entry_type: EntryType = UnitEntryTypes::CustodyTransfer.try_into()?;

    let action_base = ActionBase::Create(CreateBase::new(transaction_entry_type));

    let bytes = SerializedBytes::try_from(custody_transfer.clone()).map_err(|e| {
        wasm_error!(WasmErrorInner::Guest(format!(
            "Failed to serialize transaction: {}",
            e
        )))
    })?;

    let preflight_bytes = PreflightBytes(bytes.bytes().to_vec());

    let preflight_request = PreflightRequest::try_new(
        custody_transfer_hash,
        countersigning_agents,
        vec![],
        0,
        false,
        times,
        action_base,
        preflight_bytes,
    )
    .map_err(|err| {
        wasm_error!(WasmErrorInner::Guest(format!(
            "Could not create preflight request: {:?}",
            err
        )))
    })?;

    Ok(preflight_request)
}
