import type * as Address from 'ox/Address';
import type * as Hex from 'ox/Hex';
import type { Chain, Client, Transport } from 'viem';
import type * as Capabilities from './schema/capabilities.js';
/** Set of authentication endpoints. */
export type AuthUrl = {
    /** Endpoint to logout the user. (e.g. `/logout`) */
    logout: string;
    /** Endpoint to generate a nonce. (e.g. `/nonce`) */
    nonce: string;
    /** Endpoint to verify the signature, and authenticate the user. (e.g. `/verify`) */
    verify: string;
};
export declare function authenticate(parameters: authenticate.Parameters): Promise<authenticate.ReturnType>;
export declare namespace authenticate {
    type Parameters = {
        address: Address.Address;
        authUrl: AuthUrl;
        message: string;
        publicKey?: Hex.Hex | undefined;
        signature: Hex.Hex;
    };
    type ReturnType = {
        token?: string | undefined;
    };
}
export declare function buildMessage<chain extends Chain | undefined>(client: Client<Transport, chain>, siwe: Capabilities.signInWithEthereum.Request, options: buildMessage.Options): Promise<string>;
export declare namespace buildMessage {
    type Options = {
        address: Address.Address;
    };
}
export declare function resolveAuthUrl(authUrl: string | AuthUrl, origin?: string): AuthUrl | undefined;
//# sourceMappingURL=siwe.d.ts.map