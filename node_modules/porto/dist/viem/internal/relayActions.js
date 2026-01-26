/**
 * Actions for Porto Relay.
 *
 * @see https://porto.sh/relay
 */
import * as AbiError from 'ox/AbiError';
import * as AbiFunction from 'ox/AbiFunction';
import * as Errors from 'ox/Errors';
import * as Hash from 'ox/Hash';
import * as Hex from 'ox/Hex';
import * as Secp256k1 from 'ox/Secp256k1';
import * as Signature from 'ox/Signature';
import { BaseError, withCache, } from 'viem';
import { verifyHash } from 'viem/actions';
import { getExecuteError, } from 'viem/experimental/erc7821';
import * as z from 'zod/mini';
import * as RpcSchema from '../../core/internal/relay/rpcSchema.js';
import * as u from '../../core/internal/schema/utils.js';
import * as U from '../../core/internal/utils.js';
/**
 * Gets the authorization for a given address.
 *
 * @example
 * TODO
 *
 * @param client - The client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function getAuthorization(client, parameters) {
    try {
        const method = 'wallet_getAuthorization';
        const result = await withCache(() => client.request({
            method,
            params: [
                z.encode(RpcSchema.wallet_getAuthorization.Parameters, parameters),
            ],
        }), { cacheKey: `${client.uid}.${method}.${parameters.address}` });
        return z.decode(RpcSchema.wallet_getAuthorization.Response, result);
    }
    catch (error) {
        parseSchemaError(error);
        throw error;
    }
}
/**
 * Gets the capabilities for a given chain ID.
 *
 * @example
 * TODO
 *
 * @param client - The client to use.
 * @param options - Options.
 * @returns Result.
 */
export async function getCapabilities(client, options = {}) {
    const chainIds = (() => {
        if (options.chainId)
            return [options.chainId];
        if (options.chainIds === 'all')
            return undefined;
        if (options.chainIds)
            return options.chainIds;
        return [client.chain.id];
    })();
    try {
        const method = 'wallet_getCapabilities';
        const result = await withCache(() => client.request({
            method,
            params: chainIds ? [chainIds] : undefined,
        }, {
            retryCount: 0,
        }), {
            cacheKey: `${client.uid}.${method}.${chainIds?.join(',')}`,
        });
        const parsed = (() => {
            if (options.raw)
                return result;
            return z.decode(RpcSchema.wallet_getCapabilities.Response, result);
        })();
        if (options.chainIds)
            return parsed;
        return Object.values(parsed)[0];
    }
    catch (error) {
        parseSchemaError(error);
        throw error;
    }
}
/**
 * Get assets owned by user in given chain IDs.
 */
export async function getAssets(client, parameters) {
    const { account, assetFilter, assetTypeFilter, chainFilter } = parameters;
    try {
        const method = 'wallet_getAssets';
        const result = await client.request({
            method,
            params: [
                z.encode(RpcSchema.wallet_getAssets.Parameters, {
                    account,
                    assetFilter,
                    assetTypeFilter,
                    chainFilter,
                }),
            ],
        });
        const value = z.decode(RpcSchema.wallet_getAssets.Response, result);
        const decoded = Object.entries(value).reduce((acc, [key, value]) => {
            acc[Hex.toNumber(key)] = value;
            return acc;
        }, {});
        const aggregated = {};
        for (const value of Object.values(decoded)) {
            for (const item of value) {
                const key = JSON.stringify(item.metadata);
                aggregated[key] = {
                    ...item,
                    balance: item.balance + (aggregated[key]?.balance ?? 0n),
                };
            }
        }
        return {
            ...decoded,
            '0': Object.values(aggregated),
        };
    }
    catch (error) {
        parseSchemaError(error);
        throw error;
    }
}
/**
 * Requests faucet funds to be sent to an address on the Relay.
 */
