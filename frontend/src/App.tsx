import { useState, useEffect } from 'react';
import AgentCard from './components/AgentCard';
import ChatInterface from './components/ChatInterface';
import PaymentStatus from './components/PaymentStatus';
import { fetchAgentCard } from './services/a2aClient';
import type { AgentCardData } from './types';

function App() {
  const [agentCard, setAgentCard] = useState<AgentCardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadAgentCard();
  }, []);

  const loadAgentCard = async () => {
    try {
      setLoading(true);
      const card = await fetchAgentCard();
      setAgentCard(card);
      setError(null);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load agent card';
      // Provide more helpful error message
      if (errorMessage.includes('fetch') || errorMessage.includes('Failed')) {
        setError('Cannot connect to backend server. Make sure the A2A server is running on port 3000.');
      } else {
        setError(errorMessage);
      }
      console.error('Error loading agent card:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading agent information...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg max-w-md">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p className="mb-4">{error}</p>
          <div className="bg-red-600 p-3 rounded mb-4 text-sm">
            <p className="font-semibold mb-1">To fix this:</p>
            <ol className="list-decimal list-inside space-y-1 text-xs">
              <li>Make sure the backend server is running</li>
              <li>Run: <code className="bg-red-700 px-1 rounded">npm run start:a2a</code></li>
              <li>Server should be on <code className="bg-red-700 px-1 rounded">http://localhost:3000</code></li>
            </ol>
          </div>
          <button
            onClick={loadAgentCard}
            className="w-full bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-100 font-semibold"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            x402 & ERC-8004 Agent
          </h1>
          <p className="text-white/80 text-lg">
            Decentralized AI Agent with Payment & Identity
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Agent Info */}
          <div className="lg:col-span-1 space-y-6">
            {agentCard && <AgentCard data={agentCard} />}
            <PaymentStatus />
          </div>

          {/* Right Column - Chat Interface */}
          <div className="lg:col-span-2">
            <ChatInterface agentCard={agentCard} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

