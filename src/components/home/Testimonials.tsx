export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Rasayani',
      rating: 5,
      comment: 'Excellent service! The cleaning professional was thorough and professional. My home has never looked better.',
      service: 'Home Cleaning'
    },
    {
      name: 'Rahul Patel',
      location: 'Rasayani',
      rating: 5,
      comment: 'Quick and reliable AC repair service. The technician diagnosed the issue immediately and fixed it at a reasonable price.',
      service: 'AC Repair'
    },
    {
      name: 'Anjali Mehta',
      location: 'Rasayani',
      rating: 4,
      comment: 'Great plumbing service. They arrived on time and fixed the leaking tap efficiently. Would recommend!',
      service: 'Plumbing'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Real reviews from real customers in Rasayani
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl font-bold text-blue-600">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "{testimonial.comment}"
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Service: {testimonial.service}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
