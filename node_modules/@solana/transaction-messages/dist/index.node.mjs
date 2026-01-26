import { SolanaError, SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME, SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE, SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_NOT_SUPPORTED, SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME, SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING, SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING, SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE, SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND, SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE, SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE, SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES } from '@solana/errors';
import { isBlockhash } from '@solana/rpc-types';
import { getAddressDecoder, getAddressComparator, assertIsAddress, getAddressEncoder } from '@solana/addresses';
import { createEncoder, createDecoder, combineCodec, transformDecoder, transformEncoder, fixDecoderSize, fixEncoderSize, addDecoderSizePrefix, addEncoderSizePrefix } from '@solana/codecs-core';
import { getStructDecoder, getStructEncoder, getArrayDecoder, getUnionEncoder, getConstantEncoder, getArrayEncoder, getBytesDecoder, getBytesEncoder } from '@solana/codecs-data-structures';
import { getShortU16Decoder, getShortU16Encoder, getU8Decoder, getU8Encoder } from '@solana/codecs-numbers';
import { isSignerRole, AccountRole, isWritableRole, mergeRoles } from '@solana/instructions';
import { pipe } from '@solana/functional';

// src/blockhash.ts
function isTransactionMessageWithBlockhashLifetime(transactionMessage) {
  return "lifetimeConstraint" in transactionMessage && typeof transactionMessage.lifetimeConstraint.blockhash === "string" && typeof transactionMessage.lifetimeConstraint.lastValidBlockHeight === "bigint" && isBlockhash(transactionMessage.lifetimeConstraint.blockhash);
}
function assertIsTransactionMessageWithBlockhashLifetime(transactionMessage) {
  if (!isTransactionMessageWithBlockhashLifetime(transactionMessage)) {
    throw new SolanaError(SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME);
  }
}
function setTransactionMessageLifetimeUsingBlockhash(blockhashLifetimeConstraint, transactionMessage) {
  if ("lifetimeConstraint" in transactionMessage && transactionMessage.lifetimeConstraint && "blockhash" in transactionMessage.lifetimeConstraint && transactionMessage.lifetimeConstraint.blockhash === blockhashLifetimeConstraint.blockhash && transactionMessage.lifetimeConstraint.lastValidBlockHeight === blockhashLifetimeConstraint.lastValidBlockHeight) {
    return transactionMessage;
  }
  return Object.freeze({
    ...transactionMessage,
    lifetimeConstraint: Object.freeze(blockhashLifetimeConstraint)
  });
}
function assertValidBaseString(alphabet4, testValue, givenValue = testValue) {
  if (!testValue.match(new RegExp(`^[${alphabet4}]*$`))) {
    throw new SolanaError(SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE, {
      alphabet: alphabet4,
      base: alphabet4.length,
      value: givenValue
    });
  }
}
var getBaseXEncoder = (alphabet4) => {
  return createEncoder({
    getSizeFromValue: (value) => {
      const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
      if (!tailChars) return value.length;
      const base10Number = getBigIntFromBaseX(tailChars, alphabet4);
      return leadingZeroes.length + Math.ceil(base10Number.toString(16).length / 2);
    },
    write(value, bytes, offset) {
      assertValidBaseString(alphabet4, value);
      if (value === "") return offset;
      const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
      if (!tailChars) {
        bytes.set(new Uint8Array(leadingZeroes.length).fill(0), offset);
        return offset + leadingZeroes.length;
      }
      let base10Number = getBigIntFromBaseX(tailChars, alphabet4);
      const tailBytes = [];
      while (base10Number > 0n) {
        tailBytes.unshift(Number(base10Number % 256n));
        base10Number /= 256n;
      }
      const bytesToAdd = [...Array(leadingZeroes.length).fill(0), ...tailBytes];
      bytes.set(bytesToAdd, offset);
      return offset + bytesToAdd.length;
    }
  });
};
var getBaseXDecoder = (alphabet4) => {
  return createDecoder({
    read(rawBytes, offset) {
      const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
      if (bytes.length === 0) return ["", 0];
      let trailIndex = bytes.findIndex((n) => n !== 0);
      trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
      const leadingZeroes = alphabet4[0].repeat(trailIndex);
      if (trailIndex === bytes.length) return [leadingZeroes, rawBytes.length];
      const base10Number = bytes.slice(trailIndex).reduce((sum, byte) => sum * 256n + BigInt(byte), 0n);
      const tailChars = getBaseXFromBigInt(base10Number, alphabet4);
      return [leadingZeroes + tailChars, rawBytes.length];
    }
  });
};
function partitionLeadingZeroes(value, zeroCharacter) {
  const [leadingZeros, tailChars] = value.split(new RegExp(`((?!${zeroCharacter}).*)`));
  return [leadingZeros, tailChars];
}
function getBigIntFromBaseX(value, alphabet4) {
  const base = BigInt(alphabet4.length);
  let sum = 0n;
  for (const char of value) {
    sum *= base;
    sum += BigInt(alphabet4.indexOf(char));
  }
  return sum;
}
function getBaseXFromBigInt(value, alphabet4) {
  const base = BigInt(alphabet4.length);
  const tailChars = [];
  while (value > 0n) {
    tailChars.unshift(alphabet4[Number(value % base)]);
    value /= base;
  }
  return tailChars.join("");
}
var alphabet2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var getBase58Encoder = () => getBaseXEncoder(alphabet2);
var getBase58Decoder = () => getBaseXDecoder(alphabet2);
var memoizedAddressTableLookupEncoder;
function getAddressTableLookupEncoder() {
  if (!memoizedAddressTableLookupEncoder) {
    const indexEncoder = getArrayEncoder(getU8Encoder(), { size: getShortU16Encoder() });
    memoizedAddressTableLookupEncoder = getStructEncoder([
      ["lookupTableAddress", getAddressEncoder()],
      ["writableIndexes", indexEncoder],
      ["readonlyIndexes", indexEncoder]
    ]);
  }
  return memoizedAddressTableLookupEncoder;
}
var memoizedAddressTableLookupDecoder;
function getAddressTableLookupDecoder() {
  if (!memoizedAddressTableLookupDecoder) {
    const indexEncoder = getArrayDecoder(getU8Decoder(), { size: getShortU16Decoder() });
    memoizedAddressTableLookupDecoder = getStructDecoder([
      ["lookupTableAddress", getAddressDecoder()],
      ["writableIndexes", indexEncoder],
      ["readonlyIndexes", indexEncoder]
    ]);
  }
  return memoizedAddressTableLookupDecoder;
}
var memoizedU8Encoder;
function getMemoizedU8Encoder() {
  if (!memoizedU8Encoder) memoizedU8Encoder = getU8Encoder();
  return memoizedU8Encoder;
}
var memoizedU8Decoder;
function getMemoizedU8Decoder() {
  if (!memoizedU8Decoder) memoizedU8Decoder = getU8Decoder();
  return memoizedU8Decoder;
}
function getMessageHeaderEncoder() {
  return getStructEncoder([
    ["numSignerAccounts", getMemoizedU8Encoder()],
    ["numReadonlySignerAccounts", getMemoizedU8Encoder()],
    ["numReadonlyNonSignerAccounts", getMemoizedU8Encoder()]
  ]);
}
function getMessageHeaderDecoder() {
  return getStructDecoder([
    ["numSignerAccounts", getMemoizedU8Decoder()],
    ["numReadonlySignerAccounts", getMemoizedU8Decoder()],
    ["numReadonlyNonSignerAccounts", getMemoizedU8Decoder()]
  ]);
}
var memoizedGetInstructionEncoder;
function getInstructionEncoder() {
  if (!memoizedGetInstructionEncoder) {
    memoizedGetInstructionEncoder = transformEncoder(
      getStructEncoder([
        ["programAddressIndex", getU8Encoder()],
        ["accountIndices", getArrayEncoder(getU8Encoder(), { size: getShortU16Encoder() })],
        ["data", addEncoderSizePrefix(getBytesEncoder(), getShortU16Encoder())]
      ]),
      // Convert an instruction to have all fields defined
      (instruction) => {
        if (instruction.accountIndices !== void 0 && instruction.data !== void 0) {
          return instruction;
        }
        return {
          ...instruction,
          accountIndices: instruction.accountIndices ?? [],
          data: instruction.data ?? new Uint8Array(0)
        };
      }
    );
  }
  return memoizedGetInstructionEncoder;
}
var memoizedGetInstructionDecoder;
function getInstructionDecoder() {
  if (!memoizedGetInstructionDecoder) {
    memoizedGetInstructionDecoder = transformDecoder(
      getStructDecoder([
        ["programAddressIndex", getU8Decoder()],
        ["accountIndices", getArrayDecoder(getU8Decoder(), { size: getShortU16Decoder() })],
        [
          "data",
          addDecoderSizePrefix(getBytesDecoder(), getShortU16Decoder())
        ]
      ]),
      // Convert an instruction to exclude optional fields if they are empty
      (instruction) => {
        if (instruction.accountIndices.length && instruction.data.byteLength) {
          return instruction;
        }
        const { accountIndices, data, ...rest } = instruction;
        return {
          ...rest,
          ...accountIndices.length ? { accountIndices } : null,
          ...data.byteLength ? { data } : null
        };
      }
    );
  }
  return memoizedGetInstructionDecoder;
}

