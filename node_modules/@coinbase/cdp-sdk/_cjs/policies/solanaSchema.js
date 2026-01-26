"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignSolMessageRuleSchema = exports.SignSolMessageCriteriaSchema = exports.SendSolTransactionRuleSchema = exports.SignSolTransactionRuleSchema = exports.SolOperationEnum = exports.SendSolTransactionCriteriaSchema = exports.SignSolTransactionCriteriaSchema = exports.SolMessageCriterionSchema = exports.SolNetworkCriterionSchema = exports.ProgramIdCriterionSchema = exports.SolDataCriterionSchema = exports.MintAddressCriterionSchema = exports.SplValueCriterionSchema = exports.SplAddressCriterionSchema = exports.SolValueCriterionSchema = exports.SolAddressCriterionSchema = exports.SolDataConditionSchema = exports.SolDataParameterConditionListSchema = exports.SolDataParameterConditionSchema = exports.SolDataParameterListOperatorEnum = exports.SolDataParameterOperatorEnum = exports.IdlSchema = exports.KnownIdlTypeEnum = exports.SolNetworkEnum = exports.SolNetworkOperatorEnum = exports.ProgramIdOperatorEnum = exports.MintAddressOperatorEnum = exports.SplValueOperatorEnum = exports.SplAddressOperatorEnum = exports.SolValueOperatorEnum = exports.SolAddressOperatorEnum = exports.ActionEnum = void 0;
const zod_1 = require("zod");
/**
 * Enum for Action types
 */
exports.ActionEnum = zod_1.z.enum(["reject", "accept"]);
/**
 * Enum for SolAddressOperator values
 */
exports.SolAddressOperatorEnum = zod_1.z.enum(["in", "not in"]);
/**
 * Enum for SolValueOperator values
 */
exports.SolValueOperatorEnum = zod_1.z.enum([">", ">=", "<", "<=", "=="]);
/**
 * Enum for SplAddressOperator values
 */
exports.SplAddressOperatorEnum = zod_1.z.enum(["in", "not in"]);
/**
 * Enum for SplValueOperator values
 */
exports.SplValueOperatorEnum = zod_1.z.enum([">", ">=", "<", "<=", "=="]);
/**
 * Enum for MintAddressOperator values
 */
exports.MintAddressOperatorEnum = zod_1.z.enum(["in", "not in"]);
/**
 * Enum for ProgramIdOperator values
 */
exports.ProgramIdOperatorEnum = zod_1.z.enum(["in", "not in"]);
/**
 * Enum for SolNetworkOperator values
 */
exports.SolNetworkOperatorEnum = zod_1.z.enum(["in", "not in"]);
/**
 * Enum for supported Solana networks
 */
exports.SolNetworkEnum = zod_1.z.enum(["solana-devnet", "solana"]);
/**
 * Enum for KnownIdlType values
 */
exports.KnownIdlTypeEnum = zod_1.z.enum(["SystemProgram", "TokenProgram", "AssociatedTokenProgram"]);
/**
 * Schema for IDL specifications following Anchor's IDL format v0.30+
 */
exports.IdlSchema = zod_1.z
    .object({
    /** The program address */
    address: zod_1.z.string(),
    /** Array of instruction specifications */
    instructions: zod_1.z.array(zod_1.z.any()),
})
    .passthrough();
/**
 * Enum for SolDataParameterOperator values
 */
exports.SolDataParameterOperatorEnum = zod_1.z.enum([">", ">=", "<", "<=", "=="]);
/**
 * Enum for SolDataParameterListOperator values
 */
exports.SolDataParameterListOperatorEnum = zod_1.z.enum(["in", "not in"]);
/**
 * Schema for Solana data parameter conditions (single value)
 */
exports.SolDataParameterConditionSchema = zod_1.z.object({
    /** The parameter name */
    name: zod_1.z.string(),
    /** The operator to use for the comparison */
    operator: exports.SolDataParameterOperatorEnum,
    /** The value to compare against */
    value: zod_1.z.string(),
});
/**
 * Schema for Solana data parameter conditions (list values)
 */
exports.SolDataParameterConditionListSchema = zod_1.z.object({
    /** The parameter name */
    name: zod_1.z.string(),
    /** The operator to use for the comparison */
    operator: exports.SolDataParameterListOperatorEnum,
    /** The values to compare against */
    values: zod_1.z.array(zod_1.z.string()),
});
/**
 * Schema for Solana data conditions
 */
