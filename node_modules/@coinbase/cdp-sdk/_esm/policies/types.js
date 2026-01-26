import { z } from "zod";
import { PrepareUserOperationRuleSchema, SendEvmTransactionRuleSchema, SignEvmHashRuleSchema, SignEvmMessageRuleSchema, SignEvmTransactionRuleSchema, SignEvmTypedDataRuleSchema, SendUserOperationRuleSchema, } from "./evmSchema.js";
import { SendSolTransactionRuleSchema, SignSolTransactionRuleSchema, SignSolMessageRuleSchema, } from "./solanaSchema.js";
/**
 * Enum for policy scopes
 */
export const PolicyScopeEnum = z.enum(["project", "account"]);
/**
 * Schema for policy rules
 */
export const RuleSchema = z.discriminatedUnion("operation", [
    SignEvmTransactionRuleSchema,
    SignEvmHashRuleSchema,
    SignEvmMessageRuleSchema,
    SignEvmTypedDataRuleSchema,
    SendEvmTransactionRuleSchema,
    SignSolTransactionRuleSchema,
    SendSolTransactionRuleSchema,
    SignSolMessageRuleSchema,
    PrepareUserOperationRuleSchema,
    SendUserOperationRuleSchema,
]);
/**
 * Schema for creating or updating a Policy.
 */
export const CreatePolicyBodySchema = z.object({
    /**
     * The scope of the policy.
     * "project" applies to the entire project, "account" applies to specific accounts.
     */
    scope: PolicyScopeEnum,
    /**
     * An optional human-readable description for the policy.
     * Limited to 50 characters of alphanumeric characters, spaces, commas, and periods.
     */
    description: z
        .string()
        .regex(/^[A-Za-z0-9 ,.]{1,50}$/)
        .optional(),
    /**
     * Array of rules that comprise the policy.
     * Limited to a maximum of 10 rules per policy.
     */
    rules: z.array(RuleSchema).max(10).min(1),
});
export const UpdatePolicyBodySchema = z.object({
    /**
     * An optional human-readable description for the policy.
     * Limited to 50 characters of alphanumeric characters, spaces, commas, and periods.
     */
    description: z
        .string()
        .regex(/^[A-Za-z0-9 ,.]{1,50}$/)
        .optional(),
    /**
     * Array of rules that comprise the policy.
     * Limited to a maximum of 10 rules per policy.
     */
    rules: z.array(RuleSchema).max(10).min(1),
});
//# sourceMappingURL=types.js.map