import type { GetAccountInfoApi, GetSignatureStatusesApi, Rpc, SendTransactionApi } from '@solana/rpc';
import type { AccountNotificationsApi, RpcSubscriptions, SignatureNotificationsApi } from '@solana/rpc-subscriptions';
import { SendableTransaction, Transaction, TransactionWithDurableNonceLifetime } from '@solana/transactions';
import { sendAndConfirmDurableNonceTransaction_INTERNAL_ONLY_DO_NOT_EXPORT } from './send-transaction-internal';
type SendAndConfirmDurableNonceTransactionFunction = (transaction: SendableTransaction & Transaction & TransactionWithDurableNonceLifetime, config: Omit<Parameters<typeof sendAndConfirmDurableNonceTransaction_INTERNAL_ONLY_DO_NOT_EXPORT>[0], 'confirmDurableNonceTransaction' | 'rpc' | 'transaction'>) => Promise<void>;
type SendAndConfirmDurableNonceTransactionFactoryConfig<TCluster> = {
    /** An object that supports the {@link GetSignatureStatusesApi} and the {@link SendTransactionApi} of the Solana RPC API */
    rpc: Rpc<GetAccountInfoApi & GetSignatureStatusesApi & SendTransactionApi> & {
        '~cluster'?: TCluster;
    };
    /** An object that supports the {@link AccountNotificationsApi} and the {@link SignatureNotificationsApi} of the Solana RPC Subscriptions API */
    rpcSubscriptions: RpcSubscriptions<AccountNotificationsApi & SignatureNotificationsApi> & {
        '~cluster'?: TCluster;
    };
};
/**
 * Returns a function that you can call to send a nonce-based transaction to the network and to wait
 * until it has been confirmed.
 *
 * @param config
 *
 * @example
 * ```ts
 * import {
 *     isSolanaError,
 *     sendAndConfirmDurableNonceTransactionFactory,
 *     SOLANA_ERROR__INVALID_NONCE,
 *     SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND,
 * } from '@solana/kit';
 *
 * const sendAndConfirmNonceTransaction = sendAndConfirmDurableNonceTransactionFactory({ rpc, rpcSubscriptions });
 *
 * try {
 *     await sendAndConfirmNonceTransaction(transaction, { commitment: 'confirmed' });
 * } catch (e) {
 *     if (isSolanaError(e, SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND)) {
 *         console.error(
 *             'The lifetime specified by this transaction refers to a nonce account ' +
 *                 `\`${e.context.nonceAccountAddress}\` that does not exist`,
 *         );
 *     } else if (isSolanaError(e, SOLANA_ERROR__INVALID_NONCE)) {
 *         console.error('This transaction depends on a nonce that is no longer valid');
 *     } else {
 *         throw e;
 *     }
 * }
 * ```
 */
export declare function sendAndConfirmDurableNonceTransactionFactory({ rpc, rpcSubscriptions, }: SendAndConfirmDurableNonceTransactionFactoryConfig<'devnet'>): SendAndConfirmDurableNonceTransactionFunction;
export declare function sendAndConfirmDurableNonceTransactionFactory({ rpc, rpcSubscriptions, }: SendAndConfirmDurableNonceTransactionFactoryConfig<'testnet'>): SendAndConfirmDurableNonceTransactionFunction;
export declare function sendAndConfirmDurableNonceTransactionFactory({ rpc, rpcSubscriptions, }: SendAndConfirmDurableNonceTransactionFactoryConfig<'mainnet'>): SendAndConfirmDurableNonceTransactionFunction;
export {};
//# sourceMappingURL=send-and-confirm-durable-nonce-transaction.d.ts.map