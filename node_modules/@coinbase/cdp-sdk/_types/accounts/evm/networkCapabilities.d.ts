/**
 * Centralized configuration for network capabilities.
 * This defines which methods are available on which networks.
 */
/**
 * Network capabilities configuration.
 * Each network has a set of boolean flags indicating which methods are supported.
 */
export declare const NETWORK_CAPABILITIES: {
    readonly base: {
        readonly listTokenBalances: true;
        readonly requestFaucet: false;
        readonly quoteFund: true;
        readonly fund: true;
        readonly waitForFundOperationReceipt: true;
        readonly transfer: true;
        readonly sendTransaction: true;
        readonly quoteSwap: true;
        readonly swap: true;
        readonly useSpendPermission: true;
    };
    readonly "base-sepolia": {
        readonly listTokenBalances: true;
        readonly requestFaucet: true;
        readonly quoteFund: false;
        readonly fund: false;
        readonly waitForFundOperationReceipt: false;
        readonly transfer: true;
        readonly sendTransaction: true;
        readonly quoteSwap: false;
        readonly swap: false;
        readonly useSpendPermission: true;
    };
    readonly ethereum: {
        readonly listTokenBalances: true;
        readonly requestFaucet: false;
        readonly quoteFund: false;
        readonly fund: false;
        readonly waitForFundOperationReceipt: false;
        readonly transfer: true;
        readonly sendTransaction: true;
        readonly quoteSwap: true;
        readonly swap: true;
        readonly useSpendPermission: true;
    };
    readonly "ethereum-sepolia": {
        readonly listTokenBalances: false;
        readonly requestFaucet: true;
        readonly quoteFund: false;
        readonly fund: false;
        readonly waitForFundOperationReceipt: false;
        readonly transfer: true;
        readonly sendTransaction: true;
        readonly quoteSwap: false;
        readonly swap: false;
        readonly useSpendPermission: true;
    };
    readonly "ethereum-hoodi": {
        readonly listTokenBalances: false;
        readonly requestFaucet: true;
        readonly quoteFund: false;
        readonly fund: false;
        readonly waitForFundOperationReceipt: false;
        readonly transfer: false;
        readonly sendTransaction: true;
        readonly quoteSwap: false;
        readonly swap: false;
        readonly useSpendPermission: false;
    };
    readonly optimism: {
        readonly listTokenBalances: false;
        readonly requestFaucet: false;
        readonly quoteFund: false;
        readonly fund: false;
        readonly waitForFundOperationReceipt: false;
        readonly transfer: false;
        readonly sendTransaction: true;
        readonly quoteSwap: true;
        readonly swap: true;
        readonly useSpendPermission: true;
    };
    readonly "optimism-sepolia": {
        readonly listTokenBalances: false;
        readonly requestFaucet: true;
        readonly quoteFund: false;
        readonly fund: false;
        readonly waitForFundOperationReceipt: false;
        readonly transfer: false;
        readonly sendTransaction: true;
        readonly quoteSwap: false;
        readonly swap: false;
        readonly useSpendPermission: true;
    };
    readonly arbitrum: {
        readonly listTokenBalances: false;
        readonly requestFaucet: true;
        readonly quoteFund: false;
        readonly fund: false;
        readonly waitForFundOperationReceipt: false;
        readonly transfer: false;
        readonly sendTransaction: true;
        readonly quoteSwap: true;
        readonly swap: true;
        readonly useSpendPermission: true;
    };
    readonly "arbitrum-sepolia": {
        readonly listTokenBalances: false;
        readonly requestFaucet: true;
        readonly quoteFund: false;
        readonly fund: false;
        readonly waitForFundOperationReceipt: false;
        readonly transfer: false;
        readonly sendTransaction: true;
        readonly quoteSwap: false;
        readonly swap: false;
        readonly useSpendPermission: true;
    };
    readonly avalanche: {
        readonly listTokenBalances: false;
        readonly requestFaucet: false;
        readonly quoteFund: false;
        readonly fund: false;
        readonly waitForFundOperationReceipt: false;
        readonly transfer: false;
        readonly sendTransaction: true;
        readonly quoteSwap: false;
        readonly swap: false;
        readonly useSpendPermission: true;
    };
    readonly binance: {
        readonly listTokenBalances: false;
        readonly requestFaucet: false;
        readonly quoteFund: false;
        readonly fund: false;
        readonly waitForFundOperationReceipt: false;
        readonly transfer: false;
        readonly sendTransaction: true;
        readonly quoteSwap: false;
        readonly swap: false;
        readonly useSpendPermission: true;
    };
    readonly polygon: {
        readonly listTokenBalances: false;
        readonly requestFaucet: false;
        readonly quoteFund: false;
        readonly fund: false;
        readonly waitForFundOperationReceipt: false;
        readonly transfer: false;
        readonly sendTransaction: true;
        readonly quoteSwap: false;
        readonly swap: false;
        readonly useSpendPermission: true;
    };
    readonly zora: {
        readonly listTokenBalances: false;
        readonly requestFaucet: false;
        readonly quoteFund: false;
        readonly fund: false;
        readonly waitForFundOperationReceipt: false;
        readonly transfer: false;
        readonly sendTransaction: true;
        readonly quoteSwap: false;
        readonly swap: false;
        readonly useSpendPermission: true;
    };
};
/**
 * Type for a network name from the capabilities configuration
 */
export type NetworkName = keyof typeof NETWORK_CAPABILITIES;
/**
 * Type for method names
 */
export type MethodName = keyof (typeof NETWORK_CAPABILITIES)[NetworkName];
/**
 * Helper to get networks that support a specific method
 *
 * @param method - The method name to check support for
 * @returns An array of network names that support the method
 */
export declare function getNetworksSupportingMethod(method: MethodName): NetworkName[];
/**
 * Helper to check if a network supports a method
 *
 * @param method - The method name to check
 * @param network - The network name to check
 * @returns True if the network supports the method, false otherwise
 */
export declare function isMethodSupportedOnNetwork(method: MethodName, network: string): boolean;
/**
 * Type helper to extract networks supporting a specific method
 */
export type NetworksSupporting<M extends MethodName> = {
    [N in NetworkName]: (typeof NETWORK_CAPABILITIES)[N][M] extends true ? N : never;
}[NetworkName];
export type ListTokenBalancesNetworks = NetworksSupporting<"listTokenBalances">;
export type RequestFaucetNetworks = NetworksSupporting<"requestFaucet">;
export type QuoteFundNetworks = NetworksSupporting<"quoteFund">;
export type FundNetworks = NetworksSupporting<"fund">;
export type TransferNetworks = NetworksSupporting<"transfer">;
export type SendTransactionNetworks = NetworksSupporting<"sendTransaction">;
export type QuoteSwapNetworks = NetworksSupporting<"quoteSwap">;
export type SwapNetworks = NetworksSupporting<"swap">;
//# sourceMappingURL=networkCapabilities.d.ts.map