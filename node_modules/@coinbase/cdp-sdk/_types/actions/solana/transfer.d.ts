import { createSolanaRpc } from "@solana/kit";
import { Connection } from "@solana/web3.js";
import { type Network } from "./utils.js";
import type { SignatureResult } from "../../client/solana/solana.types.js";
import type { CdpOpenApiClientType } from "../../openapi-client/index.js";
export interface TransferOptions {
    /**
     * The base58 encoded Solana address of the source account.
     */
    from: string;
    /**
     * The base58 encoded Solana address of the destination account.
     */
    to: string;
    /**
     * The amount to transfer, represented as an atomic unit of the token.
     */
    amount: bigint;
    /**
     * The token to transfer, or mint address of the SPL token to transfer.
     */
    token: "sol" | "usdc" | string;
    /**
     * The network to use which will be used to create an RPC client, otherwise an RPC client can be provided.
     */
    network: Network | Connection;
}
/**
 * Transfers SOL or SPL tokens between accounts
 *
 * @param apiClient - The API client to use
 * @param options - The transfer options
 *
 * @returns The transfer result
 */
export declare function transfer(apiClient: CdpOpenApiClientType, options: TransferOptions): Promise<SignatureResult>;
type GetNativeTransferOptions = Omit<TransferOptions, "token" | "network"> & {
    rpc: ReturnType<typeof createSolanaRpc>;
};
/**
 * Gets the transaction for a SOL transfer
 *
 * @param options - The options for the SOL transfer
 *
 * @param options.rpc - The Solana RPC client
 * @param options.from - The source address
 * @param options.to - The destination address
 * @param options.amount - The amount in lamports to transfer
 *
 * @returns The SOL transfer transaction
 */
export declare function getNativeTransferBase64Transaction({ rpc, from, to, amount, }: GetNativeTransferOptions): Promise<string>;
type GetSplTokenTransferOptions = Omit<TransferOptions, "network" | "token"> & {
    mintAddress: string;
    rpc: ReturnType<typeof createSolanaRpc>;
};
/**
 * Gets the transaction for a SPL token transfer
 *
 * @param options - The options for the SPL token transfer
 *
 * @param options.rpc - The Solana RPC client
 * @param options.from - The source address
 * @param options.to - The destination address
 * @param options.mintAddress - The mint address of the token
 * @param options.amount - The amount in units of the token to transfer
 *
 * @returns The SPL token transfer transaction
 */
export declare function getSplTransferBase64Transaction({ rpc, from, to, mintAddress, amount, }: GetSplTokenTransferOptions): Promise<string>;
export {};
//# sourceMappingURL=transfer.d.ts.map