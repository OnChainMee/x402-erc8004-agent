"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcClient = createRpcClient;
const kit_1 = require("@solana/kit");
/**
 * Create a Solana RPC client for the given network
 *
 * @param network - The network to connect to
 *
 * @returns The RPC client
 */
function createRpcClient(network) {
    const endpoint = network === "mainnet" ? "https://api.mainnet-beta.solana.com" : "https://api.devnet.solana.com";
    return (0, kit_1.createSolanaRpc)(endpoint);
}
//# sourceMappingURL=rpc.js.map