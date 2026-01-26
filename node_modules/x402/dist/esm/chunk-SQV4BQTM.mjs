import {
  PaymentPayloadSchema,
  SupportedEVMNetworks,
  SupportedSVMNetworks,
  authorizationTypes,
  getNetworkId,
  getRpcClient,
  isAccount,
  isSignerWallet,
  safeBase64Decode,
  safeBase64Encode
} from "./chunk-3EQVFRKV.mjs";
import {
  __require
} from "./chunk-EMSAO3AI.mjs";

// src/schemes/exact/evm/utils/paymentUtils.ts
function encodePayment(payment) {
  let safe;
  if (SupportedEVMNetworks.includes(payment.network)) {
    const evmPayload = payment.payload;
    safe = {
      ...payment,
      payload: {
        ...evmPayload,
        authorization: Object.fromEntries(
          Object.entries(evmPayload.authorization).map(([key, value]) => [
            key,
            typeof value === "bigint" ? value.toString() : value
          ])
        )
      }
    };
    return safeBase64Encode(JSON.stringify(safe));
  }
  if (SupportedSVMNetworks.includes(payment.network)) {
    safe = { ...payment, payload: payment.payload };
    return safeBase64Encode(JSON.stringify(safe));
  }
  throw new Error("Invalid network");
}
function decodePayment(payment) {
  const decoded = safeBase64Decode(payment);
  const parsed = JSON.parse(decoded);
  let obj;
  if (SupportedEVMNetworks.includes(parsed.network)) {
    obj = {
      ...parsed,
      payload: parsed.payload
    };
  } else if (SupportedSVMNetworks.includes(parsed.network)) {
    obj = {
      ...parsed,
      payload: parsed.payload
    };
  } else {
    throw new Error("Invalid network");
  }
  const validated = PaymentPayloadSchema.parse(obj);
  return validated;
}

// src/schemes/exact/evm/sign.ts
import { getAddress, toHex } from "viem";
async function signAuthorization(walletClient, { from, to, value, validAfter, validBefore, nonce }, { asset, network, extra }) {
  const chainId = getNetworkId(network);
  const name = extra?.name;
  const version = extra?.version;
  const data = {
    types: authorizationTypes,
    domain: {
      name,
      version,
      chainId,
      verifyingContract: getAddress(asset)
    },
    primaryType: "TransferWithAuthorization",
    message: {
      from: getAddress(from),
      to: getAddress(to),
      value,
      validAfter,
      validBefore,
      nonce
    }
  };
  if (isSignerWallet(walletClient)) {
    const signature = await walletClient.signTypedData(data);
    return {
      signature
    };
  } else if (isAccount(walletClient) && walletClient.signTypedData) {
    const signature = await walletClient.signTypedData(data);
    return {
      signature
    };
  } else {
    throw new Error("Invalid wallet client provided does not support signTypedData");
  }
}
function createNonce() {
  const cryptoObj = typeof globalThis.crypto !== "undefined" && typeof globalThis.crypto.getRandomValues === "function" ? globalThis.crypto : (
    // Dynamic require is needed to support node.js
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    __require("crypto").webcrypto
  );
  return toHex(cryptoObj.getRandomValues(new Uint8Array(32)));
}

// src/schemes/exact/evm/client.ts
function preparePaymentHeader(from, x402Version, paymentRequirements) {
  const nonce = createNonce();
  const validAfter = BigInt(
    Math.floor(Date.now() / 1e3) - 600
    // 10 minutes before
  ).toString();
  const validBefore = BigInt(
    Math.floor(Date.now() / 1e3 + paymentRequirements.maxTimeoutSeconds)
  ).toString();
  return {
    x402Version,
    scheme: paymentRequirements.scheme,
    network: paymentRequirements.network,
    payload: {
      signature: void 0,
      authorization: {
        from,
        to: paymentRequirements.payTo,
        value: paymentRequirements.maxAmountRequired,
        validAfter: validAfter.toString(),
        validBefore: validBefore.toString(),
        nonce
      }
    }
  };
}
async function signPaymentHeader(client, paymentRequirements, unsignedPaymentHeader) {
  const { signature } = await signAuthorization(
    client,
    unsignedPaymentHeader.payload.authorization,
    paymentRequirements
  );
  return {
    ...unsignedPaymentHeader,
    payload: {
      ...unsignedPaymentHeader.payload,
      signature
    }
  };
}
async function createPayment(client, x402Version, paymentRequirements) {
  const from = isSignerWallet(client) ? client.account.address : client.address;
  const unsignedPaymentHeader = preparePaymentHeader(from, x402Version, paymentRequirements);
  return signPaymentHeader(client, paymentRequirements, unsignedPaymentHeader);
}
async function createPaymentHeader(client, x402Version, paymentRequirements) {
  const payment = await createPayment(client, x402Version, paymentRequirements);
  return encodePayment(payment);
}

