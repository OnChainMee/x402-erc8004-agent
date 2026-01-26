import { OrderedAccounts } from '../compile/accounts';
type MessageHeader = Readonly<{
    /**
     * The number of accounts in the static accounts list that are neither writable nor
     * signers.
     *
     * Adding this number to `numSignerAccounts` yields the index of the first read-only non-signer
     * account in the static accounts list.
     */
    numReadonlyNonSignerAccounts: number;
    /**
     * The number of read-only accounts in the static accounts list that must sign this
     * transaction.
     *
     * Subtracting this number from `numSignerAccounts` yields the index of the first read-only
     * signer account in the static accounts list.
     */
    numReadonlySignerAccounts: number;
    /**
     * The number of accounts in the static accounts list that must sign this transaction.
     *
     * Subtracting `numReadonlySignerAccounts` from this number yields the number of
     * writable signer accounts in the static accounts list. Writable signer accounts always
     * begin at index zero in the static accounts list.
     *
     * This number itself is the index of the first non-signer account in the static
     * accounts list.
     */
    numSignerAccounts: number;
}>;
export declare function getCompiledMessageHeader(orderedAccounts: OrderedAccounts): MessageHeader;
export {};
//# sourceMappingURL=header.d.ts.map