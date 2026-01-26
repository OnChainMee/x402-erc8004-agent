import * as Json from 'ox/Json';
import * as promise from './internal/promise.js';
import * as Utils from './internal/utils.js';
/**
 * Instantiates a messenger.
 *
 * @param messenger - Messenger.
 * @returns Instantiated messenger.
 */
export function from(messenger) {
    return messenger;
}
/**
 * Instantiates a messenger from a window instance.
 *
 * @param w - Window.
 * @param options - Options.
 * @returns Instantiated messenger.
 */
export function fromWindow(w, options = {}) {
    const { targetOrigin } = options;
    const listeners = new Map();
    return from({
        destroy() {
            for (const listener of listeners.values()) {
                w.removeEventListener('message', listener);
            }
        },
        on(topic, listener, id) {
            function handler(event) {
                if (event.data.topic !== topic)
                    return;
                if (id && event.data.id !== id)
                    return;
                if (targetOrigin && event.origin !== targetOrigin)
                    return;
                listener(event.data.payload, event);
            }
            w.addEventListener('message', handler);
            listeners.set(topic, handler);
            return () => w.removeEventListener('message', handler);
        },
        async send(topic, payload, target) {
            const id = Utils.uuidv4();
            w.postMessage(Utils.normalizeValue({ id, payload, topic }), target ?? targetOrigin ?? '*');
            return { id, payload, topic };
        },
        async sendAsync(topic, payload, target) {
            const { id } = await this.send(topic, payload, target);
            return new Promise((resolve) => this.on(topic, resolve, id));
        },
    });
}
/**
 * Bridges two messengers for cross-window (e.g. parent to iframe) communication.
 *
 * @param parameters - Parameters.
 * @returns Instantiated messenger.
 */
export function bridge(parameters) {
    const { from: from_, to, waitForReady = false } = parameters;
    let pending = false;
    const ready = promise.withResolvers();
    from_.on('ready', ready.resolve);
    const messenger = from({
        destroy() {
            from_.destroy();
            to.destroy();
            if (pending)
                ready.reject();
        },
        on(topic, listener, id) {
            return from_.on(topic, listener, id);
        },
        async send(topic, payload) {
            pending = true;
            if (waitForReady)
                await ready.promise.finally(() => (pending = false));
            return to.send(topic, payload);
        },
        async sendAsync(topic, payload) {
            pending = true;
            if (waitForReady)
                await ready.promise.finally(() => (pending = false));
            return to.sendAsync(topic, payload);
        },
    });
    return {
        ...messenger,
        ready(options) {
            void messenger.send('ready', options);
        },
        waitForReady() {
            return ready.promise;
        },
    };
}
export function noop() {
    return {
        destroy() { },
        on() {
            return () => { };
        },
        ready() { },
        send() {
            return Promise.resolve(undefined);
        },
        sendAsync() {
            return Promise.resolve(undefined);
        },
        waitForReady() {
            return Promise.resolve(undefined);
        },
    };
}
/**
 * Creates a CLI relay messenger that sends messages via fetch to a relay URL
 * and receives events via server-sent events.
 *
 * @param options - Options.
 * @returns Local relay messenger.
 */
export function cliRelay(options) {
    const { relayUrl } = options;
    let eventSource = null;
    const listenerSets = new Map();
    function connect() {
        if (!relayUrl || eventSource)
            return;
        eventSource = new EventSource(relayUrl);
        eventSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (!data.topic)
                    return;
                if (!data.payload)
                    return;
                const listeners = listenerSets.get(data.topic);
                if (!listeners)
                    return;
                for (const listener of listeners)
                    listener(data.payload, { data, origin: relayUrl });
            }
            catch (error) {
                console.error('Error parsing SSE message:', error);
            }
        };
        eventSource.onerror = (error) => {
            console.error('SSE connection error:', error);
            eventSource?.close();
            eventSource = null;
            // attempt to reconnect in 1s
            setTimeout(connect, 1000);
        };
    }
    connect();
    async function request(topic, payload) {
        const id = Utils.uuidv4();
        const data = { id, payload, topic };
        const response = await fetch(relayUrl, {
            body: Json.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
        return { id, payload, response, topic };
    }
    return {
        destroy() {
            eventSource?.close();
            eventSource = null;
            listenerSets.clear();
        },
        on(topic, listener) {
            if (!listenerSets.has(topic))
                listenerSets.set(topic, new Set());
            listenerSets.get(topic).add(listener);
            return () => {
                const listeners = listenerSets.get(topic);
                if (!listeners)
                    return;
                listeners.delete(listener);
                if (listeners.size === 0)
                    listenerSets.delete(topic);
            };
        },
        async ready(options) {
            await new Promise((resolve) => setTimeout(resolve, 32));
            void this.send('ready', options);
        },
        async send(topic, payload) {
            const { id } = await request(topic, payload);
            return { id, payload, topic };
        },
        async sendAsync(topic, payload) {
            const { response } = await request(topic, payload);
            if (!response.ok)
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            const contentType = response.headers.get('content-type');
            if (contentType?.includes('application/json'))
                return await response.json();
            return undefined;
        },
    };
}
//# sourceMappingURL=Messenger.js.map