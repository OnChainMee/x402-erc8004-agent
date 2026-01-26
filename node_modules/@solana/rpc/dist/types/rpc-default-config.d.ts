import type { createSolanaRpcApi } from '@solana/rpc-api';
/**
 * When you create {@link Rpc} instances with custom transports but otherwise the default RPC API
 * behaviours, use this.
 *
 * @example
 * ```ts
 * const myCustomRpc = createRpc({
 *     api: createSolanaRpcApi(DEFAULT_RPC_CONFIG),
 *     transport: myCustomTransport,
 * });
 * ```
 */
export declare const DEFAULT_RPC_CONFIG: Partial<NonNullable<Parameters<typeof createSolanaRpcApi>[0]>>;
//# sourceMappingURL=rpc-default-config.d.ts.map