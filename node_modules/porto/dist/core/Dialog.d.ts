import type { RpcRequest, RpcResponse } from 'ox';
import type { ThemeFragment } from '../theme/Theme.js';
import type { Internal } from './internal/porto.js';
import * as Messenger from './Messenger.js';
import type { QueuedRequest, Store } from './Porto.js';
import * as ReactNativeEnvironment from './react-native/environment.js';
export declare const hostUrls: {
    readonly local: "http://localhost:5175/dialog/";
    readonly prod: "https://id.porto.sh/dialog";
    readonly stg: "https://stg.id.porto.sh/dialog";
};
/** Dialog interface. */
export type Dialog = {
    name: string;
    setup: (parameters: {
        host: string;
        internal: Internal;
        theme?: ThemeFragment | undefined;
        themeController?: ThemeController | undefined;
    }) => {
        close: () => void;
        destroy: () => void;
        open: (parameters: any) => void;
        secure: () => Promise<{
            frame: boolean;
            host: boolean;
            protocol: boolean;
        }>;
        syncRequests: (requests: readonly QueuedRequest[]) => Promise<void>;
    };
    supportsHeadless: boolean;
};
/**
 * Instantiates a dialog.
 *
 * @param dialog - Dialog.
 * @returns Instantiated dialog.
 */
export declare function from<const dialog extends Dialog>(dialog: dialog): dialog;
/**
 * Instantiates an iframe dialog.
 *
 * @returns iframe dialog.
 */
export declare function iframe(options?: iframe.Options): {
    readonly name: "noop";
    readonly setup: () => {
        close(): void;
        destroy(): void;
        open(): void;
        secure(): Promise<{
            frame: true;
            host: true;
            protocol: true;
        }>;
        syncRequests(): Promise<void>;
    };
    readonly supportsHeadless: true;
} | {
    readonly name: "iframe";
    readonly setup: (parameters: {
        host: string;
        internal: Internal;
        theme?: ThemeFragment | undefined;
        themeController?: ThemeController | undefined;
    }) => {
        close(): void;
        destroy(): void;
        open(): void;
        secure(): Promise<{
            frame: boolean;
            host: boolean;
            protocol: boolean;
        }>;
        syncRequests(requests: readonly QueuedRequest[]): Promise<void>;
    };
    readonly supportsHeadless: true;
};
export declare namespace iframe {
    type Options = {
        size?: {
            width: number;
            height?: number | undefined;
        } | undefined;
        /**
         * Skips check for insecure protocol (HTTP).
         * @default false
         */
        skipProtocolCheck?: boolean | undefined;
        /**
         * Skips check for unsupported iframe requests that result
         * to a popup.
         * @default false
         */
        skipUnsupported?: boolean | undefined;
    };
}
/**
 * Instantiates a popup dialog.
 *
 * @returns Popup dialog.
 */
export declare function popup(options?: popup.Options): {
    readonly name: "noop";
    readonly setup: () => {
        close(): void;
        destroy(): void;
        open(): void;
        secure(): Promise<{
            frame: true;
            host: true;
            protocol: true;
        }>;
        syncRequests(): Promise<void>;
    };
    readonly supportsHeadless: true;
} | {
    readonly name: "popup";
    readonly setup: (parameters: {
        host: string;
        internal: Internal;
        theme?: ThemeFragment | undefined;
        themeController?: ThemeController | undefined;
    }) => {
        close(): void;
        destroy(): void;
        open(): void;
        secure(): Promise<{
            frame: true;
            host: true;
            protocol: true;
        }>;
        syncRequests(requests: readonly QueuedRequest[]): Promise<void>;
    };
    readonly supportsHeadless: false;
};
export declare namespace popup {
    type Options = {
        /**
         * The type of popup window to create.
         * - 'auto': Automatically decide based on context (default)
         * - 'popup': Popup window with controlled height
         * - 'page': Full page/tab
         * @default 'auto'
         */
        type?: 'auto' | 'popup' | 'page' | undefined;
        /**
         * Initial size of the popup window when type is 'popup' or 'auto' resolves to popup.
         * @default { width: 360, height: 282 }
         */
        size?: {
            width: number;
            height: number;
        } | undefined;
    };
}
/**
 * Instantiates a authSession dialog for React Native.
 * @param options - Options.
 */
