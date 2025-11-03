import { ExternalLink, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import basseraImage from '@/assets/project-bassera.jpg';
import { useLanguage } from '@/hooks/useLanguage';

const ProjectsSection = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      en: {
        title: 'Bassera Bookstore',
        subtitle: 'Digital Retail Startup',
        description: 'End-to-end online business: branding, marketing, system design, and customer retention strategy. A live case study in building digital commerce from zero.',
        tags: ['E-commerce', 'Marketing', 'Strategy'],
      },
      ar: {
        title: 'مكتبة باصيرة',
        subtitle: 'شركة تجزئة رقمية ناشئة',
        description: 'عمل شامل عبر الإنترنت: العلامة التجارية، التسويق، تصميم الأنظمة، واستراتيجية الاحتفاظ بالعملاء. دراسة حالة حية في بناء تجارة رقمية من الصفر.',
        tags: ['التجارة الإلكترونية', 'التسويق', 'الاستراتيجية'],
      },
      image: basseraImage,
      link: 'https://basserabookstore.myeasyorders.com/',
      status: 'Live',
    },
    {
      en: {
        title: 'Ceramic Display System',
        subtitle: 'Product Design & Development',
        description: 'Innovative display solutions for ceramic products, combining aesthetics with functionality for retail environments.',
        tags: ['Product Design', 'Innovation', 'Retail'],
      },
      ar: {
        title: 'نظام عرض السيراميك',
        subtitle: 'تصميم وتطوير المنتجات',
        description: 'حلول عرض مبتكرة لمنتجات السيراميك، تجمع بين الجماليات والوظائف للبيئات التجارية.',
        tags: ['تصميم المنتجات', 'الابتكار', 'البيع بالتجزئة'],
      },
      status: 'Coming Soon',
    },
    {
      en: {
        title: 'E-Commerce Optimization Case Study',
        subtitle: 'Growth Strategy',
        description: 'Complete optimization framework: conversion rate improvement, customer journey mapping, and retention systems.',
        tags: ['CRO', 'UX', 'Growth'],
      },
      ar: {
        title: 'دراسة حالة تحسين التجارة الإلكترونية',
        subtitle: 'استراتيجية النمو',
        description: 'إطار عمل تحسين كامل: تحسين معدل التحويل، تخطيط رحلة العميل، وأنظمة الاحتفاظ.',
        tags: ['تحسين التحويل', 'تجربة المستخدم', 'النمو'],
      },
      status: 'Coming Soon',
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">
          {t('Featured Projects', 'المشاريع المميزة')}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {t('Real businesses, real results — from concept to execution', 'أعمال حقيقية، نتائج حقيقية — من الفكرة إلى التنفيذ')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const content = t(project.en, project.ar) as any;
            return (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {project.image ? (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={content.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {project.status === 'Live' && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                        {t('Live', 'مباشر')}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Rocket className="h-16 w-16 text-muted-foreground/20" />
                    {project.status === 'Coming Soon' && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-muted text-muted-foreground text-xs font-bold rounded-full">
                        {t('Coming Soon', 'قريباً')}
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{content.title}</h3>
                  <p className="text-sm text-accent font-semibold mb-3">{content.subtitle}</p>
                  <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                    {content.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {content.tags.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary text-xs font-medium rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link && project.status === 'Live' && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      asChild
                    >
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {t('View Project', 'عرض المشروع')}
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
