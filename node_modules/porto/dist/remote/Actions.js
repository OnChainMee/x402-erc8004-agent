import * as Provider from 'ox/Provider';
import * as RpcResponse from 'ox/RpcResponse';
/**
 * Action to reject an RPC request.
 *
 * @param porto - Porto instance.
 * @param request - Request to reject.
 * @param error - Error to reject with.
 */
export async function reject(porto, request, error) {
    const error_ = error ?? new Provider.UserRejectedRequestError();
    const { messenger } = porto;
    messenger.send('rpc-response', Object.assign(RpcResponse.from({
        error: {
            code: error_.code,
            message: error_.message,
        },
        id: request.id,
        jsonrpc: '2.0',
    }), {
        _request: request,
    }));
}
/**
 * Action to reject all RPC requests.
 *
 * @param porto - Porto instance.
 * @param error - Error to reject with.
 */
export async function rejectAll(porto, error) {
    const { _internal } = porto;
    const requests = _internal.remoteStore.getState().requests;
    for (const request of requests)
        await reject(porto, request.request, error);
}
/**
 * Action to respond to an RPC request.
 *
 * @param porto - Porto instance.
 * @param request - Request to respond to.
 */
export async function respond(porto, request, options) {
    const { messenger, provider } = porto;
    const { error, selector } = options ?? {};
    const shared = {
        id: request.id,
        jsonrpc: '2.0',
    };
    if (error) {
        messenger.send('rpc-response', Object.assign(RpcResponse.from({ ...shared, error, status: 'error' }), {
            _request: request,
        }));
        return;
    }
    try {
        let result = options?.result ?? (await provider.request(request));
        if (selector)
            result = selector(result);
        messenger.send('rpc-response', Object.assign(RpcResponse.from({ ...shared, result }), {
            _request: request,
        }));
        return result;
    }
    catch (e) {
        const error = e;
        if (options?.onError?.(error)?.cancelResponse === true)
            // If the onError callback sets cancelResponse to true,
            // we do not send a response.
            return;
        messenger.send('rpc-response', Object.assign(RpcResponse.from({ ...shared, error, status: 'error' }), {
            _request: request,
        }));
        throw error;
    }
}
//# sourceMappingURL=Actions.js.map