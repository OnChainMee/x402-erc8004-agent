import { createTransport } from 'viem';
export { fallback, http, webSocket } from 'viem';
export const relayUrls = {
    anvil: { http: 'http://localhost:9119' },
    prod: { http: 'https://rpc.porto.sh' },
    stg: { http: 'https://stg-rpc.porto.sh' },
};
export function relayProxy(transports) {
    return (config) => {
        const transport_public = transports.public(config);
        const transport_relay = transports.relay(config);
        return createTransport({
            key: relayProxy.type,
            name: 'Relay Proxy',
            async request({ method, params }, options) {
                if (isRelay(method))
                    return transport_relay.request({ method, params }, options);
                return transport_public.request({ method, params }, options);
            },
            type: relayProxy.type,
        });
    };
}
(function (relayProxy) {
    relayProxy.type = 'relayProxy';
})(relayProxy || (relayProxy = {}));
/** @internal */
function isRelay(method) {
    if (method.startsWith('wallet_'))
        return true;
    if (method.startsWith('account_'))
        return true;
    if (method === 'health')
        return true;
    return false;
}
//# sourceMappingURL=Transport.js.map