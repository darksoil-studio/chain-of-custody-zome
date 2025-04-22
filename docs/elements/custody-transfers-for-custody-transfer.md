
# `<custody-transfers-for-custody-transfer>`

## Usage

0. If you haven't already, [go through the setup for the module](/setup).

1. Import the `<custody-transfers-for-custody-transfer>` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/chain-of-custody/dist/elements/custody-transfers-for-custody-transfer.js'
```

2. Use it in the html side of your web-app like this:

::: code-group
```html [Lit]
<custody-transfers-for-custody-transfer .custodyTransferHash=${ custodyTransferHash }>
</custody-transfers-for-custody-transfer>
```

```html [React]
<custody-transfers-for-custody-transfer custodyTransferHash={ custodyTransferHash }>
</custody-transfers-for-custody-transfer>
```

```html [Angular]
<custody-transfers-for-custody-transfer [custodyTransferHash]="custodyTransferHash">
</custody-transfers-for-custody-transfer>
```

```html [Vue]
<custody-transfers-for-custody-transfer :custodyTransferHash="custodyTransferHash">
</custody-transfers-for-custody-transfer>
```

```html [Svelte]
<custody-transfers-for-custody-transfer custody-transfer-hash={encodeHashToBase64(custodyTransferHash)}>
</custody-transfers-for-custody-transfer>
```
:::

> [!WARNING]
> Like all the elements in this module, `<custody-transfers-for-custody-transfer>` needs to be placed inside an initialized `<chain-of-custody-context>`.

## Demo

Here is an interactive demo of the element:

<element-demo>
</element-demo>

<script setup>
import { onMounted } from "vue";
import { ProfilesClient, ProfilesStore } from '@darksoil-studio/profiles-zome';
import { demoProfiles, ProfilesZomeMock } from '@darksoil-studio/profiles-zome/dist/mocks.js';
import { decodeHashFromBase64, encodeHashToBase64 } from '@holochain/client';
import { render } from "lit";
import { html, unsafeStatic } from "lit/static-html.js";

import { ChainOfCustodyZomeMock, sampleCustodyTransfer } from "../../ui/src/mocks.ts";
import { ChainOfCustodyStore } from "../../ui/src/chain-of-custody-store.ts";
import { ChainOfCustodyClient } from "../../ui/src/chain-of-custody-client.ts";

onMounted(async () => {
  // Elements need to be imported on the client side, not the SSR side
  // Reference: https://vitepress.dev/guide/ssr-compat#importing-in-mounted-hook
  await import('@api-viewer/docs/lib/api-docs.js');
  await import('@api-viewer/demo/lib/api-demo.js');
  await import('@darksoil-studio/profiles-zome/dist/elements/profiles-context.js');
  if (!customElements.get('chain-of-custody-context')) await import('../../ui/src/elements/chain-of-custody-context.ts');
  if (!customElements.get('custody-transfers-for-custody-transfer')) await import('../../ui/src/elements/custody-transfers-for-custody-transfer.ts');

  const profiles = await demoProfiles();
  const myPubKey = Array.from(profiles.keys())[0];

  const profilesMock = new ProfilesZomeMock(profiles, myPubKey);
  const profilesStore = new ProfilesStore(new ProfilesClient(profilesMock, "chain_of_custody_test"));

  const mock = new ChainOfCustodyZomeMock();
  const client = new ChainOfCustodyClient(mock, "chain_of_custody_test");

  const custodyTransfer1 = await sampleCustodyTransfer(client);

  const record1 = await mock.create_custody_transfer(custodyTransfer1);

  const custodyTransfer2 = await sampleCustodyTransfer(client, {
    previous_custody_transfer_hash: record1.signed_action.hashed.hash
  });

  const record = await mock.create_custody_transfer(custodyTransfer2);

  const store = new ChainOfCustodyStore(client);
  
  render(html`
    <profiles-context .store=${profilesStore}>
      <chain-of-custody-context .store=${store}>
        <api-demo src="custom-elements.json" only="custody-transfers-for-custody-transfer" exclude-knobs="store">
          <template data-element="custody-transfers-for-custody-transfer" data-target="host">
            <custody-transfers-for-custody-transfer custody-transfer-hash=${unsafeStatic(encodeHashToBase64(custodyTransfer2.previous_custody_transfer_hash))}" ></custody-transfers-for-custody-transfer>
          </template>
        </api-demo>
      </chain-of-custody-context>
    </profiles-context>
  `, document.querySelector('element-demo'))
  })

</script>

## API Reference

`<custody-transfers-for-custody-transfer>` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="custody-transfers-for-custody-transfer">
</api-docs>
