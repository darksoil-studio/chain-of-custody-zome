# `<create-custody-transfer>`

## Usage

0. If you haven't already, [go through the setup for the module](/setup).

1. Import the `<create-custody-transfer>` element somewhere in the javascript side of your web-app like this:

```js
import '@darksoil-studio/chain-of-custody/dist/elements/create-custody-transfer.js'
```

2. Use it in the html side of your web-app like this:


::: code-group
```html [Lit]
<create-custody-transfer 
  .custodiedResourceHash=${ custodiedResourceHash }
  .imagesHashes=${[imagesHashes]}
  .previousCustodyTransferHash=${ previousCustodyTransferHash }
>
</create-custody-transfer>
```

```html [React]
<create-custody-transfer
  custodiedResourceHash={ custodiedResourceHash }
  imagesHashes={[imagesHashes]}
  previousCustodyTransferHash={ previousCustodyTransferHash }
>
</create-custody-transfer>
```

```html [Angular]
<create-custody-transfer
  [custodiedResourceHash]="custodiedResourceHash"
  [imagesHashes]="[imagesHashes]"
  [previousCustodyTransferHash]="previousCustodyTransferHash"
>
</create-custody-transfer>
```

```html [Vue]
<create-custody-transfer
  :custodiedResourceHash="custodiedResourceHash"
  :imagesHashes="[imagesHashes]"
  :previousCustodyTransferHash="previousCustodyTransferHash"
>
</create-custody-transfer>
```

```html [Svelte]
<create-custody-transfer
  custodied-resource-hash={encodeHashToBase64(custodiedResourceHash)}
  images-hashes={[encodeHashToBase64(imagesHashes)]}
  previous-custody-transfer-hash={encodeHashToBase64(previousCustodyTransferHash)}
>
</create-custody-transfer>
```
:::

> [!WARNING]
> Like all the elements in this module, `<create-custody-transfer>` needs to be placed inside an initialized `<chain-of-custody-context>`.

## Demo

Here is an interactive demo of the element:

<element-demo>
</element-demo>

<script setup>
import { onMounted } from "vue";
import { ProfilesClient, ProfilesStore } from '@darksoil-studio/profiles-zome';
import { demoProfiles, ProfilesZomeMock } from '@darksoil-studio/profiles-zome/dist/mocks.js';
import { decodeHashFromBase64 } from '@holochain/client';
import { render, html } from "lit";

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
  if (!customElements.get('create-custody-transfer')) await import('../../ui/src/elements/create-custody-transfer.ts');

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
        <api-demo src="custom-elements.json" only="create-custody-transfer" exclude-knobs="store">
        </api-demo>
      </chain-of-custody-context>
    </profiles-context>
  `, document.querySelector('element-demo'))
  })


</script>

## API Reference

`<create-custody-transfer>` is a [custom element](https://web.dev/articles/custom-elements-v1), which means that it can be used in any web app or website. Here is the reference for its API:

<api-docs src="custom-elements.json" only="create-custody-transfer">
</api-docs>
