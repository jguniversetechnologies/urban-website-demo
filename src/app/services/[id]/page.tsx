'use client';

import { useState } from 'react';
import { services } from '@/data/services';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ServiceDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const serviceId = params.id as string;
  const service = services.find(s => s.id === serviceId);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link href="/services" className="text-blue-600 hover:text-blue-700">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const handleAddOnToggle = (addOnId: string) => {
    setSelectedAddOns(prev =>
      prev.includes(addOnId)
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const calculateTotal = () => {
    let total = service.startingPrice;
    service.addOns?.forEach(addOn => {
      if (selectedAddOns.includes(addOn.id)) {
        total += addOn.price;
      }
    });
    return total;
  };

  const handleBookNow = () => {
    // In a real app, this would check if user is authenticated
    // For demo, we'll proceed to booking flow
    router.push(`/booking?service=${serviceId}&addons=${selectedAddOns.join(',')}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/services" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
            ← Back to Services
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {service.name}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Service Image */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-8xl">🏠</span>
              </div>
            </div>

            {/* Service Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-2xl">★</span>
                    <span className="ml-2 text-2xl font-bold text-gray-900">{service.rating}</span>
                  </div>
                  <span className="mx-4 text-gray-300">|</span>
                  <span className="text-gray-600">{service.reviewCount} reviews</span>
                </div>
                {service.isInstant && (
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Instant Booking
                  </div>
                )}
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-2">Service Description</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">Duration</div>
                  <div className="font-semibold text-gray-900">{service.estimatedDuration}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm text-gray-500 mb-1">Starting Price</div>
                  <div className="font-semibold text-gray-900">₹{service.startingPrice}</div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included</h3>
              <ul className="space-y-2 mb-6">
                {service.whatIncluded.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Not Included</h3>
              <ul className="space-y-2">
                {service.whatNotIncluded.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✗</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add-ons */}
            {service.addOns && service.addOns.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Add-ons</h2>
                <div className="space-y-3">
                  {service.addOns.map(addOn => (
                    <div
                      key={addOn.id}
                      className={`border rounded-lg p-4 cursor-pointer transition ${
                        selectedAddOns.includes(addOn.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleAddOnToggle(addOn.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{addOn.name}</div>
                          {addOn.description && (
                            <div className="text-sm text-gray-500 mt-1">{addOn.description}</div>
                          )}
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="font-semibold text-gray-900">₹{addOn.price}</span>
                          <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                            selectedAddOns.includes(addOn.id)
                              ? 'bg-blue-500 border-blue-500'
                              : 'border-gray-300'
                          }`}>
                            {selectedAddOns.includes(addOn.id) && (
                              <span className="text-white text-sm">✓</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Requirements */}
            {service.requirements && service.requirements.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Service Requirements</h2>
                <ul className="space-y-2">
                  {service.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Book This Service</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Price</span>
                  <span className="font-semibold text-gray-900">₹{service.startingPrice}</span>
                </div>

                {selectedAddOns.map(addOnId => {
                  const addOn = service.addOns?.find(a => a.id === addOnId);
                  if (!addOn) return null;
                  return (
                    <div key={addOnId} className="flex justify-between">
                      <span className="text-gray-600">{addOn.name}</span>
                      <span className="font-semibold text-gray-900">₹{addOn.price}</span>
                    </div>
                  );
                })}

                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">₹{calculateTotal()}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleBookNow}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold mb-3"
              >
                Book Now
              </button>

              <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition font-semibold">
                Add to Favorites
              </button>

              <div className="mt-6 text-sm text-gray-500">
                <p className="mb-2">✓ Verified professionals</p>
                <p className="mb-2">✓ Quality guaranteed</p>
                <p className="mb-2">✓ Easy cancellation</p>
                <p>✓ Login via OTP (account created automatically)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
