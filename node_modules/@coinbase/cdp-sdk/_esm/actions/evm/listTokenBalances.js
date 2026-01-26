/**
 * List the token balances for an EVM account.
 *
 * @param client - The client to use to list the token balances.
 * @param options - The options for listing the token balances.
 * @returns The result of listing the token balances.
 */
export async function listTokenBalances(client, options) {
    const response = await client.listDataTokenBalances(options.network, options.address, {
        pageSize: options.pageSize,
        pageToken: options.pageToken,
    });
    const balances = response.balances.map(balance => {
        return {
            token: {
                network: balance.token.network,
                contractAddress: balance.token.contractAddress,
                symbol: balance.token.symbol,
                name: balance.token.name,
            },
            amount: {
                amount: BigInt(balance.amount.amount),
                decimals: balance.amount.decimals,
            },
        };
    });
    return {
        balances,
        nextPageToken: response.nextPageToken,
    };
}
//# sourceMappingURL=listTokenBalances.js.map