export async function addFaucetFunds(client, parameters) {
    const { address, chain = client.chain, tokenAddress, value } = parameters;
    try {
        const method = 'wallet_addFaucetFunds';
        const result = await client.request({
            method,
            params: [
                z.encode(RpcSchema.wallet_addFaucetFunds.Parameters, {
                    address,
                    chainId: chain?.id,
                    tokenAddress,
                    value,
                }),
            ],
        }, {
            retryCount: 0,
        });
        // relay state can be behind node state. wait to ensure sync.
        // TODO: figure out how to resolve.
        await new Promise((resolve) => setTimeout(resolve, 2_000));
        return result;
    }
    catch (error) {
        parseSchemaError(error);
        throw error;
    }
}
/**
 * Gets the status of a call bundle.
 *
 * @example
 * TODO
 *
 * @param client - The client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function getCallsStatus(client, parameters) {
    const { id } = parameters;
    try {
        const method = 'wallet_getCallsStatus';
        const result = await client.request({
            method,
            params: [id],
        });
        return z.decode(RpcSchema.wallet_getCallsStatus.Response, result);
    }
    catch (error) {
        parseSchemaError(error);
        throw error;
    }
}
/**
 * Gets the keys for a given account.
 *
 * @example
 * TODO
 *
 * @param client - The client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function getKeys(client, parameters) {
    const { address, chainIds } = parameters;
    try {
        const method = 'wallet_getKeys';
        const result = await client.request({
            method,
            params: [
                z.encode(RpcSchema.wallet_getKeys.Parameters, {
                    address,
                    chainIds,
                }),
            ],
        });
        return z.decode(RpcSchema.wallet_getKeys.Response, result);
    }
    catch (error) {
        parseSchemaError(error);
        throw error;
    }
}
/**
 * Gets the health of the RPC.
 *
 * @example
 * TODO
 *
 * @param client - The client to use.
 * @returns Result.
 */