// src/transaction-message.ts
var MAX_SUPPORTED_TRANSACTION_VERSION = 0;

// src/codecs/transaction-version.ts
var VERSION_FLAG_MASK = 128;
function getTransactionVersionEncoder() {
  return createEncoder({
    getSizeFromValue: (value) => value === "legacy" ? 0 : 1,
    maxSize: 1,
    write: (value, bytes, offset) => {
      if (value === "legacy") {
        return offset;
      }
      if (value < 0 || value > 127) {
        throw new SolanaError(SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE, {
          actualVersion: value
        });
      }
      if (value > MAX_SUPPORTED_TRANSACTION_VERSION) {
        throw new SolanaError(SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_NOT_SUPPORTED, {
          unsupportedVersion: value
        });
      }
      bytes.set([value | VERSION_FLAG_MASK], offset);
      return offset + 1;
    }
  });
}
function getTransactionVersionDecoder() {
  return createDecoder({
    maxSize: 1,
    read: (bytes, offset) => {
      const firstByte = bytes[offset];
      if ((firstByte & VERSION_FLAG_MASK) === 0) {
        return ["legacy", offset];
      } else {
        const version = firstByte ^ VERSION_FLAG_MASK;
        if (version > MAX_SUPPORTED_TRANSACTION_VERSION) {
          throw new SolanaError(SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_NOT_SUPPORTED, {
            unsupportedVersion: version
          });
        }
        return [version, offset + 1];
      }
    }
  });
}
function getTransactionVersionCodec() {
  return combineCodec(getTransactionVersionEncoder(), getTransactionVersionDecoder());
}

