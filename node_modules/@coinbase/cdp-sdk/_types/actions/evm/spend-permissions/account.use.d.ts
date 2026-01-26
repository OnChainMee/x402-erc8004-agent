import type { UseSpendPermissionOptions } from "./types.js";
import type { CdpOpenApiClientType } from "../../../openapi-client/index.js";
import type { Address } from "../../../types/misc.js";
import type { TransactionResult } from "../sendTransaction.js";
/**
 * Use a spend permission to spend tokens.
 *
 * @param apiClient - The API client to use.
 * @param address - The address of the account to use the spend permission on.
 * @param options - The options for the spend permission.
 *
 * @returns The transaction hash of the spend permission.
 */
export declare function useSpendPermission(apiClient: CdpOpenApiClientType, address: Address, options: UseSpendPermissionOptions): Promise<TransactionResult>;
//# sourceMappingURL=account.use.d.ts.map