import { css, html, LitElement } from 'lit';
import { provide, consume } from '@lit/context';
import { customElement, property } from 'lit/decorators.js';
import { AppClient } from '@holochain/client';
import { appClientContext } from '@tnesh-stack/elements';

import { chainOfCustodyStoreContext } from '../context.js';
import { ChainOfCustodyStore } from '../chain-of-custody-store.js';
import { ChainOfCustodyClient } from '../chain-of-custody-client.js';

/**
 * @element chain-of-custody-context
 */
@customElement('chain-of-custody-context')
export class ChainOfCustodyContext extends LitElement {
  @consume({ context: appClientContext })
  private client!: AppClient;

  @provide({ context: chainOfCustodyStoreContext })
  @property({ type: Object })
  store!: ChainOfCustodyStore;

  @property()
  role!: string;

  @property()
  zome = 'chain_of_custody';

  connectedCallback() {
    super.connectedCallback();
    if (this.store) return;
    if (!this.role) {
      throw new Error(`<chain-of-custody-context> must have a role="YOUR_DNA_ROLE" property, eg: <chain-of-custody-context role="role1">`);
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

    this.store = new ChainOfCustodyStore(new ChainOfCustodyClient(this.client, this.role, this.zome));
  }
  
  render() {
    return html`<slot></slot>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

