"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendUserOperationRuleSchema = exports.PrepareUserOperationRuleSchema = exports.SendEvmTransactionRuleSchema = exports.SignEvmTypedDataRuleSchema = exports.SignEvmMessageRuleSchema = exports.SignEvmHashRuleSchema = exports.SignEvmTransactionRuleSchema = exports.ActionEnum = exports.EvmOperationEnum = exports.SendUserOperationCriteriaSchema = exports.PrepareUserOperationCriteriaSchema = exports.SendEvmTransactionCriteriaSchema = exports.SignEvmMessageCriteriaSchema = exports.SignEvmTransactionCriteriaSchema = exports.EvmDataCriterionSchema = exports.EvmDataConditionSchema = exports.EvmDataParameterConditionSchema = exports.EvmDataParameterConditionListSchema = exports.SignEvmTypedDataCriteriaSchema = exports.SignEvmTypedDataVerifyingContractCriterionSchema = exports.SignEvmTypedDataFieldCriterionSchema = exports.EvmTypedStringConditionSchema = exports.EvmTypedNumericalConditionSchema = exports.EvmTypedAddressConditionSchema = exports.NetUSDChangeCriterionSchema = exports.EvmMessageCriterionSchema = exports.EvmNetworkCriterionSchema = exports.PrepareUserOperationEvmNetworkCriterionSchema = exports.SendEvmTransactionEvmNetworkCriterionSchema = exports.SendEvmTransactionEvmNetworkEnum = exports.PrepareUserOperationEvmNetworkEnum = exports.EvmAddressCriterionSchema = exports.EthValueCriterionSchema = exports.EvmNetworkOperatorEnum = exports.EvmAddressOperatorEnum = exports.EthValueOperatorEnum = void 0;
const zod_1 = require("abitype/zod");
const zod_2 = require("zod");
/**
 * Enum for EthValueOperator values
 */
exports.EthValueOperatorEnum = zod_2.z.enum([">", ">=", "<", "<=", "=="]);
/**
 * Enum for EvmAddressOperator values
 */
exports.EvmAddressOperatorEnum = zod_2.z.enum(["in", "not in"]);
/**
 * Enum for EvmNetworkOperator values
 */
exports.EvmNetworkOperatorEnum = zod_2.z.enum(["in", "not in"]);
/**
 * Schema for ETH value criterions
 */
exports.EthValueCriterionSchema = zod_2.z.object({
    /** The type of criterion, must be "ethValue" for Ethereum value-based rules. */
    type: zod_2.z.literal("ethValue"),
    /**
     * The ETH value amount in wei to compare against, as a string.
     * Must contain only digits.
     */
    ethValue: zod_2.z.string().regex(/^[0-9]+$/),
    /** The comparison operator to use for evaluating transaction values against the threshold. */
    operator: exports.EthValueOperatorEnum,
});
/**
 * Schema for EVM address criterions
 */
