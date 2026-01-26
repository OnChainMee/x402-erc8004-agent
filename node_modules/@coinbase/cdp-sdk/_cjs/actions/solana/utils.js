"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrCreateConnection = getOrCreateConnection;
exports.getConnectedNetwork = getConnectedNetwork;
exports.getUsdcMintAddress = getUsdcMintAddress;
const web3_js_1 = require("@solana/web3.js");
const constants_js_1 = require("./constants.js");
/**
 * Get a connection for the Solana network
 *
 * @param options - The options for the connection
 *
 * @param options.networkOrConnection - The network to use or a connection
 *
 * @returns The connection
 */
function getOrCreateConnection({ networkOrConnection, }) {
    if (typeof networkOrConnection !== "string") {
        return networkOrConnection;
    }
    return new web3_js_1.Connection(networkOrConnection === "mainnet"
        ? "https://api.mainnet-beta.solana.com"
        : "https://api.devnet.solana.com");
}
/**
 * Legacy function for compatibility during migration
 *
 * @param connection - The Solana Connection instance
 * @returns The network type (mainnet or devnet)
 */
async function getConnectedNetwork(connection) {
    const genesisHash = await connection.getGenesisHash();
    if (genesisHash === constants_js_1.GENESIS_HASH_MAINNET) {
        return "mainnet";
    }
    else if (genesisHash === constants_js_1.GENESIS_HASH_DEVNET) {
        return "devnet";
    }
    throw new Error("Unknown or unsupported network");
}
/**
 * Get the USDC mint address for the given connection
 *
 * @param network - The network to use
 *
 * @returns The USDC mint address
 */
function getUsdcMintAddress(network) {
    if (network === "mainnet") {
        return constants_js_1.USDC_MAINNET_MINT_ADDRESS;
    }
    return constants_js_1.USDC_DEVNET_MINT_ADDRESS;
}
//# sourceMappingURL=utils.js.map