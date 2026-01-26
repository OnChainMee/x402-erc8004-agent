import type { AgentCardData, JsonRpcRequest, JsonRpcResponse, Task } from '../types';

// Use relative URLs to leverage Vite proxy, or fallback to direct URL
const API_BASE_URL = import.meta.env.VITE_API_URL || '';

/**
 * Fetch the agent card for discovery
 */
export async function fetchAgentCard(): Promise<AgentCardData> {
  const response = await fetch(`${API_BASE_URL}/.well-known/agent-card.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch agent card: ${response.statusText}`);
  }
  return response.json();
}

/**
 * Send a JSON-RPC 2.0 request to the A2A endpoint
 * Note: This endpoint is protected by x402 payment middleware
 */
export async function sendJsonRpcRequest(
  method: string,
  params: any,
  headers?: HeadersInit
): Promise<JsonRpcResponse> {
  const request: JsonRpcRequest = {
    jsonrpc: '2.0',
    method,
    params,
    id: Date.now().toString(),
  };

  const response = await fetch(`${API_BASE_URL}/a2a`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    // x402 payment errors will return specific status codes
    if (response.status === 402) {
      throw new Error('Payment required: Please complete x402 payment');
    }
    throw new Error(`Request failed: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Send a message to the agent
 */
export async function sendMessage(
  message: string,
  contextId?: string,
  headers?: HeadersInit
): Promise<Task> {
  const response = await sendJsonRpcRequest(
    'message/send',
    {
      message: {
        role: 'user',
        parts: [{ type: 'text', text: message }],
      },
      ...(contextId && {
        configuration: { contextId },
      }),
    },
    headers
  );

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response.result;
}

/**
 * Get task status by ID
 */
export async function getTask(taskId: string): Promise<Task> {
  const response = await sendJsonRpcRequest('tasks/get', { taskId });

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response.result;
}

/**
 * Cancel a task
 */
export async function cancelTask(taskId: string): Promise<Task> {
  const response = await sendJsonRpcRequest('tasks/cancel', { taskId });

  if (response.error) {
    throw new Error(response.error.message);
  }

  return response.result;
}

