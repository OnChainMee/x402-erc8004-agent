import { Address } from '@solana/addresses';
import { OrderedAccounts } from '../compile/accounts';
type AddressTableLookup = Readonly<{
    /** The address of the address lookup table account. */
    lookupTableAddress: Address;
    /** Indexes of accounts in a lookup table to load as read-only. */
    readonlyIndexes: readonly number[];
    /** Indexes of accounts in a lookup table to load as writable. */
    writableIndexes: readonly number[];
}>;
export declare function getCompiledAddressTableLookups(orderedAccounts: OrderedAccounts): AddressTableLookup[];
export {};
//# sourceMappingURL=address-table-lookups.d.ts.map