import * as AbiItem from 'ox/AbiItem';
import * as Hex from 'ox/Hex';
import * as Call from './call.js';
/**
 * Instantiates a mode.
 *
 * @param mode - Mode.
 * @returns Mode.
 */
export function from(mode) {
    return {
        ...mode,
        setup: mode.setup ?? (() => () => { }),
    };
}
/**
 * Returns the calls needed to authorize the given keys (and permissions).
 *
 * @param keys - Keys to authorize.
 * @returns Calls to authorize the given keys.
 */
export function getAuthorizeCalls(keys) {
    return keys.flatMap((key) => {
        const { permissions, role } = key;
        const permissionCalls = [];
        // Set call scopes.
        if (permissions?.calls)
            permissionCalls.push(...permissions.calls.map((scope) => {
                const selector = (() => {
                    if (!scope.signature)
                        return undefined;
                    if (scope.signature.startsWith('0x'))
                        return scope.signature;
                    return AbiItem.getSelector(scope.signature);
                })();
                return Call.setCanExecute({
                    key,
                    selector,
                    to: scope.to,
                });
            }));
        else if (role === 'session')
            permissionCalls.push(Call.setCanExecute({ key }));
        // Set spend limits.
        if (permissions?.spend)
            permissionCalls.push(...permissions.spend.map((spend) => Call.setSpendLimit({ key, ...spend })));
        // If no spend limits are provided for a session, set a default of 0
        // (account cannot spend ERC20, ERC721, ETH, etc).
        else if (role === 'session')
            permissionCalls.push(Call.setSpendLimit({ key, limit: 0n, period: 'year' }));
        // Set authorized contracts for signature verification.
        if (permissions?.signatureVerification) {
            const { addresses } = permissions.signatureVerification;
            permissionCalls.push(...addresses.map((address) => Call.setSignatureCheckerApproval({
                address,
                enabled: true,
                key,
            })));
        }
        return [Call.authorize({ key }), ...permissionCalls];
    });
}
/**
 *
 * @param parameters
 * @returns
 */
export async function getAuthorizedExecuteKey(parameters) {
    const { account, calls, permissionsId } = parameters;
    // If a key is provided, use it.
    if (typeof permissionsId !== 'undefined') {
        if (permissionsId === null)
            return undefined;
        const key = account.keys?.find((key) => key.publicKey === permissionsId && key.privateKey);
        if (!key)
            throw new Error(`permission (id: ${permissionsId}) does not exist.`);
        return key;
    }
    // Otherwise, try and find a valid session key.
    const sessionKey = account.keys?.find((key) => {
        if (!key.privateKey)
            return false;
        if (key.role !== 'session')
            return false;
        if (key.expiry < BigInt(Math.floor(Date.now() / 1000)))
            return false;
        // Check if every call is covered by a call permission.
        const hasValidScope = calls.every((call) => key.permissions?.calls?.some((scope) => {
            if (scope.to && scope.to !== call.to)
                return false;
            if (scope.signature) {
                if (!call.data)
                    return false;
                const selector = Hex.slice(call.data, 0, 4);
                if (Hex.validate(scope.signature))
                    return scope.signature === selector;
                if (AbiItem.getSelector(scope.signature) !== selector)
                    return false;
            }
            return true;
        }));
        if (hasValidScope)
            return true;
        return false;
    });
    // Fall back to an admin key.
    const adminKey = account.keys?.find((key) => key.role === 'admin' && key.privateKey);
    return sessionKey ?? adminKey;
}
//# sourceMappingURL=mode.js.map