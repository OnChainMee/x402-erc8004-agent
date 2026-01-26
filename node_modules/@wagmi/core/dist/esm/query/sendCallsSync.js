import { sendCallsSync, } from '../actions/sendCallsSync.js';
export function sendCallsSyncMutationOptions(config) {
    return {
        mutationFn(variables) {
            return sendCallsSync(config, variables);
        },
        mutationKey: ['sendCallsSync'],
    };
}
//# sourceMappingURL=sendCallsSync.js.map