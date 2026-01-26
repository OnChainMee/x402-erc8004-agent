import { FullySignedTransaction } from './signatures';
import { Transaction } from './transaction';
import { TransactionWithinSizeLimit } from './transaction-size';
/**
 * Helper type that includes all transaction types required
 * for the transaction to be sent to the network.
 *
 * @see {@link isSendableTransaction}
 * @see {@link assertIsSendableTransaction}
 */
export type SendableTransaction = FullySignedTransaction & TransactionWithinSizeLimit;
/**
 * Checks if a transaction has all the required
 * conditions to be sent to the network.
 *
 * @example
 * ```ts
 * import { isSendableTransaction } from '@solana/transactions';
 *
 * const transaction = getTransactionDecoder().decode(transactionBytes);
 * if (isSendableTransaction(transaction)) {
 *   // At this point we know that the transaction can be sent to the network.
 * }
 * ```
 *
 * @see {@link assertIsSendableTransaction}
 */
export declare function isSendableTransaction<TTransaction extends Transaction>(transaction: TTransaction): transaction is SendableTransaction & TTransaction;
/**
 * Asserts that a given transaction has all the
 * required conditions to be sent to the network.
 *
 * From time to time you might acquire a {@link Transaction}
 * from an untrusted network API or user input and you are not sure
 * that it has all the required conditions to be sent to the network
 * — such as being fully signed and within the size limit.
 * This function can be used to assert that such a transaction
 * is in fact sendable.
 *
 * @example
 * ```ts
 * import { assertIsSendableTransaction } from '@solana/transactions';
 *
 * const transaction = getTransactionDecoder().decode(transactionBytes);
 * try {
 *     // If this type assertion function doesn't throw, then Typescript will upcast `transaction`
 *     // to `SendableTransaction`.
 *     assertIsSendableTransaction(transaction);
 *     // At this point we know that the transaction can be sent to the network.
 *     await sendAndConfirmTransaction(transaction, { commitment: 'confirmed' });
 * } catch(e) {
 *     if (isSolanaError(e, SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING)) {
 *         setError(`Missing signatures for ${e.context.addresses.join(', ')}`);
 *     } else if (isSolanaError(e, SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT)) {
 *         setError(`Transaction exceeds size limit of ${e.context.transactionSizeLimit} bytes`);
 *     }
 *     throw;
 * }
 * ```
 */
export declare function assertIsSendableTransaction<TTransaction extends Transaction>(transaction: TTransaction): asserts transaction is SendableTransaction & TTransaction;
//# sourceMappingURL=sendable-transaction.d.ts.map