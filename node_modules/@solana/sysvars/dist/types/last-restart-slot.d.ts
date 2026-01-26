import { type FetchAccountConfig } from '@solana/accounts';
import { type FixedSizeCodec, type FixedSizeDecoder, type FixedSizeEncoder } from '@solana/codecs';
import type { GetAccountInfoApi } from '@solana/rpc-api';
import type { Rpc } from '@solana/rpc-spec';
import type { Slot } from '@solana/rpc-types';
type SysvarLastRestartSlotSize = 8;
/**
 * Information about the last restart slot (hard fork).
 *
 * The `LastRestartSlot` sysvar provides access to the last restart slot kept in the bank fork for
 * the slot on the fork that executes the current transaction. In case there was no fork it returns
 * `0`.
 */
export type SysvarLastRestartSlot = Readonly<{
    /** The last restart {@link Slot} */
    lastRestartSlot: Slot;
}>;
/**
 * Returns an encoder that you can use to encode a {@link SysvarLastRestartSlot} to a byte array
 * representing the `LastRestartSlot` sysvar's account data.
 */
export declare function getSysvarLastRestartSlotEncoder(): FixedSizeEncoder<SysvarLastRestartSlot, SysvarLastRestartSlotSize>;
/**
 * Returns a decoder that you can use to decode a byte array representing the `LastRestartSlot`
 * sysvar's account data to a {@link SysvarLastRestartSlot}.
 */
export declare function getSysvarLastRestartSlotDecoder(): FixedSizeDecoder<SysvarLastRestartSlot, SysvarLastRestartSlotSize>;
/**
 * Returns a codec that you can use to encode from or decode to {@link SysvarLastRestartSlot}
 *
 * @see {@link getSysvarLastRestartSlotDecoder}
 * @see {@link getSysvarLastRestartSlotEncoder}
 */
export declare function getSysvarLastRestartSlotCodec(): FixedSizeCodec<SysvarLastRestartSlot, SysvarLastRestartSlot, SysvarLastRestartSlotSize>;
/**
 * Fetches the `LastRestartSlot` sysvar account using any RPC that supports the
 * {@link GetAccountInfoApi}.
 */
export declare function fetchSysvarLastRestartSlot(rpc: Rpc<GetAccountInfoApi>, config?: FetchAccountConfig): Promise<SysvarLastRestartSlot>;
export {};
//# sourceMappingURL=last-restart-slot.d.ts.map