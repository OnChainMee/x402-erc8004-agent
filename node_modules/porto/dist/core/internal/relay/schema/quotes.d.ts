/**
 * RPC quote.
 *
 * @see https://github.com/ithacaxyz/relay/blob/main/src/types/quote.rs
 */
import { z } from 'zod/mini';
export declare const AssetDeficit: z.ZodMiniObject<{
    /** Asset address. null represents the native token. */
    address: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>;
    /** Token decimals. */
    decimals: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
    /** Deficit for the asset. */
    deficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
    /** Fiat value of the deficit. */
    fiat: z.ZodMiniOptional<z.ZodMiniObject<{
        currency: z.ZodMiniString<string>;
        value: z.ZodMiniString<string>;
    }, z.core.$strip>>;
    /** Token name. */
    name: z.ZodMiniOptional<z.ZodMiniString<string>>;
    /** Required amount for the asset. */
    required: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
    /** Token symbol. */
    symbol: z.ZodMiniOptional<z.ZodMiniString<string>>;
}, z.core.$strip>;
export type AssetDeficit = z.infer<typeof AssetDeficit>;
/** A quote from the RPC for a given `Intent`. */
export declare const Quote: z.ZodMiniObject<{
    /** An optional additional authorization address, which would be used to delegate the feepayer */
    additionalAuthorization: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
        address: z.ZodMiniTemplateLiteral<`0x${string}`>;
        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        r: z.ZodMiniTemplateLiteral<`0x${string}`>;
        s: z.ZodMiniTemplateLiteral<`0x${string}`>;
        yParity: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
    }, z.core.$strip>>>;
    /** Assets missing for the intent to execute. */
    assetDeficits: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
        /** Asset address. null represents the native token. */
        address: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>;
        /** Token decimals. */
        decimals: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
        /** Deficit for the asset. */
        deficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        /** Fiat value of the deficit. */
        fiat: z.ZodMiniOptional<z.ZodMiniObject<{
            currency: z.ZodMiniString<string>;
            value: z.ZodMiniString<string>;
        }, z.core.$strip>>;
        /** Token name. */
        name: z.ZodMiniOptional<z.ZodMiniString<string>>;
        /** Required amount for the asset. */
        required: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        /** Token symbol. */
        symbol: z.ZodMiniOptional<z.ZodMiniString<string>>;
    }, z.core.$strip>>>;
    /**
     * An optional unsigned authorization item.
     * The account in `eoa` will be delegated to this address.
     */
    authorizationAddress: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
    /** Chain ID the quote is for. */
    chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
    /** The price (in wei) of ETH in the payment token. */
    ethPrice: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
    /** Extra payment for e.g L1 DA fee that is paid on top of the execution gas. */
    extraPayment: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
    /** The deficit of the fee token. */
    feeTokenDeficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
    /** The fee estimate for the bundle in the destination chains native token. */
    intent: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
        combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
        encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
        eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
        executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
        expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
        funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        isMultichain: z.ZodMiniBoolean<boolean>;
        nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
        paymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        paymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
        paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
        settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
        settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
    }, z.core.$strip>, z.ZodMiniObject<{
        combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
        encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
        eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
        executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
        expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
        funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        isMultichain: z.ZodMiniBoolean<boolean>;
        nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
        paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
        paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
        prePaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        prePaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
        settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
        signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
        supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
        totalPaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        totalPaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
    }, z.core.$strip>]>;
    /** The `Intent` the quote is for. */
    nativeFeeEstimate: z.ZodMiniObject<{
        /** The maximum fee per gas for the bundle. */
        maxFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        /** The maximum priority fee per gas for the bundle. */
        maxPriorityFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
    }, z.core.$strip>;
    /** The orchestrator for the quote. */
    orchestrator: z.ZodMiniTemplateLiteral<`0x${string}`>;
    /** The decimals of the payment token. */
    paymentTokenDecimals: z.ZodMiniNumber<number>;
    /** The recommended gas limit for the bundle. */
    txGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
}, z.core.$strip>;
export type Quote = z.infer<typeof Quote>;
export declare const Quotes: z.ZodMiniObject<{
    /** Merkle root if it's a multichain workflow. */
    multiChainRoot: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
    /**
     * A quote for each intent.
     *
     * - For a single-chain workflow, this will have exactly one item, the output intent.
     * - For a multi-chain workflow, this will have multiple items, where the last one is the output
     *   intent.
     */
    quotes: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
        /** An optional additional authorization address, which would be used to delegate the feepayer */
        additionalAuthorization: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            r: z.ZodMiniTemplateLiteral<`0x${string}`>;
            s: z.ZodMiniTemplateLiteral<`0x${string}`>;
            yParity: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        }, z.core.$strip>>>;
        /** Assets missing for the intent to execute. */
        assetDeficits: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
            /** Asset address. null represents the native token. */
            address: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>;
            /** Token decimals. */
            decimals: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
            /** Deficit for the asset. */
            deficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            /** Fiat value of the deficit. */
            fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                currency: z.ZodMiniString<string>;
                value: z.ZodMiniString<string>;
            }, z.core.$strip>>;
            /** Token name. */
            name: z.ZodMiniOptional<z.ZodMiniString<string>>;
            /** Required amount for the asset. */
            required: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            /** Token symbol. */
            symbol: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.core.$strip>>>;
        /**
         * An optional unsigned authorization item.
         * The account in `eoa` will be delegated to this address.
         */
        authorizationAddress: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
        /** Chain ID the quote is for. */
        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        /** The price (in wei) of ETH in the payment token. */
        ethPrice: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        /** Extra payment for e.g L1 DA fee that is paid on top of the execution gas. */
        extraPayment: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        /** The deficit of the fee token. */
        feeTokenDeficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        /** The fee estimate for the bundle in the destination chains native token. */
        intent: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
            encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
            eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
            executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
            expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
            funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            isMultichain: z.ZodMiniBoolean<boolean>;
            nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
            paymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            paymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
            paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
            settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
            settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>, z.ZodMiniObject<{
            combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
            encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
            eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
            executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
            expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
            funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            isMultichain: z.ZodMiniBoolean<boolean>;
            nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
            paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
            paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
            prePaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            prePaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
            settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
            totalPaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            totalPaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        }, z.core.$strip>]>;
        /** The `Intent` the quote is for. */
        nativeFeeEstimate: z.ZodMiniObject<{
            /** The maximum fee per gas for the bundle. */
            maxFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            /** The maximum priority fee per gas for the bundle. */
            maxPriorityFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        }, z.core.$strip>;
        /** The orchestrator for the quote. */
        orchestrator: z.ZodMiniTemplateLiteral<`0x${string}`>;
        /** The decimals of the payment token. */
        paymentTokenDecimals: z.ZodMiniNumber<number>;
        /** The recommended gas limit for the bundle. */
        txGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
    }, z.core.$strip>>>;
    /** The time-to-live (UNIX timestamp) of the quotes. */
    ttl: z.ZodMiniNumber<number>;
}, z.core.$strip>;
export declare const Signed: z.ZodMiniObject<{
    hash: z.ZodMiniTemplateLiteral<`0x${string}`>;
    r: z.ZodMiniTemplateLiteral<`0x${string}`>;
    s: z.ZodMiniTemplateLiteral<`0x${string}`>;
    v: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
    yParity: z.ZodMiniOptional<z.ZodMiniTemplateLiteral<`0x${string}`>>;
    /** Merkle root if it's a multichain workflow. */
    multiChainRoot: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
    /**
     * A quote for each intent.
     *
     * - For a single-chain workflow, this will have exactly one item, the output intent.
     * - For a multi-chain workflow, this will have multiple items, where the last one is the output
     *   intent.
     */
    quotes: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniObject<{
        /** An optional additional authorization address, which would be used to delegate the feepayer */
        additionalAuthorization: z.ZodMiniOptional<z.ZodMiniNullable<z.ZodMiniObject<{
            address: z.ZodMiniTemplateLiteral<`0x${string}`>;
            chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
            r: z.ZodMiniTemplateLiteral<`0x${string}`>;
            s: z.ZodMiniTemplateLiteral<`0x${string}`>;
            yParity: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        }, z.core.$strip>>>;
        /** Assets missing for the intent to execute. */
        assetDeficits: z.ZodMiniOptional<z.ZodMiniArray<z.ZodMiniObject<{
            /** Asset address. null represents the native token. */
            address: z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>;
            /** Token decimals. */
            decimals: z.ZodMiniOptional<z.ZodMiniNumber<number>>;
            /** Deficit for the asset. */
            deficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            /** Fiat value of the deficit. */
            fiat: z.ZodMiniOptional<z.ZodMiniObject<{
                currency: z.ZodMiniString<string>;
                value: z.ZodMiniString<string>;
            }, z.core.$strip>>;
            /** Token name. */
            name: z.ZodMiniOptional<z.ZodMiniString<string>>;
            /** Required amount for the asset. */
            required: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            /** Token symbol. */
            symbol: z.ZodMiniOptional<z.ZodMiniString<string>>;
        }, z.core.$strip>>>;
        /**
         * An optional unsigned authorization item.
         * The account in `eoa` will be delegated to this address.
         */
        authorizationAddress: z.ZodMiniOptional<z.ZodMiniUnion<readonly [z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNull]>>;
        /** Chain ID the quote is for. */
        chainId: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
        /** The price (in wei) of ETH in the payment token. */
        ethPrice: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        /** Extra payment for e.g L1 DA fee that is paid on top of the execution gas. */
        extraPayment: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        /** The deficit of the fee token. */
        feeTokenDeficit: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        /** The fee estimate for the bundle in the destination chains native token. */
        intent: z.ZodMiniUnion<readonly [z.ZodMiniObject<{
            combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
            encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
            eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
            executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
            expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
            funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            isMultichain: z.ZodMiniBoolean<boolean>;
            nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
            paymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            paymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
            paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
            settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
            settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
        }, z.core.$strip>, z.ZodMiniObject<{
            combinedGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            encodedFundTransfers: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
            encodedPreCalls: z.ZodMiniReadonly<z.ZodMiniArray<z.ZodMiniTemplateLiteral<`0x${string}`>>>;
            eoa: z.ZodMiniTemplateLiteral<`0x${string}`>;
            executionData: z.ZodMiniTemplateLiteral<`0x${string}`>;
            expiry: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            funder: z.ZodMiniTemplateLiteral<`0x${string}`>;
            funderSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            isMultichain: z.ZodMiniBoolean<boolean>;
            nonce: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            payer: z.ZodMiniTemplateLiteral<`0x${string}`>;
            paymentRecipient: z.ZodMiniTemplateLiteral<`0x${string}`>;
            paymentSignature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            paymentToken: z.ZodMiniTemplateLiteral<`0x${string}`>;
            prePaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            prePaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            settler: z.ZodMiniTemplateLiteral<`0x${string}`>;
            settlerContext: z.ZodMiniTemplateLiteral<`0x${string}`>;
            signature: z.ZodMiniTemplateLiteral<`0x${string}`>;
            supportedAccountImplementation: z.ZodMiniTemplateLiteral<`0x${string}`>;
            totalPaymentAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            totalPaymentMaxAmount: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        }, z.core.$strip>]>;
        /** The `Intent` the quote is for. */
        nativeFeeEstimate: z.ZodMiniObject<{
            /** The maximum fee per gas for the bundle. */
            maxFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
            /** The maximum priority fee per gas for the bundle. */
            maxPriorityFeePerGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
        }, z.core.$strip>;
        /** The orchestrator for the quote. */
        orchestrator: z.ZodMiniTemplateLiteral<`0x${string}`>;
        /** The decimals of the payment token. */
        paymentTokenDecimals: z.ZodMiniNumber<number>;
        /** The recommended gas limit for the bundle. */
        txGas: z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
    }, z.core.$strip>>>;
    /** The time-to-live (UNIX timestamp) of the quotes. */
    ttl: z.ZodMiniNumber<number>;
}, z.core.$strip>;
export type Signed = z.infer<typeof Signed>;
//# sourceMappingURL=quotes.d.ts.map