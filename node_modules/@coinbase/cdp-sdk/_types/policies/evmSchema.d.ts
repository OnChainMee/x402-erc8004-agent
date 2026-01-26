import { z } from "zod";
/**
 * Enum for EthValueOperator values
 */
export declare const EthValueOperatorEnum: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
/**
 * Type representing the operators that can be used for ETH value comparisons.
 * These operators determine how transaction values are compared against thresholds.
 */
export type EthValueOperator = z.infer<typeof EthValueOperatorEnum>;
/**
 * Enum for EvmAddressOperator values
 */
export declare const EvmAddressOperatorEnum: z.ZodEnum<["in", "not in"]>;
/**
 * Type representing the operators that can be used for EVM address comparisons.
 * These operators determine how transaction recipient addresses are evaluated against a list.
 */
export type EvmAddressOperator = z.infer<typeof EvmAddressOperatorEnum>;
/**
 * Enum for EvmNetworkOperator values
 */
export declare const EvmNetworkOperatorEnum: z.ZodEnum<["in", "not in"]>;
/**
 * Type representing the operators that can be used for EVM network comparisons.
 * These operators determine how the transaction's network is evaluated against a list.
 */
export type EvmNetworkOperator = z.infer<typeof EvmNetworkOperatorEnum>;
/**
 * Schema for ETH value criterions
 */
export declare const EthValueCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "ethValue" for Ethereum value-based rules. */
    type: z.ZodLiteral<"ethValue">;
    /**
     * The ETH value amount in wei to compare against, as a string.
     * Must contain only digits.
     */
    ethValue: z.ZodString;
    /** The comparison operator to use for evaluating transaction values against the threshold. */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    ethValue: string;
    type: "ethValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}, {
    ethValue: string;
    type: "ethValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}>;
export type EthValueCriterion = z.infer<typeof EthValueCriterionSchema>;
/**
 * Schema for EVM address criterions
 */
export declare const EvmAddressCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
    type: z.ZodLiteral<"evmAddress">;
    /**
     * Array of EVM addresses to compare against.
     * Each address must be a 0x-prefixed 40-character hexadecimal string.
     * Limited to a maximum of 300 addresses per criterion.
     */
    addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
    /**
     * The operator to use for evaluating transaction addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "evmAddress";
    operator: "in" | "not in";
    addresses: `0x${string}`[];
}, {
    type: "evmAddress";
    operator: "in" | "not in";
    addresses: string[];
}>;
export type EvmAddressCriterion = z.infer<typeof EvmAddressCriterionSchema>;
/**
 * Enum for  PrepareUserOperation EVM Network values
 */
export declare const PrepareUserOperationEvmNetworkEnum: z.ZodEnum<["base-sepolia", "base", "arbitrum", "optimism", "zora", "polygon", "bnb", "avalanche", "ethereum", "ethereum-sepolia"]>;
export type PrepareUserOperationEvmNetwork = z.infer<typeof PrepareUserOperationEvmNetworkEnum>;
/**
 * Enum for SendEvmTransaction EVM Network values
 */
export declare const SendEvmTransactionEvmNetworkEnum: z.ZodEnum<["base", "base-sepolia", "ethereum", "ethereum-sepolia", "avalanche", "polygon", "optimism", "arbitrum"]>;
/**
 * Type representing the valid networks used with CDP transaction API's.
 */
export type EvmNetwork = z.ZodUnion<[
    typeof SendEvmTransactionEvmNetworkEnum,
    typeof PrepareUserOperationEvmNetworkEnum
]>;
/**
 * Schema for EVM network criterions
 */
export declare const SendEvmTransactionEvmNetworkCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
    type: z.ZodLiteral<"evmNetwork">;
    /**
     * Array of EVM network identifiers to compare against.
     * Either "base", "base-sepolia", "ethereum", "ethereum-sepolia", "avalanche", "polygon", "optimism", "arbitrum"
     */
    networks: z.ZodArray<z.ZodEnum<["base", "base-sepolia", "ethereum", "ethereum-sepolia", "avalanche", "polygon", "optimism", "arbitrum"]>, "many">;
    /**
     * The operator to use for evaluating transaction network.
     * "in" checks if a network is in the provided list.
     * "not in" checks if a network is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "evmNetwork";
    operator: "in" | "not in";
    networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "polygon" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
}, {
    type: "evmNetwork";
    operator: "in" | "not in";
    networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "polygon" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
}>;
export declare const PrepareUserOperationEvmNetworkCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
    type: z.ZodLiteral<"evmNetwork">;
    /**
     * Array of EVM network identifiers to compare against.
     * Either "base-sepolia", "base", "arbitrum", "optimism", "zora", "polygon", "bnb", "avalanche", "ethereum", "ethereum-sepolia"
     */
    networks: z.ZodArray<z.ZodEnum<["base-sepolia", "base", "arbitrum", "optimism", "zora", "polygon", "bnb", "avalanche", "ethereum", "ethereum-sepolia"]>, "many">;
    /**
     * The operator to use for evaluating transaction network.
     * "in" checks if a network is in the provided list.
     * "not in" checks if a network is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "evmNetwork";
    operator: "in" | "not in";
    networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "zora" | "polygon" | "bnb" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
}, {
    type: "evmNetwork";
    operator: "in" | "not in";
    networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "zora" | "polygon" | "bnb" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
}>;
export declare const EvmNetworkCriterionSchema: z.ZodUnion<[z.ZodObject<{
    /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
    type: z.ZodLiteral<"evmNetwork">;
    /**
     * Array of EVM network identifiers to compare against.
     * Either "base", "base-sepolia", "ethereum", "ethereum-sepolia", "avalanche", "polygon", "optimism", "arbitrum"
     */
    networks: z.ZodArray<z.ZodEnum<["base", "base-sepolia", "ethereum", "ethereum-sepolia", "avalanche", "polygon", "optimism", "arbitrum"]>, "many">;
    /**
     * The operator to use for evaluating transaction network.
     * "in" checks if a network is in the provided list.
     * "not in" checks if a network is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "evmNetwork";
    operator: "in" | "not in";
    networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "polygon" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
}, {
    type: "evmNetwork";
    operator: "in" | "not in";
    networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "polygon" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
}>, z.ZodObject<{
    /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
    type: z.ZodLiteral<"evmNetwork">;
    /**
     * Array of EVM network identifiers to compare against.
     * Either "base-sepolia", "base", "arbitrum", "optimism", "zora", "polygon", "bnb", "avalanche", "ethereum", "ethereum-sepolia"
     */
    networks: z.ZodArray<z.ZodEnum<["base-sepolia", "base", "arbitrum", "optimism", "zora", "polygon", "bnb", "avalanche", "ethereum", "ethereum-sepolia"]>, "many">;
    /**
     * The operator to use for evaluating transaction network.
     * "in" checks if a network is in the provided list.
     * "not in" checks if a network is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "evmNetwork";
    operator: "in" | "not in";
    networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "zora" | "polygon" | "bnb" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
}, {
    type: "evmNetwork";
    operator: "in" | "not in";
    networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "zora" | "polygon" | "bnb" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
}>]>;
export type EvmNetworkCriterion = z.ZodUnion<[
    typeof SendEvmTransactionEvmNetworkCriterionSchema,
    typeof PrepareUserOperationEvmNetworkCriterionSchema
]>;
/**
 * Schema for EVM message criterions
 */
export declare const EvmMessageCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "evmMessage" for EVM message-based rules. */
    type: z.ZodLiteral<"evmMessage">;
    /**
     * A regular expression the message is matched against.
     * Accepts valid regular expression syntax described by [RE2](https://github.com/google/re2/wiki/Syntax).
     */
    match: z.ZodString;
}, "strip", z.ZodTypeAny, {
    match: string;
    type: "evmMessage";
}, {
    match: string;
    type: "evmMessage";
}>;
export type EvmMessageCriterion = z.infer<typeof EvmMessageCriterionSchema>;
/**
 * Schema for Net USD change criterion
 */
export declare const NetUSDChangeCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "netUSDChange" for USD denominated asset transfer rules. */
    type: z.ZodLiteral<"netUSDChange">;
    /**
     * The amount of USD, in cents, that the total USD value of a transaction's asset transfer and exposure should be compared to.
     */
    changeCents: z.ZodNumber;
    /**
     * The operator to use for the comparison. The total value of a transaction's asset transfer and exposure in USD will be on the left-hand side of the operator, and the `changeCents` field will be on the right-hand side.
     */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    type: "netUSDChange";
    operator: ">" | ">=" | "<" | "<=" | "==";
    changeCents: number;
}, {
    type: "netUSDChange";
    operator: ">" | ">=" | "<" | "<=" | "==";
    changeCents: number;
}>;
export type NetUSDChangeCriterion = z.infer<typeof NetUSDChangeCriterionSchema>;
/**
 * Schema for EVM typed address conditions
 */
export declare const EvmTypedAddressConditionSchema: z.ZodObject<{
    /**
     * Array of EVM addresses to compare against.
     * Each address must be a 0x-prefixed 40-character hexadecimal string.
     * Limited to a maximum of 300 addresses per condition.
     */
    addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
    /**
     * The operator to use for evaluating addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
    /**
     * The path to the field to compare against this criterion.
     * To reference deeply nested fields, use dot notation (e.g., "order.buyer").
     */
    path: z.ZodString;
}, "strip", z.ZodTypeAny, {
    path: string;
    operator: "in" | "not in";
    addresses: `0x${string}`[];
}, {
    path: string;
    operator: "in" | "not in";
    addresses: string[];
}>;
export type EvmTypedAddressCondition = z.infer<typeof EvmTypedAddressConditionSchema>;
/**
 * Schema for EVM typed numerical conditions
 */
export declare const EvmTypedNumericalConditionSchema: z.ZodObject<{
    /**
     * The numerical value to compare against, as a string.
     * Must contain only digits.
     */
    value: z.ZodString;
    /**
     * The comparison operator to use.
     */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
    /**
     * The path to the field to compare against this criterion.
     * To reference deeply nested fields, use dot notation (e.g., "order.price").
     */
    path: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    path: string;
    operator: ">" | ">=" | "<" | "<=" | "==";
}, {
    value: string;
    path: string;
    operator: ">" | ">=" | "<" | "<=" | "==";
}>;
export type EvmTypedNumericalCondition = z.infer<typeof EvmTypedNumericalConditionSchema>;
/**
 * Schema for EVM typed string conditions
 */
export declare const EvmTypedStringConditionSchema: z.ZodObject<{
    /**
     * A regular expression the string field is matched against.
     * Accepts valid regular expression syntax described by [RE2](https://github.com/google/re2/wiki/Syntax).
     */
    match: z.ZodString;
    /**
     * The path to the field to compare against this criterion.
     * To reference deeply nested fields, use dot notation (e.g., "metadata.description").
     */
    path: z.ZodString;
}, "strip", z.ZodTypeAny, {
    match: string;
    path: string;
}, {
    match: string;
    path: string;
}>;
export type EvmTypedStringCondition = z.infer<typeof EvmTypedStringConditionSchema>;
/**
 * Schema for SignEvmTypedData field criterion
 */
export declare const SignEvmTypedDataFieldCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "evmTypedDataField" for typed data field-based rules. */
    type: z.ZodLiteral<"evmTypedDataField">;
    /**
     * The EIP-712 type definitions for the typed data.
     * Must include at minimum the primary type being signed.
     */
    types: z.ZodObject<{
        /**
         * EIP-712 compliant map of model names to model definitions.
         */
        types: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            name: string;
        }, {
            type: string;
            name: string;
        }>, "many">>;
        /**
         * The name of the root EIP-712 type. This value must be included in the `types` object.
         */
        primaryType: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        types: Record<string, {
            type: string;
            name: string;
        }[]>;
        primaryType: string;
    }, {
        types: Record<string, {
            type: string;
            name: string;
        }[]>;
        primaryType: string;
    }>;
    /**
     * Array of conditions to apply against typed data fields.
     * Each condition specifies how to validate a specific field within the typed data.
     */
    conditions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        /**
         * Array of EVM addresses to compare against.
         * Each address must be a 0x-prefixed 40-character hexadecimal string.
         * Limited to a maximum of 300 addresses per condition.
         */
        addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
        /**
         * The operator to use for evaluating addresses.
         * "in" checks if an address is in the provided list.
         * "not in" checks if an address is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
        /**
         * The path to the field to compare against this criterion.
         * To reference deeply nested fields, use dot notation (e.g., "order.buyer").
         */
        path: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        operator: "in" | "not in";
        addresses: `0x${string}`[];
    }, {
        path: string;
        operator: "in" | "not in";
        addresses: string[];
    }>, z.ZodObject<{
        /**
         * The numerical value to compare against, as a string.
         * Must contain only digits.
         */
        value: z.ZodString;
        /**
         * The comparison operator to use.
         */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
        /**
         * The path to the field to compare against this criterion.
         * To reference deeply nested fields, use dot notation (e.g., "order.price").
         */
        path: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        path: string;
        operator: ">" | ">=" | "<" | "<=" | "==";
    }, {
        value: string;
        path: string;
        operator: ">" | ">=" | "<" | "<=" | "==";
    }>, z.ZodObject<{
        /**
         * A regular expression the string field is matched against.
         * Accepts valid regular expression syntax described by [RE2](https://github.com/google/re2/wiki/Syntax).
         */
        match: z.ZodString;
        /**
         * The path to the field to compare against this criterion.
         * To reference deeply nested fields, use dot notation (e.g., "metadata.description").
         */
        path: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        match: string;
        path: string;
    }, {
        match: string;
        path: string;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "evmTypedDataField";
    types: {
        types: Record<string, {
            type: string;
            name: string;
        }[]>;
        primaryType: string;
    };
    conditions: ({
        path: string;
        operator: "in" | "not in";
        addresses: `0x${string}`[];
    } | {
        value: string;
        path: string;
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        match: string;
        path: string;
    })[];
}, {
    type: "evmTypedDataField";
    types: {
        types: Record<string, {
            type: string;
            name: string;
        }[]>;
        primaryType: string;
    };
    conditions: ({
        path: string;
        operator: "in" | "not in";
        addresses: string[];
    } | {
        value: string;
        path: string;
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        match: string;
        path: string;
    })[];
}>;
export type SignEvmTypedDataFieldCriterion = z.infer<typeof SignEvmTypedDataFieldCriterionSchema>;
/**
 * Schema for SignEvmTypedData verifying contract criterion
 */
export declare const SignEvmTypedDataVerifyingContractCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "evmTypedDataVerifyingContract" for verifying contract-based rules. */
    type: z.ZodLiteral<"evmTypedDataVerifyingContract">;
    /**
     * Array of EVM addresses allowed or disallowed as verifying contracts.
     * Each address must be a 0x-prefixed 40-character hexadecimal string.
     * Limited to a maximum of 300 addresses per criterion.
     */
    addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
    /**
     * The operator to use for evaluating verifying contract addresses.
     * "in" checks if the verifying contract is in the provided list.
     * "not in" checks if the verifying contract is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "evmTypedDataVerifyingContract";
    operator: "in" | "not in";
    addresses: `0x${string}`[];
}, {
    type: "evmTypedDataVerifyingContract";
    operator: "in" | "not in";
    addresses: string[];
}>;
export type SignEvmTypedDataVerifyingContractCriterion = z.infer<typeof SignEvmTypedDataVerifyingContractCriterionSchema>;
/**
 * Schema for criteria used in SignEvmTypedData operations
 */
export declare const SignEvmTypedDataCriteriaSchema: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    /** The type of criterion, must be "evmTypedDataField" for typed data field-based rules. */
    type: z.ZodLiteral<"evmTypedDataField">;
    /**
     * The EIP-712 type definitions for the typed data.
     * Must include at minimum the primary type being signed.
     */
    types: z.ZodObject<{
        /**
         * EIP-712 compliant map of model names to model definitions.
         */
        types: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            name: string;
        }, {
            type: string;
            name: string;
        }>, "many">>;
        /**
         * The name of the root EIP-712 type. This value must be included in the `types` object.
         */
        primaryType: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        types: Record<string, {
            type: string;
            name: string;
        }[]>;
        primaryType: string;
    }, {
        types: Record<string, {
            type: string;
            name: string;
        }[]>;
        primaryType: string;
    }>;
    /**
     * Array of conditions to apply against typed data fields.
     * Each condition specifies how to validate a specific field within the typed data.
     */
    conditions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        /**
         * Array of EVM addresses to compare against.
         * Each address must be a 0x-prefixed 40-character hexadecimal string.
         * Limited to a maximum of 300 addresses per condition.
         */
        addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
        /**
         * The operator to use for evaluating addresses.
         * "in" checks if an address is in the provided list.
         * "not in" checks if an address is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
        /**
         * The path to the field to compare against this criterion.
         * To reference deeply nested fields, use dot notation (e.g., "order.buyer").
         */
        path: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        path: string;
        operator: "in" | "not in";
        addresses: `0x${string}`[];
    }, {
        path: string;
        operator: "in" | "not in";
        addresses: string[];
    }>, z.ZodObject<{
        /**
         * The numerical value to compare against, as a string.
         * Must contain only digits.
         */
        value: z.ZodString;
        /**
         * The comparison operator to use.
         */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
        /**
         * The path to the field to compare against this criterion.
         * To reference deeply nested fields, use dot notation (e.g., "order.price").
         */
        path: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        path: string;
        operator: ">" | ">=" | "<" | "<=" | "==";
    }, {
        value: string;
        path: string;
        operator: ">" | ">=" | "<" | "<=" | "==";
    }>, z.ZodObject<{
        /**
         * A regular expression the string field is matched against.
         * Accepts valid regular expression syntax described by [RE2](https://github.com/google/re2/wiki/Syntax).
         */
        match: z.ZodString;
        /**
         * The path to the field to compare against this criterion.
         * To reference deeply nested fields, use dot notation (e.g., "metadata.description").
         */
        path: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        match: string;
        path: string;
    }, {
        match: string;
        path: string;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "evmTypedDataField";
    types: {
        types: Record<string, {
            type: string;
            name: string;
        }[]>;
        primaryType: string;
    };
    conditions: ({
        path: string;
        operator: "in" | "not in";
        addresses: `0x${string}`[];
    } | {
        value: string;
        path: string;
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        match: string;
        path: string;
    })[];
}, {
    type: "evmTypedDataField";
    types: {
        types: Record<string, {
            type: string;
            name: string;
        }[]>;
        primaryType: string;
    };
    conditions: ({
        path: string;
        operator: "in" | "not in";
        addresses: string[];
    } | {
        value: string;
        path: string;
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        match: string;
        path: string;
    })[];
}>, z.ZodObject<{
    /** The type of criterion, must be "evmTypedDataVerifyingContract" for verifying contract-based rules. */
    type: z.ZodLiteral<"evmTypedDataVerifyingContract">;
    /**
     * Array of EVM addresses allowed or disallowed as verifying contracts.
     * Each address must be a 0x-prefixed 40-character hexadecimal string.
     * Limited to a maximum of 300 addresses per criterion.
     */
    addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
    /**
     * The operator to use for evaluating verifying contract addresses.
     * "in" checks if the verifying contract is in the provided list.
     * "not in" checks if the verifying contract is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "evmTypedDataVerifyingContract";
    operator: "in" | "not in";
    addresses: `0x${string}`[];
}, {
    type: "evmTypedDataVerifyingContract";
    operator: "in" | "not in";
    addresses: string[];
}>]>, "many">;
/**
 * Type representing a set of criteria for the signEvmTypedData operation.
 * Can contain up to 10 individual criterion objects for typed data field or verifying contract checks.
 */
export type SignEvmTypedDataCriteria = z.infer<typeof SignEvmTypedDataCriteriaSchema>;
/**
 * A list of comparables to apply against encoded arguments in the transaction's `data` field.
 */
export declare const EvmDataParameterConditionListSchema: z.ZodObject<{
    /**
     * The name of the parameter to check against a transaction's calldata.
     * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
     */
    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
    /**
     * The operator to use for the comparison. The value resolved at the `name` will be on the
     * left-hand side of the operator, and the `values` field will be on the right-hand side.
     */
    operator: z.ZodEnum<["in", "not in"]>;
    /**
     * Values to compare against the resolved `name` value.
     * All values are encoded as strings. Refer to the table in the documentation for how values
     * should be encoded, and which operators are supported for each type.
     */
    values: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    values: string[];
    name: string;
    operator: "in" | "not in";
}, {
    values: string[];
    name: string;
    operator: "in" | "not in";
}>;
export type EvmDataParameterConditionList = z.infer<typeof EvmDataParameterConditionListSchema>;
/**
 * A single condition to apply against encoded arguments in the transaction's `data` field.
 */
export declare const EvmDataParameterConditionSchema: z.ZodObject<{
    /**
     * The name of the parameter to check against a transaction's calldata.
     * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
     */
    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
    /**
     * The operator to use for the comparison. The value resolved at the `name` will be on the
     * left-hand side of the operator, and the `value` field will be on the right-hand side.
     */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
    /**
     * A single value to compare the value resolved at `name` to.
     * All values are encoded as strings. Refer to the table in the documentation for how values
     * should be encoded, and which operators are supported for each type.
     */
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    name: string;
    operator: ">" | ">=" | "<" | "<=" | "==";
}, {
    value: string;
    name: string;
    operator: ">" | ">=" | "<" | "<=" | "==";
}>;
export type EvmDataParameterCondition = z.infer<typeof EvmDataParameterConditionSchema>;
/**
 * A single condition to apply against the function and encoded arguments in the transaction's `data` field.
 * Each `parameter` configuration must be successfully evaluated against the corresponding function argument
 * in order for a policy to be accepted.
 */
export declare const EvmDataConditionSchema: z.ZodObject<{
    /**
     * The name of a smart contract function being called.
     */
    function: z.ZodString;
    /**
     * An optional list of parameter conditions to apply against encoded arguments in the transaction's `data` field.
     */
    params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        /**
         * The name of the parameter to check against a transaction's calldata.
         * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
         */
        name: z.ZodUnion<[z.ZodString, z.ZodString]>;
        /**
         * The operator to use for the comparison. The value resolved at the `name` will be on the
         * left-hand side of the operator, and the `value` field will be on the right-hand side.
         */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
        /**
         * A single value to compare the value resolved at `name` to.
         * All values are encoded as strings. Refer to the table in the documentation for how values
         * should be encoded, and which operators are supported for each type.
         */
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string;
        operator: ">" | ">=" | "<" | "<=" | "==";
    }, {
        value: string;
        name: string;
        operator: ">" | ">=" | "<" | "<=" | "==";
    }>, z.ZodObject<{
        /**
         * The name of the parameter to check against a transaction's calldata.
         * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
         */
        name: z.ZodUnion<[z.ZodString, z.ZodString]>;
        /**
         * The operator to use for the comparison. The value resolved at the `name` will be on the
         * left-hand side of the operator, and the `values` field will be on the right-hand side.
         */
        operator: z.ZodEnum<["in", "not in"]>;
        /**
         * Values to compare against the resolved `name` value.
         * All values are encoded as strings. Refer to the table in the documentation for how values
         * should be encoded, and which operators are supported for each type.
         */
        values: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        values: string[];
        name: string;
        operator: "in" | "not in";
    }, {
        values: string[];
        name: string;
        operator: "in" | "not in";
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    function: string;
    params?: ({
        values: string[];
        name: string;
        operator: "in" | "not in";
    } | {
        value: string;
        name: string;
        operator: ">" | ">=" | "<" | "<=" | "==";
    })[] | undefined;
}, {
    function: string;
    params?: ({
        values: string[];
        name: string;
        operator: "in" | "not in";
    } | {
        value: string;
        name: string;
        operator: ">" | ">=" | "<" | "<=" | "==";
    })[] | undefined;
}>;
export type EvmDataCondition = z.infer<typeof EvmDataConditionSchema>;
/**
 * Schema for EVM data criterion
 */
export declare const EvmDataCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "evmData" for EVM transaction rules. */
    type: z.ZodLiteral<"evmData">;
    /**
     * The ABI of the smart contract being called. This can be a partial structure with only specific functions.
     */
    abi: z.ZodUnion<[z.ZodEnum<["erc20", "erc721", "erc1155"]>, z.ZodReadonly<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"error">;
        inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "error";
        name: string;
    }, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "error";
        name: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"event">;
        anonymous: z.ZodOptional<z.ZodBoolean>;
        inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiEventParameter, z.ZodTypeDef, import("abitype").AbiEventParameter>, "many">>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiEventParameter[];
        type: "event";
        name: string;
        anonymous?: boolean | undefined;
    }, {
        inputs: readonly import("abitype").AbiEventParameter[];
        type: "event";
        name: string;
        anonymous?: boolean | undefined;
    }>, z.ZodEffects<z.ZodIntersection<z.ZodObject<{
        constant: z.ZodOptional<z.ZodBoolean>;
        gas: z.ZodOptional<z.ZodNumber>;
        payable: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    }, {
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    }>, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"function">;
        inputs: z.ZodReadonly<z.ZodArray /** The type of criterion, must be "evmTypedDataField" for typed data field-based rules. */<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        name: z.ZodString;
        outputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        stateMutability: z.ZodUnion<[z.ZodLiteral<"pure">, z.ZodLiteral<"view">, z.ZodLiteral<"nonpayable">, z.ZodLiteral<"payable">]>;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    }, {
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"constructor">;
        inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    }, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"fallback">;
        inputs: z.ZodOptional<z.ZodTuple<[], null>>;
        stateMutability: z.ZodUnion<[z.ZodLiteral /**
         * Array of EVM addresses allowed or disallowed as verifying contracts.
         * Each address must be a 0x-prefixed 40-character hexadecimal string.
         * Limited to a maximum of 300 addresses per criterion.
         */<"payable">, z.ZodLiteral<"nonpayable">]>;
    }, "strip", z.ZodTypeAny, {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    }, {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"receive">;
        stateMutability: z.ZodLiteral<"payable">;
    }, "strip", z.ZodTypeAny, {
        type: "receive";
        stateMutability: "payable";
    }, {
        type: "receive";
        stateMutability: "payable";
    }>]>>, {
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    } & ({
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    } | {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    } | {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    } | {
        type: "receive";
        stateMutability: "payable";
    }), unknown>]>, "many">>]>;
    /**
     * A list of conditions to apply against the function and encoded arguments in the transaction's `data` field.
     * Each condition must be met in order for this policy to be accepted or rejected.
     */
    conditions: z.ZodArray<z.ZodObject<{
        /**
         * The name of a smart contract function being called.
         */
        function: z.ZodString;
        /**
         * An optional list of parameter conditions to apply against encoded arguments in the transaction's `data` field.
         */
        params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            /**
             * The name of the parameter to check against a transaction's calldata.
             * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
             */
            name: z.ZodUnion<[z.ZodString, z.ZodString]>;
            /**
             * The operator to use for the comparison. The value resolved at the `name` will be on the
             * left-hand side of the operator, and the `value` field will be on the right-hand side.
             */
            operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
            /**
             * A single value to compare the value resolved at `name` to.
             * All values are encoded as strings. Refer to the table in the documentation for how values
             * should be encoded, and which operators are supported for each type.
             */
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        }, {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        }>, z.ZodObject<{
            /**
             * The name of the parameter to check against a transaction's calldata.
             * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
             */
            name: z.ZodUnion<[z.ZodString, z.ZodString]>;
            /**
             * The operator to use for the comparison. The value resolved at the `name` will be on the
             * left-hand side of the operator, and the `values` field will be on the right-hand side.
             */
            operator: z.ZodEnum<["in", "not in"]>;
            /**
             * Values to compare against the resolved `name` value.
             * All values are encoded as strings. Refer to the table in the documentation for how values
             * should be encoded, and which operators are supported for each type.
             */
            values: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            values: string[];
            name: string;
            operator: "in" | "not in";
        }, {
            values: string[];
            name: string;
            operator: "in" | "not in";
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }, {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "evmData";
    abi: "erc20" | "erc721" | "erc1155" | readonly ({
        inputs: readonly import("abitype").AbiParameter[];
        type: "error";
        name: string;
    } | {
        inputs: readonly import("abitype").AbiEventParameter[];
        type: "event";
        name: string;
        anonymous?: boolean | undefined;
    } | ({
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    } & ({
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    } | {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    } | {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    } | {
        type: "receive";
        stateMutability: "payable";
    })))[];
    conditions: {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }[];
}, {
    type: "evmData";
    abi: "erc20" | "erc721" | "erc1155" | readonly unknown[];
    conditions: {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }[];
}>;
export type EvmDataCriterion = z.infer<typeof EvmDataCriterionSchema>;
/**
 * Schema for criteria used in SignEvmTransaction operations
 */
