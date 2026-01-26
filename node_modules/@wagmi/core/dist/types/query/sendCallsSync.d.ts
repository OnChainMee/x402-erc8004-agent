import type { MutateOptions } from '@tanstack/query-core';
import { type SendCallsSyncErrorType, type SendCallsSyncParameters, type SendCallsSyncReturnType } from '../actions/sendCallsSync.js';
import type { Config } from '../createConfig.js';
import type { Compute } from '../types/utils.js';
export declare function sendCallsSyncMutationOptions<config extends Config>(config: config): {
    readonly mutationFn: (variables: SendCallsSyncVariables<config, config["chains"][number]["id"], readonly unknown[]>) => Promise<{
        chainId: number;
        id: string;
        version: string;
        atomic: boolean;
        capabilities?: {
            [key: string]: any;
        } | {
            [x: string]: any;
        } | undefined;
        receipts?: import("viem").WalletCallReceipt<bigint, "success" | "reverted">[] | undefined;
        statusCode: number;
        status: "pending" | "success" | "failure" | undefined;
    }>;
    readonly mutationKey: readonly ["sendCallsSync"];
};
export type SendCallsSyncData = Compute<SendCallsSyncReturnType>;
export type SendCallsSyncVariables<config extends Config, chainId extends config['chains'][number]['id'], calls extends readonly unknown[] = readonly unknown[]> = SendCallsSyncParameters<config, chainId, calls>;
export type SendCallsSyncMutate<config extends Config, context = unknown> = <const calls extends readonly unknown[], chainId extends config['chains'][number]['id']>(variables: SendCallsSyncVariables<config, chainId, calls>, options?: Compute<MutateOptions<SendCallsSyncData, SendCallsSyncErrorType, Compute<SendCallsSyncVariables<config, chainId, calls>>, context>> | undefined) => void;
export type SendCallsSyncMutateAsync<config extends Config, context = unknown> = <const calls extends readonly unknown[], chainId extends config['chains'][number]['id']>(variables: SendCallsSyncVariables<config, chainId, calls>, options?: Compute<MutateOptions<SendCallsSyncData, SendCallsSyncErrorType, Compute<SendCallsSyncVariables<config, chainId, calls>>, context>> | undefined) => Promise<SendCallsSyncData>;
//# sourceMappingURL=sendCallsSync.d.ts.map