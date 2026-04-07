import { TrendingUp, Video, Smartphone, Settings, Brain, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollAnimation from '@/components/ScrollAnimation';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: TrendingUp,
      en: { title: 'SaaS Consulting & Growth', description: 'Build SaaS products with real market demand. Get first customers (0 → 10). B2B SaaS sales strategy.' },
      ar: { title: 'استشارات ونمو SaaS', description: 'بناء منتجات SaaS بطلب حقيقي في السوق. الحصول على أول عملاء (0 → 10). استراتيجية مبيعات B2B SaaS.' },
    },
    {
      icon: Video,
      en: { title: 'Video Editing', description: 'Professional editing for marketing, educational, and social media content.' },
      ar: { title: 'مونتاج الفيديو', description: 'مونتاج احترافي للمحتوى التسويقي والتعليمي والسوشيال ميديا.' },
    },
    {
      icon: Smartphone,
      en: { title: 'Social Media Management', description: 'Page setup, content planning, identity branding, engagement management, and social selling.' },
      ar: { title: 'إدارة صفحات السوشيال ميديا', description: 'تأسيس الصفحات، تخطيط المحتوى، بناء الهوية، إدارة التفاعل، والبيع عبر السوشيال.' },
    },
    {
      icon: Settings,
      en: { title: 'CRM Setup & Sales Systems', description: 'Build full system: Product → CRM → Pipeline → Sales. Optimize your sales process end-to-end.' },
      ar: { title: 'إعداد CRM وأنظمة المبيعات', description: 'بناء نظام متكامل: منتج → CRM → Pipeline → مبيعات. تحسين عملية البيع من البداية للنهاية.' },
    },
    {
      icon: Brain,
      en: { title: 'AI Consulting & Training', description: 'Use AI to increase productivity. Training teams on AI tools for different industries.' },
      ar: { title: 'استشارات وتدريب الذكاء الاصطناعي', description: 'استخدام الذكاء الاصطناعي لزيادة الإنتاجية. تدريب الفرق على أدوات AI لمختلف المجالات.' },
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">
            {t('Services', 'الخدمات')}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('End-to-end digital services to build, grow, and scale your business', 'خدمات رقمية شاملة لبناء ونمو وتوسيع مشروعك')}
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const content = t(service.en, service.ar) as { title: string; description: string };
            return (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/40 group h-full">
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
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
