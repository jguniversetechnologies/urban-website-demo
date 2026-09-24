export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Terms & Conditions</h1>
          <p className="text-gray-600 mt-1">Last updated: September 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using Homify services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Accounts</h2>
            <p className="text-gray-600 mb-3">
              Users are responsible for maintaining the confidentiality of their account information and password. Users agree to accept responsibility for all activities that occur under their account.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>You must be at least 18 years old to use our services</li>
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Services</h2>
            <p className="text-gray-600 mb-3">
              Homify provides a platform connecting customers with service professionals. We strive to provide accurate information but do not guarantee the availability, quality, or suitability of any service.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Service availability may vary by location</li>
              <li>Prices are subject to change without notice</li>
              <li>We reserve the right to modify or discontinue services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Bookings & Payments</h2>
            <p className="text-gray-600 mb-3">
              All bookings are subject to availability and confirmation. Payment is required at the time of booking unless Cash After Service is selected.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Full payment is required to confirm bookings</li>
              <li>Refunds are processed according to our refund policy</li>
              <li>We use secure payment gateways for all transactions</li>
              <li>Additional charges may apply for certain services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cancellation Policy</h2>
            <p className="text-gray-600 mb-3">
              Customers may cancel bookings according to our cancellation policy. Please refer to our Cancellation Policy page for detailed information.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Free cancellation up to 2 hours before scheduled time</li>
              <li>Late cancellations may incur fees</li>
              <li>Provider cancellations are eligible for full refund</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Provider Terms</h2>
            <p className="text-gray-600 mb-3">
              Service professionals using our platform agree to additional terms regarding service quality, professional conduct, and payment processing.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Providers must maintain professional standards</li>
              <li>Timely arrival and service completion required</li>
              <li>Compliance with safety and quality standards</li>
              <li>Platform fees apply to all transactions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy Policy</h2>
            <p className="text-gray-600">
              Your use of Homify is also subject to our Privacy Policy. Please review our Privacy Policy, which also governs the platform and informs users of our data collection practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600">
              Homify shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600">
              Homify reserves the right to modify these terms at any time. We will notify users of any material changes via email or platform notification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-600">
              For questions about these Terms & Conditions, please contact us at support@homify.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
