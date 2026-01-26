import { createStore } from 'zustand/vanilla';
import * as Messenger from '../core/Messenger.js';
import * as Mode from '../core/Mode.js';
import * as Porto_ from '../core/Porto.js';
import * as Storage from '../core/Storage.js';
import { hostnames } from '../trusted-hosts.js';
import * as MethodPolicies from './internal/methodPolicies.js';
const messenger = (() => {
    if (typeof window === 'undefined')
        return Messenger.noop();
    const url = new URL(window.location.href);
    const relayUrl = url.searchParams.get('relayUrl');
    if (relayUrl)
        return Messenger.cliRelay({ relayUrl });
    return Messenger.bridge({
        from: Messenger.fromWindow(window),
        to: Messenger.fromWindow(window.opener ?? window.parent),
    });
})();
export const defaultConfig = {
    ...Porto_.defaultConfig,
    messenger,
    methodPolicies: MethodPolicies.methodPolicies,
    mode: Mode.relay(),
    storage: Storage.localStorage(),
    trustedHosts: hostnames,
};
export function create(parameters = {}) {
    const { chains = defaultConfig.chains, feeToken, mode = defaultConfig.mode, messenger = defaultConfig.messenger, methodPolicies = defaultConfig.methodPolicies, merchantUrl, relay = defaultConfig.relay, storage = defaultConfig.storage, storageKey = defaultConfig.storageKey, transports, trustedHosts = defaultConfig.trustedHosts, } = parameters;
    const porto = Porto_.create({
        announceProvider: false,
        chains,
        feeToken,
        merchantUrl,
        mode,
        relay,
        storage,
        storageKey,
        transports,
    });
    const remoteStore = createStore(() => ({
        requests: [],
    }));
    return {
        ...porto,
        _internal: {
            ...porto._internal,
            remoteStore,
        },
        messenger,
        methodPolicies,
        mode,
        async ready() {
            await porto._internal.store.persist.rehydrate();
            const { chainIds } = porto._internal.store.getState();
            if (!('ready' in messenger))
                return;
            return messenger.ready({
                chainIds,
                methodPolicies,
                trustedHosts,
            });
        },
    };
}
//# sourceMappingURL=Porto.js.map