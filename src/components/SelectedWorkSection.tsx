import { ArrowRight, ExternalLink, Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollAnimation from '@/components/ScrollAnimation';
import { Link } from 'react-router-dom';
import basseraImage from '@/assets/project-bassera.jpg';

const SelectedWorkSection = () => {
  const { t } = useLanguage();

  const works = [
    {
      en: { title: 'Bassera Bookstore', description: 'Full content management & e-commerce store setup.', result: 'Social media growth + online sales' },
      ar: { title: 'مكتبة بصيرة', description: 'إدارة محتوى كاملة وإنشاء متجر إلكتروني.', result: 'نمو السوشيال + مبيعات أونلاين' },
      image: basseraImage,
      category: t('Social Media', 'سوشيال ميديا'),
      link: 'https://basserabookstore.myeasyorders.com/',
    },
    {
      en: { title: 'Peak Motion Therapy', description: 'Social media designs using Canva + AI tools.', result: 'Professional brand presence' },
      ar: { title: 'Peak Motion Therapy', description: 'تصميمات سوشيال ميديا باستخدام Canva + AI.', result: 'حضور رقمي احترافي' },
      category: t('Design', 'تصميم'),
    },
    {
      en: { title: 'Marketing Video Editing', description: 'Professional video editing for reels and marketing content.', result: 'High engagement content' },
      ar: { title: 'مونتاج فيديو تسويقي', description: 'مونتاج احترافي لفيديوهات ريلز ومحتوى تسويقي.', result: 'محتوى عالي التفاعل' },
      category: t('Video Editing', 'مونتاج'),
      videoUrl: 'https://www.youtube.com/shorts/4mB2jYIM3D0',
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fade-up">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm font-medium text-primary mb-2">{t('SELECTED WORK', 'أعمال مختارة')}</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                {t('Recent Projects', 'مشاريع حديثة')}
              </h2>
            </div>
            <Button variant="ghost" className="hidden md:flex text-muted-foreground hover:text-primary" asChild>
              <Link to="/portfolio">
                {t('View All', 'عرض الكل')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-6">
          {works.map((work, index) => {
            const content = t(work.en, work.ar) as { title: string; description: string; result: string };
            return (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <Card className="group overflow-hidden border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                    {work.image ? (
                      <img src={work.image} alt={content.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Play className="h-12 w-12 text-muted-foreground/20" />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm text-foreground border border-border/50">
                        {work.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-1">{content.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{content.description}</p>
                    <div className="flex items-center gap-2 text-xs text-accent font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {content.result}
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
            );
          })}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Button variant="outline" asChild>
            <Link to="/portfolio">
              {t('View All Projects', 'عرض كل الأعمال')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorkSection;
