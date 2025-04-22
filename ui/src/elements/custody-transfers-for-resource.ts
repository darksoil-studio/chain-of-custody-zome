import '@darksoil-studio/profiles-provider/dist/elements/profile-list-item.js';
import {
	ActionHash,
	AgentPubKey,
	CounterSigningSessionData,
	EntryHash,
	Record,
	encodeHashToBase64,
} from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import {
	mdiArrowRight,
	mdiArrowRightThick,
	mdiInformationOutline,
	mdiTransfer,
	mdiTrashCan,
} from '@mdi/js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import {
	hashProperty,
	sharedStyles,
	wrapPathInSvg,
} from '@tnesh-stack/elements';
import '@tnesh-stack/elements/dist/elements/display-error.js';
import {
	AsyncComputed,
	SignalWatcher,
	joinAsync,
	joinAsyncMap,
	mapCompleted,
	pipe,
} from '@tnesh-stack/signals';
import {
	CountersignedEntryRecord,
	EntryRecord,
	mapValues,
	slice,
} from '@tnesh-stack/utils';
import '@ui5/webcomponents-fiori/dist/Timeline.js';
import '@ui5/webcomponents-fiori/dist/TimelineGroupItem.js';
import '@ui5/webcomponents-fiori/dist/TimelineItem.js';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { ChainOfCustodyStore } from '../chain-of-custody-store.js';
import { chainOfCustodyStoreContext } from '../context.js';
import { CustodyTransfer } from '../types.js';
import { getPreviousCustodian } from '../utils.js';
import './custody-transfer-summary.js';

/**
 * @element custody-transfers-for-resource
 */
@localized()
@customElement('custody-transfers-for-resource')
export class CustodyTransfersForResource extends SignalWatcher(LitElement) {
	/**
	 * REQUIRED. The ResourceHash for which the CustodyTransfers should be fetched
	 */
	@property(hashProperty('custodied-resource-hash'))
	custodiedResourceHash!: ActionHash;

	/**
	 * @internal
	 */
	@consume({ context: chainOfCustodyStoreContext, subscribe: true })
	chainOfCustodyStore!: ChainOfCustodyStore;

	renderList(transfers: Array<EntryRecord<CustodyTransfer>>) {
		if (transfers.length === 0) {
			return html` <div
				class="column placeholder center-content"
				style="gap: 8px; flex: 1"
			>
				<sl-icon
					style="font-size: 64px;"
					.src=${wrapPathInSvg(mdiInformationOutline)}
				></sl-icon>
				<span style="text-align: center"
					>${msg('No custody transfers found for this resource.')}</span
				>
			</div>`;
		}

		return html`
			<ui5-timeline style="flex: 1">
				${transfers.map(
					transfer => html`
						<ui5-timeline-item
							@click=${() =>
								this.dispatchEvent(
									new CustomEvent('custody-transfer-selected', {
										bubbles: true,
										composed: true,
										detail: {
											transfer,
										},
									}),
								)}
							.titleText=${new Date(
								transfer.action.timestamp,
							).toLocaleDateString()}
						>
							<div class="row" style="gap: 8px; align-items: center">
								<profile-list-item
									.agentPubKey=${getPreviousCustodian(transfer)}
								>
								</profile-list-item>
								<sl-icon .src=${wrapPathInSvg(mdiArrowRightThick)}> </sl-icon>
								<profile-list-item
									.agentPubKey=${transfer.entry.current_custodian}
								>
								</profile-list-item>
							</div>
						</ui5-timeline-item>
					`,
				)}
			</ui5-timeline>
		`;
	}

	render() {
		const map = pipe(
			this.chainOfCustodyStore.custodyTransfersForResource.get(
				this.custodiedResourceHash,
			),
			custodyTransfers => joinAsync(custodyTransfers.map(t => t.entry.get())),
		).get();

		switch (map.status) {
			case 'pending':
				return html`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching the custody transfers')}
					.error=${map.error}
				></display-error>`;
			case 'completed':
				return this.renderList(map.value.filter(c => !!c));
		}
	}

	static styles = [
		sharedStyles,
		css`
			:host {
				display: flex;
			}
		`,
	];
}
