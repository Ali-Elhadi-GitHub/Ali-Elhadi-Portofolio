import { MessageCircle, TrendingUp, Video, Mic, Share2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollAnimation from '@/components/ScrollAnimation';

const PinnedBioSection = () => {
  const { t } = useLanguage();

  const points = [
    {
      icon: TrendingUp,
      en: { label: 'SaaS Growth', desc: 'From 0 to first 10 customers with a clear plan' },
      ar: { label: 'SaaS Growth', desc: 'من 0 لأول 10 عملاء بخطة مدروسة' },
    },
    {
      icon: Share2,
      en: { label: 'B2B Sales', desc: 'Pipeline → CRM → Closing deals' },
      ar: { label: 'B2B Sales', desc: 'Pipeline → CRM → إغلاق صفقات' },
    },
    {
      icon: Video,
      en: { label: 'Editing + Voice Over', desc: 'Content that sells, not just gets views' },
      ar: { label: 'مونتاج + تعليق صوتي', desc: 'محتوى يبيع مش بس يتفرج عليه' },
    },
    {
      icon: Mic,
      en: { label: 'Social Media', desc: 'Digital presence that converts to real customers' },
      ar: { label: 'سوشيال ميديا', desc: 'حضور رقمي يتحول لعملاء فعليين' },
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 tracking-wide">
              {t('Who is Ali Elhadi?', 'مين علي الهادي؟')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              {t(
                'SaaS Growth Specialist | B2B Sales | Content & Media',
                'SaaS Growth Specialist | B2B Sales | Content & Media'
              )}
            </h2>
            <p className="text-lg text-muted-foreground mt-4 flex items-center justify-center gap-2">
              <span className="text-destructive text-xl">❌</span>
              {t(
                "Not just services — I help you build a system that delivers results",
                "مش مجرد خدمات — أنا بساعدك تبني نظام يجيب نتائج"
              )}
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto grid gap-4 md:grid-cols-2 mb-10">
          {points.map((point, index) => {
            const content = t(point.en, point.ar) as { label: string; desc: string };
            return (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <point.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{content.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{content.desc}</p>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        <ScrollAnimation animation="scale" delay={400}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6 text-primary font-semibold">
              <CheckCircle className="h-5 w-5" />
              <span>
                {t(
                  'The result: organized business, real customers, continuous growth',
                  'النتيجة: بيزنس منظم، عملاء حقيقيين، ونمو مستمر'
                )}
              </span>
            </div>
            <Button size="lg" className="text-lg px-8 py-6 rounded-xl" asChild>
              <a href="https://wa.me/201111245487" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="ml-2 h-5 w-5" />
                {t('Start your project', 'ابدأ مشروعك')}
              </a>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default PinnedBioSection;
