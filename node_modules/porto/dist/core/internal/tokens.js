import * as Address from 'ox/Address';
import { zeroAddress } from 'viem';
import * as RelayActions from '../../viem/RelayActions.js';
/**
 * Fetches all supported tokens for a given chain.
 *
 * @param client - Client.
 * @param parameters - Parameters.
 * @returns Tokens.
 */
export async function getTokens(client, parameters) {
    const { chain = client.chain } = parameters ?? {};
    const tokens = await RelayActions.getCapabilities(client, {
        chainId: chain?.id,
    }).then((capabilities) => capabilities.fees.tokens);
    return tokens;
}
/**
 * Fetches a token for a given chain, provided an address or symbol.
 *
 * @param client - Client.
 * @param parameters - Parameters.
 * @returns Token.
 */
export async function getToken(client, parameters) {
    const { addressOrSymbol } = parameters;
    const tokens = await getTokens(client, parameters);
    return tokens.find(getToken.predicate(addressOrSymbol));
}
(function (getToken) {
    function predicate(addressOrSymbol) {
        return (token) => {
            if (!addressOrSymbol)
                return false;
            if (Address.validate(addressOrSymbol))
                return Address.isEqual(token.address, addressOrSymbol);
            if (addressOrSymbol === 'native')
                return token.address === zeroAddress;
            return addressOrSymbol === token.symbol;
        };
    }
    getToken.predicate = predicate;
})(getToken || (getToken = {}));
/**
 * Resolves the fee token to use. Resolves the provided address or symbol,
 * or the defaults to the fee token stored in state.
 *
 * @param client - Client.
 * @param parameters - Parameters.
 * @returns Fee token.
 */
export async function resolveFeeToken(client, parameters) {
    const { chain = client.chain, store } = parameters ?? {};
    const state = (store?.getState() ?? {});
    const addressOrSymbol = parameters?.addressOrSymbol ?? state.feeToken;
    const feeTokens = await getTokens(client, { chain: chain }).then((tokens) => tokens.filter((token) => token.feeToken));
    const feeToken = feeTokens?.find((feeToken) => {
        if (!addressOrSymbol)
            return false;
        if (addressOrSymbol === 'native' && feeToken.address === zeroAddress)
            return true;
        if (Address.validate(addressOrSymbol) &&
            Address.isEqual(feeToken.address, addressOrSymbol))
            return true;
        return addressOrSymbol === feeToken.symbol;
    });
    return feeToken;
}
//# sourceMappingURL=tokens.js.map