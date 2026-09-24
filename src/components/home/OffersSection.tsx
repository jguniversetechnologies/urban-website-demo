import Link from 'next/link';
import { offers } from '@/data/services';

export default function OffersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Today's Best Offers
            </h2>
            <p className="text-lg text-gray-600">
              Save more on your favorite services
            </p>
          </div>
          <Link
            href="/offers"
            className="hidden md:block text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All Offers →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {offer.discountType === 'percentage' ? `${offer.discountValue}% OFF` : `₹${offer.discountValue} OFF`}
                </div>
                <span className="text-sm text-gray-500">
                  Valid until {new Date(offer.validUntil).toLocaleDateString()}
                </span>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {offer.description}
              </p>
              <div className="text-sm text-gray-500 mb-4">
                {offer.minOrderValue && `Min order: ₹${offer.minOrderValue}`}
                {offer.maxDiscount && ` • Max discount: ₹${offer.maxDiscount}`}
              </div>
              <Link
                href="/services"
                className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition font-semibold"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/offers"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            View All Offers
          </Link>
        </div>
      </div>
    </section>
  );
}
