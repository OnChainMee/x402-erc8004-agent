import * as Key from '../../viem/Key.js';
import * as Permissions from './schema/permissions.js';
export const Schema = Permissions.Request;
export function fromKey(key) {
    const { expiry, feeToken, permissions, publicKey, type } = key;
    return {
        expiry,
        feeToken: feeToken ?? null,
        key: {
            publicKey,
            type,
        },
        permissions: (permissions ?? {}),
    };
}
export async function toKey(request, options = {}) {
    if (!request)
        return undefined;
    const chainId = options.chainId ?? request.chainId;
    const expiry = request.expiry ?? 0;
    const feeToken = request.feeToken;
    const permissions = Key.resolvePermissions(request, {
        feeTokens: options.feeTokens,
    });
    const baseParameters = {
        chainId,
        expiry,
        feeToken,
        permissions,
        role: 'session',
    };
    if (request?.key)
        return Key.from({
            ...baseParameters,
            publicKey: request.key.publicKey,
            type: request.key.type ?? 'secp256k1',
        });
    const hasWebCryptoSubtle = typeof globalThis.crypto?.subtle?.generateKey === 'function';
    if (hasWebCryptoSubtle)
        try {
            return await Key.createWebCryptoP256(baseParameters);
        }
        catch (error) {
            if (!isWebCryptoUnavailable(error))
                throw error;
        }
    return Key.createP256(baseParameters);
}
function isWebCryptoUnavailable(error) {
    if (!(error instanceof Error))
        return false;
    const message = error.message?.toLowerCase() ?? '';
    return (error.name === 'TypeError' ||
        error.name === 'ReferenceError' ||
        message.includes('subtle') ||
        message.includes('generatekey'));
}
//# sourceMappingURL=permissionsRequest.js.map