exports.SolDataConditionSchema = zod_1.z.object({
    /** The instruction name */
    instruction: zod_1.z.string(),
    /** Parameter conditions for the instruction */
    params: zod_1.z
        .array(zod_1.z.union([exports.SolDataParameterConditionSchema, exports.SolDataParameterConditionListSchema]))
        .optional(),
});
/**
 * Schema for Solana address criterions
 */
exports.SolAddressCriterionSchema = zod_1.z.object({
    /** The type of criterion, must be "solAddress" for Solana address-based rules. */
    type: zod_1.z.literal("solAddress"),
    /**
     * Array of Solana addresses to compare against.
     * Each address must be a valid Base58-encoded Solana address (32-44 characters).
     */
    addresses: zod_1.z.array(zod_1.z.string().regex(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/)),
    /**
     * The operator to use for evaluating transaction addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: exports.SolAddressOperatorEnum,
});
/**
 * Schema for SOL value criterions
 */
exports.SolValueCriterionSchema = zod_1.z.object({
    /** The type of criterion, must be "solValue" for SOL value-based rules. */
    type: zod_1.z.literal("solValue"),
    /**
     * The SOL value amount in lamports to compare against, as a string.
     * Must contain only digits.
     */
    solValue: zod_1.z.string().regex(/^[0-9]+$/),
    /** The comparison operator to use for evaluating transaction SOL values against the threshold. */
    operator: exports.SolValueOperatorEnum,
});
/**
 * Schema for SPL address criterions
 */
exports.SplAddressCriterionSchema = zod_1.z.object({
    /** The type of criterion, must be "splAddress" for SPL address-based rules. */
    type: zod_1.z.literal("splAddress"),
    /**
     * Array of Solana addresses to compare against for SPL token transfer recipients.
     * Each address must be a valid Base58-encoded Solana address (32-44 characters).
     */
    addresses: zod_1.z.array(zod_1.z.string().regex(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/)),
    /**
     * The operator to use for evaluating SPL token transfer recipient addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: exports.SplAddressOperatorEnum,
});
/**
 * Schema for SPL value criterions
 */
exports.SplValueCriterionSchema = zod_1.z.object({
    /** The type of criterion, must be "splValue" for SPL token value-based rules. */
    type: zod_1.z.literal("splValue"),
    /**
     * The SPL token value amount to compare against, as a string.
     * Must contain only digits.
     */
    splValue: zod_1.z.string().regex(/^[0-9]+$/),
    /** The comparison operator to use for evaluating SPL token values against the threshold. */
    operator: exports.SplValueOperatorEnum,
});
/**
 * Schema for mint address criterions
 */
exports.MintAddressCriterionSchema = zod_1.z.object({
    /** The type of criterion, must be "mintAddress" for token mint address-based rules. */
    type: zod_1.z.literal("mintAddress"),
    /**
     * Array of Solana addresses to compare against for token mint addresses.
     * Each address must be a valid Base58-encoded Solana address (32-44 characters).
     */
    addresses: zod_1.z.array(zod_1.z.string().regex(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/)),
    /**
     * The operator to use for evaluating token mint addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: exports.MintAddressOperatorEnum,
});
/**
 * Schema for Solana data criterions
 */
exports.SolDataCriterionSchema = zod_1.z.object({
    /** The type of criterion, must be "solData" for Solana data-based rules. */
    type: zod_1.z.literal("solData"),
    /**
     * List of IDL specifications. Can contain known program names (strings) or custom IDL objects.
     */
    idls: zod_1.z.array(zod_1.z.union([exports.KnownIdlTypeEnum, exports.IdlSchema])),
    /**
     * A list of conditions to apply against the transaction instruction.
     * Only one condition must evaluate to true for this criterion to be met.
     */
    conditions: zod_1.z.array(exports.SolDataConditionSchema),
});
/**
 * Schema for program ID criterions
 */
exports.ProgramIdCriterionSchema = zod_1.z.object({
    /** The type of criterion, must be "programId" for program ID-based rules. */
    type: zod_1.z.literal("programId"),
    /**
     * Array of Solana program IDs to compare against.
     * Each program ID must be a valid Base58-encoded Solana address (32-44 characters).
     */
    programIds: zod_1.z.array(zod_1.z.string().regex(/^[1-9A-HJ-NP-Za-km-z]{32,44}$/)),
    /**
     * The operator to use for evaluating transaction program IDs.
     * "in" checks if a program ID is in the provided list.
     * "not in" checks if a program ID is not in the provided list.
     */
    operator: exports.ProgramIdOperatorEnum,
});
/**
 * Schema for Solana network criterions
 */
exports.SolNetworkCriterionSchema = zod_1.z.object({
    /** The type of criterion, must be "solNetwork" for network-based rules. */
    type: zod_1.z.literal("solNetwork"),
    /**
     * Array of Solana networks to compare against.
     */
    networks: zod_1.z.array(exports.SolNetworkEnum),
    /**
     * The operator to use for evaluating transaction network.
     * "in" checks if the network is in the provided list.
     * "not in" checks if the network is not in the provided list.
     */
    operator: exports.SolNetworkOperatorEnum,
});
/**
 * Schema for Solana message criterions
 */
exports.SolMessageCriterionSchema = zod_1.z.object({
    /** The type of criterion, must be "solMessage" for message-based rules. */
    type: zod_1.z.literal("solMessage"),
    /**
     * A regular expression pattern to match against the message.
     */
    match: zod_1.z.string(),
});
/**
 * Schema for criteria used in SignSolTransaction operations
 */
exports.SignSolTransactionCriteriaSchema = zod_1.z
    .array(zod_1.z.discriminatedUnion("type", [
    exports.SolAddressCriterionSchema,
    exports.SolValueCriterionSchema,
    exports.SplAddressCriterionSchema,
    exports.SplValueCriterionSchema,
    exports.MintAddressCriterionSchema,
    exports.SolDataCriterionSchema,
    exports.ProgramIdCriterionSchema,
]))
    .max(10)
    .min(1);
/**
 * Schema for criteria used in SendSolTransaction operations
 */
exports.SendSolTransactionCriteriaSchema = zod_1.z
    .array(zod_1.z.discriminatedUnion("type", [
    exports.SolAddressCriterionSchema,
    exports.SolValueCriterionSchema,
    exports.SplAddressCriterionSchema,
    exports.SplValueCriterionSchema,
    exports.MintAddressCriterionSchema,
    exports.SolDataCriterionSchema,
    exports.ProgramIdCriterionSchema,
    exports.SolNetworkCriterionSchema,
]))
    .max(10)
    .min(1);
/**
 * Enum for Solana Operation types
 */
exports.SolOperationEnum = zod_1.z.enum([
    "signSolTransaction",
    "sendSolTransaction",
    "signSolMessage",
]);
/**
 * Type representing a 'signSolTransaction' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
exports.SignSolTransactionRuleSchema = zod_1.z.object({
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the transaction, "reject" will block it.
     */
    action: exports.ActionEnum,
    /**
     * The operation to which this rule applies.
     * Must be "signSolTransaction".
     */
    operation: zod_1.z.literal("signSolTransaction"),
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: exports.SignSolTransactionCriteriaSchema,
});
/**
 * Type representing a 'sendSolTransaction' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
exports.SendSolTransactionRuleSchema = zod_1.z.object({
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the transaction, "reject" will block it.
     */
    action: exports.ActionEnum,
    /**
     * The operation to which this rule applies.
     * Must be "sendSolTransaction".
     */
    operation: zod_1.z.literal("sendSolTransaction"),
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: exports.SendSolTransactionCriteriaSchema,
});
/**
 * Schema for criteria used in SignSolMessage operations
 */
exports.SignSolMessageCriteriaSchema = zod_1.z.array(exports.SolMessageCriterionSchema).max(10).min(1);
/**
 * Type representing a 'signSolMessage' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
exports.SignSolMessageRuleSchema = zod_1.z.object({
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the message signing, "reject" will block it.
     */
    action: exports.ActionEnum,
    /**
     * The operation to which this rule applies.
     * Must be "signSolMessage".
     */
    operation: zod_1.z.literal("signSolMessage"),
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: exports.SignSolMessageCriteriaSchema,
});
//# sourceMappingURL=solanaSchema.js.map