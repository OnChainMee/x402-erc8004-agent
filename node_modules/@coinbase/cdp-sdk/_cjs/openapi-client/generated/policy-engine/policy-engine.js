"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePolicy = exports.deletePolicy = exports.getPolicyById = exports.createPolicy = exports.listPolicies = void 0;
const cdpApiClient_js_1 = require("../../cdpApiClient.js");
/**
 * Lists the policies belonging to the developer's CDP Project. Use the `scope` parameter to filter the policies by scope.
The response is paginated, and by default, returns 20 policies per page.
 * @summary List policies
 */
const listPolicies = (params, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/policy-engine/policies`, method: "GET", params }, options);
};
exports.listPolicies = listPolicies;
/**
 * Create a policy that can be used to govern the behavior of accounts.
 * @summary Create a policy
 */
const createPolicy = (createPolicyBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/policy-engine/policies`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: createPolicyBody,
    }, options);
};
exports.createPolicy = createPolicy;
/**
 * Get a policy by its ID.
 * @summary Get a policy by ID
 */
const getPolicyById = (policyId, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/policy-engine/policies/${policyId}`, method: "GET" }, options);
};
exports.getPolicyById = getPolicyById;
/**
 * Delete a policy by its ID. This will have the effect of removing the policy from all accounts that are currently using it.
 * @summary Delete a policy
 */
const deletePolicy = (policyId, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({ url: `/v2/policy-engine/policies/${policyId}`, method: "DELETE" }, options);
};
exports.deletePolicy = deletePolicy;
/**
 * Updates a policy by its ID. This will have the effect of applying the updated policy to all accounts that are currently using it.
 * @summary Update a policy
 */
const updatePolicy = (policyId, updatePolicyBody, options) => {
    return (0, cdpApiClient_js_1.cdpApiClient)({
        url: `/v2/policy-engine/policies/${policyId}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        data: updatePolicyBody,
    }, options);
};
exports.updatePolicy = updatePolicy;
//# sourceMappingURL=policy-engine.js.map