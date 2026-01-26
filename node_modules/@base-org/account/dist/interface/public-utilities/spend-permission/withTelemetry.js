import { logSpendPermissionUtilCompleted, logSpendPermissionUtilError, logSpendPermissionUtilStarted, } from '../../../core/telemetry/events/spend-permission.js';
import { parseErrorMessageFromAny } from '../../../core/telemetry/utils.js';
import { store } from '../../../store/store.js';
// biome-ignore lint/suspicious/noExplicitAny: HOF
export function withTelemetry(fn) {
    // Honor the telemetry preference
    const config = store.config.get();
    if (config.preference?.telemetry === false) {
        return fn;
    }
    return (...args) => {
        const functionName = getFunctionName(fn);
        logSpendPermissionUtilStarted(functionName);
        try {
            const result = fn(...args);
            logSpendPermissionUtilCompleted(functionName);
            return result;
        }
        catch (error) {
            logSpendPermissionUtilError(functionName, parseErrorMessageFromAny(error));
            throw error;
        }
    };
}
// biome-ignore lint/suspicious/noExplicitAny: HOF helper
function getFunctionName(fn) {
    return fn.name.replace('Fn', '');
}
//# sourceMappingURL=withTelemetry.js.map