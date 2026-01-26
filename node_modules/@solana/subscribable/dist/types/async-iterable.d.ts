import { DataPublisher } from './data-publisher';
type Config = Readonly<{
    /**
     * Triggering this abort signal will cause all iterators spawned from this iterator to return
     * once they have published all queued messages.
     */
    abortSignal: AbortSignal;
    /**
     * Messages from this channel of `dataPublisher` will be the ones yielded through the iterators.
     *
     * Messages only begin to be queued after the first time an iterator begins to poll. Channel
     * messages published before that time will be dropped.
     */
    dataChannelName: string;
    dataPublisher: DataPublisher;
    /**
     * Messages from this channel of `dataPublisher` will be the ones thrown through the iterators.
     *
     * Any new iterators created after the first error is encountered will reject with that error
     * when polled.
     */
    errorChannelName: string;
}>;
/**
 * Returns an `AsyncIterable` given a data publisher.
 *
 * The iterable will produce iterators that vend messages published to `dataChannelName` and will
 * throw the first time a message is published to `errorChannelName`. Triggering the abort signal
 * will cause all iterators spawned from this iterator to return once they have published all queued
 * messages.
 *
 * Things to note:
 *
 * - If a message is published over a channel before the `AsyncIterator` attached to it has polled
 *   for the next result, the message will be queued in memory.
 * - Messages only begin to be queued after the first time an iterator begins to poll. Channel
 *   messages published before that time will be dropped.
 * - If there are messages in the queue and an error occurs, all queued messages will be vended to
 *   the iterator before the error is thrown.
 * - If there are messages in the queue and the abort signal fires, all queued messages will be
 *   vended to the iterator after which it will return.
 * - Any new iterators created after the first error is encountered will reject with that error when
 *   polled.
 *
 * @param config
 *
 * @example
 * ```ts
 * const iterable = createAsyncIterableFromDataPublisher({
 *     abortSignal: AbortSignal.timeout(10_000),
 *     dataChannelName: 'message',
 *     dataPublisher,
 *     errorChannelName: 'error',
 * });
 * try {
 *     for await (const message of iterable) {
 *         console.log('Got message', message);
 *     }
 * } catch (e) {
 *     console.error('An error was published to the error channel', e);
 * } finally {
 *     console.log("It's been 10 seconds; that's enough for now.");
 * }
 * ```
 */
export declare function createAsyncIterableFromDataPublisher<TData>({ abortSignal, dataChannelName, dataPublisher, errorChannelName, }: Config): AsyncIterable<TData>;
export {};
//# sourceMappingURL=async-iterable.d.ts.map