import { 
  SignedActionHashed,
  CreateLink,
  Link,
  DeleteLink,
  Delete,
  AppClient, 
  Record, 
  ActionHash, 
  EntryHash, 
  AgentPubKey,
} from '@holochain/client';
import { EntryRecord, ZomeClient } from '@tnesh-stack/utils';

import { ChainOfCustodySignal } from './types.js';

export class ChainOfCustodyClient extends ZomeClient<ChainOfCustodySignal> {

  constructor(public client: AppClient, public roleName: string, public zomeName = 'chain_of_custody') {
    super(client, roleName, zomeName);
  }
}
