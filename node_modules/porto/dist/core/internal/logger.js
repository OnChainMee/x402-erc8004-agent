export function create(options = {}) {
    const { prefix = '[Porto]' } = options;
    const memo = new Set();
    return {
        error: createLogFn(console.error, { prefix }),
        errorOnce: createLogFn(console.error, { memo, prefix }),
        log: createLogFn(console.log, { prefix }),
        logOnce: createLogFn(console.log, { memo, prefix }),
        warn: createLogFn(console.warn, { prefix }),
        warnOnce: createLogFn(console.warn, { memo, prefix }),
    };
}
export const logger = create();
function createLogFn(fn, options = {}) {
    const { memo, prefix } = options;
    return (...messages) => {
        const message = messages.join(' ');
        if (memo?.has(message))
            return;
        memo?.add(message);
        fn(`${prefix} ${message}`);
    };
}
//# sourceMappingURL=logger.js.map