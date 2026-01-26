import { Address } from '@solana/addresses';
import { AccountLookupMeta, AccountMeta, Instruction, ReadonlyAccount, ReadonlyAccountLookup, ReadonlySignerAccount, WritableAccount, WritableAccountLookup, WritableSignerAccount } from '@solana/instructions';
import { Brand } from '@solana/nominal-types';
export declare const enum AddressMapEntryType {
    FEE_PAYER = 0,
    LOOKUP_TABLE = 1,
    STATIC = 2
}
type AddressMap = {
    [address: string]: FeePayerAccountEntry | LookupTableAccountEntry | StaticAccountEntry;
};
type FeePayerAccountEntry = Omit<WritableSignerAccount, 'address'> & {
    [TYPE]: AddressMapEntryType.FEE_PAYER;
};
type LookupTableAccountEntry = Omit<ReadonlyAccountLookup | WritableAccountLookup, 'address'> & {
    [TYPE]: AddressMapEntryType.LOOKUP_TABLE;
};
export type OrderedAccounts = Brand<(AccountLookupMeta | AccountMeta)[], 'OrderedAccounts'>;
type StaticAccountEntry = Omit<ReadonlyAccount | ReadonlySignerAccount | WritableAccount | WritableSignerAccount, 'address'> & {
    [TYPE]: AddressMapEntryType.STATIC;
};
declare const TYPE: unique symbol;
export declare const ADDRESS_MAP_TYPE_PROPERTY: typeof TYPE;
export declare function getAddressMapFromInstructions(feePayer: Address, instructions: readonly Instruction[]): AddressMap;
export declare function getOrderedAccountsFromAddressMap(addressMap: AddressMap): OrderedAccounts;
export {};
//# sourceMappingURL=accounts.d.ts.map