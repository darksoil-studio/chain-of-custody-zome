import {
	ActionHash,
	Delete,
	Record,
	SignedActionHashed,
	encodeHashToBase64,
} from '@holochain/client';
import { dhtSync, runScenario } from '@holochain/tryorama';
import { decode } from '@msgpack/msgpack';
import { toPromise } from '@darksoil-studio/holochain-signals';
import { EntryRecord } from '@darksoil-studio/holochain-utils';
import { cleanNodeDecoding } from '@darksoil-studio/holochain-utils/dist/clean-node-decoding.js';
import { assert, test } from 'vitest';

import { CustodyTransfer } from '../../ui/src/types.js';
import { setup } from './setup.js';

test('create and read CustodyTransfer', async () => {
	await runScenario(async scenario => {
		const [alice, bob] = await setup(scenario);

		const state = await alice.player.conductor.adminWs().dumpState({
			cell_id: alice.player.cells[0].cell_id,
		});
		const records: any[] = state[0].source_chain_dump.records;

		const lastRecord = records[records.length - 1];

		const custodyTransfer: CustodyTransfer = {
			current_custodian: bob.player.agentPubKey,
			custodied_resource_hash: lastRecord.action_address,
			images_hashes: [],
			location: undefined,
			notes: undefined,
			previous_custody_transfer_hash: undefined,
		};

		// Alice creates a CustodyTransfer
		const custodyTransferRecord: EntryRecord<CustodyTransfer> =
			await alice.store.client.attemptCreateCustodyTransfer(custodyTransfer);
		assert.ok(custodyTransferRecord);

		// Wait for the created entry to be propagated to the other node.
		await dhtSync([alice.player, bob.player], alice.player.cells[0].cell_id[0]);

		// Bob gets the created CustodyTransfer
		const createReadOutput: EntryRecord<CustodyTransfer> = await toPromise(
			bob.store.custodyTransfers.get(custodyTransferRecord.entryHash).entry,
		);
		assert.equal(
			encodeHashToBase64(custodyTransfer.current_custodian),
			encodeHashToBase64(createReadOutput.entry.current_custodian),
		);
		assert.equal(
			encodeHashToBase64(custodyTransfer.custodied_resource_hash),
			encodeHashToBase64(createReadOutput.entry.custodied_resource_hash),
		);
	});
});
