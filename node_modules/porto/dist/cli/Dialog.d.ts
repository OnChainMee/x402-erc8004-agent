import * as Dialog from '../core/Dialog.js';
import type { QueuedRequest } from '../core/Porto.js';
import * as Messenger from './Messenger.js';
export declare const messenger: Messenger.CliRelay;
/**
 * Instantiates a CLI dialog.
 *
 * @returns CLI dialog.
 */
export declare function cli(): Promise<{
    readonly name: "cli";
    readonly setup: (parameters: {
        host: string;
        internal: import("../core/internal/porto.js").Internal;
        theme?: import("../theme/Theme.js").ThemeFragment | undefined;
        themeController?: Dialog.ThemeController | undefined;
    }) => {
        close(): void;
        destroy(): void;
        open(): void;
        secure(): Promise<{
            frame: true;
            host: true;
            protocol: true;
        }>;
        syncRequests(requests: readonly QueuedRequest[]): Promise<void>;
    };
    readonly supportsHeadless: true;
}>;
export declare namespace cli {
    type Options = {
        messenger: Messenger.CliRelay;
    };
}
//# sourceMappingURL=Dialog.d.ts.map