import Link from 'next/link';
import { services } from '@/data/services';
import Image from 'next/image';

export default function PopularServices() {
  const popularServices = services.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Popular Services
            </h2>
            <p className="text-lg text-gray-600">
              Most booked services by our customers
            </p>
          </div>
          <Link
            href="/services"
            className="hidden md:block text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All Services →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🏠</span>
                </div>
                {service.isInstant && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Instant
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition">
                  {service.name}
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 font-semibold text-gray-900">{service.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-gray-500 text-sm">{service.reviewCount} reviews</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">₹{service.startingPrice}</span>
                    {service.originalPrice && (
                      <span className="ml-2 text-gray-400 line-through">₹{service.originalPrice}</span>
                    )}
                  </div>
                  <span className="text-gray-500 text-sm">{service.estimatedDuration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
