'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import { useSearchParams, useRouter } from 'next/navigation';
import { Address, TimeSlot } from '@/types';

export default function BookingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const serviceId = searchParams.get('service') || '';
  const addOnIds = searchParams.get('addons')?.split(',') || [];

  const service = services.find(s => s.id === serviceId);
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [customerNotes, setCustomerNotes] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userMobile, setUserMobile] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState('');

  // Mock data - in real app, this would come from API
  const addresses: Address[] = [
    {
      id: '1',
      type: 'home',
      houseFlat: '123',
      building: 'A Wing',
      locality: 'Sector 15, Rasayani',
      landmark: 'Near Market',
      latitude: 18.995,
      longitude: 73.185,
      isDefault: true
    }
  ];

  const timeSlots: TimeSlot[] = [
    { time: '09:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '12:00 PM', available: true },
    { time: '01:00 PM', available: true },
    { time: '02:00 PM', available: false },
    { time: '03:00 PM', available: true },
    { time: '04:00 PM', available: true },
    { time: '05:00 PM', available: true },
    { time: '06:00 PM', available: true }
  ];

  // Generate next 7 days
  const getNext7Days = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        date: date.toISOString().split('T')[0],
        display: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
      });
    }
    return days;
  };

  const availableDates = getNext7Days();

  const calculateTotal = () => {
    if (!service) return 0;
    let total = service.startingPrice;
    addOnIds.forEach(addOnId => {
      const addOn = service.addOns?.find(a => a.id === addOnId);
      if (addOn) total += addOn.price;
    });
    return total;
  };

  const handleNextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSendOtp = () => {
    if (userMobile.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    // In real app, this would send OTP via SMS
    setShowOtpInput(true);
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 4) {
      alert('Please enter a valid 4-digit OTP');
      return;
    }
    // In real app, this would verify OTP
    setIsAuthenticated(true);
    // Move to next step after successful authentication
    setStep(4);
  };

  const handleConfirmBooking = () => {
    // In real app, this would process payment and create booking
    alert('Booking confirmed! In production, this would process payment and create the booking.');
    router.push('/account/bookings');
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <button
            onClick={() => router.push('/services')}
            className="text-blue-600 hover:text-blue-700"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Book Service</h1>
          <p className="text-gray-600">{service.name}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                <div className={`flex-1 h-1 mx-2 ${
                  step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className={step >= 1 ? 'text-blue-600 font-medium' : 'text-gray-500'}>Date & Time</span>
            <span className={step >= 2 ? 'text-blue-600 font-medium' : 'text-gray-500'}>Address</span>
            <span className={step >= 3 ? 'text-blue-600 font-medium' : 'text-gray-500'}>Login</span>
            <span className={step >= 4 ? 'text-blue-600 font-medium' : 'text-gray-500'}>Review</span>
            <span className={step >= 5 ? 'text-blue-600 font-medium' : 'text-gray-500'}>Payment</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Select Date & Time</h2>

                <div className="mb-6">
                  <h3 className="font-medium text-gray-900 mb-3">Select Date</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {availableDates.map((date) => (
                      <button
                        key={date.date}
                        onClick={() => setSelectedDate(date.date)}
                        className={`p-4 rounded-lg border text-center transition ${
                          selectedDate === date.date
                            ? 'border-blue-500 bg-blue-50 text-blue-600'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-sm font-medium">{date.display}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Select Time Slot</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.time}
                        onClick={() => slot.available && setSelectedTime(slot.time)}
                        disabled={!slot.available}
                        className={`p-4 rounded-lg border text-center transition ${
                          selectedTime === slot.time
                            ? 'border-blue-500 bg-blue-50 text-blue-600'
                            : slot.available
                            ? 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <div className="font-medium">{slot.time}</div>
                        {!slot.available && (
                          <div className="text-xs text-gray-400 mt-1">Unavailable</div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Select Address</h2>

                <div className="space-y-3 mb-6">
                  {addresses.map((address) => (
                    <div
                      key={address.id}
                      onClick={() => setSelectedAddress(address)}
                      className={`border rounded-lg p-4 cursor-pointer transition ${
                        selectedAddress?.id === address.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className="text-lg mr-2">
                              {address.type === 'home' ? '🏠' : address.type === 'work' ? '💼' : '📍'}
                            </span>
                            <span className="font-medium text-gray-900 capitalize">{address.type}</span>
                            {address.isDefault && (
                              <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Default</span>
                            )}
                          </div>
                          <div className="text-gray-600">
                            {address.houseFlat}, {address.building}, {address.locality}
                          </div>
                          {address.landmark && (
                            <div className="text-sm text-gray-500">Landmark: {address.landmark}</div>
                          )}
                        </div>
                        <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                          selectedAddress?.id === address.id
                            ? 'bg-blue-500 border-blue-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedAddress?.id === address.id && (
                            <span className="text-white text-sm">✓</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-600 hover:border-blue-500 hover:text-blue-600 transition">
                  + Add New Address
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Login to Continue</h2>

                {!isAuthenticated ? (
                  <div className="space-y-6">
                    {!showOtpInput ? (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile Number
                        </label>
                        <div className="flex">
                          <div className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                            +91
                          </div>
                          <input
                            type="tel"
                            value={userMobile}
                            onChange={(e) => setUserMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                            placeholder="Enter 10-digit number"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            maxLength={10}
                          />
                        </div>
                        <button
                          onClick={handleSendOtp}
                          disabled={userMobile.length !== 10}
                          className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                          Send OTP
                        </button>
                      </div>
                    ) : (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Enter OTP
                        </label>
                        <div className="flex space-x-3 mb-4">
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
                                  const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
                                  nextInput?.focus();
                                }
                              }}
                              id={`otp-${index}`}
                              className="w-14 h-14 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                          ))}
                        </div>
                        <button
                          onClick={handleVerifyOtp}
                          disabled={otp.length !== 4}
                          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                          Verify & Continue
                        </button>
                        <button
                          onClick={() => {
                            setShowOtpInput(false);
                            setOtp('');
                          }}
                          className="w-full mt-3 text-gray-600 hover:text-gray-700 py-2"
                        >
                          Change mobile number
                        </button>
                      </div>
                    )}

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                      <div className="flex">
                        <span className="text-2xl mr-3">ℹ️</span>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">New to Homify?</h4>
                          <p className="text-sm text-gray-600">
                            No separate registration needed. Your account will be created automatically when you verify your OTP.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-3">✅</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Successfully Logged In</h3>
                    <p className="text-gray-600">Mobile: +91 {userMobile}</p>
                  </div>
                )}
              </div>
            )}

            {step === 4 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Review Booking</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Service Details</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="font-semibold text-gray-900">{service.name}</div>
                      <div className="text-sm text-gray-500 mt-1">Duration: {service.estimatedDuration}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Schedule</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-gray-900">{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                      <div className="text-gray-600">{selectedTime}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Address</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-gray-900">
                        {selectedAddress?.houseFlat}, {selectedAddress?.building}
                      </div>
                      <div className="text-gray-600">{selectedAddress?.locality}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Contact Number</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-gray-900">+91 {userMobile}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Special Instructions</h3>
                    <textarea
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      placeholder="Add any special instructions for the service provider..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apply Coupon
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={appliedCoupon}
                        onChange={(e) => setAppliedCoupon(e.target.value)}
                        placeholder="Enter coupon code"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
                        Apply
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">Payment Method</h3>
                    <div className="space-y-3">
                      <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition">
                        <input type="radio" name="payment" value="upi" className="mr-3" defaultChecked />
                        <span className="text-2xl mr-3">📱</span>
                        <div>
                          <div className="font-medium text-gray-900">UPI</div>
                          <div className="text-sm text-gray-500">Pay using any UPI app</div>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition">
                        <input type="radio" name="payment" value="card" className="mr-3" />
                        <span className="text-2xl mr-3">💳</span>
                        <div>
                          <div className="font-medium text-gray-900">Credit/Debit Card</div>
                          <div className="text-sm text-gray-500">Visa, Mastercard, RuPay</div>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition">
                        <input type="radio" name="payment" value="netbanking" className="mr-3" />
                        <span className="text-2xl mr-3">🏦</span>
                        <div>
                          <div className="font-medium text-gray-900">Net Banking</div>
                          <div className="text-sm text-gray-500">All major banks</div>
                        </div>
                      </label>

                      <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition">
                        <input type="radio" name="payment" value="cash" className="mr-3" />
                        <span className="text-2xl mr-3">💵</span>
                        <div>
                          <div className="font-medium text-gray-900">Cash After Service</div>
                          <div className="text-sm text-gray-500">Pay when service is completed</div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  onClick={handlePreviousStep}
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Previous
                </button>
              )}
              {step < 5 ? (
                <button
                  onClick={handleNextStep}
                  disabled={
                    (step === 1 && (!selectedDate || !selectedTime)) ||
                    (step === 2 && !selectedAddress) ||
                    (step === 3 && !isAuthenticated)
                  }
                  className="ml-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  {step === 3 ? 'Continue' : 'Next'}
                </button>
              ) : (
                <button
                  onClick={handleConfirmBooking}
                  className="ml-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
                >
                  Confirm & Pay ₹{calculateTotal()}
                </button>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">{service.name}</span>
                  <span className="font-medium text-gray-900">₹{service.startingPrice}</span>
                </div>

                {addOnIds.map(addOnId => {
                  const addOn = service.addOns?.find(a => a.id === addOnId);
                  if (!addOn) return null;
                  return (
                    <div key={addOnId} className="flex justify-between">
                      <span className="text-gray-600">{addOn.name}</span>
                      <span className="font-medium text-gray-900">₹{addOn.price}</span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">₹{calculateTotal()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Taxes & Charges</span>
                  <span className="text-gray-900">₹0</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount</span>
                    <span>-₹0</span>
                  </div>
                )}
                <div className="border-t pt-2 flex justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-bold text-gray-900">₹{calculateTotal()}</span>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                <p className="mb-2">✓ Free cancellation within 2 hours</p>
                <p>✓ Quality guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
