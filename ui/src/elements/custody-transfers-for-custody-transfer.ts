import { ActionHash, AgentPubKey, EntryHash, Record } from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import { mdiInformationOutline } from '@mdi/js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import {
	hashProperty,
	sharedStyles,
	wrapPathInSvg,
} from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/display-error.js';
import { AsyncComputed, SignalWatcher } from '@darksoil-studio/holochain-signals';
import { EntryRecord, slice } from '@darksoil-studio/holochain-utils';
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { ChainOfCustodyStore } from '../chain-of-custody-store.js';
import { chainOfCustodyStoreContext } from '../context.js';
import { CustodyTransfer } from '../types.js';
import './custody-transfer-summary.js';

/**
 * @element custody-transfers-for-custody-transfer
 */
@localized()
@customElement('custody-transfers-for-custody-transfer')
export class CustodyTransfersForCustodyTransfer extends SignalWatcher(
	LitElement,
) {
	/**
	 * REQUIRED. The CustodyTransferHash for which the CustodyTransfers should be fetched
	 */
	@property(hashProperty('custody-transfer-hash'))
	custodyTransferHash!: EntryHash;

	/**
	 * @internal
	 */
	@consume({ context: chainOfCustodyStoreContext, subscribe: true })
	chainOfCustodyStore!: ChainOfCustodyStore;

	renderList(hashes: Array<ActionHash>) {
		if (hashes.length === 0) {
			return html` <div
				class="column placeholder center-content"
				style="gap: 8px; flex: 1"
			>
				<sl-icon
					style="font-size: 64px;"
					.src=${wrapPathInSvg(mdiInformationOutline)}
				></sl-icon>
				<span style="text-align: center"
					>${msg('No custody transfers found for this custody transfer.')}</span
				>
			</div>`;
		}

		return html`
			<div class="column" style="gap: 8px">
				${hashes.map(
					hash =>
						html`<custody-transfer-summary
							.custodyTransferHash=${hash}
						></custody-transfer-summary>`,
				)}
			</div>
		`;
	}

	render() {
		const hashes = this.chainOfCustodyStore.custodyTransfers
			.get(this.custodyTransferHash)
			.custodyTransfers.get();

		switch (hashes.status) {
			case 'pending':
				return html`<div
					style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
				>
					<sl-spinner style="font-size: 2rem;"></sl-spinner>
				</div>`;
			case 'error':
				return html`<display-error
					.headline=${msg('Error fetching the custody transfers')}
					.error=${hashes.error}
				></display-error>`;
			case 'completed':
				return this.renderList(hashes.value);
		}
	}

	static styles = [sharedStyles];
}
