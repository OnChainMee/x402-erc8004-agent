import { type FetchAccountConfig } from '@solana/accounts';
import { type FixedSizeCodec, type FixedSizeDecoder, type FixedSizeEncoder } from '@solana/codecs';
import type { GetAccountInfoApi } from '@solana/rpc-api';
import type { Rpc } from '@solana/rpc-spec';
import type { Epoch, Slot } from '@solana/rpc-types';
type SysvarEpochScheduleSize = 33;
/**
 * Includes the number of slots per epoch, timing of leader schedule selection, and information
 * about epoch warm-up time.
 */
export type SysvarEpochSchedule = Readonly<{
    /**
     * First normal-length epoch after the warmup period,
     * log2(slotsPerEpoch) - log2(MINIMUM_SLOTS_PER_EPOCH)
     */
    firstNormalEpoch: Epoch;
    /**
     * The first slot after the warmup period, MINIMUM_SLOTS_PER_EPOCH * (2^(firstNormalEpoch) - 1)
     */
    firstNormalSlot: Slot;
    /**
     * A number of slots before beginning of an epoch to calculate a leader schedule for that
     * epoch.
     */
    leaderScheduleSlotOffset: bigint;
    /** The maximum number of slots in each epoch */
    slotsPerEpoch: bigint;
    /** Whether epochs start short and grow */
    warmup: boolean;
}>;
/**
 * Returns an encoder that you can use to encode a {@link SysvarEpochSchedule} to a byte array
 * representing the `EpochSchedule` sysvar's account data.
 */
export declare function getSysvarEpochScheduleEncoder(): FixedSizeEncoder<SysvarEpochSchedule, SysvarEpochScheduleSize>;
/**
 * Returns a decoder that you can use to decode a byte array representing the `EpochSchedule`
 * sysvar's account data to a {@link SysvarEpochSchedule}.
 */
export declare function getSysvarEpochScheduleDecoder(): FixedSizeDecoder<SysvarEpochSchedule, SysvarEpochScheduleSize>;
/**
 * Returns a codec that you can use to encode from or decode to {@link SysvarEpochSchedule}
 *
 * @see {@link getSysvarEpochScheduleDecoder}
 * @see {@link getSysvarEpochScheduleEncoder}
 */
export declare function getSysvarEpochScheduleCodec(): FixedSizeCodec<SysvarEpochSchedule, SysvarEpochSchedule, SysvarEpochScheduleSize>;
/**
 * Fetches the `EpochSchedule` sysvar account using any RPC that supports the
 * {@link GetAccountInfoApi}.
 */
export declare function fetchSysvarEpochSchedule(rpc: Rpc<GetAccountInfoApi>, config?: FetchAccountConfig): Promise<SysvarEpochSchedule>;
export {};
//# sourceMappingURL=epoch-schedule.d.ts.map