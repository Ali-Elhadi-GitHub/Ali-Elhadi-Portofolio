import { Search, Rocket, ShoppingCart, Brain, Users, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const WhyChooseMe = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Rocket,
      en: {
        title: 'Build SaaS products with real demand',
        description: 'I help you validate and build products that solve real market problems.',
      },
      ar: {
        title: 'بناء منتجات SaaS بطلب حقيقي',
        description: 'أساعدك في التحقق وبناء منتجات تحل مشاكل حقيقية في السوق.',
      },
    },
    {
      icon: Users,
      en: {
        title: 'Get first customers (0 → 10)',
        description: 'Proven strategies to acquire your first paying customers.',
      },
      ar: {
        title: 'الحصول على أول عملاء (0 → 10)',
        description: 'استراتيجيات مجربة لاكتساب أول عملاء يدفعون.',
      },
    },
    {
      icon: TrendingUp,
      en: {
        title: 'B2B SaaS Sales',
        description: 'Build pipeline and close deals with businesses systematically.',
      },
      ar: {
        title: 'مبيعات B2B SaaS',
        description: 'بناء Pipeline وإغلاق الصفقات مع الشركات بشكل منظم.',
      },
    },
    {
      icon: ShoppingCart,
      en: {
        title: 'Full system: Product → CRM → Pipeline → Sales',
        description: 'End-to-end sales infrastructure setup and optimization.',
      },
      ar: {
        title: 'نظام متكامل: منتج → CRM → Pipeline → مبيعات',
        description: 'إعداد وتحسين البنية التحتية للمبيعات من البداية للنهاية.',
      },
    },
    {
      icon: Brain,
      en: {
        title: 'Use AI to increase productivity',
        description: 'Leverage AI tools to automate and optimize your workflows.',
      },
      ar: {
        title: 'استخدام AI لزيادة الإنتاجية',
        description: 'استثمار أدوات الذكاء الاصطناعي لأتمتة وتحسين سير العمل.',
      },
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">
          {t('What I Help With', 'كيف أساعدك؟')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t(
            'From idea to scale — I help you build the right foundation',
            'من الفكرة إلى التوسع — أساعدك في بناء الأساس الصحيح'
          )}
        </p>

        <div className="max-w-4xl mx-auto space-y-4">
          {reasons.map((reason, index) => {
            const content = t(reason.en, reason.ar) as { title: string; description: string };
            return (
              <Card
                key={index}
                className="p-5 hover:shadow-md hover:border-primary/40 transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg shrink-0 mt-1">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{content.title}</h3>
                    <p className="text-muted-foreground text-sm">{content.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