// src/codecs/message.ts
function getCompiledMessageLegacyEncoder() {
  return getStructEncoder(getPreludeStructEncoderTuple());
}
function getCompiledMessageVersionedEncoder() {
  return transformEncoder(
    getStructEncoder([
      ...getPreludeStructEncoderTuple(),
      ["addressTableLookups", getAddressTableLookupArrayEncoder()]
    ]),
    (value) => {
      if (value.version === "legacy") {
        return value;
      }
      return {
        ...value,
        addressTableLookups: value.addressTableLookups ?? []
      };
    }
  );
}
function getPreludeStructEncoderTuple() {
  const lifetimeTokenEncoder = getUnionEncoder(
    [
      // Use a 32-byte constant encoder for a missing lifetime token (index 0).
      getConstantEncoder(new Uint8Array(32)),
      // Use a 32-byte base58 encoder for a valid lifetime token (index 1).
      fixEncoderSize(getBase58Encoder(), 32)
    ],
    (value) => value === void 0 ? 0 : 1
  );
  return [
    ["version", getTransactionVersionEncoder()],
    ["header", getMessageHeaderEncoder()],
    ["staticAccounts", getArrayEncoder(getAddressEncoder(), { size: getShortU16Encoder() })],
    ["lifetimeToken", lifetimeTokenEncoder],
    ["instructions", getArrayEncoder(getInstructionEncoder(), { size: getShortU16Encoder() })]
  ];
}
function getPreludeStructDecoderTuple() {
  return [
    ["version", getTransactionVersionDecoder()],
    ["header", getMessageHeaderDecoder()],
    ["staticAccounts", getArrayDecoder(getAddressDecoder(), { size: getShortU16Decoder() })],
    ["lifetimeToken", fixDecoderSize(getBase58Decoder(), 32)],
    ["instructions", getArrayDecoder(getInstructionDecoder(), { size: getShortU16Decoder() })],
    ["addressTableLookups", getAddressTableLookupArrayDecoder()]
  ];
}
function getAddressTableLookupArrayEncoder() {
  return getArrayEncoder(getAddressTableLookupEncoder(), { size: getShortU16Encoder() });
}
function getAddressTableLookupArrayDecoder() {
  return getArrayDecoder(getAddressTableLookupDecoder(), { size: getShortU16Decoder() });
}
function getCompiledTransactionMessageEncoder() {
  return createEncoder({
    getSizeFromValue: (compiledMessage) => {
      if (compiledMessage.version === "legacy") {
        return getCompiledMessageLegacyEncoder().getSizeFromValue(compiledMessage);
      } else {
        return getCompiledMessageVersionedEncoder().getSizeFromValue(compiledMessage);
      }
    },
    write: (compiledMessage, bytes, offset) => {
      if (compiledMessage.version === "legacy") {
        return getCompiledMessageLegacyEncoder().write(compiledMessage, bytes, offset);
      } else {
        return getCompiledMessageVersionedEncoder().write(compiledMessage, bytes, offset);
      }
    }
  });
}
function getCompiledTransactionMessageDecoder() {
  return transformDecoder(
    getStructDecoder(getPreludeStructDecoderTuple()),
    ({ addressTableLookups, ...restOfMessage }) => {
      if (restOfMessage.version === "legacy" || !addressTableLookups?.length) {
        return restOfMessage;
      }
      return { ...restOfMessage, addressTableLookups };
    }
  );
}
function getCompiledTransactionMessageCodec() {
  return combineCodec(getCompiledTransactionMessageEncoder(), getCompiledTransactionMessageDecoder());
}
function upsert(addressMap, address, update) {
  addressMap[address] = update(addressMap[address] ?? { role: AccountRole.READONLY });
}
var TYPE = Symbol("AddressMapTypeProperty");
function getAddressMapFromInstructions(feePayer, instructions) {
  const addressMap = {
    [feePayer]: { [TYPE]: 0 /* FEE_PAYER */, role: AccountRole.WRITABLE_SIGNER }
  };
  const addressesOfInvokedPrograms = /* @__PURE__ */ new Set();
  for (const instruction of instructions) {
    upsert(addressMap, instruction.programAddress, (entry) => {
      addressesOfInvokedPrograms.add(instruction.programAddress);
      if (TYPE in entry) {
        if (isWritableRole(entry.role)) {
          switch (entry[TYPE]) {
            case 0 /* FEE_PAYER */:
              throw new SolanaError(SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES, {
                programAddress: instruction.programAddress
              });
            default:
              throw new SolanaError(SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE, {
                programAddress: instruction.programAddress
              });
          }
        }
        if (entry[TYPE] === 2 /* STATIC */) {
          return entry;
        }
      }
      return { [TYPE]: 2 /* STATIC */, role: AccountRole.READONLY };
    });
    let addressComparator;
    if (!instruction.accounts) {
      continue;
    }
    for (const account of instruction.accounts) {
      upsert(addressMap, account.address, (entry) => {
        const {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          address: _,
          ...accountMeta
        } = account;
        if (TYPE in entry) {
          switch (entry[TYPE]) {
            case 0 /* FEE_PAYER */:
              return entry;
            case 1 /* LOOKUP_TABLE */: {
              const nextRole = mergeRoles(entry.role, accountMeta.role);
              if ("lookupTableAddress" in accountMeta) {
                const shouldReplaceEntry = (
                  // Consider using the new LOOKUP_TABLE if its address is different...
                  entry.lookupTableAddress !== accountMeta.lookupTableAddress && // ...and sorts before the existing one.
                  (addressComparator ||= getAddressComparator())(
                    accountMeta.lookupTableAddress,
                    entry.lookupTableAddress
                  ) < 0
                );
                if (shouldReplaceEntry) {
                  return {
                    [TYPE]: 1 /* LOOKUP_TABLE */,
                    ...accountMeta,
                    role: nextRole
                  };
                }
              } else if (isSignerRole(accountMeta.role)) {
                return {
                  [TYPE]: 2 /* STATIC */,
                  role: nextRole
                };
              }
              if (entry.role !== nextRole) {
                return {
                  ...entry,
                  role: nextRole
                };
              } else {
                return entry;
              }
            }
            case 2 /* STATIC */: {
              const nextRole = mergeRoles(entry.role, accountMeta.role);
              if (
                // Check to see if this address represents a program that is invoked
                // in this transaction.
                addressesOfInvokedPrograms.has(account.address)
              ) {
                if (isWritableRole(accountMeta.role)) {
                  throw new SolanaError(
                    SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE,
                    {
                      programAddress: account.address
                    }
                  );
                }
                if (entry.role !== nextRole) {
                  return {
                    ...entry,
                    role: nextRole
                  };
                } else {
                  return entry;
                }
              } else if ("lookupTableAddress" in accountMeta && // Static accounts can be 'upgraded' to lookup table accounts as
              // long as they are not require to sign the transaction.
              !isSignerRole(entry.role)) {
                return {
                  ...accountMeta,
                  [TYPE]: 1 /* LOOKUP_TABLE */,
                  role: nextRole
                };
              } else {
                if (entry.role !== nextRole) {
                  return {
                    ...entry,
                    role: nextRole
                  };
                } else {
                  return entry;
                }
              }
            }
          }
        }
        if ("lookupTableAddress" in accountMeta) {
          return {
            ...accountMeta,
            [TYPE]: 1 /* LOOKUP_TABLE */
          };
        } else {
          return {
            ...accountMeta,
            [TYPE]: 2 /* STATIC */
          };
        }
      });
    }
  }
  return addressMap;
}
function getOrderedAccountsFromAddressMap(addressMap) {
  let addressComparator;
  const orderedAccounts = Object.entries(addressMap).sort(([leftAddress, leftEntry], [rightAddress, rightEntry]) => {
    if (leftEntry[TYPE] !== rightEntry[TYPE]) {
      if (leftEntry[TYPE] === 0 /* FEE_PAYER */) {
        return -1;
      } else if (rightEntry[TYPE] === 0 /* FEE_PAYER */) {
        return 1;
      } else if (leftEntry[TYPE] === 2 /* STATIC */) {
        return -1;
      } else if (rightEntry[TYPE] === 2 /* STATIC */) {
        return 1;
      }
    }
    const leftIsSigner = isSignerRole(leftEntry.role);
    if (leftIsSigner !== isSignerRole(rightEntry.role)) {
      return leftIsSigner ? -1 : 1;
    }
    const leftIsWritable = isWritableRole(leftEntry.role);
    if (leftIsWritable !== isWritableRole(rightEntry.role)) {
      return leftIsWritable ? -1 : 1;
    }
    addressComparator ||= getAddressComparator();
    if (leftEntry[TYPE] === 1 /* LOOKUP_TABLE */ && rightEntry[TYPE] === 1 /* LOOKUP_TABLE */ && leftEntry.lookupTableAddress !== rightEntry.lookupTableAddress) {
      return addressComparator(leftEntry.lookupTableAddress, rightEntry.lookupTableAddress);
    } else {
      return addressComparator(leftAddress, rightAddress);
    }
  }).map(([address, addressMeta]) => ({
    address,
    ...addressMeta
  }));
  return orderedAccounts;
}
function getCompiledAddressTableLookups(orderedAccounts) {
  const index = {};
  for (const account of orderedAccounts) {
    if (!("lookupTableAddress" in account)) {
      continue;
    }
    const entry = index[account.lookupTableAddress] ||= {
      readonlyIndexes: [],
      writableIndexes: []
    };
    if (account.role === AccountRole.WRITABLE) {
      entry.writableIndexes.push(account.addressIndex);
    } else {
      entry.readonlyIndexes.push(account.addressIndex);
    }
  }
  return Object.keys(index).sort(getAddressComparator()).map((lookupTableAddress) => ({
    lookupTableAddress,
    ...index[lookupTableAddress]
  }));
}
function getCompiledMessageHeader(orderedAccounts) {
  let numReadonlyNonSignerAccounts = 0;
  let numReadonlySignerAccounts = 0;
  let numSignerAccounts = 0;
  for (const account of orderedAccounts) {
    if ("lookupTableAddress" in account) {
      break;
    }
    const accountIsWritable = isWritableRole(account.role);
    if (isSignerRole(account.role)) {
      numSignerAccounts++;
      if (!accountIsWritable) {
        numReadonlySignerAccounts++;
      }
    } else if (!accountIsWritable) {
      numReadonlyNonSignerAccounts++;
    }
  }
  return {
    numReadonlyNonSignerAccounts,
    numReadonlySignerAccounts,
    numSignerAccounts
  };
}

