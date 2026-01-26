export declare const abi: readonly [{
    readonly type: "function";
    readonly name: "fund";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "digest";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "transfers";
        readonly type: "tuple[]";
        readonly internalType: "struct ICommon.Transfer[]";
        readonly components: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly name: "funderSignature";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const code: "0x";
//# sourceMappingURL=IFunderV4.d.ts.map