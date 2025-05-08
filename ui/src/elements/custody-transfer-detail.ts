import '@darksoil-studio/file-storage-zome/dist/elements/show-image.js';
import '@darksoil-studio/profiles-provider/dist/elements/profile-list-item.js';
import {
	ActionHash,
	CounterSigningSessionData,
	EntryHash,
	Record,
	encodeHashToBase64,
} from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import {
	mdiAlertCircleOutline,
	mdiArrowRightThick,
	mdiCalendarToday,
	mdiDelete,
	mdiMapMarker,
	mdiPencil,
	mdiTimeline,
} from '@mdi/js';
import SlAlert from '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/format-date/format-date.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import {
	hashProperty,
	notifyError,
	sharedStyles,
	wrapPathInSvg,
} from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/display-error.js';
import { SignalWatcher } from '@darksoil-studio/holochain-signals';
import { CountersignedEntryRecord, EntryRecord } from '@darksoil-studio/holochain-utils';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { ChainOfCustodyStore } from '../chain-of-custody-store.js';
import { chainOfCustodyStoreContext } from '../context.js';
import { CustodyTransfer } from '../types.js';
import { getPreviousCustodian } from '../utils.js';

/**
 * @element custody-transfer-detail
 * @fires edit-clicked: fired when the user clicks the edit icon button
 * @fires custody-transfer-deleted: detail will contain { custodyTransferHash }
 */
@localized()
@customElement('custody-transfer-detail')
export class CustodyTransferDetail extends SignalWatcher(LitElement) {
	/**
	 * REQUIRED. The hash of the CustodyTransfer to show
	 */
	@property(hashProperty('custody-transfer-hash'))
	custodyTransferHash!: EntryHash;

	/**
	 * @internal
	 */
	@consume({ context: chainOfCustodyStoreContext, subscribe: true })
	chainOfCustodyStore!: ChainOfCustodyStore;

	renderDetail(custodyTransfer: CountersignedEntryRecord<CustodyTransfer>) {
		return html`
			<div class="column" style="gap: 16px;">
				<div class="row" style="gap: 8px; align-items: center">
					<profile-list-item
						.agentPubKey=${getPreviousCustodian(custodyTransfer)}
					>
					</profile-list-item>
					<sl-icon .src=${wrapPathInSvg(mdiArrowRightThick)}> </sl-icon>
					<profile-list-item
						.agentPubKey=${custodyTransfer.entry.current_custodian}
					>
					</profile-list-item>
				</div>

				<div class="column" style="gap: 8px;">
					<div class="row" style="gap: 8px;">
						<sl-icon .src=${wrapPathInSvg(mdiCalendarToday)}> </sl-icon>
						<strong>${msg('Date')}</strong>
					</div>
					<sl-format-date
						.date=${custodyTransfer.action.timestamp}
						month="long"
						day="numeric"
						year="numeric"
						hour="numeric"
						minute="numeric"
					>
					</sl-format-date>
				</div>

				<div class="column" style="gap: 8px;">
					<div class="row" style="gap: 8px;">
						<sl-icon .src=${wrapPathInSvg(mdiMapMarker)}> </sl-icon>
						<strong>${msg('Location')}</strong>
					</div>
					${custodyTransfer.entry.location
						? html`
								<span style="white-space: pre-line"
									>${custodyTransfer.entry.location}</span
								>
							`
						: html`<span class="placeholder">${msg('No location.')}</span>`}
				</div>

				${custodyTransfer.entry.notes
					? html`
							<div class="column" style="gap: 8px;">
								<strong>${msg('Notes')}</strong>
								<span style="white-space: pre-line"
									>${custodyTransfer.entry.notes}</span
								>
							</div>
						`
					: html``}
				${custodyTransfer.entry.images_hashes.length > 0
					? html`
							<div class="column" style="gap: 8px">
								<strong>${msg('Images')}</strong>
								<div class="row" style="gap: 8px">
									${custodyTransfer.entry.images_hashes.map(
										imageHash =>
											html`<show-image
												style="width: 200px; height: 200px"
												.imageHash=${imageHash}
											></show-image>`,
									)}
								</div>
							</div>
						`
					: html``}
			</div>
		`;
	}

	render() {
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
				return this.renderDetail(custodyTransfer.value!);
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
