import type { ContractFunctionArgs, ContractFunctionName, ContractFunctionParameters } from "./contract.js";
import type { Abi, AbiStateMutability } from "abitype";
export type GetMulticallContractParameters<contract, mutability extends AbiStateMutability> = contract extends {
    abi: infer abi extends Abi;
} ? contract extends {
    functionName: infer functionName extends ContractFunctionName<abi, mutability>;
} ? contract extends {
    args: infer args extends ContractFunctionArgs<abi, mutability, functionName>;
} ? ContractFunctionParameters<abi, mutability, functionName, args> : ContractFunctionParameters<abi, mutability, functionName> : Abi extends abi ? ContractFunctionParameters : ContractFunctionParameters<abi, mutability> : ContractFunctionParameters<readonly unknown[]>;
//# sourceMappingURL=multicall.d.ts.map