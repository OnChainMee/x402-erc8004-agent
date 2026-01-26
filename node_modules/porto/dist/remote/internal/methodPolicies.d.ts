export type MethodPolicy = {
    method: string;
    modes?: {
        headless?: true | {
            sameOrigin?: boolean | undefined;
        } | undefined;
        dialog?: true | {
            sameOrigin?: boolean | undefined;
        } | undefined;
    } | undefined;
    requireConnection?: boolean | undefined;
};
export type MethodPolicies = readonly MethodPolicy[];
export declare const methodPolicies: readonly [{
    readonly method: "eth_requestAccounts";
    readonly modes: {
        readonly dialog: true;
        readonly headless: {
            readonly sameOrigin: true;
        };
    };
    readonly requireConnection: false;
}, {
    readonly method: "wallet_getAccountVersion";
    readonly modes: {
        readonly headless: true;
    };
}, {
    readonly method: "wallet_getKeys";
    readonly modes: {
        readonly headless: true;
    };
}, {
    readonly method: "wallet_getPermissions";
    readonly modes: {
        readonly headless: true;
    };
}, {
    readonly method: "wallet_grantAdmin";
    readonly modes: {
        readonly dialog: {
            readonly sameOrigin: true;
        };
    };
}, {
    readonly method: "wallet_revokeAdmin";
    readonly modes: {
        readonly dialog: {
            readonly sameOrigin: true;
        };
    };
}, {
    readonly method: "wallet_upgradeAccount";
    readonly modes: {
        readonly headless: true;
    };
}, {
    readonly method: "wallet_connect";
    readonly modes: {
        readonly dialog: true;
        readonly headless: {
            sameOrigin: true;
        } | undefined;
    };
    readonly requireConnection: false;
}, {
    readonly method: "wallet_getAssets";
    readonly modes: {
        readonly headless: true;
    };
}, {
    readonly method: "wallet_getCallsStatus";
    readonly modes: {
        readonly headless: true;
    };
}, {
    readonly method: "wallet_getCapabilities";
    readonly modes: {
        readonly headless: true;
    };
}, {
    readonly method: "wallet_prepareCalls";
    readonly modes: {
        readonly headless: true;
    };
}, {
    readonly method: "wallet_sendPreparedCalls";
    readonly modes: {
        readonly headless: true;
    };
}, {
    readonly method: "wallet_switchEthereumChain";
    readonly modes: {
        readonly headless: true;
    };
}];
//# sourceMappingURL=methodPolicies.d.ts.map