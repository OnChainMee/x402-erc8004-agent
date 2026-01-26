export declare const abi: readonly [{
    readonly type: "function";
    readonly name: "execute";
    readonly inputs: readonly [{
        readonly name: "encodedIntent";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "err";
        readonly type: "bytes4";
        readonly internalType: "bytes4";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "execute";
    readonly inputs: readonly [{
        readonly name: "encodedIntents";
        readonly type: "bytes[]";
        readonly internalType: "bytes[]";
    }];
    readonly outputs: readonly [{
        readonly name: "errs";
        readonly type: "bytes4[]";
        readonly internalType: "bytes4[]";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "simulateExecute";
    readonly inputs: readonly [{
        readonly name: "isStateOverride";
        readonly type: "bool";
        readonly internalType: "bool";
    }, {
        readonly name: "combinedGasOverride";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "encodedIntent";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "gasUsed";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "withdrawTokens";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "recipient";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const code: "0x";
//# sourceMappingURL=IOrchestrator.d.ts.map