'use strict';

var kit = require('@solana/kit');

// src/generated/accounts/mint.ts
function getMintEncoder() {
  return kit.getStructEncoder([
    [
      "mintAuthority",
      kit.getOptionEncoder(kit.getAddressEncoder(), {
        prefix: kit.getU32Encoder(),
        noneValue: "zeroes"
      })
    ],
    ["supply", kit.getU64Encoder()],
    ["decimals", kit.getU8Encoder()],
    ["isInitialized", kit.getBooleanEncoder()],
    [
      "freezeAuthority",
      kit.getOptionEncoder(kit.getAddressEncoder(), {
        prefix: kit.getU32Encoder(),
        noneValue: "zeroes"
      })
    ]
  ]);
}
function getMintDecoder() {
  return kit.getStructDecoder([
    [
      "mintAuthority",
      kit.getOptionDecoder(kit.getAddressDecoder(), {
        prefix: kit.getU32Decoder(),
        noneValue: "zeroes"
      })
    ],
    ["supply", kit.getU64Decoder()],
    ["decimals", kit.getU8Decoder()],
    ["isInitialized", kit.getBooleanDecoder()],
    [
      "freezeAuthority",
      kit.getOptionDecoder(kit.getAddressDecoder(), {
        prefix: kit.getU32Decoder(),
        noneValue: "zeroes"
      })
    ]
  ]);
}
function getMintCodec() {
  return kit.combineCodec(getMintEncoder(), getMintDecoder());
}
function decodeMint(encodedAccount) {
  return kit.decodeAccount(
    encodedAccount,
    getMintDecoder()
  );
}
async function fetchMint(rpc, address, config) {
  const maybeAccount = await fetchMaybeMint(rpc, address, config);
  kit.assertAccountExists(maybeAccount);
  return maybeAccount;
}
async function fetchMaybeMint(rpc, address, config) {
  const maybeAccount = await kit.fetchEncodedAccount(rpc, address, config);
  return decodeMint(maybeAccount);
}
async function fetchAllMint(rpc, addresses, config) {
  const maybeAccounts = await fetchAllMaybeMint(rpc, addresses, config);
  kit.assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}
async function fetchAllMaybeMint(rpc, addresses, config) {
  const maybeAccounts = await kit.fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) => decodeMint(maybeAccount));
}
function getMintSize() {
  return 82;
}
function getMultisigEncoder() {
  return kit.getStructEncoder([
    ["m", kit.getU8Encoder()],
    ["n", kit.getU8Encoder()],
    ["isInitialized", kit.getBooleanEncoder()],
    ["signers", kit.getArrayEncoder(kit.getAddressEncoder(), { size: 11 })]
  ]);
}
function getMultisigDecoder() {
  return kit.getStructDecoder([
    ["m", kit.getU8Decoder()],
    ["n", kit.getU8Decoder()],
    ["isInitialized", kit.getBooleanDecoder()],
    ["signers", kit.getArrayDecoder(kit.getAddressDecoder(), { size: 11 })]
  ]);
}
function getMultisigCodec() {
  return kit.combineCodec(getMultisigEncoder(), getMultisigDecoder());
}
function decodeMultisig(encodedAccount) {
  return kit.decodeAccount(
    encodedAccount,
    getMultisigDecoder()
  );
}
async function fetchMultisig(rpc, address, config) {
  const maybeAccount = await fetchMaybeMultisig(rpc, address, config);
  kit.assertAccountExists(maybeAccount);
  return maybeAccount;
}
async function fetchMaybeMultisig(rpc, address, config) {
  const maybeAccount = await kit.fetchEncodedAccount(rpc, address, config);
  return decodeMultisig(maybeAccount);
}
async function fetchAllMultisig(rpc, addresses, config) {
  const maybeAccounts = await fetchAllMaybeMultisig(rpc, addresses, config);
  kit.assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}
async function fetchAllMaybeMultisig(rpc, addresses, config) {
  const maybeAccounts = await kit.fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) => decodeMultisig(maybeAccount));
}
function getMultisigSize() {
  return 355;
}
var AccountState = /* @__PURE__ */ ((AccountState2) => {
  AccountState2[AccountState2["Uninitialized"] = 0] = "Uninitialized";
  AccountState2[AccountState2["Initialized"] = 1] = "Initialized";
  AccountState2[AccountState2["Frozen"] = 2] = "Frozen";
  return AccountState2;
})(AccountState || {});
function getAccountStateEncoder() {
  return kit.getEnumEncoder(AccountState);
}
function getAccountStateDecoder() {
  return kit.getEnumDecoder(AccountState);
}
function getAccountStateCodec() {
  return kit.combineCodec(getAccountStateEncoder(), getAccountStateDecoder());
}
var AuthorityType = /* @__PURE__ */ ((AuthorityType2) => {
  AuthorityType2[AuthorityType2["MintTokens"] = 0] = "MintTokens";
  AuthorityType2[AuthorityType2["FreezeAccount"] = 1] = "FreezeAccount";
  AuthorityType2[AuthorityType2["AccountOwner"] = 2] = "AccountOwner";
  AuthorityType2[AuthorityType2["CloseAccount"] = 3] = "CloseAccount";
  return AuthorityType2;
})(AuthorityType || {});
function getAuthorityTypeEncoder() {
  return kit.getEnumEncoder(AuthorityType);
}
function getAuthorityTypeDecoder() {
  return kit.getEnumDecoder(AuthorityType);
}
function getAuthorityTypeCodec() {
  return kit.combineCodec(getAuthorityTypeEncoder(), getAuthorityTypeDecoder());
}

// src/generated/accounts/token.ts
function getTokenEncoder() {
  return kit.getStructEncoder([
    ["mint", kit.getAddressEncoder()],
    ["owner", kit.getAddressEncoder()],
    ["amount", kit.getU64Encoder()],
    [
      "delegate",
      kit.getOptionEncoder(kit.getAddressEncoder(), {
        prefix: kit.getU32Encoder(),
        noneValue: "zeroes"
      })
    ],
    ["state", getAccountStateEncoder()],
    [
      "isNative",
      kit.getOptionEncoder(kit.getU64Encoder(), {
        prefix: kit.getU32Encoder(),
        noneValue: "zeroes"
      })
    ],
    ["delegatedAmount", kit.getU64Encoder()],
    [
      "closeAuthority",
      kit.getOptionEncoder(kit.getAddressEncoder(), {
        prefix: kit.getU32Encoder(),
        noneValue: "zeroes"
      })
    ]
  ]);
}
function getTokenDecoder() {
  return kit.getStructDecoder([
    ["mint", kit.getAddressDecoder()],
    ["owner", kit.getAddressDecoder()],
    ["amount", kit.getU64Decoder()],
    [
      "delegate",
      kit.getOptionDecoder(kit.getAddressDecoder(), {
        prefix: kit.getU32Decoder(),
        noneValue: "zeroes"
      })
    ],
    ["state", getAccountStateDecoder()],
    [
      "isNative",
      kit.getOptionDecoder(kit.getU64Decoder(), {
        prefix: kit.getU32Decoder(),
        noneValue: "zeroes"
      })
    ],
    ["delegatedAmount", kit.getU64Decoder()],
    [
      "closeAuthority",
      kit.getOptionDecoder(kit.getAddressDecoder(), {
        prefix: kit.getU32Decoder(),
        noneValue: "zeroes"
      })
    ]
  ]);
}
function getTokenCodec() {
  return kit.combineCodec(getTokenEncoder(), getTokenDecoder());
}
function decodeToken(encodedAccount) {
  return kit.decodeAccount(
    encodedAccount,
    getTokenDecoder()
  );
}
async function fetchToken(rpc, address, config) {
  const maybeAccount = await fetchMaybeToken(rpc, address, config);
  kit.assertAccountExists(maybeAccount);
  return maybeAccount;
}
async function fetchMaybeToken(rpc, address, config) {
  const maybeAccount = await kit.fetchEncodedAccount(rpc, address, config);
  return decodeToken(maybeAccount);
}
async function fetchAllToken(rpc, addresses, config) {
  const maybeAccounts = await fetchAllMaybeToken(rpc, addresses, config);
  kit.assertAccountsExist(maybeAccounts);
  return maybeAccounts;
}
async function fetchAllMaybeToken(rpc, addresses, config) {
  const maybeAccounts = await kit.fetchEncodedAccounts(rpc, addresses, config);
  return maybeAccounts.map((maybeAccount) => decodeToken(maybeAccount));
}
function getTokenSize() {
  return 165;
}
var ASSOCIATED_TOKEN_PROGRAM_ADDRESS = "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
var AssociatedTokenInstruction = /* @__PURE__ */ ((AssociatedTokenInstruction2) => {
  AssociatedTokenInstruction2[AssociatedTokenInstruction2["CreateAssociatedToken"] = 0] = "CreateAssociatedToken";
  AssociatedTokenInstruction2[AssociatedTokenInstruction2["CreateAssociatedTokenIdempotent"] = 1] = "CreateAssociatedTokenIdempotent";
  AssociatedTokenInstruction2[AssociatedTokenInstruction2["RecoverNestedAssociatedToken"] = 2] = "RecoverNestedAssociatedToken";
  return AssociatedTokenInstruction2;
})(AssociatedTokenInstruction || {});
function identifyAssociatedTokenInstruction(instruction) {
  const data = "data" in instruction ? instruction.data : instruction;
  if (kit.containsBytes(data, kit.getU8Encoder().encode(0), 0)) {
    return 0 /* CreateAssociatedToken */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(1), 0)) {
    return 1 /* CreateAssociatedTokenIdempotent */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(2), 0)) {
    return 2 /* RecoverNestedAssociatedToken */;
  }
  throw new Error(
    "The provided instruction could not be identified as a associatedToken instruction."
  );
}
var TOKEN_PROGRAM_ADDRESS = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
var TokenAccount = /* @__PURE__ */ ((TokenAccount2) => {
  TokenAccount2[TokenAccount2["Mint"] = 0] = "Mint";
  TokenAccount2[TokenAccount2["Token"] = 1] = "Token";
  TokenAccount2[TokenAccount2["Multisig"] = 2] = "Multisig";
  return TokenAccount2;
})(TokenAccount || {});
function identifyTokenAccount(account) {
  const data = "data" in account ? account.data : account;
  if (data.length === 82) {
    return 0 /* Mint */;
  }
  if (data.length === 165) {
    return 1 /* Token */;
  }
  if (data.length === 355) {
    return 2 /* Multisig */;
  }
  throw new Error(
    "The provided account could not be identified as a token account."
  );
}
var TokenInstruction = /* @__PURE__ */ ((TokenInstruction2) => {
  TokenInstruction2[TokenInstruction2["InitializeMint"] = 0] = "InitializeMint";
  TokenInstruction2[TokenInstruction2["InitializeAccount"] = 1] = "InitializeAccount";
  TokenInstruction2[TokenInstruction2["InitializeMultisig"] = 2] = "InitializeMultisig";
  TokenInstruction2[TokenInstruction2["Transfer"] = 3] = "Transfer";
  TokenInstruction2[TokenInstruction2["Approve"] = 4] = "Approve";
  TokenInstruction2[TokenInstruction2["Revoke"] = 5] = "Revoke";
  TokenInstruction2[TokenInstruction2["SetAuthority"] = 6] = "SetAuthority";
  TokenInstruction2[TokenInstruction2["MintTo"] = 7] = "MintTo";
  TokenInstruction2[TokenInstruction2["Burn"] = 8] = "Burn";
  TokenInstruction2[TokenInstruction2["CloseAccount"] = 9] = "CloseAccount";
  TokenInstruction2[TokenInstruction2["FreezeAccount"] = 10] = "FreezeAccount";
  TokenInstruction2[TokenInstruction2["ThawAccount"] = 11] = "ThawAccount";
  TokenInstruction2[TokenInstruction2["TransferChecked"] = 12] = "TransferChecked";
  TokenInstruction2[TokenInstruction2["ApproveChecked"] = 13] = "ApproveChecked";
  TokenInstruction2[TokenInstruction2["MintToChecked"] = 14] = "MintToChecked";
  TokenInstruction2[TokenInstruction2["BurnChecked"] = 15] = "BurnChecked";
  TokenInstruction2[TokenInstruction2["InitializeAccount2"] = 16] = "InitializeAccount2";
  TokenInstruction2[TokenInstruction2["SyncNative"] = 17] = "SyncNative";
  TokenInstruction2[TokenInstruction2["InitializeAccount3"] = 18] = "InitializeAccount3";
  TokenInstruction2[TokenInstruction2["InitializeMultisig2"] = 19] = "InitializeMultisig2";
  TokenInstruction2[TokenInstruction2["InitializeMint2"] = 20] = "InitializeMint2";
  TokenInstruction2[TokenInstruction2["GetAccountDataSize"] = 21] = "GetAccountDataSize";
  TokenInstruction2[TokenInstruction2["InitializeImmutableOwner"] = 22] = "InitializeImmutableOwner";
  TokenInstruction2[TokenInstruction2["AmountToUiAmount"] = 23] = "AmountToUiAmount";
  TokenInstruction2[TokenInstruction2["UiAmountToAmount"] = 24] = "UiAmountToAmount";
  return TokenInstruction2;
})(TokenInstruction || {});
function identifyTokenInstruction(instruction) {
  const data = "data" in instruction ? instruction.data : instruction;
  if (kit.containsBytes(data, kit.getU8Encoder().encode(0), 0)) {
    return 0 /* InitializeMint */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(1), 0)) {
    return 1 /* InitializeAccount */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(2), 0)) {
    return 2 /* InitializeMultisig */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(3), 0)) {
    return 3 /* Transfer */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(4), 0)) {
    return 4 /* Approve */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(5), 0)) {
    return 5 /* Revoke */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(6), 0)) {
    return 6 /* SetAuthority */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(7), 0)) {
    return 7 /* MintTo */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(8), 0)) {
    return 8 /* Burn */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(9), 0)) {
    return 9 /* CloseAccount */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(10), 0)) {
    return 10 /* FreezeAccount */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(11), 0)) {
    return 11 /* ThawAccount */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(12), 0)) {
    return 12 /* TransferChecked */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(13), 0)) {
    return 13 /* ApproveChecked */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(14), 0)) {
    return 14 /* MintToChecked */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(15), 0)) {
    return 15 /* BurnChecked */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(16), 0)) {
    return 16 /* InitializeAccount2 */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(17), 0)) {
    return 17 /* SyncNative */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(18), 0)) {
    return 18 /* InitializeAccount3 */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(19), 0)) {
    return 19 /* InitializeMultisig2 */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(20), 0)) {
    return 20 /* InitializeMint2 */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(21), 0)) {
    return 21 /* GetAccountDataSize */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(22), 0)) {
    return 22 /* InitializeImmutableOwner */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(23), 0)) {
    return 23 /* AmountToUiAmount */;
  }
  if (kit.containsBytes(data, kit.getU8Encoder().encode(24), 0)) {
    return 24 /* UiAmountToAmount */;
  }
  throw new Error(
    "The provided instruction could not be identified as a token instruction."
  );
}

