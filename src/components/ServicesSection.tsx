import { TrendingUp, Video, Smartphone, Settings, Brain, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollAnimation from '@/components/ScrollAnimation';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: TrendingUp,
      en: { title: 'SaaS Growth', description: 'Build SaaS products with real demand. Get first customers (0 → 10). B2B sales strategy.' },
      ar: { title: 'نمو SaaS', description: 'بناء منتجات SaaS بطلب حقيقي. الحصول على أول عملاء (0 → 10). استراتيجية مبيعات B2B.' },
    },
    {
      icon: Video,
      en: { title: 'Video Editing', description: 'Professional editing for marketing, educational, and social media content.' },
      ar: { title: 'مونتاج الفيديو', description: 'مونتاج احترافي للمحتوى التسويقي والتعليمي والسوشيال ميديا.' },
    },
    {
      icon: Smartphone,
      en: { title: 'Social Media', description: 'Page setup, content planning, branding, engagement, and social selling.' },
      ar: { title: 'السوشيال ميديا', description: 'تأسيس الصفحات، تخطيط المحتوى، بناء الهوية، إدارة التفاعل.' },
    },
    {
      icon: Settings,
      en: { title: 'CRM & Sales', description: 'Full system: Product → CRM → Pipeline → Sales. End-to-end optimization.' },
      ar: { title: 'CRM والمبيعات', description: 'نظام متكامل: منتج → CRM → Pipeline → مبيعات. تحسين شامل.' },
    },
    {
      icon: Brain,
      en: { title: 'AI Training', description: 'Increase productivity with AI. Team training on AI tools for different industries.' },
      ar: { title: 'تدريب الذكاء الاصطناعي', description: 'زيادة الإنتاجية بالذكاء الاصطناعي. تدريب الفرق على أدوات AI.' },
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-primary mb-2">{t('SERVICES', 'الخدمات')}</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('What I Can Do For You', 'ماذا أستطيع أن أقدم لك')}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t('End-to-end digital services to build, grow, and scale your business.', 'خدمات رقمية شاملة لبناء ونمو وتوسيع مشروعك.')}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const content = t(service.en, service.ar) as { title: string; description: string };
            return (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 80}>
                <Card className="group p-6 h-full border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <a
                      href={`https://wa.me/201111245487?text=${encodeURIComponent(t(`Hi, I'm interested in: ${service.en.title}`, `مرحباً، أنا مهتم بخدمة: ${service.ar.title}`) as string)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all opacity-0 group-hover:opacity-100"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{content.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{content.description}</p>
                </Card>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
