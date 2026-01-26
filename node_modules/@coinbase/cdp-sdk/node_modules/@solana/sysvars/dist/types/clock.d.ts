import { type FetchAccountConfig } from '@solana/accounts';
import { type FixedSizeCodec, type FixedSizeDecoder, type FixedSizeEncoder } from '@solana/codecs';
import type { GetAccountInfoApi } from '@solana/rpc-api';
import type { Rpc } from '@solana/rpc-spec';
import type { Epoch, Slot, UnixTimestamp } from '@solana/rpc-types';
type SysvarClockSize = 40;
/**
 * Contains data on cluster time, including the current slot, epoch, and estimated wall-clock Unix
 * timestamp. It is updated every slot.
 */
export type SysvarClock = Readonly<{
    /** The current epoch */
    epoch: Epoch;
    /**
     * The Unix timestamp of the first slot in this epoch.
     *
     * In the first slot of an epoch, this timestamp is identical to the `unixTimestamp`.
     */
    epochStartTimestamp: UnixTimestamp;
    /** The most recent epoch for which the leader schedule has already been generated */
    leaderScheduleEpoch: Epoch;
    /** The current slot */
    slot: Slot;
    /** The Unix timestamp of this slot */
    unixTimestamp: UnixTimestamp;
}>;
/**
 * Returns an encoder that you can use to encode a {@link SysvarClock} to a byte array representing
 * the `Clock` sysvar's account data.
 */
export declare function getSysvarClockEncoder(): FixedSizeEncoder<SysvarClock, SysvarClockSize>;
/**
 * Returns a decoder that you can use to decode a byte array representing the `Clock` sysvar's
 * account data to a {@link SysvarClock}.
 */
export declare function getSysvarClockDecoder(): FixedSizeDecoder<SysvarClock, SysvarClockSize>;
/**
 * Returns a codec that you can use to encode from or decode to {@link SysvarClock}
 *
 * @see {@link getSysvarClockDecoder}
 * @see {@link getSysvarClockEncoder}
 */
export declare function getSysvarClockCodec(): FixedSizeCodec<SysvarClock, SysvarClock, SysvarClockSize>;
/**
 * Fetches the `Clock` sysvar account using any RPC that supports the {@link GetAccountInfoApi}.
 */
export declare function fetchSysvarClock(rpc: Rpc<GetAccountInfoApi>, config?: FetchAccountConfig): Promise<SysvarClock>;
export {};
//# sourceMappingURL=clock.d.ts.map