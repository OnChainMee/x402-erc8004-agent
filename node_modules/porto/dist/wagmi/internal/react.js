'use client';
import { skipToken, useMutation, useQuery, useQueryClient, } from '@tanstack/react-query';
import { useEffect, useMemo, useRef } from 'react';
import { useAccount, useChainId, useConfig, } from 'wagmi';
import { addFunds, connect, disconnect, getAdmins, getAssets, getPermissions, grantAdmin, grantPermissions, revokeAdmin, revokePermissions, upgradeAccount, verifyEmail, } from './core.js';
import { getAdminsQueryKey, getAssetsQueryKey, getPermissionsQueryKey, } from './query.js';
export function useAddFunds(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    return useMutation({
        ...mutation,
        async mutationFn(variables) {
            return addFunds(config, variables);
        },
        mutationKey: ['addFunds'],
    });
}
export function useAdmins(parameters = {}) {
    const { query = {}, ...rest } = parameters;
    const config = useConfig(rest);
    const queryClient = useQueryClient();
    const chainId = useChainId({ config });
    const { address, connector, status } = useAccount();
    const activeConnector = parameters.connector ?? connector;
    const enabled = Boolean((status === 'connected' ||
        (status === 'reconnecting' && activeConnector?.getProvider)) &&
        (query.enabled ?? true));
    const queryKey = useMemo(() => getAdminsQueryKey({
        address,
        chainId: parameters.chainId ?? chainId,
        connector: activeConnector,
    }), [address, chainId, parameters.chainId, activeConnector]);
    const provider = useRef(undefined);
    // biome-ignore lint/correctness/useExhaustiveDependencies: `queryKey` not required
    useEffect(() => {
        if (!activeConnector)
            return;
        void (async () => {
            provider.current ??=
                (await activeConnector.getProvider?.());
            provider.current?.on('message', (event) => {
                if (event.type !== 'adminsChanged')
                    return;
                queryClient.invalidateQueries({ queryKey });
            });
        })();
    }, [address, activeConnector, queryClient]);
    return useQuery({
        ...query,
        enabled,
        gcTime: 0,
        queryFn: activeConnector
            ? async (context) => {
                const { connectorUid: _, ...options } = context.queryKey[1];
                provider.current ??=
                    (await activeConnector.getProvider());
                return await getAdmins(config, {
                    ...options,
                    connector: activeConnector,
                });
            }
            : skipToken,
        queryKey,
        staleTime: Number.POSITIVE_INFINITY,
    });
}
export function useAssets(parameters = {}) {
    const { assetFilter, assetTypeFilter, chainFilter, query = {}, ...rest } = parameters;
    const config = useConfig(rest);
    const queryClient = useQueryClient();
    const { address, connector, status } = useAccount();
    const account = parameters.account ?? address;
    const activeConnector = parameters.connector ?? connector;
    const enabled = Boolean(account &&
        (status === 'connected' ||
            (status === 'reconnecting' && activeConnector?.getProvider)) &&
        (query.enabled ?? true));
    const queryKey = useMemo(() => getAssetsQueryKey({
        account,
        assetFilter,
        assetTypeFilter,
        chainFilter,
        connector: activeConnector,
    }), [account, activeConnector, assetFilter, assetTypeFilter, chainFilter]);
    const provider = useRef(undefined);
    // biome-ignore lint/correctness/useExhaustiveDependencies: `queryKey` not required
    useEffect(() => {
        if (!activeConnector)
            return;
        void (async () => {
            provider.current ??=
                (await activeConnector.getProvider?.());
            provider.current?.on('message', (event) => {
                if (event.type !== 'assetsChanged')
                    return;
                queryClient.invalidateQueries({ queryKey });
            });
        })();
    }, [address, activeConnector, queryClient]);
    return useQuery({
        ...query,
        enabled,
        gcTime: 0,
        queryFn: activeConnector
            ? async (context) => {
                const { connectorUid: _, ...options } = context.queryKey[1];
                provider.current ??=
                    (await activeConnector.getProvider());
                return await getAssets(config, {
                    ...options,
                    connector: activeConnector,
                });
            }
            : skipToken,
        queryKey,
        staleTime: Number.POSITIVE_INFINITY,
    });
}
export function useConnect(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    return useMutation({
        ...mutation,
        async mutationFn(variables) {
            return connect(config, variables);
        },
        mutationKey: ['connect'],
    });
}
export function useDisconnect(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    return useMutation({
        ...mutation,
        async mutationFn(variables) {
            await disconnect(config, variables);
        },
        mutationKey: ['disconnect'],
    });
}
export function useGrantAdmin(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    return useMutation({
        ...mutation,
        async mutationFn(variables) {
            return grantAdmin(config, variables);
        },
        mutationKey: ['grantAdmin'],
    });
}
export function useGrantPermissions(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    return useMutation({
        ...mutation,
        async mutationFn(variables) {
            return grantPermissions(config, variables);
        },
        mutationKey: ['grantPermissions'],
    });
}
export function usePermissions(parameters = {}) {
    const { query = {}, ...rest } = parameters;
    const config = useConfig(rest);
    const queryClient = useQueryClient();
    const chainId = useChainId({ config });
    const { address, connector, status } = useAccount();
    const activeConnector = parameters.connector ?? connector;
    const enabled = Boolean((status === 'connected' ||
        (status === 'reconnecting' && activeConnector?.getProvider)) &&
        (query.enabled ?? true));
    const queryKey = useMemo(() => getPermissionsQueryKey({
        address,
        chainId: parameters.chainId ?? chainId,
        connector: activeConnector,
    }), [address, chainId, parameters.chainId, activeConnector]);
    const provider = useRef(undefined);
    // biome-ignore lint/correctness/useExhaustiveDependencies: `queryKey` not required
    useEffect(() => {
        if (!activeConnector)
            return;
        void (async () => {
            provider.current ??=
                (await activeConnector.getProvider?.());
            provider.current?.on('message', (event) => {
                if (event.type !== 'permissionsChanged')
                    return;
                queryClient.invalidateQueries({ queryKey });
            });
        })();
    }, [address, activeConnector, queryClient]);
    return useQuery({
        ...query,
        enabled,
        gcTime: 0,
        queryFn: activeConnector
            ? async (context) => {
                const { connectorUid: _, ...options } = context.queryKey[1];
                provider.current ??=
                    (await activeConnector.getProvider());
                return await getPermissions(config, {
                    ...options,
                    connector: activeConnector,
                });
            }
            : skipToken,
        queryKey,
        staleTime: Number.POSITIVE_INFINITY,
    });
}
export function useRevokeAdmin(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    return useMutation({
        ...mutation,
        async mutationFn(variables) {
            return revokeAdmin(config, variables);
        },
        mutationKey: ['revokeAdmin'],
    });
}
export function useRevokePermissions(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    return useMutation({
        ...mutation,
        async mutationFn(variables) {
            return revokePermissions(config, variables);
        },
        mutationKey: ['revokePermissions'],
    });
}
export function useUpgradeAccount(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    return useMutation({
        ...mutation,
        async mutationFn(variables) {
            return upgradeAccount(config, variables);
        },
        mutationKey: ['upgradeAccount'],
    });
}
export function useVerifyEmail(parameters = {}) {
    const { mutation } = parameters;
    const config = useConfig(parameters);
    return useMutation({
        ...mutation,
        async mutationFn(variables) {
            return verifyEmail(config, variables);
        },
        mutationKey: ['verifyEmail'],
    });
}
//# sourceMappingURL=react.js.map