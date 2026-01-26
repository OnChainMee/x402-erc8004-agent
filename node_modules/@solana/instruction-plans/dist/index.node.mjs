import { SolanaError, SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_PACKER_ALREADY_COMPLETE, SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_CANNOT_ACCOMMODATE_PLAN, SOLANA_ERROR__INSTRUCTION_PLANS__FAILED_TO_EXECUTE_TRANSACTION_PLAN, SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_TRANSACTION_PLAN_KIND, SOLANA_ERROR__INSTRUCTION_PLANS__EMPTY_INSTRUCTION_PLAN, SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_INSTRUCTION_PLAN_KIND, isSolanaError } from '@solana/errors';
import { appendTransactionMessageInstruction, appendTransactionMessageInstructions } from '@solana/transaction-messages';
import { getTransactionMessageSize, TRANSACTION_SIZE_LIMIT } from '@solana/transactions';
import { getAbortablePromise } from '@solana/promises';

// src/instruction-plan.ts
function parallelInstructionPlan(plans) {
  return Object.freeze({
    kind: "parallel",
    plans: parseSingleInstructionPlans(plans)
  });
}
function sequentialInstructionPlan(plans) {
  return Object.freeze({
    divisible: true,
    kind: "sequential",
    plans: parseSingleInstructionPlans(plans)
  });
}
function nonDivisibleSequentialInstructionPlan(plans) {
  return Object.freeze({
    divisible: false,
    kind: "sequential",
    plans: parseSingleInstructionPlans(plans)
  });
}
function singleInstructionPlan(instruction) {
  return Object.freeze({ instruction, kind: "single" });
}
function parseSingleInstructionPlans(plans) {
  return plans.map((plan) => "kind" in plan ? plan : singleInstructionPlan(plan));
}
function getLinearMessagePackerInstructionPlan({
  getInstruction,
  totalLength: totalBytes
}) {
  return Object.freeze({
    getMessagePacker: () => {
      let offset = 0;
      return Object.freeze({
        done: () => offset >= totalBytes,
        packMessageToCapacity: (message) => {
          if (offset >= totalBytes) {
            throw new SolanaError(SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_PACKER_ALREADY_COMPLETE);
          }
          const messageSizeWithBaseInstruction = getTransactionMessageSize(
            appendTransactionMessageInstruction(getInstruction(offset, 0), message)
          );
          const freeSpace = TRANSACTION_SIZE_LIMIT - messageSizeWithBaseInstruction - 1;
          if (freeSpace <= 0) {
            const messageSize = getTransactionMessageSize(message);
            throw new SolanaError(SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_CANNOT_ACCOMMODATE_PLAN, {
              // (+1) We need to pack at least one byte of data otherwise
              // there is no point packing the base instruction alone.
              numBytesRequired: messageSizeWithBaseInstruction - messageSize + 1,
              // (-1) Leeway for shortU16 numbers in transaction headers.
              numFreeBytes: TRANSACTION_SIZE_LIMIT - messageSize - 1
            });
          }
          const length = Math.min(totalBytes - offset, freeSpace);
          const instruction = getInstruction(offset, length);
          offset += length;
          return appendTransactionMessageInstruction(instruction, message);
        }
      });
    },
    kind: "messagePacker"
  });
}
function getMessagePackerInstructionPlanFromInstructions(instructions) {
  return Object.freeze({
    getMessagePacker: () => {
      let instructionIndex = 0;
      return Object.freeze({
        done: () => instructionIndex >= instructions.length,
        packMessageToCapacity: (message) => {
          if (instructionIndex >= instructions.length) {
            throw new SolanaError(SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_PACKER_ALREADY_COMPLETE);
          }
          const originalMessageSize = getTransactionMessageSize(message);
          for (let index = instructionIndex; index < instructions.length; index++) {
            message = appendTransactionMessageInstruction(instructions[index], message);
            const messageSize = getTransactionMessageSize(message);
            if (messageSize > TRANSACTION_SIZE_LIMIT) {
              if (index === instructionIndex) {
                throw new SolanaError(
                  SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_CANNOT_ACCOMMODATE_PLAN,
                  {
                    numBytesRequired: messageSize - originalMessageSize,
                    numFreeBytes: TRANSACTION_SIZE_LIMIT - originalMessageSize
                  }
                );
              }
              instructionIndex = index;
              return message;
            }
          }
          instructionIndex = instructions.length;
          return message;
        }
      });
    },
    kind: "messagePacker"
  });
}
var REALLOC_LIMIT = 10240;
function getReallocMessagePackerInstructionPlan({
  getInstruction,
  totalSize
}) {
  const numberOfInstructions = Math.ceil(totalSize / REALLOC_LIMIT);
  const lastInstructionSize = totalSize % REALLOC_LIMIT;
  const instructions = new Array(numberOfInstructions).fill(0).map((_, i) => getInstruction(i === numberOfInstructions - 1 ? lastInstructionSize : REALLOC_LIMIT));
  return getMessagePackerInstructionPlanFromInstructions(instructions);
}

