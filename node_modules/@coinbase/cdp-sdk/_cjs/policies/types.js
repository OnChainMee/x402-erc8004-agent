"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePolicyBodySchema = exports.CreatePolicyBodySchema = exports.RuleSchema = exports.PolicyScopeEnum = void 0;
const zod_1 = require("zod");
const evmSchema_js_1 = require("./evmSchema.js");
const solanaSchema_js_1 = require("./solanaSchema.js");
/**
 * Enum for policy scopes
 */
exports.PolicyScopeEnum = zod_1.z.enum(["project", "account"]);
/**
 * Schema for policy rules
 */
exports.RuleSchema = zod_1.z.discriminatedUnion("operation", [
    evmSchema_js_1.SignEvmTransactionRuleSchema,
    evmSchema_js_1.SignEvmHashRuleSchema,
    evmSchema_js_1.SignEvmMessageRuleSchema,
    evmSchema_js_1.SignEvmTypedDataRuleSchema,
    evmSchema_js_1.SendEvmTransactionRuleSchema,
    solanaSchema_js_1.SignSolTransactionRuleSchema,
    solanaSchema_js_1.SendSolTransactionRuleSchema,
    solanaSchema_js_1.SignSolMessageRuleSchema,
    evmSchema_js_1.PrepareUserOperationRuleSchema,
    evmSchema_js_1.SendUserOperationRuleSchema,
]);
/**
 * Schema for creating or updating a Policy.
 */
exports.CreatePolicyBodySchema = zod_1.z.object({
    /**
     * The scope of the policy.
     * "project" applies to the entire project, "account" applies to specific accounts.
     */
    scope: exports.PolicyScopeEnum,
    /**
     * An optional human-readable description for the policy.
     * Limited to 50 characters of alphanumeric characters, spaces, commas, and periods.
     */
    description: zod_1.z
        .string()
        .regex(/^[A-Za-z0-9 ,.]{1,50}$/)
        .optional(),
    /**
     * Array of rules that comprise the policy.
     * Limited to a maximum of 10 rules per policy.
     */
    rules: zod_1.z.array(exports.RuleSchema).max(10).min(1),
});
exports.UpdatePolicyBodySchema = zod_1.z.object({
    /**
     * An optional human-readable description for the policy.
     * Limited to 50 characters of alphanumeric characters, spaces, commas, and periods.
     */
    description: zod_1.z
        .string()
        .regex(/^[A-Za-z0-9 ,.]{1,50}$/)
        .optional(),
    /**
     * Array of rules that comprise the policy.
     * Limited to a maximum of 10 rules per policy.
     */
    rules: zod_1.z.array(exports.RuleSchema).max(10).min(1),
});
//# sourceMappingURL=types.js.map