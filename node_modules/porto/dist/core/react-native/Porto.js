import * as Mode from '../Mode.js';
import * as Porto from '../Porto.js';
export const defaultConfig = {
    ...Porto.defaultConfig,
    mode: Mode.reactNative(),
};
/**
 * Instantiates a Porto instance with React Native mode.
 */
export function create(parameters = {}) {
    return Porto.create({
        ...parameters,
        mode: parameters.mode ?? defaultConfig.mode,
    });
}
//# sourceMappingURL=Porto.js.map