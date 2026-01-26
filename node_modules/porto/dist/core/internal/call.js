import * as AbiFunction from 'ox/AbiFunction';
import * as Key from '../../viem/Key.js';
import * as IthacaAccount from './_generated/contracts/IthacaAccount.js';
/** Stub address for self-execution. */
export const selfAddress = '0x2323232323232323232323232323232323232323';
/**
 * Instantiates values to populate a call to authorize a key.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export function authorize(parameters) {
    const { key } = parameters;
    return {
        data: AbiFunction.encodeData(AbiFunction.fromAbi(IthacaAccount.abi, 'authorize'), [Key.serialize(key)]),
        to: selfAddress,
    };
}
export const anyHash = '0x3232323232323232323232323232323232323232323232323232323232323232';
export const anyTarget = '0x3232323232323232323232323232323232323232';
export const anySelector = '0x32323232';
/**
 * Instantiates values to populate a call to set the label of a delegated account.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export function setCanExecute(parameters = {}) {
    const { enabled = true, key, selector = anySelector, to = anyTarget, } = parameters;
    const hash = key ? key.hash : anyHash;
    return {
        data: AbiFunction.encodeData(AbiFunction.fromAbi(IthacaAccount.abi, 'setCanExecute'), [hash, to, selector, enabled]),
        to: selfAddress,
    };
}
/**
 * Instantiates values to populate a call to set the label of a delegated account.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export function setLabel(parameters) {
    const { label } = parameters;
    return {
        data: AbiFunction.encodeData(AbiFunction.fromAbi(IthacaAccount.abi, 'setLabel'), [label]),
        to: selfAddress,
    };
}
/**
 * Instantiates values to populate a call to set the spend limit of a key.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export function setSpendLimit(parameters) {
    const { key, period, limit } = parameters;
    const token = parameters.token ?? '0x0000000000000000000000000000000000000000';
    return {
        data: AbiFunction.encodeData(AbiFunction.fromAbi(IthacaAccount.abi, 'setSpendLimit'), [key.hash, token, Key.toSerializedSpendPeriod[period], limit]),
        to: selfAddress,
    };
}
/**
 * Instantiates values to populate a call to set the signature checker approval of a key.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export function setSignatureCheckerApproval(parameters) {
    const { address, key, enabled } = parameters;
    return {
        data: AbiFunction.encodeData(AbiFunction.fromAbi(IthacaAccount.abi, 'setSignatureCheckerApproval'), [key.hash, address, enabled]),
        to: selfAddress,
    };
}
/**
 * Instantiates values to populate a call to remove the spend limit of a key.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export function removeSpendLimit(parameters) {
    const { key, token, period } = parameters;
    return {
        data: AbiFunction.encodeData(AbiFunction.fromAbi(IthacaAccount.abi, 'removeSpendLimit'), [key.hash, token, Key.toSerializedSpendPeriod[period]]),
        to: selfAddress,
    };
}
/**
 * Instantiates values to populate a call to revoke a key.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export function revoke(parameters) {
    const { keyHash } = parameters;
    return {
        data: AbiFunction.encodeData(AbiFunction.fromAbi(IthacaAccount.abi, 'revoke'), [keyHash]),
        to: selfAddress,
    };
}
/**
 * Instantiates values to populate a call to upgrade the proxy account.
 *
 * @param parameters - Parameters.
 * @returns Instantiated values.
 */
export function upgradeProxyAccount(parameters) {
    const { address, to = selfAddress } = parameters;
    return {
        data: AbiFunction.encodeData(AbiFunction.fromAbi(IthacaAccount.abi, 'upgradeProxyAccount'), [address]),
        to,
    };
}
//# sourceMappingURL=call.js.map