export declare const abi: readonly [{
    readonly type: "function";
    readonly name: "checkAndIncrementNonce";
    readonly inputs: readonly [{
        readonly name: "nonce";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "getContextKeyHash";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getNonce";
    readonly inputs: readonly [{
        readonly name: "seqKey";
        readonly type: "uint192";
        readonly internalType: "uint192";
    }];
    readonly outputs: readonly [{
        readonly name: "nonce";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "pay";
    readonly inputs: readonly [{
        readonly name: "paymentAmount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "intentDigest";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "encodedIntent";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "unwrapAndValidateSignature";
    readonly inputs: readonly [{
        readonly name: "digest";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "signature";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "isValid";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}];
export declare const code: "0x";
//# sourceMappingURL=IIthacaAccount.d.ts.map