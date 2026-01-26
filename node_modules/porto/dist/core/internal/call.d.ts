import type * as Address from 'ox/Address';
import type * as Hex from 'ox/Hex';
import * as Key from '../../viem/Key.js';
/** Stub address for self-execution. */
export declare const selfAddress = "0x2323232323232323232323232323232323232323";
export type Call = {
    to: Address.Address;
    value?: bigint | undefined;
    data?: Hex.Hex | undefined;
};
/**
 * Instantiates values to populate a call to authorize a key.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export declare function authorize(parameters: authorize.Parameters): {
    readonly data: `0x${string}`;
    readonly to: "0x2323232323232323232323232323232323232323";
};
export declare namespace authorize {
    type Parameters = {
        /** Key to authorize. */
        key: Key.Key;
    };
}
export declare const anyHash = "0x3232323232323232323232323232323232323232323232323232323232323232";
export declare const anyTarget = "0x3232323232323232323232323232323232323232";
export declare const anySelector = "0x32323232";
/**
 * Instantiates values to populate a call to set the label of a delegated account.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export declare function setCanExecute(parameters?: setCanExecute.Parameters): {
    readonly data: `0x${string}`;
    readonly to: "0x2323232323232323232323232323232323232323";
};
export declare namespace setCanExecute {
    type Parameters = {
        /** Whether to enable execution. */
        enabled?: boolean | undefined;
        /** Key to authorize. */
        key?: Key.Key | undefined;
        /** Target to authorize. */
        to?: Address.Address | undefined;
        /** Function selector to authorize. */
        selector?: Hex.Hex | undefined;
    };
}
/**
 * Instantiates values to populate a call to set the label of a delegated account.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export declare function setLabel(parameters: setLabel.Parameters): {
    readonly data: `0x${string}`;
    readonly to: "0x2323232323232323232323232323232323232323";
};
export declare namespace setLabel {
    type Parameters = {
        /** Label to set. */
        label: string;
    };
}
/**
 * Instantiates values to populate a call to set the spend limit of a key.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export declare function setSpendLimit(parameters: setSpendLimit.Parameters): {
    readonly data: `0x${string}`;
    readonly to: "0x2323232323232323232323232323232323232323";
};
export declare namespace setSpendLimit {
    type Parameters = {
        /** Key to set the spend limit of. */
        key: Key.Key;
        /** Limit to set. */
        limit: bigint;
        /** Period to set. */
        period: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';
        /** Token to set. */
        token?: Address.Address | undefined;
    };
}
/**
 * Instantiates values to populate a call to set the signature checker approval of a key.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export declare function setSignatureCheckerApproval(parameters: setSignatureCheckerApproval.Parameters): {
    readonly data: `0x${string}`;
    readonly to: "0x2323232323232323232323232323232323232323";
};
export declare namespace setSignatureCheckerApproval {
    type Parameters = {
        /** Contract address to authorize. */
        address: Address.Address;
        /** Whether the key can verify signatures. */
        enabled: boolean;
        /** Key to apply the signature verification to. */
        key: Key.Key;
    };
}
/**
 * Instantiates values to populate a call to remove the spend limit of a key.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export declare function removeSpendLimit(parameters: removeSpendLimit.Parameters): {
    readonly data: `0x${string}`;
    readonly to: "0x2323232323232323232323232323232323232323";
};
export declare namespace removeSpendLimit {
    type Parameters = {
        /** Key to set the spend limit of. */
        key: Key.Key;
        /** Period to set. */
        period: 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';
        /** Token to set. */
        token: Address.Address;
    };
}
/**
 * Instantiates values to populate a call to revoke a key.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export declare function revoke(parameters: revoke.Parameters): {
    readonly data: `0x${string}`;
    readonly to: "0x2323232323232323232323232323232323232323";
};
export declare namespace revoke {
    type Parameters = {
        /** Key hash to revoke. */
        keyHash: Hex.Hex;
    };
}
/**
 * Instantiates values to populate a call to upgrade the proxy account.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export declare function upgradeProxyAccount(parameters: upgradeProxyAccount.Parameters): {
    readonly data: `0x${string}`;
    readonly to: `0x${string}`;
};
export declare namespace upgradeProxyAccount {
    type Parameters = {
        /** The account to upgrade to. */
        address: Address.Address;
        /** The address to upgrade the address to. */
        to?: Address.Address | undefined;
    };
}
//# sourceMappingURL=call.d.ts.map