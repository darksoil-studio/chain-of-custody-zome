import { createContext } from '@lit/context';
import { ChainOfCustodyStore } from './chain-of-custody-store.js';

export const chainOfCustodyStoreContext = createContext<ChainOfCustodyStore>(
  'chain_of_custody/store'
);

