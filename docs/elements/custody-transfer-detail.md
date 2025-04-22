# `<custody-transfer-detail>`

## Usage

0. If you haven't already, [go through the setup for the module](/setup).

1. Import the `<custody-transfer-detail>` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/chain-of-custody/dist/elements/custody-transfer-detail.js'
```

2. Use it in the html side of your web-app like this:

::: code-group
```html [Lit]
<custody-transfer-detail .custodyTransferHash=${ custodyTransferHash }>
</custody-transfer-detail>
```

```html [React]
<custody-transfer-detail custodyTransferHash={ custodyTransferHash }>
</custody-transfer-detail>
```

```html [Angular]
<custody-transfer-detail [custodyTransferHash]="custodyTransferHash">
</custody-transfer-detail>
```

```html [Vue]
<custody-transfer-detail :custodyTransferHash="custodyTransferHash">
</custody-transfer-detail>
```

```html [Svelte]
<custody-transfer-detail custody-transfer-hash={encodeHashToBase64(custodyTransferHash)}>
</custody-transfer-detail>
```
:::


> [!WARNING]
> Like all the elements in this module, `<custody-transfer-detail>` needs to be placed inside an initialized `<chain-of-custody-context>`.

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
  if (!customElements.get('custody-transfer-detail')) await import('../../ui/src/elements/custody-transfer-detail.ts');

  const profiles = await demoProfiles();

  const profilesMock = new ProfilesZomeMock(
    profiles,
    Array.from(profiles.keys())[0]
  );
  const profilesStore = new ProfilesStore(new ProfilesClient(profilesMock, "chain_of_custody_test"));

  const mock = new ChainOfCustodyZomeMock();
  const client = new ChainOfCustodyClient(mock, "chain_of_custody_test");

  const custodyTransfer = await sampleCustodyTransfer(client);

  const record = await mock.create_custody_transfer(custodyTransfer);

  const store = new ChainOfCustodyStore(client);
  
  render(html`
    <profiles-context .store=${profilesStore}>
      <chain-of-custody-context .store=${store}>
        <api-demo src="custom-elements.json" only="custody-transfer-detail" exclude-knobs="store">
          <template data-element="custody-transfer-detail" data-target="host">
            <custody-transfer-detail custody-transfer-hash="${unsafeStatic(encodeHashToBase64(record.signed_action.hashed.hash))}"></custody-transfer-detail>
          </template>
        </api-demo>
      </chain-of-custody-context>
    </profiles-context>
  `, document.querySelector('element-demo'))
  })


</script>

## API Reference

`<custody-transfer-detail>` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="custody-transfer-detail">
</api-docs>
