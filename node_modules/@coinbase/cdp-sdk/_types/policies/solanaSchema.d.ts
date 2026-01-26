import { z } from "zod";
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
 * Enum for SolAddressOperator values
 */
export declare const SolAddressOperatorEnum: z.ZodEnum<["in", "not in"]>;
/**
 * Type representing the operators that can be used for Solana address comparisons.
 * These operators determine how transaction addresses are evaluated against a list.
 */
export type SolAddressOperator = z.infer<typeof SolAddressOperatorEnum>;
/**
 * Enum for SolValueOperator values
 */
export declare const SolValueOperatorEnum: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
/**
 * Type representing the operators that can be used for SOL value comparisons.
 * These operators determine how transaction SOL values are compared against thresholds.
 */
export type SolValueOperator = z.infer<typeof SolValueOperatorEnum>;
/**
 * Enum for SplAddressOperator values
 */
export declare const SplAddressOperatorEnum: z.ZodEnum<["in", "not in"]>;
/**
 * Type representing the operators that can be used for SPL address comparisons.
 * These operators determine how SPL token transfer recipient addresses are evaluated against a list.
 */
export type SplAddressOperator = z.infer<typeof SplAddressOperatorEnum>;
/**
 * Enum for SplValueOperator values
 */
export declare const SplValueOperatorEnum: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
/**
 * Type representing the operators that can be used for SPL token value comparisons.
 * These operators determine how SPL token values are compared against thresholds.
 */
export type SplValueOperator = z.infer<typeof SplValueOperatorEnum>;
/**
 * Enum for MintAddressOperator values
 */
export declare const MintAddressOperatorEnum: z.ZodEnum<["in", "not in"]>;
/**
 * Type representing the operators that can be used for mint address comparisons.
 * These operators determine how token mint addresses are evaluated against a list.
 */
export type MintAddressOperator = z.infer<typeof MintAddressOperatorEnum>;
/**
 * Enum for ProgramIdOperator values
 */
export declare const ProgramIdOperatorEnum: z.ZodEnum<["in", "not in"]>;
/**
 * Type representing the operators that can be used for program ID comparisons.
 * These operators determine how transaction program IDs are evaluated against a list.
 */
export type ProgramIdOperator = z.infer<typeof ProgramIdOperatorEnum>;
/**
 * Enum for SolNetworkOperator values
 */
export declare const SolNetworkOperatorEnum: z.ZodEnum<["in", "not in"]>;
/**
 * Type representing the operators that can be used for Solana network comparisons.
 * These operators determine how transaction networks are evaluated against a list.
 */
export type SolNetworkOperator = z.infer<typeof SolNetworkOperatorEnum>;
/**
 * Enum for supported Solana networks
 */
export declare const SolNetworkEnum: z.ZodEnum<["solana-devnet", "solana"]>;
/**
 * Type representing the supported Solana networks.
 */
export type SolNetwork = z.infer<typeof SolNetworkEnum>;
/**
 * Enum for KnownIdlType values
 */
export declare const KnownIdlTypeEnum: z.ZodEnum<["SystemProgram", "TokenProgram", "AssociatedTokenProgram"]>;
/**
 * Type representing known Solana programs that have established IDL specifications.
 * These programs can be referenced directly by name in policy rules.
 */
export type KnownIdlType = z.infer<typeof KnownIdlTypeEnum>;
/**
 * Schema for IDL specifications following Anchor's IDL format v0.30+
 */
export declare const IdlSchema: z.ZodObject<{
    /** The program address */
    address: z.ZodString;
    /** Array of instruction specifications */
    instructions: z.ZodArray<z.ZodAny, "many">;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    /** The program address */
    address: z.ZodString;
    /** Array of instruction specifications */
    instructions: z.ZodArray<z.ZodAny, "many">;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    /** The program address */
    address: z.ZodString;
    /** Array of instruction specifications */
    instructions: z.ZodArray<z.ZodAny, "many">;
}, z.ZodTypeAny, "passthrough">>;
export type Idl = z.infer<typeof IdlSchema>;
/**
 * Enum for SolDataParameterOperator values
 */
export declare const SolDataParameterOperatorEnum: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
/**
 * Type representing the operators that can be used for Solana data parameter comparisons.
 */
export type SolDataParameterOperator = z.infer<typeof SolDataParameterOperatorEnum>;
/**
 * Enum for SolDataParameterListOperator values
 */
export declare const SolDataParameterListOperatorEnum: z.ZodEnum<["in", "not in"]>;
/**
 * Type representing the operators that can be used for Solana data parameter list comparisons.
 */
export type SolDataParameterListOperator = z.infer<typeof SolDataParameterListOperatorEnum>;
/**
 * Schema for Solana data parameter conditions (single value)
 */
