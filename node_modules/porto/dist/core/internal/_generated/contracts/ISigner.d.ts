export declare const abi: readonly [{
    readonly type: "function";
    readonly name: "isValidSignatureWithKeyHash";
    readonly inputs: readonly [{
        readonly name: "digest";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "signature";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "magicValue";
        readonly type: "bytes4";
        readonly internalType: "bytes4";
    }];
    readonly stateMutability: "view";
}];
export declare const code: "0x";
//# sourceMappingURL=ISigner.d.ts.map