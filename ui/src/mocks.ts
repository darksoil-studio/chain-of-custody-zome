import {
	ActionHash,
	AgentPubKey,
	AppClient,
	Delete,
	EntryHash,
	Link,
	NewEntryAction,
	Record,
	SignedActionHashed,
	decodeHashFromBase64,
	fakeActionHash,
	fakeAgentPubKey,
	fakeDnaHash,
	fakeEntryHash,
} from '@holochain/client';
import {
	AgentPubKeyMap,
	HashType,
	HoloHashMap,
	ZomeMock,
	decodeEntry,
	fakeCreateAction,
	fakeDeleteEntry,
	fakeEntry,
	fakeRecord,
	fakeUpdateEntry,
	hash,
	pickBy,
} from '@darksoil-studio/holochain-utils';

import { ChainOfCustodyClient } from './chain-of-custody-client.js';
import { CustodyTransfer } from './types.js';

export class ChainOfCustodyZomeMock extends ZomeMock implements AppClient {
	constructor(myPubKey?: AgentPubKey) {
		super(
			'chain_of_custody_test',
			'chain_of_custody',
			'chain_of_custody_test_app',
			myPubKey,
		);
	}

	/** Custody Transfer */
	custodyTransfers = new HoloHashMap<
		ActionHash,
		{
			deletes: Array<SignedActionHashed<Delete>>;
			revisions: Array<Record>;
		}
	>();
	custodyTransfersForResource = new HoloHashMap<ActionHash, Link[]>();
	custodyTransfersForCustodyTransfer = new HoloHashMap<ActionHash, Link[]>();

	async create_custody_transfer(
		custodyTransfer: CustodyTransfer,
	): Promise<Record> {
		const entryHash = hash(custodyTransfer, HashType.ENTRY);
		const record = await fakeRecord(
			await fakeCreateAction(entryHash),
			fakeEntry(custodyTransfer),
		);

		this.custodyTransfers.set(record.signed_action.hashed.hash, {
			deletes: [],
			revisions: [record],
		});

		const existingCustodiedResourceHash =
			this.custodyTransfersForResource.get(
				custodyTransfer.custodied_resource_hash,
			) || [];
		this.custodyTransfersForResource.set(
			custodyTransfer.custodied_resource_hash,
			[
				...existingCustodiedResourceHash,
				{
					base: custodyTransfer.custodied_resource_hash,
					target: record.signed_action.hashed.hash,
					author: this.myPubKey,
					timestamp: Date.now() * 1000,
					zome_index: 0,
					link_type: 0,
					tag: new Uint8Array(),
					create_link_hash: await fakeActionHash(),
				},
			],
		);
		if (custodyTransfer.previous_custody_transfer_hash) {
			const existingPreviousCustodyTransferHash =
				this.custodyTransfersForCustodyTransfer.get(
					custodyTransfer.previous_custody_transfer_hash,
				) || [];
			this.custodyTransfersForCustodyTransfer.set(
				custodyTransfer.previous_custody_transfer_hash,
				[
					...existingPreviousCustodyTransferHash,
					{
						base: custodyTransfer.previous_custody_transfer_hash,
						target: record.signed_action.hashed.hash,
						author: this.myPubKey,
						timestamp: Date.now() * 1000,
						zome_index: 0,
						link_type: 0,
						tag: new Uint8Array(),
						create_link_hash: await fakeActionHash(),
					},
				],
			);
		}

		return record;
	}

	async get_custody_transfer(
		custodyTransferHash: ActionHash,
	): Promise<Record | undefined> {
		const custodyTransfer = this.custodyTransfers.get(custodyTransferHash);
		return custodyTransfer ? custodyTransfer.revisions[0] : undefined;
	}

	async get_custody_transfers_for_resource(
		resourceHash: ActionHash,
	): Promise<Array<Link>> {
		return this.custodyTransfersForResource.get(resourceHash) || [];
	}

	async get_custody_transfers_for_custody_transfer(
		custodyTransferHash: EntryHash,
	): Promise<Array<Link>> {
		return (
			this.custodyTransfersForCustodyTransfer.get(custodyTransferHash) || []
		);
	}
}
