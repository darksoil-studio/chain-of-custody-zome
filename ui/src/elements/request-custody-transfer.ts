import '@darksoil-studio/file-storage-zome/dist/elements/upload-files.js';
import {
	ActionHash,
	AgentPubKey,
	CounterSigningSessionData,
	DnaHash,
	EntryHash,
	Record,
} from '@holochain/client';
import { consume } from '@lit/context';
import { localized, msg } from '@lit/localize';
import { mdiAlertCircleOutline, mdiDelete } from '@mdi/js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import {
	hashProperty,
	hashState,
	notify,
	notifyError,
	onSubmit,
	sharedStyles,
	wrapPathInSvg,
} from '@darksoil-studio/holochain-elements';
import '@darksoil-studio/holochain-elements/dist/elements/display-error.js';
import {
	SignalWatcher,
	joinAsync,
	pipe,
	toPromise,
} from '@darksoil-studio/holochain-signals';
import { CountersignedEntryRecord, EntryRecord } from '@darksoil-studio/holochain-utils';
import { LitElement, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { ChainOfCustodyStore } from '../chain-of-custody-store.js';
import { chainOfCustodyStoreContext } from '../context.js';
import { CustodyTransfer } from '../types.js';

/**
 * @element request-custody-transfer
 * @fires custody-transfer-created: detail will contain { custodyTransferHash }
 */
@localized()
@customElement('request-custody-transfer')
export class RequestCustodyTransfer extends SignalWatcher(LitElement) {
	/**
	 * REQUIRED. The custodied resource hash for this CustodyTransfer
	 */
	@property(hashProperty('custodied-resource-hash'))
	custodiedResourceHash!: ActionHash;

	/**
	 * @internal
	 */
	@consume({ context: chainOfCustodyStoreContext, subscribe: true })
	chainOfCustodyStore!: ChainOfCustodyStore;

	/**
	 * @internal
	 */
	@state()
	committing = false;

	/**
	 * @internal
	 */
	@query('#create-form')
	form!: HTMLFormElement;

	async sendCustodyTransferRequest(
		custodyTransfers: Array<EntryRecord<CustodyTransfer>>,
		fields: Partial<CustodyTransfer>,
	) {
		if (this.custodiedResourceHash === undefined) {
			throw new Error(
				'Cannot create a new Custody Transfer without its custodied_resource_hash field',
			);
		}

		const lastCustodyTransfer = custodyTransfers[custodyTransfers.length - 1];
		const previous_custody_transfer_hash = lastCustodyTransfer
			? lastCustodyTransfer.entryHash
			: undefined;

		const custodyTransfer: CustodyTransfer = {
			current_custodian: this.chainOfCustodyStore.client.client.myPubKey,
			custodied_resource_hash: this.custodiedResourceHash!,
			location: fields.location ? fields.location : undefined,
			notes: fields.notes ? fields.notes : undefined,
			images_hashes: Array.isArray(fields.images_hashes)
				? fields.images_hashes
				: fields.images_hashes
					? [fields.images_hashes]
					: [],
			previous_custody_transfer_hash,
		};

		try {
			this.committing = true;

			const currentCustodiant = await toPromise(
				this.chainOfCustodyStore.currentCustodian.get(
					this.custodiedResourceHash,
				),
			);
			await this.chainOfCustodyStore.client.sendCustodyTransferRequest(
				currentCustodiant,
				custodyTransfer,
			);

			notify(msg('Custody transfer request sent.'));

			this.form.reset();
		} catch (e: unknown) {
			console.error(e);
			notifyError(msg('Error requesting custody transfer.'));
		}
		this.committing = false;
	}

	renderForm(custodyTransfers: Array<EntryRecord<CustodyTransfer>>) {
		return html` <sl-card style="flex: 1;">
			<form
				id="create-form"
				class="column"
				style="flex: 1; gap: 16px;"
				${onSubmit(fields =>
					this.sendCustodyTransferRequest(custodyTransfers, fields),
				)}
			>
				<span class="title">${msg('Request Custody Transfer')}</span>

				<sl-input name="location" .label=${msg('Location')}></sl-input>
				<sl-textarea name="notes" .label=${msg('Notes')}></sl-textarea>

				<div class="column" style="gap: 8px">
					<span>${msg('Images')}</span>

					<upload-files
						name="images_hashes"
						.label=${msg('')}
						accepted-files="image/jpeg,image/png,image/gif"
					>
					</upload-files>
				</div>

				<sl-button variant="primary" type="submit" .loading=${this.committing}
					>${msg('Send Custody Transfer Request')}</sl-button
				>
			</form>
		</sl-card>`;
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
					.headline=${msg('Error fetching the custody transfers.')}
					.error=${map.error}
				></display-error>`;
			case 'completed':
				return this.renderForm(map.value.filter(v => !!v));
		}
	}
	static styles = [sharedStyles];
}
