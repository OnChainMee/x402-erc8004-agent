import * as Secp256k1 from 'ox/Secp256k1';
import { createClient, http, } from 'viem';
import * as Account from './Account.js';
import * as RelayActions from './internal/relayActions.js';
import * as Key from './Key.js';
export { addFaucetFunds, getAssets, getAuthorization, getCallsStatus, getCapabilities, health, verifySignature, } from './internal/relayActions.js';
/**
 * Creates a new Porto Account using an ephemeral EOA.
 *
 * @example
 * TODO
 *
 * @param client - Client.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function createAccount(client, parameters) {
    const account = Account.fromPrivateKey(Secp256k1.randomPrivateKey(), {
        keys: parameters.authorizeKeys,
    });
    return await upgradeAccount(client, {
        ...parameters,
        account,
    });
}
/**
 * Gets the keys for an account.
 *
 * @example
 * TODO
 *
 * @param client - Client.
 * @param parameters - Parameters.
 * @returns Account keys.
 */
export async function getKeys(client, parameters) {
    const { account = client.account, chainIds } = parameters;
    const account_ = account ? Account.from(account) : undefined;
    if (!account_)
        throw new Error('account is required.');
    const keys = await RelayActions.getKeys(client, {
        address: account_.address,
        chainIds,
    });
    return Object.entries(keys).flatMap(([chainId, keys]) => keys.map((key) => Key.fromRelay(key, { chainId: Number(chainId) })));
}
export async function getOnrampContactInfo(client, parameters) {
    const { address, secret } = parameters;
    return await RelayActions.getOnrampContactInfo(client, {
        address,
        secret,
    });
}
export async function onrampStatus(client, parameters) {
    const { address } = parameters;
    return await RelayActions.onrampStatus(client, {
        address,
    });
}
/**
 * Prepares the digest to sign over and fills the request to send a call bundle.
 *
 * @example
 * TODO
 *
 * @param client - Client.
 * @param parameters - Prepare call bundle parameters.
 * @returns Prepared properties.
 */
