import { CDPEndUserClient } from "./end-user/endUser.js";
import { EvmClient } from "./evm/evm.js";
import { PoliciesClient } from "./policies/policies.js";
import { SolanaClient } from "./solana/solana.js";
export interface CdpClientOptions {
    /** The API key ID. */
    apiKeyId?: string;
    /** The API key secret. */
    apiKeySecret?: string;
    /** The wallet secret. */
    walletSecret?: string;
    /** Whether to enable debugging. */
    debugging?: boolean;
    /** The host URL to connect to. */
    basePath?: string;
}
/**
 * The main client for interacting with the CDP API.
 */
export declare class CdpClient {
    /** Namespace containing all EVM methods. */
    evm: EvmClient;
    /** Namespace containing all Solana methods. */
    solana: SolanaClient;
    /** Namespace containing all Policies methods. */
    policies: PoliciesClient;
    /** Namespace containing all end user methods. */
    endUser: CDPEndUserClient;
    /**
     * The CdpClient is the main class for interacting with the CDP API.
     *
     * There are a few required parameters that are configured in the [CDP Portal](https://portal.cdp.coinbase.com/projects/api-keys):
     * - **CDP Secret API Key** (`apiKeyId` & `apiKeySecret`): These are used to authenticate requests to the entire suite of
     *   APIs offered on Coinbase Developer Platform.
     *   [Read more about CDP API keys](https://docs.cdp.coinbase.com/get-started/docs/cdp-api-keys).
     * - **Wallet Secret** (`walletSecret`): This secret is used specifically to authenticate requests to `POST`, and `DELETE`
     *   endpoints in the EVM and Solana Account APIs.
     *
     * These parameters can be set as environment variables:
     * ```
     * CDP_API_KEY_ID=your-api-key-id
     * CDP_API_KEY_SECRET=your-api-key-secret
     * CDP_WALLET_SECRET=your-wallet-secret
     * ```
     *
     * Or passed as options to the constructor:
     *
     * ```typescript
     * const cdp = new CdpClient({
     *   apiKeyId: "your-api-key-id",
     *   apiKeySecret: "your-api-key-secret",
     *   walletSecret: "your-wallet-secret",
     * });
     * ```
     *
     * The CdpClient is namespaced by chain type: `evm` or `solana`.
     *
     * As an example, to create a new EVM account, use `cdp.evm.createAccount()`.
     *
     * To create a new Solana account, use `cdp.solana.createAccount()`.
     *
     * @param {CdpClientOptions} [options] - Configuration options for the CdpClient.
     */
    constructor(options?: CdpClientOptions);
}
//# sourceMappingURL=cdp.d.ts.map