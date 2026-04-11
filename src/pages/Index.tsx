import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PinnedBioSection from '@/components/PinnedBioSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseMe from '@/components/WhyChooseMe';
import ProjectsSection from '@/components/ProjectsSection';
import ReviewsSection from '@/components/ReviewsSection';
import SocialLinksSection from '@/components/SocialLinksSection';
import ChannelSection from '@/components/ChannelSection';
import HowIWorkSection from '@/components/HowIWorkSection';
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
        <PinnedBioSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <WhyChooseMe />
        <ProjectsSection />
        <ReviewsSection />
        <SocialLinksSection />
        <ChannelSection />
        <HowIWorkSection />
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
