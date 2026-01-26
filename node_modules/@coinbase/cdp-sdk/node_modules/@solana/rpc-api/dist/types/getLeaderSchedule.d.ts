import type { Address } from '@solana/addresses';
import type { Commitment, Slot } from '@solana/rpc-types';
type GetLeaderScheduleApiConfigBase = Readonly<{
    /**
     * Fetch the leader schedule as of the highest slot that has reached this level of commitment.
     *
     * @defaultValue Whichever default is applied by the underlying {@link RpcApi} in use. For
     * example, when using an API created by a `createSolanaRpc*()` helper, the default commitment
     * is `"confirmed"` unless configured otherwise. Unmitigated by an API layer on the client, the
     * default commitment applied by the server is `"finalized"`.
     */
    commitment?: Commitment;
}>;
type GetLeaderScheduleApiResponseWithAllIdentities = Record<Address, Slot[]>;
type GetLeaderScheduleApiResponseWithSingleIdentity<TIdentity extends string> = Readonly<{
    [TAddress in TIdentity]?: Slot[];
}>;
export type GetLeaderScheduleApi = {
    /**
     * Fetch the leader schedule of a particular validator.
     *
     * @param slot A slot that will be used to select the epoch for which to return the leader
     * schedule.
     *
     * @returns A dictionary having a single key representing the specified validator identity, and
     * its corresponding leader slot indices as values relative to the first slot in the requested
     * epoch, or `null` if there is no epoch that corresponds to the given slot.
     * @see https://solana.com/docs/rpc/http/getleaderschedule
     */
    getLeaderSchedule<TIdentity extends Address>(slot: Slot, config: GetLeaderScheduleApiConfigBase & Readonly<{
        /** Only return results for this validator identity (base58 encoded address) */
        identity: Address;
    }>): GetLeaderScheduleApiResponseWithSingleIdentity<TIdentity> | null;
    /**
     * Fetch the leader schedule for all validators.
     *
     * @param slot A slot that will be used to select the epoch for which to return the leader
     * schedule.
     *
     * @returns A dictionary of validator identities as base-58 encoded strings, and their
     * corresponding leader slot indices as values relative to the first slot in the requested
     * epoch, or `null` if there is no epoch that corresponds to the given slot.
     * @see https://solana.com/docs/rpc/http/getleaderschedule
     */
    getLeaderSchedule(slot: Slot, config?: GetLeaderScheduleApiConfigBase): GetLeaderScheduleApiResponseWithAllIdentities | null;
    /**
     * Fetch the leader schedule of a particular validator.
     *
     * @param slot When `null`, orders the leader schedule for the current epoch.
     *
     * @returns A dictionary having a single key representing the specified validator identity, and
     * its corresponding leader slot indices as values relative to the first slot in the current
     * epoch.
     * @see https://solana.com/docs/rpc/http/getleaderschedule
     */
    getLeaderSchedule<TIdentity extends Address>(slot: null, config: GetLeaderScheduleApiConfigBase & Readonly<{
        /** Only return results for this validator identity (base58 encoded address) */
        identity: Address;
    }>): GetLeaderScheduleApiResponseWithSingleIdentity<TIdentity>;
    /**
     * Fetch the leader schedule of all validators.
     *
     * @param slot When `null`, orders the leader schedule for the current epoch.
     *
     * @returns A dictionary of validator identities as base-58 encoded strings, and their
     * corresponding leader slot indices as values relative to the first slot in the current
     * epoch.
     * @see https://solana.com/docs/rpc/http/getleaderschedule
     */
    getLeaderSchedule(slot?: null, config?: GetLeaderScheduleApiConfigBase): GetLeaderScheduleApiResponseWithAllIdentities;
};
export {};
//# sourceMappingURL=getLeaderSchedule.d.ts.map