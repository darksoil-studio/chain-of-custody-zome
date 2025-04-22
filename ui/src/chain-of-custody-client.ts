import {
	ActionHash,
	AgentPubKey,
	AppClient,
	CounterSigningSessionData,
	CreateLink,
	Delete,
	DeleteLink,
	Entry,
	EntryHash,
	Link,
	Record,
	SignedActionHashed,
} from '@holochain/client';
import { EntryDetails } from '@tnesh-stack/core-types';
import {
	CountersignedEntryRecord,
	EntryRecord,
	ZomeClient,
} from '@tnesh-stack/utils';

import { CustodyTransfer } from './types.js';
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

	async sendCustodyTransferRequest(
		currentCustodiant: AgentPubKey,
		custodyTransfer: CustodyTransfer,
	): Promise<EntryRecord<CustodyTransfer>> {
		const record: Record = await this.callZome(
			'send_custody_transfer_request',
			{
				current_custodiant: currentCustodiant,
				custody_transfer: custodyTransfer,
			},
		);
		return new EntryRecord(record);
	}

	async getCustodiedResource(
		custodiedResourceHash: ActionHash,
	): Promise<EntryRecord<unknown> | undefined> {
		const record: Record | undefined = await this.callZome(
			'get_custodied_resource',
			custodiedResourceHash,
		);
		return record ? new EntryRecord(record) : undefined;
	}

	async attemptCreateCustodyTransfer(
		recipient: AgentPubKey,
		custodyTransfer: CustodyTransfer,
	): Promise<CountersignedEntryRecord<CustodyTransfer>> {
		const record: Record = await this.callZome(
			'attempt_create_custody_transfer',
			{
				recipient,
				custody_transfer: custodyTransfer,
			},
		);
		return new CountersignedEntryRecord(record);
	}

	async getCustodyTransfer(
		custodyTransferHash: EntryHash,
	): Promise<CountersignedEntryRecord<CustodyTransfer> | undefined> {
		const record = await this.callZome(
			'get_custody_transfer',
			custodyTransferHash,
		);

		return record ? new CountersignedEntryRecord(record) : undefined;
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
