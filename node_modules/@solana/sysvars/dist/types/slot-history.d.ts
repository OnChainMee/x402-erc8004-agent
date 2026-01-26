import { type FetchAccountConfig } from '@solana/accounts';
import { type FixedSizeCodec, type FixedSizeDecoder, type FixedSizeEncoder } from '@solana/codecs';
import type { GetAccountInfoApi } from '@solana/rpc-api';
import type { Rpc } from '@solana/rpc-spec';
import type { Slot } from '@solana/rpc-types';
declare const SLOT_HISTORY_ACCOUNT_DATA_STATIC_SIZE: number;
type SysvarSlotHistorySize = typeof SLOT_HISTORY_ACCOUNT_DATA_STATIC_SIZE;
/** A bitvector of slots present over the last epoch. */
export type SysvarSlotHistory = {
    /**
     * A vector of 64-bit numbers which, when their bits are strung together, represent a record of
     * non-skipped slots.
     *
     * The bit in position (slot % MAX_ENTRIES) is 0 if the slot was skipped and 1 otherwise, valid
     * only when the candidate slot is less than `nextSlot` and greater than or equal to
     * `MAX_ENTRIES - nextSlot`.
     */
    bits: bigint[];
    /** The number of the slot one newer than tracked by the bitvector */
    nextSlot: Slot;
};
/**
 * Returns an encoder that you can use to encode a {@link SysvarSlotHistory} to a byte array
 * representing the `SlotHistory` sysvar's account data.
 */
export declare function getSysvarSlotHistoryEncoder(): FixedSizeEncoder<SysvarSlotHistory, SysvarSlotHistorySize>;
/**
 * Returns a decoder that you can use to decode a byte array representing the `SlotHistory` sysvar's
 * account data to a {@link SysvarSlotHistory}.
 */
export declare function getSysvarSlotHistoryDecoder(): FixedSizeDecoder<SysvarSlotHistory, SysvarSlotHistorySize>;
/**
 * Returns a codec that you can use to encode from or decode to {@link SysvarSlotHistory}
 *
 * @see {@link getSysvarSlotHistoryDecoder}
 * @see {@link getSysvarSlotHistoryEncoder}
 */
export declare function getSysvarSlotHistoryCodec(): FixedSizeCodec<SysvarSlotHistory, SysvarSlotHistory, SysvarSlotHistorySize>;
/**
 * Fetches the `SlotHistory` sysvar account using any RPC that supports the
 * {@link GetAccountInfoApi}.
 */
export declare function fetchSysvarSlotHistory(rpc: Rpc<GetAccountInfoApi>, config?: FetchAccountConfig): Promise<SysvarSlotHistory>;
export {};
//# sourceMappingURL=slot-history.d.ts.map