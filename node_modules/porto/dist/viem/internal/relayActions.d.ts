/**
 * Actions for Porto Relay.
 *
 * @see https://porto.sh/relay
 */
import * as AbiError from 'ox/AbiError';
import type * as Address from 'ox/Address';
import * as Errors from 'ox/Errors';
import * as Hex from 'ox/Hex';
import { BaseError, type Calls, type Chain, type Client, type Narrow, type Transport, type ValueOf } from 'viem';
import * as z from 'zod/mini';
import * as RpcSchema from '../../core/internal/relay/rpcSchema.js';
import * as u from '../../core/internal/schema/utils.js';
import type { IsUndefined, OneOf } from '../../core/internal/types.js';
import type { sendCalls } from '../RelayActions.js';
import type { GetChainParameter } from './utils.js';
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
export declare function getAuthorization(client: Client, parameters: getAuthorization.Parameters): Promise<getAuthorization.ReturnType>;
export declare namespace getAuthorization {
    type Parameters = RpcSchema.wallet_getAuthorization.Parameters;
    type ReturnType = RpcSchema.wallet_getAuthorization.Response;
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
export declare function getCapabilities<const chainIds extends 'all' | readonly number[] | undefined = undefined, const raw extends boolean = false>(client: Client<Transport>, options?: getCapabilities.Options<chainIds, raw>): Promise<getCapabilities.ReturnType<chainIds, raw>>;
export declare namespace getCapabilities {
    type Options<chainIds extends 'all' | readonly number[] | undefined = undefined, raw extends boolean = false> = {
        /**
         * Whether to return the raw, non-decoded response.
         * @default false
         */
        raw?: raw | boolean | undefined;
    } & OneOf<{
        /**
         * Chain IDs to get the capabilities for.
         * `"all"` will return the capabilities for all supported chains.
         */
        chainIds?: chainIds | 'all' | readonly number[] | undefined;
    } | {
        /**
         * Chain ID to get the capabilities for.
         */
        chainId?: number | undefined;
    }>;
    type ReturnType<chainIds extends 'all' | readonly number[] | undefined = undefined, raw extends boolean = false, value = raw extends true ? z.input<typeof RpcSchema.wallet_getCapabilities.Response> : RpcSchema.wallet_getCapabilities.Response> = IsUndefined<chainIds> extends true ? ValueOf<value> : value;
    type ErrorType = parseSchemaError.ErrorType | Errors.GlobalErrorType;
}
/**
 * Get assets owned by user in given chain IDs.
 */
export declare function getAssets(client: Client, parameters: getAssets.Parameters): Promise<getAssets.ReturnType>;
export declare namespace getAssets {
    type Parameters = RpcSchema.wallet_getAssets.Parameters;
    type ReturnType = RpcSchema.wallet_getAssets.Response;
}
/**
 * Requests faucet funds to be sent to an address on the Relay.
 */
export declare function addFaucetFunds<chain extends Chain | undefined>(client: Client<Transport, chain>, parameters: addFaucetFunds.Parameters<chain>): Promise<RpcSchema.wallet_addFaucetFunds.Response>;
export declare namespace addFaucetFunds {
    type Parameters<chain extends Chain | undefined = Chain | undefined> = Omit<RpcSchema.wallet_addFaucetFunds.Parameters, 'chainId'> & GetChainParameter<chain>;
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
export declare function getCallsStatus(client: Client, parameters: getCallsStatus.Parameters): Promise<getCallsStatus.ReturnType>;
export declare namespace getCallsStatus {
    type Parameters = {
        id: Hex.Hex;
    };
    type ReturnType = RpcSchema.wallet_getCallsStatus.Response;
    type ErrorType = parseSchemaError.ErrorType | Errors.GlobalErrorType;
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
export declare function getKeys(client: Client, parameters: getKeys.Parameters): Promise<getKeys.ReturnType>;
export declare namespace getKeys {
    type Parameters = RpcSchema.wallet_getKeys.Parameters;
    type ReturnType = RpcSchema.wallet_getKeys.Response;
    type ErrorType = parseSchemaError.ErrorType | Errors.GlobalErrorType;
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
export declare function health(client: Client): Promise<health.ReturnType>;
export declare namespace health {
    type ReturnType = RpcSchema.health.Response;
    type ErrorType = Errors.GlobalErrorType;
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
export declare function prepareCalls<const calls extends readonly unknown[], chain extends Chain | undefined>(client: Client<Transport, chain>, parameters: prepareCalls.Parameters<calls, chain>): Promise<prepareCalls.ReturnType>;
export declare namespace prepareCalls {
    type Parameters<calls extends readonly unknown[] = readonly unknown[], chain extends Chain | undefined = Chain | undefined> = {
        address?: Address.Address | undefined;
        calls: Calls<Narrow<calls>>;
        capabilities?: RpcSchema.wallet_prepareCalls.Capabilities | undefined;
        key: RpcSchema.wallet_prepareCalls.Parameters['key'];
    } & GetChainParameter<chain>;
    type ReturnType = RpcSchema.wallet_prepareCalls.Response & {
        _raw: z.input<typeof RpcSchema.wallet_prepareCalls.Response>;
    };
    type ErrorType = parseSchemaError.ErrorType | parseExecutionError.ErrorType | Errors.GlobalErrorType;
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
export declare function prepareUpgradeAccount<chain extends Chain | undefined>(client: Client<Transport, chain>, parameters: prepareUpgradeAccount.Parameters<chain>): Promise<prepareUpgradeAccount.ReturnType>;
export declare namespace prepareUpgradeAccount {
    type Parameters<chain extends Chain | undefined = Chain | undefined> = RpcSchema.wallet_prepareUpgradeAccount.Parameters['capabilities'] & Omit<RpcSchema.wallet_prepareUpgradeAccount.Parameters, 'capabilities' | 'chainId'> & GetChainParameter<chain>;
    type ReturnType = RpcSchema.wallet_prepareUpgradeAccount.Response;
    type ErrorType = parseSchemaError.ErrorType | parseExecutionError.ErrorType | Errors.GlobalErrorType;
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
export declare function sendPreparedCalls(client: Client, parameters: sendPreparedCalls.Parameters): Promise<sendPreparedCalls.ReturnType>;
export declare namespace sendPreparedCalls {
    type Parameters = RpcSchema.wallet_sendPreparedCalls.Parameters;
    type ReturnType = RpcSchema.wallet_sendPreparedCalls.Response;
    type ErrorType = parseSchemaError.ErrorType | parseExecutionError.ErrorType | Errors.GlobalErrorType;
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
export declare function getOnrampContactInfo(client: Client, parameters: getOnrampContactInfo.Parameters): Promise<getOnrampContactInfo.ReturnType>;
export declare namespace getOnrampContactInfo {
    type Parameters = RpcSchema.account_getOnrampContactInfo.Parameters;
    type ReturnType = RpcSchema.account_getOnrampContactInfo.Response;
    type ErrorType = parseSchemaError.ErrorType | parseExecutionError.ErrorType | Errors.GlobalErrorType;
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
export declare function onrampStatus(client: Client, parameters: onrampStatus.Parameters): Promise<onrampStatus.ReturnType>;
export declare namespace onrampStatus {
    type Parameters = RpcSchema.account_onrampStatus.Parameters;
    type ReturnType = RpcSchema.account_onrampStatus.Response;
    type ErrorType = parseSchemaError.ErrorType | parseExecutionError.ErrorType | Errors.GlobalErrorType;
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
export declare function resendVerifyPhone(client: Client, parameters: resendVerifyPhone.Parameters): Promise<resendVerifyPhone.ReturnType>;
export declare namespace resendVerifyPhone {
    type Parameters = RpcSchema.account_resendVerifyPhone.Parameters;
    type ReturnType = RpcSchema.account_resendVerifyPhone.Response;
    type ErrorType = parseSchemaError.ErrorType | parseExecutionError.ErrorType | Errors.GlobalErrorType;
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
export declare function setEmail(client: Client, parameters: setEmail.Parameters): Promise<setEmail.ReturnType>;
export declare namespace setEmail {
    type Parameters = RpcSchema.account_setEmail.Parameters;
    type ReturnType = RpcSchema.account_setEmail.Response;
    type ErrorType = parseSchemaError.ErrorType | parseExecutionError.ErrorType | Errors.GlobalErrorType;
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
export declare function setPhone(client: Client, parameters: setPhone.Parameters): Promise<setPhone.ReturnType>;
export declare namespace setPhone {
    type Parameters = RpcSchema.account_setPhone.Parameters;
    type ReturnType = RpcSchema.account_setPhone.Response;
    type ErrorType = parseSchemaError.ErrorType | parseExecutionError.ErrorType | Errors.GlobalErrorType;
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
export declare function upgradeAccount(client: Client, parameters: upgradeAccount.Parameters): Promise<upgradeAccount.ReturnType>;
export declare namespace upgradeAccount {
    type Parameters = RpcSchema.wallet_upgradeAccount.Parameters;
    type ReturnType = RpcSchema.wallet_upgradeAccount.Response;
    type ErrorType = parseSchemaError.ErrorType | parseExecutionError.ErrorType | Errors.GlobalErrorType;
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
export declare function verifyEmail(client: Client, parameters: verifyEmail.Parameters): Promise<verifyEmail.ReturnType>;
export declare namespace verifyEmail {
    type Parameters = RpcSchema.account_verifyEmail.Parameters;
    type ReturnType = RpcSchema.account_verifyEmail.Response;
    type ErrorType = parseSchemaError.ErrorType | parseExecutionError.ErrorType | Errors.GlobalErrorType;
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
export declare function verifyPhone(client: Client, parameters: verifyPhone.Parameters): Promise<verifyPhone.ReturnType>;
export declare namespace verifyPhone {
    type Parameters = RpcSchema.account_verifyPhone.Parameters;
    type ReturnType = RpcSchema.account_verifyPhone.Response;
    type ErrorType = parseSchemaError.ErrorType | parseExecutionError.ErrorType | Errors.GlobalErrorType;
}
/**
 * Verifies a prepare calls response.
 *
 * @param client - Client to use.
 * @param parameters - Parameters.
 * @returns Whether or not the response is valid.
 */
export declare function verifyPrepareCallsResponse(client: Client, parameters: verifyPrepareCallsResponse.Parameters): Promise<boolean>;
export declare namespace verifyPrepareCallsResponse {
    type Parameters = {
        response: z.input<typeof RpcSchema.wallet_prepareCalls.Response>;
        signature: Hex.Hex;
    };
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
export declare function verifySignature<chain extends Chain | undefined>(client: Client<Transport, chain>, parameters: verifySignature.Parameters<chain>): Promise<verifySignature.ReturnType>;
export declare namespace verifySignature {
    type Parameters<chain extends Chain | undefined = Chain | undefined> = Omit<RpcSchema.wallet_verifySignature.Parameters, 'chainId' | 'keyIdOrAddress'> & {
        address: Address.Address;
    } & GetChainParameter<chain>;
    type ReturnType = RpcSchema.wallet_verifySignature.Response;
    type ErrorType = parseSchemaError.ErrorType | Errors.GlobalErrorType;
}
export declare function parseExecutionError<const calls extends readonly unknown[]>(e: unknown, { calls }?: {
    calls?: sendCalls.Parameters<calls>['calls'] | undefined;
}): void;
export declare function sortKeys<value>(value: value): value;
export declare namespace parseExecutionError {
    type ErrorType = ExecutionError | Errors.GlobalErrorType;
}
/** Thrown when schema validation fails. */
export declare function parseSchemaError(e: unknown): void;
export declare namespace parseSchemaError {
    type ErrorType = u.ValidationError | Errors.GlobalErrorType;
}
/** Thrown when the execution fails. */
export declare class ExecutionError extends Errors.BaseError<BaseError> {
    readonly name = "Rpc.ExecutionError";
    abiError?: AbiError.AbiError | undefined;
    constructor(cause: BaseError & {
        abiError?: AbiError.AbiError | undefined;
    });
}
//# sourceMappingURL=relayActions.d.ts.map