export async function health(client) {
    const method = 'health';
    const result = await withCache(() => client.request({
        method,
    }), { cacheKey: `${client.uid}.${method}` });
    return z.decode(RpcSchema.health.Response, result);
}
/**
 * Prepares a call bundle.
 *
 * @example
 * TODO
 *
 * @param client - The client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function prepareCalls(client, parameters) {
    const { address, capabilities, chain = client.chain, key } = parameters;
    const calls = parameters.calls.map((call) => {
        return {
            data: call.abi
                ? AbiFunction.encodeData(AbiFunction.fromAbi(call.abi, call.functionName), call.args)
                : (call.data ?? '0x'),
            to: call.to,
            value: call.value ?? 0n,
        };
    });
    try {
        const method = 'wallet_prepareCalls';
        const result = await client.request({
            method,
            params: [
                z.encode(RpcSchema.wallet_prepareCalls.Parameters, {
                    calls,
                    capabilities: {
                        ...capabilities,
                        meta: {
                            ...capabilities?.meta,
                        },
                    },
                    chainId: chain?.id,
                    from: address,
                    key: key
                        ? {
                            prehash: key.prehash,
                            publicKey: key.publicKey,
                            type: key.type,
                        }
                        : undefined,
                }),
            ],
        }, {
            retryCount: 0,
        });
        return Object.assign(z.decode(RpcSchema.wallet_prepareCalls.Response, result), { _raw: result });
    }
    catch (error) {
        parseSchemaError(error);
        parseExecutionError(error, { calls: parameters.calls });
        throw error;
    }
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
    const { address, chain = client.chain, delegation, ...capabilities } = parameters;
    try {
        const method = 'wallet_prepareUpgradeAccount';
        const result = await client.request({
            method,
            params: [
                z.encode(RpcSchema.wallet_prepareUpgradeAccount.Parameters, U.normalizeValue({
                    address,
                    capabilities,
                    chainId: chain?.id,
                    delegation,
                })),
            ],
        }, {
            retryCount: 0,
        });
        return z.decode(RpcSchema.wallet_prepareUpgradeAccount.Response, result);
    }
    catch (error) {
        parseSchemaError(error);
        parseExecutionError(error);
        throw error;
    }
}
/**
 * Broadcasts a signed call bundle.
 *
 * @example
 * TODO
 *
 * @param client - The client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function sendPreparedCalls(client, parameters) {
    const { capabilities, context, key, signature } = parameters;
    try {
        const method = 'wallet_sendPreparedCalls';
        const result = await client.request({
            method,
            params: [
                z.encode(RpcSchema.wallet_sendPreparedCalls.Parameters, {
                    capabilities,
                    context: {
                        preCall: context.preCall,
                        quote: context.quote,
                    },
                    key: key
                        ? {
                            prehash: key.prehash,
                            publicKey: key.publicKey,
                            type: key.type,
                        }
                        : undefined,
                    signature,
                }),
            ],
        }, {
            retryCount: 0,
        });
        return z.decode(RpcSchema.wallet_sendPreparedCalls.Response, result);
    }
    catch (error) {
        parseSchemaError(error);
        parseExecutionError(error);
        throw error;
    }
}
/**
 * NOTE: SHOULD ONLY BE USED ON SERVER.
 *
 * Gets onramp contact info for address.
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function getOnrampContactInfo(client, parameters) {
    const { address, secret } = parameters;
    try {
        const method = 'account_getOnrampContactInfo';
        const result = await client.request({
            method,
            params: [
                z.encode(RpcSchema.account_getOnrampContactInfo.Parameters, {
                    address,
                    secret,
                }),
            ],
        }, {
            retryCount: 0,
        });
        return z.decode(RpcSchema.account_getOnrampContactInfo.Response, result);
    }
    catch (error) {
        parseSchemaError(error);
        parseExecutionError(error);
        throw error;
    }
}
/**
 * Gets onramp status for address
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function onrampStatus(client, parameters) {
    const { address } = parameters;
    try {
        const method = 'account_onrampStatus';
        const result = await client.request({
            method,
            params: [
                z.encode(RpcSchema.account_onrampStatus.Parameters, {
                    address,
                }),
            ],
        }, {
            retryCount: 0,
        });
        return z.decode(RpcSchema.account_onrampStatus.Response, result);
    }
    catch (error) {
        parseSchemaError(error);
        parseExecutionError(error);
        throw error;
    }
}
/**
 * Resends phone verification for address
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function resendVerifyPhone(client, parameters) {
    const { phone, walletAddress } = parameters;
    try {
        const method = 'account_resendVerifyPhone';
        const result = await client.request({
            method,
            params: [
                z.encode(RpcSchema.account_resendVerifyPhone.Parameters, {
                    phone,
                    walletAddress,
                }),
            ],
        }, {
            retryCount: 0,
        });
        return z.decode(RpcSchema.account_resendVerifyPhone.Response, result);
    }
    catch (error) {
        parseSchemaError(error);
        parseExecutionError(error);
        throw error;
    }
}
/**
 * Sets email for address
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function setEmail(client, parameters) {
    const { email, walletAddress } = parameters;
    try {
        const method = 'account_setEmail';
        const result = await client.request({
            method,
            params: [
                z.encode(RpcSchema.account_setEmail.Parameters, {
                    email,
                    walletAddress,
                }),
            ],
        }, {
            retryCount: 0,
        });
        return z.decode(RpcSchema.account_setEmail.Response, result);
    }
    catch (error) {
        parseSchemaError(error);
        parseExecutionError(error);
        throw error;
    }
}
/**
 * Sets phone for address
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function setPhone(client, parameters) {
    const { phone, walletAddress } = parameters;
    try {
        const method = 'account_setPhone';
        const result = await client.request({
            method,
            params: [
                z.encode(RpcSchema.account_setPhone.Parameters, {
                    phone,
                    walletAddress,
                }),
            ],
        }, {
            retryCount: 0,
        });
        return z.decode(RpcSchema.account_setPhone.Response, result);
    }
    catch (error) {
        parseSchemaError(error);
        parseExecutionError(error);
        throw error;
    }
}
/**
 * Submits an account upgrade to the Relay.
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function upgradeAccount(client, parameters) {
    const { context, signatures } = parameters;
    try {
        const method = 'wallet_upgradeAccount';
        await client.request({
            method,
            params: [
                z.encode(RpcSchema.wallet_upgradeAccount.Parameters, {
                    context,
                    signatures,
                }),
            ],
        }, {
            retryCount: 0,
        });
    }
    catch (error) {
        parseSchemaError(error);
        parseExecutionError(error);
        throw error;
    }
}
/**
 * Verifies email for address
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function verifyEmail(client, parameters) {
    const { chainId, email, signature, token, walletAddress } = parameters;
    try {
        const method = 'account_verifyEmail';
        const result = await client.request({
            method,
            params: [
                z.encode(RpcSchema.account_verifyEmail.Parameters, {
                    chainId,
                    email,
                    signature,
                    token,
                    walletAddress,
                }),
            ],
        }, {
            retryCount: 0,
        });
        return z.decode(RpcSchema.account_verifyEmail.Response, result);
    }
    catch (error) {
        parseSchemaError(error);
        parseExecutionError(error);
        throw error;
    }
}
/**
 * Verifies email for address
 *
 * @example
 * TODO
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function verifyPhone(client, parameters) {
    const { code, phone, walletAddress } = parameters;
    try {
        const method = 'account_verifyPhone';
        const result = await client.request({
            method,
            params: [
                z.encode(RpcSchema.account_verifyPhone.Parameters, {
                    code,
                    phone,
                    walletAddress,
                }),
            ],
        }, {
            retryCount: 0,
        });
        return z.decode(RpcSchema.account_verifyPhone.Response, result);
    }
    catch (error) {
        parseSchemaError(error);
        parseExecutionError(error);
        throw error;
    }
}
/**
 * Verifies a prepare calls response.
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Whether or not the response is valid.
 */