// src/compile/instructions.ts
function getAccountIndex(orderedAccounts) {
  const out = {};
  for (const [index, account] of orderedAccounts.entries()) {
    out[account.address] = index;
  }
  return out;
}
function getCompiledInstructions(instructions, orderedAccounts) {
  const accountIndex = getAccountIndex(orderedAccounts);
  return instructions.map(({ accounts, data, programAddress }) => {
    return {
      programAddressIndex: accountIndex[programAddress],
      ...accounts ? { accountIndices: accounts.map(({ address }) => accountIndex[address]) } : null,
      ...data ? { data } : null
    };
  });
}

// src/compile/lifetime-token.ts
function getCompiledLifetimeToken(lifetimeConstraint) {
  if ("nonce" in lifetimeConstraint) {
    return lifetimeConstraint.nonce;
  }
  return lifetimeConstraint.blockhash;
}

// src/compile/static-accounts.ts
function getCompiledStaticAccounts(orderedAccounts) {
  const firstLookupTableAccountIndex = orderedAccounts.findIndex((account) => "lookupTableAddress" in account);
  const orderedStaticAccounts = firstLookupTableAccountIndex === -1 ? orderedAccounts : orderedAccounts.slice(0, firstLookupTableAccountIndex);
  return orderedStaticAccounts.map(({ address }) => address);
}

