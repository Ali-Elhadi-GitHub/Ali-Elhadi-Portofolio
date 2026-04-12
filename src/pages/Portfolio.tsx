import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollToTop from '@/components/ScrollToTop';
import basseraImage from '@/assets/project-bassera.jpg';

type Category = 'all' | 'saas' | 'video' | 'social';

const Portfolio = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filters: { key: Category; en: string; ar: string }[] = [
    { key: 'all', en: 'All', ar: 'الكل' },
    { key: 'saas', en: 'SaaS Growth', ar: 'نمو SaaS' },
    { key: 'video', en: 'Video Editing', ar: 'مونتاج' },
    { key: 'social', en: 'Social Media', ar: 'سوشيال ميديا' },
  ];

  const projects = [
    {
      category: 'social' as Category,
      en: { title: 'Bassera Bookstore', description: 'Full content management for social media pages including branding, content planning, and engagement.', result: 'Built brand from scratch with consistent social presence' },
      ar: { title: 'مكتبة بصيرة', description: 'إدارة كاملة لمحتوى صفحات السوشيال ميديا من بناء الهوية وتخطيط المحتوى والتفاعل.', result: 'بناء العلامة التجارية من الصفر مع تواجد رقمي مستمر' },
      image: basseraImage,
      link: 'https://basserabookstore.myeasyorders.com/',
    },
    {
      category: 'social' as Category,
      en: { title: 'Peak Motion Therapy', description: 'Professional social media designs using Canva and AI tools for Dr. Ashraf Kotob.', result: 'Professional brand identity and engagement growth' },
      ar: { title: 'Peak Motion Therapy', description: 'تصميمات احترافية للسوشيال ميديا باستخدام Canva وأدوات الذكاء الاصطناعي لدكتور أشرف قطب.', result: 'هوية بصرية احترافية ونمو في التفاعل' },
    },
    {
      category: 'video' as Category,
      en: { title: 'Marketing Reels', description: 'Professional video editing for short-form marketing and educational content.', result: 'High engagement reels with professional transitions' },
      ar: { title: 'ريلز تسويقية', description: 'مونتاج فيديو احترافي لمحتوى تسويقي وتعليمي قصير.', result: 'ريلز عالية التفاعل مع انتقالات احترافية' },
      videoUrl: 'https://www.youtube.com/shorts/4mB2jYIM3D0',
    },
    {
      category: 'video' as Category,
      en: { title: 'Creative Editing', description: 'Creative video editing with professional transitions and effects.', result: 'Visually stunning content that captures attention' },
      ar: { title: 'مونتاج إبداعي', description: 'مونتاج فيديو إبداعي مع انتقالات وتأثيرات احترافية.', result: 'محتوى بصري مذهل يجذب الانتباه' },
      videoUrl: 'https://www.youtube.com/shorts/FMiiRp76dOA',
    },
    {
      category: 'saas' as Category,
      en: { title: 'Bassera E-commerce Setup', description: 'Complete e-commerce store setup on Easy Orders with product organization and UX optimization.', result: 'Fully operational online store with organized catalog' },
      ar: { title: 'متجر بصيرة الإلكتروني', description: 'تصميم وتنفيذ متجر إلكتروني كامل على Easy Orders مع تنظيم المنتجات وتحسين تجربة العميل.', result: 'متجر إلكتروني يعمل بالكامل مع كتالوج منظم' },
      image: basseraImage,
      link: 'https://basserabookstore.myeasyorders.com/',
    },
    {
      category: 'video' as Category,
      en: { title: 'Voice Over Content', description: 'Clear and engaging voice over for marketing and educational videos.', result: 'Professional narration that enhances content quality' },
      ar: { title: 'تعليق صوتي', description: 'تعليق صوتي واضح وجذاب لفيديوهات تسويقية وتعليمية.', result: 'سرد احترافي يعزز جودة المحتوى' },
      videoUrl: 'https://www.youtube.com/shorts/65oxQqwmZsE',
    },
  ];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  const getYouTubeEmbedUrl = (url: string) => {
    const shortsMatch = url.match(/\/shorts\/([^?]+)/);
    if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}`;
    return url;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary mb-2">{t('PORTFOLIO', 'معرض الأعمال')}</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('My Work', 'أعمالي')}
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {t('Real projects, real results — from idea to execution.', 'مشاريع حقيقية، نتائج حقيقية — من الفكرة إلى التنفيذ.')}
              </p>
            </div>
          </ScrollAnimation>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/25'
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                }`}
              >
                {t(filter.en, filter.ar)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => {
              const content = t(project.en, project.ar) as { title: string; description: string; result: string };
              return (
                <ScrollAnimation key={index} animation="fade-up" delay={index * 80}>
                  <Card className="overflow-hidden group border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    {project.videoUrl ? (
                      <div className="aspect-[9/16] max-h-[280px] w-full bg-secondary">
                        <iframe
                          src={getYouTubeEmbedUrl(project.videoUrl)}
                          title={content.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : project.image ? (
                      <div className="relative h-48 overflow-hidden">
                        <img src={project.image} alt={content.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <Play className="h-12 w-12 text-muted-foreground/20" />
                      </div>
                    )}

                    <div className="p-5">
                      <h3 className="font-bold text-lg mb-1">{content.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{content.description}</p>
                      <div className="flex items-center gap-2 text-xs text-accent font-medium mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {content.result}
                      </div>

                      {project.link && (
                        <Button variant="outline" size="sm" className="w-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-3.5 w-3.5" />
                            {t('View Project', 'عرض المشروع')}
                          </a>
                        </Button>
                      )}
                      {project.videoUrl && (
                        <Button variant="outline" size="sm" className="w-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" asChild>
                          <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                            <Play className="mr-2 h-3.5 w-3.5" />
                            {t('Watch Video', 'مشاهدة الفيديو')}
                          </a>
                        </Button>
                      )}
                    </div>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
};

export default Portfolio;
