use chain_of_custody_integrity::*;
use hdk::prelude::*;

#[hdk_extern]
pub fn get_custody_transfer(custody_transfer_hash: EntryHash) -> ExternResult<Option<Record>> {
    get(custody_transfer_hash, GetOptions::default())
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