export declare const SignEvmTransactionCriteriaSchema: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    /** The type of criterion, must be "ethValue" for Ethereum value-based rules. */
    type: z.ZodLiteral<"ethValue">;
    /**
     * The ETH value amount in wei to compare against, as a string.
     * Must contain only digits.
     */
    ethValue: z.ZodString;
    /** The comparison operator to use for evaluating transaction values against the threshold. */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    ethValue: string;
    type: "ethValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}, {
    ethValue: string;
    type: "ethValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}>, z.ZodObject<{
    /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
    type: z.ZodLiteral<"evmAddress">;
    /**
     * Array of EVM addresses to compare against.
     * Each address must be a 0x-prefixed 40-character hexadecimal string.
     * Limited to a maximum of 300 addresses per criterion.
     */
    addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
    /**
     * The operator to use for evaluating transaction addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "evmAddress";
    operator: "in" | "not in";
    addresses: `0x${string}`[];
}, {
    type: "evmAddress";
    operator: "in" | "not in";
    addresses: string[];
}>, z.ZodObject<{
    /** The type of criterion, must be "evmData" for EVM transaction rules. */
    type: z.ZodLiteral<"evmData">;
    /**
     * The ABI of the smart contract being called. This can be a partial structure with only specific functions.
     */
    abi: z.ZodUnion<[z.ZodEnum<["erc20", "erc721", "erc1155"]>, z.ZodReadonly<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"error">;
        inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "error";
        name: string;
    }, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "error";
        name: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"event">;
        anonymous: z.ZodOptional<z.ZodBoolean>;
        inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiEventParameter, z.ZodTypeDef, import("abitype").AbiEventParameter>, "many">>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiEventParameter[];
        type: "event";
        name: string;
        anonymous?: boolean | undefined;
    }, {
        inputs: readonly import("abitype").AbiEventParameter[];
        type: "event";
        name: string;
        anonymous?: boolean | undefined;
    }>, z.ZodEffects<z.ZodIntersection<z.ZodObject<{
        constant: z.ZodOptional<z.ZodBoolean>;
        gas: z.ZodOptional<z.ZodNumber>;
        payable: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    }, {
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    }>, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"function">;
        inputs: z.ZodReadonly<z.ZodArray /** The type of criterion, must be "evmTypedDataField" for typed data field-based rules. */<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        name: z.ZodString;
        outputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        stateMutability: z.ZodUnion<[z.ZodLiteral<"pure">, z.ZodLiteral<"view">, z.ZodLiteral<"nonpayable">, z.ZodLiteral<"payable">]>;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    }, {
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"constructor">;
        inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    }, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"fallback">;
        inputs: z.ZodOptional<z.ZodTuple<[], null>>;
        stateMutability: z.ZodUnion<[z.ZodLiteral /**
         * Array of EVM addresses allowed or disallowed as verifying contracts.
         * Each address must be a 0x-prefixed 40-character hexadecimal string.
         * Limited to a maximum of 300 addresses per criterion.
         */<"payable">, z.ZodLiteral<"nonpayable">]>;
    }, "strip", z.ZodTypeAny, {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    }, {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"receive">;
        stateMutability: z.ZodLiteral<"payable">;
    }, "strip", z.ZodTypeAny, {
        type: "receive";
        stateMutability: "payable";
    }, {
        type: "receive";
        stateMutability: "payable";
    }>]>>, {
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    } & ({
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    } | {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    } | {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    } | {
        type: "receive";
        stateMutability: "payable";
    }), unknown>]>, "many">>]>;
    /**
     * A list of conditions to apply against the function and encoded arguments in the transaction's `data` field.
     * Each condition must be met in order for this policy to be accepted or rejected.
     */
    conditions: z.ZodArray<z.ZodObject<{
        /**
         * The name of a smart contract function being called.
         */
        function: z.ZodString;
        /**
         * An optional list of parameter conditions to apply against encoded arguments in the transaction's `data` field.
         */
        params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            /**
             * The name of the parameter to check against a transaction's calldata.
             * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
             */
            name: z.ZodUnion<[z.ZodString, z.ZodString]>;
            /**
             * The operator to use for the comparison. The value resolved at the `name` will be on the
             * left-hand side of the operator, and the `value` field will be on the right-hand side.
             */
            operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
            /**
             * A single value to compare the value resolved at `name` to.
             * All values are encoded as strings. Refer to the table in the documentation for how values
             * should be encoded, and which operators are supported for each type.
             */
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        }, {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        }>, z.ZodObject<{
            /**
             * The name of the parameter to check against a transaction's calldata.
             * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
             */
            name: z.ZodUnion<[z.ZodString, z.ZodString]>;
            /**
             * The operator to use for the comparison. The value resolved at the `name` will be on the
             * left-hand side of the operator, and the `values` field will be on the right-hand side.
             */
            operator: z.ZodEnum<["in", "not in"]>;
            /**
             * Values to compare against the resolved `name` value.
             * All values are encoded as strings. Refer to the table in the documentation for how values
             * should be encoded, and which operators are supported for each type.
             */
            values: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            values: string[];
            name: string;
            operator: "in" | "not in";
        }, {
            values: string[];
            name: string;
            operator: "in" | "not in";
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }, {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "evmData";
    abi: "erc20" | "erc721" | "erc1155" | readonly ({
        inputs: readonly import("abitype").AbiParameter[];
        type: "error";
        name: string;
    } | {
        inputs: readonly import("abitype").AbiEventParameter[];
        type: "event";
        name: string;
        anonymous?: boolean | undefined;
    } | ({
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    } & ({
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    } | {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    } | {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    } | {
        type: "receive";
        stateMutability: "payable";
    })))[];
    conditions: {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }[];
}, {
    type: "evmData";
    abi: "erc20" | "erc721" | "erc1155" | readonly unknown[];
    conditions: {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }[];
}>, z.ZodObject<{
    /** The type of criterion, must be "netUSDChange" for USD denominated asset transfer rules. */
    type: z.ZodLiteral<"netUSDChange">;
    /**
     * The amount of USD, in cents, that the total USD value of a transaction's asset transfer and exposure should be compared to.
     */
    changeCents: z.ZodNumber;
    /**
     * The operator to use for the comparison. The total value of a transaction's asset transfer and exposure in USD will be on the left-hand side of the operator, and the `changeCents` field will be on the right-hand side.
     */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    type: "netUSDChange";
    operator: ">" | ">=" | "<" | "<=" | "==";
    changeCents: number;
}, {
    type: "netUSDChange";
    operator: ">" | ">=" | "<" | "<=" | "==";
    changeCents: number;
}>]>, "many">;
/**
 * Type representing a set of criteria for the signEvmTransaction operation.
 * Can contain up to 10 individual criterion objects of ETH value or EVM address types.
 */
export type SignEvmTransactionCriteria = z.infer<typeof SignEvmTransactionCriteriaSchema>;
/**
 * Schema for criteria used in SignEvmMessage operations
 */
export declare const SignEvmMessageCriteriaSchema: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    /** The type of criterion, must be "evmMessage" for EVM message-based rules. */
    type: z.ZodLiteral<"evmMessage">;
    /**
     * A regular expression the message is matched against.
     * Accepts valid regular expression syntax described by [RE2](https://github.com/google/re2/wiki/Syntax).
     */
    match: z.ZodString;
}, "strip", z.ZodTypeAny, {
    match: string;
    type: "evmMessage";
}, {
    match: string;
    type: "evmMessage";
}>]>, "many">;
/**
 * Type representing a set of criteria for the signEvmMessage operation.
 * Can contain up to 10 individual EVM message criterion objects.
 */
