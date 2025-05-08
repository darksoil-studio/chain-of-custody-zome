import { ActionHash } from '@holochain/client';
import { msg } from '@lit/localize';
import {
	AsyncComputed,
	AsyncSignal,
	immutableEntrySignal,
	liveLinksSignal,
	mapCompleted,
	pipe,
	uniquify,
} from '@darksoil-studio/holochain-signals';
import { CountersignedEntryRecord, MemoHoloHashMap } from '@darksoil-studio/holochain-utils';

import { ChainOfCustodyClient } from './chain-of-custody-client.js';
import { CustodyTransfer } from './types.js';
import { lazyLoad } from './utils.js';

export class ChainOfCustodyStore {
	constructor(public client: ChainOfCustodyClient) {}

	currentCustodian = new MemoHoloHashMap(
		(custodiedResourceHash: ActionHash) =>
			new AsyncComputed(() => {
				const custodyTransfers = this.custodyTransfersForResource
					.get(custodiedResourceHash)
					.get();
				if (custodyTransfers.status !== 'completed') return custodyTransfers;

				if (custodyTransfers.value.length > 0) {
					const lastCustodyTransfer =
						custodyTransfers.value[
							custodyTransfers.value.length - 1
						].entry.get();
					if (lastCustodyTransfer.status !== 'completed')
						return lastCustodyTransfer;

					return {
						status: 'completed',
						value: lastCustodyTransfer.value!.entry.current_custodian,
					};
				} else {
					const custodiedResource = this.custodiedResourceRecord
						.get(custodiedResourceHash)
						.get();
					if (custodiedResource.status !== 'completed')
						return custodiedResource;
					if (!custodiedResource) {
						return {
							status: 'error',
							error: msg('Failed to find custodied resource.'),
						};
					}
					return {
						status: 'completed',
						value: custodiedResource.value.action.author,
					};
				}
			}),
	);

	private custodiedResourceRecord = new MemoHoloHashMap(
		(custodiedResourceHash: ActionHash) =>
			immutableEntrySignal(() =>
				this.client.getCustodiedResource(custodiedResourceHash),
			),
	);

	/** Custody Transfer */
	custodyTransfersForResource = new MemoHoloHashMap(
		(custodyResourceHash: ActionHash) =>
			mapCompleted(
				liveLinksSignal(
					this.client,
					custodyResourceHash,
					() => this.client.getCustodyTransfersForResource(custodyResourceHash),
					'ResourceToCustodyTransfers',
					3000,
				),
				links =>
					uniquify(links.map(l => l.target)).map(t =>
						this.custodyTransfers.get(t),
					),
			),
	);

	custodyTransfers = new MemoHoloHashMap((custodyTransferHash: ActionHash) => ({
		custodyTransferHash,
		entry: lazyLoad(() => this.client.getCustodyTransfer(custodyTransferHash)),
		custodyTransfers: mapCompleted(
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
