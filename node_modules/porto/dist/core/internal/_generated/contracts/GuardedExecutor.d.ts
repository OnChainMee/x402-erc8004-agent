export declare const abi: readonly [{
    readonly type: "fallback";
    readonly stateMutability: "payable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "ANY_FN_SEL";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes4";
        readonly internalType: "bytes4";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "ANY_KEYHASH";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "ANY_TARGET";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "EMPTY_CALLDATA_FN_SEL";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes4";
        readonly internalType: "bytes4";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "callCheckerInfos";
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "results";
        readonly type: "tuple[]";
        readonly internalType: "struct GuardedExecutor.CallCheckerInfo[]";
        readonly components: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "checker";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "canExecute";
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "target";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "canExecutePackedInfos";
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32[]";
        readonly internalType: "bytes32[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "execute";
    readonly inputs: readonly [{
        readonly name: "mode";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "executionData";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "removeSpendLimit";
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "token";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "period";
        readonly type: "uint8";
        readonly internalType: "enum GuardedExecutor.SpendPeriod";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setCallChecker";
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "target";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "checker";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setCanExecute";
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "target";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "fnSel";
        readonly type: "bytes4";
        readonly internalType: "bytes4";
    }, {
        readonly name: "can";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "setSpendLimit";
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "token";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "period";
        readonly type: "uint8";
        readonly internalType: "enum GuardedExecutor.SpendPeriod";
    }, {
        readonly name: "limit";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "spendAndExecuteInfos";
    readonly inputs: readonly [{
        readonly name: "keyHashes";
        readonly type: "bytes32[]";
        readonly internalType: "bytes32[]";
    }];
    readonly outputs: readonly [{
        readonly name: "spends";
        readonly type: "tuple[][]";
        readonly internalType: "struct GuardedExecutor.SpendInfo[][]";
        readonly components: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "period";
            readonly type: "uint8";
            readonly internalType: "enum GuardedExecutor.SpendPeriod";
        }, {
            readonly name: "limit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "spent";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "lastUpdated";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "currentSpent";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "current";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly name: "executes";
        readonly type: "bytes32[][]";
        readonly internalType: "bytes32[][]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "spendInfos";
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "results";
        readonly type: "tuple[]";
        readonly internalType: "struct GuardedExecutor.SpendInfo[]";
        readonly components: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "period";
            readonly type: "uint8";
            readonly internalType: "enum GuardedExecutor.SpendPeriod";
        }, {
            readonly name: "limit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "spent";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "lastUpdated";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "currentSpent";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "current";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "startOfSpendPeriod";
    readonly inputs: readonly [{
        readonly name: "unixTimestamp";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "period";
        readonly type: "uint8";
        readonly internalType: "enum GuardedExecutor.SpendPeriod";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly name: "supportsExecutionMode";
    readonly inputs: readonly [{
        readonly name: "mode";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly outputs: readonly [{
        readonly name: "result";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "event";
    readonly name: "CallCheckerSet";
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly indexed: false;
        readonly internalType: "bytes32";
    }, {
        readonly name: "target";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "checker";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "CanExecuteSet";
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly indexed: false;
        readonly internalType: "bytes32";
    }, {
        readonly name: "target";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "fnSel";
        readonly type: "bytes4";
        readonly indexed: false;
        readonly internalType: "bytes4";
    }, {
        readonly name: "can";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "SpendLimitRemoved";
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly indexed: false;
        readonly internalType: "bytes32";
    }, {
        readonly name: "token";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "period";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "enum GuardedExecutor.SpendPeriod";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "SpendLimitSet";
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly indexed: false;
        readonly internalType: "bytes32";
    }, {
        readonly name: "token";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "period";
        readonly type: "uint8";
        readonly indexed: false;
        readonly internalType: "enum GuardedExecutor.SpendPeriod";
    }, {
        readonly name: "limit";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "BatchOfBatchesDecodingError";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "CannotSelfExecute";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ExceededSpendLimit";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "ExceedsCapacity";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "FnSelectorNotRecognized";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "IndexOutOfBounds";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "KeyHashIsZero";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NoSpendPermissions";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "SuperAdminCanExecuteEverything";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "SuperAdminCanSpendAnything";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "Unauthorized";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UnauthorizedCall";
    readonly inputs: readonly [{
        readonly name: "keyHash";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }, {
        readonly name: "target";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
}, {
    readonly type: "error";
    readonly name: "UnsupportedExecutionMode";
    readonly inputs: readonly [];
}];
export declare const code: "0x";
//# sourceMappingURL=GuardedExecutor.d.ts.map