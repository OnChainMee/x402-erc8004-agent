import * as Address from 'ox/Address';
import type * as Hex from 'ox/Hex';
import type * as WebAuthnP256 from 'ox/WebAuthnP256';
import { type LocalAccount, type PartialBy } from 'viem';
import type { Assign, Compute } from '../core/internal/types.js';
import type * as Storage from '../core/Storage.js';
import * as Key from './Key.js';
export type Account<source extends 'porto' | 'privateKey' = 'porto' | 'privateKey'> = LocalAccount<source> & {
    keys?: readonly Key.Key[] | undefined;
    sign: NonNullable<LocalAccount['sign']>;
};
/**
 * Instantiates a delegated account.
 *
 * @param account - Account to instantiate.
 * @returns An instantiated delegated account.
 */
export declare function from<const account extends from.Parameters>(parameters: from.Parameters<account>): Compute<from.ReturnType<account>>;
export declare namespace from {
    type AccountParameter = PartialBy<Pick<Account, 'address' | 'keys' | 'sign'>, 'sign'>;
    type Parameters<account extends Address.Address | AccountParameter = Address.Address | AccountParameter> = account | Address.Address | AccountParameter;
    type ReturnType<account extends Address.Address | AccountParameter = Address.Address | AccountParameter> = Readonly<Assign<Account, account extends AccountParameter ? account : {
        address: account;
    }> & {
        source: account extends {
            sign: NonNullable<LocalAccount['sign']>;
        } ? 'privateKey' : 'porto';
    }>;
}
/**
 * Instantiates a delegated account from a private key.
 *
 * @param privateKey - Private key.
 * @param options - Options.
 * @returns An instantiated delegated account.
 */
export declare function fromPrivateKey<const options extends fromPrivateKey.Options = fromPrivateKey.Options>(privateKey: Hex.Hex, options?: options | fromPrivateKey.Options): Compute<fromPrivateKey.ReturnType<options>>;
export declare namespace fromPrivateKey {
    type Options = {
        /**
         * Keys to instantiate.
         */
        keys?: readonly Key.Key[] | undefined;
    };
    type ReturnType<options extends Options = Options> = Readonly<(Omit<Account, 'keys'> & (options['keys'] extends readonly Key.Key[] ? {
        keys: options['keys'];
    } : {
        keys?: Account['keys'];
    })) & {
        source: 'privateKey';
    }>;
}
export declare function getKey(account: Account, parameters?: getKey.Parameters): Key.Key | undefined;
export declare namespace getKey {
    type Parameters = {
        key?: number | Key.Key | null | undefined;
        role?: Key.Key['role'] | undefined;
    };
}
/**
 * Extracts a signing key from a delegated account and signs a payload.
 *
 * @example
 * TODO
 *
 * @param parameters - Parameters.
 * @returns Signature.
 */
export declare function sign(account: Account, parameters: sign.Parameters): Promise<Compute<Hex.Hex>>;
export declare namespace sign {
    type Parameters = {
        /**
         * Key to sign the payloads with.
         *
         * - If number, the key at the index will be used.
         * - If `Key.Key`, the provided key will be used.
         * - If `null`, the account's root signing key will be used.
         * - If not provided, a key will be extracted from the `account`.
         */
        key?: number | Key.Key | null | undefined;
        /**
         * Payload to sign.
         */
        payload: Hex.Hex;
        /**
         * Whether to use replay-safe signing.
         * `false` if replay-safe signing is not needed (e.g. signing call bundles).
         */
        replaySafe?: boolean;
        /**
         * Role to extract the key from the `account` for signing.
         */
        role?: Key.Key['role'] | undefined;
        /**
         * Storage to use for keytype-specific caching (e.g. WebAuthn user verification).
         */
        storage?: Storage.Storage | undefined;
        /**
         * Whether to wrap the signature with key metadata.
         */
        wrap?: boolean | undefined;
        /**
         * WebAuthn helpers for non-browser environments (e.g., React Native passkeys).
         */
        webAuthn?: {
            createFn?: WebAuthnP256.createCredential.Options['createFn'] | undefined;
            getFn?: WebAuthnP256.sign.Options['getFn'] | undefined;
        } | undefined;
    };
}
//# sourceMappingURL=Account.d.ts.map