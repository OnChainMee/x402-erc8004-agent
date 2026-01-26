export declare const abi: readonly [{
    readonly type: "function";
    readonly name: "read";
    readonly inputs: readonly [{
        readonly name: "settlementId";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "attester";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "chainId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [{
        readonly name: "isSettled";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "send";
    readonly inputs: readonly [{
        readonly name: "settlementId";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "settlerContext";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}];
export declare const code: "0x";
//# sourceMappingURL=ISettler.d.ts.map