export type SignEvmMessageCriteria = z.infer<typeof SignEvmMessageCriteriaSchema>;
/**
 * Schema for criteria used in SendEvmTransaction operations
 */
export declare const SendEvmTransactionCriteriaSchema: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    /** The type of criterion, must be "ethValue" for Ethereum value-based rules. */
    type: z.ZodLiteral<"ethValue">;
    /**
     * The ETH value amount in wei to compare against, as a string.
     * Must contain only digits.
     */
    ethValue: z.ZodString;
    /** The comparison operator to use for evaluating transaction values against the threshold. */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    ethValue: string;
    type: "ethValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}, {
    ethValue: string;
    type: "ethValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}>, z.ZodObject<{
    /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
    type: z.ZodLiteral<"evmAddress">;
    /**
     * Array of EVM addresses to compare against.
     * Each address must be a 0x-prefixed 40-character hexadecimal string.
     * Limited to a maximum of 300 addresses per criterion.
     */
    addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
    /**
     * The operator to use for evaluating transaction addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "evmAddress";
    operator: "in" | "not in";
    addresses: `0x${string}`[];
}, {
    type: "evmAddress";
    operator: "in" | "not in";
    addresses: string[];
}>, z.ZodObject<{
    /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
    type: z.ZodLiteral<"evmNetwork">;
    /**
     * Array of EVM network identifiers to compare against.
     * Either "base", "base-sepolia", "ethereum", "ethereum-sepolia", "avalanche", "polygon", "optimism", "arbitrum"
     */
    networks: z.ZodArray<z.ZodEnum<["base", "base-sepolia", "ethereum", "ethereum-sepolia", "avalanche", "polygon", "optimism", "arbitrum"]>, "many">;
    /**
     * The operator to use for evaluating transaction network.
     * "in" checks if a network is in the provided list.
     * "not in" checks if a network is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "evmNetwork";
    operator: "in" | "not in";
    networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "polygon" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
}, {
    type: "evmNetwork";
    operator: "in" | "not in";
    networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "polygon" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
}>, z.ZodObject<{
    /** The type of criterion, must be "evmData" for EVM transaction rules. */
    type: z.ZodLiteral<"evmData">;
    /**
     * The ABI of the smart contract being called. This can be a partial structure with only specific functions.
     */
    abi: z.ZodUnion<[z.ZodEnum<["erc20", "erc721", "erc1155"]>, z.ZodReadonly<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"error">;
        inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "error";
        name: string;
    }, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "error";
        name: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"event">;
        anonymous: z.ZodOptional<z.ZodBoolean>;
        inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiEventParameter, z.ZodTypeDef, import("abitype").AbiEventParameter>, "many">>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiEventParameter[];
        type: "event";
        name: string;
        anonymous?: boolean | undefined;
    }, {
        inputs: readonly import("abitype").AbiEventParameter[];
        type: "event";
        name: string;
        anonymous?: boolean | undefined;
    }>, z.ZodEffects<z.ZodIntersection<z.ZodObject<{
        constant: z.ZodOptional<z.ZodBoolean>;
        gas: z.ZodOptional<z.ZodNumber>;
        payable: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    }, {
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    }>, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"function">;
        inputs: z.ZodReadonly<z.ZodArray /** The type of criterion, must be "evmTypedDataField" for typed data field-based rules. */<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        name: z.ZodString;
        outputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        stateMutability: z.ZodUnion<[z.ZodLiteral<"pure">, z.ZodLiteral<"view">, z.ZodLiteral<"nonpayable">, z.ZodLiteral<"payable">]>;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    }, {
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"constructor">;
        inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    }, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"fallback">;
        inputs: z.ZodOptional<z.ZodTuple<[], null>>;
        stateMutability: z.ZodUnion<[z.ZodLiteral /**
         * Array of EVM addresses allowed or disallowed as verifying contracts.
         * Each address must be a 0x-prefixed 40-character hexadecimal string.
         * Limited to a maximum of 300 addresses per criterion.
         */<"payable">, z.ZodLiteral<"nonpayable">]>;
    }, "strip", z.ZodTypeAny, {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    }, {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"receive">;
        stateMutability: z.ZodLiteral<"payable">;
    }, "strip", z.ZodTypeAny, {
        type: "receive";
        stateMutability: "payable";
    }, {
        type: "receive";
        stateMutability: "payable";
    }>]>>, {
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    } & ({
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    } | {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    } | {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    } | {
        type: "receive";
        stateMutability: "payable";
    }), unknown>]>, "many">>]>;
    /**
     * A list of conditions to apply against the function and encoded arguments in the transaction's `data` field.
     * Each condition must be met in order for this policy to be accepted or rejected.
     */
    conditions: z.ZodArray<z.ZodObject<{
        /**
         * The name of a smart contract function being called.
         */
        function: z.ZodString;
        /**
         * An optional list of parameter conditions to apply against encoded arguments in the transaction's `data` field.
         */
        params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            /**
             * The name of the parameter to check against a transaction's calldata.
             * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
             */
            name: z.ZodUnion<[z.ZodString, z.ZodString]>;
            /**
             * The operator to use for the comparison. The value resolved at the `name` will be on the
             * left-hand side of the operator, and the `value` field will be on the right-hand side.
             */
            operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
            /**
             * A single value to compare the value resolved at `name` to.
             * All values are encoded as strings. Refer to the table in the documentation for how values
             * should be encoded, and which operators are supported for each type.
             */
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        }, {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        }>, z.ZodObject<{
            /**
             * The name of the parameter to check against a transaction's calldata.
             * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
             */
            name: z.ZodUnion<[z.ZodString, z.ZodString]>;
            /**
             * The operator to use for the comparison. The value resolved at the `name` will be on the
             * left-hand side of the operator, and the `values` field will be on the right-hand side.
             */
            operator: z.ZodEnum<["in", "not in"]>;
            /**
             * Values to compare against the resolved `name` value.
             * All values are encoded as strings. Refer to the table in the documentation for how values
             * should be encoded, and which operators are supported for each type.
             */
            values: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            values: string[];
            name: string;
            operator: "in" | "not in";
        }, {
            values: string[];
            name: string;
            operator: "in" | "not in";
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }, {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "evmData";
    abi: "erc20" | "erc721" | "erc1155" | readonly ({
        inputs: readonly import("abitype").AbiParameter[];
        type: "error";
        name: string;
    } | {
        inputs: readonly import("abitype").AbiEventParameter[];
        type: "event";
        name: string;
        anonymous?: boolean | undefined;
    } | ({
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    } & ({
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    } | {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    } | {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    } | {
        type: "receive";
        stateMutability: "payable";
    })))[];
    conditions: {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }[];
}, {
    type: "evmData";
    abi: "erc20" | "erc721" | "erc1155" | readonly unknown[];
    conditions: {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }[];
}>, z.ZodObject<{
    /** The type of criterion, must be "netUSDChange" for USD denominated asset transfer rules. */
    type: z.ZodLiteral<"netUSDChange">;
    /**
     * The amount of USD, in cents, that the total USD value of a transaction's asset transfer and exposure should be compared to.
     */
    changeCents: z.ZodNumber;
    /**
     * The operator to use for the comparison. The total value of a transaction's asset transfer and exposure in USD will be on the left-hand side of the operator, and the `changeCents` field will be on the right-hand side.
     */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    type: "netUSDChange";
    operator: ">" | ">=" | "<" | "<=" | "==";
    changeCents: number;
}, {
    type: "netUSDChange";
    operator: ">" | ">=" | "<" | "<=" | "==";
    changeCents: number;
}>]>, "many">;
export type SendEvmTransactionCriteria = z.infer<typeof SendEvmTransactionCriteriaSchema>;
/**
 * Schema for criteria used in PrepareUserOperation operations
 */
export declare const PrepareUserOperationCriteriaSchema: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    /** The type of criterion, must be "ethValue" for Ethereum value-based rules. */
    type: z.ZodLiteral<"ethValue">;
    /**
     * The ETH value amount in wei to compare against, as a string.
     * Must contain only digits.
     */
    ethValue: z.ZodString;
    /** The comparison operator to use for evaluating transaction values against the threshold. */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    ethValue: string;
    type: "ethValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}, {
    ethValue: string;
    type: "ethValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}>, z.ZodObject<{
    /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
    type: z.ZodLiteral<"evmAddress">;
    /**
     * Array of EVM addresses to compare against.
     * Each address must be a 0x-prefixed 40-character hexadecimal string.
     * Limited to a maximum of 300 addresses per criterion.
     */
    addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
    /**
     * The operator to use for evaluating transaction addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "evmAddress";
    operator: "in" | "not in";
    addresses: `0x${string}`[];
}, {
    type: "evmAddress";
    operator: "in" | "not in";
    addresses: string[];
}>, z.ZodObject<{
    /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
    type: z.ZodLiteral<"evmNetwork">;
    /**
     * Array of EVM network identifiers to compare against.
     * Either "base-sepolia", "base", "arbitrum", "optimism", "zora", "polygon", "bnb", "avalanche", "ethereum", "ethereum-sepolia"
     */
    networks: z.ZodArray<z.ZodEnum<["base-sepolia", "base", "arbitrum", "optimism", "zora", "polygon", "bnb", "avalanche", "ethereum", "ethereum-sepolia"]>, "many">;
    /**
     * The operator to use for evaluating transaction network.
     * "in" checks if a network is in the provided list.
     * "not in" checks if a network is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "evmNetwork";
    operator: "in" | "not in";
    networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "zora" | "polygon" | "bnb" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
}, {
    type: "evmNetwork";
    operator: "in" | "not in";
    networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "zora" | "polygon" | "bnb" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
}>, z.ZodObject<{
    /** The type of criterion, must be "evmData" for EVM transaction rules. */
    type: z.ZodLiteral<"evmData">;
    /**
     * The ABI of the smart contract being called. This can be a partial structure with only specific functions.
     */
    abi: z.ZodUnion<[z.ZodEnum<["erc20", "erc721", "erc1155"]>, z.ZodReadonly<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"error">;
        inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "error";
        name: string;
    }, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "error";
        name: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"event">;
        anonymous: z.ZodOptional<z.ZodBoolean>;
        inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiEventParameter, z.ZodTypeDef, import("abitype").AbiEventParameter>, "many">>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiEventParameter[];
        type: "event";
        name: string;
        anonymous?: boolean | undefined;
    }, {
        inputs: readonly import("abitype").AbiEventParameter[];
        type: "event";
        name: string;
        anonymous?: boolean | undefined;
    }>, z.ZodEffects<z.ZodIntersection<z.ZodObject<{
        constant: z.ZodOptional<z.ZodBoolean>;
        gas: z.ZodOptional<z.ZodNumber>;
        payable: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    }, {
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    }>, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"function">;
        inputs: z.ZodReadonly<z.ZodArray /** The type of criterion, must be "evmTypedDataField" for typed data field-based rules. */<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        name: z.ZodString;
        outputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        stateMutability: z.ZodUnion<[z.ZodLiteral<"pure">, z.ZodLiteral<"view">, z.ZodLiteral<"nonpayable">, z.ZodLiteral<"payable">]>;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    }, {
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"constructor">;
        inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    }, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"fallback">;
        inputs: z.ZodOptional<z.ZodTuple<[], null>>;
        stateMutability: z.ZodUnion<[z.ZodLiteral /**
         * Array of EVM addresses allowed or disallowed as verifying contracts.
         * Each address must be a 0x-prefixed 40-character hexadecimal string.
         * Limited to a maximum of 300 addresses per criterion.
         */<"payable">, z.ZodLiteral<"nonpayable">]>;
    }, "strip", z.ZodTypeAny, {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    }, {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"receive">;
        stateMutability: z.ZodLiteral<"payable">;
    }, "strip", z.ZodTypeAny, {
        type: "receive";
        stateMutability: "payable";
    }, {
        type: "receive";
        stateMutability: "payable";
    }>]>>, {
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    } & ({
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    } | {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    } | {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    } | {
        type: "receive";
        stateMutability: "payable";
    }), unknown>]>, "many">>]>;
    /**
     * A list of conditions to apply against the function and encoded arguments in the transaction's `data` field.
     * Each condition must be met in order for this policy to be accepted or rejected.
     */
    conditions: z.ZodArray<z.ZodObject<{
        /**
         * The name of a smart contract function being called.
         */
        function: z.ZodString;
        /**
         * An optional list of parameter conditions to apply against encoded arguments in the transaction's `data` field.
         */
        params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            /**
             * The name of the parameter to check against a transaction's calldata.
             * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
             */
            name: z.ZodUnion<[z.ZodString, z.ZodString]>;
            /**
             * The operator to use for the comparison. The value resolved at the `name` will be on the
             * left-hand side of the operator, and the `value` field will be on the right-hand side.
             */
            operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
            /**
             * A single value to compare the value resolved at `name` to.
             * All values are encoded as strings. Refer to the table in the documentation for how values
             * should be encoded, and which operators are supported for each type.
             */
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        }, {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        }>, z.ZodObject<{
            /**
             * The name of the parameter to check against a transaction's calldata.
             * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
             */
            name: z.ZodUnion<[z.ZodString, z.ZodString]>;
            /**
             * The operator to use for the comparison. The value resolved at the `name` will be on the
             * left-hand side of the operator, and the `values` field will be on the right-hand side.
             */
            operator: z.ZodEnum<["in", "not in"]>;
            /**
             * Values to compare against the resolved `name` value.
             * All values are encoded as strings. Refer to the table in the documentation for how values
             * should be encoded, and which operators are supported for each type.
             */
            values: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            values: string[];
            name: string;
            operator: "in" | "not in";
        }, {
            values: string[];
            name: string;
            operator: "in" | "not in";
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }, {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "evmData";
    abi: "erc20" | "erc721" | "erc1155" | readonly ({
        inputs: readonly import("abitype").AbiParameter[];
        type: "error";
        name: string;
    } | {
        inputs: readonly import("abitype").AbiEventParameter[];
        type: "event";
        name: string;
        anonymous?: boolean | undefined;
    } | ({
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    } & ({
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    } | {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    } | {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    } | {
        type: "receive";
        stateMutability: "payable";
    })))[];
    conditions: {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }[];
}, {
    type: "evmData";
    abi: "erc20" | "erc721" | "erc1155" | readonly unknown[];
    conditions: {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }[];
}>, z.ZodObject<{
    /** The type of criterion, must be "netUSDChange" for USD denominated asset transfer rules. */
    type: z.ZodLiteral<"netUSDChange">;
    /**
     * The amount of USD, in cents, that the total USD value of a transaction's asset transfer and exposure should be compared to.
     */
    changeCents: z.ZodNumber;
    /**
     * The operator to use for the comparison. The total value of a transaction's asset transfer and exposure in USD will be on the left-hand side of the operator, and the `changeCents` field will be on the right-hand side.
     */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    type: "netUSDChange";
    operator: ">" | ">=" | "<" | "<=" | "==";
    changeCents: number;
}, {
    type: "netUSDChange";
    operator: ">" | ">=" | "<" | "<=" | "==";
    changeCents: number;
}>]>, "many">;
/**
 * Type representing a set of criteria for the prepareUserOperation operation.
 * Can contain up to 10 individual criterion objects of ETH value, EVM address, EVM network, or EVM data types.
 */
