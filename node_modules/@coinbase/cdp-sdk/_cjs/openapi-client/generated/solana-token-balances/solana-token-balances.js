"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listSolanaTokenBalances = void 0;
const cdpApiClient_js_1 = require("../../cdpApiClient.js");
/**
 * Lists the token balances of a Solana address on a given network. The balances include SPL tokens and the native SOL token. The response is paginated, and by default, returns 20 balances per page.

**Note:** This endpoint is still under development and does not yet provide strong availability or freshness guarantees. Freshness and availability of new token balances will improve over the coming weeks.
 * @summary List Solana token balances
 */
const listSolanaTokenBalances = (network, address, params, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/solana/token-balances/${network}/${address}`, method: "GET", params }, options);
};
exports.listSolanaTokenBalances = listSolanaTokenBalances;
//# sourceMappingURL=solana-token-balances.js.map