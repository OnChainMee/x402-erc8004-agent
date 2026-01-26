import { createClient, custom, } from 'viem';
const clientCache = new Map();
/**
 * Extracts a Viem Client from a Porto instance.
 *
 * @param porto - Porto instance.
 * @returns Client.
 */
export function fromPorto(porto, config = {}) {
    const { provider } = porto;
    const { id } = porto._internal;
    const key = ['provider', id].filter(Boolean).join(':');
    if (clientCache.has(key))
        return clientCache.get(key);
    const client = createClient({
        ...config,
        pollingInterval: 1_000,
        transport: custom(provider),
    });
    clientCache.set(key, client);
    return client;
}
//# sourceMappingURL=WalletClient.js.map