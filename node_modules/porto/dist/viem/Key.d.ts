import * as Address from 'ox/Address';
import * as Bytes from 'ox/Bytes';
import * as Hex from 'ox/Hex';
import * as Signature from 'ox/Signature';
import * as WebAuthnP256 from 'ox/WebAuthnP256';
import * as WebCryptoP256 from 'ox/WebCryptoP256';
import type * as RelayKey_schema from '../core/internal/relay/schema/key.js';
import type * as Key_schema from '../core/internal/schema/key.js';
import type * as Tokens from '../core/internal/tokens.js';
import type { Compute, ExactPartial, OneOf, PartialBy, RequiredBy, UnionOmit, UnionRequiredBy } from '../core/internal/types.js';
import type * as Storage from '../core/Storage.js';
type PrivateKeyFn = () => Hex.Hex;
export type BaseKey<type extends string = string, privateKey = unknown> = Compute<Key_schema.WithPermissions & {
    /** Whether the key will need its digest (SHA256) prehashed when signing. */
    prehash?: boolean | undefined;
    /** Private key. */
    privateKey?: privateKey | undefined;
    /** Key type. */
    type: type;
}>;
export type Key = OneOf<AddressKey | P256Key | Secp256k1Key | WebCryptoKey | WebAuthnKey>;
export type AddressKey = BaseKey<'address'>;
export type P256Key = BaseKey<'p256', PrivateKeyFn>;
export type Secp256k1Key = BaseKey<'secp256k1', PrivateKeyFn>;
export type WebCryptoKey = BaseKey<'p256', CryptoKey>;
export type WebAuthnKey = BaseKey<'webauthn-p256', OneOf<{
    credential: Pick<WebAuthnP256.P256Credential, 'id' | 'publicKey'>;
    rpId: string | undefined;
} | {
    privateKey: PrivateKeyFn;
}>>;
export type Permissions = Key_schema.Permissions;
/** RPC (relay-compatible) format of a key. */
export type Relay = RelayKey_schema.WithPermissions;
/** Serialized (contract-compatible) format of a key. */
export type Serialized = {
    expiry: number;
    isSuperAdmin: boolean;
    keyType: number;
    publicKey: Hex.Hex;
};
export type SpendPermissions = Key_schema.SpendPermissions;
export type SpendPermission = SpendPermissions[number];
/** Relay key type to key type mapping. */
export declare const fromRelayKeyType: {
    readonly p256: "p256";
    readonly secp256k1: "secp256k1";
    readonly webauthnp256: "webauthn-p256";
};
/** Relay key role to key role mapping. */
export declare const fromRelayKeyRole: {
    readonly admin: "admin";
    readonly normal: "session";
};
/** Serialized (contract-compatible) key type to key type mapping. */
export declare const fromSerializedKeyType: {
    readonly 0: "p256";
    readonly 1: "webauthn-p256";
    readonly 2: "secp256k1";
};
/** Serialized (contract-compatible) spend period to period mapping. */
export declare const fromSerializedSpendPeriod: {
    readonly 0: "minute";
    readonly 1: "hour";
    readonly 2: "day";
    readonly 3: "week";
    readonly 4: "month";
    readonly 5: "year";
};
/** Key type to Relay key type mapping. */
export declare const toRelayKeyType: {
    readonly address: "secp256k1";
    readonly p256: "p256";
    readonly secp256k1: "secp256k1";
    readonly 'webauthn-p256': "webauthnp256";
};
/** Key role to Relay key role mapping. */
export declare const toRelayKeyRole: {
    readonly admin: "admin";
    readonly session: "normal";
};
/** Key type to serialized (contract-compatible) key type mapping. */
export declare const toSerializedKeyType: {
    readonly address: 2;
    readonly p256: 0;
    readonly secp256k1: 2;
    readonly 'webauthn-p256': 1;
};
/** Period to serialized (contract-compatible) spend period mapping. */
export declare const toSerializedSpendPeriod: {
    readonly day: 2;
    readonly hour: 1;
    readonly minute: 0;
    readonly month: 4;
    readonly week: 3;
    readonly year: 5;
};
/**
 * Creates a random P256 key.
 *
 * @example
 * ```ts
 * import * as Key from './key.js'
 *
 * // Admin Key
 * const key = Key.createP256()
 *
 * // Session Key
 * const key = Key.createP256({
 *   expiry: 1714857600,
 *   role: 'session',
 * })
 * ```
 *
 * @param parameters - Key parameters.
 * @returns P256 key.
 */
