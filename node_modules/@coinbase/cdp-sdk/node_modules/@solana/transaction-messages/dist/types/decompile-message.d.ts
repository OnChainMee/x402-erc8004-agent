import { AddressesByLookupTableAddress } from './addresses-by-lookup-table-address';
import { CompiledTransactionMessage, CompiledTransactionMessageWithLifetime } from './compile';
import { TransactionMessageWithFeePayer } from './fee-payer';
import { TransactionMessageWithLifetime } from './lifetime';
import { BaseTransactionMessage } from './transaction-message';
export type DecompileTransactionMessageConfig = {
    /**
     * If the compiled message loads addresses from one or more address lookup tables, you will have
     * to supply a map of those tables to an array of the addresses they contained at the time that
     * the transaction message was constructed.
     *
     * @see {@link decompileTransactionMessageFetchingLookupTables} if you do not already have this.
     */
    addressesByLookupTableAddress?: AddressesByLookupTableAddress;
    /**
     * If the compiled message has a blockhash-based lifetime constraint, you will have to supply
     * the block height after which that blockhash is no longer valid for use as a lifetime
     * constraint.
     */
    lastValidBlockHeight?: bigint;
};
/**
 * Converts the type of transaction message data structure appropriate for execution on the network
 * to the type of transaction message data structure designed for use in your application.
 *
 * Because compilation is a lossy process, you can not fully reconstruct a source message from a
 * compiled message without extra information. In order to faithfully reconstruct the original
 * source message you will need to supply supporting details about the lifetime constraint and the
 * concrete addresses of any accounts sourced from account lookup tables.
 *
 * @see {@link compileTransactionMessage}
 */
export declare function decompileTransactionMessage(compiledTransactionMessage: CompiledTransactionMessage & CompiledTransactionMessageWithLifetime, config?: DecompileTransactionMessageConfig): BaseTransactionMessage & TransactionMessageWithFeePayer & TransactionMessageWithLifetime;
//# sourceMappingURL=decompile-message.d.ts.map