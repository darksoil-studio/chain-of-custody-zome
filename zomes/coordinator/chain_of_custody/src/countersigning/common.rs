use hdk::prelude::*;

use chain_of_custody_integrity::*;

pub fn create_custody_transfer(
    custody_transfer: CustodyTransfer,
    preflight_responses: Vec<PreflightResponse>,
) -> ExternResult<ActionHash> {
    let entry = Entry::CounterSign(
        Box::new(
            CounterSigningSessionData::try_from_responses(preflight_responses, vec![]).map_err(
                |countersigning_error| {
                    wasm_error!(WasmErrorInner::Guest(countersigning_error.to_string()))
                },
            )?,
        ),
        custody_transfer.clone().try_into()?,
    );

    let custody_transfer_action_hash = HDK.with(|h| {
        h.borrow().create(CreateInput::new(
            ScopedEntryDefIndex::try_from(UnitEntryTypes::CustodyTransfer)?,
            EntryVisibility::Public,
            entry,
            // Countersigned entries MUST have strict ordering.
            ChainTopOrdering::Strict,
        ))
    })?;

    Ok(custody_transfer_action_hash)
}

#[derive(Serialize, Deserialize, Debug)]
pub struct CreateCustodyTransferLinksInput {
    pub custody_transfer: CustodyTransfer,
    pub custody_transfer_hash: EntryHash,
}

#[hdk_extern]
pub fn create_custody_transfer_links(input: CreateCustodyTransferLinksInput) -> ExternResult<()> {
    create_link(
        input.custody_transfer.custodied_resource_hash.clone(),
        input.custody_transfer_hash.clone(),
        LinkTypes::ResourceToCustodyTransfers,
        (),
    )?;
    if let Some(base) = input
        .custody_transfer
        .previous_custody_transfer_hash
        .clone()
    {
        create_link(
            base,
            input.custody_transfer_hash.clone(),
            LinkTypes::CustodyTransferToCustodyTransfers,
            (),
        )?;
    }

    Ok(())
}
