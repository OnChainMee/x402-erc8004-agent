import type * as Address from 'ox/Address';
import type * as Hex from 'ox/Hex';
import type { Payload } from '../core/Messenger.js';
import type * as Remote from './Porto.js';
/**
 * Event listener which is triggered when a request is ready
 * to be handled by the dialog.
 *
 * @param porto - Porto instance.
 * @param cb - Callback function.
 * @returns Unsubscribe function.
 */
export declare function onDialogRequest(porto: Pick<Remote.Porto<any>, '_internal' | 'methodPolicies' | 'messenger' | 'provider'>, cb: (payload: onDialogRequest.Payload) => void): () => void;
export declare namespace onDialogRequest {
    type Payload = {
        account?: {
            address: Address.Address;
            key?: {
                credentialId?: string | undefined;
                publicKey: Hex.Hex;
            } | undefined;
        } | undefined;
        request: Remote.RemoteState['requests'][number]['request'] | null;
        origin: string;
    };
}
/**
 * Event listener which is triggered when the remote context receives
 * an initialization message from the parent context.
 *
 * @param porto - Porto instance.
 * @param cb - Callback function.
 * @returns Unsubscribe function.
 */
export declare function onInitialized(porto: Pick<Remote.Porto<any>, 'messenger'>, cb: (payload: Extract<Payload<'__internal'>, {
    type: 'init';
}>, event: MessageEvent) => void): () => void;
/**
 * Event listener which is triggered when the remote context receives
 * an RPC request from the parent context.
 *
 * @param porto - Porto instance.
 * @param cb - Callback function.
 * @returns Unsubscribe function.
 */
export declare function onRequests(porto: Pick<Remote.Porto<any>, '_internal' | 'messenger'>, cb: (payload: Remote.RemoteState['requests'], event: MessageEvent) => void): () => void;
//# sourceMappingURL=Events.d.ts.map