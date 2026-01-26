import type * as http from 'node:http';
import type * as http2 from 'node:http2';
export interface RequestListenerOptions {
    /**
     * Overrides the host portion of the incoming request URL. By default the request URL host is
     * derived from the HTTP `Host` header.
     *
     * For example, if you have a `$HOST` environment variable that contains the hostname of your
     * server, you can use it to set the host of all incoming request URLs like so:
     *
     * ```ts
     * createRequestListener(handler, { host: process.env.HOST })
     * ```
     */
    host?: string;
    /**
     * An error handler that determines the response when the request handler throws an error. By
     * default a 500 Internal Server Error response will be sent.
     */
    onError?: ErrorHandler;
    /**
     * Overrides the protocol of the incoming request URL. By default the request URL protocol is
     * derived from the connection protocol. So e.g. when serving over HTTPS (using
     * `https.createServer()`), the request URL will begin with `https:`.
     */
    protocol?: string;
}
/**
 * Wraps a fetch handler in a Node.js request listener that can be used with:
 *
 * - [`http.createServer()`](https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener)
 * - [`https.createServer()`](https://nodejs.org/api/https.html#httpscreateserveroptions-requestlistener)
 * - [`http2.createServer()`](https://nodejs.org/api/http2.html#http2createserveroptions-onrequesthandler)
 * - [`http2.createSecureServer()`](https://nodejs.org/api/http2.html#http2createsecureserveroptions-onrequesthandler)
 *
 * Example:
 *
 * ```ts
 * import * as http from 'node:http';
 * import { createRequestListener } from '@mjackson/node-fetch-server';
 *
 * async function handler(request) {
 *   return new Response('Hello, world!');
 * }
 *
 * let server = http.createServer(
 *   createRequestListener(handler)
 * );
 *
 * server.listen(3000);
 * ```
 *
 * @param handler The fetch handler to use for processing incoming requests.
 * @param options Request listener options.
 * @returns A Node.js request listener function.
 */
export declare function fromFetchHandler(handler: FetchHandler, options?: RequestListenerOptions): http.RequestListener;
export type RequestOptions = Omit<RequestListenerOptions, 'onError'>;
/**
 * Creates a [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request) object from
 *
 * - a [`http.IncomingMessage`](https://nodejs.org/api/http.html#class-httpincomingmessage)/[`http.ServerResponse`](https://nodejs.org/api/http.html#class-httpserverresponse) pair
 * - a [`http2.Http2ServerRequest`](https://nodejs.org/api/http2.html#class-http2http2serverrequest)/[`http2.Http2ServerResponse`](https://nodejs.org/api/http2.html#class-http2http2serverresponse) pair
 *
 * @param req The incoming request object.
 * @param res The server response object.
 * @param options
 * @returns A request object.
 */
export declare function createRequest(req: http.IncomingMessage | http2.Http2ServerRequest, res: http.ServerResponse | http2.Http2ServerResponse, options?: RequestOptions): Request;
/**
 * Creates a [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers) object from the headers in a Node.js
 * [`http.IncomingMessage`](https://nodejs.org/api/http.html#class-httpincomingmessage)/[`http2.Http2ServerRequest`](https://nodejs.org/api/http2.html#class-http2http2serverrequest).
 *
 * @param req The incoming request object.
 * @returns A headers object.
 */
export declare function createHeaders(req: http.IncomingMessage | http2.Http2ServerRequest): Headers;
/**
 * Sends a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) to the client using a Node.js
 * [`http.ServerResponse`](https://nodejs.org/api/http.html#class-httpserverresponse)/[`http2.Http2ServerResponse`](https://nodejs.org/api/http2.html#class-http2http2serverresponse)
 * object.
 *
 * @param res The server response object.
 * @param response The response to send.
 */
export declare function sendResponse(res: http.ServerResponse | http2.Http2ServerResponse, response: Response): Promise<void>;
export declare function readStream(stream: ReadableStream<Uint8Array>): AsyncIterable<Uint8Array>;
export interface ClientAddress {
    /**
     * The IP address of the client that sent the request.
     *
     * [Node.js Reference](https://nodejs.org/api/net.html#socketremoteaddress)
     */
    address: string;
    /**
     * The family of the client IP address.
     *
     * [Node.js Reference](https://nodejs.org/api/net.html#socketremotefamily)
     */
    family: 'IPv4' | 'IPv6';
    /**
     * The remote port of the client that sent the request.
     *
     * [Node.js Reference](https://nodejs.org/api/net.html#socketremoteport)
     */
    port: number;
}
/**
 * A function that handles an error that occurred during request handling. May return a response to
 * send to the client, or `undefined` to allow the server to send a default error response.
 *
 * [MDN `Response` Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response)
 */
export type ErrorHandler = (error: unknown) => undefined | Response | Promise<undefined | Response>;
/**
 * A function that handles an incoming request and returns a response.
 *
 * [MDN `Request` Reference](https://developer.mozilla.org/en-US/docs/Web/API/Request)
 *
 * [MDN `Response` Reference](https://developer.mozilla.org/en-US/docs/Web/API/Response)
 */
export type FetchHandler = (request: Request, client: ClientAddress) => Response | Promise<Response>;
//# sourceMappingURL=requestListener.d.ts.map