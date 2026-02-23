import { MessageSquare, Search, ClipboardList, Rocket, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const HowIWorkSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      en: { title: 'We understand your project', description: 'We discuss your goals, target audience, and current situation.' },
      ar: { title: 'نفهم مشروعك', description: 'نناقش أهدافك وجمهورك المستهدف ووضعك الحالي.' },
    },
    {
      icon: Search,
      en: { title: 'We analyze the situation', description: 'We study competitors and identify opportunities.' },
      ar: { title: 'نحلل الوضع', description: 'ندرس المنافسين ونحدد الفرص.' },
    },
    {
      icon: ClipboardList,
      en: { title: 'We create a plan', description: 'We build a clear and actionable strategy.' },
      ar: { title: 'نضع خطة', description: 'نبني استراتيجية واضحة وقابلة للتنفيذ.' },
    },
    {
      icon: Rocket,
      en: { title: 'Execution', description: 'We implement the plan with precision and professionalism.' },
      ar: { title: 'تنفيذ', description: 'ننفذ الخطة بدقة واحترافية.' },
    },
    {
      icon: TrendingUp,
      en: { title: 'Continuous improvement', description: 'We monitor results and optimize continuously.' },
      ar: { title: 'تحسين مستمر', description: 'نتابع النتائج ونحسن باستمرار.' },
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-primary">
          {t('How I Work With You?', 'كيف أعمل معك؟')}
        </h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

          {steps.map((step, index) => {
            const content = t(step.en, step.ar) as { title: string; description: string };
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex items-start mb-10 last:mb-0 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="p-5 bg-background rounded-xl border hover:shadow-md hover:border-primary/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                    <h3 className="font-bold text-lg mb-1">{content.title}</h3>
                    <p className="text-sm text-muted-foreground">{content.description}</p>
                  </div>
                </div>

                {/* Icon circle */}
                <div className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-md z-10">
                  <span className="text-primary-foreground text-xs font-bold">{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowIWorkSection;
