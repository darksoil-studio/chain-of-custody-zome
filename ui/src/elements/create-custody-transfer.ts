import { ActionHash, AgentPubKey, DnaHash, EntryHash, Record } from "@holochain/client";
import { consume } from "@lit/context";
import { localized, msg } from "@lit/localize";
import { mdiAlertCircleOutline, mdiDelete } from "@mdi/js";
import { hashProperty, hashState, notifyError, onSubmit, sharedStyles, wrapPathInSvg } from "@tnesh-stack/elements";
import { SignalWatcher } from "@tnesh-stack/signals";
import { EntryRecord } from "@tnesh-stack/utils";
import { html, LitElement } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

import "@shoelace-style/shoelace/dist/components/icon-button/icon-button.js";

import "@shoelace-style/shoelace/dist/components/textarea/textarea.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/alert/alert.js";
import "@tnesh-stack/elements/dist/elements/display-error.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@shoelace-style/shoelace/dist/components/card/card.js";
import SlAlert from "@shoelace-style/shoelace/dist/components/alert/alert.js";
import "@shoelace-style/shoelace/dist/components/input/input.js";
import { ChainOfCustodyStore } from "../chain-of-custody-store.js";
import { chainOfCustodyStoreContext } from "../context.js";
import { CustodyTransfer } from "../types.js";

/**
 * @element create-custody-transfer
 * @fires custody-transfer-created: detail will contain { custodyTransferHash }
 */
@localized()
@customElement("create-custody-transfer")
export class CreateCustodyTransfer extends SignalWatcher(LitElement) {
  /**
   * REQUIRED. The custodied resource hash for this CustodyTransfer
   */
  @property(hashProperty("custodied-resource-hash"))
  custodiedResourceHash!: ActionHash;

  /**
   * REQUIRED. The images hashes for this CustodyTransfer
   */
  @property()
  imagesHashes!: Array<EntryHash>;

  /**
   * OPTIONAl. The previous custody transfer hash for this CustodyTransfer
   */
  @property(hashProperty("previous-custody-transfer-hash"))
  previousCustodyTransferHash: EntryHash | undefined;

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
  @query("#create-form")
  form!: HTMLFormElement;

  async createCustodyTransfer(fields: Partial<CustodyTransfer>) {
    if (this.custodiedResourceHash === undefined) {
      throw new Error("Cannot create a new Custody Transfer without its custodied_resource_hash field");
    }
    if (this.imagesHashes === undefined) {
      throw new Error("Cannot create a new Custody Transfer without its images_hashes field");
    }

    const custodyTransfer: CustodyTransfer = {
      custodied_resource_hash: this.custodiedResourceHash!,
      location: fields.location ? fields.location : undefined,
      notes: fields.notes ? fields.notes : undefined,
      images_hashes: this.imagesHashes!,
      previous_custody_transfer_hash: this.previousCustodyTransferHash!,
    };

    try {
      this.committing = true;
      const record: EntryRecord<CustodyTransfer> = await this.chainOfCustodyStore.client.createCustodyTransfer(
        custodyTransfer,
      );

      this.dispatchEvent(
        new CustomEvent("custody-transfer-created", {
          composed: true,
          bubbles: true,
          detail: {
            custodyTransferHash: record.actionHash,
          },
        }),
      );

      this.form.reset();
    } catch (e: unknown) {
      console.error(e);
      notifyError(msg("Error creating the custody transfer"));
    }
    this.committing = false;
  }

  render() {
    return html`
      <sl-card style="flex: 1;">

        <form 
          id="create-form"
          class="column"
          style="flex: 1; gap: 16px;"
          ${onSubmit(fields => this.createCustodyTransfer(fields))}
        >  
          <span class="title">${msg("Create Custody Transfer")}</span>

          <sl-input name="location" .label=${msg("Location")} ></sl-input>
          <sl-textarea name="notes" .label=${msg("Notes")} ></sl-textarea>

          <sl-button
            variant="primary"
            type="submit"
            .loading=${this.committing}
          >${msg("Create Custody Transfer")}</sl-button>
        </form> 
      </sl-card>`;
  }

  static styles = [sharedStyles];
}
