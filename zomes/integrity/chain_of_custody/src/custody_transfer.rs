use hdi::prelude::*;

#[derive(Clone, PartialEq)]
#[hdk_entry_helper]
pub struct CustodyTransfer {
    pub current_custodian: AgentPubKey,
    pub custodied_resource_hash: ActionHash,
    pub location: Option<String>,
    pub notes: Option<String>,
    pub images_hashes: Vec<EntryHash>,
    pub previous_custody_transfer_hash: Option<EntryHash>,
}

pub fn validate_create_custody_transfer(
    _action: EntryCreationAction,
    custody_transfer: CustodyTransfer,
) -> ExternResult<ValidateCallbackResult> {
    let _record = must_get_valid_record(custody_transfer.custodied_resource_hash.clone())?;

    // TODO: validate record?

    if let Some(entry_hash) = custody_transfer.previous_custody_transfer_hash.clone() {
        validate_custody_transfer(entry_hash)
    } else {
        // TODO: add the appropriate validation rules
        Ok(ValidateCallbackResult::Valid)
    }
}

pub fn validate_update_custody_transfer(
    _action: Update,
    _custody_transfer: CustodyTransfer,
    _original_action: EntryCreationAction,
    _original_custody_transfer: CustodyTransfer,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Invalid(
        "Custody Transfers cannot be updated".to_string(),
    ))
}

pub fn validate_delete_custody_transfer(
    _action: Delete,
    _original_action: EntryCreationAction,
    _original_custody_transfer: CustodyTransfer,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Invalid(
        "Custody Transfers cannot be deleted".to_string(),
    ))
}

pub fn validate_create_link_resource_to_custody_transfers(
    _action: CreateLink,
    base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let action_hash = base_address
        .into_action_hash()
        .ok_or(wasm_error!(WasmErrorInner::Guest(
            "No action hash associated with link".to_string()
        )))?;
    let _record = must_get_valid_record(action_hash)?;
    // TODO: validate record?

    let entry_hash = target_address
        .into_entry_hash()
        .ok_or(wasm_error!(WasmErrorInner::Guest(
            "No action hash associated with link".to_string()
        )))?;

    validate_custody_transfer(entry_hash)
}

fn validate_custody_transfer(entry_hash: EntryHash) -> ExternResult<ValidateCallbackResult> {
    let entry = must_get_entry(entry_hash)?;

    let Entry::CounterSign(_, bytes) = entry.content else {
        return Ok(ValidateCallbackResult::Invalid(
            "Custody transfer entry is not a countersigned entry.".into(),
        ));
    };

    let Ok(_custody_transfer) = crate::CustodyTransfer::try_from(bytes.0) else {
        return Ok(ValidateCallbackResult::Invalid(
            "ResourceToCustodyTransfers links points to an entry that is not a CustodyTransfer"
                .into(),
        ));
    };
    Ok(ValidateCallbackResult::Valid)
}

pub fn validate_delete_link_resource_to_custody_transfers(
    _action: DeleteLink,
    _original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Invalid(
        "ResourceToCustodyTransfers links cannot be deleted".to_string(),
    ))
}

pub fn validate_create_link_custody_transfer_to_custody_transfers(
    _action: CreateLink,
    base_address: AnyLinkableHash,
    target_address: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    let entry_hash = base_address
        .into_entry_hash()
        .ok_or(wasm_error!(WasmErrorInner::Guest(
            "No entry hash associated with link".to_string()
        )))?;

    let valid = validate_custody_transfer(entry_hash)?;

    let ValidateCallbackResult::Valid = valid else {
        return Ok(valid);
    };

    let entry_hash = target_address
        .into_entry_hash()
        .ok_or(wasm_error!(WasmErrorInner::Guest(
            "No entry hash associated with link".to_string()
        )))?;

    validate_custody_transfer(entry_hash)
}

pub fn validate_delete_link_custody_transfer_to_custody_transfers(
    _action: DeleteLink,
    _original_action: CreateLink,
    _base: AnyLinkableHash,
    _target: AnyLinkableHash,
    _tag: LinkTag,
) -> ExternResult<ValidateCallbackResult> {
    Ok(ValidateCallbackResult::Invalid(
        "CustodyTransferToCustodyTransfers links cannot be deleted".to_string(),
    ))
}
