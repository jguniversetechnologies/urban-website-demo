import { offers, coupons } from '@/data/services';
import Link from 'next/link';

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Offers & Coupons</h1>
          <p className="text-gray-600 mt-1">Save more on your favorite services</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Active Offers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gradient-to-br from-orange-100 to-red-100 h-32 flex items-center justify-center">
                  <span className="text-6xl">🎉</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {offer.discountType === 'percentage' ? `${offer.discountValue}% OFF` : `₹${offer.discountValue} OFF`}
                    </span>
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
              </div>
            ))}
          </div>
        </section>

        {/* Coupons */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Coupons</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="divide-y">
              {coupons.map((coupon) => (
                <div key={coupon.id} className="p-6 hover:bg-gray-50 transition">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded font-mono font-bold mr-3">
                          {coupon.code}
                        </div>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                          {coupon.discountType === 'percentage' ? `${coupon.discountValue}% OFF` : `₹${coupon.discountValue} OFF`}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{coupon.description}</h3>
                      <div className="text-sm text-gray-500 space-x-2">
                        {coupon.minOrderValue && <span>Min: ₹{coupon.minOrderValue}</span>}
                        {coupon.maxDiscount && <span>• Max: ₹{coupon.maxDiscount}</span>}
                        {coupon.usageLimit && <span>• {coupon.usageLimit - (coupon.usedCount || 0)} left</span>}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Link
                        href="/services"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                      >
                        Use Coupon
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Terms */}
        <section className="mt-12 bg-blue-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-3">Terms & Conditions</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Coupons are applicable only on selected services</li>
            <li>• One coupon can be used per booking</li>
            <li>• Coupons cannot be combined with other offers</li>
            <li>• Homify reserves the right to modify or cancel coupons at any time</li>
            <li>• Maximum discount cap applies as per coupon terms</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
