import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollAnimation from '@/components/ScrollAnimation';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
              {t('Start your SaaS journey', 'ابدأ رحلتك في SaaS')}
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              {t('Get your first clients and scale your business', 'احصل على أول عملائك ووسّع مشروعك')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group" asChild>
                <a href="https://wa.me/201111245487?text=مرحباً، أريد أبدأ رحلتي في SaaS" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t('Contact on WhatsApp', 'تواصل عبر واتساب')}
                </a>
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CTASection;
