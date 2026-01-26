export declare const abi: readonly [{
    readonly type: "function";
    readonly name: "inspect";
    readonly inputs: readonly [{
        readonly name: "_message";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "_options";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [{
        readonly name: "valid";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "error";
    readonly name: "InspectionFailed";
    readonly inputs: readonly [{
        readonly name: "message";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "options";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
}];
export declare const code: "0x";
//# sourceMappingURL=IOAppMsgInspector.d.ts.map