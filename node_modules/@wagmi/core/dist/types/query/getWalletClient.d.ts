import { type GetWalletClientParameters, type GetWalletClientReturnType } from '../actions/getWalletClient.js';
import type { Config } from '../createConfig.js';
import type { ScopeKeyParameter } from '../types/properties.js';
import type { Compute, ExactPartial } from '../types/utils.js';
export type GetWalletClientOptions<config extends Config, chainId extends config['chains'][number]['id']> = Compute<ExactPartial<GetWalletClientParameters<config, chainId>> & ScopeKeyParameter>;
export declare function getWalletClientQueryOptions<config extends Config, chainId extends config['chains'][number]['id']>(config: config, options?: GetWalletClientOptions<config, chainId>): {
    readonly gcTime: 0;
    readonly queryFn: ({ queryKey }: {
        queryKey: readonly ["walletClient", {
            readonly connectorUid: string | undefined;
            readonly chainId?: number | (chainId extends number ? chainId : undefined) | undefined;
            readonly account?: import("viem").Address | import("viem").Account | null | undefined;
            readonly assertChainId?: boolean | undefined;
            readonly scopeKey?: string | undefined;
        }];
        signal: AbortSignal;
        meta: import("@tanstack/query-core").QueryMeta | undefined;
        pageParam?: unknown;
        direction?: unknown;
    }) => Promise<never>;
    readonly queryKey: readonly ["walletClient", {
        readonly connectorUid: string | undefined;
        readonly chainId?: number | (chainId extends infer T ? T extends chainId ? T extends number ? T : undefined : never : never) | undefined;
        readonly account?: import("viem").Address | import("viem").Account | null | undefined;
        readonly assertChainId?: boolean | undefined;
        readonly scopeKey?: string | undefined;
    }];
};
export type GetWalletClientQueryFnData<config extends Config, chainId extends config['chains'][number]['id']> = GetWalletClientReturnType<config, chainId>;
export type GetWalletClientData<config extends Config, chainId extends config['chains'][number]['id']> = GetWalletClientQueryFnData<config, chainId>;
export declare function getWalletClientQueryKey<config extends Config, chainId extends config['chains'][number]['id']>(options?: GetWalletClientOptions<config, chainId>): readonly ["walletClient", {
    readonly connectorUid: string | undefined;
    readonly chainId?: number | (chainId extends number ? chainId : undefined) | undefined;
    readonly account?: import("viem").Address | import("viem").Account | null | undefined;
    readonly assertChainId?: boolean | undefined;
    readonly scopeKey?: string | undefined;
}];
export type GetWalletClientQueryKey<config extends Config, chainId extends config['chains'][number]['id']> = ReturnType<typeof getWalletClientQueryKey<config, chainId>>;
//# sourceMappingURL=getWalletClient.d.ts.map