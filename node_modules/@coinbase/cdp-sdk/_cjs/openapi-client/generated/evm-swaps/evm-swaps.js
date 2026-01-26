"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvmSwapQuote = exports.getEvmSwapPrice = void 0;
const cdpApiClient_js_1 = require("../../cdpApiClient.js");
/**
 * Get a price estimate for a swap between two tokens on an EVM network.
 * @summary Get a price estimate for a swap
 */
const getEvmSwapPrice = (params, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/evm/swaps/quote`, method: "GET", params }, options);
};
exports.getEvmSwapPrice = getEvmSwapPrice;
/**
 * Create a swap quote, which includes the payload to sign as well as the transaction data needed to execute the swap. The developer is responsible for signing the payload and submitting the transaction to the network in order to execute the swap.
 * @summary Create a swap quote
 */
const createEvmSwapQuote = (createEvmSwapQuoteBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/evm/swaps`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: createEvmSwapQuoteBody,
    }, options);
};
exports.createEvmSwapQuote = createEvmSwapQuote;
//# sourceMappingURL=evm-swaps.js.map