export declare function authSession(options?: authSession.Options): {
    readonly name: "noop";
    readonly setup: () => {
        close(): void;
        destroy(): void;
        open(): void;
        secure(): Promise<{
            frame: true;
            host: true;
            protocol: true;
        }>;
        syncRequests(): Promise<void>;
    };
    readonly supportsHeadless: true;
} | {
    readonly name: "authSession";
    readonly setup: (parameters: {
        host: string;
        internal: Internal;
        theme?: ThemeFragment | undefined;
        themeController?: ThemeController | undefined;
    }) => {
        close(): void;
        destroy(): void;
        open(): void;
        secure(): Promise<{
            frame: false;
            host: true;
            protocol: true;
        }>;
        syncRequests(requests: readonly QueuedRequest[]): Promise<void>;
    };
    readonly supportsHeadless: false;
};
export declare namespace authSession {
    type Options = {
        /**
         * where to redirect the user after operations are completed
         */
        redirectUri?: ReactNativeEnvironment.ReactNativeEnvironment['redirectUri'] | undefined;
        requestOptions?: ReactNativeEnvironment.AuthSessionOpenOptions | undefined;
    };
}
/**
 * Instantiates a noop dialog.
 *
 * @returns Noop dialog.
 */
export declare function noop(): {
    readonly name: "noop";
    readonly setup: () => {
        close(): void;
        destroy(): void;
        open(): void;
        secure(): Promise<{
            frame: true;
            host: true;
            protocol: true;
        }>;
        syncRequests(): Promise<void>;
    };
    readonly supportsHeadless: true;
};
/**
 * Instantiates an inline iframe dialog rendered on a provided `element`.
 *
 * @param options - Options.
 * @returns Inline iframe dialog.
 */
export declare function experimental_inline(options: inline.Options): {
    readonly name: "noop";
    readonly setup: () => {
        close(): void;
        destroy(): void;
        open(): void;
        secure(): Promise<{
            frame: true;
            host: true;
            protocol: true;
        }>;
        syncRequests(): Promise<void>;
    };
    readonly supportsHeadless: true;
} | {
    readonly name: "inline";
    readonly setup: (parameters: {
        host: string;
        internal: Internal;
        theme?: ThemeFragment | undefined;
        themeController?: ThemeController | undefined;
    }) => {
        close(): void;
        destroy(): void;
        open(): void;
        secure(): Promise<{
            frame: true;
            host: true;
            protocol: true;
        }>;
        syncRequests(requests: readonly QueuedRequest[]): Promise<void>;
    };
    readonly supportsHeadless: true;
};
export declare namespace inline {
    type Options = {
        element: () => HTMLElement;
    };
}
export type ThemeController = {
    /**
     * Used internally to setup the controller.
     * @deprecated
     */
    _setup: (messenger: Messenger.Messenger | null, resetTheme?: boolean) => void;
    /**
     * Update the dialog theme.
     * @param theme - The theme to set.
     */
    setTheme: (theme: ThemeFragment) => void;
    /**
     * Get the latest theme set since the controller was initialized.
     * @returns The latest theme or `null` if no theme was set.
     */
    getTheme: () => ThemeFragment | null;
};
/**
 * A controller to update the dialog theme.
 */
export declare function createThemeController(): ThemeController;
export declare const defaultSize: {
    height: number;
    width: number;
};
export declare function requiresConfirmation(request: RpcRequest.RpcRequest, options?: {
    methodPolicies?: Messenger.ReadyOptions['methodPolicies'] | undefined;
    targetOrigin?: string | undefined;
}): boolean;
export declare function getReferrer(): {
    icon: string | {
        dark: string;
        light: string;
    } | undefined;
    title: string;
};
export declare function handleBlur(store: Store): void;
export declare function handleResponse(store: Store, response: RpcResponse.RpcResponse): void;
export declare function getDialogUrl(host: string): string;
//# sourceMappingURL=Dialog.d.ts.map