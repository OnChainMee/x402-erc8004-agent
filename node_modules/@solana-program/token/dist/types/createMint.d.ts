import { Address, InstructionPlan, OptionOrNullable, TransactionSigner } from '@solana/kit';
export type CreateMintInstructionPlanInput = {
    /** Funding account (must be a system account). */
    payer: TransactionSigner;
    /** New mint account to create. */
    newMint: TransactionSigner;
    /** Number of base 10 digits to the right of the decimal place. */
    decimals: number;
    /** The authority/multisignature to mint tokens. */
    mintAuthority: Address;
    /** The optional freeze authority/multisignature of the mint. */
    freezeAuthority?: OptionOrNullable<Address>;
    /**
     * Optional override for the amount of Lamports to fund the mint account with.
     * @default 1461600
     *  */
    mintAccountLamports?: number;
};
type CreateMintInstructionPlanConfig = {
    systemProgram?: Address;
    tokenProgram?: Address;
};
export declare function getCreateMintInstructionPlan(input: CreateMintInstructionPlanInput, config?: CreateMintInstructionPlanConfig): InstructionPlan;
export {};
//# sourceMappingURL=createMint.d.ts.map