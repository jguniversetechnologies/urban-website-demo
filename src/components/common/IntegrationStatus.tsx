'use client';

import { getIntegrationStatus } from '@/lib/integrations';

export default function IntegrationStatus() {
  const status = getIntegrationStatus();
  const isDemoMode = process.env.NODE_ENV === 'development' && 
                     process.env.NEXT_PUBLIC_APP_URL?.includes('localhost');

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Integration Status</h3>
        {isDemoMode && (
          <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
            DEMO MODE
          </span>
        )}
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span>Google Maps</span>
          <span className={status.googleMaps ? 'text-green-400' : 'text-red-400'}>
            {status.googleMaps ? (isDemoMode ? '✓ Demo Mode' : '✓ Configured') : '✗ Not Configured'}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>SMS/OTP</span>
          <span className={status.sms ? 'text-green-400' : 'text-red-400'}>
            {status.sms ? (isDemoMode ? '✓ Demo Mode' : '✓ Configured') : '✗ Not Configured'}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Payment Gateway</span>
          <span className={status.payment ? 'text-green-400' : 'text-red-400'}>
            {status.payment ? (isDemoMode ? '✓ Demo Mode' : '✓ Configured') : '✗ Not Configured'}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Firebase (FCM)</span>
          <span className={status.firebase ? 'text-green-400' : 'text-red-400'}>
            {status.firebase ? (isDemoMode ? '✓ Demo Mode' : '✓ Configured') : '✗ Not Configured'}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Cloud Storage</span>
          <span className={status.storage ? 'text-green-400' : 'text-red-400'}>
            {status.storage ? (isDemoMode ? '✓ Demo Mode' : '✓ Configured') : '✗ Not Configured'}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Email Service</span>
          <span className={status.email ? 'text-green-400' : 'text-red-400'}>
            {status.email ? (isDemoMode ? '✓ Demo Mode' : '✓ Configured') : '✗ Not Configured'}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>Analytics</span>
          <span className={status.analytics ? 'text-green-400' : 'text-red-400'}>
            {status.analytics ? (isDemoMode ? '✓ Demo Mode' : '✓ Configured') : '✗ Not Configured'}
          </span>
        </div>
      </div>
      {isDemoMode && (
        <div className="mt-4 pt-4 border-t border-gray-700 text-xs text-gray-400">
          <p>Demo mode: Using mock data for all integrations. Add real API keys in .env.local for production.</p>
        </div>
      )}
    </div>
  );
}
