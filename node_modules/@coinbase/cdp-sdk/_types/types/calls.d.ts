import type { AbiStateMutability, Address } from "viem";
import type { GetMulticallContractParameters } from "./multicall.js";
import type { OneOf, Prettify } from "./utils.js";
import type { Hex } from "./misc.js";
export type Call<call = unknown, extraProperties extends Record<string, unknown> = {}> = OneOf<(extraProperties & {
    data?: Hex | undefined;
    to: Address;
    value?: bigint | undefined;
    overrideGasLimit?: string | undefined;
}) | (extraProperties & (Omit<GetMulticallContractParameters<call, AbiStateMutability>, "address"> & {
    to: Address;
    value?: bigint | undefined;
}))>;
export type Calls<calls extends readonly unknown[], extraProperties extends Record<string, unknown> = {}, result extends readonly any[] = []> = calls extends readonly [] ? readonly [] : calls extends readonly [infer call] ? readonly [...result, Prettify<Call<call, extraProperties>>] : calls extends readonly [infer call, ...infer rest] ? Calls<[...rest], extraProperties, [...result, Prettify<Call<call, extraProperties>>]> : readonly unknown[] extends calls ? calls : calls extends readonly (infer call extends OneOf<Call>)[] ? readonly Prettify<call>[] : readonly OneOf<Call>[];
//# sourceMappingURL=calls.d.ts.map