// src/generated/errors/associatedToken.ts
var ASSOCIATED_TOKEN_ERROR__INVALID_OWNER = 0;
var associatedTokenErrorMessages;
if (process.env.NODE_ENV !== "production") {
  associatedTokenErrorMessages = {
    [ASSOCIATED_TOKEN_ERROR__INVALID_OWNER]: `Associated token account owner does not match address derivation`
  };
}
function getAssociatedTokenErrorMessage(code) {
  if (process.env.NODE_ENV !== "production") {
    return associatedTokenErrorMessages[code];
  }
  return "Error message not available in production bundles.";
}
function isAssociatedTokenError(error, transactionMessage, code) {
  return kit.isProgramError(
    error,
    transactionMessage,
    ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
    code
  );
}
var TOKEN_ERROR__NOT_RENT_EXEMPT = 0;
var TOKEN_ERROR__INSUFFICIENT_FUNDS = 1;
var TOKEN_ERROR__INVALID_MINT = 2;
var TOKEN_ERROR__MINT_MISMATCH = 3;
var TOKEN_ERROR__OWNER_MISMATCH = 4;
var TOKEN_ERROR__FIXED_SUPPLY = 5;
var TOKEN_ERROR__ALREADY_IN_USE = 6;
var TOKEN_ERROR__INVALID_NUMBER_OF_PROVIDED_SIGNERS = 7;
var TOKEN_ERROR__INVALID_NUMBER_OF_REQUIRED_SIGNERS = 8;
var TOKEN_ERROR__UNINITIALIZED_STATE = 9;
var TOKEN_ERROR__NATIVE_NOT_SUPPORTED = 10;
var TOKEN_ERROR__NON_NATIVE_HAS_BALANCE = 11;
var TOKEN_ERROR__INVALID_INSTRUCTION = 12;
var TOKEN_ERROR__INVALID_STATE = 13;
var TOKEN_ERROR__OVERFLOW = 14;
var TOKEN_ERROR__AUTHORITY_TYPE_NOT_SUPPORTED = 15;
var TOKEN_ERROR__MINT_CANNOT_FREEZE = 16;
var TOKEN_ERROR__ACCOUNT_FROZEN = 17;
var TOKEN_ERROR__MINT_DECIMALS_MISMATCH = 18;
var TOKEN_ERROR__NON_NATIVE_NOT_SUPPORTED = 19;
var tokenErrorMessages;
if (process.env.NODE_ENV !== "production") {
  tokenErrorMessages = {
    [TOKEN_ERROR__ACCOUNT_FROZEN]: `Account is frozen`,
    [TOKEN_ERROR__ALREADY_IN_USE]: `Already in use`,
    [TOKEN_ERROR__AUTHORITY_TYPE_NOT_SUPPORTED]: `Account does not support specified authority type`,
    [TOKEN_ERROR__FIXED_SUPPLY]: `Fixed supply`,
    [TOKEN_ERROR__INSUFFICIENT_FUNDS]: `Insufficient funds`,
    [TOKEN_ERROR__INVALID_INSTRUCTION]: `Invalid instruction`,
    [TOKEN_ERROR__INVALID_MINT]: `Invalid Mint`,
    [TOKEN_ERROR__INVALID_NUMBER_OF_PROVIDED_SIGNERS]: `Invalid number of provided signers`,
    [TOKEN_ERROR__INVALID_NUMBER_OF_REQUIRED_SIGNERS]: `Invalid number of required signers`,
    [TOKEN_ERROR__INVALID_STATE]: `State is invalid for requested operation`,
    [TOKEN_ERROR__MINT_CANNOT_FREEZE]: `This token mint cannot freeze accounts`,
    [TOKEN_ERROR__MINT_DECIMALS_MISMATCH]: `The provided decimals value different from the Mint decimals`,
    [TOKEN_ERROR__MINT_MISMATCH]: `Account not associated with this Mint`,
    [TOKEN_ERROR__NATIVE_NOT_SUPPORTED]: `Instruction does not support native tokens`,
    [TOKEN_ERROR__NON_NATIVE_HAS_BALANCE]: `Non-native account can only be closed if its balance is zero`,
    [TOKEN_ERROR__NON_NATIVE_NOT_SUPPORTED]: `Instruction does not support non-native tokens`,
    [TOKEN_ERROR__NOT_RENT_EXEMPT]: `Lamport balance below rent-exempt threshold`,
    [TOKEN_ERROR__OVERFLOW]: `Operation overflowed`,
    [TOKEN_ERROR__OWNER_MISMATCH]: `Owner does not match`,
    [TOKEN_ERROR__UNINITIALIZED_STATE]: `State is unititialized`
  };
}
function getTokenErrorMessage(code) {
  if (process.env.NODE_ENV !== "production") {
    return tokenErrorMessages[code];
  }
  return "Error message not available in production bundles.";
}
function isTokenError(error, transactionMessage, code) {
  return kit.isProgramError(
    error,
    transactionMessage,
    TOKEN_PROGRAM_ADDRESS,
    code
  );
}
function expectAddress(value) {
  if (!value) {
    throw new Error("Expected a Address.");
  }
  if (typeof value === "object" && "address" in value) {
    return value.address;
  }
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}
function getAccountMetaFactory(programAddress, optionalAccountStrategy) {
  return (account) => {
    if (!account.value) {
      return Object.freeze({
        address: programAddress,
        role: kit.AccountRole.READONLY
      });
    }
    const writableRole = account.isWritable ? kit.AccountRole.WRITABLE : kit.AccountRole.READONLY;
    return Object.freeze({
      address: expectAddress(account.value),
      role: isTransactionSigner(account.value) ? kit.upgradeRoleToSigner(writableRole) : writableRole,
      ...isTransactionSigner(account.value) ? { signer: account.value } : {}
    });
  };
}
function isTransactionSigner(value) {
  return !!value && typeof value === "object" && "address" in value && kit.isTransactionSigner(value);
}

