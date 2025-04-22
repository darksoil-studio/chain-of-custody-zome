import {
	ActionHash,
	AgentPubKey,
	AppClient,
	CreateLink,
	Delete,
	DeleteLink,
	EntryHash,
	Link,
	Record,
	SignedActionHashed,
} from '@holochain/client';
import { EntryRecord, ZomeClient } from '@tnesh-stack/utils';

import { CustodyTransfer } from './types.js';
import { Resource } from './types.js';
import { ChainOfCustodySignal } from './types.js';

export class ChainOfCustodyClient extends ZomeClient<ChainOfCustodySignal> {
	constructor(
		public client: AppClient,
		public roleName: string,
		public zomeName = 'chain_of_custody',
	) {
		super(client, roleName, zomeName);
	}

	/** Custody Transfer */

	async createCustodyTransfer(
		custodyTransfer: CustodyTransfer,
	): Promise<EntryRecord<CustodyTransfer>> {
		const record: Record = await this.callZome(
			'create_custody_transfer',
			custodyTransfer,
		);
		return new EntryRecord(record);
	}

	async getCustodyTransfer(
		custodyTransferHash: ActionHash,
	): Promise<EntryRecord<CustodyTransfer> | undefined> {
		const record: Record = await this.callZome(
			'get_custody_transfer',
			custodyTransferHash,
		);
		return record ? new EntryRecord(record) : undefined;
	}

	async getCustodyTransfersForResource(
		resourceHash: ActionHash,
	): Promise<Array<Link>> {
		return this.callZome('get_custody_transfers_for_resource', resourceHash);
	}

	async getCustodyTransfersForCustodyTransfer(
		custodyTransferHash: EntryHash,
	): Promise<Array<Link>> {
		return this.callZome(
			'get_custody_transfers_for_custody_transfer',
			custodyTransferHash,
		);
	}
}
