'use strict';

var addresses = require('@solana/addresses');
var codecsCore = require('@solana/codecs-core');
var errors = require('@solana/errors');
var codecsNumbers = require('@solana/codecs-numbers');

// src/blockhash.ts
function isBlockhash(putativeBlockhash) {
  return addresses.isAddress(putativeBlockhash);
}
function assertIsBlockhash(putativeBlockhash) {
  try {
    addresses.assertIsAddress(putativeBlockhash);
  } catch (error) {
    if (errors.isSolanaError(error, errors.SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE)) {
      throw new errors.SolanaError(errors.SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE, error.context);
    }
    if (errors.isSolanaError(error, errors.SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH)) {
      throw new errors.SolanaError(errors.SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH, error.context);
    }
    throw error;
  }
}
function blockhash(putativeBlockhash) {
  assertIsBlockhash(putativeBlockhash);
  return putativeBlockhash;
}
function getBlockhashEncoder() {
  const addressEncoder = addresses.getAddressEncoder();
  return codecsCore.createEncoder({
    fixedSize: 32,
    write: (value, bytes, offset) => {
      assertIsBlockhash(value);
      return addressEncoder.write(value, bytes, offset);
    }
  });
}
function getBlockhashDecoder() {
  return addresses.getAddressDecoder();
}
function getBlockhashCodec() {
  return codecsCore.combineCodec(getBlockhashEncoder(), getBlockhashDecoder());
}
function getBlockhashComparator() {
  return new Intl.Collator("en", {
    caseFirst: "lower",
    ignorePunctuation: false,
    localeMatcher: "best fit",
    numeric: false,
    sensitivity: "variant",
    usage: "sort"
  }).compare;
}

// src/cluster-url.ts
function mainnet(putativeString) {
  return putativeString;
}
function devnet(putativeString) {
  return putativeString;
}
function testnet(putativeString) {
  return putativeString;
}
function getCommitmentScore(commitment) {
  switch (commitment) {
    case "finalized":
      return 2;
    case "confirmed":
      return 1;
    case "processed":
      return 0;
    default:
      throw new errors.SolanaError(errors.SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE, {
        unexpectedValue: commitment
      });
  }
}
function commitmentComparator(a, b) {
  if (a === b) {
    return 0;
  }
  return getCommitmentScore(a) < getCommitmentScore(b) ? -1 : 1;
}
var maxU64Value = 18446744073709551615n;
var memoizedU64Encoder;
var memoizedU64Decoder;
function getMemoizedU64Encoder() {
  if (!memoizedU64Encoder) memoizedU64Encoder = codecsNumbers.getU64Encoder();
  return memoizedU64Encoder;
}
function getMemoizedU64Decoder() {
  if (!memoizedU64Decoder) memoizedU64Decoder = codecsNumbers.getU64Decoder();
  return memoizedU64Decoder;
}
function isLamports(putativeLamports) {
  return putativeLamports >= 0 && putativeLamports <= maxU64Value;
}
function assertIsLamports(putativeLamports) {
  if (putativeLamports < 0 || putativeLamports > maxU64Value) {
    throw new errors.SolanaError(errors.SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE);
  }
}
function lamports(putativeLamports) {
  assertIsLamports(putativeLamports);
  return putativeLamports;
}
function getDefaultLamportsEncoder() {
  return getLamportsEncoder(getMemoizedU64Encoder());
}
function getLamportsEncoder(innerEncoder) {
  return innerEncoder;
}
function getDefaultLamportsDecoder() {
  return getLamportsDecoder(getMemoizedU64Decoder());
}
function getLamportsDecoder(innerDecoder) {
  return codecsCore.transformDecoder(
    innerDecoder,
    (value) => lamports(typeof value === "bigint" ? value : BigInt(value))
  );
}
function getDefaultLamportsCodec() {
  return codecsCore.combineCodec(getDefaultLamportsEncoder(), getDefaultLamportsDecoder());
}
function getLamportsCodec(innerCodec) {
  return codecsCore.combineCodec(getLamportsEncoder(innerCodec), getLamportsDecoder(innerCodec));
}
function isStringifiedBigInt(putativeBigInt) {
  try {
    BigInt(putativeBigInt);
    return true;
  } catch {
    return false;
  }
}
function assertIsStringifiedBigInt(putativeBigInt) {
  try {
    BigInt(putativeBigInt);
  } catch {
    throw new errors.SolanaError(errors.SOLANA_ERROR__MALFORMED_BIGINT_STRING, {
      value: putativeBigInt
    });
  }
}
function stringifiedBigInt(putativeBigInt) {
  assertIsStringifiedBigInt(putativeBigInt);
  return putativeBigInt;
}
function isStringifiedNumber(putativeNumber) {
  return !Number.isNaN(Number(putativeNumber));
}
function assertIsStringifiedNumber(putativeNumber) {
  if (Number.isNaN(Number(putativeNumber))) {
    throw new errors.SolanaError(errors.SOLANA_ERROR__MALFORMED_NUMBER_STRING, {
      value: putativeNumber
    });
  }
}
function stringifiedNumber(putativeNumber) {
  assertIsStringifiedNumber(putativeNumber);
  return putativeNumber;
}
var maxI64Value = 9223372036854775807n;
var minI64Value = -9223372036854775808n;
function isUnixTimestamp(putativeTimestamp) {
  return putativeTimestamp >= minI64Value && putativeTimestamp <= maxI64Value;
}
function assertIsUnixTimestamp(putativeTimestamp) {
  if (putativeTimestamp < minI64Value || putativeTimestamp > maxI64Value) {
    throw new errors.SolanaError(errors.SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE, {
      value: putativeTimestamp
    });
  }
}
function unixTimestamp(putativeTimestamp) {
  assertIsUnixTimestamp(putativeTimestamp);
  return putativeTimestamp;
}

exports.assertIsBlockhash = assertIsBlockhash;
exports.assertIsLamports = assertIsLamports;
exports.assertIsStringifiedBigInt = assertIsStringifiedBigInt;
exports.assertIsStringifiedNumber = assertIsStringifiedNumber;
exports.assertIsUnixTimestamp = assertIsUnixTimestamp;
exports.blockhash = blockhash;
exports.commitmentComparator = commitmentComparator;
exports.devnet = devnet;
exports.getBlockhashCodec = getBlockhashCodec;
exports.getBlockhashComparator = getBlockhashComparator;
exports.getBlockhashDecoder = getBlockhashDecoder;
exports.getBlockhashEncoder = getBlockhashEncoder;
exports.getDefaultLamportsCodec = getDefaultLamportsCodec;
exports.getDefaultLamportsDecoder = getDefaultLamportsDecoder;
exports.getDefaultLamportsEncoder = getDefaultLamportsEncoder;
exports.getLamportsCodec = getLamportsCodec;
exports.getLamportsDecoder = getLamportsDecoder;
exports.getLamportsEncoder = getLamportsEncoder;
exports.isBlockhash = isBlockhash;
exports.isLamports = isLamports;
exports.isStringifiedBigInt = isStringifiedBigInt;
exports.isStringifiedNumber = isStringifiedNumber;
exports.isUnixTimestamp = isUnixTimestamp;
exports.lamports = lamports;
exports.mainnet = mainnet;
exports.stringifiedBigInt = stringifiedBigInt;
exports.stringifiedNumber = stringifiedNumber;
exports.testnet = testnet;
exports.unixTimestamp = unixTimestamp;
//# sourceMappingURL=index.browser.cjs.map
//# sourceMappingURL=index.browser.cjs.map