export declare const SolDataParameterConditionSchema: z.ZodObject<{
    /** The parameter name */
    name: z.ZodString;
    /** The operator to use for the comparison */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
    /** The value to compare against */
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
export type SolDataParameterCondition = z.infer<typeof SolDataParameterConditionSchema>;
/**
 * Schema for Solana data parameter conditions (list values)
 */
export declare const SolDataParameterConditionListSchema: z.ZodObject<{
    /** The parameter name */
    name: z.ZodString;
    /** The operator to use for the comparison */
    operator: z.ZodEnum<["in", "not in"]>;
    /** The values to compare against */
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
export type SolDataParameterConditionList = z.infer<typeof SolDataParameterConditionListSchema>;
/**
 * Schema for Solana data conditions
 */
export declare const SolDataConditionSchema: z.ZodObject<{
    /** The instruction name */
    instruction: z.ZodString;
    /** Parameter conditions for the instruction */
    params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
        /** The parameter name */
        name: z.ZodString;
        /** The operator to use for the comparison */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
        /** The value to compare against */
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
        /** The parameter name */
        name: z.ZodString;
        /** The operator to use for the comparison */
        operator: z.ZodEnum<["in", "not in"]>;
        /** The values to compare against */
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
    instruction: string;
    params?: ({
        value: string;
        name: string;
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        values: string[];
        name: string;
        operator: "in" | "not in";
    })[] | undefined;
}, {
    instruction: string;
    params?: ({
        value: string;
        name: string;
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        values: string[];
        name: string;
        operator: "in" | "not in";
    })[] | undefined;
}>;
export type SolDataCondition = z.infer<typeof SolDataConditionSchema>;
/**
 * Schema for Solana address criterions
 */
export declare const SolAddressCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "solAddress" for Solana address-based rules. */
    type: z.ZodLiteral<"solAddress">;
    /**
     * Array of Solana addresses to compare against.
     * Each address must be a valid Base58-encoded Solana address (32-44 characters).
     */
    addresses: z.ZodArray<z.ZodString, "many">;
    /**
     * The operator to use for evaluating transaction addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "solAddress";
    operator: "in" | "not in";
    addresses: string[];
}, {
    type: "solAddress";
    operator: "in" | "not in";
    addresses: string[];
}>;
export type SolAddressCriterion = z.infer<typeof SolAddressCriterionSchema>;
/**
 * Schema for SOL value criterions
 */
export declare const SolValueCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "solValue" for SOL value-based rules. */
    type: z.ZodLiteral<"solValue">;
    /**
     * The SOL value amount in lamports to compare against, as a string.
     * Must contain only digits.
     */
    solValue: z.ZodString;
    /** The comparison operator to use for evaluating transaction SOL values against the threshold. */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    solValue: string;
    type: "solValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}, {
    solValue: string;
    type: "solValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}>;
export type SolValueCriterion = z.infer<typeof SolValueCriterionSchema>;
/**
 * Schema for SPL address criterions
 */
export declare const SplAddressCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "splAddress" for SPL address-based rules. */
    type: z.ZodLiteral<"splAddress">;
    /**
     * Array of Solana addresses to compare against for SPL token transfer recipients.
     * Each address must be a valid Base58-encoded Solana address (32-44 characters).
     */
    addresses: z.ZodArray<z.ZodString, "many">;
    /**
     * The operator to use for evaluating SPL token transfer recipient addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "splAddress";
    operator: "in" | "not in";
    addresses: string[];
}, {
    type: "splAddress";
    operator: "in" | "not in";
    addresses: string[];
}>;
export type SplAddressCriterion = z.infer<typeof SplAddressCriterionSchema>;
/**
 * Schema for SPL value criterions
 */
export declare const SplValueCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "splValue" for SPL token value-based rules. */
    type: z.ZodLiteral<"splValue">;
    /**
     * The SPL token value amount to compare against, as a string.
     * Must contain only digits.
     */
    splValue: z.ZodString;
    /** The comparison operator to use for evaluating SPL token values against the threshold. */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    splValue: string;
    type: "splValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}, {
    splValue: string;
    type: "splValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}>;
export type SplValueCriterion = z.infer<typeof SplValueCriterionSchema>;
/**
 * Schema for mint address criterions
 */
export declare const MintAddressCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "mintAddress" for token mint address-based rules. */
    type: z.ZodLiteral<"mintAddress">;
    /**
     * Array of Solana addresses to compare against for token mint addresses.
     * Each address must be a valid Base58-encoded Solana address (32-44 characters).
     */
    addresses: z.ZodArray<z.ZodString, "many">;
    /**
     * The operator to use for evaluating token mint addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "mintAddress";
    operator: "in" | "not in";
    addresses: string[];
}, {
    type: "mintAddress";
    operator: "in" | "not in";
    addresses: string[];
}>;
export type MintAddressCriterion = z.infer<typeof MintAddressCriterionSchema>;
/**
 * Schema for Solana data criterions
 */
export declare const SolDataCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "solData" for Solana data-based rules. */
    type: z.ZodLiteral<"solData">;
    /**
     * List of IDL specifications. Can contain known program names (strings) or custom IDL objects.
     */
    idls: z.ZodArray<z.ZodUnion<[z.ZodEnum<["SystemProgram", "TokenProgram", "AssociatedTokenProgram"]>, z.ZodObject<{
        /** The program address */
        address: z.ZodString;
        /** Array of instruction specifications */
        instructions: z.ZodArray<z.ZodAny, "many">;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        /** The program address */
        address: z.ZodString;
        /** Array of instruction specifications */
        instructions: z.ZodArray<z.ZodAny, "many">;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        /** The program address */
        address: z.ZodString;
        /** Array of instruction specifications */
        instructions: z.ZodArray<z.ZodAny, "many">;
    }, z.ZodTypeAny, "passthrough">>]>, "many">;
    /**
     * A list of conditions to apply against the transaction instruction.
     * Only one condition must evaluate to true for this criterion to be met.
     */
    conditions: z.ZodArray<z.ZodObject<{
        /** The instruction name */
        instruction: z.ZodString;
        /** Parameter conditions for the instruction */
        params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            /** The parameter name */
            name: z.ZodString;
            /** The operator to use for the comparison */
            operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
            /** The value to compare against */
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
            /** The parameter name */
            name: z.ZodString;
            /** The operator to use for the comparison */
            operator: z.ZodEnum<["in", "not in"]>;
            /** The values to compare against */
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
        instruction: string;
        params?: ({
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            values: string[];
            name: string;
            operator: "in" | "not in";
        })[] | undefined;
    }, {
        instruction: string;
        params?: ({
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            values: string[];
            name: string;
            operator: "in" | "not in";
        })[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "solData";
    conditions: {
        instruction: string;
        params?: ({
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            values: string[];
            name: string;
            operator: "in" | "not in";
        })[] | undefined;
    }[];
    idls: ("SystemProgram" | "TokenProgram" | "AssociatedTokenProgram" | z.objectOutputType<{
        /** The program address */
        address: z.ZodString;
        /** Array of instruction specifications */
        instructions: z.ZodArray<z.ZodAny, "many">;
    }, z.ZodTypeAny, "passthrough">)[];
}, {
    type: "solData";
    conditions: {
        instruction: string;
        params?: ({
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            values: string[];
            name: string;
            operator: "in" | "not in";
        })[] | undefined;
    }[];
    idls: ("SystemProgram" | "TokenProgram" | "AssociatedTokenProgram" | z.objectInputType<{
        /** The program address */
        address: z.ZodString;
        /** Array of instruction specifications */
        instructions: z.ZodArray<z.ZodAny, "many">;
    }, z.ZodTypeAny, "passthrough">)[];
}>;
export type SolDataCriterion = z.infer<typeof SolDataCriterionSchema>;
/**
 * Schema for program ID criterions
 */
export declare const ProgramIdCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "programId" for program ID-based rules. */
    type: z.ZodLiteral<"programId">;
    /**
     * Array of Solana program IDs to compare against.
     * Each program ID must be a valid Base58-encoded Solana address (32-44 characters).
     */
    programIds: z.ZodArray<z.ZodString, "many">;
    /**
     * The operator to use for evaluating transaction program IDs.
     * "in" checks if a program ID is in the provided list.
     * "not in" checks if a program ID is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "programId";
    operator: "in" | "not in";
    programIds: string[];
}, {
    type: "programId";
    operator: "in" | "not in";
    programIds: string[];
}>;
export type ProgramIdCriterion = z.infer<typeof ProgramIdCriterionSchema>;
/**
 * Schema for Solana network criterions
 */
export declare const SolNetworkCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "solNetwork" for network-based rules. */
    type: z.ZodLiteral<"solNetwork">;
    /**
     * Array of Solana networks to compare against.
     */
    networks: z.ZodArray<z.ZodEnum<["solana-devnet", "solana"]>, "many">;
    /**
     * The operator to use for evaluating transaction network.
     * "in" checks if the network is in the provided list.
     * "not in" checks if the network is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "solNetwork";
    operator: "in" | "not in";
    networks: ("solana-devnet" | "solana")[];
}, {
    type: "solNetwork";
    operator: "in" | "not in";
    networks: ("solana-devnet" | "solana")[];
}>;
export type SolNetworkCriterion = z.infer<typeof SolNetworkCriterionSchema>;
/**
 * Schema for Solana message criterions
 */
export declare const SolMessageCriterionSchema: z.ZodObject<{
    /** The type of criterion, must be "solMessage" for message-based rules. */
    type: z.ZodLiteral<"solMessage">;
    /**
     * A regular expression pattern to match against the message.
     */
    match: z.ZodString;
}, "strip", z.ZodTypeAny, {
    match: string;
    type: "solMessage";
}, {
    match: string;
    type: "solMessage";
}>;
export type SolMessageCriterion = z.infer<typeof SolMessageCriterionSchema>;
/**
 * Schema for criteria used in SignSolTransaction operations
 */
export declare const SignSolTransactionCriteriaSchema: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    /** The type of criterion, must be "solAddress" for Solana address-based rules. */
    type: z.ZodLiteral<"solAddress">;
    /**
     * Array of Solana addresses to compare against.
     * Each address must be a valid Base58-encoded Solana address (32-44 characters).
     */
    addresses: z.ZodArray<z.ZodString, "many">;
    /**
     * The operator to use for evaluating transaction addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "solAddress";
    operator: "in" | "not in";
    addresses: string[];
}, {
    type: "solAddress";
    operator: "in" | "not in";
    addresses: string[];
}>, z.ZodObject<{
    /** The type of criterion, must be "solValue" for SOL value-based rules. */
    type: z.ZodLiteral<"solValue">;
    /**
     * The SOL value amount in lamports to compare against, as a string.
     * Must contain only digits.
     */
    solValue: z.ZodString;
    /** The comparison operator to use for evaluating transaction SOL values against the threshold. */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    solValue: string;
    type: "solValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}, {
    solValue: string;
    type: "solValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}>, z.ZodObject<{
    /** The type of criterion, must be "splAddress" for SPL address-based rules. */
    type: z.ZodLiteral<"splAddress">;
    /**
     * Array of Solana addresses to compare against for SPL token transfer recipients.
     * Each address must be a valid Base58-encoded Solana address (32-44 characters).
     */
    addresses: z.ZodArray<z.ZodString, "many">;
    /**
     * The operator to use for evaluating SPL token transfer recipient addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "splAddress";
    operator: "in" | "not in";
    addresses: string[];
}, {
    type: "splAddress";
    operator: "in" | "not in";
    addresses: string[];
}>, z.ZodObject<{
    /** The type of criterion, must be "splValue" for SPL token value-based rules. */
    type: z.ZodLiteral<"splValue">;
    /**
     * The SPL token value amount to compare against, as a string.
     * Must contain only digits.
     */
    splValue: z.ZodString;
    /** The comparison operator to use for evaluating SPL token values against the threshold. */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    splValue: string;
    type: "splValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}, {
    splValue: string;
    type: "splValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}>, z.ZodObject<{
    /** The type of criterion, must be "mintAddress" for token mint address-based rules. */
    type: z.ZodLiteral<"mintAddress">;
    /**
     * Array of Solana addresses to compare against for token mint addresses.
     * Each address must be a valid Base58-encoded Solana address (32-44 characters).
     */
    addresses: z.ZodArray<z.ZodString, "many">;
    /**
     * The operator to use for evaluating token mint addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "mintAddress";
    operator: "in" | "not in";
    addresses: string[];
}, {
    type: "mintAddress";
    operator: "in" | "not in";
    addresses: string[];
}>, z.ZodObject<{
    /** The type of criterion, must be "solData" for Solana data-based rules. */
    type: z.ZodLiteral<"solData">;
    /**
     * List of IDL specifications. Can contain known program names (strings) or custom IDL objects.
     */
    idls: z.ZodArray<z.ZodUnion<[z.ZodEnum<["SystemProgram", "TokenProgram", "AssociatedTokenProgram"]>, z.ZodObject<{
        /** The program address */
        address: z.ZodString;
        /** Array of instruction specifications */
        instructions: z.ZodArray<z.ZodAny, "many">;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        /** The program address */
        address: z.ZodString;
        /** Array of instruction specifications */
        instructions: z.ZodArray<z.ZodAny, "many">;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        /** The program address */
        address: z.ZodString;
        /** Array of instruction specifications */
        instructions: z.ZodArray<z.ZodAny, "many">;
    }, z.ZodTypeAny, "passthrough">>]>, "many">;
    /**
     * A list of conditions to apply against the transaction instruction.
     * Only one condition must evaluate to true for this criterion to be met.
     */
    conditions: z.ZodArray<z.ZodObject<{
        /** The instruction name */
        instruction: z.ZodString;
        /** Parameter conditions for the instruction */
        params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            /** The parameter name */
            name: z.ZodString;
            /** The operator to use for the comparison */
            operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
            /** The value to compare against */
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
            /** The parameter name */
            name: z.ZodString;
            /** The operator to use for the comparison */
            operator: z.ZodEnum<["in", "not in"]>;
            /** The values to compare against */
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
        instruction: string;
        params?: ({
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            values: string[];
            name: string;
            operator: "in" | "not in";
        })[] | undefined;
    }, {
        instruction: string;
        params?: ({
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            values: string[];
            name: string;
            operator: "in" | "not in";
        })[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "solData";
    conditions: {
        instruction: string;
        params?: ({
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            values: string[];
            name: string;
            operator: "in" | "not in";
        })[] | undefined;
    }[];
    idls: ("SystemProgram" | "TokenProgram" | "AssociatedTokenProgram" | z.objectOutputType<{
        /** The program address */
        address: z.ZodString;
        /** Array of instruction specifications */
        instructions: z.ZodArray<z.ZodAny, "many">;
    }, z.ZodTypeAny, "passthrough">)[];
}, {
    type: "solData";
    conditions: {
        instruction: string;
        params?: ({
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            values: string[];
            name: string;
            operator: "in" | "not in";
        })[] | undefined;
    }[];
    idls: ("SystemProgram" | "TokenProgram" | "AssociatedTokenProgram" | z.objectInputType<{
        /** The program address */
        address: z.ZodString;
        /** Array of instruction specifications */
        instructions: z.ZodArray<z.ZodAny, "many">;
    }, z.ZodTypeAny, "passthrough">)[];
}>, z.ZodObject<{
    /** The type of criterion, must be "programId" for program ID-based rules. */
    type: z.ZodLiteral<"programId">;
    /**
     * Array of Solana program IDs to compare against.
     * Each program ID must be a valid Base58-encoded Solana address (32-44 characters).
     */
    programIds: z.ZodArray<z.ZodString, "many">;
    /**
     * The operator to use for evaluating transaction program IDs.
     * "in" checks if a program ID is in the provided list.
     * "not in" checks if a program ID is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "programId";
    operator: "in" | "not in";
    programIds: string[];
}, {
    type: "programId";
    operator: "in" | "not in";
    programIds: string[];
}>]>, "many">;
/**
 * Type representing a set of criteria for the signSolTransaction operation.
 * Can contain up to 10 individual criterion objects for Solana addresses, SOL values, SPL addresses, SPL values, mint addresses, Solana data, and program IDs.
 */
export type SignSolTransactionCriteria = z.infer<typeof SignSolTransactionCriteriaSchema>;
/**
 * Schema for criteria used in SendSolTransaction operations
 */
export declare const SendSolTransactionCriteriaSchema: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    /** The type of criterion, must be "solAddress" for Solana address-based rules. */
    type: z.ZodLiteral<"solAddress">;
    /**
     * Array of Solana addresses to compare against.
     * Each address must be a valid Base58-encoded Solana address (32-44 characters).
     */
    addresses: z.ZodArray<z.ZodString, "many">;
    /**
     * The operator to use for evaluating transaction addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "solAddress";
    operator: "in" | "not in";
    addresses: string[];
}, {
    type: "solAddress";
    operator: "in" | "not in";
    addresses: string[];
}>, z.ZodObject<{
    /** The type of criterion, must be "solValue" for SOL value-based rules. */
    type: z.ZodLiteral<"solValue">;
    /**
     * The SOL value amount in lamports to compare against, as a string.
     * Must contain only digits.
     */
    solValue: z.ZodString;
    /** The comparison operator to use for evaluating transaction SOL values against the threshold. */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    solValue: string;
    type: "solValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}, {
    solValue: string;
    type: "solValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}>, z.ZodObject<{
    /** The type of criterion, must be "splAddress" for SPL address-based rules. */
    type: z.ZodLiteral<"splAddress">;
    /**
     * Array of Solana addresses to compare against for SPL token transfer recipients.
     * Each address must be a valid Base58-encoded Solana address (32-44 characters).
     */
    addresses: z.ZodArray<z.ZodString, "many">;
    /**
     * The operator to use for evaluating SPL token transfer recipient addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "splAddress";
    operator: "in" | "not in";
    addresses: string[];
}, {
    type: "splAddress";
    operator: "in" | "not in";
    addresses: string[];
}>, z.ZodObject<{
    /** The type of criterion, must be "splValue" for SPL token value-based rules. */
    type: z.ZodLiteral<"splValue">;
    /**
     * The SPL token value amount to compare against, as a string.
     * Must contain only digits.
     */
    splValue: z.ZodString;
    /** The comparison operator to use for evaluating SPL token values against the threshold. */
    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
}, "strip", z.ZodTypeAny, {
    splValue: string;
    type: "splValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}, {
    splValue: string;
    type: "splValue";
    operator: ">" | ">=" | "<" | "<=" | "==";
}>, z.ZodObject<{
    /** The type of criterion, must be "mintAddress" for token mint address-based rules. */
    type: z.ZodLiteral<"mintAddress">;
    /**
     * Array of Solana addresses to compare against for token mint addresses.
     * Each address must be a valid Base58-encoded Solana address (32-44 characters).
     */
    addresses: z.ZodArray<z.ZodString, "many">;
    /**
     * The operator to use for evaluating token mint addresses.
     * "in" checks if an address is in the provided list.
     * "not in" checks if an address is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "mintAddress";
    operator: "in" | "not in";
    addresses: string[];
}, {
    type: "mintAddress";
    operator: "in" | "not in";
    addresses: string[];
}>, z.ZodObject<{
    /** The type of criterion, must be "solData" for Solana data-based rules. */
    type: z.ZodLiteral<"solData">;
    /**
     * List of IDL specifications. Can contain known program names (strings) or custom IDL objects.
     */
    idls: z.ZodArray<z.ZodUnion<[z.ZodEnum<["SystemProgram", "TokenProgram", "AssociatedTokenProgram"]>, z.ZodObject<{
        /** The program address */
        address: z.ZodString;
        /** Array of instruction specifications */
        instructions: z.ZodArray<z.ZodAny, "many">;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        /** The program address */
        address: z.ZodString;
        /** Array of instruction specifications */
        instructions: z.ZodArray<z.ZodAny, "many">;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        /** The program address */
        address: z.ZodString;
        /** Array of instruction specifications */
        instructions: z.ZodArray<z.ZodAny, "many">;
    }, z.ZodTypeAny, "passthrough">>]>, "many">;
    /**
     * A list of conditions to apply against the transaction instruction.
     * Only one condition must evaluate to true for this criterion to be met.
     */
    conditions: z.ZodArray<z.ZodObject<{
        /** The instruction name */
        instruction: z.ZodString;
        /** Parameter conditions for the instruction */
        params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
            /** The parameter name */
            name: z.ZodString;
            /** The operator to use for the comparison */
            operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
            /** The value to compare against */
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
            /** The parameter name */
            name: z.ZodString;
            /** The operator to use for the comparison */
            operator: z.ZodEnum<["in", "not in"]>;
            /** The values to compare against */
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
        instruction: string;
        params?: ({
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            values: string[];
            name: string;
            operator: "in" | "not in";
        })[] | undefined;
    }, {
        instruction: string;
        params?: ({
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            values: string[];
            name: string;
            operator: "in" | "not in";
        })[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "solData";
    conditions: {
        instruction: string;
        params?: ({
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            values: string[];
            name: string;
            operator: "in" | "not in";
        })[] | undefined;
    }[];
    idls: ("SystemProgram" | "TokenProgram" | "AssociatedTokenProgram" | z.objectOutputType<{
        /** The program address */
        address: z.ZodString;
        /** Array of instruction specifications */
        instructions: z.ZodArray<z.ZodAny, "many">;
    }, z.ZodTypeAny, "passthrough">)[];
}, {
    type: "solData";
    conditions: {
        instruction: string;
        params?: ({
            value: string;
            name: string;
            operator: ">" | ">=" | "<" | "<=" | "==";
        } | {
            values: string[];
            name: string;
            operator: "in" | "not in";
        })[] | undefined;
    }[];
    idls: ("SystemProgram" | "TokenProgram" | "AssociatedTokenProgram" | z.objectInputType<{
        /** The program address */
        address: z.ZodString;
        /** Array of instruction specifications */
        instructions: z.ZodArray<z.ZodAny, "many">;
    }, z.ZodTypeAny, "passthrough">)[];
}>, z.ZodObject<{
    /** The type of criterion, must be "programId" for program ID-based rules. */
    type: z.ZodLiteral<"programId">;
    /**
     * Array of Solana program IDs to compare against.
     * Each program ID must be a valid Base58-encoded Solana address (32-44 characters).
     */
    programIds: z.ZodArray<z.ZodString, "many">;
    /**
     * The operator to use for evaluating transaction program IDs.
     * "in" checks if a program ID is in the provided list.
     * "not in" checks if a program ID is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "programId";
    operator: "in" | "not in";
    programIds: string[];
}, {
    type: "programId";
    operator: "in" | "not in";
    programIds: string[];
}>, z.ZodObject<{
    /** The type of criterion, must be "solNetwork" for network-based rules. */
    type: z.ZodLiteral<"solNetwork">;
    /**
     * Array of Solana networks to compare against.
     */
    networks: z.ZodArray<z.ZodEnum<["solana-devnet", "solana"]>, "many">;
    /**
     * The operator to use for evaluating transaction network.
     * "in" checks if the network is in the provided list.
     * "not in" checks if the network is not in the provided list.
     */
    operator: z.ZodEnum<["in", "not in"]>;
}, "strip", z.ZodTypeAny, {
    type: "solNetwork";
    operator: "in" | "not in";
    networks: ("solana-devnet" | "solana")[];
}, {
    type: "solNetwork";
    operator: "in" | "not in";
    networks: ("solana-devnet" | "solana")[];
}>]>, "many">;
/**
 * Type representing a set of criteria for the sendSolTransaction operation.
 * Can contain up to 10 individual criterion objects for Solana addresses, SOL values, SPL addresses, SPL values, mint addresses, Solana data, program IDs, and network restrictions.
 */
export type SendSolTransactionCriteria = z.infer<typeof SendSolTransactionCriteriaSchema>;
/**
 * Enum for Solana Operation types
 */
export declare const SolOperationEnum: z.ZodEnum<["signSolTransaction", "sendSolTransaction", "signSolMessage"]>;
/**
 * Type representing the operations that can be governed by a policy.
 * Defines what Solana operations the policy applies to.
 */
export type SolOperation = z.infer<typeof SolOperationEnum>;
/**
 * Type representing a 'signSolTransaction' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
export declare const SignSolTransactionRuleSchema: z.ZodObject<{
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the transaction, "reject" will block it.
     */
    action: z.ZodEnum<["reject", "accept"]>;
    /**
     * The operation to which this rule applies.
     * Must be "signSolTransaction".
     */
    operation: z.ZodLiteral<"signSolTransaction">;
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        /** The type of criterion, must be "solAddress" for Solana address-based rules. */
        type: z.ZodLiteral<"solAddress">;
        /**
         * Array of Solana addresses to compare against.
         * Each address must be a valid Base58-encoded Solana address (32-44 characters).
         */
        addresses: z.ZodArray<z.ZodString, "many">;
        /**
         * The operator to use for evaluating transaction addresses.
         * "in" checks if an address is in the provided list.
         * "not in" checks if an address is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "solAddress";
        operator: "in" | "not in";
        addresses: string[];
    }, {
        type: "solAddress";
        operator: "in" | "not in";
        addresses: string[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "solValue" for SOL value-based rules. */
        type: z.ZodLiteral<"solValue">;
        /**
         * The SOL value amount in lamports to compare against, as a string.
         * Must contain only digits.
         */
        solValue: z.ZodString;
        /** The comparison operator to use for evaluating transaction SOL values against the threshold. */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
    }, "strip", z.ZodTypeAny, {
        solValue: string;
        type: "solValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }, {
        solValue: string;
        type: "solValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }>, z.ZodObject<{
        /** The type of criterion, must be "splAddress" for SPL address-based rules. */
        type: z.ZodLiteral<"splAddress">;
        /**
         * Array of Solana addresses to compare against for SPL token transfer recipients.
         * Each address must be a valid Base58-encoded Solana address (32-44 characters).
         */
        addresses: z.ZodArray<z.ZodString, "many">;
        /**
         * The operator to use for evaluating SPL token transfer recipient addresses.
         * "in" checks if an address is in the provided list.
         * "not in" checks if an address is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "splAddress";
        operator: "in" | "not in";
        addresses: string[];
    }, {
        type: "splAddress";
        operator: "in" | "not in";
        addresses: string[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "splValue" for SPL token value-based rules. */
        type: z.ZodLiteral<"splValue">;
        /**
         * The SPL token value amount to compare against, as a string.
         * Must contain only digits.
         */
        splValue: z.ZodString;
        /** The comparison operator to use for evaluating SPL token values against the threshold. */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
    }, "strip", z.ZodTypeAny, {
        splValue: string;
        type: "splValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }, {
        splValue: string;
        type: "splValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }>, z.ZodObject<{
        /** The type of criterion, must be "mintAddress" for token mint address-based rules. */
        type: z.ZodLiteral<"mintAddress">;
        /**
         * Array of Solana addresses to compare against for token mint addresses.
         * Each address must be a valid Base58-encoded Solana address (32-44 characters).
         */
        addresses: z.ZodArray<z.ZodString, "many">;
        /**
         * The operator to use for evaluating token mint addresses.
         * "in" checks if an address is in the provided list.
         * "not in" checks if an address is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "mintAddress";
        operator: "in" | "not in";
        addresses: string[];
    }, {
        type: "mintAddress";
        operator: "in" | "not in";
        addresses: string[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "solData" for Solana data-based rules. */
        type: z.ZodLiteral<"solData">;
        /**
         * List of IDL specifications. Can contain known program names (strings) or custom IDL objects.
         */
        idls: z.ZodArray<z.ZodUnion<[z.ZodEnum<["SystemProgram", "TokenProgram", "AssociatedTokenProgram"]>, z.ZodObject<{
            /** The program address */
            address: z.ZodString;
            /** Array of instruction specifications */
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            /** The program address */
            address: z.ZodString;
            /** Array of instruction specifications */
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            /** The program address */
            address: z.ZodString;
            /** Array of instruction specifications */
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">>]>, "many">;
        /**
         * A list of conditions to apply against the transaction instruction.
         * Only one condition must evaluate to true for this criterion to be met.
         */
        conditions: z.ZodArray<z.ZodObject<{
            /** The instruction name */
            instruction: z.ZodString;
            /** Parameter conditions for the instruction */
            params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                /** The parameter name */
                name: z.ZodString;
                /** The operator to use for the comparison */
                operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
                /** The value to compare against */
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
                /** The parameter name */
                name: z.ZodString;
                /** The operator to use for the comparison */
                operator: z.ZodEnum<["in", "not in"]>;
                /** The values to compare against */
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
            instruction: string;
            params?: ({
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            } | {
                values: string[];
                name: string;
                operator: "in" | "not in";
            })[] | undefined;
        }, {
            instruction: string;
            params?: ({
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            } | {
                values: string[];
                name: string;
                operator: "in" | "not in";
            })[] | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "solData";
        conditions: {
            instruction: string;
            params?: ({
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            } | {
                values: string[];
                name: string;
                operator: "in" | "not in";
            })[] | undefined;
        }[];
        idls: ("SystemProgram" | "TokenProgram" | "AssociatedTokenProgram" | z.objectOutputType<{
            /** The program address */
            address: z.ZodString;
            /** Array of instruction specifications */
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">)[];
    }, {
        type: "solData";
        conditions: {
            instruction: string;
            params?: ({
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            } | {
                values: string[];
                name: string;
                operator: "in" | "not in";
            })[] | undefined;
        }[];
        idls: ("SystemProgram" | "TokenProgram" | "AssociatedTokenProgram" | z.objectInputType<{
            /** The program address */
            address: z.ZodString;
            /** Array of instruction specifications */
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">)[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "programId" for program ID-based rules. */
        type: z.ZodLiteral<"programId">;
        /**
         * Array of Solana program IDs to compare against.
         * Each program ID must be a valid Base58-encoded Solana address (32-44 characters).
         */
        programIds: z.ZodArray<z.ZodString, "many">;
        /**
         * The operator to use for evaluating transaction program IDs.
         * "in" checks if a program ID is in the provided list.
         * "not in" checks if a program ID is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "programId";
        operator: "in" | "not in";
        programIds: string[];
    }, {
        type: "programId";
        operator: "in" | "not in";
        programIds: string[];
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    action: "reject" | "accept";
    operation: "signSolTransaction";
    criteria: ({
        type: "solAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        solValue: string;
        type: "solValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "splAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        splValue: string;
        type: "splValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "mintAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        type: "solData";
        conditions: {
            instruction: string;
            params?: ({
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            } | {
                values: string[];
                name: string;
                operator: "in" | "not in";
            })[] | undefined;
        }[];
        idls: ("SystemProgram" | "TokenProgram" | "AssociatedTokenProgram" | z.objectOutputType<{
            /** The program address */
            address: z.ZodString;
            /** Array of instruction specifications */
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">)[];
    } | {
        type: "programId";
        operator: "in" | "not in";
        programIds: string[];
    })[];
}, {
    action: "reject" | "accept";
    operation: "signSolTransaction";
    criteria: ({
        type: "solAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        solValue: string;
        type: "solValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "splAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        splValue: string;
        type: "splValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "mintAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        type: "solData";
        conditions: {
            instruction: string;
            params?: ({
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            } | {
                values: string[];
                name: string;
                operator: "in" | "not in";
            })[] | undefined;
        }[];
        idls: ("SystemProgram" | "TokenProgram" | "AssociatedTokenProgram" | z.objectInputType<{
            /** The program address */
            address: z.ZodString;
            /** Array of instruction specifications */
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">)[];
    } | {
        type: "programId";
        operator: "in" | "not in";
        programIds: string[];
    })[];
}>;
export type SignSolTransactionRule = z.infer<typeof SignSolTransactionRuleSchema>;
/**
 * Type representing a 'sendSolTransaction' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
export declare const SendSolTransactionRuleSchema: z.ZodObject<{
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the transaction, "reject" will block it.
     */
    action: z.ZodEnum<["reject", "accept"]>;
    /**
     * The operation to which this rule applies.
     * Must be "sendSolTransaction".
     */
    operation: z.ZodLiteral<"sendSolTransaction">;
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        /** The type of criterion, must be "solAddress" for Solana address-based rules. */
        type: z.ZodLiteral<"solAddress">;
        /**
         * Array of Solana addresses to compare against.
         * Each address must be a valid Base58-encoded Solana address (32-44 characters).
         */
        addresses: z.ZodArray<z.ZodString, "many">;
        /**
         * The operator to use for evaluating transaction addresses.
         * "in" checks if an address is in the provided list.
         * "not in" checks if an address is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "solAddress";
        operator: "in" | "not in";
        addresses: string[];
    }, {
        type: "solAddress";
        operator: "in" | "not in";
        addresses: string[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "solValue" for SOL value-based rules. */
        type: z.ZodLiteral<"solValue">;
        /**
         * The SOL value amount in lamports to compare against, as a string.
         * Must contain only digits.
         */
        solValue: z.ZodString;
        /** The comparison operator to use for evaluating transaction SOL values against the threshold. */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
    }, "strip", z.ZodTypeAny, {
        solValue: string;
        type: "solValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }, {
        solValue: string;
        type: "solValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }>, z.ZodObject<{
        /** The type of criterion, must be "splAddress" for SPL address-based rules. */
        type: z.ZodLiteral<"splAddress">;
        /**
         * Array of Solana addresses to compare against for SPL token transfer recipients.
         * Each address must be a valid Base58-encoded Solana address (32-44 characters).
         */
        addresses: z.ZodArray<z.ZodString, "many">;
        /**
         * The operator to use for evaluating SPL token transfer recipient addresses.
         * "in" checks if an address is in the provided list.
         * "not in" checks if an address is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "splAddress";
        operator: "in" | "not in";
        addresses: string[];
    }, {
        type: "splAddress";
        operator: "in" | "not in";
        addresses: string[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "splValue" for SPL token value-based rules. */
        type: z.ZodLiteral<"splValue">;
        /**
         * The SPL token value amount to compare against, as a string.
         * Must contain only digits.
         */
        splValue: z.ZodString;
        /** The comparison operator to use for evaluating SPL token values against the threshold. */
        operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
    }, "strip", z.ZodTypeAny, {
        splValue: string;
        type: "splValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }, {
        splValue: string;
        type: "splValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    }>, z.ZodObject<{
        /** The type of criterion, must be "mintAddress" for token mint address-based rules. */
        type: z.ZodLiteral<"mintAddress">;
        /**
         * Array of Solana addresses to compare against for token mint addresses.
         * Each address must be a valid Base58-encoded Solana address (32-44 characters).
         */
        addresses: z.ZodArray<z.ZodString, "many">;
        /**
         * The operator to use for evaluating token mint addresses.
         * "in" checks if an address is in the provided list.
         * "not in" checks if an address is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "mintAddress";
        operator: "in" | "not in";
        addresses: string[];
    }, {
        type: "mintAddress";
        operator: "in" | "not in";
        addresses: string[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "solData" for Solana data-based rules. */
        type: z.ZodLiteral<"solData">;
        /**
         * List of IDL specifications. Can contain known program names (strings) or custom IDL objects.
         */
        idls: z.ZodArray<z.ZodUnion<[z.ZodEnum<["SystemProgram", "TokenProgram", "AssociatedTokenProgram"]>, z.ZodObject<{
            /** The program address */
            address: z.ZodString;
            /** Array of instruction specifications */
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            /** The program address */
            address: z.ZodString;
            /** Array of instruction specifications */
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            /** The program address */
            address: z.ZodString;
            /** Array of instruction specifications */
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">>]>, "many">;
        /**
         * A list of conditions to apply against the transaction instruction.
         * Only one condition must evaluate to true for this criterion to be met.
         */
        conditions: z.ZodArray<z.ZodObject<{
            /** The instruction name */
            instruction: z.ZodString;
            /** Parameter conditions for the instruction */
            params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                /** The parameter name */
                name: z.ZodString;
                /** The operator to use for the comparison */
                operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
                /** The value to compare against */
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
                /** The parameter name */
                name: z.ZodString;
                /** The operator to use for the comparison */
                operator: z.ZodEnum<["in", "not in"]>;
                /** The values to compare against */
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
            instruction: string;
            params?: ({
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            } | {
                values: string[];
                name: string;
                operator: "in" | "not in";
            })[] | undefined;
        }, {
            instruction: string;
            params?: ({
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            } | {
                values: string[];
                name: string;
                operator: "in" | "not in";
            })[] | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "solData";
        conditions: {
            instruction: string;
            params?: ({
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            } | {
                values: string[];
                name: string;
                operator: "in" | "not in";
            })[] | undefined;
        }[];
        idls: ("SystemProgram" | "TokenProgram" | "AssociatedTokenProgram" | z.objectOutputType<{
            /** The program address */
            address: z.ZodString;
            /** Array of instruction specifications */
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">)[];
    }, {
        type: "solData";
        conditions: {
            instruction: string;
            params?: ({
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            } | {
                values: string[];
                name: string;
                operator: "in" | "not in";
            })[] | undefined;
        }[];
        idls: ("SystemProgram" | "TokenProgram" | "AssociatedTokenProgram" | z.objectInputType<{
            /** The program address */
            address: z.ZodString;
            /** Array of instruction specifications */
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">)[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "programId" for program ID-based rules. */
        type: z.ZodLiteral<"programId">;
        /**
         * Array of Solana program IDs to compare against.
         * Each program ID must be a valid Base58-encoded Solana address (32-44 characters).
         */
        programIds: z.ZodArray<z.ZodString, "many">;
        /**
         * The operator to use for evaluating transaction program IDs.
         * "in" checks if a program ID is in the provided list.
         * "not in" checks if a program ID is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "programId";
        operator: "in" | "not in";
        programIds: string[];
    }, {
        type: "programId";
        operator: "in" | "not in";
        programIds: string[];
    }>, z.ZodObject<{
        /** The type of criterion, must be "solNetwork" for network-based rules. */
        type: z.ZodLiteral<"solNetwork">;
        /**
         * Array of Solana networks to compare against.
         */
        networks: z.ZodArray<z.ZodEnum<["solana-devnet", "solana"]>, "many">;
        /**
         * The operator to use for evaluating transaction network.
         * "in" checks if the network is in the provided list.
         * "not in" checks if the network is not in the provided list.
         */
        operator: z.ZodEnum<["in", "not in"]>;
    }, "strip", z.ZodTypeAny, {
        type: "solNetwork";
        operator: "in" | "not in";
        networks: ("solana-devnet" | "solana")[];
    }, {
        type: "solNetwork";
        operator: "in" | "not in";
        networks: ("solana-devnet" | "solana")[];
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    action: "reject" | "accept";
    operation: "sendSolTransaction";
    criteria: ({
        type: "solAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        solValue: string;
        type: "solValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "splAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        splValue: string;
        type: "splValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "mintAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        type: "solData";
        conditions: {
            instruction: string;
            params?: ({
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            } | {
                values: string[];
                name: string;
                operator: "in" | "not in";
            })[] | undefined;
        }[];
        idls: ("SystemProgram" | "TokenProgram" | "AssociatedTokenProgram" | z.objectOutputType<{
            /** The program address */
            address: z.ZodString;
            /** Array of instruction specifications */
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">)[];
    } | {
        type: "programId";
        operator: "in" | "not in";
        programIds: string[];
    } | {
        type: "solNetwork";
        operator: "in" | "not in";
        networks: ("solana-devnet" | "solana")[];
    })[];
}, {
    action: "reject" | "accept";
    operation: "sendSolTransaction";
    criteria: ({
        type: "solAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        solValue: string;
        type: "solValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "splAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        splValue: string;
        type: "splValue";
        operator: ">" | ">=" | "<" | "<=" | "==";
    } | {
        type: "mintAddress";
        operator: "in" | "not in";
        addresses: string[];
    } | {
        type: "solData";
        conditions: {
            instruction: string;
            params?: ({
                value: string;
                name: string;
                operator: ">" | ">=" | "<" | "<=" | "==";
            } | {
                values: string[];
                name: string;
                operator: "in" | "not in";
            })[] | undefined;
        }[];
        idls: ("SystemProgram" | "TokenProgram" | "AssociatedTokenProgram" | z.objectInputType<{
            /** The program address */
            address: z.ZodString;
            /** Array of instruction specifications */
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">)[];
    } | {
        type: "programId";
        operator: "in" | "not in";
        programIds: string[];
    } | {
        type: "solNetwork";
        operator: "in" | "not in";
        networks: ("solana-devnet" | "solana")[];
    })[];
}>;
export type SendSolTransactionRule = z.infer<typeof SendSolTransactionRuleSchema>;
/**
 * Schema for criteria used in SignSolMessage operations
 */
export declare const SignSolMessageCriteriaSchema: z.ZodArray<z.ZodObject<{
    /** The type of criterion, must be "solMessage" for message-based rules. */
    type: z.ZodLiteral<"solMessage">;
    /**
     * A regular expression pattern to match against the message.
     */
    match: z.ZodString;
}, "strip", z.ZodTypeAny, {
    match: string;
    type: "solMessage";
}, {
    match: string;
    type: "solMessage";
}>, "many">;
/**
 * Type representing a set of criteria for the signSolMessage operation.
 * Can contain up to 10 individual criterion objects for Solana message matching.
 */
export type SignSolMessageCriteria = z.infer<typeof SignSolMessageCriteriaSchema>;
/**
 * Type representing a 'signSolMessage' policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
export declare const SignSolMessageRuleSchema: z.ZodObject<{
    /**
     * Determines whether matching the rule will cause a request to be rejected or accepted.
     * "accept" will allow the message signing, "reject" will block it.
     */
    action: z.ZodEnum<["reject", "accept"]>;
    /**
     * The operation to which this rule applies.
     * Must be "signSolMessage".
     */
    operation: z.ZodLiteral<"signSolMessage">;
    /**
     * The set of criteria that must be matched for this rule to apply.
     * Must be compatible with the specified operation type.
     */
    criteria: z.ZodArray<z.ZodObject<{
        /** The type of criterion, must be "solMessage" for message-based rules. */
        type: z.ZodLiteral<"solMessage">;
        /**
         * A regular expression pattern to match against the message.
         */
        match: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        match: string;
        type: "solMessage";
    }, {
        match: string;
        type: "solMessage";
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    action: "reject" | "accept";
    operation: "signSolMessage";
    criteria: {
        match: string;
        type: "solMessage";
    }[];
}, {
    action: "reject" | "accept";
    operation: "signSolMessage";
    criteria: {
        match: string;
        type: "solMessage";
    }[];
}>;
export type SignSolMessageRule = z.infer<typeof SignSolMessageRuleSchema>;
//# sourceMappingURL=solanaSchema.d.ts.map