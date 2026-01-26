import { type Transport } from 'viem';
export { fallback, http, type Transport, webSocket } from 'viem';
export declare const relayUrls: {
    readonly anvil: {
        readonly http: "http://localhost:9119";
    };
    readonly prod: {
        readonly http: "https://rpc.porto.sh";
    };
    readonly stg: {
        readonly http: "https://stg-rpc.porto.sh";
    };
};
export declare function relayProxy(transports: relayProxy.Value): relayProxy.ReturnType;
export declare namespace relayProxy {
    const type = "relayProxy";
    type Value = {
        public: Transport;
        relay: Transport;
    };
    type ReturnType = Transport<typeof type>;
}
//# sourceMappingURL=Transport.d.ts.map