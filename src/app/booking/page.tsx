import { Suspense } from 'react';
import BookingPage from './booking-client';

export default function BookingRoute() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-gray-600">Loading booking...</p>
        </div>
      }
    >
      <BookingPage />
    </Suspense>
  );
}
