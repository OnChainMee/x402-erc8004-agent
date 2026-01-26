import type { RpcTransport } from '@solana/rpc-spec';
import { HttpTransportConfig as Config } from './http-transport-config';
/**
 * Creates a function you can use to make `POST` requests with headers suitable for sending JSON
 * data to a server.
 *
 * @example
 * ```ts
 * import { createHttpTransport } from '@solana/rpc-transport-http';
 *
 * const transport = createHttpTransport({ url: 'https://api.mainnet-beta.solana.com' });
 * const response = await transport({
 *     payload: { id: 1, jsonrpc: '2.0', method: 'getSlot' },
 * });
 * const data = await response.json();
 * ```
 */
export declare function createHttpTransport(config: Config): RpcTransport;
//# sourceMappingURL=http-transport.d.ts.map