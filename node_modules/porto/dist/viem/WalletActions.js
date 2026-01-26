/**
 * Porto Wallet Actions.
 *
 * Note: These Actions will eventually be upstreamed into `viem` once an
 * API is solidified & stable.
 */
import * as Hex from 'ox/Hex';
import { encodeFunctionData, } from 'viem';
import { getAddresses, getCallsStatus, getCapabilities, getChainId, requestAddresses, sendCalls, showCallsStatus, signMessage, signTypedData, waitForCallsStatus, writeContract, } from 'viem/actions';
import * as z from 'zod/mini';
import * as RpcSchema from '../core/RpcSchema.js';
import * as Account from './Account.js';
const supportedWalletActions = [
    'getAddresses',
    'getCallsStatus',
    'getCapabilities',
    'getChainId',
    'requestAddresses',
    'sendCalls',
    'showCallsStatus',
    'signMessage',
    'signTypedData',
    'showCallsStatus',
    'waitForCallsStatus',
    'writeContract',
];
export async function addFunds(client, parameters) {
    const method = 'wallet_addFunds';
    const response = await client.request({
        method,
        params: [z.encode(RpcSchema.wallet_addFunds.Parameters, parameters)],
    });
    return z.decode(RpcSchema.wallet_addFunds.Response, response);
}
export async function getAssets(client, ...parameters) {
    const { account = client.account, ...rest } = parameters[0] ?? {};
    const account_ = account ? Account.from(account) : undefined;
    if (!account_)
        throw new Error('account is required');
    const method = 'wallet_getAssets';
    const response = await client.request({
        method,
        params: [
            z.encode(RpcSchema.wallet_getAssets.Parameters, {
                ...rest,
                account: account_.address,
            }),
        ],
    });
    const value = z.decode(RpcSchema.wallet_getAssets.Response, response);
    const decoded = Object.entries(value).reduce((acc, [key, value]) => {
        acc[Hex.toNumber(key)] = value;
        return acc;
    }, {});
    return decoded;
}
export async function connect(client, parameters = {}) {
    const { chainIds, ...capabilities } = parameters;
    const method = 'wallet_connect';
    const response = await client.request({
        method,
        params: [
            z.encode(RpcSchema.wallet_connect.Parameters, {
                capabilities,
                chainIds,
            }),
        ],
    });
    return z.decode(RpcSchema.wallet_connect.Response, response);
}
export async function disconnect(client) {
    const method = 'wallet_disconnect';
    await client.request({
        method,
    });
}
export async function getAdmins(client, parameters = {}) {
    const method = 'wallet_getAdmins';
    const response = await client.request({
        method,
        params: [z.encode(RpcSchema.wallet_getAdmins.Parameters, parameters)],
    });
    return z.decode(RpcSchema.wallet_getAdmins.Response, response);
}
export async function getPermissions(client, parameters = {}) {
    const method = 'wallet_getPermissions';
    const response = await client.request({
        method,
        params: [z.encode(RpcSchema.wallet_getPermissions.Parameters, parameters)],
    });
    return z.decode(RpcSchema.wallet_getPermissions.Response, response);
}
export async function grantAdmin(client, parameters) {
    const method = 'wallet_grantAdmin';
    const response = await client.request({
        method,
        params: [z.encode(RpcSchema.wallet_grantAdmin.Parameters, parameters)],
    });
    return z.decode(RpcSchema.wallet_grantAdmin.Response, response);
}
export async function grantPermissions(client, parameters) {
    const method = 'wallet_grantPermissions';
    const response = await client.request({
        method,
        params: [
            z.encode(RpcSchema.wallet_grantPermissions.Parameters, parameters),
        ],
    });
    return z.decode(RpcSchema.wallet_grantPermissions.Response, response);
}
export async function prepareCalls(client, parameters) {
    const method = 'wallet_prepareCalls';
    const response = await client.request({
        method,
        params: [
            z.encode(RpcSchema.wallet_prepareCalls.Parameters, {
                ...parameters,
                calls: (parameters.calls ?? []).map((c) => {
                    const call = c;
                    const data = (() => {
                        if (!call.abi)
                            return call.data;
                        return encodeFunctionData(call);
                    })();
                    return {
                        ...call,
                        data,
                    };
                }),
            }),
        ],
    });
    return z.decode(RpcSchema.wallet_prepareCalls.Response, response);
}
export async function revokeAdmin(client, parameters) {
    const method = 'wallet_revokeAdmin';
    await client.request({
        method,
        params: [z.encode(RpcSchema.wallet_revokeAdmin.Parameters, parameters)],
    });
    return undefined;
}
export async function revokePermissions(client, parameters) {
    const { address, id, ...capabilities } = parameters;
    const method = 'wallet_revokePermissions';
    await client.request({
        method,
        params: [
            z.encode(RpcSchema.wallet_revokePermissions.Parameters, {
                address,
                capabilities,
                id,
            }),
        ],
    });
    return undefined;
}
export async function sendPreparedCalls(client, parameters) {
    const method = 'wallet_sendPreparedCalls';
    const response = await client.request({
        method,
        params: [
            z.encode(RpcSchema.wallet_sendPreparedCalls.Parameters, parameters),
        ],
    });
    return z.decode(RpcSchema.wallet_sendPreparedCalls.Response, response);
}
export async function upgradeAccount(client, parameters) {
    const { account, chainId, ...capabilities } = parameters;
    const method = 'wallet_prepareUpgradeAccount';
    const { context, digests } = await client.request({
        method,
        params: [
            z.encode(RpcSchema.wallet_prepareUpgradeAccount.Parameters, {
                address: account.address,
                capabilities,
                chainId,
            }),
        ],
    });
    const signatures = {
        auth: await account.sign({ hash: digests.auth }),
        exec: await account.sign({ hash: digests.exec }),
    };
    const method_upgrade = 'wallet_upgradeAccount';
    const response = await client.request({
        method: method_upgrade,
        params: [
            z.encode(RpcSchema.wallet_upgradeAccount.Parameters, {
                context,
                signatures,
            }),
        ],
    });
    return z.decode(RpcSchema.wallet_upgradeAccount.Response, response);
}
export function decorator(client) {
    return {
        connect: (parameters) => connect(client, parameters),
        disconnect: () => disconnect(client),
        getAddresses: () => getAddresses(client),
        getCallsStatus: (parameters) => getCallsStatus(client, parameters),
        getCapabilities: () => getCapabilities(client),
        getChainId: () => getChainId(client),
        getPermissions: (parameters) => getPermissions(client, parameters),
        grantPermissions: (parameters) => grantPermissions(client, parameters),
        prepareCalls: (parameters) => prepareCalls(client, parameters),
        requestAddresses: () => requestAddresses(client),
        revokePermissions: (parameters) => revokePermissions(client, parameters),
        sendCalls: (parameters) => sendCalls(client, parameters),
        sendPreparedCalls: (parameters) => sendPreparedCalls(client, parameters),
        showCallsStatus: (parameters) => showCallsStatus(client, parameters),
        signMessage: (parameters) => signMessage(client, parameters),
        signTypedData: (parameters) => signTypedData(client, parameters),
        upgradeAccount: (parameters) => upgradeAccount(client, parameters),
        waitForCallsStatus: (parameters) => waitForCallsStatus(client, parameters),
        writeContract: (parameters) => writeContract(client, parameters),
    };
}
//# sourceMappingURL=WalletActions.js.map