import '@darksoil-studio/file-storage-zome/dist/elements/show-image.js';
import '@darksoil-studio/profiles-provider/dist/elements/profile-list-item.js';
import { AgentPubKey, AppClient } from '@holochain/client';
import { consume, provide } from '@lit/context';
import { msg } from '@lit/localize';
import { mdiMapMarker } from '@mdi/js';
import { SlButton } from '@shoelace-style/shoelace';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import {
	appClientContext,
	notifyError,
	sharedStyles,
	wrapPathInSvg,
} from '@tnesh-stack/elements';
import { SignalWatcher } from '@tnesh-stack/signals';
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { ChainOfCustodyClient } from '../chain-of-custody-client.js';
import { ChainOfCustodyStore } from '../chain-of-custody-store.js';
import { chainOfCustodyStoreContext } from '../context.js';
import { CustodyTransfer } from '../types.js';

/**
 * @element chain-of-custody-context
 */
@customElement('chain-of-custody-context')
export class ChainOfCustodyContext extends SignalWatcher(LitElement) {
	@consume({ context: appClientContext })
	private client!: AppClient;

	@provide({ context: chainOfCustodyStoreContext })
	@property({ type: Object })
	store!: ChainOfCustodyStore;

	@property()
	role!: string;

	@property()
	zome = 'chain_of_custody';

	@state()
	requestedCustodyTransfer: [AgentPubKey, CustodyTransfer] | undefined;

	connectedCallback() {
		super.connectedCallback();
		if (this.store) return;
		if (!this.role) {
			throw new Error(
				`<chain-of-custody-context> must have a role="YOUR_DNA_ROLE" property, eg: <chain-of-custody-context role="role1">`,
			);
		}
		if (!this.client) {
			throw new Error(`<chain-of-custody-context> must either:
        a) be placed inside <app-client-context>
          or 
        b) receive an AppClient property (eg. <chain-of-custody-context .client=\${client}>) 
          or 
        c) receive a store property (eg. <chain-of-custody-context .store=\${store}>)
      `);
		}

		const client = new ChainOfCustodyClient(this.client, this.role, this.zome);
		this.store = new ChainOfCustodyStore(client);

		client.onSignal(signal => {
			if (signal.type !== 'NewCustodyTransferRequest') return;
			this.requestedCustodyTransfer = [
				signal.recipient,
				signal.custody_transfer,
			];
		});
	}

	renderDialog(
		recipient: AgentPubKey,
		requestedCustodyTransfer: CustodyTransfer,
	) {
		return html`
			<sl-dialog
				open
				.label=${msg('Custody Transfer Request')}
				@sl-hide=${() => {
					this.requestedCustodyTransfer = undefined;
				}}
			>
				<div class="column" style="gap: 16px">
					<span>${msg('You have received a custody request from:')} </span>

					<profile-list-item .agentPubKey=${recipient}> </profile-list-item>

					<div class="column" style="gap: 8px;">
						<div class="row" style="gap: 8px;">
							<sl-icon .src=${wrapPathInSvg(mdiMapMarker)}> </sl-icon>
							<strong>${msg('Location')}</strong>
						</div>
						${requestedCustodyTransfer.location
							? html`
									<span style="white-space: pre-line"
										>${requestedCustodyTransfer.location}</span
									>
								`
							: html`<span class="placeholder">${msg('No location.')}</span>`}
					</div>

					<div class="column" style="gap: 8px;">
						<strong>${msg('Notes')}</strong>
						${requestedCustodyTransfer.notes
							? html`
									<span style="white-space: pre-line"
										>${requestedCustodyTransfer.notes}</span
									>
								`
							: html`<span class="placeholder">${msg('No notes.')}</span>`}
					</div>

					<div class="column" style="gap: 8px">
						<strong>${msg('Images')}</strong>
						<div class="row" style="gap: 8px">
							${requestedCustodyTransfer.images_hashes.length > 0
								? requestedCustodyTransfer.images_hashes.map(
										imageHash =>
											html`<show-image
												style="width: 200px; height: 200px"
												.imageHash=${imageHash}
											></show-image>`,
									)
								: html`<span class="placeholder">${msg('No images.')}</span>`}
						</div>
					</div>
				</div>

				<sl-button
					slot="footer"
					@click=${() => {
						this.requestedCustodyTransfer = undefined;
					}}
					>${msg('Cancel')}
				</sl-button>

				<sl-button
					slot="footer"
					variant="primary"
					@click=${async (e: CustomEvent) => {
						const button = e.target as SlButton;
						button.loading = true;
						try {
							await this.store.client.attemptCreateCustodyTransfer(
								recipient,
								requestedCustodyTransfer,
							);
							this.requestedCustodyTransfer = undefined;
						} catch (e) {
							console.error(e);
							notifyError(msg('Failed to create custody transfer.'));
						}
						button.loading = false;
					}}
					>${msg('Transfer Custody')}
				</sl-button>
			</sl-dialog>
		`;
	}

	render() {
		return html`<slot></slot>
			${this.requestedCustodyTransfer
				? this.renderDialog(
						this.requestedCustodyTransfer[0],
						this.requestedCustodyTransfer[1],
					)
				: html``} `;
	}

	static styles = [
		css`
			:host {
				display: contents;
			}
		`,
		sharedStyles,
	];
}
