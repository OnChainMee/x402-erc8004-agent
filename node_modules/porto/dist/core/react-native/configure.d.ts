import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { type ReactNativeEnvironment } from './environment.js';
export declare function configureReactNativeEnvironment(): ReactNativeEnvironment | {
    dismissAuthSession(): void;
    makeRedirectUri: typeof AuthSession.makeRedirectUri;
    maybeCompleteAuthSession: typeof WebBrowser.maybeCompleteAuthSession;
    openAuthSessionAsync: typeof WebBrowser.openAuthSessionAsync;
};
//# sourceMappingURL=configure.d.ts.map