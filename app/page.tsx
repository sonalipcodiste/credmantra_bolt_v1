import HeroSection from '@/components/sections/Hero';
import StatsSection from '@/components/sections/Stats';
import FeatureSection from '@/components/sections/Features';
import BenefitsSection from '@/components/sections/Benefits';
import ProcessSection from '@/components/sections/Process';
import CTASection from '@/components/sections/CTA';
import AboutSection from '@/components/sections/About';
import ContactSection from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <BenefitsSection />
      <ProcessSection />
      <CTASection />
      <AboutSection />
      <ContactSection />
    </>
  );
}