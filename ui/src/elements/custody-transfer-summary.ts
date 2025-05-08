import {
	ActionHash,
	CounterSigningSessionData,
	EntryHash,
	Record,
} from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import { hashProperty, sharedStyles } from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/display-error.js';
import { SignalWatcher } from '@darksoil-studio/holochain-signals';
import { CountersignedEntryRecord, EntryRecord } from '@darksoil-studio/holochain-utils';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { ChainOfCustodyStore } from '../chain-of-custody-store.js';
import { chainOfCustodyStoreContext } from '../context.js';
import { CustodyTransfer } from '../types.js';

/**
 * @element custody-transfer-summary
 * @fires custody-transfer-selected: detail will contain { custodyTransferHash }
 */
@localized()
@customElement('custody-transfer-summary')
export class CustodyTransferSummary extends SignalWatcher(LitElement) {
	/**
	 * REQUIRED. The hash of the CustodyTransfer to show
	 */
	@property(hashProperty('custody-transfer-hash'))
	custodyTransferHash!: ActionHash;

	/**
	 * @internal
	 */
	@consume({ context: chainOfCustodyStoreContext, subscribe: true })
	chainOfCustodyStore!: ChainOfCustodyStore;

	renderSummary(custodyTransfer: CountersignedEntryRecord<CustodyTransfer>) {
		return html`
			<div class="column" style="gap: 16px; flex: 1;">
				<div class="column" style="gap: 8px">
					<span><strong>${msg('Location')}</strong></span>
					<span style="white-space: pre-line"
						>${custodyTransfer.entry.location}</span
					>
				</div>

				<div class="column" style="gap: 8px">
					<span><strong>${msg('Notes')}</strong></span>
					<span style="white-space: pre-line"
						>${custodyTransfer.entry.notes}</span
					>
				</div>
			</div>
		`;
	}

	renderCustodyTransfer() {
		const custodyTransfer = this.chainOfCustodyStore.custodyTransfers
			.get(this.custodyTransferHash)
			.entry.get();

		switch (custodyTransfer.status) {
			case 'pending':
				return html`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching the custody transfer')}
					.error=${custodyTransfer.error}
				></display-error>`;
			case 'completed':
				return this.renderSummary(custodyTransfer.value!);
		}
	}

	render() {
		return html`<sl-card
			style="flex: 1; cursor: grab;"
			@click=${() =>
				this.dispatchEvent(
					new CustomEvent('custody-transfer-selected', {
						composed: true,
						bubbles: true,
						detail: {
							custodyTransferHash: this.custodyTransferHash,
						},
					}),
				)}
		>
			${this.renderCustodyTransfer()}
		</sl-card>`;
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