export type PrepareUserOperationCriteria = z.infer<typeof PrepareUserOperationCriteriaSchema>;
/**
 * Schema for criteria used in SendUserOperation operations
 */
export declare const SendUserOperationCriteriaSchema: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    /** The type of criterion, must be "ethValue" for Ethereum value-based rules. */
    type: z.ZodLiteral<"ethValue">;
    /**
     * The ETH value amount in wei to compare against, as a string.
     * Must contain only digits.
     */
    ethValue: z.ZodString;
    /** The comparison operator to use for evaluating transaction values against the threshold. */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    ethValue: string;
    type: "ethValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}, {
    ethValue: string;
    type: "ethValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}>, z.ZodObject<{
    /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
    type: z.ZodLiteral<"evmAddress">;
    /**
     * Array of EVM addresses to compare against.
     * Each address must be a 0x-prefixed 40-character hexadecimal string.
     * Limited to a maximum of 300 addresses per criterion.
     */
    addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
    /**
     * The operator to use for evaluating transaction addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "evmAddress";
    operator: "in" | "not in";
    addresses: `0x${string}`[];
}, {
    type: "evmAddress";
    operator: "in" | "not in";
    addresses: string[];
}>, z.ZodObject<{
    /** The type of criterion, must be "evmData" for EVM transaction rules. */
    type: z.ZodLiteral<"evmData">;
    /**
     * The ABI of the smart contract being called. This can be a partial structure with only specific functions.
     */
    abi: z.ZodUnion<[z.ZodEnum<["erc20", "erc721", "erc1155"]>, z.ZodReadonly<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        type: z.ZodLiteral<"error">;
        inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "error";
        name: string;
    }, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "error";
        name: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"event">;
        anonymous: z.ZodOptional<z.ZodBoolean>;
        inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiEventParameter, z.ZodTypeDef, import("abitype").AbiEventParameter>, "many">>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiEventParameter[];
        type: "event";
        name: string;
        anonymous?: boolean | undefined;
    }, {
        inputs: readonly import("abitype").AbiEventParameter[];
        type: "event";
        name: string;
        anonymous?: boolean | undefined;
    }>, z.ZodEffects<z.ZodIntersection<z.ZodObject<{
        constant: z.ZodOptional<z.ZodBoolean>;
        gas: z.ZodOptional<z.ZodNumber>;
        payable: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    }, {
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    }>, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"function">;
        inputs: z.ZodReadonly<z.ZodArray /** The type of criterion, must be "evmTypedDataField" for typed data field-based rules. */<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        name: z.ZodString;
        outputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        stateMutability: z.ZodUnion<[z.ZodLiteral<"pure">, z.ZodLiteral<"view">, z.ZodLiteral<"nonpayable">, z.ZodLiteral<"payable">]>;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    }, {
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"constructor">;
        inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
        stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
    }, "strip", z.ZodTypeAny, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    }, {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"fallback">;
        inputs: z.ZodOptional<z.ZodTuple<[], null>>;
        stateMutability: z.ZodUnion<[z.ZodLiteral /**
         * Array of EVM addresses allowed or disallowed as verifying contracts.
         * Each address must be a 0x-prefixed 40-character hexadecimal string.
         * Limited to a maximum of 300 addresses per criterion.
         */<"payable">, z.ZodLiteral<"nonpayable">]>;
    }, "strip", z.ZodTypeAny, {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    }, {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"receive">;
        stateMutability: z.ZodLiteral<"payable">;
    }, "strip", z.ZodTypeAny, {
        type: "receive";
        stateMutability: "payable";
    }, {
        type: "receive";
        stateMutability: "payable";
    }>]>>, {
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    } & ({
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    } | {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    } | {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    } | {
        type: "receive";
        stateMutability: "payable";
    }), unknown>]>, "many">>]>;
    /**
     * A list of conditions to apply against the function and encoded arguments in the transaction's `data` field.
     * Each condition must be met in order for this policy to be accepted or rejected.
     */
    conditions: z.ZodArray<z.ZodObject<{
        /**
         * The name of a smart contract function being called.
         */
        function: z.ZodString;
        /**
         * An optional list of parameter conditions to apply against encoded arguments in the transaction's `data` field.
         */
        params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            /**
             * The name of the parameter to check against a transaction's calldata.
             * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
             */
            name: z.ZodUnion<[z.ZodString, z.ZodString]>;
            /**
             * The operator to use for the comparison. The value resolved at the `name` will be on the
             * left-hand side of the operator, and the `value` field will be on the right-hand side.
             */
            operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
            /**
             * A single value to compare the value resolved at `name` to.
             * All values are encoded as strings. Refer to the table in the documentation for how values
             * should be encoded, and which operators are supported for each type.
             */
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        }, {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        }>, z.ZodObject<{
            /**
             * The name of the parameter to check against a transaction's calldata.
             * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
             */
            name: z.ZodUnion<[z.ZodString, z.ZodString]>;
            /**
             * The operator to use for the comparison. The value resolved at the `name` will be on the
             * left-hand side of the operator, and the `values` field will be on the right-hand side.
             */
            operator: z.ZodEnum<["in", "not in"]>;
            /**
             * Values to compare against the resolved `name` value.
             * All values are encoded as strings. Refer to the table in the documentation for how values
             * should be encoded, and which operators are supported for each type.
             */
            values: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            values: string[];
            name: string;
            operator: "in" | "not in";
        }, {
            values: string[];
            name: string;
            operator: "in" | "not in";
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }, {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "evmData";
    abi: "erc20" | "erc721" | "erc1155" | readonly ({
        inputs: readonly import("abitype").AbiParameter[];
        type: "error";
        name: string;
    } | {
        inputs: readonly import("abitype").AbiEventParameter[];
        type: "event";
        name: string;
        anonymous?: boolean | undefined;
    } | ({
        payable?: boolean | undefined;
        constant?: boolean | undefined;
        gas?: number | undefined;
    } & ({
        inputs: readonly import("abitype").AbiParameter[];
        outputs: readonly import("abitype").AbiParameter[];
        type: "function";
        name: string;
        stateMutability: "pure" | "view" | "nonpayable" | "payable";
    } | {
        inputs: readonly import("abitype").AbiParameter[];
        type: "constructor";
        stateMutability: "nonpayable" | "payable";
    } | {
        type: "fallback";
        stateMutability: "nonpayable" | "payable";
        inputs?: [] | undefined;
    } | {
        type: "receive";
        stateMutability: "payable";
    })))[];
    conditions: {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }[];
}, {
    type: "evmData";
    abi: "erc20" | "erc721" | "erc1155" | readonly unknown[];
    conditions: {
        function: string;
        params?: ({
            values: string[];
            name: string;
            operator: "in" | "not in";
        } | {
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        })[] | undefined;
    }[];
}>, z.ZodObject<{
    /** The type of criterion, must be "netUSDChange" for USD denominated asset transfer rules. */
    type: z.ZodLiteral<"netUSDChange">;
    /**
     * The amount of USD, in cents, that the total USD value of a transaction's asset transfer and exposure should be compared to.
     */
    changeCents: z.ZodNumber;
    /**
     * The operator to use for the comparison. The total value of a transaction's asset transfer and exposure in USD will be on the left-hand side of the operator, and the `changeCents` field will be on the right-hand side.
     */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    type: "netUSDChange";
    operator: ">" | ">=" | "<" | "<=" | "==";
    changeCents: number;
}, {
    type: "netUSDChange";
    operator: ">" | ">=" | "<" | "<=" | "==";
    changeCents: number;
}>]>, "many">;
/**
 * Type representing a set of criteria for the sendUserOperation operation.
 * Can contain up to 10 individual criterion objects of ETH value, EVM address, or EVM data types.
 */
export type SendUserOperationCriteria = z.infer<typeof SendUserOperationCriteriaSchema>;
/**
 * Enum for Evm Operation types
 */
export declare const EvmOperationEnum: z.ZodEnum<["signEvmTransaction", "sendEvmTransaction", "signEvmMessage", "signEvmTypedData", "signEvmHash", "prepareUserOperation", "sendUserOperation"]>;
/**
 * Type representing the operations that can be governed by a policy.
 * Defines what EVM operations the policy applies to.
 */
export type EvmOperation = z.infer<typeof EvmOperationEnum>;
/**
 * Enum for Action types
 */
export declare const ActionEnum: z.ZodEnum<["reject", "accept"]>;
/**
 * Type representing the possible policy actions.
 * Determines whether matching the rule will cause a request to be accepted or rejected.
 */