// src/transaction-plan-result.ts
function sequentialTransactionPlanResult(plans) {
  return Object.freeze({ divisible: true, kind: "sequential", plans });
}
function nonDivisibleSequentialTransactionPlanResult(plans) {
  return Object.freeze({ divisible: false, kind: "sequential", plans });
}
function parallelTransactionPlanResult(plans) {
  return Object.freeze({ kind: "parallel", plans });
}
function successfulSingleTransactionPlanResult(transactionMessage, transaction, context) {
  return Object.freeze({
    kind: "single",
    message: transactionMessage,
    status: Object.freeze({ context: context ?? {}, kind: "successful", transaction })
  });
}
function failedSingleTransactionPlanResult(transactionMessage, error) {
  return Object.freeze({
    kind: "single",
    message: transactionMessage,
    status: Object.freeze({ error, kind: "failed" })
  });
}
function canceledSingleTransactionPlanResult(transactionMessage) {
  return Object.freeze({
    kind: "single",
    message: transactionMessage,
    status: Object.freeze({ kind: "canceled" })
  });
}

// src/transaction-plan-executor.ts
function createTransactionPlanExecutor(config) {
  return async (plan, { abortSignal } = {}) => {
    const context = {
      ...config,
      abortSignal,
      canceled: abortSignal?.aborted ?? false
    };
    const cancelHandler = () => {
      context.canceled = true;
    };
    abortSignal?.addEventListener("abort", cancelHandler);
    const transactionPlanResult = await traverse(plan, context);
    abortSignal?.removeEventListener("abort", cancelHandler);
    if (context.canceled) {
      const abortReason = abortSignal?.aborted ? abortSignal.reason : void 0;
      const context2 = { cause: findErrorFromTransactionPlanResult(transactionPlanResult) ?? abortReason };
      Object.defineProperty(context2, "transactionPlanResult", {
        configurable: false,
        enumerable: false,
        value: transactionPlanResult,
        writable: false
      });
      throw new SolanaError(SOLANA_ERROR__INSTRUCTION_PLANS__FAILED_TO_EXECUTE_TRANSACTION_PLAN, context2);
    }
    return transactionPlanResult;
  };
}
async function traverse(transactionPlan, context) {
  const kind = transactionPlan.kind;
  switch (kind) {
    case "sequential":
      return await traverseSequential(transactionPlan, context);
    case "parallel":
      return await traverseParallel(transactionPlan, context);
    case "single":
      return await traverseSingle(transactionPlan, context);
    default:
      throw new SolanaError(SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_TRANSACTION_PLAN_KIND, { kind });
  }
}
async function traverseSequential(transactionPlan, context) {
  const results = [];
  for (const subPlan of transactionPlan.plans) {
    const result = await traverse(subPlan, context);
    results.push(result);
  }
  return transactionPlan.divisible ? sequentialTransactionPlanResult(results) : nonDivisibleSequentialTransactionPlanResult(results);
}
async function traverseParallel(transactionPlan, context) {
  const results = await Promise.all(transactionPlan.plans.map((plan) => traverse(plan, context)));
  return parallelTransactionPlanResult(results);
}
async function traverseSingle(transactionPlan, context) {
  if (context.canceled) {
    return canceledSingleTransactionPlanResult(transactionPlan.message);
  }
  try {
    const result = await getAbortablePromise(
      context.executeTransactionMessage(transactionPlan.message, { abortSignal: context.abortSignal }),
      context.abortSignal
    );
    return successfulSingleTransactionPlanResult(transactionPlan.message, result.transaction, result.context);
  } catch (error) {
    context.canceled = true;
    return failedSingleTransactionPlanResult(transactionPlan.message, error);
  }
}
function findErrorFromTransactionPlanResult(result) {
  if (result.kind === "single") {
    return result.status.kind === "failed" ? result.status.error : void 0;
  }
  for (const plan of result.plans) {
    const error = findErrorFromTransactionPlanResult(plan);
    if (error) {
      return error;
    }
  }
}

