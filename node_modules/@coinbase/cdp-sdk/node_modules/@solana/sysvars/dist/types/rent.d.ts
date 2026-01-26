import { type FetchAccountConfig } from '@solana/accounts';
import { type FixedSizeCodec, type FixedSizeDecoder, type FixedSizeEncoder } from '@solana/codecs';
import type { GetAccountInfoApi } from '@solana/rpc-api';
import type { Rpc } from '@solana/rpc-spec';
import { F64UnsafeSeeDocumentation, type Lamports } from '@solana/rpc-types';
type SysvarRentSize = 17;
/**
 * Configuration for network rent.
 */
export type SysvarRent = Readonly<{
    /**
     * The percentage of collected rent that is burned.
     *
     * Valid values are in the range [0, 100]. The remaining percentage is distributed to
     * validators.
     */
    burnPercent: number;
    /** Amount of time (in years) a balance must include rent for the account to be rent exempt */
    exemptionThreshold: F64UnsafeSeeDocumentation;
    /** Rental rate in {@link Lamports}/byte-year. */
    lamportsPerByteYear: Lamports;
}>;
/**
 * Returns an encoder that you can use to encode a {@link SysvarRent} to a byte array representing
 * the `Rent` sysvar's account data.
 */
export declare function getSysvarRentEncoder(): FixedSizeEncoder<SysvarRent, SysvarRentSize>;
/**
 * Returns a decoder that you can use to decode a byte array representing the `Rent` sysvar's
 * account data to a {@link SysvarRent}.
 */
export declare function getSysvarRentDecoder(): FixedSizeDecoder<SysvarRent, SysvarRentSize>;
/**
 * Returns a codec that you can use to encode from or decode to {@link SysvarRent}
 *
 * @see {@link getSysvarRentDecoder}
 * @see {@link getSysvarRentEncoder}
 */
export declare function getSysvarRentCodec(): FixedSizeCodec<SysvarRent, SysvarRent, SysvarRentSize>;
/**
 * Fetches the `Rent` sysvar account using any RPC that supports the {@link GetAccountInfoApi}.
 */
export declare function fetchSysvarRent(rpc: Rpc<GetAccountInfoApi>, config?: FetchAccountConfig): Promise<SysvarRent>;
export {};
//# sourceMappingURL=rent.d.ts.map