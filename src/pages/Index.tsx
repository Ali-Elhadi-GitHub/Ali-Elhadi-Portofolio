import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import IntroVideoSection from '@/components/IntroVideoSection';
import AboutSection from '@/components/AboutSection';
import StatsCounter from '@/components/StatsCounter';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseMe from '@/components/WhyChooseMe';
import PortfolioSection from '@/components/PortfolioSection';
import ReviewsSection from '@/components/ReviewsSection';
import ChannelSection from '@/components/ChannelSection';
import WorkflowSection from '@/components/WorkflowSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <IntroVideoSection />
        <AboutSection />
        <StatsCounter />
        <ServicesSection />
        <WhyChooseMe />
        <PortfolioSection />
        <ReviewsSection />
        <ChannelSection />
        <WorkflowSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
};

export default Index;