export declare function createP256(parameters?: createP256.Parameters): {
    expiry: number;
    hash: `0x${string}`;
    id: `0x${string}`;
    publicKey: `0x${string}`;
    role: "admin" | "session";
    type: "p256";
    feeToken?: {
        limit: `${number}` | `${number}.${number}`;
        symbol?: string | undefined;
    } | null | undefined;
    permissions?: {
        calls?: readonly ({
            signature: string;
            to: `0x${string}`;
        } | {
            signature: string;
            to?: undefined;
        } | {
            to: `0x${string}`;
            signature?: undefined;
        })[] | undefined;
        signatureVerification?: {
            addresses: readonly `0x${string}`[];
        } | undefined;
        spend?: readonly {
            limit: bigint;
            period: "minute" | "hour" | "day" | "week" | "month" | "year";
            token?: `0x${string}` | undefined;
        }[] | undefined;
    } | undefined;
    chainId?: number | undefined;
    prehash?: boolean | undefined
    /** Private key. */
     | undefined;
    privateKey?: PrivateKeyFn | undefined;
} | {
    expiry: number;
    hash: `0x${string}`;
    id: `0x${string}`;
    publicKey: `0x${string}`;
    role: "admin" | "session";
    type: "p256";
    feeToken?: {
        limit: `${number}` | `${number}.${number}`;
        symbol?: string | undefined;
    } | null | undefined;
    permissions?: {
        calls?: readonly ({
            signature: string;
            to: `0x${string}`;
        } | {
            signature: string;
            to?: undefined;
        } | {
            to: `0x${string}`;
            signature?: undefined;
        })[] | undefined;
        signatureVerification?: {
            addresses: readonly `0x${string}`[];
        } | undefined;
        spend?: readonly {
            limit: bigint;
            period: "minute" | "hour" | "day" | "week" | "month" | "year";
            token?: `0x${string}` | undefined;
        }[] | undefined;
    } | undefined;
    chainId?: number | undefined;
    prehash?: boolean | undefined
    /** Private key. */
     | undefined;
    privateKey?: CryptoKey | undefined;
};
export declare namespace createP256 {
    type Parameters = Pick<fromP256.Parameters, 'expiry' | 'feeToken' | 'permissions' | 'role'>;
}
/**
 * Creates a random Secp256k1 key.
 *
 * @example
 * ```ts
 * import * as Key from './key.js'
 *
 * // Admin Key
 * const key = Key.createSecp256k1()
 *
 * // Session Key
 * const key = Key.createSecp256k1({
 *   expiry: 1714857600,
 *   role: 'session',
 * })
 * ```
 *
 * @param parameters - Key parameters.
 * @returns Secp256k1 key.
 */
export declare function createSecp256k1(parameters?: createSecp256k1.Parameters): {
    expiry: number;
    hash: `0x${string}`;
    id: `0x${string}`;
    publicKey: `0x${string}`;
    role: "admin" | "session";
    type: "secp256k1";
    feeToken?: {
        limit: `${number}` | `${number}.${number}`;
        symbol?: string | undefined;
    } | null | undefined;
    permissions?: {
        calls?: readonly ({
            signature: string;
            to: `0x${string}`;
        } | {
            signature: string;
            to?: undefined;
        } | {
            to: `0x${string}`;
            signature?: undefined;
        })[] | undefined;
        signatureVerification?: {
            addresses: readonly `0x${string}`[];
        } | undefined;
        spend?: readonly {
            limit: bigint;
            period: "minute" | "hour" | "day" | "week" | "month" | "year";
            token?: `0x${string}` | undefined;
        }[] | undefined;
    } | undefined;
    chainId?: number | undefined;
    prehash?: boolean | undefined
    /** Private key. */
     | undefined;
    privateKey?: PrivateKeyFn | undefined;
};
export declare namespace createSecp256k1 {
    type Parameters = Pick<fromSecp256k1.Parameters, 'expiry' | 'feeToken' | 'permissions' | 'role'>;
}
/**
 * Creates a WebAuthnP256 key.
 *
 * @example
 * ```ts
 * import { Bytes } from 'ox'
 * import * as Key from './key.js'
 *
 * // Admin Key
 * const key = Key.createWebAuthnP256({
 *   label: 'My Key',
 *   userId: Bytes.from('0x0000000000000000000000000000000000000000'),
 * })
 *
 * // Session Key
 * const key = Key.createWebAuthnP256({
 *   expiry: 1714857600,
 *   label: 'My Key',
 *   role: 'session',
 *   userId: Bytes.from('0x0000000000000000000000000000000000000000'),
 * })
 * ```
 *
 * @param parameters - Key parameters.
 * @returns WebAuthnP256 key.
 */
