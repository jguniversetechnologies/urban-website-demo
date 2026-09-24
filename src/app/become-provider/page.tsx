'use client';

import { useState } from 'react';
import { serviceCategories } from '@/data/services';

export default function BecomeProviderPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    services: [] as string[],
    experience: '',
    address: ''
  });

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, this would submit to API
    alert('Application submitted successfully! We will review your application and contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Become a Homify Provider
              </h1>
              <p className="text-xl text-green-100 mb-6">
                Join our network of verified professionals and grow your business with regular bookings
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">₹50K+</div>
                  <div className="text-green-100">Monthly Earning</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-green-100">Active Providers</div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-8xl">👷</div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Homify?</h2>
            <p className="text-gray-600">Benefits of becoming a Homify service provider</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                💰
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Regular Income</h3>
              <p className="text-gray-600">Get consistent bookings and grow your earnings with our platform</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                ⏰
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Work when you want with complete control over your availability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                🛡️
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Secure Payments</h3>
              <p className="text-gray-600">Get paid on time with our secure payment system</p>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Register as Provider</h2>
            <p className="text-gray-600">Fill in your details to start your journey with Homify</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <div className="flex">
                  <div className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                    +91
                  </div>
                  <input
                    type="tel"
                    required
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({...formData, mobileNumber: e.target.value.replace(/\D/g, '').slice(0, 10)})}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter 10-digit number"
                    maxLength={10}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Services You Offer *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {serviceCategories.map(category => (
                    <label key={category.id} className="flex items-center p-3 border rounded-lg cursor-pointer hover:border-green-500 transition">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(category.id)}
                        onChange={() => handleServiceToggle(category.id)}
                        className="mr-3"
                      />
                      <span className="text-2xl mr-2">{category.icon}</span>
                      <span className="font-medium text-gray-900">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Address *
                </label>
                <textarea
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your complete service address"
                  rows={3}
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex">
                  <span className="text-2xl mr-3">📋</span>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Required Documents</h4>
                    <p className="text-sm text-gray-600">
                      After submitting this form, you'll need to provide KYC documents (Aadhaar, PAN) for verification.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Download App Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Manage Your Jobs with the Provider App
                </h2>
                <p className="text-green-100 mb-6">
                  Download the Homify Provider App to manage bookings, track earnings, and update your availability on the go.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-900 transition">
                    <span className="text-sm">Google Play</span>
                  </a>
                  <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-900 transition">
                    <span className="text-sm">App Store</span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl">📱</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
