
import { HeroSection } from '@/components/home/hero-section';
import { ServicesOverview } from '@/components/home/services-overview';
import { WhyChooseUs } from '@/components/home/why-choose-us';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
    </>
  );
}
