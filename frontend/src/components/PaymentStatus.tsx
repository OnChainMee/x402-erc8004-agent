export default function PaymentStatus() {

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">Payment</h3>
        <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-1">
          Active
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-sm text-slate-700">x402 Protocol</span>
          </div>
          <span className="text-xs text-slate-500">Enabled</span>
        </div>

        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-1">
          <div className="flex items-center justify-between">
            <span>Price per request</span>
            <span className="font-medium text-slate-800">$0.001</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Network</span>
            <span className="font-medium text-slate-800">Base Sepolia</span>
          </div>
        </div>

        <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
          <p className="text-xs text-amber-800">
            Payment middleware is active. Requests to /a2a require valid x402 headers.
          </p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-200">
        <h4 className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">Notes</h4>
        <ul className="text-xs text-slate-600 space-y-1">
          <li>• Each call triggers a micropayment</li>
          <li>• Payments settle on Base Sepolia</li>
          <li>• Payee address is configured on the server</li>
        </ul>
      </div>
    </div>
  );
}

