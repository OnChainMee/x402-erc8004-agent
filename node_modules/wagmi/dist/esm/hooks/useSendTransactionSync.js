'use client';
import { useMutation } from '@tanstack/react-query';
import { sendTransactionSyncMutationOptions, } from '@wagmi/core/query';
import { useConfig } from './useConfig.js';
/** https://wagmi.sh/react/api/hooks/useSendTransactionSync */
export function useSendTransactionSync(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    const mutationOptions = sendTransactionSyncMutationOptions(config);
    const { mutate, mutateAsync, ...result } = useMutation({
        ...mutation,
        ...mutationOptions,
    });
    return {
        ...result,
        sendTransactionSync: mutate,
        sendTransactionSyncAsync: mutateAsync,
    };
}
//# sourceMappingURL=useSendTransactionSync.js.map