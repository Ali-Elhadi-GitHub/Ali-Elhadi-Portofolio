import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroProfile from '@/assets/ali-profile.jpg';
import { useLanguage } from '@/hooks/useLanguage';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
              🇵🇸 {t('Business & Marketing Specialist', 'أخصائي أعمال وتسويق')}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight flex items-center gap-3">
              <span className="text-gradient-primary">Ali Elhadi</span>
              <span className="text-3xl md:text-4xl">🇵🇸</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-foreground/80 font-semibold">
              {t('Helping Entrepreneurs Build Online Businesses', 'مساعدة رواد الأعمال في بناء أعمال عبر الإنترنت')}
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('From idea to sales and beyond — I help you build systems that work.', 'من الفكرة إلى المبيعات وما بعدها — أساعدك في بناء أنظمة تعمل.')}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('Start Your Growth Journey', 'ابدأ رحلة نموك')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.open('https://wa.me/201111245487', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t('WhatsApp Me', 'تواصل معي')}
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse-glow" />
              <img
                src={heroProfile}
                alt="Ali Elhadi - Business & Marketing Specialist"
                className="relative rounded-full w-full h-full object-cover border-8 border-background shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
