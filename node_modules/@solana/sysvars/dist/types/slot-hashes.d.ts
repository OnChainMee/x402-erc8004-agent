import { type FetchAccountConfig } from '@solana/accounts';
import { type VariableSizeCodec, type VariableSizeDecoder, type VariableSizeEncoder } from '@solana/codecs';
import type { GetAccountInfoApi } from '@solana/rpc-api';
import type { Rpc } from '@solana/rpc-spec';
import { type Blockhash, type Slot } from '@solana/rpc-types';
type Entry = Readonly<{
    hash: Blockhash;
    slot: Slot;
}>;
/** The most recent hashes of a slot's parent banks. */
export type SysvarSlotHashes = Entry[];
/**
 * Returns an encoder that you can use to encode a {@link SysvarSlotHashes} to a byte array
 * representing the `SlotHashes` sysvar's account data.
 */
export declare function getSysvarSlotHashesEncoder(): VariableSizeEncoder<SysvarSlotHashes>;
/**
 * Returns a decoder that you can use to decode a byte array representing the `SlotHashes` sysvar's
 * account data to a {@link SysvarSlotHashes}.
 */
export declare function getSysvarSlotHashesDecoder(): VariableSizeDecoder<SysvarSlotHashes>;
/**
 * Returns a codec that you can use to encode from or decode to {@link SysvarSlotHashes}
 *
 * @see {@link getSysvarSlotHashesDecoder}
 * @see {@link getSysvarSlotHashesEncoder}
 */
export declare function getSysvarSlotHashesCodec(): VariableSizeCodec<SysvarSlotHashes>;
/**
 * Fetches the `SlotHashes` sysvar account using any RPC that supports the {@link GetAccountInfoApi}.
 */
export declare function fetchSysvarSlotHashes(rpc: Rpc<GetAccountInfoApi>, config?: FetchAccountConfig): Promise<SysvarSlotHashes>;
export {};
//# sourceMappingURL=slot-hashes.d.ts.map