import { sendTransactionSync, } from '../actions/sendTransactionSync.js';
export function sendTransactionSyncMutationOptions(config) {
    return {
        mutationFn(variables) {
            return sendTransactionSync(config, variables);
        },
        mutationKey: ['sendTransactionSync'],
    };
}
//# sourceMappingURL=sendTransactionSync.js.map