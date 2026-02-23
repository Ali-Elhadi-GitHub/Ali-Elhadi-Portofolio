import { Search, Clock, ShoppingCart, Stethoscope, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const WhyChooseMe = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Search,
      en: {
        title: 'I start with analysis before execution',
        description: 'I analyze your project first, then build a well-thought-out and scalable action plan.',
      },
      ar: {
        title: 'أبدأ بالتحليل قبل التنفيذ',
        description: 'أحلل مشروعك أولًا ثم أبني خطة عمل مدروسة قابلة للتطوير.',
      },
    },
    {
      icon: Clock,
      en: {
        title: 'Commitment to delivery',
        description: 'I commit to agreed deadlines, God willing.',
      },
      ar: {
        title: 'الالتزام في التسليم',
        description: 'ألتزم بالمواعيد المتفق عليها بإذن الله.',
      },
    },
    {
      icon: ShoppingCart,
      en: {
        title: 'Hands-on e-commerce experience',
        description: 'Through my project Bassera Bookstore.',
      },
      ar: {
        title: 'خبرة عملية في التجارة الإلكترونية',
        description: 'من خلال مشروعي مكتبة بصيرة.',
      },
    },
    {
      icon: Stethoscope,
      en: {
        title: 'Experience in specialized medical field',
        description: 'Video editing, voice over, and page management for Peak Motion Therapy | Dr. Ashraf Kotob.',
      },
      ar: {
        title: 'خبرة في مجال طبي متخصص',
        description: 'مونتاج وتعليق صوتي وإدارة صفحات Peak Motion Therapy | Dr. Ashraf Kotob.',
      },
    },
    {
      icon: Users,
      en: {
        title: 'I focus on simplifying the customer experience',
        description: 'I organize the customer journey from the first message to after-sale.',
      },
      ar: {
        title: 'أركز على تسهيل تجربة العميل',
        description: 'أنظم رحلة العميل من أول رسالة حتى ما بعد البيع.',
      },
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-primary">
          {t('Why Request My Services?', 'لماذا تطلب خدماتي؟')}
        </h2>

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
