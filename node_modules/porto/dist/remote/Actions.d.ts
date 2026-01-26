import * as Provider from 'ox/Provider';
import * as RpcResponse from 'ox/RpcResponse';
import type * as Porto from '../core/Porto.js';
import type * as Remote from './Porto.js';
/**
 * Action to reject an RPC request.
 *
 * @param porto - Porto instance.
 * @param request - Request to reject.
 * @param error - Error to reject with.
 */
export declare function reject(porto: Pick<Remote.Porto<any>, 'messenger'>, request: Porto.QueuedRequest['request'], error?: Provider.ProviderRpcError | RpcResponse.BaseError | undefined): Promise<void>;
/**
 * Action to reject all RPC requests.
 *
 * @param porto - Porto instance.
 * @param error - Error to reject with.
 */
export declare function rejectAll(porto: Pick<Remote.Porto<any>, 'messenger' | '_internal'>, error?: Provider.ProviderRpcError | RpcResponse.BaseError | undefined): Promise<void>;
/**
 * Action to respond to an RPC request.
 *
 * @param porto - Porto instance.
 * @param request - Request to respond to.
 */
export declare function respond<result>(porto: Pick<Remote.Porto<any>, 'messenger' | 'provider'>, request: Porto.QueuedRequest['request'], options?: {
    error?: RpcResponse.ErrorObject | undefined;
    onError?: (error: RpcResponse.BaseError) => undefined | {
        cancelResponse: boolean;
    };
    result?: result | undefined;
    selector?: (result: result) => unknown;
}): Promise<unknown>;
//# sourceMappingURL=Actions.d.ts.map