export declare function createWebAuthnP256(parameters: createWebAuthnP256.Parameters): Promise<{
    expiry: number;
    hash: `0x${string}`;
    id: `0x${string}`;
    publicKey: `0x${string}`;
    role: "admin" | "session";
    type: "webauthn-p256";
    feeToken?: {
        limit: `${number}` | `${number}.${number}`;
        symbol?: string | undefined;
    } | null | undefined;
    permissions?: {
        calls?: readonly ({
            signature: string;
            to: `0x${string}`;
        } | {
            signature: string;
            to?: undefined;
        } | {
            to: `0x${string}`;
            signature?: undefined;
        })[] | undefined;
        signatureVerification?: {
            addresses: readonly `0x${string}`[];
        } | undefined;
        spend?: readonly {
            limit: bigint;
            period: "minute" | "hour" | "day" | "week" | "month" | "year";
            token?: `0x${string}` | undefined;
        }[] | undefined;
    } | undefined;
    chainId?: number | undefined;
    prehash?: boolean | undefined
    /** Private key. */
     | undefined;
    privateKey?: OneOf<{
        credential: Pick<WebAuthnP256.P256Credential, "id" | "publicKey">;
        rpId: string | undefined;
    } | {
        privateKey: PrivateKeyFn;
    }> | undefined;
}>;
export declare namespace createWebAuthnP256 {
    type Parameters = Pick<fromWebAuthnP256.Parameters, 'expiry' | 'feeToken' | 'permissions' | 'role'> & {
        /**
         * Credential creation function. Useful for environments that do not support
         * the WebAuthn API natively (i.e. React Native or testing environments).
         *
         * @default window.navigator.credentials.create
         */
        createFn?: WebAuthnP256.createCredential.Options['createFn'] | undefined;
        /** Label. */
        label: string;
        /** Relying Party ID. */
        rpId?: string | undefined;
        /** User ID. */
        userId?: Bytes.Bytes | undefined;
    };
}
/**
 * Creates a random WebAuthn-wrapped P256 key.
 *
 * @example
 * ```ts
 * import * as Key from './key.js'
 *
 * // Admin Key
 * const key = Key.createHeadlessWebAuthnP256()
 *
 * // Session Key
 * const key = Key.createHeadlessWebAuthnP256({
 *   expiry: 1714857600,
 *   role: 'session',
 * })
 * ```
 *
 * @param parameters - Key parameters.
 * @returns P256 key.
 */
export declare function createHeadlessWebAuthnP256(parameters?: createHeadlessWebAuthnP256.Parameters): {
    expiry: number;
    hash: `0x${string}`;
    id: `0x${string}`;
    publicKey: `0x${string}`;
    role: "admin" | "session";
    type: "webauthn-p256";
    feeToken?: {
        limit: `${number}` | `${number}.${number}`;
        symbol?: string | undefined;
    } | null | undefined;
    permissions?: {
        calls?: readonly ({
            signature: string;
            to: `0x${string}`;
        } | {
            signature: string;
            to?: undefined;
        } | {
            to: `0x${string}`;
            signature?: undefined;
        })[] | undefined;
        signatureVerification?: {
            addresses: readonly `0x${string}`[];
        } | undefined;
        spend?: readonly {
            limit: bigint;
            period: "minute" | "hour" | "day" | "week" | "month" | "year";
            token?: `0x${string}` | undefined;
        }[] | undefined;
    } | undefined;
    chainId?: number | undefined;
    prehash?: boolean | undefined
    /** Private key. */
     | undefined;
    privateKey?: OneOf<{
        credential: Pick<WebAuthnP256.P256Credential, "id" | "publicKey">;
        rpId: string | undefined;
    } | {
        privateKey: PrivateKeyFn;
    }> | undefined;
};
export declare namespace createHeadlessWebAuthnP256 {
    type Parameters = Pick<fromHeadlessWebAuthnP256.Parameters, 'expiry' | 'feeToken' | 'permissions' | 'role'>;
}
/**
 * Creates a random WebCryptoP256 key.
 *
 * @example
 * ```ts
 * import * as Key from './key.js'
 *
 * // Admin Key
 * const key = Key.createWebCryptoP256()
 *
 * // Session Key
 * const key = Key.createWebCryptoP256({
 *   expiry: 1714857600,
 *   role: 'session',
 * })
 * ```
 *
 * @param parameters - Key parameters.
 * @returns WebCryptoP256 key.
 */