// src/compile/message.ts
function compileTransactionMessage(transactionMessage) {
  const addressMap = getAddressMapFromInstructions(
    transactionMessage.feePayer.address,
    transactionMessage.instructions
  );
  const orderedAccounts = getOrderedAccountsFromAddressMap(addressMap);
  const lifetimeConstraint = transactionMessage.lifetimeConstraint;
  return {
    ...transactionMessage.version !== "legacy" ? { addressTableLookups: getCompiledAddressTableLookups(orderedAccounts) } : null,
    ...lifetimeConstraint ? { lifetimeToken: getCompiledLifetimeToken(lifetimeConstraint) } : null,
    header: getCompiledMessageHeader(orderedAccounts),
    instructions: getCompiledInstructions(transactionMessage.instructions, orderedAccounts),
    staticAccounts: getCompiledStaticAccounts(orderedAccounts),
    version: transactionMessage.version
  };
}
function findAddressInLookupTables(address, role, addressesByLookupTableAddress) {
  for (const [lookupTableAddress, addresses] of Object.entries(addressesByLookupTableAddress)) {
    for (let i = 0; i < addresses.length; i++) {
      if (address === addresses[i]) {
        return {
          address,
          addressIndex: i,
          lookupTableAddress,
          role
        };
      }
    }
  }
}
function compressTransactionMessageUsingAddressLookupTables(transactionMessage, addressesByLookupTableAddress) {
  const programAddresses = new Set(transactionMessage.instructions.map((ix) => ix.programAddress));
  const eligibleLookupAddresses = new Set(
    Object.values(addressesByLookupTableAddress).flatMap((a) => a).filter((address) => !programAddresses.has(address))
  );
  const newInstructions = [];
  let updatedAnyInstructions = false;
  for (const instruction of transactionMessage.instructions) {
    if (!instruction.accounts) {
      newInstructions.push(instruction);
      continue;
    }
    const newAccounts = [];
    let updatedAnyAccounts = false;
    for (const account of instruction.accounts) {
      if ("lookupTableAddress" in account || !eligibleLookupAddresses.has(account.address) || isSignerRole(account.role)) {
        newAccounts.push(account);
        continue;
      }
      const lookupMetaAccount = findAddressInLookupTables(
        account.address,
        account.role,
        addressesByLookupTableAddress
      );
      newAccounts.push(Object.freeze(lookupMetaAccount));
      updatedAnyAccounts = true;
      updatedAnyInstructions = true;
    }
    newInstructions.push(
      Object.freeze(updatedAnyAccounts ? { ...instruction, accounts: newAccounts } : instruction)
    );
  }
  return Object.freeze(
    updatedAnyInstructions ? { ...transactionMessage, instructions: newInstructions } : transactionMessage
  );
}

