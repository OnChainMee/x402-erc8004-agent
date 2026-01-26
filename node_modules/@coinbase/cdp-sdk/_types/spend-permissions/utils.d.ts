import type { SpendPermissionNetwork } from "../openapi-client/index.js";
import type { Address } from "../types/misc.js";
/**
 * Resolve the address of a token for a given network.
 *
 * @param token - The token symbol or contract address.
 * @param network - The network to get the address for.
 *
 * @returns The address of the token.
 */
export declare function resolveTokenAddress(token: "eth" | "usdc" | Address, network: SpendPermissionNetwork): Address;
//# sourceMappingURL=utils.d.ts.map