// src/schemes/exact/svm/client.ts
import {
  pipe,
  createTransactionMessage,
  setTransactionMessageFeePayer,
  setTransactionMessageLifetimeUsingBlockhash,
  appendTransactionMessageInstructions,
  partiallySignTransactionMessageWithSigners,
  prependTransactionMessageInstruction,
  getBase64EncodedWireTransaction
} from "@solana/kit";
import {
  fetchMint,
  findAssociatedTokenPda,
  getTransferCheckedInstruction,
  TOKEN_2022_PROGRAM_ADDRESS
} from "@solana-program/token-2022";
import { TOKEN_PROGRAM_ADDRESS } from "@solana-program/token";
import {
  estimateComputeUnitLimitFactory,
  getSetComputeUnitLimitInstruction,
  setTransactionMessageComputeUnitPrice
} from "@solana-program/compute-budget";
async function createPaymentHeader2(client, x402Version, paymentRequirements, config) {
  const paymentPayload = await createAndSignPayment(
    client,
    x402Version,
    paymentRequirements,
    config
  );
  return encodePayment(paymentPayload);
}
async function createAndSignPayment(client, x402Version, paymentRequirements, config) {
  const transactionMessage = await createTransferTransactionMessage(
    client,
    paymentRequirements,
    config
  );
  const signedTransaction = await partiallySignTransactionMessageWithSigners(transactionMessage);
  const base64EncodedWireTransaction = getBase64EncodedWireTransaction(signedTransaction);
  return {
    scheme: paymentRequirements.scheme,
    network: paymentRequirements.network,
    x402Version,
    payload: {
      transaction: base64EncodedWireTransaction
    }
  };
}
async function createTransferTransactionMessage(client, paymentRequirements, config) {
  const rpc = getRpcClient(paymentRequirements.network, config?.svmConfig?.rpcUrl);
  const transferInstructions = await createTransferInstructions(
    client,
    paymentRequirements,
    config
  );
  const feePayer = paymentRequirements.extra?.feePayer;
  const txToSimulate = pipe(
    createTransactionMessage({ version: 0 }),
    (tx2) => setTransactionMessageComputeUnitPrice(1, tx2),
    // 1 microlamport priority fee
    (tx2) => setTransactionMessageFeePayer(feePayer, tx2),
    (tx2) => appendTransactionMessageInstructions(transferInstructions, tx2)
  );
  const estimateComputeUnitLimit = estimateComputeUnitLimitFactory({ rpc });
  const estimatedUnits = await estimateComputeUnitLimit(txToSimulate);
  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();
  const tx = pipe(
    txToSimulate,
    (tx2) => prependTransactionMessageInstruction(
      getSetComputeUnitLimitInstruction({ units: estimatedUnits }),
      tx2
    ),
    (tx2) => setTransactionMessageLifetimeUsingBlockhash(latestBlockhash, tx2)
  );
  return tx;
}
async function createTransferInstructions(client, paymentRequirements, config) {
  const { asset, maxAmountRequired: amount, payTo } = paymentRequirements;
  const rpc = getRpcClient(paymentRequirements.network, config?.svmConfig?.rpcUrl);
  const tokenMint = await fetchMint(rpc, asset);
  const tokenProgramAddress = tokenMint.programAddress;
  if (tokenProgramAddress.toString() !== TOKEN_PROGRAM_ADDRESS.toString() && tokenProgramAddress.toString() !== TOKEN_2022_PROGRAM_ADDRESS.toString()) {
    throw new Error("Asset was not created by a known token program");
  }
  const [sourceATA] = await findAssociatedTokenPda({
    mint: asset,
    owner: client.address,
    tokenProgram: tokenProgramAddress
  });
  const [destinationATA] = await findAssociatedTokenPda({
    mint: asset,
    owner: payTo,
    tokenProgram: tokenProgramAddress
  });
  const transferIx = getTransferCheckedInstruction(
    {
      source: sourceATA,
      mint: asset,
      destination: destinationATA,
      authority: client,
      amount: BigInt(amount),
      decimals: tokenMint.data.decimals
    },
    { programAddress: tokenProgramAddress }
  );
  return [transferIx];
}

export {
  encodePayment,
  decodePayment,
  preparePaymentHeader,
  signPaymentHeader,
  createPayment,
  createPaymentHeader,
  createPaymentHeader2,
  createAndSignPayment
};
//# sourceMappingURL=chunk-SQV4BQTM.mjs.map