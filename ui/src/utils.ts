import {
	AgentPubKey,
	CounterSigningSessionData,
	Entry,
	EntryContent,
	encodeHashToBase64,
} from '@holochain/client';
import { AsyncSignal, AsyncState, Signal } from '@darksoil-studio/holochain-signals';
import { CountersignedEntryRecord, EntryRecord } from '@darksoil-studio/holochain-utils';

import { CustodyTransfer } from './types';

export function lazyLoad<T>(task: () => Promise<T>): AsyncSignal<T> {
	const signal = new AsyncState<T>(
		{ status: 'pending' },
		{
			[Signal.subtle.watched]: () => {
				const request = () => {
					task()
						.then(value => {
							signal.set({
								status: 'completed',
								value,
							});
						})
						.catch(error => {
							signal.set({
								status: 'error',
								error,
							});
						});
				};
				// if (signal.get().status === 'error') {
				// signal.set({
				// 	status: 'pending',
				// });
				// }
				request();
			},
			[Signal.subtle.unwatched]: () => {
				// signal.set({
				//   status: "pending",
				// });
			},
		},
	);
	return signal;
}

export function getPreviousCustodian(
	custodyTransfer: CountersignedEntryRecord<CustodyTransfer>,
): AgentPubKey {
	const entry: Entry = (custodyTransfer.record.entry as { Present: Entry })
		.Present;
	const sessionData: CounterSigningSessionData = (
		entry as EntryContent<
			'CounterSign',
			[CounterSigningSessionData, Uint8Array]
		>
	).entry[0];
	const agents = sessionData.preflight_request.signing_agents.map(
		([agent, _]) => agent,
	);

	return agents.find(
		agent =>
			encodeHashToBase64(agent) !==
			encodeHashToBase64(custodyTransfer.entry.current_custodian),
	)!;
}
