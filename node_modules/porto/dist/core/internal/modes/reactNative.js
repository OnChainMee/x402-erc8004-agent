import * as Dialog from '../../Dialog.js';
import { isReactNative } from '../../react-native/utils.js';
import * as Mode from '../mode.js';
import * as Relay from '../modes/relay.js';
import { dialog } from './dialog.js';
export function reactNative(parameters = {}) {
    if (!isReactNative())
        return (parameters.fallback ??
            Mode.from({ actions: Relay.relay().actions, name: 'relay' }));
    const { redirectUri, requestOptions, ...baseParameters } = parameters;
    return Mode.from({
        ...dialog({
            ...baseParameters,
            renderer: Dialog.authSession({ redirectUri, requestOptions }),
        }),
        name: 'reactNative',
    });
}
//# sourceMappingURL=reactNative.js.map