"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CDPEndUserClient = void 0;
const crypto_1 = require("crypto");
const analytics_js_1 = require("../../analytics.js");
const index_js_1 = require("../../openapi-client/index.js");
/**
 * The CDP end user client.
 */
class CDPEndUserClient {
    /**
     * Creates an end user. An end user is an entity that can own CDP EVM accounts,
     * EVM smart accounts, and/or Solana accounts.
     *
     * @param options - The options for creating an end user.
     *
     * @returns A promise that resolves to the created end user.
     *
     * @example **Create an end user with an email authentication method**
     *          ```ts
     *          const endUser = await cdp.endUser.createEndUser({
     *            authenticationMethods: [
     *              { type: "email", email: "user@example.com" }
     *            ]
     *          });
     *          console.log(endUser.userId);
     *          ```
     *
     * @example **Create an end user with an EVM EOA account**
     *          ```ts
     *          const endUser = await cdp.endUser.createEndUser({
     *            authenticationMethods: [
     *              { type: "email", email: "user@example.com" }
     *            ],
     *            evmAccount: { createSmartAccount: false }
     *          });
     *          ```
     */
    async createEndUser(options) {
        analytics_js_1.Analytics.trackAction({
            action: "create_end_user",
        });
        const userId = options.userId ?? (0, crypto_1.randomUUID)();
        return index_js_1.CdpOpenApiClient.createEndUser({
            ...options,
            userId,
        });
    }
    /**
     * Lists end users belonging to the developer's CDP Project.
     * By default, the response is sorted by creation date in ascending order and paginated to 20 users per page.
     *
     * @param options - The options for listing end users.
     *
     * @returns A promise that resolves to a paginated list of end users.
     *
     * @example **List all end users**
     *          ```ts
     *          const result = await cdp.endUsers.listEndUsers();
     *          console.log(result.endUsers);
     *          ```
     *
     * @example **With pagination**
     *          ```ts
     *          let page = await cdp.endUsers.listEndUsers({ pageSize: 10 });
     *
     *          while (page.nextPageToken) {
     *            page = await cdp.endUsers.listEndUsers({
     *              pageSize: 10,
     *              pageToken: page.nextPageToken
     *            });
     *          }
     *          ```
     *
     * @example **With sorting**
     *          ```ts
     *          const result = await cdp.endUsers.listEndUsers({
     *            sort: ['createdAt=desc']
     *          });
     *          ```
     */
    async listEndUsers(options = {}) {
        analytics_js_1.Analytics.trackAction({
            action: "list_end_users",
        });
        const params = {
            ...options,
            ...(options.sort && { sort: options.sort.join(",") }),
        };
        return index_js_1.CdpOpenApiClient.listEndUsers(params);
    }
    /**
     * Validates an end user's access token. Throws an error if the access token is invalid.
     *
     * @param options - The options for validating an access token.
     *
     * @returns The end user object if the access token is valid.
     */
    async validateAccessToken(options) {
        analytics_js_1.Analytics.trackAction({
            action: "validate_access_token",
        });
        const { accessToken } = options;
        return index_js_1.CdpOpenApiClient.validateEndUserAccessToken({
            accessToken,
        });
    }
}
exports.CDPEndUserClient = CDPEndUserClient;
//# sourceMappingURL=endUser.js.map