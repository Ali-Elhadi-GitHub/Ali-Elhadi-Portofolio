import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollAnimation from '@/components/ScrollAnimation';

const HomeCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="scale">
          <div className="max-w-3xl mx-auto text-center p-12 md:p-16 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 border border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("Ready to Grow Your SaaS?", 'مستعد لتنمية مشروعك؟')}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                {t(
                  "Let's discuss your project and create a growth strategy that works.",
                  'دعنا نناقش مشروعك ونضع استراتيجية نمو فعّالة.'
                )}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25" asChild>
                  <a href="https://wa.me/201111245487?text=Hi%20Ali%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t("Let's Talk", 'تواصل معي')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HomeCTA;
