import { createHash } from "crypto";
export const hash = (data) => createHash("sha256").update(data).digest("hex");
//# sourceMappingURL=hash.js.map