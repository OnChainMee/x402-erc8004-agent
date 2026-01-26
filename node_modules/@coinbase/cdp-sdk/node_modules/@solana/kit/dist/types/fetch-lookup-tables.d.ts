import { type FetchAccountsConfig } from '@solana/accounts';
import type { Address } from '@solana/addresses';
import type { GetMultipleAccountsApi, Rpc } from '@solana/rpc';
import { type AddressesByLookupTableAddress } from '@solana/transaction-messages';
/**
 * Given a list of addresses belonging to address lookup tables, returns a map of lookup table
 * addresses to an ordered array of the addresses they contain.
 *
 * @param rpc An object that supports the {@link GetMultipleAccountsApi} of the Solana RPC API
 * @param config
 */
export declare function fetchAddressesForLookupTables(lookupTableAddresses: Address[], rpc: Rpc<GetMultipleAccountsApi>, config?: FetchAccountsConfig): Promise<AddressesByLookupTableAddress>;
//# sourceMappingURL=fetch-lookup-tables.d.ts.map