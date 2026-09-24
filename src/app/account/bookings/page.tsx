'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Mock data - in real app, this would come from API
  const bookings = [
    {
      id: 'HMF-12345',
      service: 'Home Cleaning - Basic',
      date: '2024-09-25',
      time: '10:00 AM',
      status: 'confirmed',
      provider: {
        name: 'Rajesh Kumar',
        rating: 4.8,
        image: ''
      },
      address: '123, A Wing, Sector 15, Rasayani',
      amount: 499
    },
    {
      id: 'HMF-12346',
      service: 'AC Repair - Basic',
      date: '2024-09-28',
      time: '02:00 PM',
      status: 'pending',
      provider: null,
      address: '123, A Wing, Sector 15, Rasayani',
      amount: 349
    }
  ];

  const pastBookings = [
    {
      id: 'HMF-12340',
      service: 'Plumbing - Tap Repair',
      date: '2024-09-15',
      time: '11:00 AM',
      status: 'completed',
      provider: {
        name: 'Suresh Patel',
        rating: 4.6,
        image: ''
      },
      address: '123, A Wing, Sector 15, Rasayani',
      amount: 199
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'completed':
        return 'bg-blue-100 text-blue-700';
      case 'cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const displayBookings = activeTab === 'upcoming' ? bookings : pastBookings;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
              <p className="text-gray-600 mt-1">Manage your service bookings</p>
            </div>
            <Link
              href="/services"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Book New Service
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              activeTab === 'upcoming'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              activeTab === 'past'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Past Bookings
          </button>
        </div>

        {/* Bookings List */}
        {displayBookings.length > 0 ? (
          <div className="space-y-4">
            {displayBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{booking.service}</h3>
                        <p className="text-sm text-gray-500 mt-1">Booking ID: {booking.id}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-gray-500">Date & Time</div>
                        <div className="font-medium text-gray-900">
                          {new Date(booking.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric'
                          })} at {booking.time}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Address</div>
                        <div className="font-medium text-gray-900">{booking.address}</div>
                      </div>
                    </div>

                    {booking.provider && (
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                          {booking.provider.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <div className="font-medium text-gray-900">{booking.provider.name}</div>
                          <div className="text-sm text-gray-500">
                            ★ {booking.provider.rating} • Service Provider
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500">Amount Paid</span>
                        <div className="font-bold text-gray-900">₹{booking.amount}</div>
                      </div>
                      <div className="flex space-x-2">
                        {activeTab === 'upcoming' && booking.status === 'confirmed' && (
                          <>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
                              Reschedule
                            </button>
                            <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition text-sm font-medium">
                              Cancel
                            </button>
                          </>
                        )}
                        {activeTab === 'past' && booking.status === 'completed' && (
                          <>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                              Book Again
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
                              Write Review
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No {activeTab} bookings</h3>
            <p className="text-gray-600 mb-4">
              {activeTab === 'upcoming'
                ? "You don't have any upcoming bookings"
                : "You don't have any past bookings"}
            </p>
            <Link
              href="/services"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Book a Service
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
