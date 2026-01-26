import { RequestArguments } from '../../../core/provider/interface.js';
import { Address, Hex, PublicClient } from 'viem';
/**
 * This function is used to send a request to the global account.
 * It is used to execute a request that requires a spend permission through the global account.
 * @returns The result of the request.
 */
export declare function routeThroughGlobalAccount({ request, globalAccountAddress, subAccountAddress, client, globalAccountRequest, chainId, prependCalls, }: {
    /** The request to send to the global account. */
    request: RequestArguments;
    /** The address of the global account. */
    globalAccountAddress: Address;
    /** The address of the sub account. */
    subAccountAddress: Address;
    /** The client to use to send the request. */
    client: PublicClient;
    /** The chain id to use to send the request. */
    chainId: number;
    /** Optional calls to prepend to the request. */
    prependCalls?: {
        to: Address;
        data: Hex;
        value: Hex;
    }[] | undefined;
    /** The function to use to send the request to the global account. */
    globalAccountRequest: (request: RequestArguments) => Promise<unknown>;
}): Promise<`0x${string}` | {
    capabilities?: import("viem").ExtractCapabilities<"sendCalls", "ReturnType"> | undefined;
    id: string;
} | undefined>;
//# sourceMappingURL=routeThroughGlobalAccount.d.ts.map