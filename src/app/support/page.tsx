'use client';

import { useState } from 'react';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showForm, setShowForm] = useState(false);

  const faqs = [
    {
      category: 'Booking',
      question: 'How do I book a service?',
      answer: 'You can book a service by browsing our services, selecting the one you need, choosing a convenient date and time, providing your address, and completing the payment. The entire process takes just a few minutes.'
    },
    {
      category: 'Booking',
      question: 'Can I reschedule my booking?',
      answer: 'Yes, you can reschedule your booking up to 2 hours before the scheduled time. Go to My Bookings, select the booking you want to reschedule, and choose a new date and time.'
    },
    {
      category: 'Payment',
      question: 'What payment methods are accepted?',
      answer: 'We accept UPI, Credit/Debit Cards, Net Banking, and Cash After Service. All digital payments are secure and processed through trusted payment gateways.'
    },
    {
      category: 'Payment',
      question: 'Is my payment information safe?',
      answer: 'Absolutely. We use industry-standard encryption and secure payment gateways to ensure your payment information is completely safe and never stored on our servers.'
    },
    {
      category: 'Service',
      question: 'What if I\'m not satisfied with the service?',
      answer: 'If you\'re not satisfied with the service, please contact us within 24 hours. We\'ll either re-do the service for free or provide a full refund, depending on the situation.'
    },
    {
      category: 'Service',
      question: 'Are your professionals verified?',
      answer: 'Yes, all our service professionals undergo rigorous background verification, skill assessment, and training before they start accepting bookings on our platform.'
    },
    {
      category: 'Cancellation',
      question: 'What is the cancellation policy?',
      answer: 'You can cancel your booking for free up to 2 hours before the scheduled time. Cancellations within 2 hours may incur a small fee. Refunds are processed within 5-7 business days.'
    },
    {
      category: 'General',
      question: 'How do I contact customer support?',
      answer: 'You can reach our customer support through the help section on our website/app, by email at support@homify.com, or by calling our helpline number. We\'re available 24/7.'
    }
  ];

  const categories = ['All', 'Booking', 'Payment', 'Service', 'Cancellation', 'General'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
          <p className="text-gray-600 mt-1">Find answers and get help</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!showForm ? (
          <>
            {/* Search */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQs */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-start mb-3">
                        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium mr-3">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Support */}
            <div className="mt-12 text-center">
              <div className="bg-blue-50 rounded-xl p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Still need help?</h3>
                <p className="text-gray-600 mb-4">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Support Form */
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setShowForm(false)}
              className="text-blue-600 hover:text-blue-700 mb-6 inline-block"
            >
              ← Back to FAQs
            </button>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select a category</option>
                    <option value="booking">Booking Issue</option>
                    <option value="payment">Payment Issue</option>
                    <option value="service">Service Quality</option>
                    <option value="provider">Provider Issue</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief description of your issue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Please provide detailed information about your issue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Attach Images (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <div className="text-4xl mb-2">📷</div>
                    <p className="text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500">PNG, JPG up to 5MB</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
