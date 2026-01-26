import type * as Address from 'ox/Address';
import type * as Hex from 'ox/Hex';
import type { Client } from 'viem';
/**
 * Wraps a signature in ERC-8010 format to enable pre-delegated signature verification.
 *
 * @param client - The client to use.
 * @param parameters - The parameters for the wrap function.
 * @returns The wrapped signature.
 */
export declare function wrap(client: Client, parameters: wrap.Parameters): Promise<`0x${string}`>;
export declare namespace wrap {
    type Parameters = {
        address: Address.Address;
        signature: Hex.Hex;
    };
}
//# sourceMappingURL=erc8010.d.ts.map