export declare function createWebCryptoP256(parameters?: createWebCryptoP256.Parameters): Promise<{
    expiry: number;
    hash: `0x${string}`;
    id: `0x${string}`;
    publicKey: `0x${string}`;
    role: "admin" | "session";
    type: "p256";
    feeToken?: {
        limit: `${number}` | `${number}.${number}`;
        symbol?: string | undefined;
    } | null | undefined;
    permissions?: {
        calls?: readonly ({
            signature: string;
            to: `0x${string}`;
        } | {
            signature: string;
            to?: undefined;
        } | {
            to: `0x${string}`;
            signature?: undefined;
        })[] | undefined;
        signatureVerification?: {
            addresses: readonly `0x${string}`[];
        } | undefined;
        spend?: readonly {
            limit: bigint;
            period: "minute" | "hour" | "day" | "week" | "month" | "year";
            token?: `0x${string}` | undefined;
        }[] | undefined;
    } | undefined;
    chainId?: number | undefined;
    prehash?: boolean | undefined
    /** Private key. */
     | undefined;
    privateKey?: PrivateKeyFn | undefined;
} | {
    expiry: number;
    hash: `0x${string}`;
    id: `0x${string}`;
    publicKey: `0x${string}`;
    role: "admin" | "session";
    type: "p256";
    feeToken?: {
        limit: `${number}` | `${number}.${number}`;
        symbol?: string | undefined;
    } | null | undefined;
    permissions?: {
        calls?: readonly ({
            signature: string;
            to: `0x${string}`;
        } | {
            signature: string;
            to?: undefined;
        } | {
            to: `0x${string}`;
            signature?: undefined;
        })[] | undefined;
        signatureVerification?: {
            addresses: readonly `0x${string}`[];
        } | undefined;
        spend?: readonly {
            limit: bigint;
            period: "minute" | "hour" | "day" | "week" | "month" | "year";
            token?: `0x${string}` | undefined;
        }[] | undefined;
    } | undefined;
    chainId?: number | undefined;
    prehash?: boolean | undefined
    /** Private key. */
     | undefined;
    privateKey?: CryptoKey | undefined;
}>;
export declare namespace createWebCryptoP256 {
    type Parameters = Pick<fromWebCryptoP256.Parameters, 'expiry' | 'feeToken' | 'permissions' | 'role'>;
}
/**
 * Deserializes a key from its serialized format.
 *
 * @example
 * ```ts
 * import * as Key from './key.js'
 *
 * const key = Key.deserialize({
 *   expiry: 0,
 *   isSuperAdmin: false,
 *   keyType: 0,
 *   publicKey: '0x04ec0effa5f2f378cbf7fd2fa7ca1e8dc51cf777c129fa1c00a0e9a9205f2e511ff3f20b34a4e0b50587d055c0e0fad33d32cf1147d3bb2538fbab0d15d8e65008',
 * })
 * ```
 *
 * @param serialized - Serialized key.
 * @returns Key.
 */
export declare function deserialize(serialized: Serialized, options?: deserialize.Options): Key;
export declare namespace deserialize {
    type Options = {
        chainId?: number | undefined;
    };
}
/**
 * Instantiates a key from its parameters.
 *
 * @example
 * ```ts
 * import { P256 } from 'ox'
 * import * as Key from './key.js'
 *
 * const privateKey = P256.randomPrivateKey()
 * const publicKey = P256.getPublicKey({ privateKey })
 *
 * const key = Key.from({
 *   expiry: 0,
 *   publicKey,
 *   async sign({ payload }) {
 *     return P256.sign({ payload, privateKey })
 *   },
 *   type: 'p256',
 * })
 * ```
 *
 * @param key - Key.
 * @returns Key.
 */
