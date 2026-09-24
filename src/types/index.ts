// Service Types
export interface Service {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  images: string[];
  rating: number;
  reviewCount: number;
  startingPrice: number;
  originalPrice?: number;
  estimatedDuration: string;
  whatIncluded: string[];
  whatNotIncluded: string[];
  requirements?: string[];
  addOns?: AddOn[];
  isInstant?: boolean;
  isAvailable: boolean;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  image: string;
  subcategories?: string[];
}

// Location Types
export interface Location {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  isServiceAvailable: boolean;
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  houseFlat: string;
  building: string;
  locality: string;
  landmark?: string;
  latitude: number;
  longitude: number;
  isDefault: boolean;
}

// Booking Types
export interface Booking {
  id: string;
  serviceId: string;
  customerId: string;
  providerId?: string;
  address: Address;
  date: string;
  timeSlot: string;
  addOns: AddOn[];
  customerNotes?: string;
  status: 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
  totalAmount: number;
  discountAmount?: number;
  finalAmount: number;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  createdAt: string;
  updatedAt: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

// User Types
export interface Customer {
  id: string;
  mobileNumber: string;
  name?: string;
  email?: string;
  profileImage?: string;
  addresses: Address[];
  isVerified: boolean;
}

export interface Provider {
  id: string;
  name: string;
  mobileNumber: string;
  profileImage: string;
  rating: number;
  reviewCount: number;
  services: string[];
  isVerified: boolean;
  availability: boolean;
}

// Offer Types
export interface Offer {
  id: string;
  title: string;
  description: string;
  image: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minOrderValue?: number;
  maxDiscount?: number;
  validUntil: string;
  terms: string[];
  services?: string[];
}

export interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minOrderValue?: number;
  maxDiscount?: number;
  validUntil: string;
  usageLimit?: number;
  usedCount?: number;
}

// Review Types
export interface Review {
  id: string;
  customerId: string;
  customerName: string;
  customerImage?: string;
  rating: number;
  comment: string;
  createdAt: string;
  serviceId: string;
}

// Wallet Types
export interface Wallet {
  customerId: string;
  balance: number;
  transactions: WalletTransaction[];
}

export interface WalletTransaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  createdAt: string;
}

// Notification Types
export interface Notification {
  id: string;
  customerId: string;
  title: string;
  message: string;
  type: 'booking' | 'payment' | 'promotion' | 'support';
  isRead: boolean;
  createdAt: string;
}

// Support Types
export interface SupportRequest {
  id: string;
  customerId: string;
  category: string;
  subject: string;
  description: string;
  images?: string[];
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  createdAt: string;
  updatedAt: string;
}

// Provider Registration Types
export interface ProviderRegistration {
  id: string;
  name: string;
  mobileNumber: string;
  email?: string;
  services: string[];
  experience: string;
  address: string;
  kycDocuments: KYCDocument[];
  status: 'pending' | 'under_review' | 'approved' | 'rejected';
  submittedAt: string;
}

export interface KYCDocument {
  type: 'aadhaar' | 'pan' | 'driving_license' | 'other';
  documentNumber: string;
  documentImage: string;
}
