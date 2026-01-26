export declare const abi: readonly [{
    readonly type: "function";
    readonly name: "allowInitializePath";
    readonly inputs: readonly [{
        readonly name: "_origin";
        readonly type: "tuple";
        readonly internalType: "struct Origin";
        readonly components: readonly [{
            readonly name: "srcEid";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "sender";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "isComposeMsgSender";
    readonly inputs: readonly [{
        readonly name: "_origin";
        readonly type: "tuple";
        readonly internalType: "struct Origin";
        readonly components: readonly [{
            readonly name: "srcEid";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "sender";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
    }, {
        readonly name: "_message";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "_sender";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "isSender";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "lzReceive";
    readonly inputs: readonly [{
        readonly name: "_origin";
        readonly type: "tuple";
        readonly internalType: "struct Origin";
        readonly components: readonly [{
            readonly name: "srcEid";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }, {
            readonly name: "sender";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }];
    }, {
        readonly name: "_guid";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "_message";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "_executor";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_extraData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "nextNonce";
    readonly inputs: readonly [{
        readonly name: "_eid";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }, {
        readonly name: "_sender";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}];
export declare const code: "0x";
//# sourceMappingURL=IOAppReceiver.d.ts.map