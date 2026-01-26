import type * as RpcRequest from 'ox/RpcRequest';
import type * as RpcResponse from 'ox/RpcResponse';
import type * as MethodPolicies from '../remote/internal/methodPolicies.js';
import type * as Theme from '../theme/Theme.js';
import type * as Porto from './Porto.js';
/** Messenger interface. */
export type Messenger = {
    destroy: () => void;
    on: <const topic extends Topic>(topic: topic | Topic, listener: (payload: Payload<topic>, event: MessageEvent) => void, id?: string | undefined) => () => void;
    send: <const topic extends Topic>(topic: topic | Topic, payload: Payload<topic>, targetOrigin?: string | undefined) => Promise<{
        id: string;
        topic: topic;
        payload: Payload<topic>;
    }>;
    sendAsync: <const topic extends Topic>(topic: topic | Topic, payload: Payload<topic>, targetOrigin?: string | undefined) => Promise<Response<topic>>;
};
export type WithReady = Messenger & {
    ready: (options: ReadyOptions) => void;
};
export type ReadyOptions = {
    chainIds: readonly [number, ...number[]];
    methodPolicies?: MethodPolicies.MethodPolicies | undefined;
    trustedHosts?: string[] | undefined;
};
/** Bridge messenger. */
export type Bridge = WithReady & {
    waitForReady: () => Promise<ReadyOptions>;
};
/** CLI relay messenger. */
export type CliRelay = WithReady;
/** Messenger schema. */
export type Schema = [
    {
        topic: 'close';
        payload: undefined;
        response: undefined;
    },
    {
        topic: 'ready';
        payload: ReadyOptions;
        response: undefined;
    },
    {
        topic: 'rpc-requests';
        payload: readonly Porto.QueuedRequest[];
        response: undefined;
    },
    {
        topic: 'rpc-response';
        payload: RpcResponse.RpcResponse & {
            _request: RpcRequest.RpcRequest;
        };
        response: undefined;
    },
    {
        topic: 'success';
        payload: {
            title: string;
            content: string;
        };
        response: undefined;
    },
    {
        topic: '__internal';
        payload: {
            type: 'init';
            chainIds?: readonly number[] | undefined;
            mode: 'inline-iframe' | 'iframe' | 'popup' | 'popup-standalone' | 'page';
            referrer: {
                icon?: string | {
                    light: string;
                    dark: string;
                } | undefined;
                title: string;
            };
            theme?: Theme.ThemeFragment | undefined;
        } | {
            type: 'switch';
            mode: 'inline-iframe' | 'iframe' | 'popup' | 'popup-standalone' | 'page';
        } | {
            type: 'resize';
            height?: number | undefined;
            width?: number | undefined;
        } | {
            type: 'set-theme';
            theme: Theme.ThemeFragment;
        } | {
            type: 'dialog-lifecycle';
            action: 'request:close' | 'done:close';
        };
        response: undefined;
    }
];
export type Topic = Schema[number]['topic'];
export type Payload<topic extends Topic> = Extract<Schema[number], {
    topic: topic;
}>['payload'];
export type Response<topic extends Topic> = Extract<Schema[number], {
    topic: topic;
}>['response'];
/**
 * Instantiates a messenger.
 *
 * @param messenger - Messenger.
 * @returns Instantiated messenger.
 */
export declare function from(messenger: Messenger): Messenger;
/**
 * Instantiates a messenger from a window instance.
 *
 * @param w - Window.
 * @param options - Options.
 * @returns Instantiated messenger.
 */
export declare function fromWindow(w: Window, options?: fromWindow.Options): Messenger;
export declare namespace fromWindow {
    type Options = {
        /**
         * Target origin.
         */
        targetOrigin?: string | undefined;
    };
}
/**
 * Bridges two messengers for cross-window (e.g. parent to iframe) communication.
 *
 * @param parameters - Parameters.
 * @returns Instantiated messenger.
 */
export declare function bridge(parameters: bridge.Parameters): Bridge;
export declare namespace bridge {
    type Parameters = {
        /**
         * Source messenger.
         */
        from: Messenger;
        /**
         * Target messenger.
         */
        to: Messenger;
        /**
         * Whether to wait for the target messenger to indicate that it is ready via
         * `messenger.ready()`.
         */
        waitForReady?: boolean | undefined;
    };
}
export declare function noop(): Bridge;
/**
 * Creates a CLI relay messenger that sends messages via fetch to a relay URL
 * and receives events via server-sent events.
 *
 * @param options - Options.
 * @returns Local relay messenger.
 */
export declare function cliRelay(options: cliRelay.Options): CliRelay;
export declare namespace cliRelay {
    type Options = {
        /**
         * Relay URL for both sending messages (POST) and receiving events (GET).
         */
        relayUrl: string;
    };
}
//# sourceMappingURL=Messenger.d.ts.map