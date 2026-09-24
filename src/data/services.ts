import { Service, ServiceCategory, Offer, Coupon } from '@/types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: '🧹',
    image: '/images/categories/cleaning.jpg',
    subcategories: ['Home Cleaning', 'Deep Cleaning', 'Kitchen Cleaning', 'Bathroom Cleaning']
  },
  {
    id: 'appliances',
    name: 'Appliances',
    icon: '🔧',
    image: '/images/categories/appliances.jpg',
    subcategories: ['AC Repair', 'Refrigerator', 'Washing Machine', 'Microwave']
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: '🚿',
    image: '/images/categories/plumbing.jpg',
    subcategories: ['Tap Repair', 'Pipe Repair', 'Drain Cleaning', 'Water Heater']
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: '⚡',
    image: '/images/categories/electrical.jpg',
    subcategories: ['Fan Repair', 'Switch Repair', 'Wiring', 'Inverter']
  },
  {
    id: 'beauty',
    name: 'Beauty & Wellness',
    icon: '💆',
    image: '/images/categories/beauty.jpg',
    subcategories: ['Haircut', 'Facial', 'Massage', 'Manicure']
  },
  {
    id: 'painting',
    name: 'Painting',
    icon: '🎨',
    image: '/images/categories/painting.jpg',
    subcategories: ['Wall Painting', 'Waterproofing', 'Texture Design']
  }
];

export const services: Service[] = [
  {
    id: 'home-cleaning-basic',
    name: 'Home Cleaning - Basic',
    category: 'cleaning',
    subcategory: 'Home Cleaning',
    description: 'Professional home cleaning service for a spotless living space',
    images: ['/images/services/home-cleaning.jpg'],
    rating: 4.8,
    reviewCount: 1250,
    startingPrice: 499,
    originalPrice: 699,
    estimatedDuration: '2-3 hours',
    whatIncluded: [
      'Dusting of all rooms',
      'Sweeping and mopping',
      'Bathroom cleaning',
      'Kitchen cleaning',
      'Trash removal'
    ],
    whatNotIncluded: [
      'Deep stain removal',
      'Window cleaning',
      'Carpet cleaning'
    ],
    addOns: [
      { id: 'window-cleaning', name: 'Window Cleaning', price: 199, description: 'Interior window cleaning' },
      { id: 'carpet-cleaning', name: 'Carpet Cleaning', price: 299, description: 'Vacuum and spot cleaning' }
    ],
    isInstant: false,
    isAvailable: true
  },
  {
    id: 'ac-repair-basic',
    name: 'AC Repair - Basic',
    category: 'appliances',
    subcategory: 'AC Repair',
    description: 'Expert AC repair and maintenance service',
    images: ['/images/services/ac-repair.jpg'],
    rating: 4.7,
    reviewCount: 890,
    startingPrice: 349,
    estimatedDuration: '1-2 hours',
    whatIncluded: [
      'AC inspection',
      'Gas top-up if needed',
      'Filter cleaning',
      'Basic troubleshooting'
    ],
    whatNotIncluded: [
      'Compressor replacement',
      'Major part replacement'
    ],
    addOns: [
      { id: 'gas-refill', name: 'Gas Refill', price: 1499, description: 'Complete gas refill' },
      { id: 'deep-cleaning', name: 'Deep Cleaning', price: 599, description: 'Thorough AC cleaning' }
    ],
    isInstant: true,
    isAvailable: true
  },
  {
    id: 'plumbing-tap-repair',
    name: 'Tap Repair & Installation',
    category: 'plumbing',
    subcategory: 'Tap Repair',
    description: 'Fix leaking taps and install new ones',
    images: ['/images/services/plumbing.jpg'],
    rating: 4.6,
    reviewCount: 567,
    startingPrice: 199,
    estimatedDuration: '30-60 minutes',
    whatIncluded: [
      'Tap inspection',
      'Repair of leaking taps',
      'New tap installation',
      'Basic pipe check'
    ],
    whatNotIncluded: [
      'Major pipe replacement',
      'Water tank repair'
    ],
    isInstant: true,
    isAvailable: true
  },
  {
    id: 'electrical-fan-repair',
    name: 'Ceiling Fan Repair',
    category: 'electrical',
    subcategory: 'Fan Repair',
    description: 'Professional ceiling fan repair and maintenance',
    images: ['/images/services/electrical.jpg'],
    rating: 4.5,
    reviewCount: 423,
    startingPrice: 249,
    estimatedDuration: '45-60 minutes',
    whatIncluded: [
      'Fan inspection',
      'Motor repair',
      'Balancing',
      'Noise reduction'
    ],
    whatNotIncluded: [
      'New fan installation',
      'Wiring changes'
    ],
    isInstant: true,
    isAvailable: true
  },
  {
    id: 'beauty-haircut',
    name: 'Haircut for Men',
    category: 'beauty',
    subcategory: 'Haircut',
    description: 'Professional haircut and grooming service at home',
    images: ['/images/services/haircut.jpg'],
    rating: 4.9,
    reviewCount: 780,
    startingPrice: 299,
    estimatedDuration: '30-45 minutes',
    whatIncluded: [
      'Professional haircut',
      'Hair wash',
      'Styling',
      'Beard trim if needed'
    ],
    whatNotIncluded: [
      'Hair coloring',
      'Hair spa'
    ],
    addOns: [
      { id: 'beard-trim', name: 'Beard Trim', price: 99, description: 'Professional beard trimming' },
      { id: 'facial', name: 'Basic Facial', price: 399, description: 'Refreshing facial treatment' }
    ],
    isInstant: false,
    isAvailable: true
  },
  {
    id: 'painting-room',
    name: 'Room Painting',
    category: 'painting',
    subcategory: 'Wall Painting',
    description: 'Professional room painting service',
    images: ['/images/services/painting.jpg'],
    rating: 4.7,
    reviewCount: 345,
    startingPrice: 2999,
    estimatedDuration: '1-2 days',
    whatIncluded: [
      'Surface preparation',
      'Primer application',
      '2 coats of paint',
      'Basic cleanup'
    ],
    whatNotIncluded: [
      'Wall repair',
      'Texture painting',
      'Moving furniture'
    ],
    addOns: [
      { id: 'wall-repair', name: 'Wall Repair', price: 999, description: 'Minor wall repairs' },
      { id: 'texture', name: 'Texture Design', price: 1499, description: 'Basic texture work' }
    ],
    isInstant: false,
    isAvailable: true
  }
];

