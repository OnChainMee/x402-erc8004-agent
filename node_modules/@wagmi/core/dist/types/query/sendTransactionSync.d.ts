import type { MutateOptions } from '@tanstack/query-core';
import { type SendTransactionSyncErrorType, type SendTransactionSyncParameters, type SendTransactionSyncReturnType } from '../actions/sendTransactionSync.js';
import type { Config } from '../createConfig.js';
import type { Compute } from '../types/utils.js';
export declare function sendTransactionSyncMutationOptions<config extends Config>(config: config): {
    readonly mutationFn: (variables: SendTransactionSyncVariables<config, config["chains"][number]["id"]>) => Promise<import("viem").TransactionReceipt>;
    readonly mutationKey: readonly ["sendTransactionSync"];
};
export type SendTransactionSyncData = Compute<SendTransactionSyncReturnType>;
export type SendTransactionSyncVariables<config extends Config, chainId extends config['chains'][number]['id']> = SendTransactionSyncParameters<config, chainId>;
export type SendTransactionSyncMutate<config extends Config, context = unknown> = <chainId extends config['chains'][number]['id']>(variables: SendTransactionSyncVariables<config, chainId>, options?: Compute<MutateOptions<SendTransactionSyncData, SendTransactionSyncErrorType, Compute<SendTransactionSyncVariables<config, chainId>>, context>> | undefined) => void;
export type SendTransactionSyncMutateAsync<config extends Config, context = unknown> = <chainId extends config['chains'][number]['id']>(variables: SendTransactionSyncVariables<config, chainId>, options?: Compute<MutateOptions<SendTransactionSyncData, SendTransactionSyncErrorType, Compute<SendTransactionSyncVariables<config, chainId>>, context>> | undefined) => Promise<SendTransactionSyncData>;
//# sourceMappingURL=sendTransactionSync.d.ts.map