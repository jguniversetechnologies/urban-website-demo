'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Rasayani');
  const router = useRouter();
  const locationDropdownRef = useRef<HTMLDivElement>(null);

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    setIsLocationDropdownOpen(false);
    // In a real app, this would check service availability
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target as Node)) {
        setIsLocationDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when clicking a link
  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Homify</span>
          </Link>

          {/* Location Selector */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative" ref={locationDropdownRef}>
              <button
                onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700 font-medium">{selectedLocation}</span>
                <svg className={`w-4 h-4 text-gray-500 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLocationDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <input
                      type="text"
                      placeholder="Search location..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    onClick={() => handleLocationChange('Rasayani')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700 flex items-center"
                  >
                    <span className="mr-2">📍</span> Rasayani
                  </button>
                  <button
                    onClick={() => handleLocationChange('Mumbai')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700 flex items-center"
                  >
                    <span className="mr-2">📍</span> Mumbai
                  </button>
                  <button
                    onClick={() => handleLocationChange('Navi Mumbai')}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700 flex items-center"
                  >
                    <span className="mr-2">📍</span> Navi Mumbai
                  </button>
                  <div className="px-4 py-2 border-t border-gray-100 text-sm text-gray-500">
                    More locations coming soon
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Services
            </Link>
            <Link href="/offers" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Offers
            </Link>
            <Link href="/become-provider" className="text-gray-700 hover:text-blue-600 font-medium transition">
              Become a Provider
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">
              About
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/account/login"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Login
            </Link>
            <Link
              href="/account/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <div className="px-4">
                <input
                  type="text"
                  placeholder="Search location..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <Link href="/services" onClick={handleMobileMenuClick} className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                Services
              </Link>
              <Link href="/offers" onClick={handleMobileMenuClick} className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                Offers
              </Link>
              <Link href="/become-provider" onClick={handleMobileMenuClick} className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                Become a Provider
              </Link>
              <Link href="/about" onClick={handleMobileMenuClick} className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                About
              </Link>
              <div className="border-t border-gray-200 pt-4">
                <Link href="/account/login" onClick={handleMobileMenuClick} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  Login
                </Link>
                <Link href="/account/login" onClick={handleMobileMenuClick} className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
