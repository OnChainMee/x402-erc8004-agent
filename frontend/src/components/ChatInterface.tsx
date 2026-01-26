import { useState, useRef, useEffect } from 'react';
import { sendMessage } from '../services/a2aClient';
import type { AgentCardData, Task } from '../types';

interface ChatInterfaceProps {
  agentCard: AgentCardData | null;
}

interface ChatMessage {
  role: 'user' | 'agent';
  text: string;
  timestamp: Date;
  taskId?: string;
}

export default function ChatInterface({ agentCard }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contextId, setContextId] = useState<string | undefined>();
  const [lastUserMessage, setLastUserMessage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setError(null);
    setLastUserMessage(input);

    try {
      // Note: In production, you'll need to handle x402 payment headers here
      // For now, this will work if the server is running without payment middleware in dev mode
      const task: Task = await sendMessage(input, contextId);

      const agentMessage: ChatMessage = {
        role: 'agent',
        text: task.messages.find((m) => m.role === 'agent')?.parts[0]?.text || 'No response',
        timestamp: new Date(),
        taskId: task.id,
      };

      setMessages((prev) => [...prev, agentMessage]);
      
      // Update contextId for conversation continuity
      if (task.contextId) {
        setContextId(task.contextId);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message';
      setError(errorMessage);
      
      // Show error as a message
      const errorMsg: ChatMessage = {
        role: 'agent',
        text: `Error: ${errorMessage}`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = async () => {
    if (!lastUserMessage || loading) return;
    setInput(lastUserMessage);
    await handleSend();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-[620px]">
      {/* Header */}
      <div className="p-4 border-b border-slate-200 bg-slate-50 rounded-t-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Conversation</h2>
            <p className="text-xs text-slate-500">
              {agentCard?.endpoints.a2a.protocol || 'JSON-RPC 2.0'}
            </p>
          </div>
          <span className="text-xs text-slate-600 bg-white border border-slate-200 rounded-full px-2 py-1">
            Secure Channel
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-white">
        {messages.length === 0 && (
          <div className="text-center text-slate-500 mt-8">
            <p className="text-base font-medium mb-1">Start a conversation</p>
            <p className="text-sm">Send a message to interact with the agent</p>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                msg.role === 'user'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-800'
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.text}</p>
              <p className="text-xs mt-1 opacity-70">
                {msg.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 rounded-lg p-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-slate-200 bg-slate-50 rounded-b-xl">
        {error && (
          <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded text-red-700 text-xs flex items-center justify-between gap-2">
            <span>{error}</span>
            <button
              onClick={handleRetry}
              className="px-2 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
              disabled={loading || !lastUserMessage}
            >
              Retry
            </button>
          </div>
        )}
        <div className="flex space-x-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900/20 resize-none bg-white"
            rows={2}
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="px-5 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Send
          </button>
        </div>
        <p className="text-xs text-slate-500 mt-2">
          Note: x402 payment required for API calls in production
        </p>
      </div>
    </div>
  );
}