export declare function from<type extends Key['type']>(key: from.Value<type>, options?: from.Options): Extract<Key, {
    type: type;
}>;
export declare namespace from {
    type Value<type extends Key['type'] = Key['type']> = OneOf<UnionRequiredBy<ExactPartial<UnionOmit<Key, 'hash'>>, 'publicKey'> & {
        type: type | Key['type'];
    }>;
    type Options = {
        chainId?: number | undefined;
    };
}
/**
 * Instantiates a P256 key from its parameters.
 *
 * @example
 * ```ts
 * import { P256 } from 'ox'
 * import * as Key from './key.js'
 *
 * // Admin Key
 * const key = Key.fromP256({
 *   privateKey: P256.randomPrivateKey(),
 * })
 *
 * // Session Key
 * const key = Key.fromP256({
 *   expiry: 1714857600,
 *   privateKey: P256.randomPrivateKey(),
 *   role: 'session',
 * })
 * ```
 *
 * @param parameters - Key parameters.
 * @returns P256 key.
 */
export declare function fromP256(parameters: fromP256.Parameters): {
    expiry: number;
    hash: `0x${string}`;
    id: `0x${string}`;
    publicKey: `0x${string}`;
    role: "admin" | "session";
    type: "p256";
    feeToken?: {
        limit: `${number}` | `${number}.${number}`;
        symbol?: string | undefined;
    } | null | undefined;
    permissions?: {
        calls?: readonly ({
            signature: string;
            to: `0x${string}`;
        } | {
            signature: string;
            to?: undefined;
        } | {
            to: `0x${string}`;
            signature?: undefined;
        })[] | undefined;
        signatureVerification?: {
            addresses: readonly `0x${string}`[];
        } | undefined;
        spend?: readonly {
            limit: bigint;
            period: "minute" | "hour" | "day" | "week" | "month" | "year";
            token?: `0x${string}` | undefined;
        }[] | undefined;
    } | undefined;
    chainId?: number | undefined;
    prehash?: boolean | undefined
    /** Private key. */
     | undefined;
    privateKey?: PrivateKeyFn | undefined;
} | {
    expiry: number;
    hash: `0x${string}`;
    id: `0x${string}`;
    publicKey: `0x${string}`;
    role: "admin" | "session";
    type: "p256";
    feeToken?: {
        limit: `${number}` | `${number}.${number}`;
        symbol?: string | undefined;
    } | null | undefined;
    permissions?: {
        calls?: readonly ({
            signature: string;
            to: `0x${string}`;
        } | {
            signature: string;
            to?: undefined;
        } | {
            to: `0x${string}`;
            signature?: undefined;
        })[] | undefined;
        signatureVerification?: {
            addresses: readonly `0x${string}`[];
        } | undefined;
        spend?: readonly {
            limit: bigint;
            period: "minute" | "hour" | "day" | "week" | "month" | "year";
            token?: `0x${string}` | undefined;
        }[] | undefined;
    } | undefined;
    chainId?: number | undefined;
    prehash?: boolean | undefined
    /** Private key. */
     | undefined;
    privateKey?: CryptoKey | undefined;
};
export declare namespace fromP256 {
    type Parameters = Pick<from.Value, 'chainId' | 'expiry' | 'feeToken' | 'permissions' | 'role'> & {
        /** P256 private key. */
        privateKey: Hex.Hex;
    };
}
/**
 * Converts a Relay-formatted key to a key.
 *
 * @example
 * TODO
 *
 * @param relayKey - Relay key.
 * @returns Key.
 */
export declare function fromRelay(relayKey: Relay, options: {
    chainId: number;
}): Key;
/**
 * Instantiates a Secp256k1 key from its parameters.
 *
 * @example
 * ```ts
 * import { Secp256k1 } from 'ox'
 * import * as Key from './key.js'
 *
 * // Admin Key
 * const key = Key.fromSecp256k1({
 *   privateKey: Secp256k1.randomPrivateKey(),
 * })
 *
 * // Session Key
 * const key = Key.fromSecp256k1({
 *   expiry: 1714857600,
 *   privateKey: Secp256k1.randomPrivateKey(),
 *   role: 'session',
 * })
 * ```
 *
 * @param parameters - Key parameters.
 * @returns Secp256k1 key.
 */
