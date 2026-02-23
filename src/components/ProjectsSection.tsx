import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import basseraImage from '@/assets/project-bassera.jpg';
import { useLanguage } from '@/hooks/useLanguage';

type Category = 'all' | 'montage' | 'design' | 'pages' | 'stores' | 'voiceover';

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filters: { key: Category; en: string; ar: string }[] = [
    { key: 'all', en: 'All', ar: 'الكل' },
    { key: 'montage', en: 'Video Editing', ar: 'مونتاج' },
    { key: 'design', en: 'Design', ar: 'تصميم' },
    { key: 'pages', en: 'Page Management', ar: 'إدارة صفحات' },
    { key: 'stores', en: 'E-commerce Stores', ar: 'متاجر إلكترونية' },
    { key: 'voiceover', en: 'Voice Over', ar: 'تعليق صوتي' },
  ];

  const projects = [
    {
      category: 'pages' as Category,
      en: {
        title: 'Bassera Bookstore Content Management',
        description: 'Full content management for Bassera Bookstore social media pages including branding, content planning, and engagement.',
      },
      ar: {
        title: 'إدارة محتوى مكتبة بصيرة',
        description: 'إدارة كاملة لمحتوى صفحات مكتبة بصيرة على السوشيال ميديا من بناء الهوية وتخطيط المحتوى والتفاعل.',
      },
      image: basseraImage,
      link: 'https://basserabookstore.myeasyorders.com/',
      type: 'link',
    },
    {
      category: 'design' as Category,
      en: {
        title: 'Canva + AI Designs for Dr. Ashraf Kotob',
        description: 'Professional social media designs using Canva and AI tools for Peak Motion Therapy.',
      },
      ar: {
        title: 'تصميمات Canva + AI لدكتور أشرف قطب',
        description: 'تصميمات احترافية للسوشيال ميديا باستخدام Canva وأدوات الذكاء الاصطناعي لـ Peak Motion Therapy.',
      },
      type: 'image',
    },
    {
      category: 'montage' as Category,
      en: {
        title: 'Video Editing Sample 1',
        description: 'Professional video editing for marketing and educational content.',
      },
      ar: {
        title: 'نموذج مونتاج فيديو 1',
        description: 'مونتاج فيديو احترافي لمحتوى تسويقي وتعليمي.',
      },
      videoUrl: 'https://www.youtube.com/shorts/4mB2jYIM3D0',
      type: 'video',
    },
    {
      category: 'montage' as Category,
      en: {
        title: 'Video Editing Sample 2',
        description: 'Creative video editing with professional transitions and effects.',
      },
      ar: {
        title: 'نموذج مونتاج فيديو 2',
        description: 'مونتاج فيديو إبداعي مع انتقالات وتأثيرات احترافية.',
      },
      videoUrl: 'https://www.youtube.com/shorts/FMiiRp76dOA',
      type: 'video',
    },
    {
      category: 'stores' as Category,
      en: {
        title: 'Bassera Bookstore E-commerce',
        description: 'Complete e-commerce store setup on Easy Orders with product organization and customer experience optimization.',
      },
      ar: {
        title: 'متجر مكتبة بصيرة الإلكتروني',
        description: 'تصميم وتنفيذ متجر إلكتروني كامل على Easy Orders مع تنظيم المنتجات وتحسين تجربة العميل.',
      },
      image: basseraImage,
      link: 'https://basserabookstore.myeasyorders.com/',
      type: 'link',
    },
    {
      category: 'voiceover' as Category,
      en: {
        title: 'Voice Over Sample',
        description: 'Clear and engaging voice over for marketing and educational videos.',
      },
      ar: {
        title: 'نموذج تعليق صوتي',
        description: 'تعليق صوتي واضح وجذاب لفيديوهات تسويقية وتعليمية.',
      },
      videoUrl: 'https://www.youtube.com/shorts/65oxQqwmZsE',
      type: 'video',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const getYouTubeEmbedUrl = (url: string) => {
    const shortsMatch = url.match(/\/shorts\/([^?]+)/);
    if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}`;
    return url;
  };

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">
          {t('Portfolio', 'معرض الأعمال')}
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('Real projects, real results — from idea to execution', 'مشاريع حقيقية، نتائج حقيقية — من الفكرة إلى التنفيذ')}
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-background border hover:border-primary/40 text-foreground/70 hover:text-foreground'
              }`}
            >
              {t(filter.en, filter.ar)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => {
            const content = t(project.en, project.ar) as { title: string; description: string };
            return (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {project.type === 'video' && project.videoUrl ? (
                  <div className="aspect-[9/16] max-h-[300px] w-full">
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
                    <img
                      src={project.image}
                      alt={content.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Play className="h-16 w-16 text-muted-foreground/20" />
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2">{content.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{content.description}</p>

                  {project.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t('View Project', 'عرض المشروع')}
                      </a>
                    </Button>
                  )}

                  {project.videoUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="mr-2 h-4 w-4" />
                        {t('Watch Video', 'مشاهدة الفيديو')}
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
