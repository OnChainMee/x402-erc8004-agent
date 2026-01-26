import { type SendUserOperationReturnType } from "../sendUserOperation.js";
import type { UseSpendPermissionOptions } from "./types.js";
import type { EvmSmartAccount } from "../../../accounts/evm/types.js";
import type { CdpOpenApiClientType } from "../../../openapi-client/index.js";
/**
 * Use a spend permission to spend tokens.
 *
 * @param apiClient - The API client to use.
 * @param account - The smart account to use.
 * @param options - The options for the spend permission.
 *
 * @returns The result of the spend permission.
 */
export declare function useSpendPermission(apiClient: CdpOpenApiClientType, account: EvmSmartAccount, options: UseSpendPermissionOptions): Promise<SendUserOperationReturnType>;
//# sourceMappingURL=smartAccount.use.d.ts.map