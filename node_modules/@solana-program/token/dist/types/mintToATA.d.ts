import { InstructionPlan, Address, TransactionSigner } from '@solana/kit';
type MintToATAInstructionPlanInput = {
    /** Funding account (must be a system account). */
    payer: TransactionSigner;
    /** Associated token account address to mint to.
     * Will be created if it does not already exist.
     * Note: Use {@link getMintToATAInstructionPlanAsync} instead to derive this automatically.
     * Note: Use {@link findAssociatedTokenPda} to derive the associated token account address.
     */
    ata: Address;
    /** Wallet address for the associated token account. */
    owner: Address;
    /** The token mint for the associated token account. */
    mint: Address;
    /** The mint's minting authority or its multisignature account. */
    mintAuthority: Address | TransactionSigner;
    /** The amount of new tokens to mint. */
    amount: number | bigint;
    /** Expected number of base 10 digits to the right of the decimal place. */
    decimals: number;
    multiSigners?: Array<TransactionSigner>;
};
type MintToATAInstructionPlanConfig = {
    systemProgram?: Address;
    tokenProgram?: Address;
    associatedTokenProgram?: Address;
};
export declare function getMintToATAInstructionPlan(input: MintToATAInstructionPlanInput, config?: MintToATAInstructionPlanConfig): InstructionPlan;
type MintToATAInstructionPlanAsyncInput = Omit<MintToATAInstructionPlanInput, 'ata'>;
export declare function getMintToATAInstructionPlanAsync(input: MintToATAInstructionPlanAsyncInput, config?: MintToATAInstructionPlanConfig): Promise<InstructionPlan>;
export {};
//# sourceMappingURL=mintToATA.d.ts.map