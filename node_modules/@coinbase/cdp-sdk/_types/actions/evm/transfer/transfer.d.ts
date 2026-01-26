import type { TransferExecutionStrategy, SmartAccountTransferOptions, TransferOptions } from "./types.js";
import type { EvmAccount, EvmSmartAccount } from "../../../accounts/evm/types.js";
import type { CdpOpenApiClientType } from "../../../openapi-client/index.js";
import type { TransactionResult } from "../sendTransaction.js";
import type { SendUserOperationReturnType } from "../sendUserOperation.js";
/**
 * Transfer an amount of a token from an account to another account.
 *
 * @param apiClient - The client to use to send the transaction.
 * @param from - The account to send the transaction from.
 * @param transferArgs - The options for the transfer.
 * @param transferStrategy - The strategy to use to execute the transfer.
 * @returns The result of the transfer.
 */
export declare function transfer<T extends EvmAccount | EvmSmartAccount>(apiClient: CdpOpenApiClientType, from: T, transferArgs: T extends EvmSmartAccount ? SmartAccountTransferOptions : TransferOptions, transferStrategy: TransferExecutionStrategy<T>): Promise<T extends EvmSmartAccount ? SendUserOperationReturnType : TransactionResult>;
//# sourceMappingURL=transfer.d.ts.map