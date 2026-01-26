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
exports.NETWORK_TO_CHAIN_MAP = void 0;
exports.resolveNetworkToChain = resolveNetworkToChain;
const chains = __importStar(require("viem/chains"));
/**
 * Network identifier to viem chain mapping
 */
exports.NETWORK_TO_CHAIN_MAP = {
    base: chains.base,
    "base-sepolia": chains.baseSepolia,
    ethereum: chains.mainnet,
    "ethereum-sepolia": chains.sepolia,
    polygon: chains.polygon,
    "polygon-mumbai": chains.polygonMumbai,
    arbitrum: chains.arbitrum,
    "arbitrum-sepolia": chains.arbitrumSepolia,
    optimism: chains.optimism,
    "optimism-sepolia": chains.optimismSepolia,
};
/**
 * Resolves a network identifier to a viem chain
 *
 * @param network - The network identifier to resolve
 * @returns The resolved viem chain
 * @throws Error if the network identifier is not supported
 */
function resolveNetworkToChain(network) {
    const chain = exports.NETWORK_TO_CHAIN_MAP[network.toLowerCase()];
    if (!chain) {
        throw new Error(`Unsupported network identifier: ${network}`);
    }
    return chain;
}
//# sourceMappingURL=networkToChainResolver.js.map