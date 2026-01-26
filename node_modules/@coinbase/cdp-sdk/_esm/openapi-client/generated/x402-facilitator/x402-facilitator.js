import { cdpApiClient } from "../../cdpApiClient.js";
/**
 * Verify an x402 protocol payment with a specific scheme and network.
 * @summary Verify a payment
 */
export const verifyX402Payment = (verifyX402PaymentBody, options) => {
    return cdpApiClient({
        url: `/v2/x402/verify`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: verifyX402PaymentBody,
    }, options);
};
/**
 * Settle an x402 protocol payment with a specific scheme and network.
 * @summary Settle a payment
 */
export const settleX402Payment = (settleX402PaymentBody, options) => {
    return cdpApiClient({
        url: `/v2/x402/settle`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: settleX402PaymentBody,
    }, options);
};
/**
 * Get the supported x402 protocol payment schemes and networks that the facilitator is able to verify and settle payments for.
 * @summary Get supported payment schemes and networks
 */
export const supportedX402PaymentKinds = (options) => {
    return cdpApiClient({ url: `/v2/x402/supported`, method: "GET" }, options);
};
//# sourceMappingURL=x402-facilitator.js.map