<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `node_modules/next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at this file from `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with this work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Homify Website - Project Information

## Overview
This is the Homify Customer Website built with Next.js 16, TypeScript, and Tailwind CSS. It's designed to provide a Urban Company-style home services booking platform.

## Development Commands
- `npm run dev` - Start development server (runs on port 3000 or next available)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure
- `src/app/` - Next.js App Router pages
- `src/components/` - React components organized by feature
- `src/lib/` - Utility functions and configurations
- `src/types/` - TypeScript type definitions
- `src/data/` - Mock data for services, categories, offers, etc.

## Key Features Implemented
- Home page with location selection and service discovery
- Service categories and listing pages
- Service details with booking flow
- Customer account pages (login, bookings)
- Booking system with date/time selection, address, OTP login, review, and payment
- Offers and coupons section
- Become a Provider registration
- About, Support, and Legal pages
- Responsive design with mobile optimization

## Authentication Flow
- Users must login via OTP before completing booking
- No separate registration needed - automatic account creation on first OTP login
- 5-step booking process: Date/Time → Address → Login (OTP) → Review → Payment
- Matches Urban Company-style authentication flow

## Third-Party Integrations Structure
Configuration files are set up in `src/lib/integrations.ts` and `env.example` for:
- Google Maps (location services)
- SMS/OTP (authentication)
- Payment Gateway (Razorpay)
- Firebase (FCM notifications)
- Cloud Storage (Cloudinary)
- Email Service (Resend)
- Analytics

## Current Status
The website is functional with mock data. To enable real third-party integrations:
1. Copy `env.example` to `.env.local`
2. Fill in actual API keys and configuration values
3. Install required packages for each integration

## Mobile Responsiveness
All pages are designed to be fully responsive with mobile-first approach using Tailwind CSS breakpoints.
