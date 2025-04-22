import { assert, test } from "vitest";

import { ActionHash, Delete, Record, SignedActionHashed } from "@holochain/client";
import { dhtSync, runScenario } from "@holochain/tryorama";
import { decode } from "@msgpack/msgpack";
import { toPromise } from "@tnesh-stack/signals";
import { EntryRecord } from "@tnesh-stack/utils";
import { cleanNodeDecoding } from "@tnesh-stack/utils/dist/clean-node-decoding.js";

import { sampleCustodyTransfer } from "../../ui/src/mocks.js";
import { CustodyTransfer } from "../../ui/src/types.js";
import { setup } from "./setup.js";

test("create CustodyTransfer", async () => {
  await runScenario(async scenario => {
    const [alice, bob] = await setup(scenario);

    // Alice creates a CustodyTransfer
    const custodyTransfer: EntryRecord<CustodyTransfer> = await alice.store.client.createCustodyTransfer(
      await sampleCustodyTransfer(alice.store.client),
    );
    assert.ok(custodyTransfer);
  });
});

test("create and read CustodyTransfer", async () => {
  await runScenario(async scenario => {
    const [alice, bob] = await setup(scenario);

    const sample = await sampleCustodyTransfer(alice.store.client);

    // Alice creates a CustodyTransfer
    const custodyTransfer: EntryRecord<CustodyTransfer> = await alice.store.client.createCustodyTransfer(sample);
    assert.ok(custodyTransfer);

    // Wait for the created entry to be propagated to the other node.
    await dhtSync(
      [alice.player, bob.player],
      alice.player.cells[0].cell_id[0],
    );

    // Bob gets the created CustodyTransfer
    const createReadOutput: EntryRecord<CustodyTransfer> = await toPromise(
      bob.store.custodyTransfers.get(custodyTransfer.actionHash).entry,
    );
    assert.deepEqual(sample, cleanNodeDecoding(createReadOutput.entry));
  });
});
