import { type FetchAccountConfig } from '@solana/accounts';
import { type VariableSizeCodec, type VariableSizeDecoder, type VariableSizeEncoder } from '@solana/codecs';
import type { GetAccountInfoApi } from '@solana/rpc-api';
import type { Rpc } from '@solana/rpc-spec';
import { Epoch, type Lamports } from '@solana/rpc-types';
type Entry = Readonly<{
    /** The epoch to which this stake history entry pertains */
    epoch: Epoch;
    stakeHistory: Readonly<{
        /**
         * Sum of portion of stakes requested to be warmed up, but not fully activated yet, in
         * {@link Lamports}
         */
        activating: Lamports;
        /**
         * Sum of portion of stakes requested to be cooled down, but not fully deactivated yet, in
         * {@link Lamports}
         */
        deactivating: Lamports;
        /** Effective stake at this epoch, in {@link Lamports} */
        effective: Lamports;
    }>;
}>;
/** History of stake activations and de-activations. */
export type SysvarStakeHistory = Entry[];
/**
 * Returns an encoder that you can use to encode a {@link SysvarStakeHistory} to a byte array
 * representing the `StakeHistory` sysvar's account data.
 */
export declare function getSysvarStakeHistoryEncoder(): VariableSizeEncoder<SysvarStakeHistory>;
/**
 * Returns a decoder that you can use to decode a byte array representing the `StakeHistory`
 * sysvar's account data to a {@link SysvarStakeHistory}.
 */
export declare function getSysvarStakeHistoryDecoder(): VariableSizeDecoder<SysvarStakeHistory>;
/**
 * Returns a codec that you can use to encode from or decode to {@link SysvarStakeHistory}
 *
 * @see {@link getSysvarStakeHistoryDecoder}
 * @see {@link getSysvarStakeHistoryEncoder}
 */
export declare function getSysvarStakeHistoryCodec(): VariableSizeCodec<SysvarStakeHistory>;
/**
 * Fetches the `StakeHistory` sysvar account using any RPC that supports the
 * {@link GetAccountInfoApi}.
 */
export declare function fetchSysvarStakeHistory(rpc: Rpc<GetAccountInfoApi>, config?: FetchAccountConfig): Promise<SysvarStakeHistory>;
export {};
//# sourceMappingURL=stake-history.d.ts.map