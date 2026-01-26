export interface AgentCardData {
  name: string;
  description: string;
  version: string;
  capabilities: string[];
  endpoints: {
    a2a: {
      url: string;
      protocol: string;
    };
  };
  payment?: {
    protocol: string;
    network: string;
    payee: string;
  };
  identity?: {
    standard: string;
    registry: string;
  };
}

export interface Message {
  role: 'user' | 'agent';
  parts: Array<{ type: string; text: string }>;
}

export interface Task {
  id: string;
  contextId: string;
  status: 'submitted' | 'working' | 'input-required' | 'completed' | 'failed' | 'canceled';
  messages: Message[];
  artifacts: Array<{ name: string; parts: Array<{ type: string; text: string }> }>;
}

export interface JsonRpcRequest {
  jsonrpc: '2.0';
  method: string;
  params: any;
  id: string | number;
}

export interface JsonRpcResponse {
  jsonrpc: '2.0';
  result?: any;
  error?: {
    code: number;
    message: string;
  };
  id: string | number;
}

