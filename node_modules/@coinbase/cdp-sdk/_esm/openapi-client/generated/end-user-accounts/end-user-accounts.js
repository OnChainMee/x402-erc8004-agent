import { cdpApiClient } from "../../cdpApiClient.js";
/**
 * Creates an end user. An end user is an entity that can own CDP EVM accounts, EVM smart accounts, and/or Solana accounts. 1 or more authentication methods must be associated with an end user. By default, no accounts are created unless the optional `evmAccount` and/or `solanaAccount` fields are provided.
This API is intended to be used by the developer's own backend, and is authenticated using the developer's CDP API key.
 * @summary Create an end user
 */
export const createEndUser = (createEndUserBody, options) => {
    return cdpApiClient({
        url: `/v2/end-users`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: createEndUserBody,
    }, options);
};
/**
 * Lists the end users belonging to the developer's CDP Project.
By default, the response is sorted by creation date in ascending order and paginated to 20 users per page.
 * @summary List end users
 */
export const listEndUsers = (params, options) => {
    return cdpApiClient({ url: `/v2/end-users`, method: "GET", params }, options);
};
/**
 * Validates the end user's access token and returns the end user's information. Returns an error if the access token is invalid or expired.

This API is intended to be used by the developer's own backend, and is authenticated using the developer's CDP API key.
 * @summary Validate end user access token
 */
export const validateEndUserAccessToken = (validateEndUserAccessTokenBody, options) => {
    return cdpApiClient({
        url: `/v2/end-users/auth/validate-token`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: validateEndUserAccessTokenBody,
    }, options);
};
/**
 * Gets an end user by ID.

This API is intended to be used by the developer's own backend, and is authenticated using the developer's CDP API key.
 * @summary Get an end user
 */
export const getEndUser = (userId, options) => {
    return cdpApiClient({ url: `/v2/end-users/${userId}`, method: "GET" }, options);
};
//# sourceMappingURL=end-user-accounts.js.map