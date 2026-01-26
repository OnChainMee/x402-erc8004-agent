import type { NominalType } from '@solana/nominal-types';
import type { BaseTransactionMessage, TransactionMessageWithinSizeLimit } from '@solana/transaction-messages';
import { Transaction } from './transaction';
/**
 * The maximum size of a transaction packet in bytes.
 */
export declare const TRANSACTION_PACKET_SIZE = 1280;
/**
 * The size of the transaction packet header in bytes.
 * This includes the IPv6 header and the fragment header.
 */
export declare const TRANSACTION_PACKET_HEADER: number;
/**
 * The maximum size of a transaction in bytes.
 *
 * Note that this excludes the transaction packet header.
 * In other words, this is how much content we can fit in a transaction packet.
 */
export declare const TRANSACTION_SIZE_LIMIT: number;
/**
 * Gets the size of a given transaction in bytes.
 *
 * @example
 * ```ts
 * const transactionSize = getTransactionSize(transaction);
 * ```
 */
export declare function getTransactionSize(transaction: Transaction): number;
/**
 * A type guard that checks if a transaction is within the size limit.
 */
export type TransactionWithinSizeLimit = NominalType<'transactionSize', 'withinLimit'>;
/**
 * Helper type that adds the `TransactionWithinSizeLimit` flag to
 * a transaction if and only if the provided transaction message
 * is also within the size limit.
 */
export type SetTransactionWithinSizeLimitFromTransactionMessage<TTransaction extends Transaction, TTransactionMessage extends BaseTransactionMessage> = TTransactionMessage extends TransactionMessageWithinSizeLimit ? TransactionWithinSizeLimit & TTransaction : TTransaction;
/**
 * Checks if a transaction is within the size limit.
 *
 * @typeParam TTransaction - The type of the given transaction.
 *
 * @example
 * ```ts
 * if (isTransactionWithinSizeLimit(transaction)) {
 *    transaction satisfies TransactionWithinSizeLimit;
 * }
 * ```
 */
export declare function isTransactionWithinSizeLimit<TTransaction extends Transaction>(transaction: TTransaction): transaction is TransactionWithinSizeLimit & TTransaction;
/**
 * Asserts that a given transaction is within the size limit.
 *
 * Throws a {@link SolanaError} of code {@link SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT}
 * if the transaction exceeds the size limit.
 *
 * @typeParam TTransaction - The type of the given transaction.
 *
 * @example
 * ```ts
 * assertIsTransactionWithinSizeLimit(transaction);
 * transaction satisfies TransactionWithinSizeLimit;
 * ```
 */
export declare function assertIsTransactionWithinSizeLimit<TTransaction extends Transaction>(transaction: TTransaction): asserts transaction is TransactionWithinSizeLimit & TTransaction;
//# sourceMappingURL=transaction-size.d.ts.map