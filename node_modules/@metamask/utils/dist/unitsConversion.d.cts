/**
 * Converts a string, number, or bigint to a bigint.
 *
 * @param arg - The value to convert to bigint.
 * @returns The bigint representation of the input.
 * @throws Error if the input type cannot be converted to bigint.
 */
export declare function numericToBigInt(arg: string | number | bigint): bigint;
export declare const unitMap: {
    readonly noether: "0";
    readonly wei: "1";
    readonly kwei: "1000";
    readonly Kwei: "1000";
    readonly babbage: "1000";
    readonly femtoether: "1000";
    readonly mwei: "1000000";
    readonly Mwei: "1000000";
    readonly lovelace: "1000000";
    readonly picoether: "1000000";
    readonly gwei: "1000000000";
    readonly Gwei: "1000000000";
    readonly shannon: "1000000000";
    readonly nanoether: "1000000000";
    readonly nano: "1000000000";
    readonly szabo: "1000000000000";
    readonly microether: "1000000000000";
    readonly micro: "1000000000000";
    readonly finney: "1000000000000000";
    readonly milliether: "1000000000000000";
    readonly milli: "1000000000000000";
    readonly ether: "1000000000000000000";
    readonly kether: "1000000000000000000000";
    readonly grand: "1000000000000000000000";
    readonly mether: "1000000000000000000000000";
    readonly gether: "1000000000000000000000000000";
    readonly tether: "1000000000000000000000000000000";
};
type EthereumUnit = keyof typeof unitMap;
/**
 * Returns value of unit in Wei.
 *
 * @param unitInput - The unit to convert to, default ether.
 * @returns Value of the unit (in Wei).
 * @throws Error if the unit is not correct.
 */
export declare function getValueOfUnit(unitInput?: EthereumUnit): bigint;
/**
 * Converts a number to a string.
 *
 * @param arg - The number to convert to a string.
 * @returns The string representation of the number.
 * @throws Error if the number is invalid.
 */
export declare function numberToString(arg: string | number | bigint): string;
/**
 * Converts a number from Wei to a string.
 *
 * @param weiInput - The number to convert from Wei.
 * @param unit - The unit to convert to, default ether.
 * @param optionsInput - The options to use for the conversion.
 * @param optionsInput.pad - Whether to pad the fractional part with zeros.
 * @param optionsInput.commify - Whether to add commas to separate thousands.
 * @returns The string representation of the number.
 * @throws Error if the number is invalid.
 */
export declare function fromWei(weiInput: string | number | bigint, unit: EthereumUnit, optionsInput?: {
    pad?: boolean;
    commify?: boolean;
}): string;
/**
 * Converts a number to Wei.
 *
 * @param etherInput - The number to convert to Wei.
 * @param unit - The unit to convert to, default ether.
 * @returns The number in Wei.
 * @throws Error if the number is invalid.
 */
export declare function toWei(etherInput: string | number | bigint, unit: EthereumUnit): bigint;
export {};
//# sourceMappingURL=unitsConversion.d.cts.map