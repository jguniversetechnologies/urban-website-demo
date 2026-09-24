# Homify Customer Website

A modern, responsive home services booking platform built with Next.js 16, TypeScript, and Tailwind CSS. Inspired by Urban Company, this website allows customers to discover, book, and manage home services online.

## 🚀 Features

### Customer-Facing Features
- **Home Page**: Location selection, service discovery, popular services, offers, and testimonials
- **Service Categories**: Browse services by category (Cleaning, Appliances, Plumbing, Electrical, Beauty, Painting)
- **Service Listings**: Search, filter, and sort services with ratings, reviews, and pricing
- **Service Details**: Detailed service information with add-ons and booking options
- **Booking Flow**: Complete 4-step booking process (Date/Time → Address → Review → Payment)
- **Customer Account**: Mobile OTP login, booking management, and history
- **Offers & Coupons**: Promotional offers and discount coupons
- **Provider Registration**: Become a service provider registration form
- **Support**: FAQ section and support request form
- **Legal Pages**: Terms & Conditions, Privacy Policy

### Technical Features
- **Modern Stack**: Next.js 16 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with full mobile optimization
- **Type Safety**: Comprehensive TypeScript type definitions
- **Component Architecture**: Organized, reusable React components
- **Mock Data**: Complete mock data for services, categories, and offers
- **Integration Ready**: Structure for third-party integrations (Google Maps, SMS, Payment, etc.)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
cd homify-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Fill in your API keys in `.env.local` (optional for development with mock data)

## 🚀 Running the Application

### Development Mode (Demo)
```bash
pnpm dev
```
The application will be available at `http://localhost:3000`

**Demo Mode**: The project includes a `.env.local` file with dummy values for demonstration purposes. This allows the website to run without requiring actual API keys. All integrations will show as "Demo Mode" and use mock data.

### Production Build
```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
homify-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── account/           # Account pages (login, bookings)
│   │   ├── become-provider/   # Provider registration
│   │   ├── booking/           # Booking flow
│   │   ├── legal/             # Legal pages
│   │   ├── offers/            # Offers and coupons
│   │   ├── services/          # Service pages
│   │   ├── support/           # Help and support
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── common/           # Shared components
│   │   ├── home/             # Home page components
│   │   ├── layout/           # Header, Footer
│   │   ├── services/         # Service-related components
│   │   ├── booking/          # Booking components
│   │   ├── account/          # Account components
│   │   └── provider/         # Provider components
│   ├── data/                 # Mock data
│   │   └── services.ts       # Services, categories, offers
│   ├── lib/                  # Utilities and configurations
│   │   └── integrations.ts   # Third-party integration configs
│   └── types/                # TypeScript types
│       └── index.ts          # Type definitions
├── public/                   # Static assets
├── env.example              # Environment variables template
└── package.json
```

## 🔧 Third-Party Integrations

The website is structured to support the following integrations:

### Required for Production
- **Google Maps**: Location services and address selection
- **SMS/OTP**: Authentication (Twilio recommended)
- **Payment Gateway**: Payment processing (Razorpay recommended)
- **Cloud Storage**: Image uploads (Cloudinary recommended)
- **Firebase**: Push notifications (FCM)

### Optional
- **Email Service**: Transactional emails (Resend recommended)
- **Analytics**: User analytics (Google Analytics/Firebase)

### Setup Instructions

1. Copy `env.example` to `.env.local`
2. Fill in the required API keys
3. Install integration packages:
```bash
npm install @googlemaps/js-api-loader razorpay twilio cloudinary resend firebase
```

## 🎨 Design Features

- **Color Scheme**: Blue primary brand color with gray neutrals
- **Typography**: Clean, modern fonts
- **Responsive**: Mobile-first design approach
- **Accessibility**: High contrast ratios and semantic HTML
- **Performance**: Optimized images and lazy loading

## 📱 Mobile Responsiveness

All pages are fully responsive with:
- Mobile navigation menu
- Touch-friendly buttons and inputs
- Optimized layouts for different screen sizes
- Mobile-specific booking flow

## 🔐 Security Features

- Environment variable configuration for sensitive data
- OTP-based authentication
- Secure payment processing
- Data encryption in transit

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted VPS

## 📝 Development Notes

- The application uses mock data for development
- Replace mock data with API calls for production
- All booking flows are client-side simulations
- Implement actual authentication and payment processing for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is proprietary software for Homify.

## 📞 Support

For support, email support@homify.com or visit our help center.

## 🗺️ Roadmap

### Phase 2 Features
- Real-time provider tracking
- Video consultations
- Subscription/membership plans
- Advanced analytics dashboard
- Multi-language support
- Expanded service areas

### Phase 3 Features
- AI-powered recommendations
- Smart scheduling
- Provider marketplace
- Corporate accounts
- Bulk booking
- Integration with smart home devices
