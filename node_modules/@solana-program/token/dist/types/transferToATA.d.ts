import { InstructionPlan, Address, TransactionSigner } from '@solana/kit';
type TransferToATAInstructionPlanInput = {
    /** Funding account (must be a system account). */
    payer: TransactionSigner;
    /** The token mint to transfer. */
    mint: Address;
    /** The source account for the transfer. */
    source: Address;
    /** The source account's owner/delegate or its multisignature account. */
    authority: Address | TransactionSigner;
    /** Associated token account address to transfer to.
     * Will be created if it does not already exist.
     * Note: Use {@link getTransferToATAInstructionPlanAsync} instead to derive this automatically.
     * Note: Use {@link findAssociatedTokenPda} to derive the associated token account address.
     */
    destination: Address;
    /** Wallet address for the destination. */
    recipient: Address;
    /** The amount of tokens to transfer. */
    amount: number | bigint;
    /** Expected number of base 10 digits to the right of the decimal place. */
    decimals: number;
    multiSigners?: Array<TransactionSigner>;
};
type TransferToATAInstructionPlanConfig = {
    systemProgram?: Address;
    tokenProgram?: Address;
    associatedTokenProgram?: Address;
};
export declare function getTransferToATAInstructionPlan(input: TransferToATAInstructionPlanInput, config?: TransferToATAInstructionPlanConfig): InstructionPlan;
type TransferToATAInstructionPlanAsyncInput = Omit<TransferToATAInstructionPlanInput, 'destination'>;
export declare function getTransferToATAInstructionPlanAsync(input: TransferToATAInstructionPlanAsyncInput, config?: TransferToATAInstructionPlanConfig): Promise<InstructionPlan>;
export {};
//# sourceMappingURL=transferToATA.d.ts.map