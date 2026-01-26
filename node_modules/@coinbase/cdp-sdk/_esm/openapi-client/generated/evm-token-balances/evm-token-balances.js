import { cdpApiClient } from "../../cdpApiClient.js";
/**
 * Lists the token balances of an EVM address on a given network. The balances include ERC-20 tokens and the native gas token (usually ETH). The response is paginated, and by default, returns 20 balances per page.
 **Note:** This endpoint is still under development and does not yet provide strong freshness guarantees. Specifically, balances of new tokens can, on occasion, take up to ~30 seconds to appear, while balances of tokens already belonging to an address will generally be close to chain tip. Freshness of new token balances will improve over the coming weeks.
 * @summary List EVM token balances
 */
export const listEvmTokenBalances = (network, address, params, options) => {
    return cdpApiClient({ url: `/v2/evm/token-balances/${network}/${address}`, method: "GET", params }, options);
};
//# sourceMappingURL=evm-token-balances.js.map