export declare function fromSecp256k1(parameters: fromSecp256k1.Parameters): {
    expiry: number;
    hash: `0x${string}`;
    id: `0x${string}`;
    publicKey: `0x${string}`;
    role: "admin" | "session";
    type: "secp256k1";
    feeToken?: {
        limit: `${number}` | `${number}.${number}`;
        symbol?: string | undefined;
    } | null | undefined;
    permissions?: {
        calls?: readonly ({
            signature: string;
            to: `0x${string}`;
        } | {
            signature: string;
            to?: undefined;
        } | {
            to: `0x${string}`;
            signature?: undefined;
        })[] | undefined;
        signatureVerification?: {
            addresses: readonly `0x${string}`[];
        } | undefined;
        spend?: readonly {
            limit: bigint;
            period: "minute" | "hour" | "day" | "week" | "month" | "year";
            token?: `0x${string}` | undefined;
        }[] | undefined;
    } | undefined;
    chainId?: number | undefined;
    prehash?: boolean | undefined
    /** Private key. */
     | undefined;
    privateKey?: PrivateKeyFn | undefined;
};
export declare namespace fromSecp256k1 {
    type Parameters = Pick<from.Value, 'expiry' | 'feeToken' | 'permissions' | 'role'> & OneOf<{
        /** Ethereum address. */
        address: Address.Address;
    } | {
        /** Secp256k1 public key. */
        publicKey: Hex.Hex;
    } | {
        /** Secp256k1 private key. */
        privateKey: Hex.Hex;
    }>;
}
/**
 * Instantiates a WebAuthnP256 key from its parameters.
 *
 * @example
 * ```ts
 * import { WebAuthnP256 } from 'ox'
 * import * as Key from './key.js'
 *
 * const credential = await WebAuthnP256.createCredential({ name: 'My Key' })
 *
 * // Admin Key
 * const key = Key.fromWebAuthnP256({
 *   credential,
 * })
 *
 * // Session Key
 * const key = Key.fromWebAuthnP256({
 *   expiry: 1714857600,
 *   credential,
 *   role: 'session',
 * })
 * ```
 *
 * @param parameters - Key parameters.
 * @returns WebAuthnP256 key.
 */
export declare function fromWebAuthnP256(parameters: fromWebAuthnP256.Parameters): {
    expiry: number;
    hash: `0x${string}`;
    id: `0x${string}`;
    publicKey: `0x${string}`;
    role: "admin" | "session";
    type: "webauthn-p256";
    feeToken?: {
        limit: `${number}` | `${number}.${number}`;
        symbol?: string | undefined;
    } | null | undefined;
    permissions?: {
        calls?: readonly ({
            signature: string;
            to: `0x${string}`;
        } | {
            signature: string;
            to?: undefined;
        } | {
            to: `0x${string}`;
            signature?: undefined;
        })[] | undefined;
        signatureVerification?: {
            addresses: readonly `0x${string}`[];
        } | undefined;
        spend?: readonly {
            limit: bigint;
            period: "minute" | "hour" | "day" | "week" | "month" | "year";
            token?: `0x${string}` | undefined;
        }[] | undefined;
    } | undefined;
    chainId?: number | undefined;
    prehash?: boolean | undefined
    /** Private key. */
     | undefined;
    privateKey?: OneOf<{
        credential: Pick<WebAuthnP256.P256Credential, "id" | "publicKey">;
        rpId: string | undefined;
    } | {
        privateKey: PrivateKeyFn;
    }> | undefined;
};
export declare namespace fromWebAuthnP256 {
    type Parameters = Pick<from.Value, 'chainId' | 'expiry' | 'feeToken' | 'id' | 'permissions' | 'role'> & {
        /** WebAuthnP256 Credential. */
        credential: Pick<WebAuthnP256.P256Credential, 'id' | 'publicKey'>;
        /** Relying Party ID. */
        rpId?: string | undefined;
    };
}
/**
 * Instantiates a WebAuthn-wrapped P256 key from its parameters.
 *
 * @example
 * ```ts
 * import { P256 } from 'ox'
 * import * as Key from './key.js'
 *
 * const privateKey = P256.randomPrivateKey()
 *
 * // Admin Key
 * const key = Key.fromHeadlessWebAuthnP256({
 *   privateKey,
 * })
 *
 * // Session Key
 * const key = Key.fromHeadlessWebAuthnP256({
 *   expiry: 1714857600,
 *   privateKey,
 *   role: 'session',
 * })
 * ```
 *
 * @param parameters - Key parameters.
 * @returns WebAuthn-wrapped P256 key.
 */
