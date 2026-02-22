import { Search, Clock, ShoppingCart, Stethoscope, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const WhyChooseMe = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Search,
      en: {
        title: 'Analysis Before Execution',
        description: "I don't work randomly. I analyze your project first, then build a structured, clear, and improvable action plan.",
      },
      ar: {
        title: 'أبدأ بالتحليل قبل التنفيذ',
        description: 'لا أعمل عشوائيًا. أحلل وضع مشروعك أولًا، ثم أبني خطة عمل مدروسة، واضحة، قابلة للتحسين والتطوير المستمر.',
      },
    },
    {
      icon: Clock,
      en: {
        title: 'Commitment to Delivery',
        description: 'By the grace of Allah, I commit to agreed deadlines and ensure clarity of steps from the beginning.',
      },
      ar: {
        title: 'الالتزام في التسليم',
        description: 'بإذن الله ألتزم بالمواعيد المتفق عليها، وأحرص على وضوح الخطوات منذ البداية.',
      },
    },
    {
      icon: ShoppingCart,
      en: {
        title: 'Hands-on E-commerce Experience',
        description: 'Practical experience from my own project Bassera Bookstore — built an online store from scratch and managed its operations.',
      },
      ar: {
        title: 'خبرة عملية في التجارة الإلكترونية',
        description: 'لدي خبرة تطبيقية من خلال مشروعي المصغر مكتبة بصيرة حيث بنيت متجرًا إلكترونيًا من الصفر وأدرت عملياته وتجربة عملائه.',
      },
    },
    {
      icon: Stethoscope,
      en: {
        title: 'Real Medical Content Experience',
        description: 'Worked in editing, voice over, and social media management for Peak Motion Therapy | Dr. Ashraf Kotob — specialized professional medical content.',
      },
      ar: {
        title: 'خبرة حقيقية في إدارة صفحات ومحتوى طبي',
        description: 'عملت في المونتاج، التعليق الصوتي، وإدارة صفحات السوشيال ميديا لـ Peak Motion Therapy | Dr. Ashraf Kotob مما أكسبني خبرة في التعامل مع محتوى احترافي وطبي متخصص.',
      },
    },
    {
      icon: Users,
      en: {
        title: 'Focus on Client Experience',
        description: "I organize responses, clear messaging, and simplify the client journey — because business success isn't just about content, it's about the complete experience.",
      },
      ar: {
        title: 'أركز على تسهيل تجربة العميل',
        description: 'أهتم بتنظيم الردود، وضوح الرسائل، وتبسيط رحلة العميل لأن نجاح البيزنس لا يعتمد على المحتوى فقط — بل على التجربة الكاملة.',
      },
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient-primary">
          {t('Why Request My Services?', 'لماذا تطلب خدماتي؟')}
        </h2>

        <div className="max-w-4xl mx-auto space-y-5">
          {reasons.map((reason, index) => {
            const content = t(reason.en, reason.ar) as { title: string; description: string };
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                    <reason.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{content.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{content.description}</p>
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
