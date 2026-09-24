export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Homify</h1>
          <p className="text-xl text-blue-100">
            Your trusted partner for professional home services
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Homify, we believe everyone deserves access to professional home services that are reliable, affordable, and convenient. Our mission is to connect customers with verified service professionals while ensuring quality, safety, and transparency.
              </p>
              <p className="text-gray-600">
                We started in Rasayani with a simple goal: make home services as easy as ordering food online. Today, we're proud to serve thousands of happy customers with our network of verified professionals.
              </p>
            </div>
            <div className="text-center">
              <div className="text-9xl">🏠</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Homify?</h2>
            <p className="text-gray-600">What sets us apart from the rest</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                ✅
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Verified Professionals</h3>
              <p className="text-gray-600">All our service providers go through rigorous background checks and skill verification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                💰
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden charges. Know exactly what you pay before booking</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                🛡️
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">Not satisfied? We'll re-do the service for free or refund your money</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                ⚡
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Quick Booking</h3>
              <p className="text-gray-600">Book services in minutes with our easy-to-use platform</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Verified Professionals</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100K+</div>
              <div className="text-gray-600">Services Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* How We Ensure Quality */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Ensure Quality</h2>
            <p className="text-gray-600">Our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Rigorous Vetting</h3>
              <p className="text-gray-600">
                Every professional undergoes background verification, skill assessment, and training before joining our platform
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Performance Monitoring</h3>
              <p className="text-gray-600">
                We continuously monitor ratings, reviews, and feedback to maintain high service standards
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">Ongoing Training</h3>
              <p className="text-gray-600">
                Regular training programs ensure our professionals stay updated with latest techniques and safety standards
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Area */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Coverage</h2>
            <p className="text-gray-600">Currently serving with plans to expand</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">📍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Rasayani</h3>
            <p className="text-gray-600 mb-4">Our primary service area with full coverage</p>
            <div className="text-sm text-gray-500">
              Coming soon to: Mumbai, Navi Mumbai, and other nearby areas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
