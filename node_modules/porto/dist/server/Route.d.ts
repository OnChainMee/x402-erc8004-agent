import { type Env, type ExecutionContext, Hono } from 'hono';
import { cors } from 'hono/cors';
import type { BlankEnv, BlankSchema, Schema as hono_Schema } from 'hono/types';
import type * as Address from 'ox/Address';
import type * as Hex from 'ox/Hex';
import type { MaybePromise, OneOf } from '../core/internal/types.js';
import * as Porto from '../core/Porto.js';
import * as Key from '../viem/Key.js';
import * as MerchantSchema from './internal/merchantSchema.js';
/**
 * Creates a new Route.
 *
 * @param options - constructor options
 * @returns Route instance
 */
export declare function from<env extends Env = BlankEnv, schema extends hono_Schema = BlankSchema, basePath extends string = '/'>(options?: from.Options<basePath>): from.Inner<env, schema, basePath>;
export declare namespace from {
    type Options<basePath extends string = '/'> = Inner.ConstructorOptions<basePath>;
    class Inner<env extends Env = BlankEnv, schema extends hono_Schema = BlankSchema, basePath extends string = '/'> {
        hono: Hono<env, schema, basePath>;
        /**
         * Creates a new Handler instance.
         *
         * @param options - constructor options
         */
        constructor(options?: Inner.ConstructorOptions<basePath>);
        /**
         * Returns a Fetch API compatible handler, used to serve requests.
         *
         * @param request - request object
         * @param env - env object
         * @param executionCtx - context of execution
         * @returns response object
         *
         */
        fetch: (request: Request, env?: env["Bindings"] | {} | undefined, executionCtx?: ExecutionContext | undefined) => Response | Promise<Response>;
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
        get listener(): import("http").RequestListener<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
    }
    namespace Inner {
        type ConstructorOptions<basePath extends string = '/'> = {
            /**
             * Base path of the request handler.
             */
            basePath?: basePath | string | undefined;
            /**
             * CORS configuration.
             */
            cors?: Parameters<typeof cors>[0] | undefined;
        };
    }
}
/**
 * Defines a Merchant RPC request handler. This will return a function that
 * accepts a [Fetch API `Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request)
 * instance and returns a [Fetch API `Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
 * instance.
 *
 * @param options - Options.
 * @returns Request handler.
 */
export declare function merchant(options: merchant.Options): from.Inner<BlankEnv, BlankSchema, string>;
export declare namespace merchant {
    type Options = {
        /** Address of the Merchant Account. */
        address: Address.Address;
        /** Base path of the request handler. */
        basePath?: string | undefined;
        /** An Admin Key of the Merchant Account to use for signing. */
        key: Hex.Hex | (Pick<OneOf<Key.Secp256k1Key | Key.P256Key>, 'type'> & {
            privateKey: Hex.Hex;
        });
        /** Whether to sponsor calls or not, and the condition to do so. */
        sponsor?: boolean | ((request: MerchantSchema.wallet_prepareCalls.Parameters) => MaybePromise<boolean>) | undefined;
        /** Relay transport override. */
        relay?: Porto.Config['relay'] | undefined;
    };
}
//# sourceMappingURL=Route.d.ts.map