export declare function fromHeadlessWebAuthnP256(parameters: fromHeadlessWebAuthnP256.Parameters): {
    expiry: number;
    hash: `0x${string}`;
    id: `0x${string}`;
    publicKey: `0x${string}`;
    role: "admin" | "session";
    type: "webauthn-p256";
    feeToken?: {
        limit: `${number}` | `${number}.${number}`;
        symbol?: string | undefined;
    } | null | undefined;
    permissions?: {
        calls?: readonly ({
            signature: string;
            to: `0x${string}`;
        } | {
            signature: string;
            to?: undefined;
        } | {
            to: `0x${string}`;
            signature?: undefined;
        })[] | undefined;
        signatureVerification?: {
            addresses: readonly `0x${string}`[];
        } | undefined;
        spend?: readonly {
            limit: bigint;
            period: "minute" | "hour" | "day" | "week" | "month" | "year";
            token?: `0x${string}` | undefined;
        }[] | undefined;
    } | undefined;
    chainId?: number | undefined;
    prehash?: boolean | undefined
    /** Private key. */
     | undefined;
    privateKey?: OneOf<{
        credential: Pick<WebAuthnP256.P256Credential, "id" | "publicKey">;
        rpId: string | undefined;
    } | {
        privateKey: PrivateKeyFn;
    }> | undefined;
};
export declare namespace fromHeadlessWebAuthnP256 {
    type Parameters = Pick<from.Value, 'chainId' | 'expiry' | 'feeToken' | 'permissions' | 'role'> & {
        /** P256 private key. */
        privateKey: Hex.Hex;
    };
}
/**
 * Instantiates a WebCryptoP256 key from its parameters.
 *
 * @example
 * ```ts
 * import { WebCryptoP256 } from 'ox'
 * import * as Key from './key.js'
 *
 * const keyPair = await WebCryptoP256.createKeyPair()
 *
 * // Admin Key
 * const key = Key.fromWebCryptoP256({
 *   keyPair,
 * })
 *
 * // Session Key
 * const key = Key.fromWebCryptoP256({
 *   expiry: 1714857600,
 *   keyPair,
 *   role: 'session',
 * })
 * ```
 *
 * @param parameters - Key parameters.
 * @returns WebCryptoP256 key.
 */
export declare function fromWebCryptoP256(parameters: fromWebCryptoP256.Parameters): {
    expiry: number;
    hash: `0x${string}`;
    id: `0x${string}`;
    publicKey: `0x${string}`;
    role: "admin" | "session";
    type: "p256";
    feeToken?: {
        limit: `${number}` | `${number}.${number}`;
        symbol?: string | undefined;
    } | null | undefined;
    permissions?: {
        calls?: readonly ({
            signature: string;
            to: `0x${string}`;
        } | {
            signature: string;
            to?: undefined;
        } | {
            to: `0x${string}`;
            signature?: undefined;
        })[] | undefined;
        signatureVerification?: {
            addresses: readonly `0x${string}`[];
        } | undefined;
        spend?: readonly {
            limit: bigint;
            period: "minute" | "hour" | "day" | "week" | "month" | "year";
            token?: `0x${string}` | undefined;
        }[] | undefined;
    } | undefined;
    chainId?: number | undefined;
    prehash?: boolean | undefined
    /** Private key. */
     | undefined;
    privateKey?: PrivateKeyFn | undefined;
} | {
    expiry: number;
    hash: `0x${string}`;
    id: `0x${string}`;
    publicKey: `0x${string}`;
    role: "admin" | "session";
    type: "p256";
    feeToken?: {
        limit: `${number}` | `${number}.${number}`;
        symbol?: string | undefined;
    } | null | undefined;
    permissions?: {
        calls?: readonly ({
            signature: string;
            to: `0x${string}`;
        } | {
            signature: string;
            to?: undefined;
        } | {
            to: `0x${string}`;
            signature?: undefined;
        })[] | undefined;
        signatureVerification?: {
            addresses: readonly `0x${string}`[];
        } | undefined;
        spend?: readonly {
            limit: bigint;
            period: "minute" | "hour" | "day" | "week" | "month" | "year";
            token?: `0x${string}` | undefined;
        }[] | undefined;
    } | undefined;
    chainId?: number | undefined;
    prehash?: boolean | undefined
    /** Private key. */
     | undefined;
    privateKey?: CryptoKey | undefined;
};
export declare namespace fromWebCryptoP256 {
    type Parameters = Pick<from.Value, 'chainId' | 'expiry' | 'feeToken' | 'permissions' | 'role'> & {
        /** P256 private key. */
        keyPair: Awaited<ReturnType<typeof WebCryptoP256.createKeyPair>>;
    };
}
/**
 * Hashes a key.
 *
 * @example
 * ```ts
 * import * as Key from './key.js'
 *
 * const key = Key.createP256()
 *
 * const hash = Key.hash(key)
 * ```
 *
 * @param key - Key.
 * @returns Hashed key.
 */
