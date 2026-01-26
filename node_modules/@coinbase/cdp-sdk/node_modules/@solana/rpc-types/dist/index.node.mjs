import { isAddress, assertIsAddress, getAddressEncoder, getAddressDecoder } from '@solana/addresses';
import { createEncoder, combineCodec, transformDecoder } from '@solana/codecs-core';
import { isSolanaError, SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE, SolanaError, SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE, SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH, SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH, SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE, SOLANA_ERROR__MALFORMED_BIGINT_STRING, SOLANA_ERROR__MALFORMED_NUMBER_STRING, SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE, SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE } from '@solana/errors';
import { getU64Encoder, getU64Decoder } from '@solana/codecs-numbers';

// src/blockhash.ts
function isBlockhash(putativeBlockhash) {
  return isAddress(putativeBlockhash);
}
function assertIsBlockhash(putativeBlockhash) {
  try {
    assertIsAddress(putativeBlockhash);
  } catch (error) {
    if (isSolanaError(error, SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE)) {
      throw new SolanaError(SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE, error.context);
    }
    if (isSolanaError(error, SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH)) {
      throw new SolanaError(SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH, error.context);
    }
    throw error;
  }
}
function blockhash(putativeBlockhash) {
  assertIsBlockhash(putativeBlockhash);
  return putativeBlockhash;
}
function getBlockhashEncoder() {
  const addressEncoder = getAddressEncoder();
  return createEncoder({
    fixedSize: 32,
    write: (value, bytes, offset) => {
      assertIsBlockhash(value);
      return addressEncoder.write(value, bytes, offset);
    }
  });
}
function getBlockhashDecoder() {
  return getAddressDecoder();
}
function getBlockhashCodec() {
  return combineCodec(getBlockhashEncoder(), getBlockhashDecoder());
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
      throw new SolanaError(SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE, {
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
  if (!memoizedU64Encoder) memoizedU64Encoder = getU64Encoder();
  return memoizedU64Encoder;
}
function getMemoizedU64Decoder() {
  if (!memoizedU64Decoder) memoizedU64Decoder = getU64Decoder();
  return memoizedU64Decoder;
}
function isLamports(putativeLamports) {
  return putativeLamports >= 0 && putativeLamports <= maxU64Value;
}
function assertIsLamports(putativeLamports) {
  if (putativeLamports < 0 || putativeLamports > maxU64Value) {
    throw new SolanaError(SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE);
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
  return transformDecoder(
    innerDecoder,
    (value) => lamports(typeof value === "bigint" ? value : BigInt(value))
  );
}
function getDefaultLamportsCodec() {
  return combineCodec(getDefaultLamportsEncoder(), getDefaultLamportsDecoder());
}
function getLamportsCodec(innerCodec) {
  return combineCodec(getLamportsEncoder(innerCodec), getLamportsDecoder(innerCodec));
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
    throw new SolanaError(SOLANA_ERROR__MALFORMED_BIGINT_STRING, {
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
    throw new SolanaError(SOLANA_ERROR__MALFORMED_NUMBER_STRING, {
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
    throw new SolanaError(SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE, {
      value: putativeTimestamp
    });
  }
}
function unixTimestamp(putativeTimestamp) {
  assertIsUnixTimestamp(putativeTimestamp);
  return putativeTimestamp;
}

export { assertIsBlockhash, assertIsLamports, assertIsStringifiedBigInt, assertIsStringifiedNumber, assertIsUnixTimestamp, blockhash, commitmentComparator, devnet, getBlockhashCodec, getBlockhashComparator, getBlockhashDecoder, getBlockhashEncoder, getDefaultLamportsCodec, getDefaultLamportsDecoder, getDefaultLamportsEncoder, getLamportsCodec, getLamportsDecoder, getLamportsEncoder, isBlockhash, isLamports, isStringifiedBigInt, isStringifiedNumber, isUnixTimestamp, lamports, mainnet, stringifiedBigInt, stringifiedNumber, testnet, unixTimestamp };
//# sourceMappingURL=index.node.mjs.map
//# sourceMappingURL=index.node.mjs.map