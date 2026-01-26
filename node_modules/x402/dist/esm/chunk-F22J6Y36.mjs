import {
  createPaymentHeader,
  createPaymentHeader2,
  encodePayment,
  preparePaymentHeader,
  signPaymentHeader
} from "./chunk-SQV4BQTM.mjs";
import {
  SupportedEVMNetworks,
  SupportedSVMNetworks,
  getNetworkId,
  isEvmSignerWallet,
  isMultiNetworkSigner,
  isSvmSignerWallet
} from "./chunk-3EQVFRKV.mjs";
import {
  getUsdcChainConfigForChain
} from "./chunk-K4TZLEOT.mjs";

// src/client/createPaymentHeader.ts
async function createPaymentHeader3(client, x402Version, paymentRequirements, config) {
  if (paymentRequirements.scheme === "exact") {
    if (SupportedEVMNetworks.includes(paymentRequirements.network)) {
      const evmClient = isMultiNetworkSigner(client) ? client.evm : client;
      if (!isEvmSignerWallet(evmClient)) {
        throw new Error("Invalid evm wallet client provided");
      }
      return await createPaymentHeader(
        evmClient,
        x402Version,
        paymentRequirements
      );
    }
    if (SupportedSVMNetworks.includes(paymentRequirements.network)) {
      const svmClient = isMultiNetworkSigner(client) ? client.svm : client;
      if (!isSvmSignerWallet(svmClient)) {
        throw new Error("Invalid svm wallet client provided");
      }
      return await createPaymentHeader2(
        svmClient,
        x402Version,
        paymentRequirements,
        config
      );
    }
    throw new Error("Unsupported network");
  }
  throw new Error("Unsupported scheme");
}

// src/client/preparePaymentHeader.ts
function preparePaymentHeader2(from, x402Version, paymentRequirements) {
  if (paymentRequirements.scheme === "exact" && SupportedEVMNetworks.includes(paymentRequirements.network)) {
    return preparePaymentHeader(from, x402Version, paymentRequirements);
  }
  throw new Error("Unsupported scheme");
}

// src/client/selectPaymentRequirements.ts
function selectPaymentRequirements(paymentRequirements, network, scheme) {
  const broadlyAcceptedPaymentRequirements = paymentRequirements.filter((requirement) => {
    const isExpectedScheme = !scheme || requirement.scheme === scheme;
    const isExpectedChain = !network || (Array.isArray(network) ? network.includes(requirement.network) : network == requirement.network);
    return isExpectedScheme && isExpectedChain;
  });
  const usdcRequirements = broadlyAcceptedPaymentRequirements.filter((requirement) => {
    return requirement.asset === getUsdcChainConfigForChain(getNetworkId(requirement.network))?.usdcAddress;
  });
  if (usdcRequirements.length > 0) {
    return usdcRequirements[0];
  }
  if (broadlyAcceptedPaymentRequirements.length > 0) {
    return broadlyAcceptedPaymentRequirements[0];
  }
  return paymentRequirements[0];
}

// src/client/signPaymentHeader.ts
async function signPaymentHeader2(client, paymentRequirements, unsignedPaymentHeader) {
  if (paymentRequirements.scheme === "exact" && SupportedEVMNetworks.includes(paymentRequirements.network)) {
    const evmClient = isMultiNetworkSigner(client) ? client.evm : client;
    if (!isEvmSignerWallet(evmClient)) {
      throw new Error("Invalid evm wallet client provided");
    }
    const signedPaymentHeader = await signPaymentHeader(evmClient, paymentRequirements, unsignedPaymentHeader);
    return encodePayment(signedPaymentHeader);
  }
  throw new Error("Unsupported scheme");
}

export {
  createPaymentHeader3 as createPaymentHeader,
  preparePaymentHeader2 as preparePaymentHeader,
  selectPaymentRequirements,
  signPaymentHeader2 as signPaymentHeader
};
//# sourceMappingURL=chunk-F22J6Y36.mjs.map