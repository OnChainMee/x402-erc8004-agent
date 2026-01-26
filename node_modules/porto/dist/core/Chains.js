import { defineChain } from 'viem';
import { anvil as viem_anvil } from 'viem/chains';
import * as chains from './internal/_generated/chains.js';
export * from './internal/_generated/chains.js';
export const all = [
    chains.base,
    ...Object.values(chains).filter((c) => c && c.id !== chains.base.id),
];
export const anvil = viem_anvil;
/** Additional Anvil environment, purposed for interop. */
export const anvil2 = /*#__PURE__*/ defineChain({
    ...anvil,
    id: 31_338,
});
/** Additional Anvil environment, purposed for interop. */
export const anvil3 = /*#__PURE__*/ defineChain({
    ...anvil,
    id: 31_339,
});
//# sourceMappingURL=Chains.js.map