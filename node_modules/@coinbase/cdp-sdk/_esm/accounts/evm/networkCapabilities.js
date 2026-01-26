/**
 * Centralized configuration for network capabilities.
 * This defines which methods are available on which networks.
 */
/**
 * Network capabilities configuration.
 * Each network has a set of boolean flags indicating which methods are supported.
 */
export const NETWORK_CAPABILITIES = {
    base: {
        listTokenBalances: true,
        requestFaucet: false,
        quoteFund: true,
        fund: true,
        waitForFundOperationReceipt: true,
        transfer: true,
        sendTransaction: true,
        quoteSwap: true,
        swap: true,
        useSpendPermission: true,
    },
    "base-sepolia": {
        listTokenBalances: true,
        requestFaucet: true,
        quoteFund: false,
        fund: false,
        waitForFundOperationReceipt: false,
        transfer: true,
        sendTransaction: true,
        quoteSwap: false,
        swap: false,
        useSpendPermission: true,
    },
    ethereum: {
        listTokenBalances: true,
        requestFaucet: false,
        quoteFund: false, // Only base is supported for quoteFund
        fund: false, // Only base is supported for fund
        waitForFundOperationReceipt: false,
        transfer: true,
        sendTransaction: true,
        quoteSwap: true,
        swap: true,
        useSpendPermission: true,
    },
    "ethereum-sepolia": {
        listTokenBalances: false,
        requestFaucet: true,
        quoteFund: false,
        fund: false,
        waitForFundOperationReceipt: false,
        transfer: true,
        sendTransaction: true,
        quoteSwap: false,
        swap: false,
        useSpendPermission: true,
    },
    "ethereum-hoodi": {
        listTokenBalances: false,
        requestFaucet: true,
        quoteFund: false,
        fund: false,
        waitForFundOperationReceipt: false,
        transfer: false,
        sendTransaction: true, // Always available (uses wallet client for non-base networks)
        quoteSwap: false,
        swap: false,
        useSpendPermission: false,
    },
    optimism: {
        listTokenBalances: false,
        requestFaucet: false,
        quoteFund: false,
        fund: false,
        waitForFundOperationReceipt: false,
        transfer: false,
        sendTransaction: true, // Always available (uses wallet client for non-base networks)
        quoteSwap: true,
        swap: true,
        useSpendPermission: true,
    },
    "optimism-sepolia": {
        listTokenBalances: false,
        requestFaucet: true,
        quoteFund: false,
        fund: false,
        waitForFundOperationReceipt: false,
        transfer: false,
        sendTransaction: true, // Always available (uses wallet client for non-base networks)
        quoteSwap: false,
        swap: false,
        useSpendPermission: true,
    },
    arbitrum: {
        listTokenBalances: false,
        requestFaucet: true,
        quoteFund: false,
        fund: false,
        waitForFundOperationReceipt: false,
        transfer: false,
        sendTransaction: true, // Always available (uses wallet client for non-base networks)
        quoteSwap: true,
        swap: true,
        useSpendPermission: true,
    },
    "arbitrum-sepolia": {
        listTokenBalances: false,
        requestFaucet: true,
        quoteFund: false,
        fund: false,
        waitForFundOperationReceipt: false,
        transfer: false,
        sendTransaction: true, // Always available (uses wallet client for non-base networks)
        quoteSwap: false,
        swap: false,
        useSpendPermission: true,
    },
    avalanche: {
        listTokenBalances: false,
        requestFaucet: false,
        quoteFund: false,
        fund: false,
        waitForFundOperationReceipt: false,
        transfer: false,
        sendTransaction: true, // Always available (uses wallet client for non-base networks)
        quoteSwap: false,
        swap: false,
        useSpendPermission: true,
    },
    binance: {
        listTokenBalances: false,
        requestFaucet: false,
        quoteFund: false,
        fund: false,
        waitForFundOperationReceipt: false,
        transfer: false,
        sendTransaction: true, // Always available (uses wallet client for non-base networks)
        quoteSwap: false,
        swap: false,
        useSpendPermission: true,
    },
    polygon: {
        listTokenBalances: false,
        requestFaucet: false,
        quoteFund: false,
        fund: false,
        waitForFundOperationReceipt: false,
        transfer: false,
        sendTransaction: true, // Always available (uses wallet client for non-base networks)
        quoteSwap: false,
        swap: false,
        useSpendPermission: true,
    },
    zora: {
        listTokenBalances: false,
        requestFaucet: false,
        quoteFund: false,
        fund: false,
        waitForFundOperationReceipt: false,
        transfer: false,
        sendTransaction: true, // Always available (uses wallet client for non-base networks)
        quoteSwap: false,
        swap: false,
        useSpendPermission: true,
    },
};
/**
 * Helper to get networks that support a specific method
 *
 * @param method - The method name to check support for
 * @returns An array of network names that support the method
 */
export function getNetworksSupportingMethod(method) {
    return Object.keys(NETWORK_CAPABILITIES).filter(network => NETWORK_CAPABILITIES[network][method]);
}
/**
 * Helper to check if a network supports a method
 *
 * @param method - The method name to check
 * @param network - The network name to check
 * @returns True if the network supports the method, false otherwise
 */
export function isMethodSupportedOnNetwork(method, network) {
    const networkConfig = NETWORK_CAPABILITIES[network];
    return networkConfig ? networkConfig[method] : false;
}
//# sourceMappingURL=networkCapabilities.js.map