import { CustodyTransfer } from "./types.js";

import { Resource } from "./types.js";

import {
  ActionHash,
  AgentPubKey,
  AppClient,
  decodeHashFromBase64,
  Delete,
  EntryHash,
  fakeActionHash,
  fakeAgentPubKey,
  fakeDnaHash,
  fakeEntryHash,
  Link,
  NewEntryAction,
  Record,
  SignedActionHashed,
} from "@holochain/client";
import {
  AgentPubKeyMap,
  decodeEntry,
  fakeCreateAction,
  fakeDeleteEntry,
  fakeEntry,
  fakeRecord,
  fakeUpdateEntry,
  hash,
  HashType,
  HoloHashMap,
  pickBy,
  ZomeMock,
} from "@tnesh-stack/utils";
import { ChainOfCustodyClient } from "./chain-of-custody-client.js";

export class ChainOfCustodyZomeMock extends ZomeMock implements AppClient {
  constructor(
    myPubKey?: AgentPubKey,
  ) {
    super("chain_of_custody_test", "chain_of_custody", "chain_of_custody_test_app", myPubKey);
  }
  /** Resource */
  resources = new HoloHashMap<ActionHash, {
    deletes: Array<SignedActionHashed<Delete>>;
    revisions: Array<Record>;
  }>();

  async create_resource(resource: Resource): Promise<Record> {
    const entryHash = hash(resource, HashType.ENTRY);
    const record = await fakeRecord(await fakeCreateAction(entryHash), fakeEntry(resource));

    this.resources.set(record.signed_action.hashed.hash, {
      deletes: [],
      revisions: [record],
    });

    return record;
  }

  async get_resource(resourceHash: ActionHash): Promise<Record | undefined> {
    const resource = this.resources.get(resourceHash);
    return resource ? resource.revisions[0] : undefined;
  }
  /** Custody Transfer */
  custodyTransfers = new HoloHashMap<ActionHash, {
    deletes: Array<SignedActionHashed<Delete>>;
    revisions: Array<Record>;
  }>();
  custodyTransfersForResource = new HoloHashMap<ActionHash, Link[]>();
  custodyTransfersForCustodyTransfer = new HoloHashMap<ActionHash, Link[]>();

  async create_custody_transfer(custodyTransfer: CustodyTransfer): Promise<Record> {
    const entryHash = hash(custodyTransfer, HashType.ENTRY);
    const record = await fakeRecord(await fakeCreateAction(entryHash), fakeEntry(custodyTransfer));

    this.custodyTransfers.set(record.signed_action.hashed.hash, {
      deletes: [],
      revisions: [record],
    });

    const existingCustodiedResourceHash = this.custodyTransfersForResource.get(custodyTransfer.custodied_resource_hash)
      || [];
    this.custodyTransfersForResource.set(custodyTransfer.custodied_resource_hash, [...existingCustodiedResourceHash, {
      base: custodyTransfer.custodied_resource_hash,
      target: record.signed_action.hashed.hash,
      author: this.myPubKey,
      timestamp: Date.now() * 1000,
      zome_index: 0,
      link_type: 0,
      tag: new Uint8Array(),
      create_link_hash: await fakeActionHash(),
    }]);
    if (custodyTransfer.previous_custody_transfer_hash) {
      const existingPreviousCustodyTransferHash =
        this.custodyTransfersForCustodyTransfer.get(custodyTransfer.previous_custody_transfer_hash) || [];
      this.custodyTransfersForCustodyTransfer.set(custodyTransfer.previous_custody_transfer_hash, [
        ...existingPreviousCustodyTransferHash,
        {
          base: custodyTransfer.previous_custody_transfer_hash,
          target: record.signed_action.hashed.hash,
          author: this.myPubKey,
          timestamp: Date.now() * 1000,
          zome_index: 0,
          link_type: 0,
          tag: new Uint8Array(),
          create_link_hash: await fakeActionHash(),
        },
      ]);
    }

    return record;
  }

  async get_custody_transfer(custodyTransferHash: ActionHash): Promise<Record | undefined> {
    const custodyTransfer = this.custodyTransfers.get(custodyTransferHash);
    return custodyTransfer ? custodyTransfer.revisions[0] : undefined;
  }

  async get_custody_transfers_for_resource(resourceHash: ActionHash): Promise<Array<Link>> {
    return this.custodyTransfersForResource.get(resourceHash) || [];
  }

  async get_custody_transfers_for_custody_transfer(custodyTransferHash: EntryHash): Promise<Array<Link>> {
    return this.custodyTransfersForCustodyTransfer.get(custodyTransferHash) || [];
  }
}

export async function sampleResource(
  client: ChainOfCustodyClient,
  partialResource: Partial<Resource> = {},
): Promise<Resource> {
  return {
    ...{
      name: "Lorem ipsum 2",
    },
    ...partialResource,
  };
}

export async function sampleCustodyTransfer(
  client: ChainOfCustodyClient,
  partialCustodyTransfer: Partial<CustodyTransfer> = {},
): Promise<CustodyTransfer> {
  return {
    ...{
      custodied_resource_hash: partialCustodyTransfer.custodied_resource_hash
        || (await client.createResource(await sampleResource(client))).actionHash,
      location: "Lorem ipsum 2",
      notes: "Lorem ipsum 2",
      images_hashes: [await fakeEntryHash()],
      previous_custody_transfer_hash: undefined,
    },
    ...partialCustodyTransfer,
  };
}
