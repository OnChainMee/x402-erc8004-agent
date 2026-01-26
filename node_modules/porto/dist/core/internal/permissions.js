import * as Key from '../../viem/Key.js';
import * as Permissions_ from './schema/permissions.js';
export const Schema = Permissions_.Permissions;
export function fromKey(key, options) {
    const { chainId, expiry, permissions, id, publicKey, type } = key;
    const { address } = options;
    return {
        address,
        chainId,
        expiry,
        id,
        key: {
            publicKey,
            type,
        },
        permissions: (permissions ?? {}),
    };
}
export function toKey(permissions) {
    const { chainId, expiry, key } = permissions;
    return Key.from({
        chainId,
        expiry,
        permissions: permissions.permissions ?? {},
        publicKey: key.publicKey,
        role: 'session',
        type: key.type,
    });
}
//# sourceMappingURL=permissions.js.map