import * as ox_Provider from 'ox/Provider';
import type * as Chains from '../Chains.js';
import type * as Porto from '../Porto.js';
import type * as RpcSchema from '../RpcSchema.js';
import type * as Porto_internal from './porto.js';
export type Provider = ox_Provider.Provider<{
    includeEvents: true;
    schema: RpcSchema.Schema;
}> & {
    /**
     * Not part of versioned API, proceed with caution.
     * @deprecated
     */
    _internal: {
        destroy: () => void;
    };
};
export declare function from<chains extends readonly [Chains.Chain, ...Chains.Chain[]] = readonly [
    Chains.Chain,
    ...Chains.Chain[]
]>(parameters: from.Parameters<chains>): Provider;
export declare namespace from {
    type Parameters<chains extends readonly [Chains.Chain, ...Chains.Chain[]] = readonly [
        Chains.Chain,
        ...Chains.Chain[]
    ]> = Porto_internal.Internal<chains> & {
        store: Porto.Store;
    };
}
//# sourceMappingURL=provider.d.ts.map