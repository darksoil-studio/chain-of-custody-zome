# `<custody-transfer-summary>`

## Usage

0. If you haven't already, [go through the setup for the module](/setup).

1. Import the `<custody-transfer-summary>` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/chain-of-custody/dist/elements/custody-transfer-summary.js'
```

2. Use it in the html side of your web-app like this:

::: code-group
```html [Lit]
<custody-transfer-summary .custodyTransferHash=${ custodyTransferHash }>
</custody-transfer-summary>
```

```html [React]
<custody-transfer-summary custodyTransferHash={ custodyTransferHash }>
</custody-transfer-summary>
```

```html [Angular]
<custody-transfer-summary [custodyTransferHash]="custodyTransferHash">
</custody-transfer-summary>
```

```html [Vue]
<custody-transfer-summary :custodyTransferHash="custodyTransferHash">
</custody-transfer-summary>
```

```html [Svelte]
<custody-transfer-summary custody-transfer-hash={encodeHashToBase64(custodyTransferHash)}>
</custody-transfer-summary>
```
:::

> [!WARNING]
> Like all the elements in this module, `<custody-transfer-summary>` needs to be placed inside an initialized `<chain-of-custody-context>`.

## Demo

Here is an interactive demo of the element:

<element-demo>
</element-demo>

<script setup>
import { onMounted } from "vue";
import { ProfilesClient, ProfilesStore } from '@darksoil-studio/profiles-zome';
import { demoProfiles, ProfilesZomeMock } from '@darksoil-studio/profiles-zome/dist/mocks.js';
import { decodeHashFromBase64, encodeHashToBase64, fakeActionHash  } from '@holochain/client';
import { render } from "lit";
import { html, unsafeStatic } from "lit/static-html.js";

import { ChainOfCustodyZomeMock } from "../../ui/src/mocks.ts";
import { ChainOfCustodyStore } from "../../ui/src/chain-of-custody-store.ts";
import { ChainOfCustodyClient } from "../../ui/src/chain-of-custody-client.ts";

onMounted(async () => {
  // Elements need to be imported on the client side, not the SSR side
  // Reference: https://vitepress.dev/guide/ssr-compat#importing-in-mounted-hook
  await import('@api-viewer/docs/lib/api-docs.js');
  await import('@api-viewer/demo/lib/api-demo.js');
  await import('@darksoil-studio/profiles-zome/dist/elements/profiles-context.js');
  if (!customElements.get('chain-of-custody-context')) await import('../../ui/src/elements/chain-of-custody-context.ts');
  if (!customElements.get('custody-transfer-summary')) await import('../../ui/src/elements/custody-transfer-summary.ts');

  const profiles = await demoProfiles();

  const profilesMock = new ProfilesZomeMock(
    profiles,
    Array.from(profiles.keys())[0]
  );
  const profilesStore = new ProfilesStore(new ProfilesClient(profilesMock, "chain_of_custody_test"));

  const mock = new ChainOfCustodyZomeMock();
  const client = new ChainOfCustodyClient(mock, "chain_of_custody_test");

  const custodyTransfer = {
		current_custodian: Array.from(profiles.keys())[1],
		custodied_resource_hash: await fakeActionHash(),
		images_hashes: [],
		location: undefined,
		notes: undefined,
		previous_custody_transfer_hash: undefined,
  };

  const record = await mock.attempt_create_custody_transfer(custodyTransfer);

  const store = new ChainOfCustodyStore(client);
  
  render(html`
    <profiles-context .store=${profilesStore}>
      <chain-of-custody-context .store=${store}>
        <api-demo src="custom-elements.json" only="custody-transfer-summary" exclude-knobs="store">
          <template data-element="custody-transfer-summary" data-target="host">
            <custody-transfer-summary custodyTransfer-hash="${unsafeStatic(encodeHashToBase64(record.signed_action.hashed.hash))}"></custody-transfer-summary>
          </template>
        </api-demo>
      </chain-of-custody-context>
    </profiles-context>
  `, document.querySelector('element-demo'))
  })


</script>

## API Reference

`<custody-transfer-summary>` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="custody-transfer-summary">
</api-docs>
