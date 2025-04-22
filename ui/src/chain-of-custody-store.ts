import { ActionHash } from '@holochain/client';
import {
	immutableEntrySignal,
	liveLinksSignal,
	pipe,
} from '@tnesh-stack/signals';
import { MemoHoloHashMap } from '@tnesh-stack/utils';

import { ChainOfCustodyClient } from './chain-of-custody-client.js';

export class ChainOfCustodyStore {
	constructor(public client: ChainOfCustodyClient) {}

	/** Custody Transfer */
	custodyTransfersForResource = new MemoHoloHashMap(
		(custodyResourceHash: ActionHash) =>
			pipe(
				liveLinksSignal(
					this.client,
					custodyResourceHash,
					() => this.client.getCustodyTransfersForResource(custodyResourceHash),
					'ResourceToCustodyTransfers',
				),
				links => links.map(l => this.custodyTransfers.get(l.target)),
			),
	);

	custodyTransfers = new MemoHoloHashMap((custodyTransferHash: ActionHash) => ({
		custodyTransferHash,
		entry: immutableEntrySignal(() =>
			this.client.getCustodyTransfer(custodyTransferHash),
		),
		custodyTransfers: pipe(
			liveLinksSignal(
				this.client,
				custodyTransferHash,
				() =>
					this.client.getCustodyTransfersForCustodyTransfer(
						custodyTransferHash,
					),
				'CustodyTransferToCustodyTransfers',
			),
			links => links.map(l => l.target),
		),
	}));
}
