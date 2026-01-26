import { useState, useEffect } from 'react';

export default function PaymentStatus() {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');

  // In a real implementation, this would check x402 payment status
  useEffect(() => {
    // Simulated payment status check
    // In production, integrate with x402 payment verification
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Payment Status</h3>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">x402 Protocol</span>
          </div>
          <span className="text-xs text-gray-500">Active</span>
        </div>

        <div className="p-3 bg-blue-50 rounded border border-blue-200">
          <p className="text-xs text-gray-600 mb-1">
            <strong>Price per request:</strong> $0.001
          </p>
          <p className="text-xs text-gray-600">
            <strong>Network:</strong> Base Sepolia
          </p>
        </div>

        <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
          <p className="text-xs text-yellow-800">
            ⚠️ Payment middleware is active. Requests to /a2a require valid x402 payment headers.
          </p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">How it works:</h4>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>• Each API call requires x402 payment</li>
          <li>• Payments are processed automatically</li>
          <li>• Uses Base Sepolia testnet</li>
          <li>• Payments go to configured payee address</li>
        </ul>
      </div>
    </div>
  );
}

