import { cdpApiClient } from "../../cdpApiClient.js";
/**
 * Get a price estimate for a swap between two tokens on an EVM network.
 * @summary Get a price estimate for a swap
 */
export const getEvmSwapPrice = (params, options) => {
    return cdpApiClient({ url: `/v2/evm/swaps/quote`, method: "GET", params }, options);
};
/**
 * Create a swap quote, which includes the payload to sign as well as the transaction data needed to execute the swap. The developer is responsible for signing the payload and submitting the transaction to the network in order to execute the swap.
 * @summary Create a swap quote
 */
export const createEvmSwapQuote = (createEvmSwapQuoteBody, options) => {
    return cdpApiClient({
        url: `/v2/evm/swaps`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: createEvmSwapQuoteBody,
    }, options);
};
//# sourceMappingURL=evm-swaps.js.map