export async function prepareCalls(client, parameters) {
    const { account = client.account, calls, chain = client.chain, feePayer, merchantUrl, nonce, preCalls, requiredFunds, revokeKeys, } = parameters;
    const account_ = account ? Account.from(account) : undefined;
    const key = parameters.key ??
        (account_ ? Account.getKey(account_, { role: 'admin' }) : undefined);
    const hasSessionKey = parameters.authorizeKeys?.some((x) => x.role === 'session');
    const { contracts, fees: { tokens }, } = await RelayActions.getCapabilities(client, { chainId: chain?.id });
    const orchestrator = hasSessionKey
        ? contracts.orchestrator.address
        : undefined;
    const authorizeKeys = (parameters.authorizeKeys ?? []).map((key) => Key.toRelay(key, { feeTokens: tokens, orchestrator }));
    // If a fee token is provided, use it.
    // Otherwise, if there are spend permissions set, we cannot predictably
    // infer the fee token (not pass it) as the fee token needs to have
    // an assigned spend permission set. It is assumed that the first spend
    // permission is the one that is used for the fee token.
    const feeToken = (() => {
        if (parameters.feeToken)
            return parameters.feeToken;
        return key?.permissions?.spend?.[0]?.token;
    })();
    const preCall = typeof preCalls === 'boolean' ? preCalls : false;
    const signedPreCalls = typeof preCalls === 'object'
        ? preCalls.map(({ context, signature }) => ({
            ...context.preCall,
            signature,
        }))
        : undefined;
    const args = {
        address: account_?.address,
        calls: (calls ?? []),
        capabilities: {
            authorizeKeys,
            meta: {
                feePayer,
                feeToken,
                nonce,
            },
            preCall,
            preCalls: signedPreCalls,
            requiredFunds,
            revokeKeys: revokeKeys?.map((key) => ({
                hash: key.hash,
            })),
        },
        chain: chain,
        key: key ? Key.toRelay(key, { feeTokens: tokens }) : undefined,
    };
    const result = await (async () => {
        if (merchantUrl) {
            const client_ = createClient({
                chain: client.chain,
                transport: http(merchantUrl),
            });
            // Prepare with Merchant RPC.
            return await RelayActions.prepareCalls(client_, args).catch((e) => {
                console.error(e);
                // Fall back to default client.
                return RelayActions.prepareCalls(client, args);
            });
        }
        return await RelayActions.prepareCalls(client, args);
    })();
    const { capabilities, context, digest, signature, typedData } = result;
    if (merchantUrl) {
        const isValid = await RelayActions.verifyPrepareCallsResponse(client, {
            response: result._raw,
            signature,
        });
        if (!isValid)
            throw new Error(`cannot verify integrity of \`wallet_prepareCalls\` response from ${merchantUrl}`);
    }
    return {
        capabilities: { ...capabilities, quote: context.quote },
        context,
        digest,
        key,
        typedData,
    };
}
/**
 * Prepares an account upgrade.
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function prepareUpgradeAccount(client, parameters) {
    const { address, authorizeKeys: keys, chain = client.chain } = parameters;
    if (!chain)
        throw new Error('chain is required.');
    const { contracts, fees: { tokens }, } = await RelayActions.getCapabilities(client, { chainId: chain.id });
    const delegation = parameters.delegation ?? contracts.accountProxy.address;
    const hasSessionKey = keys.some((x) => x.role === 'session');
    const orchestrator = hasSessionKey
        ? contracts.orchestrator.address
        : undefined;
    const authorizeKeys = keys.map((key) => {
        const permissions = key.role === 'session' ? key.permissions : {};
        return Key.toRelay({ ...key, permissions }, { feeTokens: tokens, orchestrator });
    });
    const { capabilities, chainId, context, digests, typedData } = await RelayActions.prepareUpgradeAccount(client, {
        address,
        authorizeKeys,
        chain,
        delegation,
    });
    const account = Account.from({
        address,
        keys,
    });
    return {
        capabilities,
        chainId,
        context: {
            ...context,
            account,
        },
        digests,
        typedData,
    };
}
export async function resendVerifyPhone(client, parameters) {
    const { phone, walletAddress } = parameters;
    return await RelayActions.resendVerifyPhone(client, {
        phone,
        walletAddress,
    });
}
/**
 * Broadcasts a call bundle to the Relay.
 *
 * @example
 * TODO
 *
 * @param client - Client.
 * @param parameters - Parameters.
 * @returns Bundle identifier.
 */
