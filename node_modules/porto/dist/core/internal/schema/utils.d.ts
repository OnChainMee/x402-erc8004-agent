import * as Errors from 'ox/Errors';
import * as z from 'zod/mini';
import type * as zc from 'zod/v4/core';
import type { OneOf } from '../types.js';
export declare const address: () => z.ZodMiniTemplateLiteral<`0x${string}`>;
export declare const hex: () => z.ZodMiniTemplateLiteral<`0x${string}`>;
export declare const number: () => z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniNumber<number>>;
export declare const bigint: () => z.ZodMiniCodec<z.ZodMiniTemplateLiteral<`0x${string}`>, z.ZodMiniBigInt<bigint>>;
export declare const is: <schema extends z.ZodMiniType>(schema: schema, message: unknown) => message is z.infer<schema>;
export declare function oneOf<const type extends readonly zc.SomeType[]>(options: type): Omit<z.ZodMiniUnion<type>, '_zod'> & {
    _zod: Omit<z.ZodMiniUnion<type>['_zod'], 'output'> & {
        output: z.ZodMiniUnion<type>['_zod']['output'] extends object ? OneOf<z.ZodMiniUnion<type>['_zod']['output']> : z.ZodMiniUnion<type>['_zod']['output'];
    };
};
export declare class ValidationError extends Errors.BaseError {
    readonly name = "Schema.ValidationError";
}
export declare function toValidationError(e: unknown): ValidationError;
//# sourceMappingURL=utils.d.ts.map