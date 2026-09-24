import { Suspense } from 'react';
import ServicesPage from './services-client';

export default function ServicesRoute() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-gray-600">Loading services...</p>
        </div>
      }
    >
      <ServicesPage />
    </Suspense>
  );
}
