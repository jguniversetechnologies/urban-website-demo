export default function CancellationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Cancellation Policy</h1>
          <p className="text-gray-600 mt-1">Last updated: September 2024</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Timeframes</h2>
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">Free Cancellation</h3>
                <p className="text-gray-700">Cancel up to 2 hours before the scheduled service time for a full refund.</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Late Cancellation Fee</h3>
                <p className="text-gray-700">Cancellations within 2 hours of the scheduled time may incur a cancellation fee of up to 50% of the service amount.</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2">No Show</h3>
                <p className="text-gray-700">If you are not available at the scheduled time and the provider cannot perform the service, the full amount will be charged.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Cancel</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-600">
              <li>Go to "My Bookings" in your account</li>
              <li>Select the booking you want to cancel</li>
              <li>Click on "Cancel Booking"</li>
              <li>Select a reason for cancellation</li>
              <li>Confirm cancellation</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Refunds are processed within 5-7 business days</li>
              <li>Refunds are credited back to the original payment method</li>
              <li>You will receive a confirmation email once the refund is processed</li>
              <li>For cash payments, refunds are processed via bank transfer</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Provider Cancellations</h2>
            <p className="text-gray-600 mb-3">
              If a provider cancels the booking:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>You will receive a full refund automatically</li>
              <li>We will attempt to arrange an alternative provider if possible</li>
              <li>You can reschedule the booking at no additional cost</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Cancellations</h2>
            <p className="text-gray-600">
              In case of emergencies or unavoidable circumstances, please contact our customer support immediately. We will review each case on an individual basis and may waive cancellation fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              For cancellation-related queries, contact us at support@homify.com or call our helpline.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
