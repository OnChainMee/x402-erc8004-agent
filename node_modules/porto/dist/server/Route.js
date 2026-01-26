import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { poweredBy } from 'hono/powered-by';
import * as RpcResponse from 'ox/RpcResponse';
import { createClient, rpcSchema } from 'viem';
import * as z from 'zod/mini';
import * as Porto from '../core/Porto.js';
import * as Key from '../viem/Key.js';
import * as MerchantSchema from './internal/merchantSchema.js';
import * as RequestListener from './internal/requestListener.js';
/**
 * Creates a new Route.
 *
 * @param options - constructor options
 * @returns Route instance
 */
export function from(options = {}) {
    return new from.Inner(options);
}
(function (from) {
    class Inner {
        /**
         * Creates a new Handler instance.
         *
         * @param options - constructor options
         */
        constructor(options = {}) {
            Object.defineProperty(this, "hono", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            /**
             * Returns a Fetch API compatible handler, used to serve requests.
             *
             * @param request - request object
             * @param env - env object
             * @param executionCtx - context of execution
             * @returns response object
             *
             */
            Object.defineProperty(this, "fetch", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: (request, env, executionCtx) => {
                    return this.hono.fetch(request, env, executionCtx);
                }
            });
            const hono = new Hono().basePath(options.basePath ?? '/');
            hono.use('*', cors(options.cors));
            hono.use('*', poweredBy({ serverName: 'Porto' }));
            this.hono = hono;
        }
        /**
         * Wraps a fetch handler in a Node.js request listener that can be used with:
         *
         * - [`http.createServer()`](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener)
         * - [`https.createServer()`](https://nodejs.org/api/https.html#httpscreateserveroptions-requestlistener)
         * - [`http2.createServer()`](https://nodejs.org/api/http2.html#http2createserveroptions-onrequesthandler)
         * - [`http2.createSecureServer()`](https://nodejs.org/api/http2.html#http2createsecureserveroptions-onrequesthandler)
         *
         * @returns A Node.js request listener function.
         */
        get listener() {
            return RequestListener.fromFetchHandler(this.fetch);
        }
    }
    from.Inner = Inner;
})(from || (from = {}));
/**
 * Defines a Merchant RPC request handler. This will return a function that
 * accepts a [Fetch API `Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request)
 * instance and returns a [Fetch API `Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
 * instance.
 *
 * @param options - Options.
 * @returns Request handler.
 */
export function merchant(options) {
    const { address, basePath, relay = Porto.defaultConfig.relay } = options;
    const client = createClient({
        rpcSchema: rpcSchema(),
        transport: relay,
    });
    const fromKey = (() => {
        if (typeof options.key === 'string')
            return undefined;
        if (options.key.type === 'secp256k1')
            return Key.fromSecp256k1;
        if (options.key.type === 'p256')
            return Key.fromP256;
        throw new Error('unsupported key type');
    })();
    const key = fromKey
        ? fromKey(options.key)
        : Key.fromSecp256k1({
            privateKey: options.key,
        });
    const router = from({ basePath });
    router.hono.get('/', (c) => c.text('ok'));
    router.hono.post('/', async (c) => {
        let request = await c.req.json();
        try {
            request = MerchantSchema.validate(MerchantSchema.JsonRpcRequest, request);
        }
        catch (e) {
            const error = e;
            return c.json(RpcResponse.from({
                error: {
                    code: error.code,
                    message: error.message,
                },
            }, { request }));
        }
        switch (request.method) {
            case 'wallet_prepareCalls': {
                const sponsor = (() => {
                    if (typeof options.sponsor === 'function')
                        return options.sponsor(request.params[0]);
                    if (typeof options.sponsor === 'boolean')
                        return options.sponsor;
                    return true;
                })();
                try {
                    const result = await client.request({
                        ...request,
                        params: [
                            {
                                ...request.params[0],
                                capabilities: {
                                    ...request.params[0].capabilities,
                                    meta: {
                                        ...request.params[0].capabilities.meta,
                                        ...(sponsor
                                            ? {
                                                feePayer: address,
                                            }
                                            : {}),
                                    },
                                },
                            },
                        ],
                    });
                    const { capabilities } = z.decode(MerchantSchema.wallet_prepareCalls.Response, result);
                    const { feePayerDigest } = capabilities;
                    if (!feePayerDigest)
                        throw new Error('`feePayerDigest` is required');
                    const signature = sponsor
                        ? await Key.sign(key, {
                            address: null,
                            payload: feePayerDigest,
                        })
                        : undefined;
                    const response = RpcResponse.from({
                        result: {
                            ...result,
                            capabilities: {
                                ...result.capabilities,
                                ...(sponsor
                                    ? {
                                        feeSignature: signature,
                                    }
                                    : {}),
                            },
                        },
                    }, { request });
                    return c.json(response);
                }
                catch (e) {
                    const error = (() => {
                        const error = RpcResponse.parseError(e);
                        if (error.cause && 'code' in error.cause && error.cause.code === 3)
                            return error.cause;
                        return error;
                    })();
                    return c.json(RpcResponse.from({ error }, { request }));
                }
            }
            default: {
                const error = new RpcResponse.MethodNotSupportedError();
                return c.json(RpcResponse.from({ error }, { request }));
            }
        }
    });
    return router;
}
//# sourceMappingURL=Route.js.map