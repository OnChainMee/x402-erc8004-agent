export declare const abi: readonly [{
    readonly type: "function";
    readonly name: "escrow";
    readonly inputs: readonly [{
        readonly name: "_escrows";
        readonly type: "tuple[]";
        readonly internalType: "struct IEscrow.Escrow[]";
        readonly components: readonly [{
            readonly name: "salt";
            readonly type: "bytes12";
            readonly internalType: "bytes12";
        }, {
            readonly name: "depositor";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "escrowAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "refundAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "refundTimestamp";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "settler";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "sender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "settlementId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "senderChainId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "refundDepositor";
    readonly inputs: readonly [{
        readonly name: "escrowIds";
        readonly type: "bytes32[]";
        readonly internalType: "bytes32[]";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "refundRecipient";
    readonly inputs: readonly [{
        readonly name: "escrowIds";
        readonly type: "bytes32[]";
        readonly internalType: "bytes32[]";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "settle";
    readonly inputs: readonly [{
        readonly name: "escrowIds";
        readonly type: "bytes32[]";
        readonly internalType: "bytes32[]";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const code: "0x";
//# sourceMappingURL=IEscrow.d.ts.map