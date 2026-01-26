import type { Address } from '@solana/addresses';
import type { Base58EncodedBytes, Base58EncodedDataResponse, Base64EncodedDataResponse, Base64EncodedZStdCompressedDataResponse } from './encoded-bytes';
import type { Lamports } from './lamports';
export type AccountInfoBase = Readonly<{
    /** Indicates if the account contains a program (and is strictly read-only) */
    executable: boolean;
    /** Number of {@link Lamports} assigned to this account */
    lamports: Lamports;
    /** Address of the program this account has been assigned to */
    owner: Address;
    /** The size of the account data in bytes (excluding the 128 bytes of header) */
    space: bigint;
}>;
/** @deprecated */
export type AccountInfoWithBase58Bytes = Readonly<{
    data: Base58EncodedBytes;
}>;
/** @deprecated */
export type AccountInfoWithBase58EncodedData = Readonly<{
    data: Base58EncodedDataResponse;
}>;
export type AccountInfoWithBase64EncodedData = Readonly<{
    data: Base64EncodedDataResponse;
}>;
export type AccountInfoWithBase64EncodedZStdCompressedData = Readonly<{
    data: Base64EncodedZStdCompressedDataResponse;
}>;
export type AccountInfoWithJsonData = Readonly<{
    data: Base64EncodedDataResponse | Readonly<{
        parsed: {
            info?: object;
            type: string;
        };
        program: string;
        space: bigint;
    }>;
}>;
export type AccountInfoWithPubkey<TAccount extends AccountInfoBase> = Readonly<{
    account: TAccount;
    pubkey: Address;
}>;
//# sourceMappingURL=account-info.d.ts.map