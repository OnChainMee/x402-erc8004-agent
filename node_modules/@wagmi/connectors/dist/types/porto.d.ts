import type { ExactPartial } from '@wagmi/core/internal';
import { type Porto, RpcSchema } from 'porto';
import { type Address, type ProviderConnectInfo } from 'viem';
export type PortoParameters = ExactPartial<Porto.Config>;
export declare function porto(parameters?: PortoParameters): import("@wagmi/core").CreateConnectorFn<import("porto").Provider, {
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
    getPortoInstance(): Promise<Porto.Porto>;
    onConnect(connectInfo: ProviderConnectInfo): void;
}, Record<string, unknown>>;
//# sourceMappingURL=porto.d.ts.map