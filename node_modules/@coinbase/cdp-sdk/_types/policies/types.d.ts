import { z } from "zod";
/**
 * A single Policy that can be used to govern the behavior of projects and accounts.
 */
export type Policy = {
    /** The unique identifier for the policy. */
    id: string;
    /** An optional human-readable description of the policy. */
    description?: string;
    /** The scope of the policy. Only one project-level policy can exist at any time. */
    scope: PolicyScope;
    /** A list of rules that comprise the policy. */
    rules: Rule[];
    /** The ISO 8601 timestamp at which the Policy was created. */
    createdAt: string;
    /** The ISO 8601 timestamp at which the Policy was last updated. */
    updatedAt: string;
};
/**
 * Enum for policy scopes
 */
export declare const PolicyScopeEnum: z.ZodEnum<["project", "account"]>;
/**
 * Type representing the scope of a policy.
 * Determines whether the policy applies at the project level or account level.
 */
export type PolicyScope = z.infer<typeof PolicyScopeEnum>;
/**
 * Schema for policy rules
 */
export declare const RuleSchema: z.ZodDiscriminatedUnion<"operation", [z.ZodObject<{
    action: z.ZodEnum<["reject", "accept"]>;
    operation: z.ZodLiteral<"signEvmTransaction">;
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"ethValue">;
        ethValue: z.ZodString;
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
        type: z.ZodLiteral<"evmAddress">;
        addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
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
        type: z.ZodLiteral<"evmData">;
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
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
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
            stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
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
        conditions: z.ZodArray<z.ZodObject<{
            function: z.ZodString;
            params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                operator: z.ZodEnum<["in", "not in"]>;
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
        type: z.ZodLiteral<"netUSDChange">;
        changeCents: z.ZodNumber;
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
}>, z.ZodObject<{
    action: z.ZodEnum<["reject", "accept"]>;
    operation: z.ZodLiteral<"signEvmHash">;
}, "strip", z.ZodTypeAny, {
    action: "reject" | "accept";
    operation: "signEvmHash";
}, {
    action: "reject" | "accept";
    operation: "signEvmHash";
}>, z.ZodObject<{
    action: z.ZodEnum<["reject", "accept"]>;
    operation: z.ZodLiteral<"signEvmMessage">;
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"evmMessage">;
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
}>, z.ZodObject<{
    action: z.ZodEnum<["reject", "accept"]>;
    operation: z.ZodLiteral<"signEvmTypedData">;
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"evmTypedDataField">;
        types: z.ZodObject<{
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
        conditions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
            addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
            operator: z.ZodEnum<["in", "not in"]>;
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
            value: z.ZodString;
            operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
            match: z.ZodString;
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
        type: z.ZodLiteral<"evmTypedDataVerifyingContract">;
        addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
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
}>, z.ZodObject<{
    action: z.ZodEnum<["reject", "accept"]>;
    operation: z.ZodLiteral<"sendEvmTransaction">;
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"ethValue">;
        ethValue: z.ZodString;
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
        type: z.ZodLiteral<"evmAddress">;
        addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
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
        type: z.ZodLiteral<"evmNetwork">;
        networks: z.ZodArray<z.ZodEnum<["base", "base-sepolia", "ethereum", "ethereum-sepolia", "avalanche", "polygon", "optimism", "arbitrum"]>, "many">;
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
        type: z.ZodLiteral<"evmData">;
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
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
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
            stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
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
        conditions: z.ZodArray<z.ZodObject<{
            function: z.ZodString;
            params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                operator: z.ZodEnum<["in", "not in"]>;
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
        type: z.ZodLiteral<"netUSDChange">;
        changeCents: z.ZodNumber;
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
}>, z.ZodObject<{
    action: z.ZodEnum<["reject", "accept"]>;
    operation: z.ZodLiteral<"signSolTransaction">;
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"solAddress">;
        addresses: z.ZodArray<z.ZodString, "many">;
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
        type: z.ZodLiteral<"solValue">;
        solValue: z.ZodString;
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
        type: z.ZodLiteral<"splAddress">;
        addresses: z.ZodArray<z.ZodString, "many">;
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
        type: z.ZodLiteral<"splValue">;
        splValue: z.ZodString;
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
        type: z.ZodLiteral<"mintAddress">;
        addresses: z.ZodArray<z.ZodString, "many">;
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
        type: z.ZodLiteral<"solData">;
        idls: z.ZodArray<z.ZodUnion<[z.ZodEnum<["SystemProgram", "TokenProgram", "AssociatedTokenProgram"]>, z.ZodObject<{
            address: z.ZodString;
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            address: z.ZodString;
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            address: z.ZodString;
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">>]>, "many">;
        conditions: z.ZodArray<z.ZodObject<{
            instruction: z.ZodString;
            params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                name: z.ZodString;
                operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                name: z.ZodString;
                operator: z.ZodEnum<["in", "not in"]>;
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
            address: z.ZodString;
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
            address: z.ZodString;
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">)[];
    }>, z.ZodObject<{
        type: z.ZodLiteral<"programId">;
        programIds: z.ZodArray<z.ZodString, "many">;
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
            address: z.ZodString;
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
            address: z.ZodString;
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">)[];
    } | {
        type: "programId";
        operator: "in" | "not in";
        programIds: string[];
    })[];
}>, z.ZodObject<{
    action: z.ZodEnum<["reject", "accept"]>;
    operation: z.ZodLiteral<"sendSolTransaction">;
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"solAddress">;
        addresses: z.ZodArray<z.ZodString, "many">;
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
        type: z.ZodLiteral<"solValue">;
        solValue: z.ZodString;
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
        type: z.ZodLiteral<"splAddress">;
        addresses: z.ZodArray<z.ZodString, "many">;
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
        type: z.ZodLiteral<"splValue">;
        splValue: z.ZodString;
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
        type: z.ZodLiteral<"mintAddress">;
        addresses: z.ZodArray<z.ZodString, "many">;
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
        type: z.ZodLiteral<"solData">;
        idls: z.ZodArray<z.ZodUnion<[z.ZodEnum<["SystemProgram", "TokenProgram", "AssociatedTokenProgram"]>, z.ZodObject<{
            address: z.ZodString;
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            address: z.ZodString;
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            address: z.ZodString;
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">>]>, "many">;
        conditions: z.ZodArray<z.ZodObject<{
            instruction: z.ZodString;
            params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                name: z.ZodString;
                operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                name: z.ZodString;
                operator: z.ZodEnum<["in", "not in"]>;
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
            address: z.ZodString;
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
            address: z.ZodString;
            instructions: z.ZodArray<z.ZodAny, "many">;
        }, z.ZodTypeAny, "passthrough">)[];
    }>, z.ZodObject<{
        type: z.ZodLiteral<"programId">;
        programIds: z.ZodArray<z.ZodString, "many">;
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
        type: z.ZodLiteral<"solNetwork">;
        networks: z.ZodArray<z.ZodEnum<["solana-devnet", "solana"]>, "many">;
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
            address: z.ZodString;
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
            address: z.ZodString;
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
}>, z.ZodObject<{
    action: z.ZodEnum<["reject", "accept"]>;
    operation: z.ZodLiteral<"signSolMessage">;
    criteria: z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"solMessage">;
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
}>, z.ZodObject<{
    action: z.ZodEnum<["reject", "accept"]>;
    operation: z.ZodLiteral<"prepareUserOperation">;
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"ethValue">;
        ethValue: z.ZodString;
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
        type: z.ZodLiteral<"evmAddress">;
        addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
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
        type: z.ZodLiteral<"evmNetwork">;
        networks: z.ZodArray<z.ZodEnum<["base-sepolia", "base", "arbitrum", "optimism", "zora", "polygon", "bnb", "avalanche", "ethereum", "ethereum-sepolia"]>, "many">;
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
        type: z.ZodLiteral<"evmData">;
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
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
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
            stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
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
        conditions: z.ZodArray<z.ZodObject<{
            function: z.ZodString;
            params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                operator: z.ZodEnum<["in", "not in"]>;
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
        type: z.ZodLiteral<"netUSDChange">;
        changeCents: z.ZodNumber;
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
}>, z.ZodObject<{
    action: z.ZodEnum<["reject", "accept"]>;
    operation: z.ZodLiteral<"sendUserOperation">;
    criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"ethValue">;
        ethValue: z.ZodString;
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
        type: z.ZodLiteral<"evmAddress">;
        addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
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
        type: z.ZodLiteral<"evmData">;
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
            inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
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
            stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
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
        conditions: z.ZodArray<z.ZodObject<{
            function: z.ZodString;
            params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                operator: z.ZodEnum<["in", "not in"]>;
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
        type: z.ZodLiteral<"netUSDChange">;
        changeCents: z.ZodNumber;
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
}>]>;
/**
 * Type representing a policy rule that can accept or reject specific operations
 * based on a set of criteria.
 */
export type Rule = z.infer<typeof RuleSchema>;
/**
 * Schema for creating or updating a Policy.
 */
export declare const CreatePolicyBodySchema: z.ZodObject<{
    /**
     * The scope of the policy.
     * "project" applies to the entire project, "account" applies to specific accounts.
     */
    scope: z.ZodEnum<["project", "account"]>;
    /**
     * An optional human-readable description for the policy.
     * Limited to 50 characters of alphanumeric characters, spaces, commas, and periods.
     */
    description: z.ZodOptional<z.ZodString>;
    /**
     * Array of rules that comprise the policy.
     * Limited to a maximum of 10 rules per policy.
     */
    rules: z.ZodArray<z.ZodDiscriminatedUnion<"operation", [z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"signEvmTransaction">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"ethValue">;
            ethValue: z.ZodString;
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
            type: z.ZodLiteral<"evmAddress">;
            addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
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
            type: z.ZodLiteral<"evmData">;
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
                inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
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
                stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
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
            conditions: z.ZodArray<z.ZodObject<{
                function: z.ZodString;
                params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<["in", "not in"]>;
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
            type: z.ZodLiteral<"netUSDChange">;
            changeCents: z.ZodNumber;
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
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"signEvmHash">;
    }, "strip", z.ZodTypeAny, {
        action: "reject" | "accept";
        operation: "signEvmHash";
    }, {
        action: "reject" | "accept";
        operation: "signEvmHash";
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"signEvmMessage">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"evmMessage">;
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
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"signEvmTypedData">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"evmTypedDataField">;
            types: z.ZodObject<{
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
            conditions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
                operator: z.ZodEnum<["in", "not in"]>;
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
                value: z.ZodString;
                operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                match: z.ZodString;
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
            type: z.ZodLiteral<"evmTypedDataVerifyingContract">;
            addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
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
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"sendEvmTransaction">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"ethValue">;
            ethValue: z.ZodString;
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
            type: z.ZodLiteral<"evmAddress">;
            addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
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
            type: z.ZodLiteral<"evmNetwork">;
            networks: z.ZodArray<z.ZodEnum<["base", "base-sepolia", "ethereum", "ethereum-sepolia", "avalanche", "polygon", "optimism", "arbitrum"]>, "many">;
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
            type: z.ZodLiteral<"evmData">;
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
                inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
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
                stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
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
            conditions: z.ZodArray<z.ZodObject<{
                function: z.ZodString;
                params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<["in", "not in"]>;
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
            type: z.ZodLiteral<"netUSDChange">;
            changeCents: z.ZodNumber;
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
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"signSolTransaction">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"solAddress">;
            addresses: z.ZodArray<z.ZodString, "many">;
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
            type: z.ZodLiteral<"solValue">;
            solValue: z.ZodString;
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
            type: z.ZodLiteral<"splAddress">;
            addresses: z.ZodArray<z.ZodString, "many">;
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
            type: z.ZodLiteral<"splValue">;
            splValue: z.ZodString;
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
            type: z.ZodLiteral<"mintAddress">;
            addresses: z.ZodArray<z.ZodString, "many">;
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
            type: z.ZodLiteral<"solData">;
            idls: z.ZodArray<z.ZodUnion<[z.ZodEnum<["SystemProgram", "TokenProgram", "AssociatedTokenProgram"]>, z.ZodObject<{
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">>]>, "many">;
            conditions: z.ZodArray<z.ZodObject<{
                instruction: z.ZodString;
                params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    name: z.ZodString;
                    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                    name: z.ZodString;
                    operator: z.ZodEnum<["in", "not in"]>;
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
                address: z.ZodString;
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
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">)[];
        }>, z.ZodObject<{
            type: z.ZodLiteral<"programId">;
            programIds: z.ZodArray<z.ZodString, "many">;
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
                address: z.ZodString;
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
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">)[];
        } | {
            type: "programId";
            operator: "in" | "not in";
            programIds: string[];
        })[];
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"sendSolTransaction">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"solAddress">;
            addresses: z.ZodArray<z.ZodString, "many">;
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
            type: z.ZodLiteral<"solValue">;
            solValue: z.ZodString;
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
            type: z.ZodLiteral<"splAddress">;
            addresses: z.ZodArray<z.ZodString, "many">;
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
            type: z.ZodLiteral<"splValue">;
            splValue: z.ZodString;
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
            type: z.ZodLiteral<"mintAddress">;
            addresses: z.ZodArray<z.ZodString, "many">;
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
            type: z.ZodLiteral<"solData">;
            idls: z.ZodArray<z.ZodUnion<[z.ZodEnum<["SystemProgram", "TokenProgram", "AssociatedTokenProgram"]>, z.ZodObject<{
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">>]>, "many">;
            conditions: z.ZodArray<z.ZodObject<{
                instruction: z.ZodString;
                params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    name: z.ZodString;
                    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                    name: z.ZodString;
                    operator: z.ZodEnum<["in", "not in"]>;
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
                address: z.ZodString;
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
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">)[];
        }>, z.ZodObject<{
            type: z.ZodLiteral<"programId">;
            programIds: z.ZodArray<z.ZodString, "many">;
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
            type: z.ZodLiteral<"solNetwork">;
            networks: z.ZodArray<z.ZodEnum<["solana-devnet", "solana"]>, "many">;
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
                address: z.ZodString;
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
                address: z.ZodString;
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
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"signSolMessage">;
        criteria: z.ZodArray<z.ZodObject<{
            type: z.ZodLiteral<"solMessage">;
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
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"prepareUserOperation">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"ethValue">;
            ethValue: z.ZodString;
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
            type: z.ZodLiteral<"evmAddress">;
            addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
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
            type: z.ZodLiteral<"evmNetwork">;
            networks: z.ZodArray<z.ZodEnum<["base-sepolia", "base", "arbitrum", "optimism", "zora", "polygon", "bnb", "avalanche", "ethereum", "ethereum-sepolia"]>, "many">;
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
            type: z.ZodLiteral<"evmData">;
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
                inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
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
                stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
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
            conditions: z.ZodArray<z.ZodObject<{
                function: z.ZodString;
                params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<["in", "not in"]>;
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
            type: z.ZodLiteral<"netUSDChange">;
            changeCents: z.ZodNumber;
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
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"sendUserOperation">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"ethValue">;
            ethValue: z.ZodString;
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
            type: z.ZodLiteral<"evmAddress">;
            addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
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
            type: z.ZodLiteral<"evmData">;
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
                inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
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
                stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
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
            conditions: z.ZodArray<z.ZodObject<{
                function: z.ZodString;
                params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<["in", "not in"]>;
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
            type: z.ZodLiteral<"netUSDChange">;
            changeCents: z.ZodNumber;
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
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    scope: "project" | "account";
    rules: ({
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
    } | {
        action: "reject" | "accept";
        operation: "signEvmHash";
    } | {
        action: "reject" | "accept";
        operation: "signEvmMessage";
        criteria: {
            match: string;
            type: "evmMessage";
        }[];
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">)[];
        } | {
            type: "programId";
            operator: "in" | "not in";
            programIds: string[];
        })[];
    } | {
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
                address: z.ZodString;
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
    } | {
        action: "reject" | "accept";
        operation: "signSolMessage";
        criteria: {
            match: string;
            type: "solMessage";
        }[];
    })[];
    description?: string | undefined;
}, {
    scope: "project" | "account";
    rules: ({
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
    } | {
        action: "reject" | "accept";
        operation: "signEvmHash";
    } | {
        action: "reject" | "accept";
        operation: "signEvmMessage";
        criteria: {
            match: string;
            type: "evmMessage";
        }[];
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">)[];
        } | {
            type: "programId";
            operator: "in" | "not in";
            programIds: string[];
        })[];
    } | {
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
                address: z.ZodString;
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
    } | {
        action: "reject" | "accept";
        operation: "signSolMessage";
        criteria: {
            match: string;
            type: "solMessage";
        }[];
    })[];
    description?: string | undefined;
}>;
/**
 * Type representing the request body for creating a new policy.
 * Contains the scope, optional description, and rules for the policy.
 */
export type CreatePolicyBody = z.infer<typeof CreatePolicyBodySchema>;
export declare const UpdatePolicyBodySchema: z.ZodObject<{
    /**
     * An optional human-readable description for the policy.
     * Limited to 50 characters of alphanumeric characters, spaces, commas, and periods.
     */
    description: z.ZodOptional<z.ZodString>;
    /**
     * Array of rules that comprise the policy.
     * Limited to a maximum of 10 rules per policy.
     */
    rules: z.ZodArray<z.ZodDiscriminatedUnion<"operation", [z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"signEvmTransaction">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"ethValue">;
            ethValue: z.ZodString;
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
            type: z.ZodLiteral<"evmAddress">;
            addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
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
            type: z.ZodLiteral<"evmData">;
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
                inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
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
                stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
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
            conditions: z.ZodArray<z.ZodObject<{
                function: z.ZodString;
                params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<["in", "not in"]>;
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
            type: z.ZodLiteral<"netUSDChange">;
            changeCents: z.ZodNumber;
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
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"signEvmHash">;
    }, "strip", z.ZodTypeAny, {
        action: "reject" | "accept";
        operation: "signEvmHash";
    }, {
        action: "reject" | "accept";
        operation: "signEvmHash";
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"signEvmMessage">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"evmMessage">;
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
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"signEvmTypedData">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"evmTypedDataField">;
            types: z.ZodObject<{
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
            conditions: z.ZodArray<z.ZodUnion<[z.ZodObject<{
                addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
                operator: z.ZodEnum<["in", "not in"]>;
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
                value: z.ZodString;
                operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                match: z.ZodString;
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
            type: z.ZodLiteral<"evmTypedDataVerifyingContract">;
            addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
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
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"sendEvmTransaction">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"ethValue">;
            ethValue: z.ZodString;
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
            type: z.ZodLiteral<"evmAddress">;
            addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
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
            type: z.ZodLiteral<"evmNetwork">;
            networks: z.ZodArray<z.ZodEnum<["base", "base-sepolia", "ethereum", "ethereum-sepolia", "avalanche", "polygon", "optimism", "arbitrum"]>, "many">;
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
            type: z.ZodLiteral<"evmData">;
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
                inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
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
                stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
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
            conditions: z.ZodArray<z.ZodObject<{
                function: z.ZodString;
                params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<["in", "not in"]>;
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
            type: z.ZodLiteral<"netUSDChange">;
            changeCents: z.ZodNumber;
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
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"signSolTransaction">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"solAddress">;
            addresses: z.ZodArray<z.ZodString, "many">;
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
            type: z.ZodLiteral<"solValue">;
            solValue: z.ZodString;
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
            type: z.ZodLiteral<"splAddress">;
            addresses: z.ZodArray<z.ZodString, "many">;
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
            type: z.ZodLiteral<"splValue">;
            splValue: z.ZodString;
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
            type: z.ZodLiteral<"mintAddress">;
            addresses: z.ZodArray<z.ZodString, "many">;
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
            type: z.ZodLiteral<"solData">;
            idls: z.ZodArray<z.ZodUnion<[z.ZodEnum<["SystemProgram", "TokenProgram", "AssociatedTokenProgram"]>, z.ZodObject<{
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">>]>, "many">;
            conditions: z.ZodArray<z.ZodObject<{
                instruction: z.ZodString;
                params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    name: z.ZodString;
                    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                    name: z.ZodString;
                    operator: z.ZodEnum<["in", "not in"]>;
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
                address: z.ZodString;
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
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">)[];
        }>, z.ZodObject<{
            type: z.ZodLiteral<"programId">;
            programIds: z.ZodArray<z.ZodString, "many">;
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
                address: z.ZodString;
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
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">)[];
        } | {
            type: "programId";
            operator: "in" | "not in";
            programIds: string[];
        })[];
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"sendSolTransaction">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"solAddress">;
            addresses: z.ZodArray<z.ZodString, "many">;
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
            type: z.ZodLiteral<"solValue">;
            solValue: z.ZodString;
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
            type: z.ZodLiteral<"splAddress">;
            addresses: z.ZodArray<z.ZodString, "many">;
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
            type: z.ZodLiteral<"splValue">;
            splValue: z.ZodString;
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
            type: z.ZodLiteral<"mintAddress">;
            addresses: z.ZodArray<z.ZodString, "many">;
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
            type: z.ZodLiteral<"solData">;
            idls: z.ZodArray<z.ZodUnion<[z.ZodEnum<["SystemProgram", "TokenProgram", "AssociatedTokenProgram"]>, z.ZodObject<{
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">>]>, "many">;
            conditions: z.ZodArray<z.ZodObject<{
                instruction: z.ZodString;
                params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    name: z.ZodString;
                    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                    name: z.ZodString;
                    operator: z.ZodEnum<["in", "not in"]>;
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
                address: z.ZodString;
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
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">)[];
        }>, z.ZodObject<{
            type: z.ZodLiteral<"programId">;
            programIds: z.ZodArray<z.ZodString, "many">;
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
            type: z.ZodLiteral<"solNetwork">;
            networks: z.ZodArray<z.ZodEnum<["solana-devnet", "solana"]>, "many">;
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
                address: z.ZodString;
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
                address: z.ZodString;
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
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"signSolMessage">;
        criteria: z.ZodArray<z.ZodObject<{
            type: z.ZodLiteral<"solMessage">;
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
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"prepareUserOperation">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"ethValue">;
            ethValue: z.ZodString;
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
            type: z.ZodLiteral<"evmAddress">;
            addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
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
            type: z.ZodLiteral<"evmNetwork">;
            networks: z.ZodArray<z.ZodEnum<["base-sepolia", "base", "arbitrum", "optimism", "zora", "polygon", "bnb", "avalanche", "ethereum", "ethereum-sepolia"]>, "many">;
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
            type: z.ZodLiteral<"evmData">;
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
                inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
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
                stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
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
            conditions: z.ZodArray<z.ZodObject<{
                function: z.ZodString;
                params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<["in", "not in"]>;
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
            type: z.ZodLiteral<"netUSDChange">;
            changeCents: z.ZodNumber;
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
    }>, z.ZodObject<{
        action: z.ZodEnum<["reject", "accept"]>;
        operation: z.ZodLiteral<"sendUserOperation">;
        criteria: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"ethValue">;
            ethValue: z.ZodString;
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
            type: z.ZodLiteral<"evmAddress">;
            addresses: z.ZodArray<z.ZodEffects<z.ZodString, `0x${string}`, string>, "many">;
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
            type: z.ZodLiteral<"evmData">;
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
                inputs: z.ZodReadonly<z.ZodArray<z.ZodType<import("abitype").AbiParameter, z.ZodTypeDef, import("abitype").AbiParameter>, "many">>;
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
                stateMutability: z.ZodUnion<[z.ZodLiteral<"payable">, z.ZodLiteral<"nonpayable">]>;
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
            conditions: z.ZodArray<z.ZodObject<{
                function: z.ZodString;
                params: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodObject<{
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<[">", ">=", "<", "<=", "=="]>;
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
                    name: z.ZodUnion<[z.ZodString, z.ZodString]>;
                    operator: z.ZodEnum<["in", "not in"]>;
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
            type: z.ZodLiteral<"netUSDChange">;
            changeCents: z.ZodNumber;
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
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    rules: ({
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
    } | {
        action: "reject" | "accept";
        operation: "signEvmHash";
    } | {
        action: "reject" | "accept";
        operation: "signEvmMessage";
        criteria: {
            match: string;
            type: "evmMessage";
        }[];
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">)[];
        } | {
            type: "programId";
            operator: "in" | "not in";
            programIds: string[];
        })[];
    } | {
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
                address: z.ZodString;
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
    } | {
        action: "reject" | "accept";
        operation: "signSolMessage";
        criteria: {
            match: string;
            type: "solMessage";
        }[];
    })[];
    description?: string | undefined;
}, {
    rules: ({
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
    } | {
        action: "reject" | "accept";
        operation: "signEvmHash";
    } | {
        action: "reject" | "accept";
        operation: "signEvmMessage";
        criteria: {
            match: string;
            type: "evmMessage";
        }[];
    } | {
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
    } | {
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
    } | {
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
    } | {
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
    } | {
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
                address: z.ZodString;
                instructions: z.ZodArray<z.ZodAny, "many">;
            }, z.ZodTypeAny, "passthrough">)[];
        } | {
            type: "programId";
            operator: "in" | "not in";
            programIds: string[];
        })[];
    } | {
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
                address: z.ZodString;
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
    } | {
        action: "reject" | "accept";
        operation: "signSolMessage";
        criteria: {
            match: string;
            type: "solMessage";
        }[];
    })[];
    description?: string | undefined;
}>;
/**
 * Type representing the request body for updating an existing policy.
 * Contains the optional description and rules for the updated policy.
 * Note that the scope cannot be changed once a policy is created.
 */
export type UpdatePolicyBody = z.infer<typeof UpdatePolicyBodySchema>;
//# sourceMappingURL=types.d.ts.map