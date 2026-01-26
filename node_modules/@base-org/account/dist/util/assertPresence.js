import { standardErrors } from '../core/error/errors.js';
export function assertPresence(value, error, message) {
    if (value === null || value === undefined) {
        throw (error ??
            standardErrors.rpc.invalidParams({
                message: message ?? 'value must be present',
                data: value,
            }));
    }
}
export function assertArrayPresence(value, message) {
    if (!Array.isArray(value)) {
        throw standardErrors.rpc.invalidParams({
            message: message ?? 'value must be an array',
            data: value,
        });
    }
}
//# sourceMappingURL=assertPresence.js.map