export const offers: Offer[] = [
  {
    id: 'offer-1',
    title: 'First Booking Discount',
    description: 'Get 20% off on your first booking',
    image: '/images/offers/first-booking.jpg',
    discountType: 'percentage',
    discountValue: 20,
    minOrderValue: 299,
    maxDiscount: 200,
    validUntil: '2024-12-31',
    terms: [
      'Valid for first-time users only',
      'Minimum order value ₹299',
      'Maximum discount ₹200',
      'Cannot be combined with other offers'
    ]
  },
  {
    id: 'offer-2',
    title: 'Weekend Special',
    description: 'Flat ₹150 off on weekend bookings',
    image: '/images/offers/weekend.jpg',
    discountType: 'fixed',
    discountValue: 150,
    minOrderValue: 499,
    validUntil: '2024-12-31',
    terms: [
      'Valid on Saturday and Sunday bookings',
      'Minimum order value ₹499',
      'Cannot be combined with other offers'
    ]
  },
  {
    id: 'offer-3',
    title: 'Cleaning Bundle',
    description: 'Book 3 cleaning services, get 1 free',
    image: '/images/offers/cleaning-bundle.jpg',
    discountType: 'percentage',
    discountValue: 33,
    minOrderValue: 1497,
    maxDiscount: 499,
    validUntil: '2024-12-31',
    terms: [
      'Valid only for cleaning services',
      'Must book 3 services in one transaction',
      'Free service will be the lowest priced'
    ],
    services: ['cleaning']
  }
];

export const coupons: Coupon[] = [
  {
    id: 'coupon-1',
    code: 'HOMIFY20',
    description: '20% off on all services',
    discountType: 'percentage',
    discountValue: 20,
    minOrderValue: 499,
    maxDiscount: 300,
    validUntil: '2024-12-31',
    usageLimit: 1000,
    usedCount: 456
  },
  {
    id: 'coupon-2',
    code: 'CLEAN100',
    description: '₹100 off on cleaning services',
    discountType: 'fixed',
    discountValue: 100,
    minOrderValue: 399,
    validUntil: '2024-12-31',
    usageLimit: 500,
    usedCount: 234
  },
  {
    id: 'coupon-3',
    code: 'WELCOME50',
    description: '₹50 off on first booking',
    discountType: 'fixed',
    discountValue: 50,
    minOrderValue: 199,
    validUntil: '2024-12-31',
    usageLimit: 2000,
    usedCount: 1567
  }
];
