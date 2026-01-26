import { Address } from 'ox';
import { useMemo } from 'react';
import { useStore } from 'zustand';
import { useShallow } from 'zustand/shallow';
import * as RelayClient from '../viem/RelayClient.js';
import * as WalletClient from '../viem/WalletClient.js';
/**
 * Hook to access and subscribe to the current account.
 * If an `address` is provided, it will return the account if exists.
 *
 * @param porto - Porto instance.
 * @param parameters - Parameters.
 * @returns Account.
 */
export function useAccount(porto, parameters = {}) {
    const { address } = parameters;
    return usePortoStore(porto, (x) => {
        if (!address)
            return x.accounts[0];
        return x.accounts.find((x) => Address.isEqual(x.address, address));
    });
}
/**
 * Hook to access and subscribe to the current accounts.
 *
 * @param porto - Porto instance.
 * @returns Accounts.
 */
export function useAccounts(porto) {
    return usePortoStore(porto, (x) => x.accounts);
}
/**
 * Hook to access and subscribe to the current chain.
 * If a `chainId` is provided, it will return the chain if supported.
 *
 * @param porto - Porto instance.
 * @param parameters - Parameters.
 * @returns Chain.
 */
export function useChain(porto, parameters = {}) {
    return usePortoStore(porto, (state) => {
        const chainId = parameters.chainId ?? state.chainIds[0];
        return porto._internal.config.chains.find((x) => x.id === chainId);
    });
}
/**
 * Hook to access and subscribe to the store of the Porto instance.
 *
 * @param porto - Porto instance.
 * @param selector - Selector function.
 * @returns Store state.
 */
export function usePortoStore(porto, selector = (state) => state) {
    const { store } = porto._internal;
    return useStore(store, useShallow(selector));
}
/**
 * Hook to access and subscribe to the remote store of the Porto instance.
 *
 * @param porto - Porto instance.
 * @param selector - Selector function.
 * @returns Remote store state.
 */
export function useRemoteStore(porto, selector = (state) => state) {
    const { remoteStore } = porto._internal;
    return useStore(remoteStore, useShallow(selector));
}
/**
 * Hook to access and subscribe to current pending requests.
 *
 * @param porto - Porto instance.
 * @returns Requests.
 */
export function useRequests(porto) {
    return useRemoteStore(porto, (state) => state.requests.filter((x) => x.status === 'pending').map((x) => x.request));
}
/**
 * Hook to access and subscribe to the next pending request.
 *
 * @param porto - Porto instance.
 * @returns Request.
 */
export function useRequest(porto) {
    return useRemoteStore(porto, (state) => state.requests.find((request) => request.status === 'pending')?.request);
}
/**
 * Hook to access and subscribe to the Relay Client of the Porto instance.
 *
 * @param porto - Porto instance.
 * @returns Relay Client.
 */
export function useRelayClient(porto, parameters = {}) {
    const defaultChainId = useChain(porto)?.id;
    const chainId = parameters.chainId ?? defaultChainId;
    return RelayClient.fromPorto(porto, { chainId });
}
/**
 * Hook to access and subscribe to the wallet client of the Porto instance.
 *
 * @param porto - Porto instance.
 * @returns Wallet Client.
 */
export function useWalletClient(porto) {
    return useMemo(() => WalletClient.fromPorto(porto), [porto]);
}
//# sourceMappingURL=Hooks.js.map