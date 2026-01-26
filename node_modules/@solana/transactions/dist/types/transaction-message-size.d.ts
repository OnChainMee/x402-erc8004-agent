import type { BaseTransactionMessage, TransactionMessageWithFeePayer, TransactionMessageWithinSizeLimit } from '@solana/transaction-messages';
/**
 * Gets the compiled transaction size of a given transaction message in bytes.
 *
 * @example
 * ```ts
 * const transactionSize = getTransactionMessageSize(transactionMessage);
 * ```
 */
export declare function getTransactionMessageSize(transactionMessage: BaseTransactionMessage & TransactionMessageWithFeePayer): number;
/**
 * Checks if a transaction message is within the size limit
 * when compiled into a transaction.
 *
 * @typeParam TTransactionMessage - The type of the given transaction message.
 *
 * @example
 * ```ts
 * if (isTransactionMessageWithinSizeLimit(transactionMessage)) {
 *    transactionMessage satisfies TransactionMessageWithinSizeLimit;
 * }
 * ```
 */
export declare function isTransactionMessageWithinSizeLimit<TTransactionMessage extends BaseTransactionMessage & TransactionMessageWithFeePayer>(transactionMessage: TTransactionMessage): transactionMessage is TransactionMessageWithinSizeLimit & TTransactionMessage;
/**
 * Asserts that a given transaction message is within the size limit
 * when compiled into a transaction.
 *
 * Throws a {@link SolanaError} of code {@link SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT}
 * if the transaction message exceeds the size limit.
 *
 * @typeParam TTransactionMessage - The type of the given transaction message.
 *
 * @example
 * ```ts
 * assertIsTransactionMessageWithinSizeLimit(transactionMessage);
 * transactionMessage satisfies TransactionMessageWithinSizeLimit;
 * ```
 */
export declare function assertIsTransactionMessageWithinSizeLimit<TTransactionMessage extends BaseTransactionMessage & TransactionMessageWithFeePayer>(transactionMessage: TTransactionMessage): asserts transactionMessage is TransactionMessageWithinSizeLimit & TTransactionMessage;
//# sourceMappingURL=transaction-message-size.d.ts.map