exports.EvmAddressCriterionSchema = zod_2.z.object({
    /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
    type: zod_2.z.literal("evmAddress"),
    /**
     * Array of EVM addresses to compare against.
     * Each address must be a 0x-prefixed 40-character hexadecimal string.
     * Limited to a maximum of 300 addresses per criterion.
     */
    addresses: zod_2.z.array(zod_1.Address).max(300),
    /**
     * The operator to use for evaluating transaction addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: exports.EvmAddressOperatorEnum,
});
/**
 * Enum for  PrepareUserOperation EVM Network values
 */
exports.PrepareUserOperationEvmNetworkEnum = zod_2.z.enum([
    "base-sepolia",
    "base",
    "arbitrum",
    "optimism",
    "zora",
    "polygon",
    "bnb",
    "avalanche",
    "ethereum",
    "ethereum-sepolia",
]);
/**
 * Enum for SendEvmTransaction EVM Network values
 */
exports.SendEvmTransactionEvmNetworkEnum = zod_2.z.enum([
    "base",
    "base-sepolia",
    "ethereum",
    "ethereum-sepolia",
    "avalanche",
    "polygon",
    "optimism",
    "arbitrum",
]);
/**
 * Schema for EVM network criterions
 */
exports.SendEvmTransactionEvmNetworkCriterionSchema = zod_2.z.object({
    /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
    type: zod_2.z.literal("evmNetwork"),
    /**
     * Array of EVM network identifiers to compare against.
     * Either "base", "base-sepolia", "ethereum", "ethereum-sepolia", "avalanche", "polygon", "optimism", "arbitrum"
     */
    networks: zod_2.z.array(exports.SendEvmTransactionEvmNetworkEnum),
    /**
     * The operator to use for evaluating transaction network.
     * "in" checks if a network is in the provided list.
     * "not in" checks if a network is not in the provided list.
     */
    operator: exports.EvmNetworkOperatorEnum,
});
exports.PrepareUserOperationEvmNetworkCriterionSchema = zod_2.z.object({
    /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
    type: zod_2.z.literal("evmNetwork"),
    /**
     * Array of EVM network identifiers to compare against.
     * Either "base-sepolia", "base", "arbitrum", "optimism", "zora", "polygon", "bnb", "avalanche", "ethereum", "ethereum-sepolia"
     */
    networks: zod_2.z.array(exports.PrepareUserOperationEvmNetworkEnum),
    /**
     * The operator to use for evaluating transaction network.
     * "in" checks if a network is in the provided list.
     * "not in" checks if a network is not in the provided list.
     */
    operator: exports.EvmNetworkOperatorEnum,
});
exports.EvmNetworkCriterionSchema = zod_2.z.union([
    exports.SendEvmTransactionEvmNetworkCriterionSchema,
    exports.PrepareUserOperationEvmNetworkCriterionSchema,
]);
/**
 * Schema for EVM message criterions
 */
exports.EvmMessageCriterionSchema = zod_2.z.object({
    /** The type of criterion, must be "evmMessage" for EVM message-based rules. */
    type: zod_2.z.literal("evmMessage"),
    /**
     * A regular expression the message is matched against.
     * Accepts valid regular expression syntax described by [RE2](https://github.com/google/re2/wiki/Syntax).
     */
    match: zod_2.z.string().min(1),
});
/**
 * Schema for Net USD change criterion
 */
exports.NetUSDChangeCriterionSchema = zod_2.z.object({
    /** The type of criterion, must be "netUSDChange" for USD denominated asset transfer rules. */
    type: zod_2.z.literal("netUSDChange"),
    /**
     * The amount of USD, in cents, that the total USD value of a transaction's asset transfer and exposure should be compared to.
     */
    changeCents: zod_2.z.number().int().nonnegative(),
    /**
     * The operator to use for the comparison. The total value of a transaction's asset transfer and exposure in USD will be on the left-hand side of the operator, and the `changeCents` field will be on the right-hand side.
     */
    operator: exports.EthValueOperatorEnum,
});
/**
 * Schema for EVM typed address conditions
 */
exports.EvmTypedAddressConditionSchema = zod_2.z.object({
    /**
     * Array of EVM addresses to compare against.
     * Each address must be a 0x-prefixed 40-character hexadecimal string.
     * Limited to a maximum of 300 addresses per condition.
     */
    addresses: zod_2.z.array(zod_1.Address).max(300),
    /**
     * The operator to use for evaluating addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: exports.EvmAddressOperatorEnum,
    /**
     * The path to the field to compare against this criterion.
     * To reference deeply nested fields, use dot notation (e.g., "order.buyer").
     */
    path: zod_2.z.string().min(1),
});
/**
 * Schema for EVM typed numerical conditions
 */
exports.EvmTypedNumericalConditionSchema = zod_2.z.object({
    /**
     * The numerical value to compare against, as a string.
     * Must contain only digits.
     */
    value: zod_2.z.string().regex(/^[0-9]+$/),
    /**
     * The comparison operator to use.
     */
    operator: exports.EthValueOperatorEnum,
    /**
     * The path to the field to compare against this criterion.
     * To reference deeply nested fields, use dot notation (e.g., "order.price").
     */
    path: zod_2.z.string().min(1),
});
/**
 * Schema for EVM typed string conditions
 */
exports.EvmTypedStringConditionSchema = zod_2.z.object({
    /**
     * A regular expression the string field is matched against.
     * Accepts valid regular expression syntax described by [RE2](https://github.com/google/re2/wiki/Syntax).
     */
    match: zod_2.z.string().min(1),
    /**
     * The path to the field to compare against this criterion.
     * To reference deeply nested fields, use dot notation (e.g., "metadata.description").
     */
    path: zod_2.z.string().min(1),
});
/**
 * Schema for SignEvmTypedData field criterion
 */
exports.SignEvmTypedDataFieldCriterionSchema = zod_2.z.object({
    /** The type of criterion, must be "evmTypedDataField" for typed data field-based rules. */
    type: zod_2.z.literal("evmTypedDataField"),
    /**
     * The EIP-712 type definitions for the typed data.
     * Must include at minimum the primary type being signed.
     */
    types: zod_2.z.object({
        /**
         * EIP-712 compliant map of model names to model definitions.
         */
        types: zod_2.z.record(zod_2.z.array(zod_2.z.object({
            name: zod_2.z.string(),
            type: zod_2.z.string(),
        }))),
        /**
         * The name of the root EIP-712 type. This value must be included in the `types` object.
         */
        primaryType: zod_2.z.string(),
    }),
    /**
     * Array of conditions to apply against typed data fields.
     * Each condition specifies how to validate a specific field within the typed data.
     */
    conditions: zod_2.z
        .array(zod_2.z.union([
        exports.EvmTypedAddressConditionSchema,
        exports.EvmTypedNumericalConditionSchema,
        exports.EvmTypedStringConditionSchema,
    ]))
        .min(1),
});
/**
 * Schema for SignEvmTypedData verifying contract criterion
 */
exports.SignEvmTypedDataVerifyingContractCriterionSchema = zod_2.z.object({
    /** The type of criterion, must be "evmTypedDataVerifyingContract" for verifying contract-based rules. */
    type: zod_2.z.literal("evmTypedDataVerifyingContract"),
    /**
     * Array of EVM addresses allowed or disallowed as verifying contracts.
     * Each address must be a 0x-prefixed 40-character hexadecimal string.
     * Limited to a maximum of 300 addresses per criterion.
     */
    addresses: zod_2.z.array(zod_1.Address).max(300),
    /**
     * The operator to use for evaluating verifying contract addresses.
     * "in" checks if the verifying contract is in the provided list.
     * "not in" checks if the verifying contract is not in the provided list.
     */
    operator: exports.EvmAddressOperatorEnum,
});
/**
 * Schema for criteria used in SignEvmTypedData operations
 */
exports.SignEvmTypedDataCriteriaSchema = zod_2.z
    .array(zod_2.z.discriminatedUnion("type", [
    exports.SignEvmTypedDataFieldCriterionSchema,
    exports.SignEvmTypedDataVerifyingContractCriterionSchema,
]))
    .max(10)
    .min(1);
/**
 * A list of comparables to apply against encoded arguments in the transaction's `data` field.
 */
exports.EvmDataParameterConditionListSchema = zod_2.z.object({
    /**
     * The name of the parameter to check against a transaction's calldata.
     * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
     */
    name: zod_2.z.union([zod_2.z.string().min(1), zod_2.z.string().regex(/^\d+$/)]),
    /**
     * The operator to use for the comparison. The value resolved at the `name` will be on the
     * left-hand side of the operator, and the `values` field will be on the right-hand side.
     */
    operator: zod_2.z.enum(["in", "not in"]),
    /**
     * Values to compare against the resolved `name` value.
     * All values are encoded as strings. Refer to the table in the documentation for how values
     * should be encoded, and which operators are supported for each type.
     */
    values: zod_2.z.array(zod_2.z.string()),
});
/**
 * A single condition to apply against encoded arguments in the transaction's `data` field.
 */
exports.EvmDataParameterConditionSchema = zod_2.z.object({
    /**
     * The name of the parameter to check against a transaction's calldata.
     * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
     */
    name: zod_2.z.union([zod_2.z.string().min(1), zod_2.z.string().regex(/^\d+$/)]),
    /**
     * The operator to use for the comparison. The value resolved at the `name` will be on the
     * left-hand side of the operator, and the `value` field will be on the right-hand side.
     */
    operator: exports.EthValueOperatorEnum,
    /**
     * A single value to compare the value resolved at `name` to.
     * All values are encoded as strings. Refer to the table in the documentation for how values
     * should be encoded, and which operators are supported for each type.
     */
    value: zod_2.z.string(),
});
/**
 * A single condition to apply against the function and encoded arguments in the transaction's `data` field.
 * Each `parameter` configuration must be successfully evaluated against the corresponding function argument
 * in order for a policy to be accepted.
 */
exports.EvmDataConditionSchema = zod_2.z.object({
    /**
     * The name of a smart contract function being called.
     */
    function: zod_2.z.string().min(1),
    /**
     * An optional list of parameter conditions to apply against encoded arguments in the transaction's `data` field.
     */
    params: zod_2.z
        .array(zod_2.z.union([exports.EvmDataParameterConditionSchema, exports.EvmDataParameterConditionListSchema]))
        .min(1)
        .optional(),
});
/**
 * Schema for EVM data criterion
 */
exports.EvmDataCriterionSchema = zod_2.z.object({
    /** The type of criterion, must be "evmData" for EVM transaction rules. */
    type: zod_2.z.literal("evmData"),
    /**
     * The ABI of the smart contract being called. This can be a partial structure with only specific functions.
     */
    abi: zod_2.z.union([zod_2.z.enum(["erc20", "erc721", "erc1155"]), zod_1.Abi]),
    /**
     * A list of conditions to apply against the function and encoded arguments in the transaction's `data` field.
     * Each condition must be met in order for this policy to be accepted or rejected.
     */
    conditions: zod_2.z.array(exports.EvmDataConditionSchema).min(1),
});
/**
 * Schema for criteria used in SignEvmTransaction operations
 */
exports.SignEvmTransactionCriteriaSchema = zod_2.z
    .array(zod_2.z.discriminatedUnion("type", [
    exports.EthValueCriterionSchema,
    exports.EvmAddressCriterionSchema,
    exports.EvmDataCriterionSchema,
    exports.NetUSDChangeCriterionSchema,
]))
    .max(10)
    .min(1);
/**
 * Schema for criteria used in SignEvmMessage operations
 */
exports.SignEvmMessageCriteriaSchema = zod_2.z
    .array(zod_2.z.discriminatedUnion("type", [exports.EvmMessageCriterionSchema]))
    .max(10)
    .min(1);
/**
 * Schema for criteria used in SendEvmTransaction operations
 */
exports.SendEvmTransactionCriteriaSchema = zod_2.z
    .array(zod_2.z.discriminatedUnion("type", [
    exports.EthValueCriterionSchema,
    exports.EvmAddressCriterionSchema,
    exports.SendEvmTransactionEvmNetworkCriterionSchema,
    exports.EvmDataCriterionSchema,
    exports.NetUSDChangeCriterionSchema,
]))
    .max(10)
    .min(1);
/**
 * Schema for criteria used in PrepareUserOperation operations
 */
exports.PrepareUserOperationCriteriaSchema = zod_2.z
    .array(zod_2.z.discriminatedUnion("type", [
    exports.EthValueCriterionSchema,
    exports.EvmAddressCriterionSchema,
    exports.PrepareUserOperationEvmNetworkCriterionSchema,
    exports.EvmDataCriterionSchema,
    exports.NetUSDChangeCriterionSchema,
]))
    .max(10)
    .min(1);
/**
 * Schema for criteria used in SendUserOperation operations
 */
exports.SendUserOperationCriteriaSchema = zod_2.z
    .array(zod_2.z.discriminatedUnion("type", [
    exports.EthValueCriterionSchema,
    exports.EvmAddressCriterionSchema,
    exports.EvmDataCriterionSchema,
    exports.NetUSDChangeCriterionSchema,
]))
    .max(10)
    .min(1);
/**
 * Enum for Evm Operation types
 */
exports.EvmOperationEnum = zod_2.z.enum([
    "signEvmTransaction",
    "sendEvmTransaction",
    "signEvmMessage",
    "signEvmTypedData",
    "signEvmHash",
    "prepareUserOperation",
    "sendUserOperation",
]);
/**
 * Enum for Action types
 */
exports.ActionEnum = zod_2.z.enum(["reject", "accept"]);
/**
 * Type representing a 'signEvmTransaction' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
exports.SignEvmTransactionRuleSchema = zod_2.z.object({
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the transaction, "reject" will block it.
     */
    action: exports.ActionEnum,
    /**
     * The operation to which this rule applies.
     * Must be "signEvmTransaction".
     */
    operation: zod_2.z.literal("signEvmTransaction"),
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: exports.SignEvmTransactionCriteriaSchema,
});
/**
 * Type representing a 'signEvmHash' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
exports.SignEvmHashRuleSchema = zod_2.z.object({
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the signing, "reject" will block it.
     */
    action: exports.ActionEnum,
    /**
     * The operation to which this rule applies.
     * Must be "signEvmHash".
     */
    operation: zod_2.z.literal("signEvmHash"),
});
/**
 * Type representing a 'signEvmMessage' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
exports.SignEvmMessageRuleSchema = zod_2.z.object({
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the signing, "reject" will block it.
     */
    action: exports.ActionEnum,
    /**
     * The operation to which this rule applies.
     * Must be "signEvmMessage".
     */
    operation: zod_2.z.literal("signEvmMessage"),
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: exports.SignEvmMessageCriteriaSchema,
});
/**
 * Type representing a 'signEvmTypedData' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
exports.SignEvmTypedDataRuleSchema = zod_2.z.object({
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the signing, "reject" will block it.
     */
    action: exports.ActionEnum,
    /**
     * The operation to which this rule applies.
     * Must be "signEvmTypedData".
     */
    operation: zod_2.z.literal("signEvmTypedData"),
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: exports.SignEvmTypedDataCriteriaSchema,
});
/**
 * Type representing a 'sendEvmTransaction' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
exports.SendEvmTransactionRuleSchema = zod_2.z.object({
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the transaction, "reject" will block it.
     */
    action: exports.ActionEnum,
    /**
     * The operation to which this rule applies.
     * Must be "sendEvmTransaction".
     */
    operation: zod_2.z.literal("sendEvmTransaction"),
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: exports.SendEvmTransactionCriteriaSchema,
});
/**
 * Type representing a 'prepareUserOperation' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
exports.PrepareUserOperationRuleSchema = zod_2.z.object({
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the operation, "reject" will block it.
     */
    action: exports.ActionEnum,
    /**
     * The operation to which this rule applies.
     * Must be "prepareUserOperation".
     */
    operation: zod_2.z.literal("prepareUserOperation"),
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: exports.PrepareUserOperationCriteriaSchema,
});
/**
 * Type representing a 'sendUserOperation' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
exports.SendUserOperationRuleSchema = zod_2.z.object({
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the operation, "reject" will block it.
     */
    action: exports.ActionEnum,
    /**
     * The operation to which this rule applies.
     * Must be "sendUserOperation".
     */
    operation: zod_2.z.literal("sendUserOperation"),
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: exports.SendUserOperationCriteriaSchema,
});
//# sourceMappingURL=evmSchema.js.map