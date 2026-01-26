import { BaseTransactionMessage, Instruction, MicroLamports } from '@solana/kit';
import { SetComputeUnitLimitInstruction, SetComputeUnitPriceInstruction } from './generated';
/**
 * Finds the index of the first `SetComputeUnitLimit` instruction in a transaction message
 * and its set limit, if any.
 */
export declare function getSetComputeUnitLimitInstructionIndexAndUnits(transactionMessage: BaseTransactionMessage): {
    index: number;
    units: number;
} | null;
/**
 * Finds the index of the first `SetComputeUnitLimit` instruction in a transaction message, if any.
 */
export declare function getSetComputeUnitLimitInstructionIndex(transactionMessage: BaseTransactionMessage): number;
/**
 * Checks if the given instruction is a `SetComputeUnitLimit` instruction.
 */
export declare function isSetComputeUnitLimitInstruction(instruction: Instruction): instruction is SetComputeUnitLimitInstruction;
/**
 * Finds the index of the first `SetComputeUnitPrice` instruction in a transaction message
 * and its set micro-lamports, if any.
 */
export declare function getSetComputeUnitPriceInstructionIndexAndMicroLamports(transactionMessage: BaseTransactionMessage): {
    index: number;
    microLamports: MicroLamports;
} | null;
/**
 * Finds the index of the first `SetComputeUnitPrice` instruction in a transaction message, if any.
 */
export declare function getSetComputeUnitPriceInstructionIndex(transactionMessage: BaseTransactionMessage): number;
/**
 * Checks if the given instruction is a `SetComputeUnitPrice` instruction.
 */
export declare function isSetComputeUnitPriceInstruction(instruction: Instruction): instruction is SetComputeUnitPriceInstruction;
//# sourceMappingURL=internal.d.ts.map