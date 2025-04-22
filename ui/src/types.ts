import {
	ActionHash,
	AgentPubKey,
	Create,
	CreateLink,
	Delete,
	DeleteLink,
	DnaHash,
	EntryHash,
	Record,
	SignedActionHashed,
	Update,
} from '@holochain/client';
import { ActionCommittedSignal } from '@tnesh-stack/utils';

export type ChainOfCustodySignal =
	| ActionCommittedSignal<EntryTypes, LinkTypes>
	| {
			type: 'NewCustodyTransferRequest';
			custody_transfer: CustodyTransfer;
			recipient: AgentPubKey;
	  };

export type EntryTypes = { type: 'CustodyTransfer' } & CustodyTransfer;

export type LinkTypes = string;

export interface CustodyTransfer {
	current_custodian: AgentPubKey;

	custodied_resource_hash: ActionHash;

	location: string | undefined;

	notes: string | undefined;

	images_hashes: Array<EntryHash>;

	previous_custody_transfer_hash: EntryHash | undefined;
}
