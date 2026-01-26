import { RpcSubscriptionsChannel } from '@solana/rpc-subscriptions-spec';
export type Config = Readonly<{
    /**
     * The number of bytes to admit into the WebSocket's send buffer before queueing messages on the
     * client.
     *
     * When you call {@link RpcSubscriptionsChannel.send | `send()`} on a `WebSocket` the runtime
     * might add the message to a buffer rather than send it right away. In the event that
     * `socket.bufferedAmount` exceeds the value configured here, messages will be added to a queue
     * in your application code instead of being sent to the WebSocket, until such time as the
     * `bufferedAmount` falls back below the high watermark.
     */
    sendBufferHighWatermark: number;
    /**
     * An `AbortSignal` to fire when you want to explicitly close the `WebSocket`.
     *
     * If the channel is open it will be closed with a normal closure code
     * (https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4.1) If the channel has not been
     * established yet, firing this signal will result in the `AbortError` being thrown to the
     * caller who was trying to open the channel.
     */
    signal: AbortSignal;
    /**
     * A string representing the target endpoint.
     *
     * In Node, it must be an absolute URL using the `ws` or `wss` protocol.
     */
    url: string;
}>;
type WebSocketMessage = ArrayBufferLike | ArrayBufferView | Blob | string;
/**
 * Creates an object that represents an open channel to a `WebSocket` server.
 *
 * You can use it to send messages by calling its
 * {@link RpcSubscriptionsChannel.send | `send()`} function and you can receive them by subscribing
 * to the {@link RpcSubscriptionChannelEvents} it emits.
 */
export declare function createWebSocketChannel({ sendBufferHighWatermark, signal, url, }: Config): Promise<RpcSubscriptionsChannel<WebSocketMessage, string>>;
export {};
//# sourceMappingURL=websocket-channel.d.ts.map