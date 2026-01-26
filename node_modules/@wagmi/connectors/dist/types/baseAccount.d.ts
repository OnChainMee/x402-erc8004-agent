import type { createBaseAccountSDK, ProviderInterface } from '@base-org/account';
import type { Mutable, Omit } from '@wagmi/core/internal';
import { type Address, type Hex } from 'viem';
export type BaseAccountParameters = Mutable<Omit<Parameters<typeof createBaseAccountSDK>[0], 'appChainIds'>>;
export declare function baseAccount(parameters?: BaseAccountParameters): import("@wagmi/core").CreateConnectorFn<ProviderInterface, {
    connect<withCapabilities extends boolean = false>(parameters?: {
        chainId?: number | undefined;
        capabilities?: {
            signInWithEthereum?: {
                chainId?: string | undefined;
                domain?: string | undefined;
                expirationTime?: string | undefined;
                issuedAt?: string | undefined;
                nonce: string;
                notBefore?: string | undefined;
                requestId?: string | undefined;
                resources?: string[] | undefined;
                scheme?: string | undefined;
                statement?: string | undefined;
                uri?: string | undefined;
                version?: string | undefined;
            };
            [capability: string]: any;
        } | undefined;
        withCapabilities?: withCapabilities | boolean | undefined;
    }): Promise<{
        accounts: withCapabilities extends true ? readonly {
            address: Address;
            capabilities: {
                [capability: string]: any;
                signInWithEthereum?: {
                    message: string;
                    signature: Hex;
                } | undefined;
            };
        }[] : readonly Address[];
        chainId: number;
    }>;
}, Record<string, unknown>>;
//# sourceMappingURL=baseAccount.d.ts.map