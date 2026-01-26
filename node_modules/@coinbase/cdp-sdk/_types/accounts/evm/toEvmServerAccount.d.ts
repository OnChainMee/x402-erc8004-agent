import type { EvmServerAccount } from "./types.js";
import type { CdpOpenApiClientType, EvmAccount } from "../../openapi-client/index.js";
/**
 * Options for converting a pre-existing EvmAccount to a EvmServerAccount.
 */
export type ToEvmServerAccountOptions = {
    /** The EvmAccount that was previously created. */
    account: EvmAccount;
};
/**
 * Creates a Server-managed EvmAccount instance from an existing EvmAccount.
 * Use this to interact with previously deployed EvmAccounts, rather than creating new ones.
 *
 * @param {CdpOpenApiClientType} apiClient - The API client.
 * @param {ToEvmServerAccountOptions} options - Configuration options.
 * @param {EvmAccount} options.account - The EvmAccount that was previously created.
 * @returns {EvmServerAccount} A configured EvmAccount instance ready for signing.
 */
export declare function toEvmServerAccount(apiClient: CdpOpenApiClientType, options: ToEvmServerAccountOptions): EvmServerAccount;
//# sourceMappingURL=toEvmServerAccount.d.ts.map