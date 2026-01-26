import { Address } from '@solana/addresses';
import { Instruction, InstructionWithAccounts, InstructionWithData, ReadonlyAccount, ReadonlySignerAccount, WritableAccount, WritableSignerAccount } from '@solana/instructions';
import { Brand } from '@solana/nominal-types';
export type AdvanceNonceAccountInstruction<TNonceAccountAddress extends string = string, TNonceAuthorityAddress extends string = string> = Instruction<'11111111111111111111111111111111'> & InstructionWithAccounts<readonly [
    WritableAccount<TNonceAccountAddress>,
    ReadonlyAccount<'SysvarRecentB1ockHashes11111111111111111111'>,
    ReadonlySignerAccount<TNonceAuthorityAddress> | WritableSignerAccount<TNonceAuthorityAddress>
]> & InstructionWithData<AdvanceNonceAccountInstructionData>;
type AdvanceNonceAccountInstructionData = Brand<Uint8Array, 'AdvanceNonceAccountInstructionData'>;
/**
 * Creates an instruction for the System program to advance a nonce.
 *
 * This instruction is a prerequisite for a transaction with a nonce-based lifetime to be landed on
 * the network. In order to be considered valid, the transaction must meet all of these criteria.
 *
 * 1. Its lifetime constraint must be a {@link NonceLifetimeConstraint}.
 * 2. The value contained in the on-chain account at the address `nonceAccountAddress` must be equal
 *    to {@link NonceLifetimeConstraint.nonce} at the time the transaction is landed.
 * 3. The first instruction in that transaction message must be the one returned by this function.
 *
 * You could also use the `getAdvanceNonceAccountInstruction` method of `@solana-program/system`.
 */
export declare function createAdvanceNonceAccountInstruction<TNonceAccountAddress extends string = string, TNonceAuthorityAddress extends string = string>(nonceAccountAddress: Address<TNonceAccountAddress>, nonceAuthorityAddress: Address<TNonceAuthorityAddress>): AdvanceNonceAccountInstruction<TNonceAccountAddress, TNonceAuthorityAddress>;
/**
 * A type guard that returns `true` if the instruction conforms to the
 * {@link AdvanceNonceAccountInstruction} type, and refines its type for use in your program.
 *
 * @example
 * ```ts
 * import { isAdvanceNonceAccountInstruction } from '@solana/transaction-messages';
 *
 * if (isAdvanceNonceAccountInstruction(message.instructions[0])) {
 *     // At this point, the first instruction in the message has been refined to a
 *     // `AdvanceNonceAccountInstruction`.
 *     setNonceAccountAddress(message.instructions[0].accounts[0].address);
 * } else {
 *     setError('The first instruction is not an `AdvanceNonce` instruction');
 * }
 * ```
 */
export declare function isAdvanceNonceAccountInstruction(instruction: Instruction): instruction is AdvanceNonceAccountInstruction;
export {};
//# sourceMappingURL=durable-nonce-instruction.d.ts.map