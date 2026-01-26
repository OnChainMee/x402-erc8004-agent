import { Address } from '@solana/addresses';
import { BaseTransactionMessage } from './transaction-message';
/**
 * Represents a transaction message for which a fee payer has been declared. A transaction must
 * conform to this type to be compiled and landed on the network.
 */
export interface TransactionMessageWithFeePayer<TAddress extends string = string> {
    readonly feePayer: Readonly<{
        address: Address<TAddress>;
    }>;
}
/**
 * A helper type to exclude the fee payer from a transaction message.
 */
type ExcludeTransactionMessageFeePayer<TTransactionMessage extends BaseTransactionMessage> = Omit<TTransactionMessage, 'feePayer'>;
/**
 * Given a base58-encoded address of a system account, this method will return a new transaction
 * message having the same type as the one supplied plus the {@link TransactionMessageWithFeePayer}
 * type.
 *
 * @example
 * ```ts
 * import { address } from '@solana/addresses';
 * import { setTransactionMessageFeePayer } from '@solana/transaction-messages';
 *
 * const myAddress = address('mpngsFd4tmbUfzDYJayjKZwZcaR7aWb2793J6grLsGu');
 * const txPaidByMe = setTransactionMessageFeePayer(myAddress, tx);
 * ```
 */
export declare function setTransactionMessageFeePayer<TFeePayerAddress extends string, TTransactionMessage extends BaseTransactionMessage & Partial<TransactionMessageWithFeePayer>>(feePayer: Address<TFeePayerAddress>, transactionMessage: TTransactionMessage): ExcludeTransactionMessageFeePayer<TTransactionMessage> & TransactionMessageWithFeePayer<TFeePayerAddress>;
export {};
//# sourceMappingURL=fee-payer.d.ts.map