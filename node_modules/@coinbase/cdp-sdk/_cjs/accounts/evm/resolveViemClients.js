"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveViemClients = resolveViemClients;
const viem_1 = require("viem");
const accounts_1 = require("viem/accounts");
const chains = __importStar(require("viem/chains"));
const getBaseNodeRpcUrl_js_1 = require("./getBaseNodeRpcUrl.js");
const networkToChainResolver_js_1 = require("./networkToChainResolver.js");
const errors_js_1 = require("../../errors.js");
/**
 * Get a chain from the viem chains object
 *
 * @param id - The chain ID
 * @returns The chain
 */
function getChain(id) {
    const chainList = Object.values(chains);
    const found = chainList.find(chain => chain.id === id);
    if (!found)
        throw new Error(`Unsupported chain ID: ${id}`);
    return found;
}
/**
 * Determines if the input string is a network identifier or a Node URL
 *
 * @param input - The string to check
 * @returns True if the input is a network identifier, false otherwise
 */
function isNetworkIdentifier(input) {
    const normalizedInput = input.toLowerCase();
    return networkToChainResolver_js_1.NETWORK_TO_CHAIN_MAP[normalizedInput] !== undefined;
}
/**
 * Resolves a Node URL to a viem chain by making a getChainId call
 *
 * @param nodeUrl - The Node URL to resolve
 * @returns Promise resolving to the viem chain
 */
async function resolveNodeUrlToChain(nodeUrl) {
    // First validate that it's a proper URL
    if (!isValidUrl(nodeUrl)) {
        throw new errors_js_1.UserInputValidationError(`Invalid URL format: ${nodeUrl}`);
    }
    // Create a temporary public client to get the chain ID
    const tempPublicClient = (0, viem_1.createPublicClient)({
        transport: (0, viem_1.http)(nodeUrl),
    });
    try {
        const chainId = await tempPublicClient.getChainId();
        const chain = getChain(Number(chainId));
        return chain;
    }
    catch (error) {
        throw new Error(`Failed to resolve chain ID from Node URL: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
}
/**
 * Determines if the input string is a valid URL
 *
 * @param input - The string to validate as a URL
 * @returns True if the input is a valid URL, false otherwise
 */
function isValidUrl(input) {
    try {
        new URL(input);
        return true;
    }
    catch {
        return false;
    }
}
/**
 * Resolves viem clients based on a network identifier or Node URL.
 *
 * @param options - Configuration options
 * @param options.networkOrNodeUrl - Either a network identifier (e.g., "base", "base-sepolia") or a full Node URL
 * @param options.account - Optional account to use for the wallet client
 * @returns Promise resolving to an object containing the chain, publicClient, and walletClient
 *
 * @example
 * ```typescript
 * // Using network identifier
 * const clients = await resolveViemClients({
 *   networkOrNodeUrl: "base",
 *   account: myAccount
 * });
 *
 * // Using Node URL
 * const clients = await resolveViemClients({
 *   networkOrNodeUrl: "https://mainnet.base.org",
 *   account: myAccount
 * });
 * ```
 */
async function resolveViemClients(options) {
    const { networkOrNodeUrl } = options;
    let chain;
    // If it's a valid network identifier, use the mapping
    if (isNetworkIdentifier(networkOrNodeUrl)) {
        const rpcUrl = networkOrNodeUrl === "base" || networkOrNodeUrl === "base-sepolia"
            ? await (0, getBaseNodeRpcUrl_js_1.getBaseNodeRpcUrl)(networkOrNodeUrl)
            : undefined;
        chain = (0, networkToChainResolver_js_1.resolveNetworkToChain)(networkOrNodeUrl);
        const publicClient = (0, viem_1.createPublicClient)({
            chain,
            transport: (0, viem_1.http)(rpcUrl),
        });
        const walletClient = (0, viem_1.createWalletClient)({
            account: (0, accounts_1.toAccount)(options.account),
            chain,
            transport: (0, viem_1.http)(rpcUrl),
        });
        return {
            chain,
            publicClient,
            walletClient,
        };
    }
    // If it's not a valid network identifier, try to treat it as a Node URL
    try {
        chain = await resolveNodeUrlToChain(networkOrNodeUrl);
        const publicClient = (0, viem_1.createPublicClient)({
            chain,
            transport: (0, viem_1.http)(networkOrNodeUrl),
        });
        const walletClient = (0, viem_1.createWalletClient)({
            account: (0, accounts_1.toAccount)(options.account),
            chain,
            transport: (0, viem_1.http)(networkOrNodeUrl),
        });
        return {
            chain,
            publicClient,
            walletClient,
        };
    }
    catch (error) {
        // If the error is from resolveNodeUrlToChain, re-throw it as-is
        if (error instanceof Error &&
            (error.message.includes("Invalid URL format") ||
                error.message.includes("Unsupported chain ID") ||
                error.message.includes("Failed to resolve chain ID"))) {
            throw error;
        }
        // Otherwise, throw a generic error about unsupported input
        throw new errors_js_1.UserInputValidationError(`Unsupported network identifier or invalid Node URL: ${networkOrNodeUrl}`);
    }
}
//# sourceMappingURL=resolveViemClients.js.map