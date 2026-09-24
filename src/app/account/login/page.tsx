'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    if (mobileNumber.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowOtpInput(true);
    }, 1000);
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 4) {
      alert('Please enter a valid 4-digit OTP');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // In real app, this would verify OTP and create session
      router.push('/account/bookings');
    }, 1000);
  };

  const handleResendOtp = () => {
    alert('OTP resent successfully');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-3xl">H</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            {showOtpInput ? 'Verify OTP' : 'Login to Homify'}
          </h2>
          <p className="mt-2 text-gray-600">
            {showOtpInput
              ? 'Enter the 4-digit code sent to your mobile'
              : 'Enter your mobile number to continue'}
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm">
          {!showOtpInput ? (
            <div className="space-y-6">
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <div className="flex">
                  <div className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                    +91
                  </div>
                  <input
                    id="mobile"
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="Enter 10-digit number"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    maxLength={10}
                  />
                </div>
              </div>

              <button
                onClick={handleSendOtp}
                disabled={loading || mobileNumber.length !== 10}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter OTP
                </label>
                <div className="flex space-x-2">
                  {[0, 1, 2, 3].map((index) => (
                    <input
                      key={index}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={otp[index] || ''}
                      onChange={(e) => {
                        const newOtp = otp.split('');
                        newOtp[index] = e.target.value;
                        setOtp(newOtp.join(''));
                        // Auto-focus next input
                        if (e.target.value && index < 3) {
                          const nextInput = document.getElementById(`otp-${index + 1}`);
                          nextInput?.focus();
                        }
                      }}
                      id={`otp-${index}`}
                      className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <button
                    onClick={handleResendOtp}
                    className="text-blue-600 hover:text-blue-700 text-sm"
                  >
                    Resend OTP
                  </button>
                </div>
              </div>

              <button
                onClick={handleVerifyOtp}
                disabled={loading || otp.length !== 4}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {loading ? 'Verifying...' : 'Verify & Login'}
              </button>

              <button
                onClick={() => {
                  setShowOtpInput(false);
                  setOtp('');
                }}
                className="w-full text-gray-600 hover:text-gray-700 py-2"
              >
                Change mobile number
              </button>
            </div>
          )}
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>By continuing, you agree to Homify's</p>
          <div className="mt-1 space-x-2">
            <Link href="/legal/terms" className="text-blue-600 hover:text-blue-700">
              Terms of Service
            </Link>
            <span>&</span>
            <Link href="/legal/privacy" className="text-blue-600 hover:text-blue-700">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
