import type { KnownEvmNetworks } from "./types.js";
import type { Chain } from "viem";
/**
 * Maps a viem chain to a Coinbase network identifier.
 * This function only supports the networks defined in KnownEvmNetworks.
 *
 * @param chain - The viem chain object
 * @returns The Coinbase network identifier, or undefined if the chain is not supported
 */
export declare function mapChainToNetwork(chain: Chain): KnownEvmNetworks | undefined;
//# sourceMappingURL=chainToNetworkMapper.d.ts.map