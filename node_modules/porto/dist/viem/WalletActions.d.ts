/**
 * Porto Wallet Actions.
 *
 * Note: These Actions will eventually be upstreamed into `viem` once an
 * API is solidified & stable.
 */
import { type Calls, type Chain, type Client, type Narrow, type PrivateKeyAccount, type Transport, type WalletActions as viem_WalletActions } from 'viem';
import * as RpcSchema from '../core/RpcSchema.js';
import * as Account from './Account.js';
import type { GetAccountParameter } from './internal/utils.js';
declare const supportedWalletActions: ["getAddresses", "getCallsStatus", "getCapabilities", "getChainId", "requestAddresses", "sendCalls", "showCallsStatus", "signMessage", "signTypedData", "showCallsStatus", "waitForCallsStatus", "writeContract"];
export declare function addFunds(client: Client, parameters: addFunds.Parameters): Promise<addFunds.ReturnType>;
export declare namespace addFunds {
    type Parameters = RpcSchema.wallet_addFunds.Parameters;
    type ReturnType = RpcSchema.wallet_addFunds.Response;
}
export declare function getAssets<chain extends Chain | undefined, account extends Account.Account | undefined>(client: Client<Transport, chain, account>, ...parameters: account extends undefined ? [getAssets.Parameters<account>] : [getAssets.Parameters<account>] | []): Promise<getAssets.ReturnType>;
export declare namespace getAssets {
    type Parameters<account extends Account.Account | undefined = undefined> = Omit<RpcSchema.wallet_getAssets.Parameters, 'account'> & GetAccountParameter<account>;
    type ReturnType = RpcSchema.wallet_getAssets.Response;
}
export declare function connect(client: Client, parameters?: connect.Parameters): Promise<connect.ReturnType>;
export declare namespace connect {
    type Parameters = RpcSchema.wallet_connect.Capabilities & Omit<RpcSchema.wallet_connect.Parameters, 'capabilities'>;
    type ReturnType = RpcSchema.wallet_connect.Response;
}
export declare function disconnect(client: Client): Promise<void>;
export declare function getAdmins(client: Client, parameters?: getAdmins.Parameters): Promise<getAdmins.ReturnType>;
export declare namespace getAdmins {
    type Parameters = RpcSchema.wallet_getAdmins.Parameters;
    type ReturnType = RpcSchema.wallet_getAdmins.Response;
}
export declare function getPermissions(client: Client, parameters?: getPermissions.Parameters): Promise<getPermissions.ReturnType>;
export declare namespace getPermissions {
    type Parameters = RpcSchema.wallet_getPermissions.Parameters;
    type ReturnType = RpcSchema.wallet_getPermissions.Response;
}
export declare function grantAdmin(client: Client, parameters: grantAdmin.Parameters): Promise<grantAdmin.ReturnType>;
export declare namespace grantAdmin {
    type Parameters = RpcSchema.wallet_grantAdmin.Capabilities & Omit<RpcSchema.wallet_grantAdmin.Parameters, 'capabilities'>;
    type ReturnType = RpcSchema.wallet_grantAdmin.Response;
}
export declare function grantPermissions(client: Client, parameters: grantPermissions.Parameters): Promise<grantPermissions.ReturnType>;
export declare namespace grantPermissions {
    type Parameters = RpcSchema.wallet_grantPermissions.Parameters;
    type ReturnType = RpcSchema.wallet_grantPermissions.Response;
}
export declare function prepareCalls<const calls extends readonly unknown[] = readonly unknown[]>(client: Client, parameters: prepareCalls.Parameters<calls>): Promise<prepareCalls.ReturnType>;
export declare namespace prepareCalls {
    type Parameters<calls extends readonly unknown[] = readonly unknown[]> = Omit<RpcSchema.wallet_prepareCalls.Parameters, 'calls'> & {
        calls?: Calls<Narrow<calls>> | undefined;
    };
    type ReturnType = RpcSchema.wallet_prepareCalls.Response;
}
export declare function revokeAdmin(client: Client, parameters: revokeAdmin.Parameters): Promise<undefined>;
export declare namespace revokeAdmin {
    type Parameters = RpcSchema.wallet_revokeAdmin.Parameters;
}
export declare function revokePermissions(client: Client, parameters: revokePermissions.Parameters): Promise<undefined>;
export declare namespace revokePermissions {
    type Parameters = RpcSchema.wallet_revokePermissions.Capabilities & Omit<RpcSchema.wallet_revokePermissions.Parameters, 'capabilities'>;
}
export declare function sendPreparedCalls(client: Client, parameters: sendPreparedCalls.Parameters): Promise<sendPreparedCalls.ReturnType>;
export declare namespace sendPreparedCalls {
    type Parameters = RpcSchema.wallet_sendPreparedCalls.Parameters;
    type ReturnType = RpcSchema.wallet_sendPreparedCalls.Response;
}
export declare function upgradeAccount(client: Client, parameters: upgradeAccount.Parameters): Promise<upgradeAccount.ReturnType>;
export declare namespace upgradeAccount {
    type Parameters = RpcSchema.wallet_prepareUpgradeAccount.Capabilities & Omit<RpcSchema.wallet_prepareUpgradeAccount.Parameters, 'address' | 'capabilities'> & {
        account: PrivateKeyAccount | Account.Account;
    };
    type ReturnType = RpcSchema.wallet_upgradeAccount.Response;
}
export type Decorator<chain extends Chain | undefined = Chain | undefined, account extends Account.Account | undefined = Account.Account | undefined> = Pick<viem_WalletActions<chain, account>, (typeof supportedWalletActions)[number]> & {
    connect: (parameters: connect.Parameters) => Promise<connect.ReturnType>;
    disconnect: () => Promise<void>;
    getPermissions: (parameters: getPermissions.Parameters) => Promise<getPermissions.ReturnType>;
    grantPermissions: (parameters: grantPermissions.Parameters) => Promise<grantPermissions.ReturnType>;
    prepareCalls: (parameters: prepareCalls.Parameters) => Promise<prepareCalls.ReturnType>;
    revokePermissions: (parameters: revokePermissions.Parameters) => Promise<void>;
    sendPreparedCalls: (parameters: sendPreparedCalls.Parameters) => Promise<sendPreparedCalls.ReturnType>;
    upgradeAccount: (parameters: upgradeAccount.Parameters) => Promise<upgradeAccount.ReturnType>;
};
export declare function decorator<chain extends Chain | undefined, account extends Account.Account | undefined>(client: Client<Transport, chain, account>): Decorator<chain, account>;
export {};
//# sourceMappingURL=WalletActions.d.ts.map