// src/transaction-plan.ts
function parallelTransactionPlan(plans) {
  return Object.freeze({ kind: "parallel", plans: parseSingleTransactionPlans(plans) });
}
function sequentialTransactionPlan(plans) {
  return Object.freeze({ divisible: true, kind: "sequential", plans: parseSingleTransactionPlans(plans) });
}
function nonDivisibleSequentialTransactionPlan(plans) {
  return Object.freeze({ divisible: false, kind: "sequential", plans: parseSingleTransactionPlans(plans) });
}
function singleTransactionPlan(transactionMessage) {
  return Object.freeze({ kind: "single", message: transactionMessage });
}
function parseSingleTransactionPlans(plans) {
  return plans.map((plan) => "kind" in plan ? plan : singleTransactionPlan(plan));
}
function getAllSingleTransactionPlans(transactionPlan) {
  if (transactionPlan.kind === "single") {
    return [transactionPlan];
  }
  return transactionPlan.plans.flatMap(getAllSingleTransactionPlans);
}
function createTransactionPlanner(config) {
  return async (instructionPlan, { abortSignal } = {}) => {
    const plan = await traverse2(instructionPlan, {
      abortSignal,
      createTransactionMessage: config.createTransactionMessage,
      onTransactionMessageUpdated: config.onTransactionMessageUpdated ?? ((msg) => msg),
      parent: null,
      parentCandidates: []
    });
    if (!plan) {
      throw new SolanaError(SOLANA_ERROR__INSTRUCTION_PLANS__EMPTY_INSTRUCTION_PLAN);
    }
    return freezeTransactionPlan(plan);
  };
}
async function traverse2(instructionPlan, context) {
  context.abortSignal?.throwIfAborted();
  const kind = instructionPlan.kind;
  switch (kind) {
    case "sequential":
      return await traverseSequential2(instructionPlan, context);
    case "parallel":
      return await traverseParallel2(instructionPlan, context);
    case "single":
      return await traverseSingle2(instructionPlan, context);
    case "messagePacker":
      return await traverseMessagePacker(instructionPlan, context);
    default:
      throw new SolanaError(SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_INSTRUCTION_PLAN_KIND, { kind });
  }
}
async function traverseSequential2(instructionPlan, context) {
  let candidate = null;
  const mustEntirelyFitInParentCandidate = context.parent && (context.parent.kind === "parallel" || !instructionPlan.divisible);
  if (mustEntirelyFitInParentCandidate) {
    const candidate2 = await selectAndMutateCandidate(
      context,
      context.parentCandidates,
      (message) => fitEntirePlanInsideMessage(instructionPlan, message)
    );
    if (candidate2) {
      return null;
    }
  } else {
    candidate = context.parentCandidates.length > 0 ? context.parentCandidates[0] : null;
  }
  const transactionPlans = [];
  for (const plan of instructionPlan.plans) {
    const transactionPlan = await traverse2(plan, {
      ...context,
      parent: instructionPlan,
      parentCandidates: candidate ? [candidate] : []
    });
    if (transactionPlan) {
      candidate = getSequentialCandidate(transactionPlan);
      const newPlans = transactionPlan.kind === "sequential" && (transactionPlan.divisible || !instructionPlan.divisible) ? transactionPlan.plans : [transactionPlan];
      transactionPlans.push(...newPlans);
    }
  }
  if (transactionPlans.length === 1) {
    return transactionPlans[0];
  }
  if (transactionPlans.length === 0) {
    return null;
  }
  return {
    divisible: instructionPlan.divisible,
    kind: "sequential",
    plans: transactionPlans
  };
}
async function traverseParallel2(instructionPlan, context) {
  const candidates = [...context.parentCandidates];
  const transactionPlans = [];
  const sortedChildren = Array.from(instructionPlan.plans).sort(
    (a, b) => Number(a.kind === "messagePacker") - Number(b.kind === "messagePacker")
  );
  for (const plan of sortedChildren) {
    const transactionPlan = await traverse2(plan, {
      ...context,
      parent: instructionPlan,
      parentCandidates: candidates
    });
    if (transactionPlan) {
      candidates.push(...getParallelCandidates(transactionPlan));
      const newPlans = transactionPlan.kind === "parallel" ? transactionPlan.plans : [transactionPlan];
      transactionPlans.push(...newPlans);
    }
  }
  if (transactionPlans.length === 1) {
    return transactionPlans[0];
  }
  if (transactionPlans.length === 0) {
    return null;
  }
  return { kind: "parallel", plans: transactionPlans };
}
async function traverseSingle2(instructionPlan, context) {
  const predicate = (message2) => appendTransactionMessageInstructions([instructionPlan.instruction], message2);
  const candidate = await selectAndMutateCandidate(context, context.parentCandidates, predicate);
  if (candidate) {
    return null;
  }
  const message = await createNewMessage(context, predicate);
  return { kind: "single", message };
}
async function traverseMessagePacker(instructionPlan, context) {
  const messagePacker = instructionPlan.getMessagePacker();
  const transactionPlans = [];
  const candidates = [...context.parentCandidates];
  while (!messagePacker.done()) {
    const candidate = await selectAndMutateCandidate(context, candidates, messagePacker.packMessageToCapacity);
    if (!candidate) {
      const message = await createNewMessage(context, messagePacker.packMessageToCapacity);
      const newPlan = { kind: "single", message };
      transactionPlans.push(newPlan);
    }
  }
  if (transactionPlans.length === 1) {
    return transactionPlans[0];
  }
  if (transactionPlans.length === 0) {
    return null;
  }
  if (context.parent?.kind === "parallel") {
    return { kind: "parallel", plans: transactionPlans };
  }
  return {
    divisible: context.parent?.kind === "sequential" ? context.parent.divisible : true,
    kind: "sequential",
    plans: transactionPlans
  };
}
function getSequentialCandidate(latestPlan) {
  if (latestPlan.kind === "single") {
    return latestPlan;
  }
  if (latestPlan.kind === "sequential" && latestPlan.plans.length > 0) {
    return getSequentialCandidate(latestPlan.plans[latestPlan.plans.length - 1]);
  }
  return null;
}
function getParallelCandidates(latestPlan) {
  return getAllSingleTransactionPlans(latestPlan);
}
async function selectAndMutateCandidate(context, candidates, predicate) {
  for (const candidate of candidates) {
    try {
      const message = await getAbortablePromise(
        Promise.resolve(
          context.onTransactionMessageUpdated(predicate(candidate.message), {
            abortSignal: context.abortSignal
          })
        ),
        context.abortSignal
      );
      if (getTransactionMessageSize(message) <= TRANSACTION_SIZE_LIMIT) {
        candidate.message = message;
        return candidate;
      }
    } catch (error) {
      if (isSolanaError(error, SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_CANNOT_ACCOMMODATE_PLAN)) ; else {
        throw error;
      }
    }
  }
  return null;
}
async function createNewMessage(context, predicate) {
  const newMessage = await getAbortablePromise(
    Promise.resolve(context.createTransactionMessage({ abortSignal: context.abortSignal })),
    context.abortSignal
  );
  const updatedMessage = await getAbortablePromise(
    Promise.resolve(
      context.onTransactionMessageUpdated(predicate(newMessage), { abortSignal: context.abortSignal })
    ),
    context.abortSignal
  );
  const updatedMessageSize = getTransactionMessageSize(updatedMessage);
  if (updatedMessageSize > TRANSACTION_SIZE_LIMIT) {
    const newMessageSize = getTransactionMessageSize(newMessage);
    throw new SolanaError(SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_CANNOT_ACCOMMODATE_PLAN, {
      numBytesRequired: updatedMessageSize - newMessageSize,
      numFreeBytes: TRANSACTION_SIZE_LIMIT - newMessageSize
    });
  }
  return updatedMessage;
}
function freezeTransactionPlan(plan) {
  const kind = plan.kind;
  switch (kind) {
    case "single":
      return singleTransactionPlan(plan.message);
    case "sequential":
      return plan.divisible ? sequentialTransactionPlan(plan.plans.map(freezeTransactionPlan)) : nonDivisibleSequentialTransactionPlan(plan.plans.map(freezeTransactionPlan));
    case "parallel":
      return parallelTransactionPlan(plan.plans.map(freezeTransactionPlan));
    default:
      throw new SolanaError(SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_TRANSACTION_PLAN_KIND, { kind });
  }
}
function fitEntirePlanInsideMessage(instructionPlan, message) {
  let newMessage = message;
  const kind = instructionPlan.kind;
  switch (kind) {
    case "sequential":
    case "parallel":
      for (const plan of instructionPlan.plans) {
        newMessage = fitEntirePlanInsideMessage(plan, newMessage);
      }
      return newMessage;
    case "single":
      newMessage = appendTransactionMessageInstructions([instructionPlan.instruction], message);
      const newMessageSize = getTransactionMessageSize(newMessage);
      if (newMessageSize > TRANSACTION_SIZE_LIMIT) {
        const baseMessageSize = getTransactionMessageSize(message);
        throw new SolanaError(SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_CANNOT_ACCOMMODATE_PLAN, {
          numBytesRequired: newMessageSize - baseMessageSize,
          numFreeBytes: TRANSACTION_SIZE_LIMIT - baseMessageSize
        });
      }
      return newMessage;
    case "messagePacker":
      const messagePacker = instructionPlan.getMessagePacker();
      while (!messagePacker.done()) {
        newMessage = messagePacker.packMessageToCapacity(message);
      }
      return newMessage;
    default:
      throw new SolanaError(SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_INSTRUCTION_PLAN_KIND, { kind });
  }
}

export { canceledSingleTransactionPlanResult, createTransactionPlanExecutor, createTransactionPlanner, failedSingleTransactionPlanResult, getAllSingleTransactionPlans, getLinearMessagePackerInstructionPlan, getMessagePackerInstructionPlanFromInstructions, getReallocMessagePackerInstructionPlan, nonDivisibleSequentialInstructionPlan, nonDivisibleSequentialTransactionPlan, nonDivisibleSequentialTransactionPlanResult, parallelInstructionPlan, parallelTransactionPlan, parallelTransactionPlanResult, sequentialInstructionPlan, sequentialTransactionPlan, sequentialTransactionPlanResult, singleInstructionPlan, singleTransactionPlan, successfulSingleTransactionPlanResult };
//# sourceMappingURL=index.node.mjs.map
//# sourceMappingURL=index.node.mjs.map