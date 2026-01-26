export declare function create(options?: create.Options): {
    error: (...messages: string[]) => void;
    errorOnce: (...messages: string[]) => void;
    log: (...messages: string[]) => void;
    logOnce: (...messages: string[]) => void;
    warn: (...messages: string[]) => void;
    warnOnce: (...messages: string[]) => void;
};
export declare namespace create {
    type Options = {
        prefix?: string;
    };
}
export declare const logger: {
    error: (...messages: string[]) => void;
    errorOnce: (...messages: string[]) => void;
    log: (...messages: string[]) => void;
    logOnce: (...messages: string[]) => void;
    warn: (...messages: string[]) => void;
    warnOnce: (...messages: string[]) => void;
};
//# sourceMappingURL=logger.d.ts.map