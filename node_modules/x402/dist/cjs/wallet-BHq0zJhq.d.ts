import { TransactionSigner, RpcDevnet, SolanaRpcApiDevnet, RpcMainnet, SolanaRpcApiMainnet } from '@solana/kit';

type SvmConnectedClient = RpcDevnet<SolanaRpcApiDevnet> | RpcMainnet<SolanaRpcApiMainnet>;
type SvmSigner = TransactionSigner;
/**
 * Creates a public client configured for the specified SVM network
 *
 * @param network - The network to connect to
 * @returns A public client instance connected to the specified chain
 */
declare function createSvmConnectedClient(network: string): SvmConnectedClient;
/**
 * Creates a Solana signer from a private key.
 *
 * @param privateKey - The base58 encoded private key to create a signer from.
 * @returns A Solana signer.
 */
declare function createSignerFromBase58(privateKey: string): Promise<TransactionSigner>;
/**
 * Checks if the given wallet is a Solana transaction signer wallet.
 *
 * @param wallet - The object wallet to check.
 * @returns True if the wallet satisfies the TransactionSigner interface.
 */
declare function isSignerWallet(wallet: unknown): wallet is SvmSigner;

export { type SvmSigner as S, type SvmConnectedClient as a, createSvmConnectedClient as b, createSignerFromBase58 as c, isSignerWallet as i };
