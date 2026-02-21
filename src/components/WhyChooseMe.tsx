import { Globe, Settings, Briefcase, Eye, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const WhyChooseMe = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: Globe, en: 'Deep understanding of the Arab market', ar: 'فهم لطبيعة السوق العربي' },
    { icon: Settings, en: 'Organized work, not random', ar: 'تنظيم في العمل وليس عشوائية' },
    { icon: Briefcase, en: 'Hands-on experience from my own project', ar: 'خبرة عملية من خلال مشروعي الخاص' },
    { icon: Eye, en: 'Attention to detail', ar: 'اهتمام بالتفاصيل' },
    { icon: TrendingUp, en: 'Continuous improvement mindset', ar: 'أعمل بعقلية تطوير مستمر' },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-primary">
          {t('Why Choose Me?', 'لماذا تختارني؟')}
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 bg-background rounded-xl border hover:shadow-md hover:border-primary/40 transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium text-lg">{t(reason.en, reason.ar)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
