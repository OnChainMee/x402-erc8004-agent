/**
 * JSON-RPC Schemas.
 *
 * @see https://github.com/ithacaxyz/relay/tree/main/src/types/rpc
 */
import * as z from 'zod/mini';
import * as u from '../../schema/utils.js';
import * as c from './capabilities.js';
import * as Key from './key.js';
import * as PreCall from './preCall.js';
import * as Quotes from './quotes.js';
import * as Token from './token.js';
const Authorization = z.object({
    address: u.address(),
    chainId: u.number(),
    nonce: u.number(),
});
const SignedAuthorization = z.object({
    ...Authorization.shape,
    r: u.hex(),
    s: u.hex(),
    yParity: u.number(),
});
const Call = z.object({
    data: z.optional(u.hex()),
    to: u.address(),
    value: z.optional(u.bigint()),
});
export var account_getOnrampContactInfo;
(function (account_getOnrampContactInfo) {
    /** Parameters for `account_getOnrampContactInfo` request. */
    account_getOnrampContactInfo.Parameters = z.object({
        /** Address to get onramp status for. */
        address: u.address(),
        secret: z.string(),
    });
    /** Request for `account_getOnrampContactInfo`. */
    account_getOnrampContactInfo.Request = z.object({
        method: z.literal('account_getOnrampContactInfo'),
        params: z.readonly(z.tuple([account_getOnrampContactInfo.Parameters])),
    });
    /** Response for `account_getOnrampContactInfo`. */
    account_getOnrampContactInfo.Response = z.object({
        email: z.optional(z.string()),
        phone: z.optional(z.string()),
        phoneVerifiedAt: z.optional(z.number()),
    });
})(account_getOnrampContactInfo || (account_getOnrampContactInfo = {}));
export var account_onrampStatus;
(function (account_onrampStatus) {
    /** Parameters for `account_onrampStatus` request. */
    account_onrampStatus.Parameters = z.object({
        /** Address to get onramp status for. */
        address: u.address(),
    });
    /** Request for `account_onrampStatus`. */
    account_onrampStatus.Request = z.object({
        method: z.literal('account_onrampStatus'),
        params: z.readonly(z.tuple([account_onrampStatus.Parameters])),
    });
    /** Response for `account_onrampStatus`. */
    account_onrampStatus.Response = z.object({
        email: z.optional(z.number()),
        phone: z.optional(z.number()),
    });
})(account_onrampStatus || (account_onrampStatus = {}));
export var account_resendVerifyPhone;
(function (account_resendVerifyPhone) {
    /** Parameters for `account_resendVerifyPhone` request. */
    account_resendVerifyPhone.Parameters = z.object({
        /** Phone to set for wallet address. */
        phone: z.string(),
        /** Address to set phone. */
        walletAddress: u.address(),
    });
    /** Request for `account_resendVerifyPhone`. */
    account_resendVerifyPhone.Request = z.object({
        method: z.literal('account_resendVerifyPhone'),
        params: z.readonly(z.tuple([account_resendVerifyPhone.Parameters])),
    });
    /** Response for `account_resendVerifyPhone`. */
    account_resendVerifyPhone.Response = z.null();
})(account_resendVerifyPhone || (account_resendVerifyPhone = {}));
export var account_setEmail;
(function (account_setEmail) {
    /** Parameters for `account_setEmail` request. */
    account_setEmail.Parameters = z.object({
        /** Email to set for wallet address. */
        email: z.string().check(z.regex(/^.*@.*$/)),
        /** Address to set email. */
        walletAddress: u.address(),
    });
    /** Request for `account_setEmail`. */
    account_setEmail.Request = z.object({
        method: z.literal('account_setEmail'),
        params: z.readonly(z.tuple([account_setEmail.Parameters])),
    });
    /** Response for `account_setEmail`. */
    account_setEmail.Response = z.null();
})(account_setEmail || (account_setEmail = {}));
export var account_setPhone;
(function (account_setPhone) {
    /** Parameters for `account_setPhone` request. */
    account_setPhone.Parameters = z.object({
        /** Phone to set for wallet address. */
        phone: z.string(),
        /** Address to set phone. */
        walletAddress: u.address(),
    });
    /** Request for `account_setPhone`. */
    account_setPhone.Request = z.object({
        method: z.literal('account_setPhone'),
        params: z.readonly(z.tuple([account_setPhone.Parameters])),
    });
    /** Response for `account_setPhone`. */
    account_setPhone.Response = z.null();
})(account_setPhone || (account_setPhone = {}));
export var account_verifyEmail;
(function (account_verifyEmail) {
    /** Parameters for `account_verifyEmail` request. */
    account_verifyEmail.Parameters = z.object({
        chainId: u.number(),
        email: z.string(),
        signature: u.hex(),
        token: z.string(),
        walletAddress: u.address(),
    });
    /** Request for `account_verifyEmail`. */
    account_verifyEmail.Request = z.object({
        method: z.literal('account_verifyEmail'),
        params: z.readonly(z.tuple([account_verifyEmail.Parameters])),
    });
    /** Response for `account_verifyEmail`. */
    account_verifyEmail.Response = z.null();
})(account_verifyEmail || (account_verifyEmail = {}));
export var account_verifyPhone;
(function (account_verifyPhone) {
    /** Parameters for `account_verifyPhone` request. */
    account_verifyPhone.Parameters = z.object({
        code: z.string(),
        phone: z.string(),
        walletAddress: u.address(),
    });
    /** Request for `account_verifyPhone`. */
    account_verifyPhone.Request = z.object({
        method: z.literal('account_verifyPhone'),
        params: z.readonly(z.tuple([account_verifyPhone.Parameters])),
    });
    /** Response for `account_verifyPhone`. */
    account_verifyPhone.Response = z.null();
})(account_verifyPhone || (account_verifyPhone = {}));
export var health;
(function (health) {
    health.Request = z.object({
        method: z.literal('health'),
        params: z.undefined(),
    });
    health.Response = z.object({
        quoteSigner: u.address(),
        status: z.string(),
        version: z.string(),
    });
})(health || (health = {}));
export var wallet_addFaucetFunds;
(function (wallet_addFaucetFunds) {
    wallet_addFaucetFunds.Parameters = z.object({
        address: u.address(),
        chainId: u.number(),
        tokenAddress: u.address(),
        value: u.bigint(),
    });
    wallet_addFaucetFunds.Request = z.object({
        method: z.literal('wallet_addFaucetFunds'),
        params: z.readonly(z.tuple([wallet_addFaucetFunds.Parameters])),
    });
    wallet_addFaucetFunds.Response = z.object({
        message: z.optional(z.string()),
        transactionHash: u.hex(),
    });
})(wallet_addFaucetFunds || (wallet_addFaucetFunds = {}));
export var wallet_getAccounts;
(function (wallet_getAccounts) {
    /** Parameters for `wallet_getAccounts` request. */
    wallet_getAccounts.Parameters = z.object({
        /** Target chain ID. */
        chainId: u.number(),
        /** Key identifier. */
        id: u.hex(),
    });
    /** Request for `wallet_getAccounts`. */
    wallet_getAccounts.Request = z.object({
        method: z.literal('wallet_getAccounts'),
        params: z.readonly(z.tuple([wallet_getAccounts.Parameters])),
    });
    /** Response for `wallet_getAccounts`. */
    wallet_getAccounts.Response = z.readonly(z.array(z.object({
        /** Account address. */
        address: u.address(),
        /** Keys authorized on the account. */
        keys: c.authorizeKeys.Response,
    })));
})(wallet_getAccounts || (wallet_getAccounts = {}));
export var wallet_getAuthorization;
(function (wallet_getAuthorization) {
    wallet_getAuthorization.Parameters = z.object({
        address: u.address(),
    });
    wallet_getAuthorization.Request = z.object({
        method: z.literal('wallet_getAuthorization'),
        params: z.readonly(z.tuple([wallet_getAuthorization.Parameters])),
    });
    wallet_getAuthorization.Response = z.object({
        authorization: SignedAuthorization,
        data: u.hex(),
        to: u.address(),
    });
})(wallet_getAuthorization || (wallet_getAuthorization = {}));
export var wallet_getCapabilities;
(function (wallet_getCapabilities) {
    /** Request for `wallet_getCapabilities`. */
    wallet_getCapabilities.Request = z.object({
        method: z.literal('wallet_getCapabilities'),
        params: z.optional(z.tuple([z.readonly(z.array(z.number()))])),
    });
    const VersionedContract = z.object({
        address: u.address(),
        version: z.optional(z.union([z.string(), z.null()])),
    });
    wallet_getCapabilities.Response = z.record(u.hex(), z.object({
        contracts: z.object({
            /** Account implementation address. */
            accountImplementation: VersionedContract,
            /** Account proxy address. */
            accountProxy: VersionedContract,
            /** Legacy account implementation address. */
            legacyAccountImplementations: z.readonly(z.array(VersionedContract)),
            /** Legacy orchestrator address. */
            legacyOrchestrators: z.readonly(z.array(z.union([
                z.object({
                    orchestrator: VersionedContract,
                    simulator: VersionedContract,
                }),
                VersionedContract,
            ]))),
            /** Orchestrator address. */
            orchestrator: VersionedContract,
            /** Simulator address. */
            simulator: VersionedContract,
        }),
        fees: z.object({
            /** Fee recipient address. */
            quoteConfig: z.object({
                /** Sets a constant rate for the price oracle. Used for testing. */
                constantRate: z.optional(z.union([z.number(), z.null()])),
                /** Gas estimate configuration. */
                gas: z.optional(z.object({
                    /** Extra buffer added to Intent gas estimates. */
                    intentBuffer: z.optional(z.number()),
                    /** Extra buffer added to transaction gas estimates. */
                    txBuffer: z.optional(z.number()),
                })),
                /** The lifetime of a price rate. */
                rateTtl: z.number(),
                /** The lifetime of a fee quote. */
                ttl: z.number(),
            }),
            /** Quote configuration. */
            recipient: u.address(),
            /** Tokens the fees can be paid in. */
            tokens: z.readonly(z.array(Token.Token)),
        }),
    }));
})(wallet_getCapabilities || (wallet_getCapabilities = {}));
export var wallet_getAssets;
(function (wallet_getAssets) {
    /** Parameters  */
    const AssetType = z.union([
        z.literal('native'),
        z.literal('erc20'),
        z.literal('erc721'),
        z.string(),
    ]);
    wallet_getAssets.Parameters = z.object({
        account: u.address(),
        assetFilter: z.optional(z.record(u.hex(), z.readonly(z.array(z.object({
            address: z.union([u.address(), z.literal('native')]),
            type: AssetType,
        }))))),
        assetTypeFilter: z.optional(z.readonly(z.array(AssetType))),
        chainFilter: z.optional(z.readonly(z.array(u.number()))),
    });
    /** Request for `wallet_getAssets`. */
    wallet_getAssets.Request = z.object({
        method: z.literal('wallet_getAssets'),
        params: z.readonly(z.tuple([wallet_getAssets.Parameters])),
    });
    wallet_getAssets.Price = z.object({
        currency: z.string(),
        value: z.codec(z.string(), z.number(), {
            decode: (value) => Number(value),
            encode: (value) => String(value),
        }),
    });
    /** Response for `wallet_getAssets`. */
    wallet_getAssets.Response = z.record(z.string(), z.readonly(z.array(u.oneOf([
        z.object({
            address: u.address(),
            balance: u.bigint(),
            metadata: z.nullable(z.object({
                decimals: z.number(),
                fiat: z.nullish(wallet_getAssets.Price),
                name: z.string(),
                symbol: z.string(),
            })),
            type: z.literal('erc20'),
        }),
        z.object({
            address: z.nullable(z.literal('native')),
            balance: u.bigint(),
            metadata: z.nullable(z.object({
                decimals: z.number(),
                fiat: z.nullish(wallet_getAssets.Price),
                name: z.optional(z.string()),
                symbol: z.optional(z.string()),
            })),
            type: z.literal('native'),
        }),
    ]))));
})(wallet_getAssets || (wallet_getAssets = {}));
export var wallet_getCallsStatus;
(function (wallet_getCallsStatus) {
    wallet_getCallsStatus.Request = z.object({
        method: z.literal('wallet_getCallsStatus'),
        params: z.readonly(z.tuple([u.hex()])),
    });
    wallet_getCallsStatus.Response = z.object({
        id: z.string(),
        receipts: z.optional(z.readonly(z.array(z.object({
            blockHash: u.hex(),
            blockNumber: u.number(),
            chainId: u.number(),
            gasUsed: u.number(),
            logs: z.readonly(z.array(z.object({
                address: u.address(),
                data: u.hex(),
                topics: z.readonly(z.array(u.hex())),
            }))),
            status: u.hex(),
            transactionHash: u.hex(),
        })))),
        status: z.number(),
    });
})(wallet_getCallsStatus || (wallet_getCallsStatus = {}));
export var wallet_getKeys;
(function (wallet_getKeys) {
    /** Parameters for `wallet_getKeys` request. */
    wallet_getKeys.Parameters = z.object({
        /** The address to get the keys for. */
        address: u.address(),
        /** Target chain IDs. */
        chainIds: z.optional(z.readonly(z.array(u.number()))),
    });
    /** Request for `wallet_getKeys`. */
    wallet_getKeys.Request = z.object({
        method: z.literal('wallet_getKeys'),
        params: z.readonly(z.tuple([wallet_getKeys.Parameters])),
    });
    /** Response for `wallet_getKeys`. */
    wallet_getKeys.Response = z.record(u.hex(), c.authorizeKeys.Response);
})(wallet_getKeys || (wallet_getKeys = {}));
export var wallet_prepareCalls;
(function (wallet_prepareCalls) {
    /** Capabilities for `wallet_prepareCalls` request. */
    wallet_prepareCalls.Capabilities = z.object({
        /** Keys to authorize on the account. */
        authorizeKeys: z.optional(c.authorizeKeys.Request),
        /** Metadata for the call bundle. */
        meta: c.meta.Request,
        /** Whether the call bundle is to be considered a preCall. */
        preCall: z.optional(z.boolean()),
        /** Optional preCalls to execute before signature verification. */
        preCalls: z.optional(z.readonly(z.array(PreCall.PreCall))),
        /** Required funds on the target chain. */
        requiredFunds: z.optional(c.requiredFunds.Request),
        /** Keys to revoke on the account. */
        revokeKeys: z.optional(c.revokeKeys.Request),
    });
    /** Capabilities for `wallet_prepareCalls` response. */
    wallet_prepareCalls.ResponseCapabilities = z.object({
        /** Asset diff. */
        assetDiffs: z.optional(c.assetDiffs.Response),
        /** Keys authorized on the account. */
        authorizeKeys: z.nullish(c.authorizeKeys.Response),
        /** Digest for the fee payer. */
        feePayerDigest: z.optional(u.hex()),
        /** Fee signature. */
        feeSignature: z.optional(u.hex()),
        /** Fee totals. */
        feeTotals: z.optional(c.feeTotals.Response),
        /** Keys revoked on the account. */
        revokeKeys: z.nullish(c.revokeKeys.Response),
    });
    /** Parameters for `wallet_prepareCalls` request. */
    wallet_prepareCalls.Parameters = z.object({
        /** Capabilities for the account. */
        calls: z.readonly(z.array(Call)),
        /** The calls to prepare. */
        capabilities: wallet_prepareCalls.Capabilities,
        /** The chain ID of the call bundle. */
        chainId: u.number(),
        /** The address of the account to prepare the calls for. */
        from: z.optional(u.address()),
        /** Key that will be used to sign the call bundle. */
        key: z.optional(z.object({
            prehash: z.boolean(),
            publicKey: u.hex(),
            type: Key.Key.shape.type,
        })),
    });
    /** Request for `wallet_prepareCalls`. */
    wallet_prepareCalls.Request = z.object({
        method: z.literal('wallet_prepareCalls'),
        params: z.readonly(z.tuple([wallet_prepareCalls.Parameters])),
    });
    /** Response for `wallet_prepareCalls`. */
    wallet_prepareCalls.Response = z.object({
        /** Capabilities. */
        capabilities: wallet_prepareCalls.ResponseCapabilities,
        /** Quote for the call bundle. */
        context: z.object({
            /** Quote for the call bundle. */
            preCall: z.optional(z.partial(PreCall.Context)),
            /** The call bundle. */
            quote: z.optional(z.partial(Quotes.Signed)),
        }),
        /** Digest to sign over. */
        digest: u.hex(),
        /** Key that will be used to sign the call bundle. */
        key: z.nullish(z.object({
            prehash: z.boolean(),
            publicKey: u.hex(),
            type: Key.Key.shape.type,
        })),
        /** Signature of the response for verifying the integrity of Relay response. */
        signature: u.hex(),
        /** EIP-712 typed data digest. */
        typedData: z.object({
            domain: z.union([
                z.object({
                    chainId: z.union([u.number(), z.number()]),
                    name: z.string(),
                    verifyingContract: u.address(),
                    version: z.string(),
                }),
                z.object({}),
            ]),
            message: z.record(z.string(), z.unknown()),
            primaryType: z.string(),
            types: z.record(z.string(), z.unknown()),
        }),
    });
})(wallet_prepareCalls || (wallet_prepareCalls = {}));
export var wallet_prepareUpgradeAccount;
(function (wallet_prepareUpgradeAccount) {
    /** Capabilities for `wallet_prepareUpgradeAccount` request. */
    wallet_prepareUpgradeAccount.Capabilities = z.object({
        /** Keys to authorize on the account. */
        authorizeKeys: c.authorizeKeys.Request,
    });
    /** Parameters for `wallet_prepareUpgradeAccount` request. */
    wallet_prepareUpgradeAccount.Parameters = z.object({
        /** Address of the EOA to upgrade. */
        address: u.address(),
        /** Chain ID to initialize the account on. */
        // TODO: `u.number()`
        capabilities: wallet_prepareUpgradeAccount.Capabilities,
        /** Capabilities. */
        chainId: z.optional(z.number()),
        /** Contract address to delegate to. */
        delegation: u.address(),
    });
    /** Request for `wallet_prepareUpgradeAccount`. */
    wallet_prepareUpgradeAccount.Request = z.object({
        method: z.literal('wallet_prepareUpgradeAccount'),
        params: z.readonly(z.tuple([wallet_prepareUpgradeAccount.Parameters])),
    });
    /** Response for `wallet_prepareUpgradeAccount`. */
    wallet_prepareUpgradeAccount.Response = z.object({
        /** Capabilities. */
        capabilities: wallet_prepareUpgradeAccount.Capabilities,
        /** Chain ID to initialize the account on. */
        chainId: u.number(),
        /** Context. */
        context: z.object({
            /** Address of the EOA to upgrade. */
            address: u.address(),
            /** Unsigned authorization object to be signed by the EOA root key. */
            authorization: Authorization,
            /** Chain ID to initialize the account on. */
            chainId: u.number(),
            /** Unsigned pre-call to be signed by the EOA root key. */
            preCall: PreCall.PreCall,
        }),
        /** Digests to sign over. */
        digests: z.object({
            /** Digest of the authorization object. */
            auth: u.hex(),
            /** Digest of the pre-call. */
            exec: u.hex(),
        }),
        /** EIP-712 typed data digest. */
        typedData: z.object({
            domain: z.union([
                z.object({
                    chainId: z.union([u.number(), z.number()]),
                    name: z.string(),
                    verifyingContract: u.address(),
                    version: z.string(),
                }),
                z.object({}),
            ]),
            message: z.record(z.string(), z.unknown()),
            primaryType: z.string(),
            types: z.record(z.string(), z.unknown()),
        }),
    });
})(wallet_prepareUpgradeAccount || (wallet_prepareUpgradeAccount = {}));
export var wallet_feeTokens;
(function (wallet_feeTokens) {
    /** Request for `wallet_feeTokens`. */
    wallet_feeTokens.Request = z.object({
        method: z.literal('wallet_feeTokens'),
        params: z.optional(z.undefined()),
    });
    /** Response for `wallet_feeTokens`. */
    wallet_feeTokens.Response = z.record(u.hex(), z.readonly(z.array(z.object({
        address: u.address(),
        decimals: z.number(),
        nativeRate: z.optional(u.bigint()),
        symbol: z.string(),
    }))));
})(wallet_feeTokens || (wallet_feeTokens = {}));
export var wallet_sendPreparedCalls;
(function (wallet_sendPreparedCalls) {
    /** Parameters for `wallet_sendPreparedCalls` request. */
    wallet_sendPreparedCalls.Parameters = z.object({
        /** Capabilities. */
        capabilities: z.optional(z.object({
            /** Fee signature. */
            feeSignature: z.optional(u.hex()),
        })),
        /** Quote for the call bundle. */
        context: z.object({
            /** The call bundle. */
            preCall: z.optional(z.partial(PreCall.Context)),
            /** Quote for the call bundle. */
            quote: z.optional(z.partial(Quotes.Signed)),
        }),
        /** Key that was used to sign the call bundle. */
        key: z.optional(z.object({
            prehash: z.boolean(),
            publicKey: u.hex(),
            type: Key.Key.shape.type,
        })),
        /** Signature. */
        signature: u.hex(),
    });
    /** Request for `wallet_sendPreparedCalls`. */
    wallet_sendPreparedCalls.Request = z.object({
        method: z.literal('wallet_sendPreparedCalls'),
        params: z.readonly(z.tuple([wallet_sendPreparedCalls.Parameters])),
    });
    /** Response for `wallet_sendPreparedCalls`. */
    wallet_sendPreparedCalls.Response = z.object({
        /** The ID of the call bundle. */
        id: u.hex(),
    });
})(wallet_sendPreparedCalls || (wallet_sendPreparedCalls = {}));
export var wallet_upgradeAccount;
(function (wallet_upgradeAccount) {
    wallet_upgradeAccount.Parameters = z.object({
        /** Context. */
        context: z.object({
            /** Address of the EOA to upgrade. */
            address: u.address(),
            /** Unsigned authorization object to be signed by the EOA root key. */
            authorization: Authorization,
            /** Chain ID to initialize the account on. */
            chainId: u.number(),
            /** Unsigned pre-call to be signed by the EOA root key. */
            preCall: PreCall.PreCall,
        }),
        /** Signatures of the `wallet_prepareUpgradeAccount` digests. */
        signatures: z.object({
            auth: u.hex(),
            exec: u.hex(),
        }),
    });
    /** Request for `wallet_sendPreparedCalls`. */
    wallet_upgradeAccount.Request = z.object({
        method: z.literal('wallet_upgradeAccount'),
        params: z.readonly(z.tuple([wallet_upgradeAccount.Parameters])),
    });
    wallet_upgradeAccount.Response = z.undefined();
})(wallet_upgradeAccount || (wallet_upgradeAccount = {}));
export var wallet_verifySignature;
(function (wallet_verifySignature) {
    wallet_verifySignature.Parameters = z.object({
        /** Account address. */
        address: u.hex(),
        /** Chain ID of the account with the given key configured. */
        chainId: u.number(),
        /** Digest of the message to verify. */
        digest: u.hex(),
        /** Signature to verify. */
        signature: u.hex(),
    });
    /** Request for `wallet_verifySignature`. */
    wallet_verifySignature.Request = z.object({
        method: z.literal('wallet_verifySignature'),
        params: z.readonly(z.tuple([wallet_verifySignature.Parameters])),
    });
    /** Response for `wallet_verifySignature`. */
    wallet_verifySignature.Response = z.object({
        /** Proof that can be used to verify the signature. */
        proof: z.nullish(z.object({
            /** Address of an account (either delegated or stored) that the signature was verified against. */
            account: u.address(),
            /** Initialization precall. Provided, if account is a stored account which has not been delegated. */
            initPreCall: z.nullish(PreCall.PreCall),
            /** The key hash that signed the digest. */
            keyHash: u.hex(),
        })),
        /** Whether the signature is valid. */
        valid: z.boolean(),
    });
})(wallet_verifySignature || (wallet_verifySignature = {}));
//# sourceMappingURL=rpc.js.map