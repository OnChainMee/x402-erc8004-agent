"use strict";
/**
 * Centralized configuration for network capabilities.
 * This defines which methods are available on which networks.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NETWORK_CAPABILITIES = void 0;
exports.getNetworksSupportingMethod = getNetworksSupportingMethod;
exports.isMethodSupportedOnNetwork = isMethodSupportedOnNetwork;
/**
 * Network capabilities configuration.
 * Each network has a set of boolean flags indicating which methods are supported.
 */
exports.NETWORK_CAPABILITIES = {
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
function getNetworksSupportingMethod(method) {
    return Object.keys(exports.NETWORK_CAPABILITIES).filter(network => exports.NETWORK_CAPABILITIES[network][method]);
}
/**
 * Helper to check if a network supports a method
 *
 * @param method - The method name to check
 * @param network - The network name to check
 * @returns True if the network supports the method, false otherwise
 */
function isMethodSupportedOnNetwork(method, network) {
    const networkConfig = exports.NETWORK_CAPABILITIES[network];
    return networkConfig ? networkConfig[method] : false;
}
//# sourceMappingURL=networkCapabilities.js.map