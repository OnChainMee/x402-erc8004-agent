export declare const abi: readonly [{
    readonly type: "function";
    readonly name: "allowInitializePath";
    readonly inputs: readonly [{
        readonly name: "origin";
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
    readonly name: "endpoint";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract ILayerZeroEndpointV2";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "isComposeMsgSender";
    readonly inputs: readonly [{
        readonly name: "";
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
        readonly name: "";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "_sender";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
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
        readonly name: "";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }, {
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "nonce";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "oAppVersion";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "senderVersion";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }, {
        readonly name: "receiverVersion";
        readonly type: "uint64";
        readonly internalType: "uint64";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "owner";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "peers";
    readonly inputs: readonly [{
        readonly name: "_eid";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
    readonly outputs: readonly [{
        readonly name: "peer";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "renounceOwnership";
    readonly inputs: readonly [];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setDelegate";
    readonly inputs: readonly [{
        readonly name: "_delegate";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setEndpoint";
    readonly inputs: readonly [{
        readonly name: "_endpoint";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setPeer";
    readonly inputs: readonly [{
        readonly name: "_eid";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }, {
        readonly name: "_peer";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "transferOwnership";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "OwnershipTransferred";
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "newOwner";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "PeerSet";
    readonly inputs: readonly [{
        readonly name: "eid";
        readonly type: "uint32";
        readonly indexed: false;
        readonly internalType: "uint32";
    }, {
        readonly name: "peer";
        readonly type: "bytes32";
        readonly indexed: false;
        readonly internalType: "bytes32";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "InvalidDelegate";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "InvalidEndpointCall";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "LzTokenUnavailable";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NoPeer";
    readonly inputs: readonly [{
        readonly name: "eid";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }];
}, {
    readonly type: "error";
    readonly name: "NotEnoughNative";
    readonly inputs: readonly [{
        readonly name: "msgValue";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
}, {
    readonly type: "error";
    readonly name: "OnlyEndpoint";
    readonly inputs: readonly [{
        readonly name: "addr";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "OnlyPeer";
    readonly inputs: readonly [{
        readonly name: "eid";
        readonly type: "uint32";
        readonly internalType: "uint32";
    }, {
        readonly name: "sender";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
}, {
    readonly type: "error";
    readonly name: "OwnableInvalidOwner";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "OwnableUnauthorizedAccount";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly type: "address";
        readonly internalType: "address";
    }];
}];
export declare const code: "0x";
//# sourceMappingURL=OApp.d.ts.map