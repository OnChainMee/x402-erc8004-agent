import { BaseTransactionMessage, TransactionMessageWithFeePayer } from '@solana/kit';
import { EstimateComputeUnitLimitFactoryFunction, EstimateComputeUnitLimitFactoryFunctionConfig } from './estimateComputeLimitInternal';
type EstimateAndUpdateProvisoryComputeUnitLimitFactoryFunction = <TTransactionMessage extends BaseTransactionMessage & TransactionMessageWithFeePayer>(transactionMessage: TTransactionMessage, config?: EstimateComputeUnitLimitFactoryFunctionConfig) => Promise<TTransactionMessage>;
/**
 * Given a transaction message, if it does not have an explicit compute unit limit,
 * estimates the compute unit limit and updates the transaction message with
 * the estimated limit. Otherwise, returns the transaction message unchanged.
 *
 * It requires a function that estimates the compute unit limit.
 *
 * @example
 * ```ts
 * const estimateAndUpdateCUs = estimateAndUpdateProvisoryComputeUnitLimitFactory(
 *     estimateComputeUnitLimitFactory({ rpc })
 * );
 *
 * const transactionMessageWithCUs = await estimateAndUpdateCUs(transactionMessage);
 * ```
 *
 * @see {@link estimateAndUpdateProvisoryComputeUnitLimitFactory}
 */
export declare function estimateAndUpdateProvisoryComputeUnitLimitFactory(estimateComputeUnitLimit: EstimateComputeUnitLimitFactoryFunction): EstimateAndUpdateProvisoryComputeUnitLimitFactoryFunction;
export {};
//# sourceMappingURL=estimateAndSetComputeLimit.d.ts.map