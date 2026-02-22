import { useLanguage } from '@/hooks/useLanguage';

const WorkflowSection = () => {
  const { t } = useLanguage();

  const steps = [
    { en: 'We understand your project & goal', ar: 'نفهم مشروعك وهدفك', emoji: '🎯' },
    { en: 'We analyze the current state', ar: 'نحلل الوضع الحالي', emoji: '🔍' },
    { en: 'We create a clear plan', ar: 'نضع خطة واضحة', emoji: '📋' },
    { en: 'We start execution', ar: 'نبدأ التنفيذ', emoji: '🚀' },
    { en: 'Continuous follow-up & improvement', ar: 'متابعة وتحسين مستمر', emoji: '📈' },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-primary">
          {t('How I Work With You', 'كيف أعمل معك؟')}
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-6 mb-10 animate-fade-in ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="md:w-1/2 md:text-center" />
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shrink-0 shadow-lg">
                  {step.emoji}
                </div>
                <div className="md:w-1/2">
                  <div className="bg-card p-4 rounded-xl border shadow-sm">
                    <span className="text-xs font-bold text-primary mb-1 block">
                      {t(`Step ${index + 1}`, `الخطوة ${index + 1}`)}
                    </span>
                    <p className="font-medium">{t(step.en, step.ar)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