export async function sendCalls(client, parameters) {
    const { account = client.account, chain = client.chain, webAuthn, } = parameters;
    if (!chain)
        throw new Error('`chain` is required.');
    // If no signature is provided, prepare the calls and sign them.
    const account_ = account ? Account.from(account) : undefined;
    if (!account_)
        throw new Error('`account` is required.');
    const key = parameters.key ?? Account.getKey(account_, parameters);
    if (!key && !account_.sign)
        throw new Error('`key` or `account` with `sign` is required');
    // Prepare pre-calls.
    const preCalls = await Promise.all((parameters.preCalls ?? []).map(async (pre) => {
        if (pre.signature)
            return pre;
        const { authorizeKeys, key, calls, revokeKeys } = pre;
        const { context, digest } = await prepareCalls(client, {
            account: account_,
            authorizeKeys,
            calls,
            chain,
            feeToken: parameters.feeToken,
            key,
            preCalls: true,
            revokeKeys,
        });
        const signature = await Key.sign(key, {
            address: null,
            payload: digest,
            webAuthn,
        });
        return { context, signature };
    }));
    // Prepare main bundle.
    const { capabilities, context, digest } = await prepareCalls(client, {
        ...parameters,
        account: account_,
        chain,
        key,
        preCalls,
    });
    // Sign over the bundles.
    const signature = await (async () => {
        if (key)
            return await Key.sign(key, {
                address: null,
                payload: digest,
                webAuthn,
                wrap: false,
            });
        return await account_.sign({
            hash: digest,
        });
    })();
    // Broadcast the bundle to the Relay.
    return await sendPreparedCalls(client, {
        capabilities: capabilities.feeSignature
            ? {
                feeSignature: capabilities.feeSignature,
            }
            : undefined,
        context,
        key,
        signature,
    });
}
export async function signCalls(request, options) {
    const isPrecall = Boolean(request.context.preCall);
    const { account, key } = options;
    if (account) {
        const keyIndex = account.keys?.findIndex((k) => k.publicKey === request.key?.publicKey);
        if (keyIndex === -1)
            throw new Error('key not found');
        return await Account.sign(account, {
            key: keyIndex,
            payload: request.digest,
            replaySafe: false,
            wrap: isPrecall,
        });
    }
    if (key)
        return await Key.sign(key, {
            address: null,
            payload: request.digest,
            wrap: isPrecall,
        });
    throw new Error('no key or account provided');
}
export async function sendPreparedCalls(client, parameters) {
    const { capabilities, context, key, signature } = parameters;
    return await RelayActions.sendPreparedCalls(client, {
        capabilities,
        context,
        key: key ? Key.toRelay(key) : undefined,
        signature,
    });
}
export async function setEmail(client, parameters) {
    const { email, walletAddress } = parameters;
    return await RelayActions.setEmail(client, {
        email,
        walletAddress,
    });
}
export async function setPhone(client, parameters) {
    const { phone, walletAddress } = parameters;
    return await RelayActions.setPhone(client, {
        phone,
        walletAddress,
    });
}
export async function upgradeAccount(client, parameters) {
    if (parameters.account) {
        const { account } = parameters;
        const authorizeKeys = [
            ...(account.keys ?? []),
            ...(parameters.authorizeKeys ?? []),
        ].filter((key, index, array) => array.findIndex((k) => k.id === key.id) === index);
        const { digests, ...request } = await prepareUpgradeAccount(client, {
            ...parameters,
            address: account.address,
            authorizeKeys,
        });
        const signatures = {
            auth: await account.sign({ hash: digests.auth }),
            exec: await account.sign({ hash: digests.exec }),
        };
        return await upgradeAccount(client, {
            ...request,
            signatures,
        });
    }
    const { context, signatures } = parameters;
    const account = Account.from(context.account);
    await RelayActions.upgradeAccount(client, {
        context,
        signatures,
    });
    return account;
}
export async function verifyEmail(client, parameters) {
    const { chainId, email, signature, token, walletAddress } = parameters;
    return await RelayActions.verifyEmail(client, {
        chainId,
        email,
        signature,
        token,
        walletAddress,
    });
}
export async function verifyPhone(client, parameters) {
    const { code, phone, walletAddress } = parameters;
    return await RelayActions.verifyPhone(client, {
        code,
        phone,
        walletAddress,
    });
}
export function decorator(client) {
    return {
        createAccount: (parameters) => createAccount(client, parameters),
        getCallsStatus: (parameters) => RelayActions.getCallsStatus(client, parameters),
        getCapabilities: () => RelayActions.getCapabilities(client),
        getKeys: (parameters) => getKeys(client, parameters),
        health: () => RelayActions.health(client),
        prepareCalls: (parameters) => prepareCalls(client, parameters),
        prepareUpgradeAccount: (parameters) => prepareUpgradeAccount(client, parameters),
        sendCalls: (parameters) => sendCalls(client, parameters),
        sendPreparedCalls: (parameters) => sendPreparedCalls(client, parameters),
        upgradeAccount: (parameters) => upgradeAccount(client, parameters),
        verifySignature: (parameters) => RelayActions.verifySignature(client, parameters),
    };
}
//# sourceMappingURL=RelayActions.js.map