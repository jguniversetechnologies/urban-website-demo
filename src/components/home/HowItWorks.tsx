export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Choose Service',
      description: 'Browse and select from our wide range of professional home services',
      icon: '🔍'
    },
    {
      number: '2',
      title: 'Book & Pay',
      description: 'Schedule your preferred time slot and make secure payment online',
      icon: '📅'
    },
    {
      number: '3',
      title: 'Service Delivered',
      description: 'Our verified professional arrives and delivers quality service',
      icon: '✨'
    },
    {
      number: '4',
      title: 'Rate & Relax',
      description: 'Rate your experience and enjoy your newly serviced home',
      icon: '⭐'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Homify Works
          </h2>
          <p className="text-lg text-gray-600">
            Getting professional home services is easy in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-4xl mb-4">
                  {step.icon}
                </div>
                <div className="absolute top-0 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
