import type { Config, ResolvedRegister, SendCallsSyncErrorType } from '@wagmi/core';
import type { Compute } from '@wagmi/core/internal';
import { type SendCallsSyncData, type SendCallsSyncMutate, type SendCallsSyncMutateAsync, type SendCallsSyncVariables } from '@wagmi/core/query';
import type { ConfigParameter } from '../types/properties.js';
import type { UseMutationParameters, UseMutationReturnType } from '../utils/query.js';
export type UseSendCallsSyncParameters<config extends Config = Config, context = unknown> = Compute<ConfigParameter<config> & {
    mutation?: UseMutationParameters<SendCallsSyncData, SendCallsSyncErrorType, SendCallsSyncVariables<config, config['chains'][number]['id']>, context> | undefined;
}>;
export type UseSendCallsSyncReturnType<config extends Config = Config, context = unknown> = Compute<UseMutationReturnType<SendCallsSyncData, SendCallsSyncErrorType, SendCallsSyncVariables<config, config['chains'][number]['id']>, context> & {
    sendCallsSync: SendCallsSyncMutate<config, context>;
    sendCallsSyncAsync: SendCallsSyncMutateAsync<config, context>;
}>;
/** https://wagmi.sh/react/api/hooks/useSendCallsSync */
export declare function useSendCallsSync<config extends Config = ResolvedRegister['config'], context = unknown>(parameters?: UseSendCallsSyncParameters<config, context>): UseSendCallsSyncReturnType<config, context>;
//# sourceMappingURL=useSendCallsSync.d.ts.map