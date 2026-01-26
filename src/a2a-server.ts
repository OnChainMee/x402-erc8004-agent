/**
 * A2A (Agent-to-Agent) Server
 * 
 * This server implements the A2A protocol for agent communication.
 * Learn more: https://a2a-protocol.org/
 * 
 * Endpoints:
 * - GET  /.well-known/agent-card.json  → Agent discovery card
 * - POST /a2a                          → JSON-RPC 2.0 endpoint
 * 
 * Supported methods:
 * - message/send   → Send a message and get a response
 * - tasks/get      → Get status of a previous task
 * - tasks/cancel   → Cancel a running task
 */

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import { generateResponse, type AgentMessage } from './agent.js';
import { paymentMiddleware } from 'x402-express';

const app = express();

// Enable CORS for frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
}));

app.use(express.json());

// ============================================================================
// In-Memory Storage
// In production, replace with a database (Redis, PostgreSQL, etc.)
// ============================================================================

/**
 * Task storage - tracks all tasks and their current state
 * A task represents a single request/response interaction
 */
const tasks = new Map<string, {
  id: string;
  contextId: string;
  status: 'submitted' | 'working' | 'input-required' | 'completed' | 'failed' | 'canceled';
  messages: Array<{ role: 'user' | 'agent'; parts: Array<{ type: 'text'; text: string }> }>;
  artifacts: Array<{ name: string; parts: Array<{ type: 'text'; text: string }> }>;
}>();

/**
 * Conversation history storage - maintains context across messages
 * The contextId allows multiple messages to share conversation history
 */
const conversationHistory = new Map<string, AgentMessage[]>();

// ============================================================================
// Middleware & Routes
// ============================================================================

// x402 payment middleware - protects the /a2a endpoint
// See: https://docs.cdp.coinbase.com/x402/quickstart-for-sellers
// Set DISABLE_X402=true in .env to disable payment middleware for development
const ENABLE_X402 = process.env.DISABLE_X402 !== 'true';
const PAYEE_ADDRESS = (process.env.X402_PAYEE_ADDRESS || '0x50E4D6684a8185b875117cBebB90C72edE1b2819') as `0x${string}`;

if (ENABLE_X402) {
  app.use(paymentMiddleware(
    PAYEE_ADDRESS,
    {
      'POST /a2a': {
        price: process.env.X402_PRICE || '$0.001',
        network: 'base-sepolia', // Change to 'base' for mainnet
        config: {
          description: 'agent',
        },
      },
    },
    { url: 'https://x402.org/facilitator' } // Testnet facilitator
  ));
  console.log('💰 x402 payment middleware enabled');
} else {
  console.log('⚠️  x402 payment middleware DISABLED (development mode)');
}

/**
 * Root endpoint - provides server information
 */
app.get('/', (req, res) => {
  res.json({
    name: 'x402 & ERC-8004 Agent Server',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      agentCard: '/.well-known/agent-card.json',
      a2a: '/a2a',
    },
    protocols: ['A2A', 'x402', 'ERC-8004'],
    documentation: 'See README.md for API usage',
  });
});

/**
 * Agent Card endpoint - required for A2A discovery
 * Other agents use this to learn about your agent's capabilities
 */
app.get('/.well-known/agent-card.json', async (req, res) => {
  const agentCard = await import('../.well-known/agent-card.json', { assert: { type: 'json' } });
  res.json(agentCard.default);
});

/**
 * Main JSON-RPC 2.0 endpoint
 * All A2A protocol methods are called through this single endpoint
 */
app.post('/a2a', async (req, res) => {
  const { jsonrpc, method, params, id } = req.body;

  // Validate JSON-RPC version
  if (jsonrpc !== '2.0') {
    return res.json({ jsonrpc: '2.0', error: { code: -32600, message: 'Invalid Request' }, id });
  }

  try {
    const result = await handleMethod(method, params);
    res.json({ jsonrpc: '2.0', result, id });
  } catch (error: any) {
    res.json({
      jsonrpc: '2.0',
      error: { code: -32603, message: error.message || 'Internal error' },
      id,
    });
  }
});

// ============================================================================
// Method Handlers
// ============================================================================

/**
 * Route JSON-RPC methods to their handlers
 * Add new methods here as needed
 */
async function handleMethod(method: string, params: any) {
  switch (method) {
    case 'message/send':
      return handleMessageSend(params);
    case 'tasks/get':
      return handleTasksGet(params);
    case 'tasks/cancel':
      return handleTasksCancel(params);
    case 'health/check':
      return handleHealthCheck();
    default:
      throw new Error(`Method not found: ${method}`);
  }
}

/**
 * Handle message/send - the main method for chatting with the agent
 * 
 * @param params.message - The user's message with role and parts
 * @param params.configuration.contextId - Optional ID to continue a conversation
 * @returns A task object with the agent's response
 */
async function handleMessageSend(params: {
  message: { role: string; parts: Array<{ type: string; text?: string }> };
  configuration?: { contextId?: string };
}) {
  const { message, configuration } = params;
  
  // Use existing contextId for conversation continuity, or create new one
  const contextId = configuration?.contextId || uuidv4();
  const taskId = uuidv4();

  // Extract text content from message parts
  // A2A messages can have multiple parts (text, files, etc.)
  const userText = message.parts
    .filter((p) => p.type === 'text' && p.text)
    .map((p) => p.text)
    .join('\n');

  // Get conversation history for context-aware responses
  const history = conversationHistory.get(contextId) || [];

  // Generate response using the LLM (see agent.ts)
  const responseText = await generateResponse(userText, history);

  // Update conversation history for future messages
  history.push({ role: 'user', content: userText });
  history.push({ role: 'assistant', content: responseText });
  conversationHistory.set(contextId, history);

  // Create the task response object
  // This follows the A2A protocol task structure
  const task = {
    id: taskId,
    contextId,
    status: 'completed' as const,
    messages: [
      { role: 'user' as const, parts: [{ type: 'text' as const, text: userText }] },
      { role: 'agent' as const, parts: [{ type: 'text' as const, text: responseText }] },
    ],
    artifacts: [], // Add any generated files/data here
  };

  tasks.set(taskId, task);

  return task;
}

/**
 * Handle tasks/get - retrieve a task by ID
 * Useful for checking status of async operations
 */
async function handleTasksGet(params: { taskId: string }) {
  const task = tasks.get(params.taskId);
  if (!task) {
    throw new Error('Task not found');
  }
  return task;
}

/**
 * Handle tasks/cancel - cancel a running task
 * For long-running tasks, this allows early termination
 */
async function handleTasksCancel(params: { taskId: string }) {
  const task = tasks.get(params.taskId);
  if (!task) {
    throw new Error('Task not found');
  }
  task.status = 'canceled';
  return task;
}

/**
 * Handle health/check - return basic runtime and config status
 */
async function handleHealthCheck() {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    payment: {
      enabled: ENABLE_X402,
      payee: PAYEE_ADDRESS,
      network: 'base-sepolia',
      price: process.env.X402_PRICE || '$0.001',
    },
    agent: {
      model: 'gpt-4o-mini',
    },
  };
}

// ============================================================================
// Start Server
// ============================================================================

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🤖 A2A Server running on http://localhost:${PORT}`);
  console.log(`📋 Agent Card: http://localhost:${PORT}/.well-known/agent-card.json`);
  console.log(`🔗 JSON-RPC endpoint: http://localhost:${PORT}/a2a`);
});