export async function verifyPrepareCallsResponse(client, parameters) {
    const { signature } = parameters;
    const { signature: _, capabilities: { feeSignature: __, ...capabilities }, ...response } = parameters.response;
    const sorted = sortKeys({ capabilities, ...response });
    const payload = Hash.keccak256(Hex.fromString(JSON.stringify(sorted)));
    const address = Secp256k1.recoverAddress({
        payload,
        signature: Signature.fromHex(signature),
    });
    const { quoteSigner } = await health(client);
    return address === quoteSigner;
}
/**
 * Verifies a signature.
 *
 * @example
 * TODO
 *
 * @param client - The client to use.
 * @param parameters - Parameters.
 * @returns Result.
 */
export async function verifySignature(client, parameters) {
    const { address, chain = client.chain, digest, signature } = parameters;
    try {
        async function fallback() {
            const valid = await verifyHash(client, {
                address,
                hash: digest,
                signature,
            });
            return {
                proof: null,
                valid,
            };
        }
        const method = 'wallet_verifySignature';
        const result = await (async () => {
            const result = await client
                .request({
                method,
                params: [
                    z.encode(RpcSchema.wallet_verifySignature.Parameters, {
                        address,
                        chainId: chain?.id,
                        digest,
                        signature,
                    }),
                ],
            }, {
                retryCount: 0,
            })
                .catch(fallback);
            if (result.valid)
                return result;
            return fallback();
        })();
        return z.decode(RpcSchema.wallet_verifySignature.Response, result);
    }
    catch (error) {
        parseSchemaError(error);
        throw error;
    }
}
export function parseExecutionError(e, { calls } = {}) {
    if (!(e instanceof BaseError))
        return;
    const getAbiError = (error) => {
        try {
            if (error.name === 'ContractFunctionExecutionError') {
                const data = error.cause.name === 'ContractFunctionRevertedError'
                    ? error.cause.data
                    : undefined;
                if (data)
                    return AbiError.fromAbi([data.abiItem], data.errorName);
            }
            const cause = error.walk((e) => !(e instanceof Error) &&
                e.code === 3);
            if (!cause)
                return undefined;
            const { data, message } = cause;
            if (data === '0xd0d5039b')
                return AbiError.from('error Unauthorized()');
            return {
                inputs: [],
                name: (message ?? data).split('(')[0],
                type: 'error',
            };
        }
        catch {
            return undefined;
        }
    };
    const error = getExecuteError(e, {
        calls: (calls ?? []),
    });
    const abiError = getAbiError(error);
    if (error === e && !abiError)
        return;
    throw new ExecutionError(Object.assign(error, { abiError }));
}
export function sortKeys(value) {
    if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value))
            return value.map(sortKeys);
        const result = {};
        for (const key of Object.keys(value).sort())
            result[key] = sortKeys(value[key]);
        return result;
    }
    return value;
}
/** Thrown when schema validation fails. */
export function parseSchemaError(e) {
    if (e.name === '$ZodError')
        throw u.toValidationError(e);
}
/** Thrown when the execution fails. */
export class ExecutionError extends Errors.BaseError {
    constructor(cause) {
        super('An error occurred while executing calls.', {
            cause,
            metaMessages: [cause.abiError && 'Reason: ' + cause.abiError.name].filter(Boolean),
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'Rpc.ExecutionError'
        });
        Object.defineProperty(this, "abiError", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.abiError = cause.abiError;
    }
}
//# sourceMappingURL=relayActions.js.map