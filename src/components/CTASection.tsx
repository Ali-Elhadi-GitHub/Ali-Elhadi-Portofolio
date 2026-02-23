import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            {t("Let's Get Started", 'دعنا نبدأ')}
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            {t(
              'Ready to start developing your project digitally?',
              'جاهز تبدأ في تطوير مشروعك رقميًا؟'
            )}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground group"
              asChild
            >
              <a
                href="https://wa.me/201111245487?text=مرحباً، أريد حجز استشارة"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('Book a Consultation', 'احجز استشارة')}
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
      </div>
    </section>
  );
};

export default CTASection;