// src/generated/instructions/amountToUiAmount.ts
var AMOUNT_TO_UI_AMOUNT_DISCRIMINATOR = 23;
function getAmountToUiAmountDiscriminatorBytes() {
  return kit.getU8Encoder().encode(AMOUNT_TO_UI_AMOUNT_DISCRIMINATOR);
}
function getAmountToUiAmountInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["amount", kit.getU64Encoder()]
    ]),
    (value) => ({ ...value, discriminator: AMOUNT_TO_UI_AMOUNT_DISCRIMINATOR })
  );
}
function getAmountToUiAmountInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["amount", kit.getU64Decoder()]
  ]);
}
function getAmountToUiAmountInstructionDataCodec() {
  return kit.combineCodec(
    getAmountToUiAmountInstructionDataEncoder(),
    getAmountToUiAmountInstructionDataDecoder()
  );
}
function getAmountToUiAmountInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    mint: { value: input.mint ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [getAccountMeta(accounts.mint)],
    data: getAmountToUiAmountInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseAmountToUiAmountInstruction(instruction) {
  if (instruction.accounts.length < 1) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: { mint: getNextAccount() },
    data: getAmountToUiAmountInstructionDataDecoder().decode(instruction.data)
  };
}
var APPROVE_DISCRIMINATOR = 4;
function getApproveDiscriminatorBytes() {
  return kit.getU8Encoder().encode(APPROVE_DISCRIMINATOR);
}
function getApproveInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["amount", kit.getU64Encoder()]
    ]),
    (value) => ({ ...value, discriminator: APPROVE_DISCRIMINATOR })
  );
}
function getApproveInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["amount", kit.getU64Decoder()]
  ]);
}
function getApproveInstructionDataCodec() {
  return kit.combineCodec(
    getApproveInstructionDataEncoder(),
    getApproveInstructionDataDecoder()
  );
}
function getApproveInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    source: { value: input.source ?? null, isWritable: true },
    delegate: { value: input.delegate ?? null, isWritable: false },
    owner: { value: input.owner ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const remainingAccounts = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: kit.AccountRole.READONLY_SIGNER,
      signer
    })
  );
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.source),
      getAccountMeta(accounts.delegate),
      getAccountMeta(accounts.owner),
      ...remainingAccounts
    ],
    data: getApproveInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseApproveInstruction(instruction) {
  if (instruction.accounts.length < 3) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      source: getNextAccount(),
      delegate: getNextAccount(),
      owner: getNextAccount()
    },
    data: getApproveInstructionDataDecoder().decode(instruction.data)
  };
}
var APPROVE_CHECKED_DISCRIMINATOR = 13;
function getApproveCheckedDiscriminatorBytes() {
  return kit.getU8Encoder().encode(APPROVE_CHECKED_DISCRIMINATOR);
}
function getApproveCheckedInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["amount", kit.getU64Encoder()],
      ["decimals", kit.getU8Encoder()]
    ]),
    (value) => ({ ...value, discriminator: APPROVE_CHECKED_DISCRIMINATOR })
  );
}
function getApproveCheckedInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["amount", kit.getU64Decoder()],
    ["decimals", kit.getU8Decoder()]
  ]);
}
function getApproveCheckedInstructionDataCodec() {
  return kit.combineCodec(
    getApproveCheckedInstructionDataEncoder(),
    getApproveCheckedInstructionDataDecoder()
  );
}
function getApproveCheckedInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    source: { value: input.source ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    delegate: { value: input.delegate ?? null, isWritable: false },
    owner: { value: input.owner ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const remainingAccounts = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: kit.AccountRole.READONLY_SIGNER,
      signer
    })
  );
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.source),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.delegate),
      getAccountMeta(accounts.owner),
      ...remainingAccounts
    ],
    data: getApproveCheckedInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseApproveCheckedInstruction(instruction) {
  if (instruction.accounts.length < 4) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      source: getNextAccount(),
      mint: getNextAccount(),
      delegate: getNextAccount(),
      owner: getNextAccount()
    },
    data: getApproveCheckedInstructionDataDecoder().decode(instruction.data)
  };
}
var BURN_DISCRIMINATOR = 8;
function getBurnDiscriminatorBytes() {
  return kit.getU8Encoder().encode(BURN_DISCRIMINATOR);
}
function getBurnInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["amount", kit.getU64Encoder()]
    ]),
    (value) => ({ ...value, discriminator: BURN_DISCRIMINATOR })
  );
}
function getBurnInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["amount", kit.getU64Decoder()]
  ]);
}
function getBurnInstructionDataCodec() {
  return kit.combineCodec(
    getBurnInstructionDataEncoder(),
    getBurnInstructionDataDecoder()
  );
}
function getBurnInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    account: { value: input.account ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const remainingAccounts = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: kit.AccountRole.READONLY_SIGNER,
      signer
    })
  );
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.account),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.authority),
      ...remainingAccounts
    ],
    data: getBurnInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseBurnInstruction(instruction) {
  if (instruction.accounts.length < 3) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      account: getNextAccount(),
      mint: getNextAccount(),
      authority: getNextAccount()
    },
    data: getBurnInstructionDataDecoder().decode(instruction.data)
  };
}
var BURN_CHECKED_DISCRIMINATOR = 15;
function getBurnCheckedDiscriminatorBytes() {
  return kit.getU8Encoder().encode(BURN_CHECKED_DISCRIMINATOR);
}
function getBurnCheckedInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["amount", kit.getU64Encoder()],
      ["decimals", kit.getU8Encoder()]
    ]),
    (value) => ({ ...value, discriminator: BURN_CHECKED_DISCRIMINATOR })
  );
}
function getBurnCheckedInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["amount", kit.getU64Decoder()],
    ["decimals", kit.getU8Decoder()]
  ]);
}
function getBurnCheckedInstructionDataCodec() {
  return kit.combineCodec(
    getBurnCheckedInstructionDataEncoder(),
    getBurnCheckedInstructionDataDecoder()
  );
}
function getBurnCheckedInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    account: { value: input.account ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const remainingAccounts = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: kit.AccountRole.READONLY_SIGNER,
      signer
    })
  );
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.account),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.authority),
      ...remainingAccounts
    ],
    data: getBurnCheckedInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseBurnCheckedInstruction(instruction) {
  if (instruction.accounts.length < 3) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      account: getNextAccount(),
      mint: getNextAccount(),
      authority: getNextAccount()
    },
    data: getBurnCheckedInstructionDataDecoder().decode(instruction.data)
  };
}
var CLOSE_ACCOUNT_DISCRIMINATOR = 9;
function getCloseAccountDiscriminatorBytes() {
  return kit.getU8Encoder().encode(CLOSE_ACCOUNT_DISCRIMINATOR);
}
function getCloseAccountInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([["discriminator", kit.getU8Encoder()]]),
    (value) => ({ ...value, discriminator: CLOSE_ACCOUNT_DISCRIMINATOR })
  );
}
function getCloseAccountInstructionDataDecoder() {
  return kit.getStructDecoder([["discriminator", kit.getU8Decoder()]]);
}
function getCloseAccountInstructionDataCodec() {
  return kit.combineCodec(
    getCloseAccountInstructionDataEncoder(),
    getCloseAccountInstructionDataDecoder()
  );
}
function getCloseAccountInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    account: { value: input.account ?? null, isWritable: true },
    destination: { value: input.destination ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const remainingAccounts = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: kit.AccountRole.READONLY_SIGNER,
      signer
    })
  );
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.account),
      getAccountMeta(accounts.destination),
      getAccountMeta(accounts.owner),
      ...remainingAccounts
    ],
    data: getCloseAccountInstructionDataEncoder().encode({}),
    programAddress
  });
}
function parseCloseAccountInstruction(instruction) {
  if (instruction.accounts.length < 3) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      account: getNextAccount(),
      destination: getNextAccount(),
      owner: getNextAccount()
    },
    data: getCloseAccountInstructionDataDecoder().decode(instruction.data)
  };
}
async function findAssociatedTokenPda(seeds, config = {}) {
  const {
    programAddress = "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
  } = config;
  return await kit.getProgramDerivedAddress({
    programAddress,
    seeds: [
      kit.getAddressEncoder().encode(seeds.owner),
      kit.getAddressEncoder().encode(seeds.tokenProgram),
      kit.getAddressEncoder().encode(seeds.mint)
    ]
  });
}

