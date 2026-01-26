import { Account, SolanaAccount } from "./types.js";
import { CdpOpenApiClientType } from "../../openapi-client/index.js";
/**
 * Options for converting a pre-existing EvmAccount to a EvmServerAccount.
 */
export type ToSolanaAccountOptions = {
    /** The Solana account that was previously created. */
    account: Account;
};
/**
 * Creates a Solana account instance with actions from an existing Solana account.
 * Use this to interact with previously deployed Solana accounts, rather than creating new ones.
 *
 * @param {CdpOpenApiClientType} apiClient - The API client.
 * @param {ToSolanaAccountOptions} options - Configuration options.
 * @param {Account} options.account - The Solana account that was previously created.
 * @returns {SolanaAccount} A configured SolanaAccount instance ready for signing.
 */
export declare function toSolanaAccount(apiClient: CdpOpenApiClientType, options: ToSolanaAccountOptions): SolanaAccount;
//# sourceMappingURL=toSolanaAccount.d.ts.map