export declare function hash(key: Pick<Key, 'publicKey' | 'type'>): Hex.Hex;
/**
 * Serializes a public key.
 *
 * @param publicKey - Public key.
 * @returns Serialized public key.
 */
export declare function serializePublicKey(publicKey: Hex.Hex): Hex.Hex;
/**
 * Serializes a key to a contract-compatible format.
 *
 * @example
 * ```ts
 * import * as Key from './key.js'
 *
 * const key = Key.createP256()
 *
 * const serialized = Key.serialize(key)
 * ```
 *
 * @param key - Key.
 * @returns Serialized key.
 */
export declare function serialize(key: Key): Serialized;
export declare function sign(key: Key, parameters: sign.Parameters): Promise<`0x${string}`>;
export declare namespace sign {
    type Parameters = {
        /**
         * Address to use for replay-safe signing.
         * `null` if replay-safe signing is not needed (e.g. signing call bundles).
         */
        address: Address.Address | null;
        /**
         * Payload to sign.
         */
        payload: Hex.Hex;
        /**
         * Storage to use for keytype-specific caching (e.g. WebAuthn user verification).
         */
        storage?: Storage.Storage | undefined;
        /**
         * WebAuthn configuration.
         */
        webAuthn?: {
            createFn?: WebAuthnP256.createCredential.Options['createFn'];
            getFn?: WebAuthnP256.sign.Options['getFn'];
        } | undefined;
        /**
         * Whether to wrap the signature with key metadata.
         * @default true
         */
        wrap?: boolean | undefined;
    };
}
/**
 * Converts a key to a Relay-compatible format.
 *
 * @example
 * TODO
 *
 * @param key - Key.
 * @returns Relay key.
 */
export declare function toRelay(key: toRelay.Value, options?: toRelay.Options): RequiredBy<Relay, 'prehash'>;
export declare namespace toRelay {
    type Value = PartialBy<Pick<Key, 'expiry' | 'prehash' | 'permissions' | 'publicKey' | 'role' | 'type'>, 'expiry' | 'role'>;
    type Options = {
        /** Fee tokens. */
        feeTokens?: readonly Tokens.Token[] | undefined;
        /** Orchestrator address. */
        orchestrator?: Address.Address | undefined;
    };
}
/**
 * Resolves the permissions for the permissions request, and if needed, adds
 * the fee limit to the spend permissions.
 *
 * @param request - Permissions request.
 * @param options - Options.
 * @returns Resolved permissions.
 */
export declare function resolvePermissions(key: Pick<Key, 'feeToken' | 'permissions'>, options: resolvePermissions.Options): {
    calls: ({
        signature: string;
        to: `0x${string}`;
    } | {
        signature: string;
        to?: undefined;
    } | {
        to: `0x${string}`;
        signature?: undefined;
    })[];
    spend: {
        limit: bigint;
        period: "minute" | "hour" | "day" | "week" | "month" | "year";
        token?: `0x${string}` | undefined;
    }[];
    signatureVerification?: {
        addresses: readonly `0x${string}`[];
    } | undefined;
};
export declare namespace resolvePermissions {
    type Options = {
        feeTokens?: Tokens.Tokens | null | undefined;
    };
}
/**
 * Gets the fee limit (in units of the fee token) to be used for the
 * authorized permissions.
 *
 * @param request - The permissions request to get the fee limit for.
 * @param options - Options.
 * @returns Fee limit (in units of the fee token).
 */
export declare function getFeeToken(key: Pick<Key, 'feeToken' | 'permissions'>, options: getFeeToken.Options): getFeeToken.ReturnType;
export declare namespace getFeeToken {
    type Options = {
        feeTokens: Tokens.Tokens;
    };
    type ReturnType = (Tokens.Token & {
        value: bigint;
    }) | undefined;
}
export declare function serializeWebAuthnSignature(options: serializeWebAuthnSignature.Options): `0x${string}`;
export declare namespace serializeWebAuthnSignature {
    type Options = {
        metadata: WebAuthnP256.SignMetadata;
        signature: Signature.Signature<false>;
    };
}
export declare function wrapSignature(signature: Hex.Hex, options: wrapSignature.Options): `0x${string}`;
declare namespace wrapSignature {
    type Options = {
        keyType: Key['type'];
        prehash?: boolean | undefined;
        publicKey: Hex.Hex;
    };
}
export {};
//# sourceMappingURL=Key.d.ts.map