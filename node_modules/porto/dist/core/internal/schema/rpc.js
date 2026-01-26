import * as z from 'zod/mini';
import * as Quotes from '../relay/schema/quotes.js';
import * as Rpc_relay from '../relay/schema/rpc.js';
import * as C from './capabilities.js';
import * as Key from './key.js';
import * as Permissions from './permissions.js';
import * as u from './utils.js';
const KeyWithCredentialId = z.object({
    ...z.pick(Key.Base, { id: true, publicKey: true, type: true }).shape,
    credentialId: z.optional(z.string()),
    privateKey: z.optional(z.any()),
});
export var account_getOnrampContactInfo;
(function (account_getOnrampContactInfo) {
    account_getOnrampContactInfo.Parameters = z.object({
        address: u.address(),
        secret: z.string(),
    });
    account_getOnrampContactInfo.Request = z.object({
        method: z.literal('account_getOnrampContactInfo'),
        params: z.readonly(z.tuple([account_getOnrampContactInfo.Parameters])),
    });
    account_getOnrampContactInfo.Response = z.object({
        email: z.optional(z.string()),
        phone: z.optional(z.string()),
        phoneVerifiedAt: z.optional(z.number()),
    });
})(account_getOnrampContactInfo || (account_getOnrampContactInfo = {}));
export var account_onrampStatus;
(function (account_onrampStatus) {
    account_onrampStatus.Parameters = z.object({
        address: u.address(),
    });
    account_onrampStatus.Request = z.object({
        method: z.literal('account_onrampStatus'),
        params: z.readonly(z.tuple([account_onrampStatus.Parameters])),
    });
    account_onrampStatus.Response = z.object({
        email: z.optional(z.number()),
        phone: z.optional(z.number()),
    });
})(account_onrampStatus || (account_onrampStatus = {}));
export var account_resendVerifyPhone;
(function (account_resendVerifyPhone) {
    account_resendVerifyPhone.Parameters = z.object({
        email: z.string(),
        walletAddress: u.address(),
    });
    account_resendVerifyPhone.Request = z.object({
        method: z.literal('account_resendVerifyPhone'),
        params: z.readonly(z.tuple([account_resendVerifyPhone.Parameters])),
    });
    account_resendVerifyPhone.Response = z.null();
})(account_resendVerifyPhone || (account_resendVerifyPhone = {}));
export var account_setEmail;
(function (account_setEmail) {
    account_setEmail.Parameters = z.object({
        email: z.string(),
        walletAddress: u.address(),
    });
    account_setEmail.Request = z.object({
        method: z.literal('account_setEmail'),
        params: z.readonly(z.tuple([account_setEmail.Parameters])),
    });
    account_setEmail.Response = z.null();
})(account_setEmail || (account_setEmail = {}));
export var account_setPhone;
(function (account_setPhone) {
    account_setPhone.Parameters = z.object({
        email: z.string(),
        walletAddress: u.address(),
    });
    account_setPhone.Request = z.object({
        method: z.literal('account_setPhone'),
        params: z.readonly(z.tuple([account_setPhone.Parameters])),
    });
    account_setPhone.Response = z.null();
})(account_setPhone || (account_setPhone = {}));
export var account_verifyEmail;
(function (account_verifyEmail) {
    account_verifyEmail.Parameters = z.object({
        chainId: u.number(),
        email: z.string(),
        token: z.string(),
        walletAddress: u.address(),
    });
    account_verifyEmail.Request = z.object({
        method: z.literal('account_verifyEmail'),
        params: z.readonly(z.tuple([account_verifyEmail.Parameters])),
    });
    account_verifyEmail.Response = z.null();
})(account_verifyEmail || (account_verifyEmail = {}));
export var account_verifyPhone;
(function (account_verifyPhone) {
    account_verifyPhone.Parameters = z.object({
        code: z.string(),
        phone: z.string(),
        walletAddress: u.address(),
    });
    account_verifyPhone.Request = z.object({
        method: z.literal('account_verifyPhone'),
        params: z.readonly(z.tuple([account_verifyPhone.Parameters])),
    });
    account_verifyPhone.Response = z.null();
})(account_verifyPhone || (account_verifyPhone = {}));
export var wallet_addFunds;
(function (wallet_addFunds) {
    wallet_addFunds.Parameters = z.object({
        address: z.optional(u.address()),
        chainId: z.optional(u.number()),
        token: z.optional(u.address()),
        value: z.optional(z.string()),
    });
    wallet_addFunds.Request = z.object({
        method: z.literal('wallet_addFunds'),
        params: z.readonly(z.tuple([wallet_addFunds.Parameters])),
    });
    wallet_addFunds.Response = z.object({
        id: u.hex(),
    });
})(wallet_addFunds || (wallet_addFunds = {}));
export var eth_accounts;
(function (eth_accounts) {
    eth_accounts.Request = z.object({
        method: z.literal('eth_accounts'),
        params: z.optional(z.unknown()),
    });
    eth_accounts.Response = z.readonly(z.array(u.address()));
})(eth_accounts || (eth_accounts = {}));
export var eth_chainId;
(function (eth_chainId) {
    eth_chainId.Request = z.object({
        method: z.literal('eth_chainId'),
        params: z.optional(z.unknown()),
    });
    eth_chainId.Response = u.hex();
})(eth_chainId || (eth_chainId = {}));
export var eth_requestAccounts;
(function (eth_requestAccounts) {
    eth_requestAccounts.Request = z.object({
        method: z.literal('eth_requestAccounts'),
        params: z.optional(z.unknown()),
    });
    eth_requestAccounts.Response = z.readonly(z.array(u.address()));
})(eth_requestAccounts || (eth_requestAccounts = {}));
export var eth_sendTransaction;
(function (eth_sendTransaction) {
    eth_sendTransaction.Request = z.object({
        method: z.literal('eth_sendTransaction'),
        params: z.readonly(z.tuple([
            z.object({
                capabilities: z.optional(z.object({
                    feeToken: z.optional(C.feeToken.Request),
                    merchantUrl: z.optional(C.merchantUrl.Request),
                    preCalls: z.optional(C.preCalls.Request),
                })),
                chainId: z.optional(u.number()),
                data: z.optional(u.hex()),
                from: z.optional(u.address()),
                to: u.address(),
                value: z.optional(u.bigint()),
            }),
        ])),
    });
    eth_sendTransaction.Response = u.hex();
})(eth_sendTransaction || (eth_sendTransaction = {}));
export var eth_signTypedData_v4;
(function (eth_signTypedData_v4) {
    eth_signTypedData_v4.Request = z.object({
        method: z.literal('eth_signTypedData_v4'),
        params: z.readonly(z.tuple([u.address(), z.string()])),
    });
    eth_signTypedData_v4.Response = u.hex();
})(eth_signTypedData_v4 || (eth_signTypedData_v4 = {}));
export var wallet_getAdmins;
(function (wallet_getAdmins) {
    wallet_getAdmins.Parameters = z.object({
        address: z.optional(u.address()),
        chainId: z.optional(u.number()),
    });
    wallet_getAdmins.Request = z.object({
        method: z.literal('wallet_getAdmins'),
        params: z.optional(z.readonly(z.tuple([wallet_getAdmins.Parameters]))),
    });
    wallet_getAdmins.Key = KeyWithCredentialId;
    wallet_getAdmins.Response = z.object({
        address: u.address(),
        chainId: u.number(),
        keys: z.readonly(z.array(wallet_getAdmins.Key)),
    });
})(wallet_getAdmins || (wallet_getAdmins = {}));
export var wallet_grantAdmin;
(function (wallet_grantAdmin) {
    wallet_grantAdmin.Capabilities = z.object({
        feeToken: z.optional(C.feeToken.Request),
    });
    wallet_grantAdmin.Parameters = z.object({
        /** Address of the account to authorize the admin for. */
        address: z.optional(u.address()),
        /** Capabilities. */
        capabilities: z.optional(wallet_grantAdmin.Capabilities),
        /** Chain ID. */
        chainId: z.optional(u.number()),
        /** Admin Key to authorize. */
        key: z.pick(Key.Base, { publicKey: true, type: true }),
    });
    wallet_grantAdmin.Request = z.object({
        method: z.literal('wallet_grantAdmin'),
        params: z.readonly(z.tuple([wallet_grantAdmin.Parameters])),
    });
    wallet_grantAdmin.Response = z.object({
        address: u.address(),
        chainId: u.number(),
        key: wallet_getAdmins.Key,
    });
})(wallet_grantAdmin || (wallet_grantAdmin = {}));
export var wallet_grantPermissions;
(function (wallet_grantPermissions) {
    wallet_grantPermissions.Parameters = Permissions.Request;
    wallet_grantPermissions.Request = z.object({
        method: z.literal('wallet_grantPermissions'),
        params: z.readonly(z.tuple([wallet_grantPermissions.Parameters])),
    });
    wallet_grantPermissions.ResponseCapabilities = z.object({
        preCalls: z.optional(C.preCalls.Response),
    });
    wallet_grantPermissions.Response = z.object({
        ...Permissions.Permissions.shape,
        capabilities: z.optional(z.any()),
    });
})(wallet_grantPermissions || (wallet_grantPermissions = {}));
export var wallet_getAccountVersion;
(function (wallet_getAccountVersion) {
    wallet_getAccountVersion.Parameters = z.object({
        address: z.optional(u.address()),
    });
    wallet_getAccountVersion.Request = z.object({
        method: z.literal('wallet_getAccountVersion'),
        params: z.optional(z.readonly(z.tuple([wallet_getAccountVersion.Parameters]))),
    });
    wallet_getAccountVersion.Response = z.object({
        current: z.string(),
        latest: z.string(),
    });
})(wallet_getAccountVersion || (wallet_getAccountVersion = {}));
export var wallet_getPermissions;
(function (wallet_getPermissions) {
    wallet_getPermissions.Parameters = z.object({
        address: z.optional(u.address()),
        chainIds: z.optional(z.readonly(z.array(u.number()))),
    });
    wallet_getPermissions.Request = z.object({
        method: z.literal('wallet_getPermissions'),
        params: z.optional(z.readonly(z.tuple([wallet_getPermissions.Parameters]))),
    });
    wallet_getPermissions.Response = C.permissions.Response;
})(wallet_getPermissions || (wallet_getPermissions = {}));
export var wallet_revokeAdmin;
(function (wallet_revokeAdmin) {
    wallet_revokeAdmin.Capabilities = z.object({
        feeToken: z.optional(C.feeToken.Request),
    });
    wallet_revokeAdmin.Parameters = z.object({
        address: z.optional(u.address()),
        capabilities: z.optional(wallet_revokeAdmin.Capabilities),
        chainId: z.optional(u.number()),
        id: u.hex(),
    });
    wallet_revokeAdmin.Request = z.object({
        method: z.literal('wallet_revokeAdmin'),
        params: z.readonly(z.tuple([wallet_revokeAdmin.Parameters])),
    });
    wallet_revokeAdmin.Response = undefined;
})(wallet_revokeAdmin || (wallet_revokeAdmin = {}));
export var wallet_revokePermissions;
(function (wallet_revokePermissions) {
    wallet_revokePermissions.Capabilities = z.object({
        feeToken: z.optional(C.feeToken.Request),
    });
    wallet_revokePermissions.Parameters = z.object({
        address: z.optional(u.address()),
        capabilities: z.optional(wallet_revokePermissions.Capabilities),
        id: u.hex(),
    });
    wallet_revokePermissions.Request = z.object({
        method: z.literal('wallet_revokePermissions'),
        params: z.readonly(z.tuple([wallet_revokePermissions.Parameters])),
    });
    wallet_revokePermissions.Response = undefined;
})(wallet_revokePermissions || (wallet_revokePermissions = {}));
export var wallet_switchEthereumChain;
(function (wallet_switchEthereumChain) {
    wallet_switchEthereumChain.Request = z.object({
        method: z.literal('wallet_switchEthereumChain'),
        params: z.readonly(z.tuple([
            z.object({
                chainId: u.hex(),
            }),
        ])),
    });
})(wallet_switchEthereumChain || (wallet_switchEthereumChain = {}));
export var wallet_upgradeAccount;
(function (wallet_upgradeAccount) {
    wallet_upgradeAccount.Parameters = z.object({
        context: z.unknown(),
        signatures: z.object({
            auth: u.hex(),
            exec: u.hex(),
        }),
    });
    wallet_upgradeAccount.Request = z.object({
        method: z.literal('wallet_upgradeAccount'),
        params: z.readonly(z.tuple([wallet_upgradeAccount.Parameters])),
    });
    wallet_upgradeAccount.ResponseCapabilities = z.object({
        admins: z.optional(z.readonly(z.array(wallet_getAdmins.Key))),
        permissions: z.optional(C.permissions.Response),
    });
    wallet_upgradeAccount.Response = z.object({
        address: u.address(),
        capabilities: z.optional(wallet_upgradeAccount.ResponseCapabilities),
    });
})(wallet_upgradeAccount || (wallet_upgradeAccount = {}));
export var personal_sign;
(function (personal_sign) {
    personal_sign.Request = z.object({
        method: z.literal('personal_sign'),
        params: z.readonly(z.tuple([u.hex(), u.address()])),
    });
    personal_sign.Response = u.hex();
})(personal_sign || (personal_sign = {}));
export var porto_ping;
(function (porto_ping) {
    porto_ping.Request = z.object({
        method: z.literal('porto_ping'),
        params: z.optional(z.undefined()),
    });
    porto_ping.Response = z.literal('pong');
})(porto_ping || (porto_ping = {}));
export var wallet_connect;
(function (wallet_connect) {
    wallet_connect.Capabilities = z.object({
        createAccount: z.optional(C.createAccount.Request),
        email: z.optional(z.boolean()),
        grantAdmins: z.optional(z.readonly(z.array(z.pick(Key.Base, { publicKey: true, type: true })))),
        grantPermissions: z.optional(C.grantPermissions.Request),
        preCalls: z.optional(C.preCalls.Request),
        selectAccount: z.optional(z.union([
            z.boolean(),
            z.object({
                address: u.address(),
                key: z.optional(z.object({
                    credentialId: z.optional(z.string()),
                    publicKey: u.hex(),
                })),
            }),
        ])),
        signInWithEthereum: z.optional(C.signInWithEthereum.Request),
    });
    wallet_connect.Parameters = z.object({
        capabilities: z.optional(wallet_connect.Capabilities),
        chainIds: z.optional(z.readonly(z.array(u.number()))),
    });
    wallet_connect.Request = z.object({
        method: z.literal('wallet_connect'),
        params: z.optional(z.readonly(z.tuple([wallet_connect.Parameters]))),
    });
    wallet_connect.ResponseCapabilities = z.object({
        admins: z.optional(z.readonly(z.array(z.object({
            ...z.pick(Key.Base, { id: true, publicKey: true, type: true })
                .shape,
            credentialId: z.optional(z.string()),
        })))),
        permissions: z.optional(C.permissions.Response),
        preCalls: z.optional(C.preCalls.Response),
        signInWithEthereum: z.optional(C.signInWithEthereum.Response),
    });
    wallet_connect.Response = z.object({
        accounts: z.readonly(z.array(z.object({
            address: u.address(),
            capabilities: z.optional(wallet_connect.ResponseCapabilities),
        }))),
        chainIds: z.readonly(z.array(u.number())),
    });
})(wallet_connect || (wallet_connect = {}));
export var wallet_disconnect;
(function (wallet_disconnect) {
    wallet_disconnect.Request = z.object({
        method: z.literal('wallet_disconnect'),
        params: z.optional(z.unknown()),
    });
    wallet_disconnect.Response = undefined;
})(wallet_disconnect || (wallet_disconnect = {}));
export var wallet_getAssets;
(function (wallet_getAssets) {
    /** Parameters  */
    wallet_getAssets.Parameters = Rpc_relay.wallet_getAssets.Parameters;
    /** Request for `wallet_getAssets`. */
    wallet_getAssets.Request = Rpc_relay.wallet_getAssets.Request;
    /** Response for `wallet_getAssets`. */
    wallet_getAssets.Response = Rpc_relay.wallet_getAssets.Response;
})(wallet_getAssets || (wallet_getAssets = {}));
export var wallet_getCallsStatus;
(function (wallet_getCallsStatus) {
    wallet_getCallsStatus.Request = z.object({
        method: z.literal('wallet_getCallsStatus'),
        params: z.tuple([u.hex()]),
    });
    wallet_getCallsStatus.Response = z.object({
        atomic: z.boolean(),
        chainId: u.number(),
        id: z.string(),
        receipts: z.optional(z.readonly(z.array(z.object({
            blockHash: u.hex(),
            blockNumber: u.hex(),
            gasUsed: u.hex(),
            logs: z.readonly(z.array(z.object({
                address: u.address(),
                data: u.hex(),
                topics: z.readonly(z.array(u.hex())),
            }))),
            status: u.hex(),
            transactionHash: u.hex(),
        })))),
        status: z.number(),
        version: z.string(),
    });
})(wallet_getCallsStatus || (wallet_getCallsStatus = {}));
export var wallet_getCapabilities;
(function (wallet_getCapabilities) {
    wallet_getCapabilities.Request = z.object({
        method: z.literal('wallet_getCapabilities'),
        params: z.optional(z.union([
            z.readonly(z.tuple([z.union([u.hex(), z.undefined()])])),
            z.readonly(z.tuple([
                z.union([u.hex(), z.undefined()]),
                z.readonly(z.array(u.number())),
            ])),
        ])),
    });
    wallet_getCapabilities.Response = z.record(u.hex(), z.object({
        atomic: C.atomic.GetCapabilitiesResponse,
        feeToken: C.feeToken.GetCapabilitiesResponse,
        merchant: C.merchant.GetCapabilitiesResponse,
        permissions: C.permissions.GetCapabilitiesResponse,
        requiredFunds: C.requiredFunds.GetCapabilitiesResponse,
    }));
})(wallet_getCapabilities || (wallet_getCapabilities = {}));
export var wallet_getKeys;
(function (wallet_getKeys) {
    wallet_getKeys.Parameters = z.object({
        address: u.address(),
        chainIds: z.optional(z.readonly(z.array(u.number()))),
    });
    wallet_getKeys.Request = z.object({
        method: z.literal('wallet_getKeys'),
        params: z.readonly(z.tuple([wallet_getKeys.Parameters])),
    });
    wallet_getKeys.Response = z.readonly(z.array(Key.WithPermissions));
})(wallet_getKeys || (wallet_getKeys = {}));
export var wallet_prepareCalls;
(function (wallet_prepareCalls) {
    wallet_prepareCalls.Capabilities = z.object({
        feeToken: z.optional(C.feeToken.Request),
        merchantUrl: z.optional(C.merchantUrl.Request),
        permissions: z.optional(C.permissions.Request),
        preCalls: z.optional(C.preCalls.Request),
        requiredFunds: z.optional(C.requiredFunds.Request),
    });
    wallet_prepareCalls.Parameters = z.object({
        calls: z.readonly(z.array(z.object({
            data: z.optional(u.hex()),
            to: u.address(),
            value: z.optional(u.bigint()),
        }))),
        capabilities: z.optional(wallet_prepareCalls.Capabilities),
        chainId: z.optional(u.number()),
        from: z.optional(u.address()),
        key: z.optional(z.pick(Key.Base, { prehash: true, publicKey: true, type: true })),
        version: z.optional(z.string()),
    });
    wallet_prepareCalls.Request = z.object({
        method: z.literal('wallet_prepareCalls'),
        params: z.readonly(z.tuple([wallet_prepareCalls.Parameters])),
    });
    wallet_prepareCalls.Response = z.object({
        capabilities: z.optional(z.object({
            ...Rpc_relay.wallet_prepareCalls.ResponseCapabilities.shape,
            quote: z.optional(Quotes.Signed),
        })),
        chainId: u.hex(),
        context: z.object({
            account: z.object({
                address: u.address(),
            }),
            calls: wallet_prepareCalls.Parameters.shape.calls,
            nonce: u.bigint(),
            quote: z.optional(z.partial(Quotes.Signed)),
        }),
        digest: u.hex(),
        key: z.pick(Key.Base, { prehash: true, publicKey: true, type: true }),
        typedData: z.object({
            domain: z.union([
                z.object({
                    chainId: u.number(),
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
    wallet_prepareUpgradeAccount.Capabilities = z.object({
        ...wallet_connect.Capabilities.shape,
        label: z.optional(z.string()),
    });
    wallet_prepareUpgradeAccount.Parameters = z.object({
        address: u.address(),
        capabilities: z.optional(wallet_prepareUpgradeAccount.Capabilities),
        chainId: z.optional(u.number()),
    });
    wallet_prepareUpgradeAccount.Request = z.object({
        method: z.literal('wallet_prepareUpgradeAccount'),
        params: z.readonly(z.tuple([wallet_prepareUpgradeAccount.Parameters])),
    });
    wallet_prepareUpgradeAccount.Response = z.object({
        context: z.unknown(),
        digests: z.object({
            auth: u.hex(),
            exec: u.hex(),
        }),
    });
})(wallet_prepareUpgradeAccount || (wallet_prepareUpgradeAccount = {}));
export var wallet_sendCalls;
(function (wallet_sendCalls) {
    wallet_sendCalls.Capabilities = wallet_prepareCalls.Capabilities;
    wallet_sendCalls.Request = z.object({
        method: z.literal('wallet_sendCalls'),
        params: z.readonly(z.tuple([z.omit(wallet_prepareCalls.Parameters, { key: true })])),
    });
    wallet_sendCalls.Response = z.object({
        id: u.hex(),
    });
})(wallet_sendCalls || (wallet_sendCalls = {}));
export var wallet_sendPreparedCalls;
(function (wallet_sendPreparedCalls) {
    wallet_sendPreparedCalls.Parameters = z.object({
        capabilities: wallet_prepareCalls.Response.shape.capabilities,
        chainId: u.hex(),
        context: wallet_prepareCalls.Response.shape.context,
        key: wallet_prepareCalls.Response.shape.key,
        signature: u.hex(),
    });
    wallet_sendPreparedCalls.Request = z.object({
        method: z.literal('wallet_sendPreparedCalls'),
        params: z.readonly(z.tuple([wallet_sendPreparedCalls.Parameters])),
    });
    wallet_sendPreparedCalls.Response = z.readonly(z.array(z.object({
        capabilities: z.optional(z.record(z.string(), z.unknown())),
        id: u.hex(),
    })));
})(wallet_sendPreparedCalls || (wallet_sendPreparedCalls = {}));
export var wallet_verifySignature;
(function (wallet_verifySignature) {
    wallet_verifySignature.Parameters = z.object({
        /** Address of the account. */
        address: u.address(),
        /** Chain ID. */
        chainId: z.optional(u.number()),
        /** Digest to verify. */
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
        /** Address of the account. */
        address: u.address(),
        /** Chain ID. */
        chainId: u.number(),
        /** Proof that can be used to verify the signature. */
        proof: z.optional(z.unknown()),
        /** Whether the signature is valid. */
        valid: z.boolean(),
    });
})(wallet_verifySignature || (wallet_verifySignature = {}));
//# sourceMappingURL=rpc.js.map