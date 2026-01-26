import { E as EvmSigner, C as ConnectedClient$1 } from './wallet-h2_C4cJt.js';
import { S as SvmSigner, a as SvmConnectedClient } from './wallet-BHq0zJhq.js';
import { Hex } from 'viem';

type ConnectedClient = ConnectedClient$1 | SvmConnectedClient;
type Signer = EvmSigner | SvmSigner;
type MultiNetworkSigner = {
    evm: EvmSigner;
    svm: SvmSigner;
};
/**
 * Creates a public client configured for the specified network.
 *
 * @param network - The network to connect to.
 * @returns A public client instance connected to the specified chain.
 */
declare function createConnectedClient(network: string): ConnectedClient;
/**
 * Creates a wallet client configured for the specified chain with a private key.
 *
 * @param network - The network to connect to.
 * @param privateKey - The private key to use for signing transactions. This should be a hex string for EVM or a base58 encoded string for SVM.
 * @returns A wallet client instance connected to the specified chain with the provided private key.
 */
declare function createSigner(network: string, privateKey: Hex | string): Promise<Signer>;
/**
 * Checks if the given wallet is an EVM signer wallet.
 *
 * @param wallet - The object wallet to check.
 * @returns True if the wallet is an EVM signer wallet, false otherwise.
 */
declare function isEvmSignerWallet(wallet: Signer): wallet is EvmSigner;
/**
 * Checks if the given wallet is an SVM signer wallet
 *
 * @param wallet - The object wallet to check
 * @returns True if the wallet is an SVM signer wallet, false otherwise
 */
declare function isSvmSignerWallet(wallet: Signer): wallet is SvmSigner;
/**
 * Checks if the given wallet is a multi network signer wallet
 *
 * @param wallet - The object wallet to check
 * @returns True if the wallet is a multi network signer wallet, false otherwise
 */
declare function isMultiNetworkSigner(wallet: object): wallet is MultiNetworkSigner;

export { type ConnectedClient as C, type MultiNetworkSigner as M, type Signer as S, createSigner as a, isSvmSignerWallet as b, createConnectedClient as c, isMultiNetworkSigner as d, isEvmSignerWallet as i };
