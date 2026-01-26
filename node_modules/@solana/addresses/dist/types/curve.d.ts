import type { AffinePoint } from '@solana/nominal-types';
import { type Address } from './address';
/**
 * Represents an {@link Address} that validates as being off-curve. Functions that require off-curve
 * addresses should specify their inputs in terms of this type.
 *
 * Whenever you need to validate an address as being off-curve, use the {@link offCurveAddress},
 * {@link assertIsOffCurveAddress}, or {@link isOffCurveAddress} functions in this package.
 */
export type OffCurveAddress<TAddress extends string = string> = AffinePoint<Address<TAddress>, 'invalid'>;
/**
 * A type guard that returns `true` if the input address conforms to the {@link OffCurveAddress}
 * type, and refines its type for use in your application.
 *
 * @example
 * ```ts
 * import { isOffCurveAddress } from '@solana/addresses';
 *
 * if (isOffCurveAddress(accountAddress)) {
 *     // At this point, `accountAddress` has been refined to a
 *     // `OffCurveAddress` that can be used within your business logic.
 *     const { value: account } = await rpc.getAccountInfo(accountAddress).send();
 * } else {
 *     setError(`${accountAddress} is not off-curve`);
 * }
 * ```
 */
export declare function isOffCurveAddress<TAddress extends Address>(putativeOffCurveAddress: TAddress): putativeOffCurveAddress is OffCurveAddress<TAddress>;
/**
 * From time to time you might acquire an {@link Address}, that you expect to validate as an
 * off-curve address, from an untrusted source. Use this function to assert that such an address is
 * off-curve.
 *
 * @example
 * ```ts
 * import { assertIsOffCurveAddress } from '@solana/addresses';
 *
 * // Imagine a function that fetches an account's balance when a user submits a form.
 * function handleSubmit() {
 *     // We know only that the input conforms to the `string` type.
 *     const address: string = accountAddressInput.value;
 *     try {
 *         // If this type assertion function doesn't throw, then
 *         // Typescript will upcast `address` to `Address`.
 *         assertIsAddress(address);
 *         // If this type assertion function doesn't throw, then
 *         // Typescript will upcast `address` to `OffCurveAddress`.
 *         assertIsOffCurveAddress(address);
 *         // At this point, `address` is an `OffCurveAddress` that can be used with the RPC.
 *         const balanceInLamports = await rpc.getBalance(address).send();
 *     } catch (e) {
 *         // `address` turned out to NOT be a base58-encoded off-curve address
 *     }
 * }
 * ```
 */
export declare function assertIsOffCurveAddress<TAddress extends Address>(putativeOffCurveAddress: TAddress): asserts putativeOffCurveAddress is OffCurveAddress<TAddress>;
/**
 * Combines _asserting_ that an {@link Address} is off-curve with _coercing_ it to the
 * {@link OffCurveAddress} type. It's most useful with untrusted input.
 */
export declare function offCurveAddress<TAddress extends Address>(putativeOffCurveAddress: TAddress): OffCurveAddress<TAddress>;
//# sourceMappingURL=curve.d.ts.map