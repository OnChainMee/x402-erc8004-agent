'use strict';

var kit = require('@solana/kit');

// src/generated/instructions/requestHeapFrame.ts
var COMPUTE_BUDGET_PROGRAM_ADDRESS = "ComputeBudget111111111111111111111111111111";
var ComputeBudgetInstruction = /* @__PURE__ */ ((ComputeBudgetInstruction2) => {
  ComputeBudgetInstruction2[ComputeBudgetInstruction2["RequestUnits"] = 0] = "RequestUnits";
  ComputeBudgetInstruction2[ComputeBudgetInstruction2["RequestHeapFrame"] = 1] = "RequestHeapFrame";
  ComputeBudgetInstruction2[ComputeBudgetInstruction2["SetComputeUnitLimit"] = 2] = "SetComputeUnitLimit";
  ComputeBudgetInstruction2[ComputeBudgetInstruction2["SetComputeUnitPrice"] = 3] = "SetComputeUnitPrice";
  ComputeBudgetInstruction2[ComputeBudgetInstruction2["SetLoadedAccountsDataSizeLimit"] = 4] = "SetLoadedAccountsDataSizeLimit";
  return ComputeBudgetInstruction2;
})(ComputeBudgetInstruction || {});
function identifyComputeBudgetInstruction(instruction) {
  const data = "data" in instruction ? instruction.data : instruction;
  if (kit.containsBytes(data, kit.getU8Encoder().encode(0), 0)) {
    return 0 /* RequestUnits */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(1), 0)) {
    return 1 /* RequestHeapFrame */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(2), 0)) {
    return 2 /* SetComputeUnitLimit */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(3), 0)) {
    return 3 /* SetComputeUnitPrice */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(4), 0)) {
    return 4 /* SetLoadedAccountsDataSizeLimit */;
  }
  throw new Error(
    "The provided instruction could not be identified as a computeBudget instruction."
  );
}

