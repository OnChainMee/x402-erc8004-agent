import { createSolanaRpc } from "@solana/kit";
/**
 * Create a Solana RPC client for the given network
 *
 * @param network - The network to connect to
 *
 * @returns The RPC client
 */
export function createRpcClient(network) {
    const endpoint = network === "mainnet" ? "https://api.mainnet-beta.solana.com" : "https://api.devnet.solana.com";
    return createSolanaRpc(endpoint);
}
//# sourceMappingURL=rpc.js.map