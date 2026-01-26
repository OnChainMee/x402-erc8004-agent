import { Network } from "./types.js";
/**
 * Get the address of an ERC20 token for a given network.
 * If a contract address is provided, it will not be found in the map and will be returned as is.
 *
 * @param token - The token symbol or contract address.
 * @param network - The network to get the address for.
 *
 * @returns The address of the ERC20 token.
 */
export declare function getErc20Address(token: string, network: Network): any;
//# sourceMappingURL=utils.d.ts.map