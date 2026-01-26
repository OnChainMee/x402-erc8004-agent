import * as z from 'zod/mini';
import * as u from '../core/internal/schema/utils.js';
export const ThemeColorScheme = z.union([
    z.literal('light'),
    z.literal('dark'),
    z.literal('light dark'),
]);
export const isThemeColorScheme = (value) => u.is(ThemeColorScheme, value);
export const Color = z.union([
    z.literal('transparent'),
    z
        .string()
        .check(z.regex(/^#([0-9A-Fa-f]{8}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/)),
]);
export const LightDarkColor = z.readonly(z.tuple([Color, Color]));
export const isColor = (value) => u.is(Color, value);
export const isLightDarkColor = (value) => u.is(LightDarkColor, value);
//# sourceMappingURL=Theme.js.map