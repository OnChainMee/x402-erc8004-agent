// Credit: https://github.com/mjackson/remix-the-web/blob/main/packages/node-fetch-server/src/lib/request-listener.ts
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
export function fromFetchHandler(handler, options) {
    const onError = options?.onError ?? defaultErrorHandler;
    return async (req, res) => {
        const request = createRequest(req, res, options);
        const client = {
            address: req.socket.remoteAddress,
            family: req.socket.remoteFamily,
            port: req.socket.remotePort,
        };
        let response;
        try {
            response = await handler(request, client);
        }
        catch (error) {
            try {
                response = (await onError(error)) ?? internalServerError();
            }
            catch (error) {
                console.error(`There was an error in the error handler: ${error}`);
                response = internalServerError();
            }
        }
        await sendResponse(res, response);
    };
}
function defaultErrorHandler(error) {
    console.error(error);
    return internalServerError();
}
function internalServerError() {
    return new Response(
    // "Internal Server Error"
    new Uint8Array([
        73, 110, 116, 101, 114, 110, 97, 108, 32, 83, 101, 114, 118, 101, 114, 32,
        69, 114, 114, 111, 114,
    ]), {
        headers: {
            'Content-Type': 'text/plain',
        },
        status: 500,
    });
}
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
export function createRequest(req, res, options) {
    const controller = new AbortController();
    res.on('close', () => {
        controller.abort();
    });
    const method = req.method ?? 'GET';
    const headers = createHeaders(req);
    const protocol = options?.protocol ??
        ('encrypted' in req.socket && req.socket.encrypted ? 'https:' : 'http:');
    const host = options?.host ?? headers.get('Host') ?? 'localhost';
    const url = new URL(req.url, `${protocol}//${host}`);
    const init = { headers, method, signal: controller.signal };
    if (method !== 'GET' && method !== 'HEAD') {
        init.body = new ReadableStream({
            start(controller) {
                req.on('data', (chunk) => {
                    controller.enqueue(new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength));
                });
                req.on('end', () => {
                    controller.close();
                });
            },
        });
        init.duplex = 'half';
    }
    return new Request(url, init);
}
/**
 * Creates a [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers) object from the headers in a Node.js
 * [`http.IncomingMessage`](https://nodejs.org/api/http.html#class-httpincomingmessage)/[`http2.Http2ServerRequest`](https://nodejs.org/api/http2.html#class-http2http2serverrequest).
 *
 * @param req The incoming request object.
 * @returns A headers object.
 */
export function createHeaders(req) {
    const headers = new Headers();
    const rawHeaders = req.rawHeaders;
    for (let i = 0; i < rawHeaders.length; i += 2) {
        if (rawHeaders[i]?.startsWith(':'))
            continue;
        headers.append(rawHeaders[i], rawHeaders[i + 1]);
    }
    return headers;
}
/**
 * Sends a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) to the client using a Node.js
 * [`http.ServerResponse`](https://nodejs.org/api/http.html#class-httpserverresponse)/[`http2.Http2ServerResponse`](https://nodejs.org/api/http2.html#class-http2http2serverresponse)
 * object.
 *
 * @param res The server response object.
 * @param response The response to send.
 */
export async function sendResponse(res, response) {
    // Iterate over response.headers so we are sure to send multiple Set-Cookie headers correctly.
    // These would incorrectly be merged into a single header if we tried to use
    // `Object.fromEntries(response.headers.entries())`.
    const headers = {};
    for (const [key, value] of response.headers) {
        if (key in headers) {
            if (Array.isArray(headers[key])) {
                headers[key].push(value);
            }
            else {
                headers[key] = [headers[key], value];
            }
        }
        else {
            headers[key] = value;
        }
    }
    res.writeHead(response.status, headers);
    if (response.body != null && res.req.method !== 'HEAD') {
        for await (const chunk of readStream(response.body)) {
            // @ts-expect-error - Node typings for http2 require a 2nd parameter to write but it's optional
            res.write(chunk);
        }
    }
    res.end();
}
export async function* readStream(stream) {
    const reader = stream.getReader();
    while (true) {
        const { done, value } = await reader.read();
        if (done)
            break;
        yield value;
    }
}
//# sourceMappingURL=requestListener.js.map