// src/generated/instructions/requestHeapFrame.ts
var REQUEST_HEAP_FRAME_DISCRIMINATOR = 1;
function getRequestHeapFrameDiscriminatorBytes() {
  return kit.getU8Encoder().encode(REQUEST_HEAP_FRAME_DISCRIMINATOR);
}
function getRequestHeapFrameInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["bytes", kit.getU32Encoder()]
    ]),
    (value) => ({ ...value, discriminator: REQUEST_HEAP_FRAME_DISCRIMINATOR })
  );
}
function getRequestHeapFrameInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["bytes", kit.getU32Decoder()]
  ]);
}
function getRequestHeapFrameInstructionDataCodec() {
  return kit.combineCodec(
    getRequestHeapFrameInstructionDataEncoder(),
    getRequestHeapFrameInstructionDataDecoder()
  );
}
function getRequestHeapFrameInstruction(input, config) {
  const programAddress = config?.programAddress ?? COMPUTE_BUDGET_PROGRAM_ADDRESS;
  const args = { ...input };
  return Object.freeze({
    data: getRequestHeapFrameInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseRequestHeapFrameInstruction(instruction) {
  return {
    programAddress: instruction.programAddress,
    data: getRequestHeapFrameInstructionDataDecoder().decode(instruction.data)
  };
}
var REQUEST_UNITS_DISCRIMINATOR = 0;
function getRequestUnitsDiscriminatorBytes() {
  return kit.getU8Encoder().encode(REQUEST_UNITS_DISCRIMINATOR);
}
function getRequestUnitsInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["units", kit.getU32Encoder()],
      ["additionalFee", kit.getU32Encoder()]
    ]),
    (value) => ({ ...value, discriminator: REQUEST_UNITS_DISCRIMINATOR })
  );
}
function getRequestUnitsInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["units", kit.getU32Decoder()],
    ["additionalFee", kit.getU32Decoder()]
  ]);
}
function getRequestUnitsInstructionDataCodec() {
  return kit.combineCodec(
    getRequestUnitsInstructionDataEncoder(),
    getRequestUnitsInstructionDataDecoder()
  );
}
function getRequestUnitsInstruction(input, config) {
  const programAddress = config?.programAddress ?? COMPUTE_BUDGET_PROGRAM_ADDRESS;
  const args = { ...input };
  return Object.freeze({
    data: getRequestUnitsInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseRequestUnitsInstruction(instruction) {
  return {
    programAddress: instruction.programAddress,
    data: getRequestUnitsInstructionDataDecoder().decode(instruction.data)
  };
}
var SET_COMPUTE_UNIT_LIMIT_DISCRIMINATOR = 2;
function getSetComputeUnitLimitDiscriminatorBytes() {
  return kit.getU8Encoder().encode(SET_COMPUTE_UNIT_LIMIT_DISCRIMINATOR);
}
function getSetComputeUnitLimitInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["units", kit.getU32Encoder()]
    ]),
    (value) => ({
      ...value,
      discriminator: SET_COMPUTE_UNIT_LIMIT_DISCRIMINATOR
    })
  );
}
function getSetComputeUnitLimitInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["units", kit.getU32Decoder()]
  ]);
}
function getSetComputeUnitLimitInstructionDataCodec() {
  return kit.combineCodec(
    getSetComputeUnitLimitInstructionDataEncoder(),
    getSetComputeUnitLimitInstructionDataDecoder()
  );
}
function getSetComputeUnitLimitInstruction(input, config) {
  const programAddress = config?.programAddress ?? COMPUTE_BUDGET_PROGRAM_ADDRESS;
  const args = { ...input };
  return Object.freeze({
    data: getSetComputeUnitLimitInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseSetComputeUnitLimitInstruction(instruction) {
  return {
    programAddress: instruction.programAddress,
    data: getSetComputeUnitLimitInstructionDataDecoder().decode(
      instruction.data
    )
  };
}
var SET_COMPUTE_UNIT_PRICE_DISCRIMINATOR = 3;
function getSetComputeUnitPriceDiscriminatorBytes() {
  return kit.getU8Encoder().encode(SET_COMPUTE_UNIT_PRICE_DISCRIMINATOR);
}
function getSetComputeUnitPriceInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["microLamports", kit.getU64Encoder()]
    ]),
    (value) => ({
      ...value,
      discriminator: SET_COMPUTE_UNIT_PRICE_DISCRIMINATOR
    })
  );
}
function getSetComputeUnitPriceInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["microLamports", kit.getU64Decoder()]
  ]);
}
function getSetComputeUnitPriceInstructionDataCodec() {
  return kit.combineCodec(
    getSetComputeUnitPriceInstructionDataEncoder(),
    getSetComputeUnitPriceInstructionDataDecoder()
  );
}
function getSetComputeUnitPriceInstruction(input, config) {
  const programAddress = config?.programAddress ?? COMPUTE_BUDGET_PROGRAM_ADDRESS;
  const args = { ...input };
  return Object.freeze({
    data: getSetComputeUnitPriceInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseSetComputeUnitPriceInstruction(instruction) {
  return {
    programAddress: instruction.programAddress,
    data: getSetComputeUnitPriceInstructionDataDecoder().decode(
      instruction.data
    )
  };
}
var SET_LOADED_ACCOUNTS_DATA_SIZE_LIMIT_DISCRIMINATOR = 4;
function getSetLoadedAccountsDataSizeLimitDiscriminatorBytes() {
  return kit.getU8Encoder().encode(
    SET_LOADED_ACCOUNTS_DATA_SIZE_LIMIT_DISCRIMINATOR
  );
}
function getSetLoadedAccountsDataSizeLimitInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["accountDataSizeLimit", kit.getU32Encoder()]
    ]),
    (value) => ({
      ...value,
      discriminator: SET_LOADED_ACCOUNTS_DATA_SIZE_LIMIT_DISCRIMINATOR
    })
  );
}
function getSetLoadedAccountsDataSizeLimitInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["accountDataSizeLimit", kit.getU32Decoder()]
  ]);
}
function getSetLoadedAccountsDataSizeLimitInstructionDataCodec() {
  return kit.combineCodec(
    getSetLoadedAccountsDataSizeLimitInstructionDataEncoder(),
    getSetLoadedAccountsDataSizeLimitInstructionDataDecoder()
  );
}
function getSetLoadedAccountsDataSizeLimitInstruction(input, config) {
  const programAddress = config?.programAddress ?? COMPUTE_BUDGET_PROGRAM_ADDRESS;
  const args = { ...input };
  return Object.freeze({
    data: getSetLoadedAccountsDataSizeLimitInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseSetLoadedAccountsDataSizeLimitInstruction(instruction) {
  return {
    programAddress: instruction.programAddress,
    data: getSetLoadedAccountsDataSizeLimitInstructionDataDecoder().decode(
      instruction.data
    )
  };
}

// src/constants.ts
var PROVISORY_COMPUTE_UNIT_LIMIT = 0;
var MAX_COMPUTE_UNIT_LIMIT = 14e5;
function getSetComputeUnitLimitInstructionIndexAndUnits(transactionMessage) {
  const index = getSetComputeUnitLimitInstructionIndex(transactionMessage);
  if (index < 0) {
    return null;
  }
  const units = kit.getU32Decoder().decode(
    transactionMessage.instructions[index].data,
    1
  );
  return { index, units };
}
function getSetComputeUnitLimitInstructionIndex(transactionMessage) {
  return transactionMessage.instructions.findIndex(
    isSetComputeUnitLimitInstruction
  );
}
function isSetComputeUnitLimitInstruction(instruction) {
  return instruction.programAddress === COMPUTE_BUDGET_PROGRAM_ADDRESS && identifyComputeBudgetInstruction(instruction.data) === 2 /* SetComputeUnitLimit */;
}
function getSetComputeUnitPriceInstructionIndexAndMicroLamports(transactionMessage) {
  const index = getSetComputeUnitPriceInstructionIndex(transactionMessage);
  if (index < 0) {
    return null;
  }
  const microLamports = kit.getU64Decoder().decode(
    transactionMessage.instructions[index].data,
    1
  );
  return { index, microLamports };
}
function getSetComputeUnitPriceInstructionIndex(transactionMessage) {
  return transactionMessage.instructions.findIndex(
    isSetComputeUnitPriceInstruction
  );
}
function isSetComputeUnitPriceInstruction(instruction) {
  return instruction.programAddress === COMPUTE_BUDGET_PROGRAM_ADDRESS && identifyComputeBudgetInstruction(instruction.data) === 3 /* SetComputeUnitPrice */;
}
function fillProvisorySetComputeUnitLimitInstruction(transactionMessage) {
  return updateOrAppendSetComputeUnitLimitInstruction(
    (previousUnits) => previousUnits === null ? PROVISORY_COMPUTE_UNIT_LIMIT : previousUnits,
    transactionMessage
  );
}
function updateOrAppendSetComputeUnitLimitInstruction(units, transactionMessage) {
  const getUnits = (previousUnits2) => typeof units === "function" ? units(previousUnits2) : units;
  const instructionDetails = getSetComputeUnitLimitInstructionIndexAndUnits(transactionMessage);
  if (!instructionDetails) {
    return kit.appendTransactionMessageInstruction(
      getSetComputeUnitLimitInstruction({ units: getUnits(null) }),
      transactionMessage
    );
  }
  const { index, units: previousUnits } = instructionDetails;
  const newUnits = getUnits(previousUnits);
  if (newUnits === previousUnits) {
    return transactionMessage;
  }
  const newInstruction = getSetComputeUnitLimitInstruction({ units: newUnits });
  const newInstructions = [...transactionMessage.instructions];
  newInstructions.splice(index, 1, newInstruction);
  return Object.freeze({
    ...transactionMessage,
    instructions: newInstructions
  });
}

// src/estimateAndSetComputeLimit.ts
function estimateAndUpdateProvisoryComputeUnitLimitFactory(estimateComputeUnitLimit2) {
  return async function fn(transactionMessage, config) {
    const instructionDetails = getSetComputeUnitLimitInstructionIndexAndUnits(transactionMessage);
    if (instructionDetails && instructionDetails.units !== PROVISORY_COMPUTE_UNIT_LIMIT && instructionDetails.units !== MAX_COMPUTE_UNIT_LIMIT) {
      return transactionMessage;
    }
    return updateOrAppendSetComputeUnitLimitInstruction(
      await estimateComputeUnitLimit2(transactionMessage, config),
      transactionMessage
    );
  };
}
async function estimateComputeUnitLimit({
  transactionMessage,
  ...configs
}) {
  const replaceRecentBlockhash = !kit.isTransactionMessageWithDurableNonceLifetime(transactionMessage);
  const transaction = kit.pipe(
    transactionMessage,
    (m) => updateOrAppendSetComputeUnitLimitInstruction(MAX_COMPUTE_UNIT_LIMIT, m),
    kit.compileTransaction
  );
  return await simulateTransactionAndGetConsumedUnits({
    transaction,
    replaceRecentBlockhash,
    ...configs
  });
}
async function simulateTransactionAndGetConsumedUnits({
  abortSignal,
  rpc,
  transaction,
  ...simulateConfig
}) {
  const wireTransactionBytes = kit.getBase64EncodedWireTransaction(transaction);
  try {
    const {
      value: { err: transactionError, unitsConsumed }
    } = await rpc.simulateTransaction(wireTransactionBytes, {
      ...simulateConfig,
      encoding: "base64",
      sigVerify: false
    }).send({ abortSignal });
    if (unitsConsumed == null) {
      throw new kit.SolanaError(
        kit.SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT
      );
    }
    const downcastUnitsConsumed = unitsConsumed > 4294967295n ? 4294967295 : Number(unitsConsumed);
    if (transactionError) {
      throw new kit.SolanaError(
        kit.SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT,
        {
          cause: transactionError,
          unitsConsumed: downcastUnitsConsumed
        }
      );
    }
    return downcastUnitsConsumed;
  } catch (e) {
    if (kit.isSolanaError(
      e,
      kit.SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT
    ))
      throw e;
    throw new kit.SolanaError(
      kit.SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT,
      { cause: e }
    );
  }
}

// src/estimateComputeLimit.ts
function estimateComputeUnitLimitFactory({
  rpc
}) {
  return async function estimateComputeUnitLimitFactoryFunction(transactionMessage, config) {
    return await estimateComputeUnitLimit({
      ...config,
      rpc,
      transactionMessage
    });
  };
}
function setTransactionMessageComputeUnitPrice(microLamports, transactionMessage) {
  return kit.appendTransactionMessageInstruction(
    getSetComputeUnitPriceInstruction({ microLamports }),
    transactionMessage
  );
}
function updateOrAppendSetComputeUnitPriceInstruction(microLamports, transactionMessage) {
  const getMicroLamports = (previousMicroLamports2) => typeof microLamports === "function" ? microLamports(previousMicroLamports2) : microLamports;
  const instructionDetails = getSetComputeUnitPriceInstructionIndexAndMicroLamports(transactionMessage);
  if (!instructionDetails) {
    return kit.appendTransactionMessageInstruction(
      getSetComputeUnitPriceInstruction({
        microLamports: getMicroLamports(null)
      }),
      transactionMessage
    );
  }
  const { index, microLamports: previousMicroLamports } = instructionDetails;
  const newMicroLamports = getMicroLamports(previousMicroLamports);
  if (newMicroLamports === previousMicroLamports) {
    return transactionMessage;
  }
  const newInstruction = getSetComputeUnitPriceInstruction({
    microLamports: newMicroLamports
  });
  const newInstructions = [...transactionMessage.instructions];
  newInstructions.splice(index, 1, newInstruction);
  return Object.freeze({
    ...transactionMessage,
    instructions: newInstructions
  });
}

exports.COMPUTE_BUDGET_PROGRAM_ADDRESS = COMPUTE_BUDGET_PROGRAM_ADDRESS;
exports.ComputeBudgetInstruction = ComputeBudgetInstruction;
exports.MAX_COMPUTE_UNIT_LIMIT = MAX_COMPUTE_UNIT_LIMIT;
exports.PROVISORY_COMPUTE_UNIT_LIMIT = PROVISORY_COMPUTE_UNIT_LIMIT;
exports.REQUEST_HEAP_FRAME_DISCRIMINATOR = REQUEST_HEAP_FRAME_DISCRIMINATOR;
exports.REQUEST_UNITS_DISCRIMINATOR = REQUEST_UNITS_DISCRIMINATOR;
exports.SET_COMPUTE_UNIT_LIMIT_DISCRIMINATOR = SET_COMPUTE_UNIT_LIMIT_DISCRIMINATOR;
exports.SET_COMPUTE_UNIT_PRICE_DISCRIMINATOR = SET_COMPUTE_UNIT_PRICE_DISCRIMINATOR;
exports.SET_LOADED_ACCOUNTS_DATA_SIZE_LIMIT_DISCRIMINATOR = SET_LOADED_ACCOUNTS_DATA_SIZE_LIMIT_DISCRIMINATOR;
exports.estimateAndUpdateProvisoryComputeUnitLimitFactory = estimateAndUpdateProvisoryComputeUnitLimitFactory;
exports.estimateComputeUnitLimitFactory = estimateComputeUnitLimitFactory;
exports.fillProvisorySetComputeUnitLimitInstruction = fillProvisorySetComputeUnitLimitInstruction;
exports.getRequestHeapFrameDiscriminatorBytes = getRequestHeapFrameDiscriminatorBytes;
exports.getRequestHeapFrameInstruction = getRequestHeapFrameInstruction;
exports.getRequestHeapFrameInstructionDataCodec = getRequestHeapFrameInstructionDataCodec;
exports.getRequestHeapFrameInstructionDataDecoder = getRequestHeapFrameInstructionDataDecoder;
exports.getRequestHeapFrameInstructionDataEncoder = getRequestHeapFrameInstructionDataEncoder;
exports.getRequestUnitsDiscriminatorBytes = getRequestUnitsDiscriminatorBytes;
exports.getRequestUnitsInstruction = getRequestUnitsInstruction;
exports.getRequestUnitsInstructionDataCodec = getRequestUnitsInstructionDataCodec;
exports.getRequestUnitsInstructionDataDecoder = getRequestUnitsInstructionDataDecoder;
exports.getRequestUnitsInstructionDataEncoder = getRequestUnitsInstructionDataEncoder;
exports.getSetComputeUnitLimitDiscriminatorBytes = getSetComputeUnitLimitDiscriminatorBytes;
exports.getSetComputeUnitLimitInstruction = getSetComputeUnitLimitInstruction;
exports.getSetComputeUnitLimitInstructionDataCodec = getSetComputeUnitLimitInstructionDataCodec;
exports.getSetComputeUnitLimitInstructionDataDecoder = getSetComputeUnitLimitInstructionDataDecoder;
exports.getSetComputeUnitLimitInstructionDataEncoder = getSetComputeUnitLimitInstructionDataEncoder;
exports.getSetComputeUnitPriceDiscriminatorBytes = getSetComputeUnitPriceDiscriminatorBytes;
exports.getSetComputeUnitPriceInstruction = getSetComputeUnitPriceInstruction;
exports.getSetComputeUnitPriceInstructionDataCodec = getSetComputeUnitPriceInstructionDataCodec;
exports.getSetComputeUnitPriceInstructionDataDecoder = getSetComputeUnitPriceInstructionDataDecoder;
exports.getSetComputeUnitPriceInstructionDataEncoder = getSetComputeUnitPriceInstructionDataEncoder;
exports.getSetLoadedAccountsDataSizeLimitDiscriminatorBytes = getSetLoadedAccountsDataSizeLimitDiscriminatorBytes;
exports.getSetLoadedAccountsDataSizeLimitInstruction = getSetLoadedAccountsDataSizeLimitInstruction;
exports.getSetLoadedAccountsDataSizeLimitInstructionDataCodec = getSetLoadedAccountsDataSizeLimitInstructionDataCodec;
exports.getSetLoadedAccountsDataSizeLimitInstructionDataDecoder = getSetLoadedAccountsDataSizeLimitInstructionDataDecoder;
exports.getSetLoadedAccountsDataSizeLimitInstructionDataEncoder = getSetLoadedAccountsDataSizeLimitInstructionDataEncoder;
exports.identifyComputeBudgetInstruction = identifyComputeBudgetInstruction;
exports.parseRequestHeapFrameInstruction = parseRequestHeapFrameInstruction;
exports.parseRequestUnitsInstruction = parseRequestUnitsInstruction;
exports.parseSetComputeUnitLimitInstruction = parseSetComputeUnitLimitInstruction;
exports.parseSetComputeUnitPriceInstruction = parseSetComputeUnitPriceInstruction;
exports.parseSetLoadedAccountsDataSizeLimitInstruction = parseSetLoadedAccountsDataSizeLimitInstruction;
exports.setTransactionMessageComputeUnitPrice = setTransactionMessageComputeUnitPrice;
exports.updateOrAppendSetComputeUnitLimitInstruction = updateOrAppendSetComputeUnitLimitInstruction;
exports.updateOrAppendSetComputeUnitPriceInstruction = updateOrAppendSetComputeUnitPriceInstruction;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map