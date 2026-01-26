/**
 * Describes the purpose for which an account participates in a transaction.
 *
 * Every account that participates in a transaction can be read from, but only ones that you mark as
 * writable may be written to, and only ones that you indicate must sign the transaction will gain
 * the privileges associated with signers at runtime.
 *
 * |                               | `isSigner` | `isWritable` |
 * | ----------------------------- | ---------- | ------------ |
 * | `AccountRole.READONLY`        | &#x274c;   | &#x274c;     |
 * | `AccountRole.WRITABLE`        | &#x274c;   | &#x2705;     |
 * | `AccountRole.READONLY_SIGNER` | &#x2705;   | &#x274c;     |
 * | `AccountRole.WRITABLE_SIGNER` | &#x2705;   | &#x2705;     |
 */
export declare enum AccountRole {
    WRITABLE_SIGNER = 3,// prettier-ignore
    READONLY_SIGNER = 2,// prettier-ignore
    WRITABLE = 1,// prettier-ignore
    READONLY = 0
}
/**
 * @returns An {@link AccountRole} representing the non-signer variant of the supplied role.
 */
export declare function downgradeRoleToNonSigner(role: AccountRole.READONLY_SIGNER): AccountRole.READONLY;
export declare function downgradeRoleToNonSigner(role: AccountRole.WRITABLE_SIGNER): AccountRole.WRITABLE;
export declare function downgradeRoleToNonSigner(role: AccountRole): AccountRole;
/**
 * @returns An {@link AccountRole} representing the read-only variant of the supplied role.
 */
export declare function downgradeRoleToReadonly(role: AccountRole.WRITABLE): AccountRole.READONLY;
export declare function downgradeRoleToReadonly(role: AccountRole.WRITABLE_SIGNER): AccountRole.READONLY_SIGNER;
export declare function downgradeRoleToReadonly(role: AccountRole): AccountRole;
/**
 * Returns `true` if the {@link AccountRole} given represents that of a signer. Also refines the
 * TypeScript type of the supplied role.
 */
export declare function isSignerRole(role: AccountRole): role is AccountRole.READONLY_SIGNER | AccountRole.WRITABLE_SIGNER;
/**
 * Returns `true` if the {@link AccountRole} given represents that of a writable account. Also
 * refines the TypeScript type of the supplied role.
 */
export declare function isWritableRole(role: AccountRole): role is AccountRole.WRITABLE | AccountRole.WRITABLE_SIGNER;
/**
 * Given two {@link AccountRole | AccountRoles}, will return the {@link AccountRole} that grants the
 * highest privileges of both.
 *
 * @example
 * ```ts
 * // Returns `AccountRole.WRITABLE_SIGNER`
 * mergeRoles(AccountRole.READONLY_SIGNER, AccountRole.WRITABLE);
 * ```
 */
export declare function mergeRoles(roleA: AccountRole.WRITABLE, roleB: AccountRole.READONLY_SIGNER): AccountRole.WRITABLE_SIGNER;
export declare function mergeRoles(roleA: AccountRole.READONLY_SIGNER, roleB: AccountRole.WRITABLE): AccountRole.WRITABLE_SIGNER;
export declare function mergeRoles(roleA: AccountRole, roleB: AccountRole.WRITABLE_SIGNER): AccountRole.WRITABLE_SIGNER;
export declare function mergeRoles(roleA: AccountRole.WRITABLE_SIGNER, roleB: AccountRole): AccountRole.WRITABLE_SIGNER;
export declare function mergeRoles(roleA: AccountRole, roleB: AccountRole.READONLY_SIGNER): AccountRole.READONLY_SIGNER;
export declare function mergeRoles(roleA: AccountRole.READONLY_SIGNER, roleB: AccountRole): AccountRole.READONLY_SIGNER;
export declare function mergeRoles(roleA: AccountRole, roleB: AccountRole.WRITABLE): AccountRole.WRITABLE;
export declare function mergeRoles(roleA: AccountRole.WRITABLE, roleB: AccountRole): AccountRole.WRITABLE;
export declare function mergeRoles(roleA: AccountRole.READONLY, roleB: AccountRole.READONLY): AccountRole.READONLY;
export declare function mergeRoles(roleA: AccountRole, roleB: AccountRole): AccountRole;
/**
 * @returns An {@link AccountRole} representing the signer variant of the supplied role.
 */
export declare function upgradeRoleToSigner(role: AccountRole.READONLY): AccountRole.READONLY_SIGNER;
export declare function upgradeRoleToSigner(role: AccountRole.WRITABLE): AccountRole.WRITABLE_SIGNER;
export declare function upgradeRoleToSigner(role: AccountRole): AccountRole;
/**
 * @returns An {@link AccountRole} representing the writable variant of the supplied role.
 */
export declare function upgradeRoleToWritable(role: AccountRole.READONLY): AccountRole.WRITABLE;
export declare function upgradeRoleToWritable(role: AccountRole.READONLY_SIGNER): AccountRole.WRITABLE_SIGNER;
export declare function upgradeRoleToWritable(role: AccountRole): AccountRole;
//# sourceMappingURL=roles.d.ts.map