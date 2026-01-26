import { Chain, Transport, Account, Client, RpcSchema, PublicActions, WalletActions, LocalAccount, PublicClient, Hex } from 'viem';
import { baseSepolia, avalancheFuji } from 'viem/chains';

type SignerWallet<chain extends Chain = Chain, transport extends Transport = Transport, account extends Account = Account> = Client<transport, chain, account, RpcSchema, PublicActions<transport, chain, account> & WalletActions<chain, account>>;
type ConnectedClient<transport extends Transport = Transport, chain extends Chain | undefined = Chain, account extends Account | undefined = undefined> = PublicClient<transport, chain, account>;
type EvmSigner = SignerWallet<Chain, Transport, Account> | LocalAccount;
/**
 * Creates a public client configured for the specified network
 *
 * @param network - The network to connect to
 * @returns A public client instance connected to the specified chain
 */
declare function createConnectedClient(network: string): ConnectedClient<Transport, Chain, undefined>;
/**
 * Creates a public client configured for the Base Sepolia testnet
 *
 * @deprecated Use `createConnectedClient("base-sepolia")` instead
 * @returns A public client instance connected to Base Sepolia
 */
declare function createClientSepolia(): ConnectedClient<Transport, typeof baseSepolia, undefined>;
/**
 * Creates a public client configured for the Avalanche Fuji testnet
 *
 * @deprecated Use `createConnectedClient("avalanche-fuji")` instead
 * @returns A public client instance connected to Avalanche Fuji
 */
declare function createClientAvalancheFuji(): ConnectedClient<Transport, typeof avalancheFuji, undefined>;
/**
 * Creates a wallet client configured for the specified chain with a private key
 *
 * @param network - The network to connect to
 * @param privateKey - The private key to use for signing transactions
 * @returns A wallet client instance connected to the specified chain with the provided private key
 */
declare function createSigner(network: string, privateKey: Hex): SignerWallet<Chain>;
/**
 * Creates a wallet client configured for the Base Sepolia testnet with a private key
 *
 * @deprecated Use `createSigner("base-sepolia", privateKey)` instead
 * @param privateKey - The private key to use for signing transactions
 * @returns A wallet client instance connected to Base Sepolia with the provided private key
 */
declare function createSignerSepolia(privateKey: Hex): SignerWallet<typeof baseSepolia>;
/**
 * Creates a wallet client configured for the Avalanche Fuji testnet with a private key
 *
 * @deprecated Use `createSigner("avalanche-fuji", privateKey)` instead
 * @param privateKey - The private key to use for signing transactions
 * @returns A wallet client instance connected to Avalanche Fuji with the provided private key
 */
declare function createSignerAvalancheFuji(privateKey: Hex): SignerWallet<typeof avalancheFuji>;
/**
 * Checks if a wallet is a signer wallet
 *
 * @param wallet - The wallet to check
 * @returns True if the wallet is a signer wallet, false otherwise
 */
declare function isSignerWallet<TChain extends Chain = Chain, TTransport extends Transport = Transport, TAccount extends Account = Account>(wallet: SignerWallet<TChain, TTransport, TAccount> | LocalAccount): wallet is SignerWallet<TChain, TTransport, TAccount>;
/**
 * Checks if a wallet is an account
 *
 * @param wallet - The wallet to check
 * @returns True if the wallet is an account, false otherwise
 */
declare function isAccount<TChain extends Chain = Chain, TTransport extends Transport = Transport, TAccount extends Account = Account>(wallet: SignerWallet<TChain, TTransport, TAccount> | LocalAccount): wallet is LocalAccount;
/**
 * Maps network strings to Chain objects
 *
 * @param network - The network string to convert to a Chain object
 * @returns The corresponding Chain object
 */
declare function getChainFromNetwork(network: string | undefined): Chain;
/**
 * Checks whether the given chain is part of the zkstack stack
 *
 * @param chain - The chain to check
 * @returns True if the chain is a ZK stack chain
 */
declare function isZkStackChain(chain: Chain): boolean;

export { type ConnectedClient as C, type EvmSigner as E, type SignerWallet as S, createClientSepolia as a, createConnectedClient as b, createClientAvalancheFuji as c, createSigner as d, createSignerAvalancheFuji as e, createSignerSepolia as f, getChainFromNetwork as g, isSignerWallet as h, isAccount as i, isZkStackChain as j };
