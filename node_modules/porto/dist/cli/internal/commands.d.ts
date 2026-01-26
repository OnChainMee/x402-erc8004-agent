/** Creates a Porto account. */
export declare function createAccount(_: unknown, args: createAccount.Arguments): Promise<void>;
export declare namespace createAccount {
    type Arguments = {
        /** Create a server key with admin privileges. */
        adminKey?: boolean | undefined;
        /** Dialog hostname. */
        dialog?: string | undefined;
        /** Whether to onboard via testnet. */
        testnet?: boolean | undefined;
    };
}
//# sourceMappingURL=commands.d.ts.map