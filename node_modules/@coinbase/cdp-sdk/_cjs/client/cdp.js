"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdpClient = void 0;
const analytics_js_1 = require("../analytics.js");
const index_js_1 = require("../openapi-client/index.js");
const version_js_1 = require("../version.js");
const endUser_js_1 = require("./end-user/endUser.js");
const evm_js_1 = require("./evm/evm.js");
const policies_js_1 = require("./policies/policies.js");
const solana_js_1 = require("./solana/solana.js");
/**
 * The main client for interacting with the CDP API.
 */
class CdpClient {
    /** Namespace containing all EVM methods. */
    evm;
    /** Namespace containing all Solana methods. */
    solana;
    /** Namespace containing all Policies methods. */
    policies;
    /** Namespace containing all end user methods. */
    endUser;
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
    constructor(options = {}) {
        if (Number(process.versions.node.split(".")[0]) < 19) {
            throw new Error(`
Node.js version ${process.versions.node} is not supported. CDP SDK requires Node.js version 19 or higher. Please upgrade your Node.js version to use the CDP SDK.
We recommend using https://github.com/Schniz/fnm for managing your Node.js version.
        `);
        }
        const apiKeyId = options.apiKeyId ?? process.env.CDP_API_KEY_ID ?? process.env.CDP_API_KEY_NAME;
        const apiKeySecret = options.apiKeySecret ?? process.env.CDP_API_KEY_SECRET;
        const walletSecret = options.walletSecret ?? process.env.CDP_WALLET_SECRET;
        if (!apiKeyId || !apiKeySecret) {
            throw new Error(`
\nMissing required CDP Secret API Key configuration parameters.

You can set them as environment variables:

CDP_API_KEY_ID=your-api-key-id
CDP_API_KEY_SECRET=your-api-key-secret

You can also pass them as options to the constructor:

const cdp = new CdpClient({
  apiKeyId: "your-api-key-id",
  apiKeySecret: "your-api-key-secret",
});

If you're performing write operations, make sure to also set your wallet secret:

CDP_WALLET_SECRET=your-wallet-secret

This is also available as an option to the constructor:

const cdp = new CdpClient({
  apiKeyId: "your-api-key-id",
  apiKeySecret: "your-api-key-secret",
  walletSecret: "your-wallet-secret",
});

For more information, see: https://github.com/coinbase/cdp-sdk/blob/main/typescript/README.md#api-keys.
`);
        }
        index_js_1.CdpOpenApiClient.configure({
            ...options,
            apiKeyId,
            apiKeySecret,
            walletSecret,
            source: "sdk",
            sourceVersion: version_js_1.version,
        });
        if (process.env.DISABLE_CDP_ERROR_REPORTING !== "true" ||
            process.env.DISABLE_CDP_USAGE_TRACKING !== "true") {
            analytics_js_1.Analytics.identifier = apiKeyId;
        }
        if (process.env.DISABLE_CDP_ERROR_REPORTING !== "true") {
            analytics_js_1.Analytics.wrapClassWithErrorTracking(CdpClient);
            analytics_js_1.Analytics.wrapClassWithErrorTracking(evm_js_1.EvmClient);
            analytics_js_1.Analytics.wrapClassWithErrorTracking(solana_js_1.SolanaClient);
            analytics_js_1.Analytics.wrapClassWithErrorTracking(policies_js_1.PoliciesClient);
        }
        this.evm = new evm_js_1.EvmClient();
        this.solana = new solana_js_1.SolanaClient();
        this.policies = new policies_js_1.PoliciesClient();
        this.endUser = new endUser_js_1.CDPEndUserClient();
    }
}
exports.CdpClient = CdpClient;
//# sourceMappingURL=cdp.js.map