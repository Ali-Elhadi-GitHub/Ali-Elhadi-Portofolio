import { Package, Database, GitBranch, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollAnimation from '@/components/ScrollAnimation';

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Package,
      en: { title: 'Product', description: 'Build a product with real market demand and clear value proposition.' },
      ar: { title: 'المنتج', description: 'بناء منتج بطلب حقيقي في السوق وقيمة واضحة.' },
    },
    {
      icon: Database,
      en: { title: 'CRM', description: 'Set up your CRM to track leads, organize contacts, and manage relationships.' },
      ar: { title: 'CRM', description: 'إعداد نظام CRM لتتبع العملاء المحتملين وتنظيم جهات الاتصال.' },
    },
    {
      icon: GitBranch,
      en: { title: 'Pipeline', description: 'Create a sales pipeline that converts prospects into paying customers.' },
      ar: { title: 'Pipeline', description: 'إنشاء خط مبيعات يحوّل العملاء المحتملين إلى عملاء يدفعون.' },
    },
    {
      icon: TrendingUp,
      en: { title: 'Sales', description: 'Close deals, grow revenue, and scale your business systematically.' },
      ar: { title: 'المبيعات', description: 'إتمام الصفقات وزيادة الإيرادات وتوسيع أعمالك بشكل منهجي.' },
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2">{t('MY PROCESS', 'منهجيتي')}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('From Product to Revenue', 'من المنتج إلى الإيرادات')}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t('A proven framework to take SaaS founders from idea to paying customers.', 'إطار مُجرّب لنقل مؤسسي SaaS من الفكرة إلى العملاء الذين يدفعون.')}
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {steps.map((step, index) => {
              const content = t(step.en, step.ar) as { title: string; description: string };
              return (
                <ScrollAnimation key={index} animation="fade-up" delay={index * 120}>
                  <div className="relative group">
                    <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-xs font-bold text-muted-foreground">0{index + 1}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{content.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{content.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-border" />
                    )}
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