// src/generated/instructions/createAssociatedToken.ts
var CREATE_ASSOCIATED_TOKEN_DISCRIMINATOR = 0;
function getCreateAssociatedTokenDiscriminatorBytes() {
  return kit.getU8Encoder().encode(CREATE_ASSOCIATED_TOKEN_DISCRIMINATOR);
}
function getCreateAssociatedTokenInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([["discriminator", kit.getU8Encoder()]]),
    (value) => ({
      ...value,
      discriminator: CREATE_ASSOCIATED_TOKEN_DISCRIMINATOR
    })
  );
}
function getCreateAssociatedTokenInstructionDataDecoder() {
  return kit.getStructDecoder([["discriminator", kit.getU8Decoder()]]);
}
function getCreateAssociatedTokenInstructionDataCodec() {
  return kit.combineCodec(
    getCreateAssociatedTokenInstructionDataEncoder(),
    getCreateAssociatedTokenInstructionDataDecoder()
  );
}
async function getCreateAssociatedTokenInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? ASSOCIATED_TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    payer: { value: input.payer ?? null, isWritable: true },
    ata: { value: input.ata ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
  }
  if (!accounts.ata.value) {
    accounts.ata.value = await findAssociatedTokenPda({
      owner: expectAddress(accounts.owner.value),
      tokenProgram: expectAddress(accounts.tokenProgram.value),
      mint: expectAddress(accounts.mint.value)
    });
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.ata),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.tokenProgram)
    ],
    data: getCreateAssociatedTokenInstructionDataEncoder().encode({}),
    programAddress
  });
}
function getCreateAssociatedTokenInstruction(input, config) {
  const programAddress = config?.programAddress ?? ASSOCIATED_TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    payer: { value: input.payer ?? null, isWritable: true },
    ata: { value: input.ata ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.ata),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.tokenProgram)
    ],
    data: getCreateAssociatedTokenInstructionDataEncoder().encode({}),
    programAddress
  });
}
function parseCreateAssociatedTokenInstruction(instruction) {
  if (instruction.accounts.length < 6) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      payer: getNextAccount(),
      ata: getNextAccount(),
      owner: getNextAccount(),
      mint: getNextAccount(),
      systemProgram: getNextAccount(),
      tokenProgram: getNextAccount()
    },
    data: getCreateAssociatedTokenInstructionDataDecoder().decode(
      instruction.data
    )
  };
}
var CREATE_ASSOCIATED_TOKEN_IDEMPOTENT_DISCRIMINATOR = 1;
function getCreateAssociatedTokenIdempotentDiscriminatorBytes() {
  return kit.getU8Encoder().encode(
    CREATE_ASSOCIATED_TOKEN_IDEMPOTENT_DISCRIMINATOR
  );
}
function getCreateAssociatedTokenIdempotentInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([["discriminator", kit.getU8Encoder()]]),
    (value) => ({
      ...value,
      discriminator: CREATE_ASSOCIATED_TOKEN_IDEMPOTENT_DISCRIMINATOR
    })
  );
}
function getCreateAssociatedTokenIdempotentInstructionDataDecoder() {
  return kit.getStructDecoder([["discriminator", kit.getU8Decoder()]]);
}
function getCreateAssociatedTokenIdempotentInstructionDataCodec() {
  return kit.combineCodec(
    getCreateAssociatedTokenIdempotentInstructionDataEncoder(),
    getCreateAssociatedTokenIdempotentInstructionDataDecoder()
  );
}
async function getCreateAssociatedTokenIdempotentInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? ASSOCIATED_TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    payer: { value: input.payer ?? null, isWritable: true },
    ata: { value: input.ata ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
  }
  if (!accounts.ata.value) {
    accounts.ata.value = await findAssociatedTokenPda({
      owner: expectAddress(accounts.owner.value),
      tokenProgram: expectAddress(accounts.tokenProgram.value),
      mint: expectAddress(accounts.mint.value)
    });
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.ata),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.tokenProgram)
    ],
    data: getCreateAssociatedTokenIdempotentInstructionDataEncoder().encode({}),
    programAddress
  });
}
function getCreateAssociatedTokenIdempotentInstruction(input, config) {
  const programAddress = config?.programAddress ?? ASSOCIATED_TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    payer: { value: input.payer ?? null, isWritable: true },
    ata: { value: input.ata ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: false },
    mint: { value: input.mint ?? null, isWritable: false },
    systemProgram: { value: input.systemProgram ?? null, isWritable: false },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
  }
  if (!accounts.systemProgram.value) {
    accounts.systemProgram.value = "11111111111111111111111111111111";
  }
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.ata),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.systemProgram),
      getAccountMeta(accounts.tokenProgram)
    ],
    data: getCreateAssociatedTokenIdempotentInstructionDataEncoder().encode({}),
    programAddress
  });
}
function parseCreateAssociatedTokenIdempotentInstruction(instruction) {
  if (instruction.accounts.length < 6) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      payer: getNextAccount(),
      ata: getNextAccount(),
      owner: getNextAccount(),
      mint: getNextAccount(),
      systemProgram: getNextAccount(),
      tokenProgram: getNextAccount()
    },
    data: getCreateAssociatedTokenIdempotentInstructionDataDecoder().decode(
      instruction.data
    )
  };
}
var FREEZE_ACCOUNT_DISCRIMINATOR = 10;
function getFreezeAccountDiscriminatorBytes() {
  return kit.getU8Encoder().encode(FREEZE_ACCOUNT_DISCRIMINATOR);
}
function getFreezeAccountInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([["discriminator", kit.getU8Encoder()]]),
    (value) => ({ ...value, discriminator: FREEZE_ACCOUNT_DISCRIMINATOR })
  );
}
function getFreezeAccountInstructionDataDecoder() {
  return kit.getStructDecoder([["discriminator", kit.getU8Decoder()]]);
}
function getFreezeAccountInstructionDataCodec() {
  return kit.combineCodec(
    getFreezeAccountInstructionDataEncoder(),
    getFreezeAccountInstructionDataDecoder()
  );
}
function getFreezeAccountInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    account: { value: input.account ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    owner: { value: input.owner ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const remainingAccounts = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: kit.AccountRole.READONLY_SIGNER,
      signer
    })
  );
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.account),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.owner),
      ...remainingAccounts
    ],
    data: getFreezeAccountInstructionDataEncoder().encode({}),
    programAddress
  });
}
function parseFreezeAccountInstruction(instruction) {
  if (instruction.accounts.length < 3) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      account: getNextAccount(),
      mint: getNextAccount(),
      owner: getNextAccount()
    },
    data: getFreezeAccountInstructionDataDecoder().decode(instruction.data)
  };
}
var GET_ACCOUNT_DATA_SIZE_DISCRIMINATOR = 21;
function getGetAccountDataSizeDiscriminatorBytes() {
  return kit.getU8Encoder().encode(GET_ACCOUNT_DATA_SIZE_DISCRIMINATOR);
}
function getGetAccountDataSizeInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([["discriminator", kit.getU8Encoder()]]),
    (value) => ({
      ...value,
      discriminator: GET_ACCOUNT_DATA_SIZE_DISCRIMINATOR
    })
  );
}
function getGetAccountDataSizeInstructionDataDecoder() {
  return kit.getStructDecoder([["discriminator", kit.getU8Decoder()]]);
}
function getGetAccountDataSizeInstructionDataCodec() {
  return kit.combineCodec(
    getGetAccountDataSizeInstructionDataEncoder(),
    getGetAccountDataSizeInstructionDataDecoder()
  );
}
function getGetAccountDataSizeInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    mint: { value: input.mint ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [getAccountMeta(accounts.mint)],
    data: getGetAccountDataSizeInstructionDataEncoder().encode({}),
    programAddress
  });
}
function parseGetAccountDataSizeInstruction(instruction) {
  if (instruction.accounts.length < 1) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: { mint: getNextAccount() },
    data: getGetAccountDataSizeInstructionDataDecoder().decode(
      instruction.data
    )
  };
}
var INITIALIZE_ACCOUNT_DISCRIMINATOR = 1;
function getInitializeAccountDiscriminatorBytes() {
  return kit.getU8Encoder().encode(INITIALIZE_ACCOUNT_DISCRIMINATOR);
}
function getInitializeAccountInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([["discriminator", kit.getU8Encoder()]]),
    (value) => ({ ...value, discriminator: INITIALIZE_ACCOUNT_DISCRIMINATOR })
  );
}
function getInitializeAccountInstructionDataDecoder() {
  return kit.getStructDecoder([["discriminator", kit.getU8Decoder()]]);
}
function getInitializeAccountInstructionDataCodec() {
  return kit.combineCodec(
    getInitializeAccountInstructionDataEncoder(),
    getInitializeAccountInstructionDataDecoder()
  );
}
function getInitializeAccountInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    account: { value: input.account ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    owner: { value: input.owner ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.rent.value) {
    accounts.rent.value = "SysvarRent111111111111111111111111111111111";
  }
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.account),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.owner),
      getAccountMeta(accounts.rent)
    ],
    data: getInitializeAccountInstructionDataEncoder().encode({}),
    programAddress
  });
}
function parseInitializeAccountInstruction(instruction) {
  if (instruction.accounts.length < 4) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      account: getNextAccount(),
      mint: getNextAccount(),
      owner: getNextAccount(),
      rent: getNextAccount()
    },
    data: getInitializeAccountInstructionDataDecoder().decode(instruction.data)
  };
}
var INITIALIZE_ACCOUNT2_DISCRIMINATOR = 16;
function getInitializeAccount2DiscriminatorBytes() {
  return kit.getU8Encoder().encode(INITIALIZE_ACCOUNT2_DISCRIMINATOR);
}
function getInitializeAccount2InstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["owner", kit.getAddressEncoder()]
    ]),
    (value) => ({ ...value, discriminator: INITIALIZE_ACCOUNT2_DISCRIMINATOR })
  );
}
function getInitializeAccount2InstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["owner", kit.getAddressDecoder()]
  ]);
}
function getInitializeAccount2InstructionDataCodec() {
  return kit.combineCodec(
    getInitializeAccount2InstructionDataEncoder(),
    getInitializeAccount2InstructionDataDecoder()
  );
}
function getInitializeAccount2Instruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    account: { value: input.account ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    rent: { value: input.rent ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.rent.value) {
    accounts.rent.value = "SysvarRent111111111111111111111111111111111";
  }
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.account),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.rent)
    ],
    data: getInitializeAccount2InstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseInitializeAccount2Instruction(instruction) {
  if (instruction.accounts.length < 3) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      account: getNextAccount(),
      mint: getNextAccount(),
      rent: getNextAccount()
    },
    data: getInitializeAccount2InstructionDataDecoder().decode(
      instruction.data
    )
  };
}
var INITIALIZE_ACCOUNT3_DISCRIMINATOR = 18;
function getInitializeAccount3DiscriminatorBytes() {
  return kit.getU8Encoder().encode(INITIALIZE_ACCOUNT3_DISCRIMINATOR);
}
function getInitializeAccount3InstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["owner", kit.getAddressEncoder()]
    ]),
    (value) => ({ ...value, discriminator: INITIALIZE_ACCOUNT3_DISCRIMINATOR })
  );
}
function getInitializeAccount3InstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["owner", kit.getAddressDecoder()]
  ]);
}
function getInitializeAccount3InstructionDataCodec() {
  return kit.combineCodec(
    getInitializeAccount3InstructionDataEncoder(),
    getInitializeAccount3InstructionDataDecoder()
  );
}
function getInitializeAccount3Instruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    account: { value: input.account ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [getAccountMeta(accounts.account), getAccountMeta(accounts.mint)],
    data: getInitializeAccount3InstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseInitializeAccount3Instruction(instruction) {
  if (instruction.accounts.length < 2) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: { account: getNextAccount(), mint: getNextAccount() },
    data: getInitializeAccount3InstructionDataDecoder().decode(
      instruction.data
    )
  };
}
var INITIALIZE_IMMUTABLE_OWNER_DISCRIMINATOR = 22;
function getInitializeImmutableOwnerDiscriminatorBytes() {
  return kit.getU8Encoder().encode(INITIALIZE_IMMUTABLE_OWNER_DISCRIMINATOR);
}
function getInitializeImmutableOwnerInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([["discriminator", kit.getU8Encoder()]]),
    (value) => ({
      ...value,
      discriminator: INITIALIZE_IMMUTABLE_OWNER_DISCRIMINATOR
    })
  );
}
function getInitializeImmutableOwnerInstructionDataDecoder() {
  return kit.getStructDecoder([["discriminator", kit.getU8Decoder()]]);
}
function getInitializeImmutableOwnerInstructionDataCodec() {
  return kit.combineCodec(
    getInitializeImmutableOwnerInstructionDataEncoder(),
    getInitializeImmutableOwnerInstructionDataDecoder()
  );
}
function getInitializeImmutableOwnerInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    account: { value: input.account ?? null, isWritable: true }
  };
  const accounts = originalAccounts;
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [getAccountMeta(accounts.account)],
    data: getInitializeImmutableOwnerInstructionDataEncoder().encode({}),
    programAddress
  });
}
function parseInitializeImmutableOwnerInstruction(instruction) {
  if (instruction.accounts.length < 1) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: { account: getNextAccount() },
    data: getInitializeImmutableOwnerInstructionDataDecoder().decode(
      instruction.data
    )
  };
}
var INITIALIZE_MINT_DISCRIMINATOR = 0;
function getInitializeMintDiscriminatorBytes() {
  return kit.getU8Encoder().encode(INITIALIZE_MINT_DISCRIMINATOR);
}
function getInitializeMintInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["decimals", kit.getU8Encoder()],
      ["mintAuthority", kit.getAddressEncoder()],
      ["freezeAuthority", kit.getOptionEncoder(kit.getAddressEncoder())]
    ]),
    (value) => ({
      ...value,
      discriminator: INITIALIZE_MINT_DISCRIMINATOR,
      freezeAuthority: value.freezeAuthority ?? kit.none()
    })
  );
}
function getInitializeMintInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["decimals", kit.getU8Decoder()],
    ["mintAuthority", kit.getAddressDecoder()],
    ["freezeAuthority", kit.getOptionDecoder(kit.getAddressDecoder())]
  ]);
}
function getInitializeMintInstructionDataCodec() {
  return kit.combineCodec(
    getInitializeMintInstructionDataEncoder(),
    getInitializeMintInstructionDataDecoder()
  );
}
function getInitializeMintInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    mint: { value: input.mint ?? null, isWritable: true },
    rent: { value: input.rent ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.rent.value) {
    accounts.rent.value = "SysvarRent111111111111111111111111111111111";
  }
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [getAccountMeta(accounts.mint), getAccountMeta(accounts.rent)],
    data: getInitializeMintInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseInitializeMintInstruction(instruction) {
  if (instruction.accounts.length < 2) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: { mint: getNextAccount(), rent: getNextAccount() },
    data: getInitializeMintInstructionDataDecoder().decode(instruction.data)
  };
}
var INITIALIZE_MINT2_DISCRIMINATOR = 20;
function getInitializeMint2DiscriminatorBytes() {
  return kit.getU8Encoder().encode(INITIALIZE_MINT2_DISCRIMINATOR);
}
function getInitializeMint2InstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["decimals", kit.getU8Encoder()],
      ["mintAuthority", kit.getAddressEncoder()],
      ["freezeAuthority", kit.getOptionEncoder(kit.getAddressEncoder())]
    ]),
    (value) => ({
      ...value,
      discriminator: INITIALIZE_MINT2_DISCRIMINATOR,
      freezeAuthority: value.freezeAuthority ?? kit.none()
    })
  );
}
function getInitializeMint2InstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["decimals", kit.getU8Decoder()],
    ["mintAuthority", kit.getAddressDecoder()],
    ["freezeAuthority", kit.getOptionDecoder(kit.getAddressDecoder())]
  ]);
}
function getInitializeMint2InstructionDataCodec() {
  return kit.combineCodec(
    getInitializeMint2InstructionDataEncoder(),
    getInitializeMint2InstructionDataDecoder()
  );
}
function getInitializeMint2Instruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    mint: { value: input.mint ?? null, isWritable: true }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [getAccountMeta(accounts.mint)],
    data: getInitializeMint2InstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseInitializeMint2Instruction(instruction) {
  if (instruction.accounts.length < 1) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: { mint: getNextAccount() },
    data: getInitializeMint2InstructionDataDecoder().decode(instruction.data)
  };
}
var INITIALIZE_MULTISIG_DISCRIMINATOR = 2;
function getInitializeMultisigDiscriminatorBytes() {
  return kit.getU8Encoder().encode(INITIALIZE_MULTISIG_DISCRIMINATOR);
}
function getInitializeMultisigInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["m", kit.getU8Encoder()]
    ]),
    (value) => ({ ...value, discriminator: INITIALIZE_MULTISIG_DISCRIMINATOR })
  );
}
function getInitializeMultisigInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["m", kit.getU8Decoder()]
  ]);
}
function getInitializeMultisigInstructionDataCodec() {
  return kit.combineCodec(
    getInitializeMultisigInstructionDataEncoder(),
    getInitializeMultisigInstructionDataDecoder()
  );
}
function getInitializeMultisigInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    multisig: { value: input.multisig ?? null, isWritable: true },
    rent: { value: input.rent ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  if (!accounts.rent.value) {
    accounts.rent.value = "SysvarRent111111111111111111111111111111111";
  }
  const remainingAccounts = args.signers.map((address) => ({
    address,
    role: kit.AccountRole.READONLY
  }));
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.multisig),
      getAccountMeta(accounts.rent),
      ...remainingAccounts
    ],
    data: getInitializeMultisigInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseInitializeMultisigInstruction(instruction) {
  if (instruction.accounts.length < 2) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: { multisig: getNextAccount(), rent: getNextAccount() },
    data: getInitializeMultisigInstructionDataDecoder().decode(
      instruction.data
    )
  };
}
var INITIALIZE_MULTISIG2_DISCRIMINATOR = 19;
function getInitializeMultisig2DiscriminatorBytes() {
  return kit.getU8Encoder().encode(INITIALIZE_MULTISIG2_DISCRIMINATOR);
}
function getInitializeMultisig2InstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["m", kit.getU8Encoder()]
    ]),
    (value) => ({ ...value, discriminator: INITIALIZE_MULTISIG2_DISCRIMINATOR })
  );
}
function getInitializeMultisig2InstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["m", kit.getU8Decoder()]
  ]);
}
function getInitializeMultisig2InstructionDataCodec() {
  return kit.combineCodec(
    getInitializeMultisig2InstructionDataEncoder(),
    getInitializeMultisig2InstructionDataDecoder()
  );
}
function getInitializeMultisig2Instruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    multisig: { value: input.multisig ?? null, isWritable: true }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const remainingAccounts = args.signers.map((address) => ({
    address,
    role: kit.AccountRole.READONLY
  }));
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [getAccountMeta(accounts.multisig), ...remainingAccounts],
    data: getInitializeMultisig2InstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseInitializeMultisig2Instruction(instruction) {
  if (instruction.accounts.length < 1) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: { multisig: getNextAccount() },
    data: getInitializeMultisig2InstructionDataDecoder().decode(
      instruction.data
    )
  };
}
var MINT_TO_DISCRIMINATOR = 7;
function getMintToDiscriminatorBytes() {
  return kit.getU8Encoder().encode(MINT_TO_DISCRIMINATOR);
}
function getMintToInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["amount", kit.getU64Encoder()]
    ]),
    (value) => ({ ...value, discriminator: MINT_TO_DISCRIMINATOR })
  );
}
function getMintToInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["amount", kit.getU64Decoder()]
  ]);
}
function getMintToInstructionDataCodec() {
  return kit.combineCodec(
    getMintToInstructionDataEncoder(),
    getMintToInstructionDataDecoder()
  );
}
function getMintToInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    mint: { value: input.mint ?? null, isWritable: true },
    token: { value: input.token ?? null, isWritable: true },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const remainingAccounts = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: kit.AccountRole.READONLY_SIGNER,
      signer
    })
  );
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.token),
      getAccountMeta(accounts.mintAuthority),
      ...remainingAccounts
    ],
    data: getMintToInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseMintToInstruction(instruction) {
  if (instruction.accounts.length < 3) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      mint: getNextAccount(),
      token: getNextAccount(),
      mintAuthority: getNextAccount()
    },
    data: getMintToInstructionDataDecoder().decode(instruction.data)
  };
}
var MINT_TO_CHECKED_DISCRIMINATOR = 14;
function getMintToCheckedDiscriminatorBytes() {
  return kit.getU8Encoder().encode(MINT_TO_CHECKED_DISCRIMINATOR);
}
function getMintToCheckedInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["amount", kit.getU64Encoder()],
      ["decimals", kit.getU8Encoder()]
    ]),
    (value) => ({ ...value, discriminator: MINT_TO_CHECKED_DISCRIMINATOR })
  );
}
function getMintToCheckedInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["amount", kit.getU64Decoder()],
    ["decimals", kit.getU8Decoder()]
  ]);
}
function getMintToCheckedInstructionDataCodec() {
  return kit.combineCodec(
    getMintToCheckedInstructionDataEncoder(),
    getMintToCheckedInstructionDataDecoder()
  );
}
function getMintToCheckedInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    mint: { value: input.mint ?? null, isWritable: true },
    token: { value: input.token ?? null, isWritable: true },
    mintAuthority: { value: input.mintAuthority ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const remainingAccounts = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: kit.AccountRole.READONLY_SIGNER,
      signer
    })
  );
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.token),
      getAccountMeta(accounts.mintAuthority),
      ...remainingAccounts
    ],
    data: getMintToCheckedInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseMintToCheckedInstruction(instruction) {
  if (instruction.accounts.length < 3) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      mint: getNextAccount(),
      token: getNextAccount(),
      mintAuthority: getNextAccount()
    },
    data: getMintToCheckedInstructionDataDecoder().decode(instruction.data)
  };
}
var RECOVER_NESTED_ASSOCIATED_TOKEN_DISCRIMINATOR = 2;
function getRecoverNestedAssociatedTokenDiscriminatorBytes() {
  return kit.getU8Encoder().encode(RECOVER_NESTED_ASSOCIATED_TOKEN_DISCRIMINATOR);
}
function getRecoverNestedAssociatedTokenInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([["discriminator", kit.getU8Encoder()]]),
    (value) => ({
      ...value,
      discriminator: RECOVER_NESTED_ASSOCIATED_TOKEN_DISCRIMINATOR
    })
  );
}
function getRecoverNestedAssociatedTokenInstructionDataDecoder() {
  return kit.getStructDecoder([["discriminator", kit.getU8Decoder()]]);
}
function getRecoverNestedAssociatedTokenInstructionDataCodec() {
  return kit.combineCodec(
    getRecoverNestedAssociatedTokenInstructionDataEncoder(),
    getRecoverNestedAssociatedTokenInstructionDataDecoder()
  );
}
async function getRecoverNestedAssociatedTokenInstructionAsync(input, config) {
  const programAddress = config?.programAddress ?? ASSOCIATED_TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    nestedAssociatedAccountAddress: {
      value: input.nestedAssociatedAccountAddress ?? null,
      isWritable: true
    },
    nestedTokenMintAddress: {
      value: input.nestedTokenMintAddress ?? null,
      isWritable: false
    },
    destinationAssociatedAccountAddress: {
      value: input.destinationAssociatedAccountAddress ?? null,
      isWritable: true
    },
    ownerAssociatedAccountAddress: {
      value: input.ownerAssociatedAccountAddress ?? null,
      isWritable: false
    },
    ownerTokenMintAddress: {
      value: input.ownerTokenMintAddress ?? null,
      isWritable: false
    },
    walletAddress: { value: input.walletAddress ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
  }
  if (!accounts.ownerAssociatedAccountAddress.value) {
    accounts.ownerAssociatedAccountAddress.value = await findAssociatedTokenPda(
      {
        owner: expectAddress(accounts.walletAddress.value),
        tokenProgram: expectAddress(accounts.tokenProgram.value),
        mint: expectAddress(accounts.ownerTokenMintAddress.value)
      }
    );
  }
  if (!accounts.nestedAssociatedAccountAddress.value) {
    accounts.nestedAssociatedAccountAddress.value = await findAssociatedTokenPda({
      owner: expectAddress(accounts.ownerAssociatedAccountAddress.value),
      tokenProgram: expectAddress(accounts.tokenProgram.value),
      mint: expectAddress(accounts.nestedTokenMintAddress.value)
    });
  }
  if (!accounts.destinationAssociatedAccountAddress.value) {
    accounts.destinationAssociatedAccountAddress.value = await findAssociatedTokenPda({
      owner: expectAddress(accounts.walletAddress.value),
      tokenProgram: expectAddress(accounts.tokenProgram.value),
      mint: expectAddress(accounts.nestedTokenMintAddress.value)
    });
  }
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.nestedAssociatedAccountAddress),
      getAccountMeta(accounts.nestedTokenMintAddress),
      getAccountMeta(accounts.destinationAssociatedAccountAddress),
      getAccountMeta(accounts.ownerAssociatedAccountAddress),
      getAccountMeta(accounts.ownerTokenMintAddress),
      getAccountMeta(accounts.walletAddress),
      getAccountMeta(accounts.tokenProgram)
    ],
    data: getRecoverNestedAssociatedTokenInstructionDataEncoder().encode({}),
    programAddress
  });
}
function getRecoverNestedAssociatedTokenInstruction(input, config) {
  const programAddress = config?.programAddress ?? ASSOCIATED_TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    nestedAssociatedAccountAddress: {
      value: input.nestedAssociatedAccountAddress ?? null,
      isWritable: true
    },
    nestedTokenMintAddress: {
      value: input.nestedTokenMintAddress ?? null,
      isWritable: false
    },
    destinationAssociatedAccountAddress: {
      value: input.destinationAssociatedAccountAddress ?? null,
      isWritable: true
    },
    ownerAssociatedAccountAddress: {
      value: input.ownerAssociatedAccountAddress ?? null,
      isWritable: false
    },
    ownerTokenMintAddress: {
      value: input.ownerTokenMintAddress ?? null,
      isWritable: false
    },
    walletAddress: { value: input.walletAddress ?? null, isWritable: true },
    tokenProgram: { value: input.tokenProgram ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  if (!accounts.tokenProgram.value) {
    accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
  }
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.nestedAssociatedAccountAddress),
      getAccountMeta(accounts.nestedTokenMintAddress),
      getAccountMeta(accounts.destinationAssociatedAccountAddress),
      getAccountMeta(accounts.ownerAssociatedAccountAddress),
      getAccountMeta(accounts.ownerTokenMintAddress),
      getAccountMeta(accounts.walletAddress),
      getAccountMeta(accounts.tokenProgram)
    ],
    data: getRecoverNestedAssociatedTokenInstructionDataEncoder().encode({}),
    programAddress
  });
}
function parseRecoverNestedAssociatedTokenInstruction(instruction) {
  if (instruction.accounts.length < 7) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      nestedAssociatedAccountAddress: getNextAccount(),
      nestedTokenMintAddress: getNextAccount(),
      destinationAssociatedAccountAddress: getNextAccount(),
      ownerAssociatedAccountAddress: getNextAccount(),
      ownerTokenMintAddress: getNextAccount(),
      walletAddress: getNextAccount(),
      tokenProgram: getNextAccount()
    },
    data: getRecoverNestedAssociatedTokenInstructionDataDecoder().decode(
      instruction.data
    )
  };
}
var REVOKE_DISCRIMINATOR = 5;
function getRevokeDiscriminatorBytes() {
  return kit.getU8Encoder().encode(REVOKE_DISCRIMINATOR);
}
function getRevokeInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([["discriminator", kit.getU8Encoder()]]),
    (value) => ({ ...value, discriminator: REVOKE_DISCRIMINATOR })
  );
}
function getRevokeInstructionDataDecoder() {
  return kit.getStructDecoder([["discriminator", kit.getU8Decoder()]]);
}
function getRevokeInstructionDataCodec() {
  return kit.combineCodec(
    getRevokeInstructionDataEncoder(),
    getRevokeInstructionDataDecoder()
  );
}
function getRevokeInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    source: { value: input.source ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const remainingAccounts = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: kit.AccountRole.READONLY_SIGNER,
      signer
    })
  );
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.source),
      getAccountMeta(accounts.owner),
      ...remainingAccounts
    ],
    data: getRevokeInstructionDataEncoder().encode({}),
    programAddress
  });
}
function parseRevokeInstruction(instruction) {
  if (instruction.accounts.length < 2) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: { source: getNextAccount(), owner: getNextAccount() },
    data: getRevokeInstructionDataDecoder().decode(instruction.data)
  };
}
var SET_AUTHORITY_DISCRIMINATOR = 6;
function getSetAuthorityDiscriminatorBytes() {
  return kit.getU8Encoder().encode(SET_AUTHORITY_DISCRIMINATOR);
}
function getSetAuthorityInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["authorityType", getAuthorityTypeEncoder()],
      ["newAuthority", kit.getOptionEncoder(kit.getAddressEncoder())]
    ]),
    (value) => ({ ...value, discriminator: SET_AUTHORITY_DISCRIMINATOR })
  );
}
function getSetAuthorityInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["authorityType", getAuthorityTypeDecoder()],
    ["newAuthority", kit.getOptionDecoder(kit.getAddressDecoder())]
  ]);
}
function getSetAuthorityInstructionDataCodec() {
  return kit.combineCodec(
    getSetAuthorityInstructionDataEncoder(),
    getSetAuthorityInstructionDataDecoder()
  );
}
function getSetAuthorityInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    owned: { value: input.owned ?? null, isWritable: true },
    owner: { value: input.owner ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const remainingAccounts = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: kit.AccountRole.READONLY_SIGNER,
      signer
    })
  );
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.owned),
      getAccountMeta(accounts.owner),
      ...remainingAccounts
    ],
    data: getSetAuthorityInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseSetAuthorityInstruction(instruction) {
  if (instruction.accounts.length < 2) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: { owned: getNextAccount(), owner: getNextAccount() },
    data: getSetAuthorityInstructionDataDecoder().decode(instruction.data)
  };
}
var SYNC_NATIVE_DISCRIMINATOR = 17;
function getSyncNativeDiscriminatorBytes() {
  return kit.getU8Encoder().encode(SYNC_NATIVE_DISCRIMINATOR);
}
function getSyncNativeInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([["discriminator", kit.getU8Encoder()]]),
    (value) => ({ ...value, discriminator: SYNC_NATIVE_DISCRIMINATOR })
  );
}
function getSyncNativeInstructionDataDecoder() {
  return kit.getStructDecoder([["discriminator", kit.getU8Decoder()]]);
}
function getSyncNativeInstructionDataCodec() {
  return kit.combineCodec(
    getSyncNativeInstructionDataEncoder(),
    getSyncNativeInstructionDataDecoder()
  );
}
function getSyncNativeInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    account: { value: input.account ?? null, isWritable: true }
  };
  const accounts = originalAccounts;
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [getAccountMeta(accounts.account)],
    data: getSyncNativeInstructionDataEncoder().encode({}),
    programAddress
  });
}
function parseSyncNativeInstruction(instruction) {
  if (instruction.accounts.length < 1) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: { account: getNextAccount() },
    data: getSyncNativeInstructionDataDecoder().decode(instruction.data)
  };
}
var THAW_ACCOUNT_DISCRIMINATOR = 11;
function getThawAccountDiscriminatorBytes() {
  return kit.getU8Encoder().encode(THAW_ACCOUNT_DISCRIMINATOR);
}
function getThawAccountInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([["discriminator", kit.getU8Encoder()]]),
    (value) => ({ ...value, discriminator: THAW_ACCOUNT_DISCRIMINATOR })
  );
}
function getThawAccountInstructionDataDecoder() {
  return kit.getStructDecoder([["discriminator", kit.getU8Decoder()]]);
}
function getThawAccountInstructionDataCodec() {
  return kit.combineCodec(
    getThawAccountInstructionDataEncoder(),
    getThawAccountInstructionDataDecoder()
  );
}
function getThawAccountInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    account: { value: input.account ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    owner: { value: input.owner ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const remainingAccounts = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: kit.AccountRole.READONLY_SIGNER,
      signer
    })
  );
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.account),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.owner),
      ...remainingAccounts
    ],
    data: getThawAccountInstructionDataEncoder().encode({}),
    programAddress
  });
}
function parseThawAccountInstruction(instruction) {
  if (instruction.accounts.length < 3) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      account: getNextAccount(),
      mint: getNextAccount(),
      owner: getNextAccount()
    },
    data: getThawAccountInstructionDataDecoder().decode(instruction.data)
  };
}
var TRANSFER_DISCRIMINATOR = 3;
function getTransferDiscriminatorBytes() {
  return kit.getU8Encoder().encode(TRANSFER_DISCRIMINATOR);
}
function getTransferInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["amount", kit.getU64Encoder()]
    ]),
    (value) => ({ ...value, discriminator: TRANSFER_DISCRIMINATOR })
  );
}
function getTransferInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["amount", kit.getU64Decoder()]
  ]);
}
function getTransferInstructionDataCodec() {
  return kit.combineCodec(
    getTransferInstructionDataEncoder(),
    getTransferInstructionDataDecoder()
  );
}
function getTransferInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    source: { value: input.source ?? null, isWritable: true },
    destination: { value: input.destination ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const remainingAccounts = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: kit.AccountRole.READONLY_SIGNER,
      signer
    })
  );
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.source),
      getAccountMeta(accounts.destination),
      getAccountMeta(accounts.authority),
      ...remainingAccounts
    ],
    data: getTransferInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseTransferInstruction(instruction) {
  if (instruction.accounts.length < 3) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      source: getNextAccount(),
      destination: getNextAccount(),
      authority: getNextAccount()
    },
    data: getTransferInstructionDataDecoder().decode(instruction.data)
  };
}
var TRANSFER_CHECKED_DISCRIMINATOR = 12;
function getTransferCheckedDiscriminatorBytes() {
  return kit.getU8Encoder().encode(TRANSFER_CHECKED_DISCRIMINATOR);
}
function getTransferCheckedInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["amount", kit.getU64Encoder()],
      ["decimals", kit.getU8Encoder()]
    ]),
    (value) => ({ ...value, discriminator: TRANSFER_CHECKED_DISCRIMINATOR })
  );
}
function getTransferCheckedInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["amount", kit.getU64Decoder()],
    ["decimals", kit.getU8Decoder()]
  ]);
}
function getTransferCheckedInstructionDataCodec() {
  return kit.combineCodec(
    getTransferCheckedInstructionDataEncoder(),
    getTransferCheckedInstructionDataDecoder()
  );
}
function getTransferCheckedInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    source: { value: input.source ?? null, isWritable: true },
    mint: { value: input.mint ?? null, isWritable: false },
    destination: { value: input.destination ?? null, isWritable: true },
    authority: { value: input.authority ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const remainingAccounts = (args.multiSigners ?? []).map(
    (signer) => ({
      address: signer.address,
      role: kit.AccountRole.READONLY_SIGNER,
      signer
    })
  );
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.source),
      getAccountMeta(accounts.mint),
      getAccountMeta(accounts.destination),
      getAccountMeta(accounts.authority),
      ...remainingAccounts
    ],
    data: getTransferCheckedInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseTransferCheckedInstruction(instruction) {
  if (instruction.accounts.length < 4) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      source: getNextAccount(),
      mint: getNextAccount(),
      destination: getNextAccount(),
      authority: getNextAccount()
    },
    data: getTransferCheckedInstructionDataDecoder().decode(instruction.data)
  };
}
var UI_AMOUNT_TO_AMOUNT_DISCRIMINATOR = 24;
function getUiAmountToAmountDiscriminatorBytes() {
  return kit.getU8Encoder().encode(UI_AMOUNT_TO_AMOUNT_DISCRIMINATOR);
}
function getUiAmountToAmountInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU8Encoder()],
      ["uiAmount", kit.getUtf8Encoder()]
    ]),
    (value) => ({ ...value, discriminator: UI_AMOUNT_TO_AMOUNT_DISCRIMINATOR })
  );
}
function getUiAmountToAmountInstructionDataDecoder() {
  return kit.getStructDecoder([
    ["discriminator", kit.getU8Decoder()],
    ["uiAmount", kit.getUtf8Decoder()]
  ]);
}
function getUiAmountToAmountInstructionDataCodec() {
  return kit.combineCodec(
    getUiAmountToAmountInstructionDataEncoder(),
    getUiAmountToAmountInstructionDataDecoder()
  );
}
function getUiAmountToAmountInstruction(input, config) {
  const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
  const originalAccounts = {
    mint: { value: input.mint ?? null, isWritable: false }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const getAccountMeta = getAccountMetaFactory(programAddress);
  return Object.freeze({
    accounts: [getAccountMeta(accounts.mint)],
    data: getUiAmountToAmountInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
function parseUiAmountToAmountInstruction(instruction) {
  if (instruction.accounts.length < 1) {
    throw new Error("Not enough accounts");
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts[accountIndex];
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: { mint: getNextAccount() },
    data: getUiAmountToAmountInstructionDataDecoder().decode(instruction.data)
  };
}
var SYSTEM_PROGRAM_ADDRESS = "11111111111111111111111111111111";
if (process.env.NODE_ENV !== "production") ;
function expectAddress2(value) {
  if (!value) {
    throw new Error("Expected a Address.");
  }
  if (typeof value === "object" && "address" in value) {
    return value.address;
  }
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}
function getAccountMetaFactory2(programAddress, optionalAccountStrategy) {
  return (account) => {
    if (!account.value) {
      return;
    }
    const writableRole = account.isWritable ? kit.AccountRole.WRITABLE : kit.AccountRole.READONLY;
    return Object.freeze({
      address: expectAddress2(account.value),
      role: isTransactionSigner2(account.value) ? kit.upgradeRoleToSigner(writableRole) : writableRole,
      ...isTransactionSigner2(account.value) ? { signer: account.value } : {}
    });
  };
}
function isTransactionSigner2(value) {
  return !!value && typeof value === "object" && "address" in value && kit.isTransactionSigner(value);
}
var CREATE_ACCOUNT_DISCRIMINATOR = 0;
function getCreateAccountInstructionDataEncoder() {
  return kit.transformEncoder(
    kit.getStructEncoder([
      ["discriminator", kit.getU32Encoder()],
      ["lamports", kit.getU64Encoder()],
      ["space", kit.getU64Encoder()],
      ["programAddress", kit.getAddressEncoder()]
    ]),
    (value) => ({ ...value, discriminator: CREATE_ACCOUNT_DISCRIMINATOR })
  );
}
function getCreateAccountInstruction(input, config) {
  const programAddress = config?.programAddress ?? SYSTEM_PROGRAM_ADDRESS;
  const originalAccounts = {
    payer: { value: input.payer ?? null, isWritable: true },
    newAccount: { value: input.newAccount ?? null, isWritable: true }
  };
  const accounts = originalAccounts;
  const args = { ...input };
  const byteDelta = [Number(args.space) + kit.BASE_ACCOUNT_SIZE].reduce(
    (a, b) => a + b,
    0
  );
  const getAccountMeta = getAccountMetaFactory2();
  return Object.freeze({
    accounts: [
      getAccountMeta(accounts.payer),
      getAccountMeta(accounts.newAccount)
    ],
    byteDelta,
    data: getCreateAccountInstructionDataEncoder().encode(
      args
    ),
    programAddress
  });
}
var MINIMUM_BALANCE_FOR_MINT = 1461600;
function getCreateMintInstructionPlan(input, config) {
  return kit.sequentialInstructionPlan([
    getCreateAccountInstruction(
      {
        payer: input.payer,
        newAccount: input.newMint,
        lamports: input.mintAccountLamports ?? MINIMUM_BALANCE_FOR_MINT,
        space: getMintSize(),
        programAddress: config?.tokenProgram ?? TOKEN_PROGRAM_ADDRESS
      },
      {
        programAddress: config?.systemProgram
      }
    ),
    getInitializeMint2Instruction(
      {
        mint: input.newMint.address,
        decimals: input.decimals,
        mintAuthority: input.mintAuthority,
        freezeAuthority: input.freezeAuthority
      },
      {
        programAddress: config?.tokenProgram
      }
    )
  ]);
}
function getMintToATAInstructionPlan(input, config) {
  return kit.sequentialInstructionPlan([
    getCreateAssociatedTokenIdempotentInstruction(
      {
        payer: input.payer,
        ata: input.ata,
        owner: input.owner,
        mint: input.mint,
        systemProgram: config?.systemProgram,
        tokenProgram: config?.tokenProgram
      },
      {
        programAddress: config?.associatedTokenProgram
      }
    ),
    // mint to this token account
    getMintToCheckedInstruction(
      {
        mint: input.mint,
        token: input.ata,
        mintAuthority: input.mintAuthority,
        amount: input.amount,
        decimals: input.decimals,
        multiSigners: input.multiSigners
      },
      {
        programAddress: config?.tokenProgram
      }
    )
  ]);
}
async function getMintToATAInstructionPlanAsync(input, config) {
  const [ataAddress] = await findAssociatedTokenPda({
    owner: input.owner,
    tokenProgram: config?.tokenProgram ?? TOKEN_PROGRAM_ADDRESS,
    mint: input.mint
  });
  return getMintToATAInstructionPlan(
    {
      ...input,
      ata: ataAddress
    },
    config
  );
}
function getTransferToATAInstructionPlan(input, config) {
  return kit.sequentialInstructionPlan([
    getCreateAssociatedTokenIdempotentInstruction(
      {
        payer: input.payer,
        ata: input.destination,
        owner: input.recipient,
        mint: input.mint,
        systemProgram: config?.systemProgram,
        tokenProgram: config?.tokenProgram
      },
      {
        programAddress: config?.associatedTokenProgram
      }
    ),
    getTransferCheckedInstruction(
      {
        source: input.source,
        mint: input.mint,
        destination: input.destination,
        authority: input.authority,
        amount: input.amount,
        decimals: input.decimals,
        multiSigners: input.multiSigners
      },
      {
        programAddress: config?.tokenProgram
      }
    )
  ]);
}
async function getTransferToATAInstructionPlanAsync(input, config) {
  const [ataAddress] = await findAssociatedTokenPda({
    owner: input.recipient,
    tokenProgram: config?.tokenProgram ?? TOKEN_PROGRAM_ADDRESS,
    mint: input.mint
  });
  return getTransferToATAInstructionPlan(
    {
      ...input,
      destination: ataAddress
    },
    config
  );
}

exports.AMOUNT_TO_UI_AMOUNT_DISCRIMINATOR = AMOUNT_TO_UI_AMOUNT_DISCRIMINATOR;
exports.APPROVE_CHECKED_DISCRIMINATOR = APPROVE_CHECKED_DISCRIMINATOR;
exports.APPROVE_DISCRIMINATOR = APPROVE_DISCRIMINATOR;
exports.ASSOCIATED_TOKEN_ERROR__INVALID_OWNER = ASSOCIATED_TOKEN_ERROR__INVALID_OWNER;
exports.ASSOCIATED_TOKEN_PROGRAM_ADDRESS = ASSOCIATED_TOKEN_PROGRAM_ADDRESS;
exports.AccountState = AccountState;
exports.AssociatedTokenInstruction = AssociatedTokenInstruction;
exports.AuthorityType = AuthorityType;
exports.BURN_CHECKED_DISCRIMINATOR = BURN_CHECKED_DISCRIMINATOR;
exports.BURN_DISCRIMINATOR = BURN_DISCRIMINATOR;
exports.CLOSE_ACCOUNT_DISCRIMINATOR = CLOSE_ACCOUNT_DISCRIMINATOR;
exports.CREATE_ASSOCIATED_TOKEN_DISCRIMINATOR = CREATE_ASSOCIATED_TOKEN_DISCRIMINATOR;
exports.CREATE_ASSOCIATED_TOKEN_IDEMPOTENT_DISCRIMINATOR = CREATE_ASSOCIATED_TOKEN_IDEMPOTENT_DISCRIMINATOR;
exports.FREEZE_ACCOUNT_DISCRIMINATOR = FREEZE_ACCOUNT_DISCRIMINATOR;
exports.GET_ACCOUNT_DATA_SIZE_DISCRIMINATOR = GET_ACCOUNT_DATA_SIZE_DISCRIMINATOR;
exports.INITIALIZE_ACCOUNT2_DISCRIMINATOR = INITIALIZE_ACCOUNT2_DISCRIMINATOR;
exports.INITIALIZE_ACCOUNT3_DISCRIMINATOR = INITIALIZE_ACCOUNT3_DISCRIMINATOR;
exports.INITIALIZE_ACCOUNT_DISCRIMINATOR = INITIALIZE_ACCOUNT_DISCRIMINATOR;
exports.INITIALIZE_IMMUTABLE_OWNER_DISCRIMINATOR = INITIALIZE_IMMUTABLE_OWNER_DISCRIMINATOR;
exports.INITIALIZE_MINT2_DISCRIMINATOR = INITIALIZE_MINT2_DISCRIMINATOR;
exports.INITIALIZE_MINT_DISCRIMINATOR = INITIALIZE_MINT_DISCRIMINATOR;
exports.INITIALIZE_MULTISIG2_DISCRIMINATOR = INITIALIZE_MULTISIG2_DISCRIMINATOR;
exports.INITIALIZE_MULTISIG_DISCRIMINATOR = INITIALIZE_MULTISIG_DISCRIMINATOR;
exports.MINT_TO_CHECKED_DISCRIMINATOR = MINT_TO_CHECKED_DISCRIMINATOR;
exports.MINT_TO_DISCRIMINATOR = MINT_TO_DISCRIMINATOR;
exports.RECOVER_NESTED_ASSOCIATED_TOKEN_DISCRIMINATOR = RECOVER_NESTED_ASSOCIATED_TOKEN_DISCRIMINATOR;
exports.REVOKE_DISCRIMINATOR = REVOKE_DISCRIMINATOR;
exports.SET_AUTHORITY_DISCRIMINATOR = SET_AUTHORITY_DISCRIMINATOR;
exports.SYNC_NATIVE_DISCRIMINATOR = SYNC_NATIVE_DISCRIMINATOR;
exports.THAW_ACCOUNT_DISCRIMINATOR = THAW_ACCOUNT_DISCRIMINATOR;
exports.TOKEN_ERROR__ACCOUNT_FROZEN = TOKEN_ERROR__ACCOUNT_FROZEN;
exports.TOKEN_ERROR__ALREADY_IN_USE = TOKEN_ERROR__ALREADY_IN_USE;
exports.TOKEN_ERROR__AUTHORITY_TYPE_NOT_SUPPORTED = TOKEN_ERROR__AUTHORITY_TYPE_NOT_SUPPORTED;
exports.TOKEN_ERROR__FIXED_SUPPLY = TOKEN_ERROR__FIXED_SUPPLY;
exports.TOKEN_ERROR__INSUFFICIENT_FUNDS = TOKEN_ERROR__INSUFFICIENT_FUNDS;
exports.TOKEN_ERROR__INVALID_INSTRUCTION = TOKEN_ERROR__INVALID_INSTRUCTION;
exports.TOKEN_ERROR__INVALID_MINT = TOKEN_ERROR__INVALID_MINT;
exports.TOKEN_ERROR__INVALID_NUMBER_OF_PROVIDED_SIGNERS = TOKEN_ERROR__INVALID_NUMBER_OF_PROVIDED_SIGNERS;
exports.TOKEN_ERROR__INVALID_NUMBER_OF_REQUIRED_SIGNERS = TOKEN_ERROR__INVALID_NUMBER_OF_REQUIRED_SIGNERS;
exports.TOKEN_ERROR__INVALID_STATE = TOKEN_ERROR__INVALID_STATE;
exports.TOKEN_ERROR__MINT_CANNOT_FREEZE = TOKEN_ERROR__MINT_CANNOT_FREEZE;
exports.TOKEN_ERROR__MINT_DECIMALS_MISMATCH = TOKEN_ERROR__MINT_DECIMALS_MISMATCH;
exports.TOKEN_ERROR__MINT_MISMATCH = TOKEN_ERROR__MINT_MISMATCH;
exports.TOKEN_ERROR__NATIVE_NOT_SUPPORTED = TOKEN_ERROR__NATIVE_NOT_SUPPORTED;
exports.TOKEN_ERROR__NON_NATIVE_HAS_BALANCE = TOKEN_ERROR__NON_NATIVE_HAS_BALANCE;
exports.TOKEN_ERROR__NON_NATIVE_NOT_SUPPORTED = TOKEN_ERROR__NON_NATIVE_NOT_SUPPORTED;
exports.TOKEN_ERROR__NOT_RENT_EXEMPT = TOKEN_ERROR__NOT_RENT_EXEMPT;
exports.TOKEN_ERROR__OVERFLOW = TOKEN_ERROR__OVERFLOW;
exports.TOKEN_ERROR__OWNER_MISMATCH = TOKEN_ERROR__OWNER_MISMATCH;
exports.TOKEN_ERROR__UNINITIALIZED_STATE = TOKEN_ERROR__UNINITIALIZED_STATE;
exports.TOKEN_PROGRAM_ADDRESS = TOKEN_PROGRAM_ADDRESS;
exports.TRANSFER_CHECKED_DISCRIMINATOR = TRANSFER_CHECKED_DISCRIMINATOR;
exports.TRANSFER_DISCRIMINATOR = TRANSFER_DISCRIMINATOR;
exports.TokenAccount = TokenAccount;
exports.TokenInstruction = TokenInstruction;
exports.UI_AMOUNT_TO_AMOUNT_DISCRIMINATOR = UI_AMOUNT_TO_AMOUNT_DISCRIMINATOR;
exports.decodeMint = decodeMint;
exports.decodeMultisig = decodeMultisig;
exports.decodeToken = decodeToken;
exports.fetchAllMaybeMint = fetchAllMaybeMint;
exports.fetchAllMaybeMultisig = fetchAllMaybeMultisig;
exports.fetchAllMaybeToken = fetchAllMaybeToken;
exports.fetchAllMint = fetchAllMint;
exports.fetchAllMultisig = fetchAllMultisig;
exports.fetchAllToken = fetchAllToken;
exports.fetchMaybeMint = fetchMaybeMint;
exports.fetchMaybeMultisig = fetchMaybeMultisig;
exports.fetchMaybeToken = fetchMaybeToken;
exports.fetchMint = fetchMint;
exports.fetchMultisig = fetchMultisig;
exports.fetchToken = fetchToken;
exports.findAssociatedTokenPda = findAssociatedTokenPda;
exports.getAccountStateCodec = getAccountStateCodec;
exports.getAccountStateDecoder = getAccountStateDecoder;
exports.getAccountStateEncoder = getAccountStateEncoder;
exports.getAmountToUiAmountDiscriminatorBytes = getAmountToUiAmountDiscriminatorBytes;
exports.getAmountToUiAmountInstruction = getAmountToUiAmountInstruction;
exports.getAmountToUiAmountInstructionDataCodec = getAmountToUiAmountInstructionDataCodec;
exports.getAmountToUiAmountInstructionDataDecoder = getAmountToUiAmountInstructionDataDecoder;
exports.getAmountToUiAmountInstructionDataEncoder = getAmountToUiAmountInstructionDataEncoder;
exports.getApproveCheckedDiscriminatorBytes = getApproveCheckedDiscriminatorBytes;
exports.getApproveCheckedInstruction = getApproveCheckedInstruction;
exports.getApproveCheckedInstructionDataCodec = getApproveCheckedInstructionDataCodec;
exports.getApproveCheckedInstructionDataDecoder = getApproveCheckedInstructionDataDecoder;
exports.getApproveCheckedInstructionDataEncoder = getApproveCheckedInstructionDataEncoder;
exports.getApproveDiscriminatorBytes = getApproveDiscriminatorBytes;
exports.getApproveInstruction = getApproveInstruction;
exports.getApproveInstructionDataCodec = getApproveInstructionDataCodec;
exports.getApproveInstructionDataDecoder = getApproveInstructionDataDecoder;
exports.getApproveInstructionDataEncoder = getApproveInstructionDataEncoder;
exports.getAssociatedTokenErrorMessage = getAssociatedTokenErrorMessage;
exports.getAuthorityTypeCodec = getAuthorityTypeCodec;
exports.getAuthorityTypeDecoder = getAuthorityTypeDecoder;
exports.getAuthorityTypeEncoder = getAuthorityTypeEncoder;
exports.getBurnCheckedDiscriminatorBytes = getBurnCheckedDiscriminatorBytes;
exports.getBurnCheckedInstruction = getBurnCheckedInstruction;
exports.getBurnCheckedInstructionDataCodec = getBurnCheckedInstructionDataCodec;
exports.getBurnCheckedInstructionDataDecoder = getBurnCheckedInstructionDataDecoder;
exports.getBurnCheckedInstructionDataEncoder = getBurnCheckedInstructionDataEncoder;
exports.getBurnDiscriminatorBytes = getBurnDiscriminatorBytes;
exports.getBurnInstruction = getBurnInstruction;
exports.getBurnInstructionDataCodec = getBurnInstructionDataCodec;
exports.getBurnInstructionDataDecoder = getBurnInstructionDataDecoder;
exports.getBurnInstructionDataEncoder = getBurnInstructionDataEncoder;
exports.getCloseAccountDiscriminatorBytes = getCloseAccountDiscriminatorBytes;
exports.getCloseAccountInstruction = getCloseAccountInstruction;
exports.getCloseAccountInstructionDataCodec = getCloseAccountInstructionDataCodec;
exports.getCloseAccountInstructionDataDecoder = getCloseAccountInstructionDataDecoder;
exports.getCloseAccountInstructionDataEncoder = getCloseAccountInstructionDataEncoder;
exports.getCreateAssociatedTokenDiscriminatorBytes = getCreateAssociatedTokenDiscriminatorBytes;
exports.getCreateAssociatedTokenIdempotentDiscriminatorBytes = getCreateAssociatedTokenIdempotentDiscriminatorBytes;
exports.getCreateAssociatedTokenIdempotentInstruction = getCreateAssociatedTokenIdempotentInstruction;
exports.getCreateAssociatedTokenIdempotentInstructionAsync = getCreateAssociatedTokenIdempotentInstructionAsync;
exports.getCreateAssociatedTokenIdempotentInstructionDataCodec = getCreateAssociatedTokenIdempotentInstructionDataCodec;
exports.getCreateAssociatedTokenIdempotentInstructionDataDecoder = getCreateAssociatedTokenIdempotentInstructionDataDecoder;
exports.getCreateAssociatedTokenIdempotentInstructionDataEncoder = getCreateAssociatedTokenIdempotentInstructionDataEncoder;
exports.getCreateAssociatedTokenInstruction = getCreateAssociatedTokenInstruction;
exports.getCreateAssociatedTokenInstructionAsync = getCreateAssociatedTokenInstructionAsync;
exports.getCreateAssociatedTokenInstructionDataCodec = getCreateAssociatedTokenInstructionDataCodec;
exports.getCreateAssociatedTokenInstructionDataDecoder = getCreateAssociatedTokenInstructionDataDecoder;
exports.getCreateAssociatedTokenInstructionDataEncoder = getCreateAssociatedTokenInstructionDataEncoder;
exports.getCreateMintInstructionPlan = getCreateMintInstructionPlan;
exports.getFreezeAccountDiscriminatorBytes = getFreezeAccountDiscriminatorBytes;
exports.getFreezeAccountInstruction = getFreezeAccountInstruction;
exports.getFreezeAccountInstructionDataCodec = getFreezeAccountInstructionDataCodec;
exports.getFreezeAccountInstructionDataDecoder = getFreezeAccountInstructionDataDecoder;
exports.getFreezeAccountInstructionDataEncoder = getFreezeAccountInstructionDataEncoder;
exports.getGetAccountDataSizeDiscriminatorBytes = getGetAccountDataSizeDiscriminatorBytes;
exports.getGetAccountDataSizeInstruction = getGetAccountDataSizeInstruction;
exports.getGetAccountDataSizeInstructionDataCodec = getGetAccountDataSizeInstructionDataCodec;
exports.getGetAccountDataSizeInstructionDataDecoder = getGetAccountDataSizeInstructionDataDecoder;
exports.getGetAccountDataSizeInstructionDataEncoder = getGetAccountDataSizeInstructionDataEncoder;
exports.getInitializeAccount2DiscriminatorBytes = getInitializeAccount2DiscriminatorBytes;
exports.getInitializeAccount2Instruction = getInitializeAccount2Instruction;
exports.getInitializeAccount2InstructionDataCodec = getInitializeAccount2InstructionDataCodec;
exports.getInitializeAccount2InstructionDataDecoder = getInitializeAccount2InstructionDataDecoder;
exports.getInitializeAccount2InstructionDataEncoder = getInitializeAccount2InstructionDataEncoder;
exports.getInitializeAccount3DiscriminatorBytes = getInitializeAccount3DiscriminatorBytes;
exports.getInitializeAccount3Instruction = getInitializeAccount3Instruction;
exports.getInitializeAccount3InstructionDataCodec = getInitializeAccount3InstructionDataCodec;
exports.getInitializeAccount3InstructionDataDecoder = getInitializeAccount3InstructionDataDecoder;
exports.getInitializeAccount3InstructionDataEncoder = getInitializeAccount3InstructionDataEncoder;
exports.getInitializeAccountDiscriminatorBytes = getInitializeAccountDiscriminatorBytes;
exports.getInitializeAccountInstruction = getInitializeAccountInstruction;
exports.getInitializeAccountInstructionDataCodec = getInitializeAccountInstructionDataCodec;
exports.getInitializeAccountInstructionDataDecoder = getInitializeAccountInstructionDataDecoder;
exports.getInitializeAccountInstructionDataEncoder = getInitializeAccountInstructionDataEncoder;
exports.getInitializeImmutableOwnerDiscriminatorBytes = getInitializeImmutableOwnerDiscriminatorBytes;
exports.getInitializeImmutableOwnerInstruction = getInitializeImmutableOwnerInstruction;
exports.getInitializeImmutableOwnerInstructionDataCodec = getInitializeImmutableOwnerInstructionDataCodec;
exports.getInitializeImmutableOwnerInstructionDataDecoder = getInitializeImmutableOwnerInstructionDataDecoder;
exports.getInitializeImmutableOwnerInstructionDataEncoder = getInitializeImmutableOwnerInstructionDataEncoder;
exports.getInitializeMint2DiscriminatorBytes = getInitializeMint2DiscriminatorBytes;
exports.getInitializeMint2Instruction = getInitializeMint2Instruction;
exports.getInitializeMint2InstructionDataCodec = getInitializeMint2InstructionDataCodec;
exports.getInitializeMint2InstructionDataDecoder = getInitializeMint2InstructionDataDecoder;
exports.getInitializeMint2InstructionDataEncoder = getInitializeMint2InstructionDataEncoder;
exports.getInitializeMintDiscriminatorBytes = getInitializeMintDiscriminatorBytes;
exports.getInitializeMintInstruction = getInitializeMintInstruction;
exports.getInitializeMintInstructionDataCodec = getInitializeMintInstructionDataCodec;
exports.getInitializeMintInstructionDataDecoder = getInitializeMintInstructionDataDecoder;
exports.getInitializeMintInstructionDataEncoder = getInitializeMintInstructionDataEncoder;
exports.getInitializeMultisig2DiscriminatorBytes = getInitializeMultisig2DiscriminatorBytes;
exports.getInitializeMultisig2Instruction = getInitializeMultisig2Instruction;
exports.getInitializeMultisig2InstructionDataCodec = getInitializeMultisig2InstructionDataCodec;
exports.getInitializeMultisig2InstructionDataDecoder = getInitializeMultisig2InstructionDataDecoder;
exports.getInitializeMultisig2InstructionDataEncoder = getInitializeMultisig2InstructionDataEncoder;
exports.getInitializeMultisigDiscriminatorBytes = getInitializeMultisigDiscriminatorBytes;
exports.getInitializeMultisigInstruction = getInitializeMultisigInstruction;
exports.getInitializeMultisigInstructionDataCodec = getInitializeMultisigInstructionDataCodec;
exports.getInitializeMultisigInstructionDataDecoder = getInitializeMultisigInstructionDataDecoder;
exports.getInitializeMultisigInstructionDataEncoder = getInitializeMultisigInstructionDataEncoder;
exports.getMintCodec = getMintCodec;
exports.getMintDecoder = getMintDecoder;
exports.getMintEncoder = getMintEncoder;
exports.getMintSize = getMintSize;
exports.getMintToATAInstructionPlan = getMintToATAInstructionPlan;
exports.getMintToATAInstructionPlanAsync = getMintToATAInstructionPlanAsync;
exports.getMintToCheckedDiscriminatorBytes = getMintToCheckedDiscriminatorBytes;
exports.getMintToCheckedInstruction = getMintToCheckedInstruction;
exports.getMintToCheckedInstructionDataCodec = getMintToCheckedInstructionDataCodec;
exports.getMintToCheckedInstructionDataDecoder = getMintToCheckedInstructionDataDecoder;
exports.getMintToCheckedInstructionDataEncoder = getMintToCheckedInstructionDataEncoder;
exports.getMintToDiscriminatorBytes = getMintToDiscriminatorBytes;
exports.getMintToInstruction = getMintToInstruction;
exports.getMintToInstructionDataCodec = getMintToInstructionDataCodec;
exports.getMintToInstructionDataDecoder = getMintToInstructionDataDecoder;
exports.getMintToInstructionDataEncoder = getMintToInstructionDataEncoder;
exports.getMultisigCodec = getMultisigCodec;
exports.getMultisigDecoder = getMultisigDecoder;
exports.getMultisigEncoder = getMultisigEncoder;
exports.getMultisigSize = getMultisigSize;
exports.getRecoverNestedAssociatedTokenDiscriminatorBytes = getRecoverNestedAssociatedTokenDiscriminatorBytes;
exports.getRecoverNestedAssociatedTokenInstruction = getRecoverNestedAssociatedTokenInstruction;
exports.getRecoverNestedAssociatedTokenInstructionAsync = getRecoverNestedAssociatedTokenInstructionAsync;
exports.getRecoverNestedAssociatedTokenInstructionDataCodec = getRecoverNestedAssociatedTokenInstructionDataCodec;
exports.getRecoverNestedAssociatedTokenInstructionDataDecoder = getRecoverNestedAssociatedTokenInstructionDataDecoder;
exports.getRecoverNestedAssociatedTokenInstructionDataEncoder = getRecoverNestedAssociatedTokenInstructionDataEncoder;
exports.getRevokeDiscriminatorBytes = getRevokeDiscriminatorBytes;
exports.getRevokeInstruction = getRevokeInstruction;
exports.getRevokeInstructionDataCodec = getRevokeInstructionDataCodec;
exports.getRevokeInstructionDataDecoder = getRevokeInstructionDataDecoder;
exports.getRevokeInstructionDataEncoder = getRevokeInstructionDataEncoder;
exports.getSetAuthorityDiscriminatorBytes = getSetAuthorityDiscriminatorBytes;
exports.getSetAuthorityInstruction = getSetAuthorityInstruction;
exports.getSetAuthorityInstructionDataCodec = getSetAuthorityInstructionDataCodec;
exports.getSetAuthorityInstructionDataDecoder = getSetAuthorityInstructionDataDecoder;
exports.getSetAuthorityInstructionDataEncoder = getSetAuthorityInstructionDataEncoder;
exports.getSyncNativeDiscriminatorBytes = getSyncNativeDiscriminatorBytes;
exports.getSyncNativeInstruction = getSyncNativeInstruction;
exports.getSyncNativeInstructionDataCodec = getSyncNativeInstructionDataCodec;
exports.getSyncNativeInstructionDataDecoder = getSyncNativeInstructionDataDecoder;
exports.getSyncNativeInstructionDataEncoder = getSyncNativeInstructionDataEncoder;
exports.getThawAccountDiscriminatorBytes = getThawAccountDiscriminatorBytes;
exports.getThawAccountInstruction = getThawAccountInstruction;
exports.getThawAccountInstructionDataCodec = getThawAccountInstructionDataCodec;
exports.getThawAccountInstructionDataDecoder = getThawAccountInstructionDataDecoder;
exports.getThawAccountInstructionDataEncoder = getThawAccountInstructionDataEncoder;
exports.getTokenCodec = getTokenCodec;
exports.getTokenDecoder = getTokenDecoder;
exports.getTokenEncoder = getTokenEncoder;
exports.getTokenErrorMessage = getTokenErrorMessage;
exports.getTokenSize = getTokenSize;
exports.getTransferCheckedDiscriminatorBytes = getTransferCheckedDiscriminatorBytes;
exports.getTransferCheckedInstruction = getTransferCheckedInstruction;
exports.getTransferCheckedInstructionDataCodec = getTransferCheckedInstructionDataCodec;
exports.getTransferCheckedInstructionDataDecoder = getTransferCheckedInstructionDataDecoder;
exports.getTransferCheckedInstructionDataEncoder = getTransferCheckedInstructionDataEncoder;
exports.getTransferDiscriminatorBytes = getTransferDiscriminatorBytes;
exports.getTransferInstruction = getTransferInstruction;
exports.getTransferInstructionDataCodec = getTransferInstructionDataCodec;
exports.getTransferInstructionDataDecoder = getTransferInstructionDataDecoder;
exports.getTransferInstructionDataEncoder = getTransferInstructionDataEncoder;
exports.getTransferToATAInstructionPlan = getTransferToATAInstructionPlan;
exports.getTransferToATAInstructionPlanAsync = getTransferToATAInstructionPlanAsync;
exports.getUiAmountToAmountDiscriminatorBytes = getUiAmountToAmountDiscriminatorBytes;
exports.getUiAmountToAmountInstruction = getUiAmountToAmountInstruction;
exports.getUiAmountToAmountInstructionDataCodec = getUiAmountToAmountInstructionDataCodec;
exports.getUiAmountToAmountInstructionDataDecoder = getUiAmountToAmountInstructionDataDecoder;
exports.getUiAmountToAmountInstructionDataEncoder = getUiAmountToAmountInstructionDataEncoder;
exports.identifyAssociatedTokenInstruction = identifyAssociatedTokenInstruction;
exports.identifyTokenAccount = identifyTokenAccount;
exports.identifyTokenInstruction = identifyTokenInstruction;
exports.isAssociatedTokenError = isAssociatedTokenError;
exports.isTokenError = isTokenError;
exports.parseAmountToUiAmountInstruction = parseAmountToUiAmountInstruction;
exports.parseApproveCheckedInstruction = parseApproveCheckedInstruction;
exports.parseApproveInstruction = parseApproveInstruction;
exports.parseBurnCheckedInstruction = parseBurnCheckedInstruction;
exports.parseBurnInstruction = parseBurnInstruction;
exports.parseCloseAccountInstruction = parseCloseAccountInstruction;
exports.parseCreateAssociatedTokenIdempotentInstruction = parseCreateAssociatedTokenIdempotentInstruction;
exports.parseCreateAssociatedTokenInstruction = parseCreateAssociatedTokenInstruction;
exports.parseFreezeAccountInstruction = parseFreezeAccountInstruction;
exports.parseGetAccountDataSizeInstruction = parseGetAccountDataSizeInstruction;
exports.parseInitializeAccount2Instruction = parseInitializeAccount2Instruction;
exports.parseInitializeAccount3Instruction = parseInitializeAccount3Instruction;
exports.parseInitializeAccountInstruction = parseInitializeAccountInstruction;
exports.parseInitializeImmutableOwnerInstruction = parseInitializeImmutableOwnerInstruction;
exports.parseInitializeMint2Instruction = parseInitializeMint2Instruction;
exports.parseInitializeMintInstruction = parseInitializeMintInstruction;
exports.parseInitializeMultisig2Instruction = parseInitializeMultisig2Instruction;
exports.parseInitializeMultisigInstruction = parseInitializeMultisigInstruction;
exports.parseMintToCheckedInstruction = parseMintToCheckedInstruction;
exports.parseMintToInstruction = parseMintToInstruction;
exports.parseRecoverNestedAssociatedTokenInstruction = parseRecoverNestedAssociatedTokenInstruction;
exports.parseRevokeInstruction = parseRevokeInstruction;
exports.parseSetAuthorityInstruction = parseSetAuthorityInstruction;
exports.parseSyncNativeInstruction = parseSyncNativeInstruction;
exports.parseThawAccountInstruction = parseThawAccountInstruction;
exports.parseTransferCheckedInstruction = parseTransferCheckedInstruction;
exports.parseTransferInstruction = parseTransferInstruction;
exports.parseUiAmountToAmountInstruction = parseUiAmountToAmountInstruction;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map