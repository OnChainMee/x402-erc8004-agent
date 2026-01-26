import { cdpApiClient } from "../../cdpApiClient.js";
/**
 * Retrieve all ERC-20 token contract addresses that an account has ever received tokens from.
Analyzes transaction history to discover token interactions.

 * @summary List token addresses for account
 */
export const listTokensForAccount = (network, address, options) => {
    return cdpApiClient({ url: `/v2/data/evm/token-ownership/${network}/${address}`, method: "GET" }, options);
};
/**
 * Lists the token balances of an EVM address on a given network. The balances include ERC-20 tokens and the native gas token (usually ETH). The response is paginated, and by default, returns 20 balances per page.

**Note:** This endpoint provides <1 second freshness from chain tip, <500ms response latency for wallets with reasonable token history, and 99.9% uptime for production use.
 * @summary List EVM token balances
 */
export const listDataTokenBalances = (network, address, params, options) => {
    return cdpApiClient({ url: `/v2/data/evm/token-balances/${network}/${address}`, method: "GET", params }, options);
};
//# sourceMappingURL=onchain-data.js.map