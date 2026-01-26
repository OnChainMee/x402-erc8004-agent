import { z } from 'zod';

declare const schemes: readonly ["exact"];
declare const x402Versions: readonly [1];
declare const ErrorReasons: readonly ["insufficient_funds", "invalid_exact_evm_payload_authorization_valid_after", "invalid_exact_evm_payload_authorization_valid_before", "invalid_exact_evm_payload_authorization_value", "invalid_exact_evm_payload_signature", "invalid_exact_evm_payload_undeployed_smart_wallet", "invalid_exact_evm_payload_recipient_mismatch", "invalid_exact_svm_payload_transaction", "invalid_exact_svm_payload_transaction_amount_mismatch", "invalid_exact_svm_payload_transaction_create_ata_instruction", "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee", "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset", "invalid_exact_svm_payload_transaction_instructions", "invalid_exact_svm_payload_transaction_instructions_length", "invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction", "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction", "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high", "invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked", "invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked", "invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts", "invalid_exact_svm_payload_transaction_fee_payer_transferring_funds", "invalid_exact_svm_payload_transaction_not_a_transfer_instruction", "invalid_exact_svm_payload_transaction_receiver_ata_not_found", "invalid_exact_svm_payload_transaction_sender_ata_not_found", "invalid_exact_svm_payload_transaction_simulation_failed", "invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata", "invalid_network", "invalid_payload", "invalid_payment_requirements", "invalid_scheme", "invalid_payment", "payment_expired", "unsupported_scheme", "invalid_x402_version", "invalid_transaction_state", "invalid_x402_version", "settle_exact_svm_block_height_exceeded", "settle_exact_svm_transaction_confirmation_timed_out", "unsupported_scheme", "unexpected_settle_error", "unexpected_verify_error"];
declare const PaymentRequirementsSchema: z.ZodObject<{
    scheme: z.ZodEnum<["exact"]>;
    network: z.ZodEnum<["abstract", "abstract-testnet", "base-sepolia", "base", "avalanche-fuji", "avalanche", "iotex", "solana-devnet", "solana", "sei", "sei-testnet", "polygon", "polygon-amoy", "peaq", "story", "educhain", "skale-base-sepolia"]>;
    maxAmountRequired: z.ZodEffects<z.ZodString, string, string>;
    resource: z.ZodString;
    description: z.ZodString;
    mimeType: z.ZodString;
    outputSchema: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    payTo: z.ZodUnion<[z.ZodString, z.ZodString]>;
    maxTimeoutSeconds: z.ZodNumber;
    asset: z.ZodUnion<[z.ZodString, z.ZodString]>;
    extra: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    scheme: "exact";
    description: string;
    asset: string;
    maxAmountRequired: string;
    network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
    resource: string;
    mimeType: string;
    payTo: string;
    maxTimeoutSeconds: number;
    outputSchema?: Record<string, any> | undefined;
    extra?: Record<string, any> | undefined;
}, {
    scheme: "exact";
    description: string;
    asset: string;
    maxAmountRequired: string;
    network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
    resource: string;
    mimeType: string;
    payTo: string;
    maxTimeoutSeconds: number;
    outputSchema?: Record<string, any> | undefined;
    extra?: Record<string, any> | undefined;
}>;
type PaymentRequirements = z.infer<typeof PaymentRequirementsSchema>;
declare const ExactEvmPayloadAuthorizationSchema: z.ZodObject<{
    from: z.ZodString;
    to: z.ZodString;
    value: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    validAfter: z.ZodEffects<z.ZodString, string, string>;
    validBefore: z.ZodEffects<z.ZodString, string, string>;
    nonce: z.ZodString;
}, "strip", z.ZodTypeAny, {
    from: string;
    to: string;
    value: string;
    validAfter: string;
    validBefore: string;
    nonce: string;
}, {
    from: string;
    to: string;
    value: string;
    validAfter: string;
    validBefore: string;
    nonce: string;
}>;
type ExactEvmPayloadAuthorization = z.infer<typeof ExactEvmPayloadAuthorizationSchema>;
declare const ExactEvmPayloadSchema: z.ZodObject<{
    signature: z.ZodString;
    authorization: z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
        value: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        validAfter: z.ZodEffects<z.ZodString, string, string>;
        validBefore: z.ZodEffects<z.ZodString, string, string>;
        nonce: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        from: string;
        to: string;
        value: string;
        validAfter: string;
        validBefore: string;
        nonce: string;
    }, {
        from: string;
        to: string;
        value: string;
        validAfter: string;
        validBefore: string;
        nonce: string;
    }>;
}, "strip", z.ZodTypeAny, {
    signature: string;
    authorization: {
        from: string;
        to: string;
        value: string;
        validAfter: string;
        validBefore: string;
        nonce: string;
    };
}, {
    signature: string;
    authorization: {
        from: string;
        to: string;
        value: string;
        validAfter: string;
        validBefore: string;
        nonce: string;
    };
}>;
type ExactEvmPayload = z.infer<typeof ExactEvmPayloadSchema>;
declare const ExactSvmPayloadSchema: z.ZodObject<{
    transaction: z.ZodString;
}, "strip", z.ZodTypeAny, {
    transaction: string;
}, {
    transaction: string;
}>;
type ExactSvmPayload = z.infer<typeof ExactSvmPayloadSchema>;
declare const PaymentPayloadSchema: z.ZodObject<{
    x402Version: z.ZodEffects<z.ZodNumber, number, number>;
    scheme: z.ZodEnum<["exact"]>;
    network: z.ZodEnum<["abstract", "abstract-testnet", "base-sepolia", "base", "avalanche-fuji", "avalanche", "iotex", "solana-devnet", "solana", "sei", "sei-testnet", "polygon", "polygon-amoy", "peaq", "story", "educhain", "skale-base-sepolia"]>;
    payload: z.ZodUnion<[z.ZodObject<{
        signature: z.ZodString;
        authorization: z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            value: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
            validAfter: z.ZodEffects<z.ZodString, string, string>;
            validBefore: z.ZodEffects<z.ZodString, string, string>;
            nonce: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            to: string;
            value: string;
            validAfter: string;
            validBefore: string;
            nonce: string;
        }, {
            from: string;
            to: string;
            value: string;
            validAfter: string;
            validBefore: string;
            nonce: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        signature: string;
        authorization: {
            from: string;
            to: string;
            value: string;
            validAfter: string;
            validBefore: string;
            nonce: string;
        };
    }, {
        signature: string;
        authorization: {
            from: string;
            to: string;
            value: string;
            validAfter: string;
            validBefore: string;
            nonce: string;
        };
    }>, z.ZodObject<{
        transaction: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        transaction: string;
    }, {
        transaction: string;
    }>]>;
}, "strip", z.ZodTypeAny, {
    scheme: "exact";
    network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
    x402Version: number;
    payload: {
        signature: string;
        authorization: {
            from: string;
            to: string;
            value: string;
            validAfter: string;
            validBefore: string;
            nonce: string;
        };
    } | {
        transaction: string;
    };
}, {
    scheme: "exact";
    network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
    x402Version: number;
    payload: {
        signature: string;
        authorization: {
            from: string;
            to: string;
            value: string;
            validAfter: string;
            validBefore: string;
            nonce: string;
        };
    } | {
        transaction: string;
    };
}>;
type PaymentPayload = z.infer<typeof PaymentPayloadSchema>;
type UnsignedPaymentPayload = Omit<PaymentPayload, "payload"> & {
    payload: Omit<ExactEvmPayload, "signature"> & {
        signature: undefined;
    };
};
declare const x402ResponseSchema: z.ZodObject<{
    x402Version: z.ZodEffects<z.ZodNumber, number, number>;
    error: z.ZodOptional<z.ZodEnum<["insufficient_funds", "invalid_exact_evm_payload_authorization_valid_after", "invalid_exact_evm_payload_authorization_valid_before", "invalid_exact_evm_payload_authorization_value", "invalid_exact_evm_payload_signature", "invalid_exact_evm_payload_undeployed_smart_wallet", "invalid_exact_evm_payload_recipient_mismatch", "invalid_exact_svm_payload_transaction", "invalid_exact_svm_payload_transaction_amount_mismatch", "invalid_exact_svm_payload_transaction_create_ata_instruction", "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee", "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset", "invalid_exact_svm_payload_transaction_instructions", "invalid_exact_svm_payload_transaction_instructions_length", "invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction", "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction", "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high", "invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked", "invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked", "invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts", "invalid_exact_svm_payload_transaction_fee_payer_transferring_funds", "invalid_exact_svm_payload_transaction_not_a_transfer_instruction", "invalid_exact_svm_payload_transaction_receiver_ata_not_found", "invalid_exact_svm_payload_transaction_sender_ata_not_found", "invalid_exact_svm_payload_transaction_simulation_failed", "invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata", "invalid_network", "invalid_payload", "invalid_payment_requirements", "invalid_scheme", "invalid_payment", "payment_expired", "unsupported_scheme", "invalid_x402_version", "invalid_transaction_state", "invalid_x402_version", "settle_exact_svm_block_height_exceeded", "settle_exact_svm_transaction_confirmation_timed_out", "unsupported_scheme", "unexpected_settle_error", "unexpected_verify_error"]>>;
    accepts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        scheme: z.ZodEnum<["exact"]>;
        network: z.ZodEnum<["abstract", "abstract-testnet", "base-sepolia", "base", "avalanche-fuji", "avalanche", "iotex", "solana-devnet", "solana", "sei", "sei-testnet", "polygon", "polygon-amoy", "peaq", "story", "educhain", "skale-base-sepolia"]>;
        maxAmountRequired: z.ZodEffects<z.ZodString, string, string>;
        resource: z.ZodString;
        description: z.ZodString;
        mimeType: z.ZodString;
        outputSchema: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        payTo: z.ZodUnion<[z.ZodString, z.ZodString]>;
        maxTimeoutSeconds: z.ZodNumber;
        asset: z.ZodUnion<[z.ZodString, z.ZodString]>;
        extra: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    }, {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    }>, "many">>;
    payer: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    x402Version: number;
    error?: "invalid_exact_svm_payload_transaction" | "insufficient_funds" | "invalid_exact_evm_payload_authorization_valid_after" | "invalid_exact_evm_payload_authorization_valid_before" | "invalid_exact_evm_payload_authorization_value" | "invalid_exact_evm_payload_signature" | "invalid_exact_evm_payload_undeployed_smart_wallet" | "invalid_exact_evm_payload_recipient_mismatch" | "invalid_exact_svm_payload_transaction_amount_mismatch" | "invalid_exact_svm_payload_transaction_create_ata_instruction" | "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee" | "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset" | "invalid_exact_svm_payload_transaction_instructions" | "invalid_exact_svm_payload_transaction_instructions_length" | "invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction" | "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction" | "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high" | "invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked" | "invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked" | "invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts" | "invalid_exact_svm_payload_transaction_fee_payer_transferring_funds" | "invalid_exact_svm_payload_transaction_not_a_transfer_instruction" | "invalid_exact_svm_payload_transaction_receiver_ata_not_found" | "invalid_exact_svm_payload_transaction_sender_ata_not_found" | "invalid_exact_svm_payload_transaction_simulation_failed" | "invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata" | "invalid_network" | "invalid_payload" | "invalid_payment_requirements" | "invalid_scheme" | "invalid_payment" | "payment_expired" | "unsupported_scheme" | "invalid_x402_version" | "invalid_transaction_state" | "settle_exact_svm_block_height_exceeded" | "settle_exact_svm_transaction_confirmation_timed_out" | "unexpected_settle_error" | "unexpected_verify_error" | undefined;
    payer?: string | undefined;
    accepts?: {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    }[] | undefined;
}, {
    x402Version: number;
    error?: "invalid_exact_svm_payload_transaction" | "insufficient_funds" | "invalid_exact_evm_payload_authorization_valid_after" | "invalid_exact_evm_payload_authorization_valid_before" | "invalid_exact_evm_payload_authorization_value" | "invalid_exact_evm_payload_signature" | "invalid_exact_evm_payload_undeployed_smart_wallet" | "invalid_exact_evm_payload_recipient_mismatch" | "invalid_exact_svm_payload_transaction_amount_mismatch" | "invalid_exact_svm_payload_transaction_create_ata_instruction" | "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee" | "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset" | "invalid_exact_svm_payload_transaction_instructions" | "invalid_exact_svm_payload_transaction_instructions_length" | "invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction" | "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction" | "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high" | "invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked" | "invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked" | "invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts" | "invalid_exact_svm_payload_transaction_fee_payer_transferring_funds" | "invalid_exact_svm_payload_transaction_not_a_transfer_instruction" | "invalid_exact_svm_payload_transaction_receiver_ata_not_found" | "invalid_exact_svm_payload_transaction_sender_ata_not_found" | "invalid_exact_svm_payload_transaction_simulation_failed" | "invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata" | "invalid_network" | "invalid_payload" | "invalid_payment_requirements" | "invalid_scheme" | "invalid_payment" | "payment_expired" | "unsupported_scheme" | "invalid_x402_version" | "invalid_transaction_state" | "settle_exact_svm_block_height_exceeded" | "settle_exact_svm_transaction_confirmation_timed_out" | "unexpected_settle_error" | "unexpected_verify_error" | undefined;
    payer?: string | undefined;
    accepts?: {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    }[] | undefined;
}>;
type x402Response = z.infer<typeof x402ResponseSchema>;
declare const HTTPVerbsSchema: z.ZodEnum<["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"]>;
type HTTPVerbs = z.infer<typeof HTTPVerbsSchema>;
declare const HTTPRequestStructureSchema: z.ZodObject<{
    type: z.ZodLiteral<"http">;
    method: z.ZodEnum<["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"]>;
    queryParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    bodyType: z.ZodOptional<z.ZodEnum<["json", "form-data", "multipart-form-data", "text", "binary"]>>;
    bodyFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    headerFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    type: "http";
    method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
    queryParams?: Record<string, string> | undefined;
    bodyType?: "binary" | "json" | "form-data" | "multipart-form-data" | "text" | undefined;
    bodyFields?: Record<string, any> | undefined;
    headerFields?: Record<string, any> | undefined;
}, {
    type: "http";
    method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
    queryParams?: Record<string, string> | undefined;
    bodyType?: "binary" | "json" | "form-data" | "multipart-form-data" | "text" | undefined;
    bodyFields?: Record<string, any> | undefined;
    headerFields?: Record<string, any> | undefined;
}>;
declare const RequestStructureSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"http">;
    method: z.ZodEnum<["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS", "HEAD"]>;
    queryParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    bodyType: z.ZodOptional<z.ZodEnum<["json", "form-data", "multipart-form-data", "text", "binary"]>>;
    bodyFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    headerFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    type: "http";
    method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
    queryParams?: Record<string, string> | undefined;
    bodyType?: "binary" | "json" | "form-data" | "multipart-form-data" | "text" | undefined;
    bodyFields?: Record<string, any> | undefined;
    headerFields?: Record<string, any> | undefined;
}, {
    type: "http";
    method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
    queryParams?: Record<string, string> | undefined;
    bodyType?: "binary" | "json" | "form-data" | "multipart-form-data" | "text" | undefined;
    bodyFields?: Record<string, any> | undefined;
    headerFields?: Record<string, any> | undefined;
}>]>;
type HTTPRequestStructure = z.infer<typeof HTTPRequestStructureSchema>;
type RequestStructure = z.infer<typeof RequestStructureSchema>;
declare const DiscoveredResourceSchema: z.ZodObject<{
    resource: z.ZodString;
    type: z.ZodEnum<["http"]>;
    x402Version: z.ZodEffects<z.ZodNumber, number, number>;
    accepts: z.ZodArray<z.ZodObject<{
        scheme: z.ZodEnum<["exact"]>;
        network: z.ZodEnum<["abstract", "abstract-testnet", "base-sepolia", "base", "avalanche-fuji", "avalanche", "iotex", "solana-devnet", "solana", "sei", "sei-testnet", "polygon", "polygon-amoy", "peaq", "story", "educhain", "skale-base-sepolia"]>;
        maxAmountRequired: z.ZodEffects<z.ZodString, string, string>;
        resource: z.ZodString;
        description: z.ZodString;
        mimeType: z.ZodString;
        outputSchema: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        payTo: z.ZodUnion<[z.ZodString, z.ZodString]>;
        maxTimeoutSeconds: z.ZodNumber;
        asset: z.ZodUnion<[z.ZodString, z.ZodString]>;
        extra: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    }, {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    }>, "many">;
    lastUpdated: z.ZodDate;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    type: "http";
    resource: string;
    x402Version: number;
    accepts: {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    }[];
    lastUpdated: Date;
    metadata?: Record<string, any> | undefined;
}, {
    type: "http";
    resource: string;
    x402Version: number;
    accepts: {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    }[];
    lastUpdated: Date;
    metadata?: Record<string, any> | undefined;
}>;
type DiscoveredResource = z.infer<typeof DiscoveredResourceSchema>;
declare const SettleRequestSchema: z.ZodObject<{
    paymentPayload: z.ZodObject<{
        x402Version: z.ZodEffects<z.ZodNumber, number, number>;
        scheme: z.ZodEnum<["exact"]>;
        network: z.ZodEnum<["abstract", "abstract-testnet", "base-sepolia", "base", "avalanche-fuji", "avalanche", "iotex", "solana-devnet", "solana", "sei", "sei-testnet", "polygon", "polygon-amoy", "peaq", "story", "educhain", "skale-base-sepolia"]>;
        payload: z.ZodUnion<[z.ZodObject<{
            signature: z.ZodString;
            authorization: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
                value: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
                validAfter: z.ZodEffects<z.ZodString, string, string>;
                validBefore: z.ZodEffects<z.ZodString, string, string>;
                nonce: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            }, {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            signature: string;
            authorization: {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            };
        }, {
            signature: string;
            authorization: {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            };
        }>, z.ZodObject<{
            transaction: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            transaction: string;
        }, {
            transaction: string;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        scheme: "exact";
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        x402Version: number;
        payload: {
            signature: string;
            authorization: {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            };
        } | {
            transaction: string;
        };
    }, {
        scheme: "exact";
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        x402Version: number;
        payload: {
            signature: string;
            authorization: {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            };
        } | {
            transaction: string;
        };
    }>;
    paymentRequirements: z.ZodObject<{
        scheme: z.ZodEnum<["exact"]>;
        network: z.ZodEnum<["abstract", "abstract-testnet", "base-sepolia", "base", "avalanche-fuji", "avalanche", "iotex", "solana-devnet", "solana", "sei", "sei-testnet", "polygon", "polygon-amoy", "peaq", "story", "educhain", "skale-base-sepolia"]>;
        maxAmountRequired: z.ZodEffects<z.ZodString, string, string>;
        resource: z.ZodString;
        description: z.ZodString;
        mimeType: z.ZodString;
        outputSchema: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        payTo: z.ZodUnion<[z.ZodString, z.ZodString]>;
        maxTimeoutSeconds: z.ZodNumber;
        asset: z.ZodUnion<[z.ZodString, z.ZodString]>;
        extra: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    }, {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    paymentPayload: {
        scheme: "exact";
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        x402Version: number;
        payload: {
            signature: string;
            authorization: {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            };
        } | {
            transaction: string;
        };
    };
    paymentRequirements: {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    };
}, {
    paymentPayload: {
        scheme: "exact";
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        x402Version: number;
        payload: {
            signature: string;
            authorization: {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            };
        } | {
            transaction: string;
        };
    };
    paymentRequirements: {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    };
}>;
type SettleRequest = z.infer<typeof SettleRequestSchema>;
declare const VerifyRequestSchema: z.ZodObject<{
    paymentPayload: z.ZodObject<{
        x402Version: z.ZodEffects<z.ZodNumber, number, number>;
        scheme: z.ZodEnum<["exact"]>;
        network: z.ZodEnum<["abstract", "abstract-testnet", "base-sepolia", "base", "avalanche-fuji", "avalanche", "iotex", "solana-devnet", "solana", "sei", "sei-testnet", "polygon", "polygon-amoy", "peaq", "story", "educhain", "skale-base-sepolia"]>;
        payload: z.ZodUnion<[z.ZodObject<{
            signature: z.ZodString;
            authorization: z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
                value: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
                validAfter: z.ZodEffects<z.ZodString, string, string>;
                validBefore: z.ZodEffects<z.ZodString, string, string>;
                nonce: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            }, {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            signature: string;
            authorization: {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            };
        }, {
            signature: string;
            authorization: {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            };
        }>, z.ZodObject<{
            transaction: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            transaction: string;
        }, {
            transaction: string;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        scheme: "exact";
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        x402Version: number;
        payload: {
            signature: string;
            authorization: {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            };
        } | {
            transaction: string;
        };
    }, {
        scheme: "exact";
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        x402Version: number;
        payload: {
            signature: string;
            authorization: {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            };
        } | {
            transaction: string;
        };
    }>;
    paymentRequirements: z.ZodObject<{
        scheme: z.ZodEnum<["exact"]>;
        network: z.ZodEnum<["abstract", "abstract-testnet", "base-sepolia", "base", "avalanche-fuji", "avalanche", "iotex", "solana-devnet", "solana", "sei", "sei-testnet", "polygon", "polygon-amoy", "peaq", "story", "educhain", "skale-base-sepolia"]>;
        maxAmountRequired: z.ZodEffects<z.ZodString, string, string>;
        resource: z.ZodString;
        description: z.ZodString;
        mimeType: z.ZodString;
        outputSchema: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        payTo: z.ZodUnion<[z.ZodString, z.ZodString]>;
        maxTimeoutSeconds: z.ZodNumber;
        asset: z.ZodUnion<[z.ZodString, z.ZodString]>;
        extra: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    }, {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    paymentPayload: {
        scheme: "exact";
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        x402Version: number;
        payload: {
            signature: string;
            authorization: {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            };
        } | {
            transaction: string;
        };
    };
    paymentRequirements: {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    };
}, {
    paymentPayload: {
        scheme: "exact";
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        x402Version: number;
        payload: {
            signature: string;
            authorization: {
                from: string;
                to: string;
                value: string;
                validAfter: string;
                validBefore: string;
                nonce: string;
            };
        } | {
            transaction: string;
        };
    };
    paymentRequirements: {
        scheme: "exact";
        description: string;
        asset: string;
        maxAmountRequired: string;
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        resource: string;
        mimeType: string;
        payTo: string;
        maxTimeoutSeconds: number;
        outputSchema?: Record<string, any> | undefined;
        extra?: Record<string, any> | undefined;
    };
}>;
type VerifyRequest = z.infer<typeof VerifyRequestSchema>;
declare const VerifyResponseSchema: z.ZodObject<{
    isValid: z.ZodBoolean;
    invalidReason: z.ZodOptional<z.ZodEnum<["insufficient_funds", "invalid_exact_evm_payload_authorization_valid_after", "invalid_exact_evm_payload_authorization_valid_before", "invalid_exact_evm_payload_authorization_value", "invalid_exact_evm_payload_signature", "invalid_exact_evm_payload_undeployed_smart_wallet", "invalid_exact_evm_payload_recipient_mismatch", "invalid_exact_svm_payload_transaction", "invalid_exact_svm_payload_transaction_amount_mismatch", "invalid_exact_svm_payload_transaction_create_ata_instruction", "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee", "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset", "invalid_exact_svm_payload_transaction_instructions", "invalid_exact_svm_payload_transaction_instructions_length", "invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction", "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction", "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high", "invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked", "invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked", "invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts", "invalid_exact_svm_payload_transaction_fee_payer_transferring_funds", "invalid_exact_svm_payload_transaction_not_a_transfer_instruction", "invalid_exact_svm_payload_transaction_receiver_ata_not_found", "invalid_exact_svm_payload_transaction_sender_ata_not_found", "invalid_exact_svm_payload_transaction_simulation_failed", "invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata", "invalid_network", "invalid_payload", "invalid_payment_requirements", "invalid_scheme", "invalid_payment", "payment_expired", "unsupported_scheme", "invalid_x402_version", "invalid_transaction_state", "invalid_x402_version", "settle_exact_svm_block_height_exceeded", "settle_exact_svm_transaction_confirmation_timed_out", "unsupported_scheme", "unexpected_settle_error", "unexpected_verify_error"]>>;
    payer: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
}, "strip", z.ZodTypeAny, {
    isValid: boolean;
    invalidReason?: "invalid_exact_svm_payload_transaction" | "insufficient_funds" | "invalid_exact_evm_payload_authorization_valid_after" | "invalid_exact_evm_payload_authorization_valid_before" | "invalid_exact_evm_payload_authorization_value" | "invalid_exact_evm_payload_signature" | "invalid_exact_evm_payload_undeployed_smart_wallet" | "invalid_exact_evm_payload_recipient_mismatch" | "invalid_exact_svm_payload_transaction_amount_mismatch" | "invalid_exact_svm_payload_transaction_create_ata_instruction" | "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee" | "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset" | "invalid_exact_svm_payload_transaction_instructions" | "invalid_exact_svm_payload_transaction_instructions_length" | "invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction" | "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction" | "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high" | "invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked" | "invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked" | "invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts" | "invalid_exact_svm_payload_transaction_fee_payer_transferring_funds" | "invalid_exact_svm_payload_transaction_not_a_transfer_instruction" | "invalid_exact_svm_payload_transaction_receiver_ata_not_found" | "invalid_exact_svm_payload_transaction_sender_ata_not_found" | "invalid_exact_svm_payload_transaction_simulation_failed" | "invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata" | "invalid_network" | "invalid_payload" | "invalid_payment_requirements" | "invalid_scheme" | "invalid_payment" | "payment_expired" | "unsupported_scheme" | "invalid_x402_version" | "invalid_transaction_state" | "settle_exact_svm_block_height_exceeded" | "settle_exact_svm_transaction_confirmation_timed_out" | "unexpected_settle_error" | "unexpected_verify_error" | undefined;
    payer?: string | undefined;
}, {
    isValid: boolean;
    invalidReason?: "invalid_exact_svm_payload_transaction" | "insufficient_funds" | "invalid_exact_evm_payload_authorization_valid_after" | "invalid_exact_evm_payload_authorization_valid_before" | "invalid_exact_evm_payload_authorization_value" | "invalid_exact_evm_payload_signature" | "invalid_exact_evm_payload_undeployed_smart_wallet" | "invalid_exact_evm_payload_recipient_mismatch" | "invalid_exact_svm_payload_transaction_amount_mismatch" | "invalid_exact_svm_payload_transaction_create_ata_instruction" | "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee" | "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset" | "invalid_exact_svm_payload_transaction_instructions" | "invalid_exact_svm_payload_transaction_instructions_length" | "invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction" | "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction" | "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high" | "invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked" | "invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked" | "invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts" | "invalid_exact_svm_payload_transaction_fee_payer_transferring_funds" | "invalid_exact_svm_payload_transaction_not_a_transfer_instruction" | "invalid_exact_svm_payload_transaction_receiver_ata_not_found" | "invalid_exact_svm_payload_transaction_sender_ata_not_found" | "invalid_exact_svm_payload_transaction_simulation_failed" | "invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata" | "invalid_network" | "invalid_payload" | "invalid_payment_requirements" | "invalid_scheme" | "invalid_payment" | "payment_expired" | "unsupported_scheme" | "invalid_x402_version" | "invalid_transaction_state" | "settle_exact_svm_block_height_exceeded" | "settle_exact_svm_transaction_confirmation_timed_out" | "unexpected_settle_error" | "unexpected_verify_error" | undefined;
    payer?: string | undefined;
}>;
type VerifyResponse = z.infer<typeof VerifyResponseSchema>;
declare const SettleResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    errorReason: z.ZodOptional<z.ZodEnum<["insufficient_funds", "invalid_exact_evm_payload_authorization_valid_after", "invalid_exact_evm_payload_authorization_valid_before", "invalid_exact_evm_payload_authorization_value", "invalid_exact_evm_payload_signature", "invalid_exact_evm_payload_undeployed_smart_wallet", "invalid_exact_evm_payload_recipient_mismatch", "invalid_exact_svm_payload_transaction", "invalid_exact_svm_payload_transaction_amount_mismatch", "invalid_exact_svm_payload_transaction_create_ata_instruction", "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee", "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset", "invalid_exact_svm_payload_transaction_instructions", "invalid_exact_svm_payload_transaction_instructions_length", "invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction", "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction", "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high", "invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked", "invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked", "invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts", "invalid_exact_svm_payload_transaction_fee_payer_transferring_funds", "invalid_exact_svm_payload_transaction_not_a_transfer_instruction", "invalid_exact_svm_payload_transaction_receiver_ata_not_found", "invalid_exact_svm_payload_transaction_sender_ata_not_found", "invalid_exact_svm_payload_transaction_simulation_failed", "invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata", "invalid_network", "invalid_payload", "invalid_payment_requirements", "invalid_scheme", "invalid_payment", "payment_expired", "unsupported_scheme", "invalid_x402_version", "invalid_transaction_state", "invalid_x402_version", "settle_exact_svm_block_height_exceeded", "settle_exact_svm_transaction_confirmation_timed_out", "unsupported_scheme", "unexpected_settle_error", "unexpected_verify_error"]>>;
    payer: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    transaction: z.ZodString;
    network: z.ZodEnum<["abstract", "abstract-testnet", "base-sepolia", "base", "avalanche-fuji", "avalanche", "iotex", "solana-devnet", "solana", "sei", "sei-testnet", "polygon", "polygon-amoy", "peaq", "story", "educhain", "skale-base-sepolia"]>;
}, "strip", z.ZodTypeAny, {
    transaction: string;
    success: boolean;
    network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
    payer?: string | undefined;
    errorReason?: "invalid_exact_svm_payload_transaction" | "insufficient_funds" | "invalid_exact_evm_payload_authorization_valid_after" | "invalid_exact_evm_payload_authorization_valid_before" | "invalid_exact_evm_payload_authorization_value" | "invalid_exact_evm_payload_signature" | "invalid_exact_evm_payload_undeployed_smart_wallet" | "invalid_exact_evm_payload_recipient_mismatch" | "invalid_exact_svm_payload_transaction_amount_mismatch" | "invalid_exact_svm_payload_transaction_create_ata_instruction" | "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee" | "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset" | "invalid_exact_svm_payload_transaction_instructions" | "invalid_exact_svm_payload_transaction_instructions_length" | "invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction" | "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction" | "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high" | "invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked" | "invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked" | "invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts" | "invalid_exact_svm_payload_transaction_fee_payer_transferring_funds" | "invalid_exact_svm_payload_transaction_not_a_transfer_instruction" | "invalid_exact_svm_payload_transaction_receiver_ata_not_found" | "invalid_exact_svm_payload_transaction_sender_ata_not_found" | "invalid_exact_svm_payload_transaction_simulation_failed" | "invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata" | "invalid_network" | "invalid_payload" | "invalid_payment_requirements" | "invalid_scheme" | "invalid_payment" | "payment_expired" | "unsupported_scheme" | "invalid_x402_version" | "invalid_transaction_state" | "settle_exact_svm_block_height_exceeded" | "settle_exact_svm_transaction_confirmation_timed_out" | "unexpected_settle_error" | "unexpected_verify_error" | undefined;
}, {
    transaction: string;
    success: boolean;
    network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
    payer?: string | undefined;
    errorReason?: "invalid_exact_svm_payload_transaction" | "insufficient_funds" | "invalid_exact_evm_payload_authorization_valid_after" | "invalid_exact_evm_payload_authorization_valid_before" | "invalid_exact_evm_payload_authorization_value" | "invalid_exact_evm_payload_signature" | "invalid_exact_evm_payload_undeployed_smart_wallet" | "invalid_exact_evm_payload_recipient_mismatch" | "invalid_exact_svm_payload_transaction_amount_mismatch" | "invalid_exact_svm_payload_transaction_create_ata_instruction" | "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_payee" | "invalid_exact_svm_payload_transaction_create_ata_instruction_incorrect_asset" | "invalid_exact_svm_payload_transaction_instructions" | "invalid_exact_svm_payload_transaction_instructions_length" | "invalid_exact_svm_payload_transaction_instructions_compute_limit_instruction" | "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction" | "invalid_exact_svm_payload_transaction_instructions_compute_price_instruction_too_high" | "invalid_exact_svm_payload_transaction_instruction_not_spl_token_transfer_checked" | "invalid_exact_svm_payload_transaction_instruction_not_token_2022_transfer_checked" | "invalid_exact_svm_payload_transaction_fee_payer_included_in_instruction_accounts" | "invalid_exact_svm_payload_transaction_fee_payer_transferring_funds" | "invalid_exact_svm_payload_transaction_not_a_transfer_instruction" | "invalid_exact_svm_payload_transaction_receiver_ata_not_found" | "invalid_exact_svm_payload_transaction_sender_ata_not_found" | "invalid_exact_svm_payload_transaction_simulation_failed" | "invalid_exact_svm_payload_transaction_transfer_to_incorrect_ata" | "invalid_network" | "invalid_payload" | "invalid_payment_requirements" | "invalid_scheme" | "invalid_payment" | "payment_expired" | "unsupported_scheme" | "invalid_x402_version" | "invalid_transaction_state" | "settle_exact_svm_block_height_exceeded" | "settle_exact_svm_transaction_confirmation_timed_out" | "unexpected_settle_error" | "unexpected_verify_error" | undefined;
}>;
type SettleResponse = z.infer<typeof SettleResponseSchema>;
declare const ListDiscoveryResourcesRequestSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
}, {
    type?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
}>;
type ListDiscoveryResourcesRequest = z.infer<typeof ListDiscoveryResourcesRequestSchema>;
declare const ListDiscoveryResourcesResponseSchema: z.ZodObject<{
    x402Version: z.ZodEffects<z.ZodNumber, number, number>;
    items: z.ZodArray<z.ZodObject<{
        resource: z.ZodString;
        type: z.ZodEnum<["http"]>;
        x402Version: z.ZodEffects<z.ZodNumber, number, number>;
        accepts: z.ZodArray<z.ZodObject<{
            scheme: z.ZodEnum<["exact"]>;
            network: z.ZodEnum<["abstract", "abstract-testnet", "base-sepolia", "base", "avalanche-fuji", "avalanche", "iotex", "solana-devnet", "solana", "sei", "sei-testnet", "polygon", "polygon-amoy", "peaq", "story", "educhain", "skale-base-sepolia"]>;
            maxAmountRequired: z.ZodEffects<z.ZodString, string, string>;
            resource: z.ZodString;
            description: z.ZodString;
            mimeType: z.ZodString;
            outputSchema: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            payTo: z.ZodUnion<[z.ZodString, z.ZodString]>;
            maxTimeoutSeconds: z.ZodNumber;
            asset: z.ZodUnion<[z.ZodString, z.ZodString]>;
            extra: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, "strip", z.ZodTypeAny, {
            scheme: "exact";
            description: string;
            asset: string;
            maxAmountRequired: string;
            network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
            resource: string;
            mimeType: string;
            payTo: string;
            maxTimeoutSeconds: number;
            outputSchema?: Record<string, any> | undefined;
            extra?: Record<string, any> | undefined;
        }, {
            scheme: "exact";
            description: string;
            asset: string;
            maxAmountRequired: string;
            network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
            resource: string;
            mimeType: string;
            payTo: string;
            maxTimeoutSeconds: number;
            outputSchema?: Record<string, any> | undefined;
            extra?: Record<string, any> | undefined;
        }>, "many">;
        lastUpdated: z.ZodDate;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        type: "http";
        resource: string;
        x402Version: number;
        accepts: {
            scheme: "exact";
            description: string;
            asset: string;
            maxAmountRequired: string;
            network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
            resource: string;
            mimeType: string;
            payTo: string;
            maxTimeoutSeconds: number;
            outputSchema?: Record<string, any> | undefined;
            extra?: Record<string, any> | undefined;
        }[];
        lastUpdated: Date;
        metadata?: Record<string, any> | undefined;
    }, {
        type: "http";
        resource: string;
        x402Version: number;
        accepts: {
            scheme: "exact";
            description: string;
            asset: string;
            maxAmountRequired: string;
            network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
            resource: string;
            mimeType: string;
            payTo: string;
            maxTimeoutSeconds: number;
            outputSchema?: Record<string, any> | undefined;
            extra?: Record<string, any> | undefined;
        }[];
        lastUpdated: Date;
        metadata?: Record<string, any> | undefined;
    }>, "many">;
    pagination: z.ZodObject<{
        limit: z.ZodNumber;
        offset: z.ZodNumber;
        total: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        limit: number;
        offset: number;
        total: number;
    }, {
        limit: number;
        offset: number;
        total: number;
    }>;
}, "strip", z.ZodTypeAny, {
    x402Version: number;
    items: {
        type: "http";
        resource: string;
        x402Version: number;
        accepts: {
            scheme: "exact";
            description: string;
            asset: string;
            maxAmountRequired: string;
            network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
            resource: string;
            mimeType: string;
            payTo: string;
            maxTimeoutSeconds: number;
            outputSchema?: Record<string, any> | undefined;
            extra?: Record<string, any> | undefined;
        }[];
        lastUpdated: Date;
        metadata?: Record<string, any> | undefined;
    }[];
    pagination: {
        limit: number;
        offset: number;
        total: number;
    };
}, {
    x402Version: number;
    items: {
        type: "http";
        resource: string;
        x402Version: number;
        accepts: {
            scheme: "exact";
            description: string;
            asset: string;
            maxAmountRequired: string;
            network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
            resource: string;
            mimeType: string;
            payTo: string;
            maxTimeoutSeconds: number;
            outputSchema?: Record<string, any> | undefined;
            extra?: Record<string, any> | undefined;
        }[];
        lastUpdated: Date;
        metadata?: Record<string, any> | undefined;
    }[];
    pagination: {
        limit: number;
        offset: number;
        total: number;
    };
}>;
type ListDiscoveryResourcesResponse = z.infer<typeof ListDiscoveryResourcesResponseSchema>;
declare const SupportedPaymentKindSchema: z.ZodObject<{
    x402Version: z.ZodEffects<z.ZodNumber, number, number>;
    scheme: z.ZodEnum<["exact"]>;
    network: z.ZodEnum<["abstract", "abstract-testnet", "base-sepolia", "base", "avalanche-fuji", "avalanche", "iotex", "solana-devnet", "solana", "sei", "sei-testnet", "polygon", "polygon-amoy", "peaq", "story", "educhain", "skale-base-sepolia"]>;
    extra: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    scheme: "exact";
    network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
    x402Version: number;
    extra?: Record<string, any> | undefined;
}, {
    scheme: "exact";
    network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
    x402Version: number;
    extra?: Record<string, any> | undefined;
}>;
type SupportedPaymentKind = z.infer<typeof SupportedPaymentKindSchema>;
declare const SupportedPaymentKindsResponseSchema: z.ZodObject<{
    kinds: z.ZodArray<z.ZodObject<{
        x402Version: z.ZodEffects<z.ZodNumber, number, number>;
        scheme: z.ZodEnum<["exact"]>;
        network: z.ZodEnum<["abstract", "abstract-testnet", "base-sepolia", "base", "avalanche-fuji", "avalanche", "iotex", "solana-devnet", "solana", "sei", "sei-testnet", "polygon", "polygon-amoy", "peaq", "story", "educhain", "skale-base-sepolia"]>;
        extra: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, "strip", z.ZodTypeAny, {
        scheme: "exact";
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        x402Version: number;
        extra?: Record<string, any> | undefined;
    }, {
        scheme: "exact";
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        x402Version: number;
        extra?: Record<string, any> | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    kinds: {
        scheme: "exact";
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        x402Version: number;
        extra?: Record<string, any> | undefined;
    }[];
}, {
    kinds: {
        scheme: "exact";
        network: "base-sepolia" | "avalanche-fuji" | "abstract" | "abstract-testnet" | "base" | "avalanche" | "sei" | "sei-testnet" | "polygon" | "polygon-amoy" | "peaq" | "story" | "educhain" | "iotex" | "skale-base-sepolia" | "solana-devnet" | "solana";
        x402Version: number;
        extra?: Record<string, any> | undefined;
    }[];
}>;
type SupportedPaymentKindsResponse = z.infer<typeof SupportedPaymentKindsResponseSchema>;

export { SupportedPaymentKindSchema as A, type SupportedPaymentKind as B, SupportedPaymentKindsResponseSchema as C, DiscoveredResourceSchema as D, type ExactSvmPayload as E, type SupportedPaymentKindsResponse as F, type HTTPVerbs as H, ListDiscoveryResourcesRequestSchema as L, type PaymentRequirements as P, RequestStructureSchema as R, type SettleResponse as S, type UnsignedPaymentPayload as U, VerifyRequestSchema as V, type PaymentPayload as a, ErrorReasons as b, PaymentRequirementsSchema as c, ExactEvmPayloadAuthorizationSchema as d, type ExactEvmPayloadAuthorization as e, ExactEvmPayloadSchema as f, type ExactEvmPayload as g, ExactSvmPayloadSchema as h, PaymentPayloadSchema as i, x402ResponseSchema as j, type x402Response as k, HTTPRequestStructureSchema as l, type HTTPRequestStructure as m, type RequestStructure as n, type DiscoveredResource as o, SettleRequestSchema as p, type SettleRequest as q, type VerifyRequest as r, schemes as s, VerifyResponseSchema as t, type VerifyResponse as u, SettleResponseSchema as v, type ListDiscoveryResourcesRequest as w, x402Versions as x, ListDiscoveryResourcesResponseSchema as y, type ListDiscoveryResourcesResponse as z };
