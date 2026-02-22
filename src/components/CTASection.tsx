import { MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(270_60%_50%_/_0.3),_transparent_50%)]" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          {t("Let's Get Started", 'دعنا نبدأ')}
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          {t(
            'Ready to grow your project digitally?',
            'جاهز تبدأ في تطوير مشروعك رقميًا؟'
          )}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold"
            asChild
          >
            <a
              href="https://wa.me/201111245487?text=مرحباً، أريد حجز استشارة"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 h-5 w-5" />
              {t('Book a Consultation', 'احجز استشارة')}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a
              href="https://wa.me/201111245487?text=مرحباً، أريد التواصل معك"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t('WhatsApp Me', 'تواصل عبر واتساب')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
