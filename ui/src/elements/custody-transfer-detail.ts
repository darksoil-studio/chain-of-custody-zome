import { ActionHash, EntryHash, Record } from "@holochain/client";
import { consume } from "@lit/context";
import { localized, msg } from "@lit/localize";
import { mdiAlertCircleOutline, mdiDelete, mdiPencil } from "@mdi/js";
import { hashProperty, notifyError, sharedStyles, wrapPathInSvg } from "@tnesh-stack/elements";
import { SignalWatcher } from "@tnesh-stack/signals";
import { EntryRecord } from "@tnesh-stack/utils";
import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import "@tnesh-stack/elements/dist/elements/display-error.js";
import "@shoelace-style/shoelace/dist/components/spinner/spinner.js";
import "@shoelace-style/shoelace/dist/components/card/card.js";
import "@shoelace-style/shoelace/dist/components/icon-button/icon-button.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import SlAlert from "@shoelace-style/shoelace/dist/components/alert/alert.js";

import "@shoelace-style/shoelace/dist/components/alert/alert.js";
import { ChainOfCustodyStore } from "../chain-of-custody-store.js";
import { chainOfCustodyStoreContext } from "../context.js";
import { CustodyTransfer } from "../types.js";

/**
 * @element custody-transfer-detail
 * @fires edit-clicked: fired when the user clicks the edit icon button
 * @fires custody-transfer-deleted: detail will contain { custodyTransferHash }
 */
@localized()
@customElement("custody-transfer-detail")
export class CustodyTransferDetail extends SignalWatcher(LitElement) {
  /**
   * REQUIRED. The hash of the CustodyTransfer to show
   */
  @property(hashProperty("custody-transfer-hash"))
  custodyTransferHash!: ActionHash;

  /**
   * @internal
   */
  @consume({ context: chainOfCustodyStoreContext, subscribe: true })
  chainOfCustodyStore!: ChainOfCustodyStore;

  renderDetail(entryRecord: EntryRecord<CustodyTransfer>) {
    return html`
      <sl-card style="flex: 1">
        <div class="column" style="gap: 16px; flex: 1;">
          <div class="row" style="gap: 8px">
            <span style="font-size: 18px; flex: 1;">${msg("Custody Transfer")}</span>

          </div>

          <div class="column" style="gap: 8px;">
	        <span><strong>${msg("Location")}</strong></span>
 	        <span style="white-space: pre-line">${entryRecord.entry.location}</span>
	  </div>

          <div class="column" style="gap: 8px;">
	        <span><strong>${msg("Notes")}</strong></span>
 	        <span style="white-space: pre-line">${entryRecord.entry.notes}</span>
	  </div>

      </div>
      </sl-card>
    `;
  }

  render() {
    const custodyTransfer = this.chainOfCustodyStore.custodyTransfers.get(this.custodyTransferHash).entry.get();

    switch (custodyTransfer.status) {
      case "pending":
        return html`<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; flex: 1;"
        >
          <sl-spinner style="font-size: 2rem;"></sl-spinner>
        </div>`;
      case "error":
        return html`<display-error
          .headline=${msg("Error fetching the custody transfer")}
          .error=${custodyTransfer.error}
        ></display-error>`;
      case "completed":
        return this.renderDetail(custodyTransfer.value);
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
