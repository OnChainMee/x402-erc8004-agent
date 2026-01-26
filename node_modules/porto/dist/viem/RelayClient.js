import * as Json from 'ox/Json';
import { createClient, fallback, http, } from 'viem';
import * as Transport from '../core/Transport.js';
const clientCache = new Map();
/**
 * Extracts a Viem Client from a Porto instance, and an optional chain ID.
 * By default, the Client for the current chain ID will be extracted.
 *
 * @param porto - Porto instance.
 * @param parameters - Parameters.
 * @returns Client.
 */
export function fromPorto(porto, config = {}) {
    const { config: config_, id, store } = porto._internal;
    const { chains, relay } = config_;
    const state = store.getState();
    const chainId = config.chainId ?? state.chainIds[0];
    const chain = chains.find((chain) => chain.id === chainId);
    if (!chain)
        throw new Error([
            'Could not find a compatible Porto chain on the given chain configuration.',
            '',
            `Provided chains: [${chains.map((chain) => `${chain.name} (id: ${chain.id})`).join(', ')}]`,
            `Needed chain (id): ${chainId}`,
            'Please add this chain (id) to your chain configuration.',
        ].join('\n'));
    const transport = Transport.relayProxy({
        public: config_.transports[chain.id] ??
            fallback(chain.rpcUrls.default.http.map((url) => http(url))),
        relay,
    });
    const key = [id, Json.stringify(chain)].filter(Boolean).join(':');
    if (clientCache.has(key))
        return clientCache.get(key);
    const client = createClient({
        ...config,
        chain,
        pollingInterval: 1_000,
        transport,
    });
    clientCache.set(key, client);
    return client;
}
//# sourceMappingURL=RelayClient.js.map