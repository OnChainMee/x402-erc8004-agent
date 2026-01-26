import { ReadonlyUint8Array } from '@solana/codecs-core';
import { Instruction } from '@solana/instructions';
import { OrderedAccounts } from './accounts';
type CompiledInstruction = Readonly<{
    /**
     * An ordered list of indices that indicate which accounts in the transaction message's
     * accounts list are loaded by this instruction.
     */
    accountIndices?: number[];
    /** The input to the invoked program */
    data?: ReadonlyUint8Array;
    /**
     * The index of the address in the transaction message's accounts list associated with the
     * program to invoke.
     */
    programAddressIndex: number;
}>;
export declare function getCompiledInstructions(instructions: readonly Instruction[], orderedAccounts: OrderedAccounts): CompiledInstruction[];
export {};
//# sourceMappingURL=instructions.d.ts.map