import { Address } from 'viem';
import { Address as Address$1 } from '@solana/kit';

declare const config: Record<string, ChainConfig>;
type ChainConfig = {
    usdcAddress: Address | Address$1;
    usdcName: string;
};

export { type ChainConfig as C, config as c };
