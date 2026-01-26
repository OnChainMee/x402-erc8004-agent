import { filterQueryOptions } from './utils.js';
export function getAdminsQueryKey(options = {}) {
    const { connector, ...parameters } = options;
    return [
        'admins',
        { ...filterQueryOptions(parameters), connectorUid: connector?.uid },
    ];
}
export function getPermissionsQueryKey(options = {}) {
    const { connector, ...parameters } = options;
    return [
        'permissions',
        { ...filterQueryOptions(parameters), connectorUid: connector?.uid },
    ];
}
export function getAssetsQueryKey(options) {
    const { connector, ...parameters } = options;
    return [
        'assets',
        { ...filterQueryOptions(parameters), connectorUid: connector?.uid },
    ];
}
//# sourceMappingURL=query.js.map