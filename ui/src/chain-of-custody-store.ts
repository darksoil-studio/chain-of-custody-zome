import { 
  collectionSignal, 
  liveLinksSignal, 
  deletedLinksSignal, 
  allRevisionsOfEntrySignal,
  latestVersionOfEntrySignal, 
  immutableEntrySignal, 
  deletesForEntrySignal, 
  AsyncComputed,
  pipe,
} from "@tnesh-stack/signals";
import { slice, HashType, retype, EntryRecord, MemoHoloHashMap } from "@tnesh-stack/utils";
import { NewEntryAction, Record, ActionHash, EntryHash, AgentPubKey } from '@holochain/client';

import { ChainOfCustodyClient } from './chain-of-custody-client.js';

export class ChainOfCustodyStore {

  constructor(public client: ChainOfCustodyClient) {}
  
}
