import { http } from 'viem';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';
import * as Chains from './Chains.js';
import { hostUrls } from './Dialog.js';
import { dialog } from './internal/modes/dialog.js';
import { relay } from './internal/modes/relay.js';
import * as Provider from './internal/provider.js';
import * as Utils from './internal/utils.js';
import * as Storage from './Storage.js';
import { relayUrls } from './Transport.js';
const browser = typeof window !== 'undefined' && typeof document !== 'undefined';
export const defaultConfig = {
    announceProvider: true,
    chains: Chains.all,
    mode: browser ? dialog({ host: hostUrls.prod }) : relay(),
    relay: http(relayUrls.prod.http),
    storage: browser && typeof indexedDB !== 'undefined'
        ? Storage.idb()
        : Storage.memory(),
    storageKey: 'porto.store',
};
export function create(parameters = {}) {
    const chains = parameters.chains ?? defaultConfig.chains;
    const transports = Object.fromEntries(chains.map((chain) => [
        chain.id,
        parameters.transports?.[chain.id] ?? http(),
    ]));
    const config = {
        announceProvider: parameters.announceProvider ?? defaultConfig.announceProvider,
        authUrl: parameters.authUrl,
        chains,
        feeToken: parameters.feeToken,
        merchantUrl: parameters.merchantUrl,
        mode: parameters.mode ?? defaultConfig.mode,
        relay: parameters.relay ?? defaultConfig.relay,
        storage: parameters.storage ?? defaultConfig.storage,
        storageKey: parameters.storageKey ?? defaultConfig.storageKey,
        transports,
    };
    const store = createStore(devtools(subscribeWithSelector(persist((_) => ({
        accounts: [],
        chainIds: config.chains.map((chain) => chain.id),
        feeToken: config.feeToken,
        requestQueue: [],
    }), {
        merge(p, currentState) {
            const persistedState = p;
            const currentChainId = config.chains.find((chain) => chain.id === persistedState.chainIds[0])?.id ?? config.chains[0].id;
            const chainIds = [
                currentChainId,
                ...config.chains
                    .map((chain) => chain.id)
                    .filter((id) => id !== currentChainId),
            ];
            return {
                ...currentState,
                ...persistedState,
                chainIds,
            };
        },
        name: config.storageKey,
        partialize: (state) => ({
            accounts: state.accounts.map((account) => 
            // omit non-serializable properties (e.g. functions).
            Utils.normalizeValue(account)),
            chainIds: state.chainIds,
        }),
        storage: config.storage,
        version: 5,
    }))));
    let mode = config.mode;
    const internal = {
        config,
        getMode() {
            return mode;
        },
        id: Utils.uuidv4(),
        setMode(i) {
            destroy?.();
            mode = i;
            destroy = i.setup({
                internal,
            });
            return destroy;
        },
        store,
    };
    const provider = Provider.from(internal);
    let destroy = mode !== null
        ? mode.setup({
            internal,
        })
        : () => { };
    return {
        _internal: internal,
        config,
        destroy() {
            destroy();
            provider._internal.destroy();
        },
        provider,
    };
}
//# sourceMappingURL=Porto.js.map