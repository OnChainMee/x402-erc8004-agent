import { Connection } from "@solana/web3.js";
export type Network = "mainnet" | "devnet";
type GetOrCreateConnectionOptions = {
    networkOrConnection: Network | Connection;
};
/**
 * Get a connection for the Solana network
 *
 * @param options - The options for the connection
 *
 * @param options.networkOrConnection - The network to use or a connection
 *
 * @returns The connection
 */
export declare function getOrCreateConnection({ networkOrConnection, }: GetOrCreateConnectionOptions): Connection;
/**
 * Legacy function for compatibility during migration
 *
 * @param connection - The Solana Connection instance
 * @returns The network type (mainnet or devnet)
 */
export declare function getConnectedNetwork(connection: Connection): Promise<Network>;
/**
 * Get the USDC mint address for the given connection
 *
 * @param network - The network to use
 *
 * @returns The USDC mint address
 */
export declare function getUsdcMintAddress(network: Network): string;
export {};
//# sourceMappingURL=utils.d.ts.map