import type { AgentCardData } from '../types';

interface AgentCardProps {
  data: AgentCardData;
}

export default function AgentCard({ data }: AgentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
          {data.name.charAt(0).toUpperCase()}
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold text-gray-800">{data.name}</h2>
          <p className="text-sm text-gray-500">v{data.version}</p>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{data.description}</p>

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Capabilities</h3>
        <div className="flex flex-wrap gap-2">
          {data.capabilities.map((cap) => (
            <span
              key={cap}
              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      {data.payment && (
        <div className="mb-4 p-3 bg-green-50 rounded border border-green-200">
          <div className="flex items-center mb-1">
            <span className="text-green-600 font-semibold text-sm">💰 x402 Payment</span>
          </div>
          <p className="text-xs text-gray-600">Network: {data.payment.network}</p>
          <p className="text-xs text-gray-600 font-mono truncate">
            Payee: {data.payment.payee}
          </p>
        </div>
      )}

      {data.identity && (
        <div className="p-3 bg-purple-50 rounded border border-purple-200">
          <div className="flex items-center mb-1">
            <span className="text-purple-600 font-semibold text-sm">🆔 ERC-8004 Identity</span>
          </div>
          <p className="text-xs text-gray-600 font-mono truncate">
            {data.identity.registry}
          </p>
        </div>
      )}
    </div>
  );
}

