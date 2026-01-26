import type * as Messenger from '../core/Messenger.js';
export type CliRelay = Messenger.Messenger & {
    relayUrl: string;
    registerPublicKey: (publicKey: string) => void;
    waitForReady: () => Promise<Messenger.ReadyOptions>;
};
export declare function cliRelay(): Promise<CliRelay>;
//# sourceMappingURL=Messenger.d.ts.map