use hdk::prelude::*;

use chain_of_custody_integrity::*;

pub fn _get_author(preflight_response: &PreflightResponse) -> ExternResult<AgentPubKey> {
    let author_index = preflight_response.agent_state().agent_index().clone() as usize;
    let author = preflight_response
        .request()
        .signing_agents
        .get(author_index)
        .ok_or(wasm_error!(WasmErrorInner::Guest(String::from(
            "Malformed preflight response",
        ))))?
        .0
        .clone();

    Ok(author)
}
