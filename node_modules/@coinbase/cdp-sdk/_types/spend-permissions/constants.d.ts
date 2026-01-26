export declare const SPEND_PERMISSION_MANAGER_ADDRESS = "0xf85210B21cC50302F477BA56686d2019dC9b67Ad";
export declare const SPEND_PERMISSION_MANAGER_ABI: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract PublicERC6492Validator";
        readonly name: "publicERC6492Validator";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "magicSpend";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "currentTimestamp";
        readonly type: "uint48";
    }, {
        readonly internalType: "uint48";
        readonly name: "end";
        readonly type: "uint48";
    }];
    readonly name: "AfterSpendPermissionEnd";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "currentTimestamp";
        readonly type: "uint48";
    }, {
        readonly internalType: "uint48";
        readonly name: "start";
        readonly type: "uint48";
    }];
    readonly name: "BeforeSpendPermissionStart";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "ERC721TokenNotSupported";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "EmptySpendPermissionBatch";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "allowance";
        readonly type: "uint256";
    }];
    readonly name: "ExceededSpendPermission";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint160";
            readonly name: "spend";
            readonly type: "uint160";
        }];
        readonly internalType: "struct SpendPermissionManager.PeriodSpend";
        readonly name: "actualLastUpdatedPeriod";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint160";
            readonly name: "spend";
            readonly type: "uint160";
        }];
        readonly internalType: "struct SpendPermissionManager.PeriodSpend";
        readonly name: "expectedLastUpdatedPeriod";
        readonly type: "tuple";
    }];
    readonly name: "InvalidLastUpdatedPeriod";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "expected";
        readonly type: "address";
    }];
    readonly name: "InvalidSender";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidSignature";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint48";
        readonly name: "start";
        readonly type: "uint48";
    }, {
        readonly internalType: "uint48";
        readonly name: "end";
        readonly type: "uint48";
    }];
    readonly name: "InvalidStartEnd";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint128";
        readonly name: "noncePostfix";
        readonly type: "uint128";
    }, {
        readonly internalType: "uint128";
        readonly name: "permissionHashPostfix";
        readonly type: "uint128";
    }];
    readonly name: "InvalidWithdrawRequestNonce";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "firstAccount";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "secondAccount";
        readonly type: "address";
    }];
    readonly name: "MismatchedAccounts";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spendToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "withdrawAsset";
        readonly type: "address";
    }];
    readonly name: "SpendTokenWithdrawAssetMismatch";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "SpendValueOverflow";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "spendValue";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "withdrawAmount";
        readonly type: "uint256";
    }];
    readonly name: "SpendValueWithdrawAmountMismatch";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "UnauthorizedSpendPermission";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "received";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "expected";
        readonly type: "uint256";
    }];
    readonly name: "UnexpectedReceiveAmount";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroAllowance";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroPeriod";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroSpender";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroValue";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "hash";
        readonly type: "bytes32";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly indexed: false;
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "spendPermission";
        readonly type: "tuple";
    }];
    readonly name: "SpendPermissionApproved";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "hash";
        readonly type: "bytes32";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly indexed: false;
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "spendPermission";
        readonly type: "tuple";
    }];
    readonly name: "SpendPermissionRevoked";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "hash";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint160";
            readonly name: "spend";
            readonly type: "uint160";
        }];
        readonly indexed: false;
        readonly internalType: "struct SpendPermissionManager.PeriodSpend";
        readonly name: "periodSpend";
        readonly type: "tuple";
    }];
    readonly name: "SpendPermissionUsed";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "MAGIC_SPEND";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "NATIVE_TOKEN";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "PERMISSION_DETAILS_TYPEHASH";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "PUBLIC_ERC6492_VALIDATOR";
    readonly outputs: readonly [{
        readonly internalType: "contract PublicERC6492Validator";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "SPEND_PERMISSION_BATCH_TYPEHASH";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "SPEND_PERMISSION_TYPEHASH";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "spendPermission";
        readonly type: "tuple";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint160";
                readonly name: "allowance";
                readonly type: "uint160";
            }, {
                readonly internalType: "uint256";
                readonly name: "salt";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SpendPermissionManager.PermissionDetails[]";
            readonly name: "permissions";
            readonly type: "tuple[]";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermissionBatch";
        readonly name: "spendPermissionBatch";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "approveBatchWithSignature";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "permissionToApprove";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "permissionToRevoke";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint160";
            readonly name: "spend";
            readonly type: "uint160";
        }];
        readonly internalType: "struct SpendPermissionManager.PeriodSpend";
        readonly name: "expectedLastUpdatedPeriod";
        readonly type: "tuple";
    }];
    readonly name: "approveWithRevoke";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "spendPermission";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "approveWithSignature";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "eip712Domain";
    readonly outputs: readonly [{
        readonly internalType: "bytes1";
        readonly name: "fields";
        readonly type: "bytes1";
    }, {
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "version";
        readonly type: "string";
    }, {
        readonly internalType: "uint256";
        readonly name: "chainId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "verifyingContract";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "salt";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "extensions";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint160";
                readonly name: "allowance";
                readonly type: "uint160";
            }, {
                readonly internalType: "uint256";
                readonly name: "salt";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct SpendPermissionManager.PermissionDetails[]";
            readonly name: "permissions";
            readonly type: "tuple[]";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermissionBatch";
        readonly name: "spendPermissionBatch";
        readonly type: "tuple";
    }];
    readonly name: "getBatchHash";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "spendPermission";
        readonly type: "tuple";
    }];
    readonly name: "getCurrentPeriod";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint160";
            readonly name: "spend";
            readonly type: "uint160";
        }];
        readonly internalType: "struct SpendPermissionManager.PeriodSpend";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "spendPermission";
        readonly type: "tuple";
    }];
    readonly name: "getHash";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "spendPermission";
        readonly type: "tuple";
    }];
    readonly name: "getLastUpdatedPeriod";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint160";
            readonly name: "spend";
            readonly type: "uint160";
        }];
        readonly internalType: "struct SpendPermissionManager.PeriodSpend";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "spendPermission";
        readonly type: "tuple";
    }];
    readonly name: "isApproved";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "spendPermission";
        readonly type: "tuple";
    }];
    readonly name: "isRevoked";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "spendPermission";
        readonly type: "tuple";
    }];
    readonly name: "isValid";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "spendPermission";
        readonly type: "tuple";
    }];
    readonly name: "revoke";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "spendPermission";
        readonly type: "tuple";
    }];
    readonly name: "revokeAsSpender";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "spendPermission";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint160";
        readonly name: "value";
        readonly type: "uint160";
    }];
    readonly name: "spend";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "allowance";
            readonly type: "uint160";
        }, {
            readonly internalType: "uint48";
            readonly name: "period";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "start";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint48";
            readonly name: "end";
            readonly type: "uint48";
        }, {
            readonly internalType: "uint256";
            readonly name: "salt";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "extraData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct SpendPermissionManager.SpendPermission";
        readonly name: "spendPermission";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint160";
        readonly name: "value";
        readonly type: "uint160";
    }, {
        readonly components: readonly [{
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint48";
            readonly name: "expiry";
            readonly type: "uint48";
        }];
        readonly internalType: "struct MagicSpend.WithdrawRequest";
        readonly name: "withdrawRequest";
        readonly type: "tuple";
    }];
    readonly name: "spendWithWithdraw";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
//# sourceMappingURL=constants.d.ts.map