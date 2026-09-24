export default function RefundPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Refund Policy</h1>
          <p className="text-gray-600 mt-1">Last updated: September 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Eligibility</h2>
            <p className="text-gray-600 mb-3">
              You are eligible for a refund in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Service cancelled within the free cancellation period</li>
              <li>Provider cancels the booking</li>
              <li>Service is not performed as described</li>
              <li>Quality issues that cannot be resolved</li>
              <li>Technical issues preventing service delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Submit a refund request through "My Bookings" or contact support</li>
              <li>Our team will review your request within 24-48 hours</li>
              <li>If approved, refund will be processed within 5-7 business days</li>
              <li>You will receive confirmation via email and SMS</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Timeline</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-32 font-medium text-gray-900">Digital Payments</div>
                <div className="text-gray-600">5-7 business days to original payment method</div>
              </div>
              <div className="flex items-start">
                <div className="w-32 font-medium text-gray-900">Cash Payments</div>
                <div className="text-gray-600">7-10 business days via bank transfer</div>
              </div>
              <div className="flex items-start">
                <div className="w-32 font-medium text-gray-900">Wallet Credits</div>
                <div className="text-gray-600">Instant credit to Homify wallet</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Partial Refunds</h2>
            <p className="text-gray-600 mb-3">
              Partial refunds may be issued in the following cases:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Service was partially completed</li>
              <li>Some add-ons were not provided</li>
              <li>Late cancellation with applicable fee</li>
              <li>Service quality issues with partial compensation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Refundable Situations</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Cancellations after the free cancellation period (with applicable fee)</li>
              <li>No-show at scheduled time</li>
              <li>Requests made after service completion</li>
              <li>Change of mind after service has started</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
            <p className="text-gray-600 mb-3">
              If your refund request is denied, you can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Request a review by our customer support team</li>
              <li>Provide additional evidence or documentation</li>
              <li>Escalate to our dispute resolution team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Special Cases</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Service Quality Issues</h3>
              <p className="text-gray-700">
                If you're not satisfied with the service quality, we will first attempt to resolve the issue by re-doing the service or providing compensation. Refunds are considered only when resolution is not possible.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600">
              For refund-related queries, contact us at support@homify.com or call our helpline. Our team is available 24/7 to assist you.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
