import { getPaymentStatus } from './getPaymentStatus.js';
import { getSubscriptionStatus } from './getSubscriptionStatus.js';
import { pay } from './pay.js';
import { prepareCharge } from './prepareCharge.js';
import { subscribe } from './subscribe.js';
import type { PaymentOptions, PaymentResult, PaymentStatus, PaymentStatusOptions, PrepareChargeOptions, PrepareChargeResult, SubscriptionOptions, SubscriptionResult, SubscriptionStatus, SubscriptionStatusOptions } from './types.js';
/**
 * Browser payment interface
 */
export declare const base: {
    pay: typeof pay;
    subscribe: typeof subscribe;
    getPaymentStatus: typeof getPaymentStatus;
    subscription: {
        subscribe: typeof subscribe;
        getStatus: typeof getSubscriptionStatus;
        prepareCharge: typeof prepareCharge;
    };
    constants: {
        CHAIN_IDS: {
            readonly base: 8453;
            readonly baseSepolia: 84532;
        };
        TOKENS: {
            readonly USDC: {
                readonly decimals: 6;
                readonly addresses: {
                    readonly base: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
                    readonly baseSepolia: "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
                };
            };
        };
    };
    types: {
        PaymentOptions: PaymentOptions;
        PaymentResult: PaymentResult;
        PaymentStatusOptions: PaymentStatusOptions;
        PaymentStatus: PaymentStatus;
        PrepareChargeOptions: PrepareChargeOptions;
        PrepareChargeResult: PrepareChargeResult;
        SubscriptionOptions: SubscriptionOptions;
        SubscriptionResult: SubscriptionResult;
        SubscriptionStatus: SubscriptionStatus;
        SubscriptionStatusOptions: SubscriptionStatusOptions;
    };
};
//# sourceMappingURL=base.browser.d.ts.map