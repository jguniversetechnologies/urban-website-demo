// Third-Party Integrations Configuration
// This file contains configuration and utility functions for third-party services

// Google Maps Configuration
export const googleMapsConfig = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  libraries: ['places', 'geometry'],
  defaultLocation: {
    lat: 18.995,
    lng: 73.185
  }
};

// SMS/OTP Configuration
export const smsConfig = {
  provider: process.env.SMS_PROVIDER || 'twilio',
  apiKey: process.env.SMS_API_KEY || '',
  senderId: process.env.SMS_SENDER_ID || 'HOMIFY'
};

// Payment Gateway Configuration
export const paymentConfig = {
  provider: process.env.PAYMENT_PROVIDER || 'razorpay',
  apiKey: process.env.RAZORPAY_KEY_ID || '',
  apiSecret: process.env.RAZORPAY_KEY_SECRET || '',
  currency: 'INR'
};

// Firebase Configuration
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || ''
};

// Cloud Storage Configuration
export const storageConfig = {
  provider: process.env.STORAGE_PROVIDER || 'cloudinary',
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.CLOUDINARY_API_KEY || '',
  apiSecret: process.env.CLOUDINARY_API_SECRET || '',
  uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET || 'homify_uploads'
};

// Email Service Configuration
export const emailConfig = {
  provider: process.env.EMAIL_PROVIDER || 'resend',
  apiKey: process.env.EMAIL_API_KEY || '',
  fromEmail: process.env.FROM_EMAIL || 'noreply@homify.com',
  fromName: process.env.FROM_NAME || 'Homify'
};

// Analytics Configuration
export const analyticsConfig = {
  provider: process.env.ANALYTICS_PROVIDER || 'firebase',
  measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''
};

const integrationConfigs = {
  googleMaps: googleMapsConfig,
  sms: smsConfig,
  payment: paymentConfig,
  firebase: firebaseConfig,
  storage: storageConfig,
  email: emailConfig,
  analytics: analyticsConfig
};

// Helper function to check if integration is configured
export function isIntegrationConfigured(integration: keyof typeof integrationConfigs): boolean {
  const config = integrationConfigs[integration];
  if (!config) return false;

  // Check if any meaningful config value exists
  // For demo mode, consider it configured if any value exists (including demo values)
  return Object.values(config).some(value => 
    value !== '' && value !== undefined && value !== null
  );
}

// Get integration status
export function getIntegrationStatus() {
  return {
    googleMaps: isIntegrationConfigured('googleMaps'),
    sms: isIntegrationConfigured('sms'),
    payment: isIntegrationConfigured('payment'),
    firebase: isIntegrationConfigured('firebase'),
    storage: isIntegrationConfigured('storage'),
    email: isIntegrationConfigured('email'),
    analytics: isIntegrationConfigured('analytics')
  };
}
