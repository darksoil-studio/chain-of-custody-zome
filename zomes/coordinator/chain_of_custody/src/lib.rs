use chain_of_custody_integrity::*;
use countersigning::common::CreateCustodyTransferLinksInput;
use hdk::prelude::*;

pub mod countersigning;
pub mod custody_transfer;

#[hdk_extern]
pub fn get_custodied_resource(custodied_resource_hash: ActionHash) -> ExternResult<Option<Record>> {
    get(custodied_resource_hash, GetOptions::default())
}

#[hdk_extern]
pub fn init(_: ()) -> ExternResult<InitCallbackResult> {
    let mut functions = BTreeSet::new();

    functions.insert((zome_info()?.name, "receive_custody_transfer_request".into()));
    let grant = ZomeCallCapGrant {
        access: CapAccess::Unrestricted,
        functions: GrantedFunctions::Listed(functions),
        tag: "".into(),
    };
    create_cap_grant(grant)?;

    let mut functions = BTreeSet::new();
    functions.insert((zome_info()?.name, "transaction_preflight".into()));
    let grant = ZomeCallCapGrant {
        access: CapAccess::Unrestricted,
        functions: GrantedFunctions::Listed(functions),
        tag: "".into(),
    };
    create_cap_grant(grant)?;

    let mut functions = BTreeSet::new();
    functions.insert((zome_info()?.name, "request_create_custody_transfer".into()));
    let grant = ZomeCallCapGrant {
        access: CapAccess::Unrestricted,
        functions: GrantedFunctions::Listed(functions),
        tag: "".into(),
    };
    create_cap_grant(grant)?;

    Ok(InitCallbackResult::Pass)
}

#[derive(Serialize, Deserialize, Debug)]
#[serde(tag = "type")]
pub enum Signal {
    EntryCreated {
        action: SignedActionHashed,
        app_entry: EntryTypes,
    },
    EntryUpdated {
        action: SignedActionHashed,
        app_entry: EntryTypes,
        original_app_entry: EntryTypes,
    },
    EntryDeleted {
        action: SignedActionHashed,
        original_app_entry: EntryTypes,
    },
    LinkCreated {
        action: SignedActionHashed,
        link_type: LinkTypes,
    },
    LinkDeleted {
        action: SignedActionHashed,
        create_link_action: SignedActionHashed,
        link_type: LinkTypes,
    },
    NewCustodyTransferRequest {
        custody_transfer: CustodyTransfer,
    },
}

#[hdk_extern(infallible)]
pub fn post_commit(committed_actions: Vec<SignedActionHashed>) {
    for action in committed_actions {
        if let Err(err) = signal_action(action) {
            error!("Error signaling new action: {:?}", err);
        }
    }
}

fn signal_action(action: SignedActionHashed) -> ExternResult<()> {
    match action.hashed.content.clone() {
        Action::Create(_create) => {
            if let Ok(Some(app_entry)) = get_entry_for_action(&action.hashed.hash) {
                let EntryTypes::CustodyTransfer(custody_transfer) = &app_entry;
                let response = call_remote(
                    agent_info()?.agent_initial_pubkey,
                    zome_info()?.name,
                    "create_custody_transfer_links".into(),
                    None,
                    CreateCustodyTransferLinksInput {
                        custody_transfer: custody_transfer.clone(),
                        custody_transfer_hash: _create.entry_hash,
                    },
                )?;
                let ZomeCallResponse::Ok(_) = response else {
                    return Err(wasm_error!(
                        "Error creating custody transfer links: {:?}",
                        response
                    ));
                };

                emit_signal(Signal::EntryCreated { action, app_entry })?;
            }
            Ok(())
        }
        Action::Update(update) => {
            if let Ok(Some(app_entry)) = get_entry_for_action(&action.hashed.hash) {
                if let Ok(Some(original_app_entry)) =
                    get_entry_for_action(&update.original_action_address)
                {
                    emit_signal(Signal::EntryUpdated {
                        action,
                        app_entry,
                        original_app_entry,
                    })?;
                }
            }
            Ok(())
        }
        Action::Delete(delete) => {
            if let Ok(Some(original_app_entry)) = get_entry_for_action(&delete.deletes_address) {
                emit_signal(Signal::EntryDeleted {
                    action,
                    original_app_entry,
                })?;
            }
            Ok(())
        }
        Action::CreateLink(create_link) => {
            if let Ok(Some(link_type)) =
                LinkTypes::from_type(create_link.zome_index, create_link.link_type)
            {
                emit_signal(Signal::LinkCreated { action, link_type })?;
            }
            Ok(())
        }
        Action::DeleteLink(delete_link) => {
            let record = get(delete_link.link_add_address.clone(), GetOptions::default())?.ok_or(
                wasm_error!(WasmErrorInner::Guest(
                    "Failed to fetch CreateLink action".to_string()
                )),
            )?;
            match record.action() {
                Action::CreateLink(create_link) => {
                    if let Ok(Some(link_type)) =
                        LinkTypes::from_type(create_link.zome_index, create_link.link_type)
                    {
                        emit_signal(Signal::LinkDeleted {
                            action,
                            link_type,
                            create_link_action: record.signed_action.clone(),
                        })?;
                    }
                    Ok(())
                }
                _ => Err(wasm_error!(WasmErrorInner::Guest(
                    "Create Link should exist".to_string()
                ))),
            }
        }
        _ => Ok(()),
    }
}

fn get_entry_for_action(action_hash: &ActionHash) -> ExternResult<Option<EntryTypes>> {
    let record = match get_details(action_hash.clone(), GetOptions::default())? {
        Some(Details::Record(record_details)) => record_details.record,
        _ => return Ok(None),
    };
    let entry = match record.entry().as_option() {
        Some(entry) => entry,
        None => return Ok(None),
    };
    let (zome_index, entry_index) = match record.action().entry_type() {
        Some(EntryType::App(AppEntryDef {
            zome_index,
            entry_index,
            ..
        })) => (zome_index, entry_index),
        _ => return Ok(None),
    };
    EntryTypes::deserialize_from_type(*zome_index, *entry_index, entry)
}