export type Action = z.infer<typeof ActionEnum>;
/**
 * Type representing a 'signEvmTransaction' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
export declare const SignEvmTransactionRuleSchema: z.ZodObject<{
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the transaction, "reject" will block it.
     */
    action: z.ZodEnum<["reject", "accept"]>;
    /**
     * The operation to which this rule applies.
     * Must be "signEvmTransaction".
     */
    operation: z.ZodLiteral<"signEvmTransaction">;
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        /** The type of criterion, must be "ethValue" for Ethereum value-based rules. */
        type: z.ZodLiteral<"ethValue">;
        /**
         * The ETH value amount in wei to compare against, as a string.
         * Must contain only digits.
         */
        ethValue: z.ZodString;
        /** The comparison operator to use for evaluating transaction values against the threshold. */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
    }, "strip", z.ZodTypeAny, {
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }, {
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }>, z.ZodObject<{
        /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
        type: z.ZodLiteral<"evmAddress">;
        /**
         * Array of EVM addresses to compare against.
         * Each address must be a 0x-prefixed 40-character hexadecimal string.
         * Limited to a maximum of 300 addresses per criterion.
         */
        addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
        /**
         * The operator to use for evaluating transaction addresses.
         * "in" checks if an address is in the provided list.
         * "not in" checks if an address is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: `0x${string}`[];
    }, {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: string[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "evmData" for EVM transaction rules. */
        type: z.ZodLiteral<"evmData">;
        /**
         * The ABI of the smart contract being called. This can be a partial structure with only specific functions.
         */
        abi: z.ZodUnion<[z.ZodEnum<["erc20", "erc721", "erc1155"]>, z.ZodReadonly<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"error">;
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        }, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"event">;
            anonymous: z.ZodOptional<z.ZodBoolean>;
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiEventParameter, z.ZodTypeDef, import("abitype").AbiEventParameter>, "many">>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        }, {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        }>, z.ZodEffects<z.ZodIntersection<z.ZodObject<{
            constant: z.ZodOptional<z.ZodBoolean>;
            gas: z.ZodOptional<z.ZodNumber>;
            payable: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        }, {
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        }>, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"function">;
            inputs: z.ZodReadonly<z.ZodArray /** The type of criterion, must be "evmTypedDataField" for typed data field-based rules. */<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            name: z.ZodString;
            outputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            stateMutability: z.ZodUnion<[z.ZodLiteral<"pure">, z.ZodLiteral<"view">, z.ZodLiteral<"nonpayable">, z.ZodLiteral<"payable">]>;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        }, {
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"constructor">;
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        }, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"fallback">;
            inputs: z.ZodOptional<z.ZodTuple<[], null>>;
            stateMutability: z.ZodUnion<[z.ZodLiteral /**
             * Array of EVM addresses allowed or disallowed as verifying contracts.
             * Each address must be a 0x-prefixed 40-character hexadecimal string.
             * Limited to a maximum of 300 addresses per criterion.
             */<"payable">, z.ZodLiteral<"nonpayable">]>;
        }, "strip", z.ZodTypeAny, {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        }, {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"receive">;
            stateMutability: z.ZodLiteral<"payable">;
        }, "strip", z.ZodTypeAny, {
            type: "receive";
            stateMutability: "payable";
        }, {
            type: "receive";
            stateMutability: "payable";
        }>]>>, {
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        } & ({
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        } | {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        } | {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        } | {
            type: "receive";
            stateMutability: "payable";
        }), unknown>]>, "many">>]>;
        /**
         * A list of conditions to apply against the function and encoded arguments in the transaction's `data` field.
         * Each condition must be met in order for this policy to be accepted or rejected.
         */
        conditions: z.ZodArray<z.ZodObject<{
            /**
             * The name of a smart contract function being called.
             */
            function: z.ZodString;
            /**
             * An optional list of parameter conditions to apply against encoded arguments in the transaction's `data` field.
             */
            params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                /**
                 * The name of the parameter to check against a transaction's calldata.
                 * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
                 */
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                /**
                 * The operator to use for the comparison. The value resolved at the `name` will be on the
                 * left-hand side of the operator, and the `value` field will be on the right-hand side.
                 */
                operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
                /**
                 * A single value to compare the value resolved at `name` to.
                 * All values are encoded as strings. Refer to the table in the documentation for how values
                 * should be encoded, and which operators are supported for each type.
                 */
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            }, {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            }>, z.ZodObject<{
                /**
                 * The name of the parameter to check against a transaction's calldata.
                 * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
                 */
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                /**
                 * The operator to use for the comparison. The value resolved at the `name` will be on the
                 * left-hand side of the operator, and the `values` field will be on the right-hand side.
                 */
                operator: z.ZodEnum<["in", "not in"]>;
                /**
                 * Values to compare against the resolved `name` value.
                 * All values are encoded as strings. Refer to the table in the documentation for how values
                 * should be encoded, and which operators are supported for each type.
                 */
                values: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                values: string[];
                name: string;
                operator: "in" | "not in";
            }, {
                values: string[];
                name: string;
                operator: "in" | "not in";
            }>]>, "many">>;
        }, "strip", z.ZodTypeAny, {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }, {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly ({
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        } | {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        } | ({
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        } & ({
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        } | {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        } | {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        } | {
            type: "receive";
            stateMutability: "payable";
        })))[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    }, {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly unknown[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "netUSDChange" for USD denominated asset transfer rules. */
        type: z.ZodLiteral<"netUSDChange">;
        /**
         * The amount of USD, in cents, that the total USD value of a transaction's asset transfer and exposure should be compared to.
         */
        changeCents: z.ZodNumber;
        /**
         * The operator to use for the comparison. The total value of a transaction's asset transfer and exposure in USD will be on the left-hand side of the operator, and the `changeCents` field will be on the right-hand side.
         */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
    }, "strip", z.ZodTypeAny, {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    }, {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    action: "reject" | "accept";
    operation: "signEvmTransaction";
    criteria: ({
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: `0x${string}`[];
    } | {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    } | {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly ({
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        } | {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        } | ({
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        } & ({
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        } | {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        } | {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        } | {
            type: "receive";
            stateMutability: "payable";
        })))[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    })[];
}, {
    action: "reject" | "accept";
    operation: "signEvmTransaction";
    criteria: ({
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    } | {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly unknown[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    })[];
}>;
export type SignEvmTransactionRule = z.infer<typeof SignEvmTransactionRuleSchema>;
/**
 * Type representing a 'signEvmHash' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
export declare const SignEvmHashRuleSchema: z.ZodObject<{
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the signing, "reject" will block it.
     */
    action: z.ZodEnum<["reject", "accept"]>;
    /**
     * The operation to which this rule applies.
     * Must be "signEvmHash".
     */
    operation: z.ZodLiteral<"signEvmHash">;
}, "strip", z.ZodTypeAny, {
    action: "reject" | "accept";
    operation: "signEvmHash";
}, {
    action: "reject" | "accept";
    operation: "signEvmHash";
}>;
export type SignEvmHashRule = z.infer<typeof SignEvmHashRuleSchema>;
/**
 * Type representing a 'signEvmMessage' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
export declare const SignEvmMessageRuleSchema: z.ZodObject<{
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the signing, "reject" will block it.
     */
    action: z.ZodEnum<["reject", "accept"]>;
    /**
     * The operation to which this rule applies.
     * Must be "signEvmMessage".
     */
    operation: z.ZodLiteral<"signEvmMessage">;
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        /** The type of criterion, must be "evmMessage" for EVM message-based rules. */
        type: z.ZodLiteral<"evmMessage">;
        /**
         * A regular expression the message is matched against.
         * Accepts valid regular expression syntax described by [RE2](https://github.com/google/re2/wiki/Syntax).
         */
        match: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        match: string;
        type: "evmMessage";
    }, {
        match: string;
        type: "evmMessage";
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    action: "reject" | "accept";
    operation: "signEvmMessage";
    criteria: {
        match: string;
        type: "evmMessage";
    }[];
}, {
    action: "reject" | "accept";
    operation: "signEvmMessage";
    criteria: {
        match: string;
        type: "evmMessage";
    }[];
}>;
export type SignEvmMessageRule = z.infer<typeof SignEvmMessageRuleSchema>;
/**
 * Type representing a 'signEvmTypedData' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
export declare const SignEvmTypedDataRuleSchema: z.ZodObject<{
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the signing, "reject" will block it.
     */
    action: z.ZodEnum<["reject", "accept"]>;
    /**
     * The operation to which this rule applies.
     * Must be "signEvmTypedData".
     */
    operation: z.ZodLiteral<"signEvmTypedData">;
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        /** The type of criterion, must be "evmTypedDataField" for typed data field-based rules. */
        type: z.ZodLiteral<"evmTypedDataField">;
        /**
         * The EIP-712 type definitions for the typed data.
         * Must include at minimum the primary type being signed.
         */
        types: z.ZodObject<{
            /**
             * EIP-712 compliant map of model names to model definitions.
             */
            types: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                name: string;
            }, {
                type: string;
                name: string;
            }>, "many">>;
            /**
             * The name of the root EIP-712 type. This value must be included in the `types` object.
             */
            primaryType: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            types: Record<string, {
                type: string;
                name: string;
            }[]>;
            primaryType: string;
        }, {
            types: Record<string, {
                type: string;
                name: string;
            }[]>;
            primaryType: string;
        }>;
        /**
         * Array of conditions to apply against typed data fields.
         * Each condition specifies how to validate a specific field within the typed data.
         */
        conditions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            /**
             * Array of EVM addresses to compare against.
             * Each address must be a 0x-prefixed 40-character hexadecimal string.
             * Limited to a maximum of 300 addresses per condition.
             */
            addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
            /**
             * The operator to use for evaluating addresses.
             * "in" checks if an address is in the provided list.
             * "not in" checks if an address is not in the provided list.
             */
            operator: z.ZodEnum<["in", "not in"]>;
            /**
             * The path to the field to compare against this criterion.
             * To reference deeply nested fields, use dot notation (e.g., "order.buyer").
             */
            path: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            path: string;
            operator: "in" | "not in";
            addresses: `0x${string}`[];
        }, {
            path: string;
            operator: "in" | "not in";
            addresses: string[];
        }>, z.ZodObject<{
            /**
             * The numerical value to compare against, as a string.
             * Must contain only digits.
             */
            value: z.ZodString;
            /**
             * The comparison operator to use.
             */
            operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
            /**
             * The path to the field to compare against this criterion.
             * To reference deeply nested fields, use dot notation (e.g., "order.price").
             */
            path: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            path: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        }, {
            value: string;
            path: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        }>, z.ZodObject<{
            /**
             * A regular expression the string field is matched against.
             * Accepts valid regular expression syntax described by [RE2](https://github.com/google/re2/wiki/Syntax).
             */
            match: z.ZodString;
            /**
             * The path to the field to compare against this criterion.
             * To reference deeply nested fields, use dot notation (e.g., "metadata.description").
             */
            path: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            match: string;
            path: string;
        }, {
            match: string;
            path: string;
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "evmTypedDataField";
        types: {
            types: Record<string, {
                type: string;
                name: string;
            }[]>;
            primaryType: string;
        };
        conditions: ({
            path: string;
            operator: "in" | "not in";
            addresses: `0x${string}`[];
        } | {
            value: string;
            path: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            match: string;
            path: string;
        })[];
    }, {
        type: "evmTypedDataField";
        types: {
            types: Record<string, {
                type: string;
                name: string;
            }[]>;
            primaryType: string;
        };
        conditions: ({
            path: string;
            operator: "in" | "not in";
            addresses: string[];
        } | {
            value: string;
            path: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            match: string;
            path: string;
        })[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "evmTypedDataVerifyingContract" for verifying contract-based rules. */
        type: z.ZodLiteral<"evmTypedDataVerifyingContract">;
        /**
         * Array of EVM addresses allowed or disallowed as verifying contracts.
         * Each address must be a 0x-prefixed 40-character hexadecimal string.
         * Limited to a maximum of 300 addresses per criterion.
         */
        addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
        /**
         * The operator to use for evaluating verifying contract addresses.
         * "in" checks if the verifying contract is in the provided list.
         * "not in" checks if the verifying contract is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "evmTypedDataVerifyingContract";
        operator: "in" | "not in";
        addresses: `0x${string}`[];
    }, {
        type: "evmTypedDataVerifyingContract";
        operator: "in" | "not in";
        addresses: string[];
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    action: "reject" | "accept";
    operation: "signEvmTypedData";
    criteria: ({
        type: "evmTypedDataField";
        types: {
            types: Record<string, {
                type: string;
                name: string;
            }[]>;
            primaryType: string;
        };
        conditions: ({
            path: string;
            operator: "in" | "not in";
            addresses: `0x${string}`[];
        } | {
            value: string;
            path: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            match: string;
            path: string;
        })[];
    } | {
        type: "evmTypedDataVerifyingContract";
        operator: "in" | "not in";
        addresses: `0x${string}`[];
    })[];
}, {
    action: "reject" | "accept";
    operation: "signEvmTypedData";
    criteria: ({
        type: "evmTypedDataField";
        types: {
            types: Record<string, {
                type: string;
                name: string;
            }[]>;
            primaryType: string;
        };
        conditions: ({
            path: string;
            operator: "in" | "not in";
            addresses: string[];
        } | {
            value: string;
            path: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            match: string;
            path: string;
        })[];
    } | {
        type: "evmTypedDataVerifyingContract";
        operator: "in" | "not in";
        addresses: string[];
    })[];
}>;
export type SignEvmTypedDataRule = z.infer<typeof SignEvmTypedDataRuleSchema>;
/**
 * Type representing a 'sendEvmTransaction' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
export declare const SendEvmTransactionRuleSchema: z.ZodObject<{
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the transaction, "reject" will block it.
     */
    action: z.ZodEnum<["reject", "accept"]>;
    /**
     * The operation to which this rule applies.
     * Must be "sendEvmTransaction".
     */
    operation: z.ZodLiteral<"sendEvmTransaction">;
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        /** The type of criterion, must be "ethValue" for Ethereum value-based rules. */
        type: z.ZodLiteral<"ethValue">;
        /**
         * The ETH value amount in wei to compare against, as a string.
         * Must contain only digits.
         */
        ethValue: z.ZodString;
        /** The comparison operator to use for evaluating transaction values against the threshold. */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
    }, "strip", z.ZodTypeAny, {
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }, {
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }>, z.ZodObject<{
        /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
        type: z.ZodLiteral<"evmAddress">;
        /**
         * Array of EVM addresses to compare against.
         * Each address must be a 0x-prefixed 40-character hexadecimal string.
         * Limited to a maximum of 300 addresses per criterion.
         */
        addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
        /**
         * The operator to use for evaluating transaction addresses.
         * "in" checks if an address is in the provided list.
         * "not in" checks if an address is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: `0x${string}`[];
    }, {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: string[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
        type: z.ZodLiteral<"evmNetwork">;
        /**
         * Array of EVM network identifiers to compare against.
         * Either "base", "base-sepolia", "ethereum", "ethereum-sepolia", "avalanche", "polygon", "optimism", "arbitrum"
         */
        networks: z.ZodArray<z.ZodEnum<["base", "base-sepolia", "ethereum", "ethereum-sepolia", "avalanche", "polygon", "optimism", "arbitrum"]>, "many">;
        /**
         * The operator to use for evaluating transaction network.
         * "in" checks if a network is in the provided list.
         * "not in" checks if a network is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "evmNetwork";
        operator: "in" | "not in";
        networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "polygon" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
    }, {
        type: "evmNetwork";
        operator: "in" | "not in";
        networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "polygon" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "evmData" for EVM transaction rules. */
        type: z.ZodLiteral<"evmData">;
        /**
         * The ABI of the smart contract being called. This can be a partial structure with only specific functions.
         */
        abi: z.ZodUnion<[z.ZodEnum<["erc20", "erc721", "erc1155"]>, z.ZodReadonly<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"error">;
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        }, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"event">;
            anonymous: z.ZodOptional<z.ZodBoolean>;
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiEventParameter, z.ZodTypeDef, import("abitype").AbiEventParameter>, "many">>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        }, {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        }>, z.ZodEffects<z.ZodIntersection<z.ZodObject<{
            constant: z.ZodOptional<z.ZodBoolean>;
            gas: z.ZodOptional<z.ZodNumber>;
            payable: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        }, {
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        }>, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"function">;
            inputs: z.ZodReadonly<z.ZodArray /** The type of criterion, must be "evmTypedDataField" for typed data field-based rules. */<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            name: z.ZodString;
            outputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            stateMutability: z.ZodUnion<[z.ZodLiteral<"pure">, z.ZodLiteral<"view">, z.ZodLiteral<"nonpayable">, z.ZodLiteral<"payable">]>;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        }, {
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"constructor">;
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        }, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"fallback">;
            inputs: z.ZodOptional<z.ZodTuple<[], null>>;
            stateMutability: z.ZodUnion<[z.ZodLiteral /**
             * Array of EVM addresses allowed or disallowed as verifying contracts.
             * Each address must be a 0x-prefixed 40-character hexadecimal string.
             * Limited to a maximum of 300 addresses per criterion.
             */<"payable">, z.ZodLiteral<"nonpayable">]>;
        }, "strip", z.ZodTypeAny, {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        }, {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"receive">;
            stateMutability: z.ZodLiteral<"payable">;
        }, "strip", z.ZodTypeAny, {
            type: "receive";
            stateMutability: "payable";
        }, {
            type: "receive";
            stateMutability: "payable";
        }>]>>, {
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        } & ({
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        } | {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        } | {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        } | {
            type: "receive";
            stateMutability: "payable";
        }), unknown>]>, "many">>]>;
        /**
         * A list of conditions to apply against the function and encoded arguments in the transaction's `data` field.
         * Each condition must be met in order for this policy to be accepted or rejected.
         */
        conditions: z.ZodArray<z.ZodObject<{
            /**
             * The name of a smart contract function being called.
             */
            function: z.ZodString;
            /**
             * An optional list of parameter conditions to apply against encoded arguments in the transaction's `data` field.
             */
            params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                /**
                 * The name of the parameter to check against a transaction's calldata.
                 * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
                 */
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                /**
                 * The operator to use for the comparison. The value resolved at the `name` will be on the
                 * left-hand side of the operator, and the `value` field will be on the right-hand side.
                 */
                operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
                /**
                 * A single value to compare the value resolved at `name` to.
                 * All values are encoded as strings. Refer to the table in the documentation for how values
                 * should be encoded, and which operators are supported for each type.
                 */
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            }, {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            }>, z.ZodObject<{
                /**
                 * The name of the parameter to check against a transaction's calldata.
                 * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
                 */
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                /**
                 * The operator to use for the comparison. The value resolved at the `name` will be on the
                 * left-hand side of the operator, and the `values` field will be on the right-hand side.
                 */
                operator: z.ZodEnum<["in", "not in"]>;
                /**
                 * Values to compare against the resolved `name` value.
                 * All values are encoded as strings. Refer to the table in the documentation for how values
                 * should be encoded, and which operators are supported for each type.
                 */
                values: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                values: string[];
                name: string;
                operator: "in" | "not in";
            }, {
                values: string[];
                name: string;
                operator: "in" | "not in";
            }>]>, "many">>;
        }, "strip", z.ZodTypeAny, {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }, {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly ({
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        } | {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        } | ({
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        } & ({
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        } | {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        } | {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        } | {
            type: "receive";
            stateMutability: "payable";
        })))[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    }, {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly unknown[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "netUSDChange" for USD denominated asset transfer rules. */
        type: z.ZodLiteral<"netUSDChange">;
        /**
         * The amount of USD, in cents, that the total USD value of a transaction's asset transfer and exposure should be compared to.
         */
        changeCents: z.ZodNumber;
        /**
         * The operator to use for the comparison. The total value of a transaction's asset transfer and exposure in USD will be on the left-hand side of the operator, and the `changeCents` field will be on the right-hand side.
         */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
    }, "strip", z.ZodTypeAny, {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    }, {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    action: "reject" | "accept";
    operation: "sendEvmTransaction";
    criteria: ({
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: `0x${string}`[];
    } | {
        type: "evmNetwork";
        operator: "in" | "not in";
        networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "polygon" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
    } | {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    } | {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly ({
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        } | {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        } | ({
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        } & ({
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        } | {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        } | {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        } | {
            type: "receive";
            stateMutability: "payable";
        })))[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    })[];
}, {
    action: "reject" | "accept";
    operation: "sendEvmTransaction";
    criteria: ({
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        type: "evmNetwork";
        operator: "in" | "not in";
        networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "polygon" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
    } | {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    } | {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly unknown[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    })[];
}>;
export type SendEvmTransactionRule = z.infer<typeof SendEvmTransactionRuleSchema>;
/**
 * Type representing a 'prepareUserOperation' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
export declare const PrepareUserOperationRuleSchema: z.ZodObject<{
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the operation, "reject" will block it.
     */
    action: z.ZodEnum<["reject", "accept"]>;
    /**
     * The operation to which this rule applies.
     * Must be "prepareUserOperation".
     */
    operation: z.ZodLiteral<"prepareUserOperation">;
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        /** The type of criterion, must be "ethValue" for Ethereum value-based rules. */
        type: z.ZodLiteral<"ethValue">;
        /**
         * The ETH value amount in wei to compare against, as a string.
         * Must contain only digits.
         */
        ethValue: z.ZodString;
        /** The comparison operator to use for evaluating transaction values against the threshold. */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
    }, "strip", z.ZodTypeAny, {
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }, {
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }>, z.ZodObject<{
        /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
        type: z.ZodLiteral<"evmAddress">;
        /**
         * Array of EVM addresses to compare against.
         * Each address must be a 0x-prefixed 40-character hexadecimal string.
         * Limited to a maximum of 300 addresses per criterion.
         */
        addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
        /**
         * The operator to use for evaluating transaction addresses.
         * "in" checks if an address is in the provided list.
         * "not in" checks if an address is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: `0x${string}`[];
    }, {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: string[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
        type: z.ZodLiteral<"evmNetwork">;
        /**
         * Array of EVM network identifiers to compare against.
         * Either "base-sepolia", "base", "arbitrum", "optimism", "zora", "polygon", "bnb", "avalanche", "ethereum", "ethereum-sepolia"
         */
        networks: z.ZodArray<z.ZodEnum<["base-sepolia", "base", "arbitrum", "optimism", "zora", "polygon", "bnb", "avalanche", "ethereum", "ethereum-sepolia"]>, "many">;
        /**
         * The operator to use for evaluating transaction network.
         * "in" checks if a network is in the provided list.
         * "not in" checks if a network is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "evmNetwork";
        operator: "in" | "not in";
        networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "zora" | "polygon" | "bnb" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
    }, {
        type: "evmNetwork";
        operator: "in" | "not in";
        networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "zora" | "polygon" | "bnb" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "evmData" for EVM transaction rules. */
        type: z.ZodLiteral<"evmData">;
        /**
         * The ABI of the smart contract being called. This can be a partial structure with only specific functions.
         */
        abi: z.ZodUnion<[z.ZodEnum<["erc20", "erc721", "erc1155"]>, z.ZodReadonly<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"error">;
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        }, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"event">;
            anonymous: z.ZodOptional<z.ZodBoolean>;
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiEventParameter, z.ZodTypeDef, import("abitype").AbiEventParameter>, "many">>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        }, {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        }>, z.ZodEffects<z.ZodIntersection<z.ZodObject<{
            constant: z.ZodOptional<z.ZodBoolean>;
            gas: z.ZodOptional<z.ZodNumber>;
            payable: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        }, {
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        }>, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"function">;
            inputs: z.ZodReadonly<z.ZodArray /** The type of criterion, must be "evmTypedDataField" for typed data field-based rules. */<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            name: z.ZodString;
            outputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            stateMutability: z.ZodUnion<[z.ZodLiteral<"pure">, z.ZodLiteral<"view">, z.ZodLiteral<"nonpayable">, z.ZodLiteral<"payable">]>;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        }, {
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"constructor">;
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        }, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"fallback">;
            inputs: z.ZodOptional<z.ZodTuple<[], null>>;
            stateMutability: z.ZodUnion<[z.ZodLiteral /**
             * Array of EVM addresses allowed or disallowed as verifying contracts.
             * Each address must be a 0x-prefixed 40-character hexadecimal string.
             * Limited to a maximum of 300 addresses per criterion.
             */<"payable">, z.ZodLiteral<"nonpayable">]>;
        }, "strip", z.ZodTypeAny, {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        }, {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"receive">;
            stateMutability: z.ZodLiteral<"payable">;
        }, "strip", z.ZodTypeAny, {
            type: "receive";
            stateMutability: "payable";
        }, {
            type: "receive";
            stateMutability: "payable";
        }>]>>, {
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        } & ({
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        } | {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        } | {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        } | {
            type: "receive";
            stateMutability: "payable";
        }), unknown>]>, "many">>]>;
        /**
         * A list of conditions to apply against the function and encoded arguments in the transaction's `data` field.
         * Each condition must be met in order for this policy to be accepted or rejected.
         */
        conditions: z.ZodArray<z.ZodObject<{
            /**
             * The name of a smart contract function being called.
             */
            function: z.ZodString;
            /**
             * An optional list of parameter conditions to apply against encoded arguments in the transaction's `data` field.
             */
            params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                /**
                 * The name of the parameter to check against a transaction's calldata.
                 * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
                 */
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                /**
                 * The operator to use for the comparison. The value resolved at the `name` will be on the
                 * left-hand side of the operator, and the `value` field will be on the right-hand side.
                 */
                operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
                /**
                 * A single value to compare the value resolved at `name` to.
                 * All values are encoded as strings. Refer to the table in the documentation for how values
                 * should be encoded, and which operators are supported for each type.
                 */
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            }, {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            }>, z.ZodObject<{
                /**
                 * The name of the parameter to check against a transaction's calldata.
                 * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
                 */
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                /**
                 * The operator to use for the comparison. The value resolved at the `name` will be on the
                 * left-hand side of the operator, and the `values` field will be on the right-hand side.
                 */
                operator: z.ZodEnum<["in", "not in"]>;
                /**
                 * Values to compare against the resolved `name` value.
                 * All values are encoded as strings. Refer to the table in the documentation for how values
                 * should be encoded, and which operators are supported for each type.
                 */
                values: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                values: string[];
                name: string;
                operator: "in" | "not in";
            }, {
                values: string[];
                name: string;
                operator: "in" | "not in";
            }>]>, "many">>;
        }, "strip", z.ZodTypeAny, {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }, {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly ({
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        } | {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        } | ({
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        } & ({
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        } | {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        } | {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        } | {
            type: "receive";
            stateMutability: "payable";
        })))[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    }, {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly unknown[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "netUSDChange" for USD denominated asset transfer rules. */
        type: z.ZodLiteral<"netUSDChange">;
        /**
         * The amount of USD, in cents, that the total USD value of a transaction's asset transfer and exposure should be compared to.
         */
        changeCents: z.ZodNumber;
        /**
         * The operator to use for the comparison. The total value of a transaction's asset transfer and exposure in USD will be on the left-hand side of the operator, and the `changeCents` field will be on the right-hand side.
         */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
    }, "strip", z.ZodTypeAny, {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    }, {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    action: "reject" | "accept";
    operation: "prepareUserOperation";
    criteria: ({
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: `0x${string}`[];
    } | {
        type: "evmNetwork";
        operator: "in" | "not in";
        networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "zora" | "polygon" | "bnb" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
    } | {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    } | {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly ({
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        } | {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        } | ({
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        } & ({
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        } | {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        } | {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        } | {
            type: "receive";
            stateMutability: "payable";
        })))[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    })[];
}, {
    action: "reject" | "accept";
    operation: "prepareUserOperation";
    criteria: ({
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        type: "evmNetwork";
        operator: "in" | "not in";
        networks: ("base-sepolia" | "base" | "arbitrum" | "optimism" | "zora" | "polygon" | "bnb" | "avalanche" | "ethereum" | "ethereum-sepolia")[];
    } | {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    } | {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly unknown[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    })[];
}>;
export type PrepareUserOperationRule = z.infer<typeof PrepareUserOperationRuleSchema>;
/**
 * Type representing a 'sendUserOperation' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
export declare const SendUserOperationRuleSchema: z.ZodObject<{
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the operation, "reject" will block it.
     */
    action: z.ZodEnum<["reject", "accept"]>;
    /**
     * The operation to which this rule applies.
     * Must be "sendUserOperation".
     */
    operation: z.ZodLiteral<"sendUserOperation">;
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        /** The type of criterion, must be "ethValue" for Ethereum value-based rules. */
        type: z.ZodLiteral<"ethValue">;
        /**
         * The ETH value amount in wei to compare against, as a string.
         * Must contain only digits.
         */
        ethValue: z.ZodString;
        /** The comparison operator to use for evaluating transaction values against the threshold. */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
    }, "strip", z.ZodTypeAny, {
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }, {
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }>, z.ZodObject<{
        /** The type of criterion, must be "evmAddress" for EVM address-based rules. */
        type: z.ZodLiteral<"evmAddress">;
        /**
         * Array of EVM addresses to compare against.
         * Each address must be a 0x-prefixed 40-character hexadecimal string.
         * Limited to a maximum of 300 addresses per criterion.
         */
        addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
        /**
         * The operator to use for evaluating transaction addresses.
         * "in" checks if an address is in the provided list.
         * "not in" checks if an address is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: `0x${string}`[];
    }, {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: string[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "evmData" for EVM transaction rules. */
        type: z.ZodLiteral<"evmData">;
        /**
         * The ABI of the smart contract being called. This can be a partial structure with only specific functions.
         */
        abi: z.ZodUnion<[z.ZodEnum<["erc20", "erc721", "erc1155"]>, z.ZodReadonly<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            type: z.ZodLiteral<"error">;
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        }, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"event">;
            anonymous: z.ZodOptional<z.ZodBoolean>;
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiEventParameter, z.ZodTypeDef, import("abitype").AbiEventParameter>, "many">>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        }, {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        }>, z.ZodEffects<z.ZodIntersection<z.ZodObject<{
            constant: z.ZodOptional<z.ZodBoolean>;
            gas: z.ZodOptional<z.ZodNumber>;
            payable: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        }, {
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        }>, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"function">;
            inputs: z.ZodReadonly<z.ZodArray /** The type of criterion, must be "evmTypedDataField" for typed data field-based rules. */<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            name: z.ZodString;
            outputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            stateMutability: z.ZodUnion<[z.ZodLiteral<"pure">, z.ZodLiteral<"view">, z.ZodLiteral<"nonpayable">, z.ZodLiteral<"payable">]>;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        }, {
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"constructor">;
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
            stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
        }, "strip", z.ZodTypeAny, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        }, {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        }>, z.ZodObject<{
            type: z.ZodLiteral<"fallback">;
            inputs: z.ZodOptional<z.ZodTuple<[], null>>;
            stateMutability: z.ZodUnion<[z.ZodLiteral /**
             * Array of EVM addresses allowed or disallowed as verifying contracts.
             * Each address must be a 0x-prefixed 40-character hexadecimal string.
             * Limited to a maximum of 300 addresses per criterion.
             */<"payable">, z.ZodLiteral<"nonpayable">]>;
        }, "strip", z.ZodTypeAny, {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        }, {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"receive">;
            stateMutability: z.ZodLiteral<"payable">;
        }, "strip", z.ZodTypeAny, {
            type: "receive";
            stateMutability: "payable";
        }, {
            type: "receive";
            stateMutability: "payable";
        }>]>>, {
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        } & ({
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        } | {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        } | {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        } | {
            type: "receive";
            stateMutability: "payable";
        }), unknown>]>, "many">>]>;
        /**
         * A list of conditions to apply against the function and encoded arguments in the transaction's `data` field.
         * Each condition must be met in order for this policy to be accepted or rejected.
         */
        conditions: z.ZodArray<z.ZodObject<{
            /**
             * The name of a smart contract function being called.
             */
            function: z.ZodString;
            /**
             * An optional list of parameter conditions to apply against encoded arguments in the transaction's `data` field.
             */
            params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                /**
                 * The name of the parameter to check against a transaction's calldata.
                 * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
                 */
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                /**
                 * The operator to use for the comparison. The value resolved at the `name` will be on the
                 * left-hand side of the operator, and the `value` field will be on the right-hand side.
                 */
                operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
                /**
                 * A single value to compare the value resolved at `name` to.
                 * All values are encoded as strings. Refer to the table in the documentation for how values
                 * should be encoded, and which operators are supported for each type.
                 */
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            }, {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            }>, z.ZodObject<{
                /**
                 * The name of the parameter to check against a transaction's calldata.
                 * If name is unknown, or is not named, you may supply an array index, e.g., `0` for first parameter.
                 */
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                /**
                 * The operator to use for the comparison. The value resolved at the `name` will be on the
                 * left-hand side of the operator, and the `values` field will be on the right-hand side.
                 */
                operator: z.ZodEnum<["in", "not in"]>;
                /**
                 * Values to compare against the resolved `name` value.
                 * All values are encoded as strings. Refer to the table in the documentation for how values
                 * should be encoded, and which operators are supported for each type.
                 */
                values: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                values: string[];
                name: string;
                operator: "in" | "not in";
            }, {
                values: string[];
                name: string;
                operator: "in" | "not in";
            }>]>, "many">>;
        }, "strip", z.ZodTypeAny, {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }, {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly ({
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        } | {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        } | ({
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        } & ({
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        } | {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        } | {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        } | {
            type: "receive";
            stateMutability: "payable";
        })))[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    }, {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly unknown[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "netUSDChange" for USD denominated asset transfer rules. */
        type: z.ZodLiteral<"netUSDChange">;
        /**
         * The amount of USD, in cents, that the total USD value of a transaction's asset transfer and exposure should be compared to.
         */
        changeCents: z.ZodNumber;
        /**
         * The operator to use for the comparison. The total value of a transaction's asset transfer and exposure in USD will be on the left-hand side of the operator, and the `changeCents` field will be on the right-hand side.
         */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
    }, "strip", z.ZodTypeAny, {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    }, {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    action: "reject" | "accept";
    operation: "sendUserOperation";
    criteria: ({
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: `0x${string}`[];
    } | {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    } | {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly ({
            inputs: readonly import("abitype").AbiParameter[];
            type: "error";
            name: string;
        } | {
            inputs: readonly import("abitype").AbiEventParameter[];
            type: "event";
            name: string;
            anonymous?: boolean | undefined;
        } | ({
            payable?: boolean | undefined;
            constant?: boolean | undefined;
            gas?: number | undefined;
        } & ({
            inputs: readonly import("abitype").AbiParameter[];
            outputs: readonly import("abitype").AbiParameter[];
            type: "function";
            name: string;
            stateMutability: "pure" | "view" | "nonpayable" | "payable";
        } | {
            inputs: readonly import("abitype").AbiParameter[];
            type: "constructor";
            stateMutability: "nonpayable" | "payable";
        } | {
            type: "fallback";
            stateMutability: "nonpayable" | "payable";
            inputs?: [] | undefined;
        } | {
            type: "receive";
            stateMutability: "payable";
        })))[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    })[];
}, {
    action: "reject" | "accept";
    operation: "sendUserOperation";
    criteria: ({
        ethValue: string;
        type: "ethValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "evmAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        type: "netUSDChange";
        operator: ">" | ">=" | "<" | "<=" | "==";
        changeCents: number;
    } | {
        type: "evmData";
        abi: "erc20" | "erc721" | "erc1155" | readonly unknown[];
        conditions: {
            function: string;
            params?: ({
                values: string[];
                name: string;
                operator: "in" | "not in";
            } | {
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            })[] | undefined;
        }[];
    })[];
}>;
export type SendUserOperationRule = z.infer<typeof SendUserOperationRuleSchema>;
//# sourceMappingURL=evmSchema.d.ts.map