// src/create-transaction-message.ts
function createTransactionMessage(config) {
  return Object.freeze({
    instructions: Object.freeze([]),
    version: config.version
  });
}
var RECENT_BLOCKHASHES_SYSVAR_ADDRESS = "SysvarRecentB1ockHashes11111111111111111111";
var SYSTEM_PROGRAM_ADDRESS = "11111111111111111111111111111111";
function createAdvanceNonceAccountInstruction(nonceAccountAddress, nonceAuthorityAddress) {
  return {
    accounts: [
      { address: nonceAccountAddress, role: AccountRole.WRITABLE },
      {
        address: RECENT_BLOCKHASHES_SYSVAR_ADDRESS,
        role: AccountRole.READONLY
      },
      { address: nonceAuthorityAddress, role: AccountRole.READONLY_SIGNER }
    ],
    data: new Uint8Array([4, 0, 0, 0]),
    programAddress: SYSTEM_PROGRAM_ADDRESS
  };
}
function isAdvanceNonceAccountInstruction(instruction) {
  return instruction.programAddress === SYSTEM_PROGRAM_ADDRESS && // Test for `AdvanceNonceAccount` instruction data
  instruction.data != null && isAdvanceNonceAccountInstructionData(instruction.data) && // Test for exactly 3 accounts
  instruction.accounts?.length === 3 && // First account is nonce account address
  instruction.accounts[0].address != null && instruction.accounts[0].role === AccountRole.WRITABLE && // Second account is recent blockhashes sysvar
  instruction.accounts[1].address === RECENT_BLOCKHASHES_SYSVAR_ADDRESS && instruction.accounts[1].role === AccountRole.READONLY && // Third account is nonce authority account
  instruction.accounts[2].address != null && isSignerRole(instruction.accounts[2].role);
}
function isAdvanceNonceAccountInstructionData(data) {
  return data.byteLength === 4 && data[0] === 4 && data[1] === 0 && data[2] === 0 && data[3] === 0;
}

// src/durable-nonce.ts
function isTransactionMessageWithDurableNonceLifetime(transactionMessage) {
  return "lifetimeConstraint" in transactionMessage && typeof transactionMessage.lifetimeConstraint.nonce === "string" && transactionMessage.instructions[0] != null && isAdvanceNonceAccountInstruction(transactionMessage.instructions[0]);
}
function assertIsTransactionMessageWithDurableNonceLifetime(transactionMessage) {
  if (!isTransactionMessageWithDurableNonceLifetime(transactionMessage)) {
    throw new SolanaError(SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME);
  }
}
function isAdvanceNonceAccountInstructionForNonce(instruction, nonceAccountAddress, nonceAuthorityAddress) {
  return instruction.accounts[0].address === nonceAccountAddress && instruction.accounts[2].address === nonceAuthorityAddress;
}
function setTransactionMessageLifetimeUsingDurableNonce({
  nonce,
  nonceAccountAddress,
  nonceAuthorityAddress
}, transactionMessage) {
  let newInstructions;
  const firstInstruction = transactionMessage.instructions[0];
  if (firstInstruction && isAdvanceNonceAccountInstruction(firstInstruction)) {
    if (isAdvanceNonceAccountInstructionForNonce(firstInstruction, nonceAccountAddress, nonceAuthorityAddress)) {
      if (isTransactionMessageWithDurableNonceLifetime(transactionMessage) && transactionMessage.lifetimeConstraint.nonce === nonce) {
        return transactionMessage;
      } else {
        newInstructions = [firstInstruction, ...transactionMessage.instructions.slice(1)];
      }
    } else {
      newInstructions = [
        Object.freeze(createAdvanceNonceAccountInstruction(nonceAccountAddress, nonceAuthorityAddress)),
        ...transactionMessage.instructions.slice(1)
      ];
    }
  } else {
    newInstructions = [
      Object.freeze(createAdvanceNonceAccountInstruction(nonceAccountAddress, nonceAuthorityAddress)),
      ...transactionMessage.instructions
    ];
  }
  return Object.freeze({
    ...transactionMessage,
    instructions: Object.freeze(newInstructions),
    lifetimeConstraint: Object.freeze({ nonce })
  });
}

