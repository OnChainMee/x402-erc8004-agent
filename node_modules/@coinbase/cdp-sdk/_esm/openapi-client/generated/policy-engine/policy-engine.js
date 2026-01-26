import { cdpApiClient } from "../../cdpApiClient.js";
/**
 * Lists the policies belonging to the developer's CDP Project. Use the `scope` parameter to filter the policies by scope.
The response is paginated, and by default, returns 20 policies per page.
 * @summary List policies
 */
export const listPolicies = (params, options) => {
    return cdpApiClient({ url: `/v2/policy-engine/policies`, method: "GET", params }, options);
};
/**
 * Create a policy that can be used to govern the behavior of accounts.
 * @summary Create a policy
 */
export const createPolicy = (createPolicyBody, options) => {
    return cdpApiClient({
        url: `/v2/policy-engine/policies`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: createPolicyBody,
    }, options);
};
/**
 * Get a policy by its ID.
 * @summary Get a policy by ID
 */
export const getPolicyById = (policyId, options) => {
    return cdpApiClient({ url: `/v2/policy-engine/policies/${policyId}`, method: "GET" }, options);
};
/**
 * Delete a policy by its ID. This will have the effect of removing the policy from all accounts that are currently using it.
 * @summary Delete a policy
 */
export const deletePolicy = (policyId, options) => {
    return cdpApiClient({ url: `/v2/policy-engine/policies/${policyId}`, method: "DELETE" }, options);
};
/**
 * Updates a policy by its ID. This will have the effect of applying the updated policy to all accounts that are currently using it.
 * @summary Update a policy
 */
export const updatePolicy = (policyId, updatePolicyBody, options) => {
    return cdpApiClient({
        url: `/v2/policy-engine/policies/${policyId}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        data: updatePolicyBody,
    }, options);
};
//# sourceMappingURL=policy-engine.js.map