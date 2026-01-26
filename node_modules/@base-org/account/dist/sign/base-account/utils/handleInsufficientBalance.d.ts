import { InsufficientBalanceErrorData } from '../../../core/error/errors.js';
import { RequestArguments } from '../../../core/provider/interface.js';
import { Address } from '../../../core/type/index.js';
import { PublicClient } from 'viem';
export declare function handleInsufficientBalanceError({ globalAccountAddress, subAccountAddress, client, request, globalAccountRequest, }: {
    errorData: InsufficientBalanceErrorData;
    globalAccountAddress: Address;
    subAccountAddress: Address;
    request: RequestArguments;
    client: PublicClient;
    globalAccountRequest: (request: RequestArguments) => Promise<unknown>;
}): Promise<`0x${string}` | {
    capabilities?: import("viem").ExtractCapabilities<"sendCalls", "ReturnType"> | undefined;
    id: string;
} | undefined>;
//# sourceMappingURL=handleInsufficientBalance.d.ts.map