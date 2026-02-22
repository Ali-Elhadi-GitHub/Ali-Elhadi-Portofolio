import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroProfile from '@/assets/ali-profile.jpg';
import { useLanguage } from '@/hooks/useLanguage';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
              {t('Muslim | Video Editor & Social Media Manager', 'مسلم | مونتير ومؤسس صفحات سوشيال ميديا')}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gradient-primary">{t('Ali Elhadi', 'علي الهادي')}</span>
              <span className="text-3xl md:text-4xl ml-3">🇵🇸</span>
            </h1>
            
            <p className="text-base text-muted-foreground/80">
              {t('Founder of Mohandes Business Channel', 'صاحب قناة مهندس بيزنس')}
            </p>
            
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-medium">
              {t(
                'I help doctors, educators, and business owners build and manage their digital presence professionally — from idea to execution with a clear and structured plan.',
                'أساعد الدكاترة، المدرسين، وأصحاب المشاريع على تأسيس وإدارة تواجدهم الرقمي باحتراف — من الفكرة إلى التنفيذ بخطة واضحة ومدروسة.'
              )}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                asChild
              >
                <a 
                  href="https://wa.me/201111245487?text=مرحباً، أريد أعرض عليك مشروعي"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('Show Me Your Project', 'اعرض عليّ مشروعك')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                asChild
              >
                <a 
                  href="https://wa.me/201111245487?text=مرحباً، أريد الاستفسار عن خدماتك"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t('WhatsApp Me', 'تواصل عبر واتساب')}
                </a>
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse-glow" />
              <img
                src={heroProfile}
                alt={t('Ali Elhadi - Digital Business Specialist', 'علي الهادي - متخصص في البيزنس الرقمي') as string}
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
