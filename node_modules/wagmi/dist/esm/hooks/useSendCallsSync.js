'use client';
import { useMutation } from '@tanstack/react-query';
import { sendCallsSyncMutationOptions, } from '@wagmi/core/query';
import { useConfig } from './useConfig.js';
/** https://wagmi.sh/react/api/hooks/useSendCallsSync */
export function useSendCallsSync(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    const mutationOptions = sendCallsSyncMutationOptions(config);
    const { mutate, mutateAsync, ...result } = useMutation({
        ...mutation,
        ...mutationOptions,
    });
    return {
        ...result,
        sendCallsSync: mutate,
        sendCallsSyncAsync: mutateAsync,
    };
}
//# sourceMappingURL=useSendCallsSync.js.map