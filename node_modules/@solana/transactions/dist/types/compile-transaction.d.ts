import { BaseTransactionMessage, TransactionMessageWithFeePayer } from '@solana/transaction-messages';
import type { TransactionFromTransactionMessage } from './transaction';
/**
 * Returns a {@link Transaction} object for a given {@link TransactionMessage}.
 *
 * This includes the compiled bytes of the transaction message, and a map of signatures. This map
 * will have a key for each address that is required to sign the transaction. The transaction will
 * not yet have signatures for any of these addresses.
 *
 * Whether a transaction message is ready to be compiled or not is enforced for you at the type
 * level. In order to be signable, a transaction message must:
 *
 * - have a version and a list of zero or more instructions (ie. conform to
 *   {@link BaseTransactionMessage})
 * - have a fee payer set (ie. conform to {@link TransactionMessageWithFeePayer})
 * - have a lifetime specified (ie. conform to {@link TransactionMessageWithBlockhashLifetime} or
 *   {@link TransactionMessageWithDurableNonceLifetime})
 */
export declare function compileTransaction<TTransactionMessage extends BaseTransactionMessage & TransactionMessageWithFeePayer>(transactionMessage: TTransactionMessage): Readonly<TransactionFromTransactionMessage<TTransactionMessage>>;
//# sourceMappingURL=compile-transaction.d.ts.map