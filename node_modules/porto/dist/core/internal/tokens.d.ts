import * as Address from 'ox/Address';
import { type Client, type Transport } from 'viem';
import type { GetChainParameter } from '../../viem/internal/utils.js';
import type * as Chains from '../Chains.js';
import type { Store } from '../Porto.js';
import type * as Token from './schema/token.js';
export type { Token } from './schema/token.js';
export type Tokens = readonly Token.Token[];
/**
 * Fetches all supported tokens for a given chain.
 *
 * @param client - Client.
 * @param parameters - Parameters.
 * @returns Tokens.
 */
export declare function getTokens<chain extends Chains.Chain | undefined>(client: Client<Transport, chain>, parameters?: getTokens.Parameters<chain>): Promise<getTokens.ReturnType>;
export declare namespace getTokens {
    type Parameters<chain extends Chains.Chain | undefined = Chains.Chain | undefined> = GetChainParameter<chain>;
    type ReturnType = readonly Token.Token[];
}
/**
 * Fetches a token for a given chain, provided an address or symbol.
 *
 * @param client - Client.
 * @param parameters - Parameters.
 * @returns Token.
 */
export declare function getToken<chain extends Chains.Chain | undefined>(client: Client<Transport, chain>, parameters: getToken.Parameters<chain>): Promise<getToken.ReturnType>;
export declare namespace getToken {
    type Parameters<chain extends Chains.Chain | undefined = Chains.Chain | undefined> = getTokens.Parameters<chain> & {
        addressOrSymbol: Token.Symbol | Address.Address;
    };
    type ReturnType = Token.Token | undefined;
    function predicate(addressOrSymbol: Token.Symbol | Address.Address): (token: Token.Token) => boolean;
}
/**
 * Resolves the fee token to use. Resolves the provided address or symbol,
 * or the defaults to the fee token stored in state.
 *
 * @param client - Client.
 * @param parameters - Parameters.
 * @returns Fee token.
 */
export declare function resolveFeeToken<chain extends Chains.Chain | undefined>(client: Client<Transport, chain>, parameters?: resolveFeeToken.Parameters<chain> | undefined): Promise<resolveFeeToken.ReturnType>;
export declare namespace resolveFeeToken {
    type Parameters<chain extends Chains.Chain | undefined = Chains.Chain | undefined> = getTokens.Parameters<chain> & {
        /**
         * Fee token to resolve.
         */
        addressOrSymbol?: Token.Symbol | Address.Address | undefined;
        /**
         * Porto store.
         */
        store?: Store<any> | undefined;
    };
    type ReturnType = Token.Token | undefined;
}
//# sourceMappingURL=tokens.d.ts.map