// src/fee-payer.ts
function setTransactionMessageFeePayer(feePayer, transactionMessage) {
  if ("feePayer" in transactionMessage && feePayer === transactionMessage.feePayer?.address && isAddressOnlyFeePayer(transactionMessage.feePayer)) {
    return transactionMessage;
  }
  const out = {
    ...transactionMessage,
    feePayer: Object.freeze({ address: feePayer })
  };
  Object.freeze(out);
  return out;
}
function isAddressOnlyFeePayer(feePayer) {
  return !!feePayer && "address" in feePayer && typeof feePayer.address === "string" && Object.keys(feePayer).length === 1;
}

// src/instructions.ts
function appendTransactionMessageInstruction(instruction, transactionMessage) {
  return appendTransactionMessageInstructions([instruction], transactionMessage);
}
function appendTransactionMessageInstructions(instructions, transactionMessage) {
  return Object.freeze({
    ...transactionMessage,
    instructions: Object.freeze([
      ...transactionMessage.instructions,
      ...instructions
    ])
  });
}
function prependTransactionMessageInstruction(instruction, transactionMessage) {
  return prependTransactionMessageInstructions([instruction], transactionMessage);
}
function prependTransactionMessageInstructions(instructions, transactionMessage) {
  return Object.freeze({
    ...transactionMessage,
    instructions: Object.freeze([
      ...instructions,
      ...transactionMessage.instructions
    ])
  });
}

