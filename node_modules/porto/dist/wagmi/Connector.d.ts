import { type Address, type ProviderConnectInfo } from 'viem';
import type * as Chains from '../core/Chains.js';
import type { ExactPartial } from '../core/internal/types.js';
import type * as Porto from '../core/Porto.js';
import * as RpcSchema from '../core/RpcSchema.js';
export type PortoParameters<chains extends readonly [Chains.Chain, ...Chains.Chain[]] = readonly [
    Chains.Chain,
    ...Chains.Chain[]
]> = ExactPartial<Porto.Config<chains>>;
export declare function porto<const chains extends readonly [Chains.Chain, ...Chains.Chain[]]>(parameters?: PortoParameters<chains>): import("@wagmi/core").CreateConnectorFn<import("../index.js").Provider, {
    connect<withCapabilities extends boolean = false>(parameters?: {
        chainId?: number | undefined;
        capabilities?: (RpcSchema.wallet_connect.Capabilities & {
            force?: boolean | undefined;
        }) | undefined;
        isReconnecting?: boolean | undefined;
        withCapabilities?: withCapabilities | boolean | undefined;
    }): Promise<{
        accounts: withCapabilities extends true ? readonly {
            address: Address;
            capabilities: RpcSchema.wallet_connect.ResponseCapabilities;
        }[] : readonly Address[];
        chainId: number;
    }>;
    getPortoInstance(): Promise<Porto.Porto<readonly [Chains.Chain, ...Chains.Chain[]]>>;
    onConnect(connectInfo: ProviderConnectInfo): void;
}, Record<string, unknown>>;
//# sourceMappingURL=Connector.d.ts.map