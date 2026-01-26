import { type CdpOpenApiClientType, type EvmSmartAccount as EvmSmartAccountModel } from "../../openapi-client/index.js";
import type { EvmAccount, EvmSmartAccount } from "./types.js";
/**
 * Options for converting a pre-existing EvmSmartAccount and owner to a EvmSmartAccount
 */
export type ToEvmSmartAccountOptions = {
    /** The pre-existing EvmSmartAccount. */
    smartAccount: EvmSmartAccountModel;
    /** The owner of the smart account. */
    owner: EvmAccount;
};
/**
 * Creates a EvmSmartAccount instance from an existing EvmSmartAccount and owner.
 * Use this to interact with previously deployed EvmSmartAccounts, rather than creating new ones.
 *
 * The owner must be the original owner of the evm smart account.
 *
 * @param {CdpOpenApiClientType} apiClient - The API client.
 * @param {ToEvmSmartAccountOptions} options - Configuration options.
 * @param {EvmSmartAccount} options.smartAccount - The deployed evm smart account.
 * @param {EvmAccount} options.owner - The owner which signs for the smart account.
 * @returns {EvmSmartAccount} A configured EvmSmartAccount instance ready for user operation submission.
 */
export declare function toEvmSmartAccount(apiClient: CdpOpenApiClientType, options: ToEvmSmartAccountOptions): EvmSmartAccount;
//# sourceMappingURL=toEvmSmartAccount.d.ts.map