// src/decompile-message.ts
function getAccountMetas(message) {
  const { header } = message;
  const numWritableSignerAccounts = header.numSignerAccounts - header.numReadonlySignerAccounts;
  const numWritableNonSignerAccounts = message.staticAccounts.length - header.numSignerAccounts - header.numReadonlyNonSignerAccounts;
  const accountMetas = [];
  let accountIndex = 0;
  for (let i = 0; i < numWritableSignerAccounts; i++) {
    accountMetas.push({
      address: message.staticAccounts[accountIndex],
      role: AccountRole.WRITABLE_SIGNER
    });
    accountIndex++;
  }
  for (let i = 0; i < header.numReadonlySignerAccounts; i++) {
    accountMetas.push({
      address: message.staticAccounts[accountIndex],
      role: AccountRole.READONLY_SIGNER
    });
    accountIndex++;
  }
  for (let i = 0; i < numWritableNonSignerAccounts; i++) {
    accountMetas.push({
      address: message.staticAccounts[accountIndex],
      role: AccountRole.WRITABLE
    });
    accountIndex++;
  }
  for (let i = 0; i < header.numReadonlyNonSignerAccounts; i++) {
    accountMetas.push({
      address: message.staticAccounts[accountIndex],
      role: AccountRole.READONLY
    });
    accountIndex++;
  }
  return accountMetas;
}
function getAddressLookupMetas(compiledAddressTableLookups, addressesByLookupTableAddress) {
  const compiledAddressTableLookupAddresses = compiledAddressTableLookups.map((l) => l.lookupTableAddress);
  const missing = compiledAddressTableLookupAddresses.filter((a) => addressesByLookupTableAddress[a] === void 0);
  if (missing.length > 0) {
    throw new SolanaError(SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING, {
      lookupTableAddresses: missing
    });
  }
  const readOnlyMetas = [];
  const writableMetas = [];
  for (const lookup of compiledAddressTableLookups) {
    const addresses = addressesByLookupTableAddress[lookup.lookupTableAddress];
    const readonlyIndexes = lookup.readonlyIndexes;
    const writableIndexes = lookup.writableIndexes;
    const highestIndex = Math.max(...readonlyIndexes, ...writableIndexes);
    if (highestIndex >= addresses.length) {
      throw new SolanaError(
        SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE,
        {
          highestKnownIndex: addresses.length - 1,
          highestRequestedIndex: highestIndex,
          lookupTableAddress: lookup.lookupTableAddress
        }
      );
    }
    const readOnlyForLookup = readonlyIndexes.map((r) => ({
      address: addresses[r],
      addressIndex: r,
      lookupTableAddress: lookup.lookupTableAddress,
      role: AccountRole.READONLY
    }));
    readOnlyMetas.push(...readOnlyForLookup);
    const writableForLookup = writableIndexes.map((w) => ({
      address: addresses[w],
      addressIndex: w,
      lookupTableAddress: lookup.lookupTableAddress,
      role: AccountRole.WRITABLE
    }));
    writableMetas.push(...writableForLookup);
  }
  return [...writableMetas, ...readOnlyMetas];
}
function convertInstruction(instruction, accountMetas) {
  const programAddress = accountMetas[instruction.programAddressIndex]?.address;
  if (!programAddress) {
    throw new SolanaError(SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND, {
      index: instruction.programAddressIndex
    });
  }
  const accounts = instruction.accountIndices?.map((accountIndex) => accountMetas[accountIndex]);
  const { data } = instruction;
  return Object.freeze({
    programAddress,
    ...accounts && accounts.length ? { accounts: Object.freeze(accounts) } : {},
    ...data && data.length ? { data } : {}
  });
}
function getLifetimeConstraint(messageLifetimeToken, firstInstruction, lastValidBlockHeight) {
  if (!firstInstruction || !isAdvanceNonceAccountInstruction(firstInstruction)) {
    return {
      blockhash: messageLifetimeToken,
      lastValidBlockHeight: lastValidBlockHeight ?? 2n ** 64n - 1n
      // U64 MAX
    };
  } else {
    const nonceAccountAddress = firstInstruction.accounts[0].address;
    assertIsAddress(nonceAccountAddress);
    const nonceAuthorityAddress = firstInstruction.accounts[2].address;
    assertIsAddress(nonceAuthorityAddress);
    return {
      nonce: messageLifetimeToken,
      nonceAccountAddress,
      nonceAuthorityAddress
    };
  }
}
function decompileTransactionMessage(compiledTransactionMessage, config) {
  const feePayer = compiledTransactionMessage.staticAccounts[0];
  if (!feePayer) {
    throw new SolanaError(SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING);
  }
  const accountMetas = getAccountMetas(compiledTransactionMessage);
  const accountLookupMetas = "addressTableLookups" in compiledTransactionMessage && compiledTransactionMessage.addressTableLookups !== void 0 && compiledTransactionMessage.addressTableLookups.length > 0 ? getAddressLookupMetas(
    compiledTransactionMessage.addressTableLookups,
    config?.addressesByLookupTableAddress ?? {}
  ) : [];
  const transactionMetas = [...accountMetas, ...accountLookupMetas];
  const instructions = compiledTransactionMessage.instructions.map(
    (compiledInstruction) => convertInstruction(compiledInstruction, transactionMetas)
  );
  const firstInstruction = instructions[0];
  const lifetimeConstraint = getLifetimeConstraint(
    compiledTransactionMessage.lifetimeToken,
    firstInstruction,
    config?.lastValidBlockHeight
  );
  return pipe(
    createTransactionMessage({ version: compiledTransactionMessage.version }),
    (m) => setTransactionMessageFeePayer(feePayer, m),
    (m) => instructions.reduce(
      (acc, instruction) => appendTransactionMessageInstruction(instruction, acc),
      m
    ),
    (m) => "blockhash" in lifetimeConstraint ? setTransactionMessageLifetimeUsingBlockhash(lifetimeConstraint, m) : setTransactionMessageLifetimeUsingDurableNonce(lifetimeConstraint, m)
  );
}

export { MAX_SUPPORTED_TRANSACTION_VERSION, appendTransactionMessageInstruction, appendTransactionMessageInstructions, assertIsTransactionMessageWithBlockhashLifetime, assertIsTransactionMessageWithDurableNonceLifetime, compileTransactionMessage, compressTransactionMessageUsingAddressLookupTables, createTransactionMessage, decompileTransactionMessage, getCompiledTransactionMessageCodec, getCompiledTransactionMessageDecoder, getCompiledTransactionMessageEncoder, getTransactionVersionCodec, getTransactionVersionDecoder, getTransactionVersionEncoder, isAdvanceNonceAccountInstruction, isTransactionMessageWithBlockhashLifetime, isTransactionMessageWithDurableNonceLifetime, prependTransactionMessageInstruction, prependTransactionMessageInstructions, setTransactionMessageFeePayer, setTransactionMessageLifetimeUsingBlockhash, setTransactionMessageLifetimeUsingDurableNonce };
//# sourceMappingURL=index.node.mjs.map
//# sourceMappingURL=index.node.mjs.map