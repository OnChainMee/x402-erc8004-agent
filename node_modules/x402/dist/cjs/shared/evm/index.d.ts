import { Transport, Chain, Account, Client, Address } from 'viem';
import { C as ChainConfig } from '../../config-CFBSAuxW.js';
import { C as ConnectedClient } from '../../wallet-h2_C4cJt.js';
import '@solana/kit';
import 'viem/chains';

/**
 * Gets the USDC contract address for the current chain from the client
 *
 * @param client - The Viem client instance connected to the blockchain
 * @returns The USDC contract address for the current chain
 */
declare function getUsdcAddress<transport extends Transport, chain extends Chain | undefined = undefined, account extends Account | undefined = undefined>(client: Client<transport, chain, account>): Address;
/**
 * Gets the USDC contract address for a specific chain ID
 *
 * @deprecated Use `getUsdcChainConfigForChain` instead
 * @param chainId - The chain ID to get the USDC contract address for
 * @returns The USDC contract address for the specified chain
 */
declare function getUsdcAddressForChain(chainId: number): Address;
/**
 * Gets the USDC address and eip712 domain name for a specific chain ID
 *
 * @param chainId - The chain ID
 * @returns The USDC contract address and eip712 domain name  for the specified chain
 */
declare function getUsdcChainConfigForChain(chainId: number): ChainConfig | undefined;
/**
 * Gets the version of the USDC contract, using a cache to avoid repeated calls
 *
 * @param client - The Viem client instance connected to the blockchain
 * @returns A promise that resolves to the USDC contract version string
 */
declare function getVersion<transport extends Transport, chain extends Chain, account extends Account | undefined = undefined>(client: ConnectedClient<transport, chain, account>): Promise<string>;
/**
 * Gets the USDC balance for a specific address
 *
 * @param client - The Viem client instance connected to the blockchain
 * @param address - The address to check the USDC balance for
 * @returns A promise that resolves to the USDC balance as a bigint
 */
declare function getUSDCBalance<transport extends Transport, chain extends Chain, account extends Account | undefined = undefined>(client: ConnectedClient<transport, chain, account>, address: Address): Promise<bigint>;

/**
 * Gets the USDC balance for a specific address
 *
 * @param client - The Viem client instance connected to the blockchain
 * @param erc20Address - The address of the ERC20 contract
 * @param address - The address to check the USDC balance for
 * @returns A promise that resolves to the USDC balance as a bigint
 */
declare function getERC20Balance<transport extends Transport, chain extends Chain, account extends Account | undefined = undefined>(client: ConnectedClient<transport, chain, account>, erc20Address: Address, address: Address): Promise<bigint>;

export { getERC20Balance, getUSDCBalance, getUsdcAddress, getUsdcAddressForChain, getUsdcChainConfigForChain, getVersion };
