import { Video, Smartphone, Palette, ShoppingCart, HeadphonesIcon, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Video,
      en: {
        title: 'Video Editing & Voice Over',
        description: 'Professional editing for educational and marketing videos + clear and engaging voice over.',
      },
      ar: {
        title: 'مونتاج الفيديو والتعليق الصوتي',
        description: 'إخراج احترافي للفيديوهات التعليمية والتسويقية + تعليق صوتي واضح وجذاب.',
      },
    },
    {
      icon: Smartphone,
      en: {
        title: 'Social Media Page Setup & Management',
        description: 'Page creation from scratch, content organization, caption writing, visual identity, and engagement management.',
      },
      ar: {
        title: 'تأسيس وإدارة صفحات السوشيال ميديا',
        description: 'إنشاء الصفحة من الصفر، تنظيم المحتوى، كتابة الكابشن، تنسيق الهوية البصرية، وإدارة الرسائل والتفاعل.',
      },
    },
    {
      icon: Palette,
      en: {
        title: 'Design with Canva + AI',
        description: 'Professional post design, image enhancement, and using AI to develop ideas and content.',
      },
      ar: {
        title: 'التصميم باستخدام Canva + AI',
        description: 'تصميم منشورات احترافية، تحسين الصور، واستخدام الذكاء الاصطناعي لتطوير الأفكار والمحتوى.',
      },
    },
    {
      icon: ShoppingCart,
      en: {
        title: 'E-commerce Store Setup',
        description: 'Store design on Easy Orders, product organization, order method linking, and customer experience optimization.',
      },
      ar: {
        title: 'إنشاء متاجر إلكترونية',
        description: 'تصميم وتنفيذ متجر على Easy Orders، تنظيم المنتجات، ربط طرق الطلب، وتحسين تجربة العميل.',
      },
    },
    {
      icon: HeadphonesIcon,
      en: {
        title: 'Customer Service Optimization',
        description: 'Ready reply templates, recurring conversation analysis, and response & follow-up workflow organization.',
      },
      ar: {
        title: 'تنظيم وتحسين خدمة العملاء',
        description: 'إنشاء قوالب ردود جاهزة، تحليل المحادثات المتكررة، وتنظيم آلية الرد والمتابعة.',
      },
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">
          {t('Services', 'الخدمات')}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t(
            'Professional digital services to build your online presence from scratch',
            'خدمات رقمية احترافية لبناء تواجدك الرقمي من الصفر'
          )}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const content = t(service.en, service.ar) as { title: string; description: string };
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/40 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">{content.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{content.description}</p>
                <Button variant="outline" size="sm" className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground" asChild>
                  <a
                    href={`https://wa.me/201111245487?text=${encodeURIComponent(t(`Hi, I'd like to inquire about: ${service.en.title}`, `مرحباً، أريد الاستفسار عن خدمة: ${service.ar.title}`) as string)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t('Inquire Now', 'استفسر الآن')}
                  </a>
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
