use hdk::prelude::*;

use chain_of_custody_integrity::*;

use super::common::create_custody_transfer;

#[derive(Debug, Serialize, Deserialize)]
pub struct SendCustodyTransferRequestInput {
    pub current_custodiant: AgentPubKey,
    pub custody_transfer: CustodyTransfer,
}

#[hdk_extern]
pub fn send_custody_transfer_request(input: SendCustodyTransferRequestInput) -> ExternResult<()> {
    let response = call_remote(
        input.current_custodiant,
        zome_info()?.name,
        "receive_custody_transfer_request".into(),
        None,
        input.custody_transfer,
    )?;

    let ZomeCallResponse::Ok(_) = response else {
        return Err(wasm_error!(
            "Error sending custody transfer request: {:?}",
            response
        ));
    };
    Ok(())
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TransactionPreflight {
    pub preflight_request: PreflightRequest,
}
#[hdk_extern]
pub fn transaction_preflight(input: TransactionPreflight) -> ExternResult<PreflightResponse> {
    // TODO: Add custom checks
    // check_transaction_request_is_still_valid(input.transaction_request_hash.into())?;

    let my_response =
        match accept_countersigning_preflight_request(input.preflight_request.clone())? {
            PreflightRequestAcceptance::Accepted(response) => Ok(response),
            _ => Err(wasm_error!(WasmErrorInner::Guest(
                "There was an error accepting the preflight request for the transaction".into(),
            ))),
        }?;

    Ok(my_response)
}

#[hdk_extern]
pub fn request_create_custody_transfer(
    all_responses: Vec<PreflightResponse>,
) -> ExternResult<ActionHash> {
    let preflight_request = all_responses[0].request().clone();
    let bytes = SerializedBytes::from(UnsafeBytes::from(
        preflight_request.preflight_bytes.0.clone(),
    ));

    let custody_transfer = CustodyTransfer::try_from(bytes).map_err(|e| {
        wasm_error!(WasmErrorInner::Guest(format!(
            "Failed to deserialize transaction: {}",
            e
        )))
    })?;

    let action_hash = create_custody_transfer(custody_transfer.clone(), all_responses)?;

    Ok(action_hash)
}
