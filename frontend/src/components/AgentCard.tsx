import type { AgentCardData } from '../types';

interface AgentCardProps {
  data: AgentCardData;
}

export default function AgentCard({ data }: AgentCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white text-lg font-semibold">
          {data.name.charAt(0).toUpperCase()}
        </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-slate-900">{data.name}</h2>
            <p className="text-xs text-slate-500">Version {data.version}</p>
          </div>
        </div>
        <span className="text-xs text-slate-500 border border-slate-200 rounded-full px-2 py-1">
          A2A Enabled
        </span>
      </div>

      <p className="text-sm text-slate-600 leading-relaxed mb-5">{data.description}</p>

      <div className="mb-4">
        <h3 className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
          Capabilities
        </h3>
        <div className="flex flex-wrap gap-2">
          {data.capabilities.map((cap) => (
            <span
              key={cap}
              className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      {data.payment && (
        <div className="mb-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
          <p className="text-xs font-semibold text-emerald-700 mb-1">x402 Payment</p>
          <p className="text-xs text-slate-600">Network: {data.payment.network}</p>
          <p className="text-xs text-slate-600 font-mono truncate">Payee: {data.payment.payee}</p>
        </div>
      )}

      {data.identity && (
        <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
          <p className="text-xs font-semibold text-indigo-700 mb-1">ERC-8004 Identity</p>
          <p className="text-xs text-slate-600 font-mono truncate">{data.identity.registry}</p>
        </div>
      )}
    </div>
  );
}

