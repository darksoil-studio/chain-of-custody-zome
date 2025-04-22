use chain_of_custody_integrity::*;
use hdk::prelude::*;

#[hdk_extern]
pub fn create_custody_transfer(custody_transfer: CustodyTransfer) -> ExternResult<Record> {
    let custody_transfer_hash =
        create_entry(&EntryTypes::CustodyTransfer(custody_transfer.clone()))?;
    create_link(
        custody_transfer.custodied_resource_hash.clone(),
        custody_transfer_hash.clone(),
        LinkTypes::ResourceToCustodyTransfers,
        (),
    )?;
    if let Some(base) = custody_transfer.previous_custody_transfer_hash.clone() {
        create_link(
            base,
            custody_transfer_hash.clone(),
            LinkTypes::CustodyTransferToCustodyTransfers,
            (),
        )?;
    }
    let record = get(custody_transfer_hash.clone(), GetOptions::default())?.ok_or(wasm_error!(
        WasmErrorInner::Guest("Could not find the newly created CustodyTransfer".to_string())
    ))?;
    Ok(record)
}

#[hdk_extern]
pub fn get_custody_transfer(custody_transfer_hash: ActionHash) -> ExternResult<Option<Record>> {
    let Some(details) = get_details(custody_transfer_hash, GetOptions::default())? else {
        return Ok(None);
    };
    match details {
        Details::Record(details) => Ok(Some(details.record)),
        _ => Err(wasm_error!(WasmErrorInner::Guest(
            "Malformed get details response".to_string()
        ))),
    }
}

#[hdk_extern]
pub fn get_custody_transfers_for_resource(resource_hash: ActionHash) -> ExternResult<Vec<Link>> {
    get_links(
        GetLinksInputBuilder::try_new(resource_hash, LinkTypes::ResourceToCustodyTransfers)?
            .build(),
    )
}

#[hdk_extern]
pub fn get_custody_transfers_for_custody_transfer(
    custody_transfer_hash: EntryHash,
) -> ExternResult<Vec<Link>> {
    get_links(
        GetLinksInputBuilder::try_new(
            custody_transfer_hash,
            LinkTypes::CustodyTransferToCustodyTransfers,
        )?
        .build(),
    )
}
