import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { SolutionSection } from '@/components/solution-section';
import { BeforeAfterSection } from '@/components/before-after-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FeaturesSection } from '@/components/features-section';
import { PricingSection } from '@/components/pricing-section';
import { FAQSection } from '@/components/faq-section';
import { WhatsAppFloatButton } from '@/components/whatsapp-float-button';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div>
        <HeroSection />
        <SolutionSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
        <Footer />
      </div>
      
      {/* WhatsApp Float Button */}
      <WhatsAppFloatButton />
    </div>
  );
}
