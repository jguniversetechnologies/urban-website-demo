import HeroSection from '@/components/home/HeroSection';
import ServiceCategories from '@/components/home/ServiceCategories';
import PopularServices from '@/components/home/PopularServices';
import OffersSection from '@/components/home/OffersSection';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServiceCategories />
      <PopularServices />
      <OffersSection />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </div>
  );
}
