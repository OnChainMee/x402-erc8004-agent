import { cdpApiClient } from "../../cdpApiClient.js";
/**
 * Create a new Onramp order or get a quote for an Onramp order. Either `paymentAmount` or `purchaseAmount` must be provided.

This API currently only supports the payment method `GUEST_CHECKOUT_APPLE_PAY`.

For detailed integration instructions and to get access to this API, refer to the  [Apple Pay Onramp API docs](https://docs.cdp.coinbase.com/onramp-&-offramp/onramp-apis/apple-pay-onramp-api).
 * @summary Create an onramp order
 */
export const createOnrampOrder = (createOnrampOrderBody, options) => {
    return cdpApiClient({
        url: `/v2/onramp/orders`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: createOnrampOrderBody,
    }, options);
};
/**
 * Get an onramp order by ID.
 * @summary Get an onramp order by ID
 */
export const getOnrampOrderById = (orderId, options) => {
    return cdpApiClient({ url: `/v2/onramp/orders/${orderId}`, method: "GET" }, options);
};
/**
 * Returns a single-use URL for an Onramp session. This API provides flexible  functionality based on the parameters provided, supporting three cases:

**Important**: The returned URL is single-use only. Once a user visits the URL,  no one else can access it.
## Use Cases
### 1. Basic Session (Minimum Parameters)
**Required**: `destinationAddress`, `purchaseCurrency`, `destinationNetwork`

**Returns**: Basic single-use onramp URL. The `quote` object will not be included in the response.
### 2. One-Click Onramp URL
**Required**: Basic parameters + `paymentAmount`, `paymentCurrency`

**Returns**: One-click onramp URL for streamlined checkout. The `quote` object will not be included in the response.
### 3. One-Click Onramp URL with Quote
**Required**: One-Click Onramp parameters + `paymentMethod`, `country`, `subdivision`

**Returns**: Complete pricing quote and one-click onramp URL. Both `session` and `quote` objects will be included in the response.
 * @summary Create an onramp session
 */
export const createOnrampSession = (createOnrampSessionBody, options) => {
    return cdpApiClient({
        url: `/v2/onramp/sessions`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: createOnrampSessionBody,
    }, options);
};
//# sourceMappingURL=onramp.js.map