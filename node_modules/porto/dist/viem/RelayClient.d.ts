import { type ClientConfig, type Client as viem_Client } from 'viem';
import type * as Chains from '../core/Chains.js';
import type { Internal } from '../core/internal/porto.js';
import * as Transport from '../core/Transport.js';
import type * as Account from './Account.js';
import type * as RpcSchema from './RpcSchema.js';
export type RelayClient<transport extends Transport.Transport = Transport.Transport, chain extends Chains.Chain = Chains.Chain, account extends Account.Account | undefined = Account.Account | undefined> = viem_Client<transport, chain, account, RpcSchema.Relay>;
/**
 * Extracts a Viem Client from a Porto instance, and an optional chain ID.
 * By default, the Client for the current chain ID will be extracted.
 *
 * @param porto - Porto instance.
 * @param parameters - Parameters.
 * @returns Client.
 */
export declare function fromPorto<chains extends readonly [Chains.Chain, ...Chains.Chain[]], account extends Account.Account | undefined = undefined>(porto: {
    _internal: Internal<chains>;
}, config?: fromPorto.Config<chains, account>): RelayClient<Transport.Transport, chains[number], account>;
export declare namespace fromPorto {
    type Config<chains extends readonly [Chains.Chain, ...Chains.Chain[]] = readonly [
        Chains.Chain,
        ...Chains.Chain[]
    ], account extends Account.Account | undefined = Account.Account | undefined> = Pick<ClientConfig<Transport.Transport, Chains.Chain | undefined, account>, 'account' | 'cacheTime' | 'key' | 'name' | 'pollingInterval'> & {
        chainId?: chains[number]['id'] | undefined;
    };
}
//# sourceMappingURL=RelayClient.d.ts.map