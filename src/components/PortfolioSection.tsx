import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

import portfolioAbout from '@/assets/portfolio-about.png';
import portfolioBassera from '@/assets/portfolio-bassera-reviews.png';
import portfolioBassera2 from '@/assets/portfolio-bassera-reviews2.jpg';
import portfolioEasyorders from '@/assets/portfolio-easyorders.png';
import portfolioCanvaThumb from '@/assets/portfolio-canva-thumbnail.jpg';
import portfolioCanvaDesign from '@/assets/portfolio-canva-design.jpg';
import portfolioContentPlan from '@/assets/portfolio-content-plan.png';
import portfolioBZakat from '@/assets/portfolio-bassera-zakat.png';
import basseraImage from '@/assets/project-bassera.jpg';

type Category = 'all' | 'montage' | 'design' | 'social' | 'ecommerce' | 'voiceover';

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filters: { key: Category; en: string; ar: string }[] = [
    { key: 'all', en: 'All', ar: 'الكل' },
    { key: 'montage', en: 'Video Editing', ar: 'مونتاج' },
    { key: 'voiceover', en: 'Voice Over', ar: 'تعليق صوتي' },
    { key: 'design', en: 'Design', ar: 'تصميم' },
    { key: 'social', en: 'Social Media', ar: 'إدارة صفحات' },
    { key: 'ecommerce', en: 'E-commerce', ar: 'متاجر إلكترونية' },
  ];

  const items = [
    {
      category: ['montage'] as Category[],
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/4mB2jYIM3D0',
      en: { title: 'Video Editing Sample 1', description: 'Professional video editing showcase' },
      ar: { title: 'نموذج مونتاج فيديو ١', description: 'عرض مونتاج فيديو احترافي' },
    },
    {
      category: ['montage'] as Category[],
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/FMiiRp76dOA',
      en: { title: 'Video Editing Sample 2', description: 'Creative video editing work' },
      ar: { title: 'نموذج مونتاج فيديو ٢', description: 'عمل مونتاج فيديو إبداعي' },
    },
    {
      category: ['voiceover'] as Category[],
      type: 'video',
      videoUrl: 'https://www.youtube.com/embed/65oxQqwmZsE',
      en: { title: 'Voice Over Sample', description: 'Professional voice over work' },
      ar: { title: 'نموذج تعليق صوتي', description: 'عمل تعليق صوتي احترافي' },
    },
    {
      category: ['social', 'ecommerce'] as Category[],
      type: 'image',
      image: basseraImage,
      en: { title: 'Bassera Bookstore Management', description: 'Complete digital presence setup and management' },
      ar: { title: 'إدارة محتوى مكتبة بصيرة', description: 'تأسيس وإدارة التواجد الرقمي الكامل' },
      link: 'https://basserabookstore.myeasyorders.com/',
    },
    {
      category: ['ecommerce'] as Category[],
      type: 'image',
      image: portfolioEasyorders,
      en: { title: 'E-commerce Store (Easy Orders)', description: 'Online store setup on Easy Orders platform' },
      ar: { title: 'متجر إلكتروني (Easy Orders)', description: 'تنفيذ متجر إلكتروني على منصة Easy Orders' },
      link: 'https://basserabookstore.myeasyorders.com/',
    },
    {
      category: ['design'] as Category[],
      type: 'image',
      image: portfolioCanvaThumb,
      en: { title: 'YouTube Thumbnail Design', description: 'Canva design for Dr. Ashraf Kotob' },
      ar: { title: 'تصميم صورة مصغرة يوتيوب', description: 'تصميم بكانفا لدكتور أشرف قطب' },
    },
    {
      category: ['design'] as Category[],
      type: 'image',
      image: portfolioCanvaDesign,
      en: { title: 'Medical Poster Design', description: 'Professional Canva design for Dr. Ashraf Kotob' },
      ar: { title: 'تصميم بوستر طبي', description: 'تصميم احترافي بكانفا لدكتور أشرف قطب' },
    },
    {
      category: ['social'] as Category[],
      type: 'image',
      image: portfolioContentPlan,
      en: { title: 'Content Planning', description: 'Organized content strategy for Mohandes Business' },
      ar: { title: 'خطة محتوى منظمة', description: 'تخطيط محتوى منظم لصفحة مهندس بيزنس' },
    },
    {
      category: ['social', 'ecommerce'] as Category[],
      type: 'image',
      image: portfolioBZakat,
      en: { title: 'Social Media Post Design', description: 'Bassera Bookstore promotional post' },
      ar: { title: 'تصميم منشور سوشيال ميديا', description: 'منشور ترويجي لمكتبة بصيرة' },
    },
    {
      category: ['social'] as Category[],
      type: 'image',
      image: portfolioBassera,
      en: { title: 'Customer Reviews Showcase', description: 'Real client testimonials for Bassera Bookstore' },
      ar: { title: 'عرض آراء العملاء', description: 'شهادات عملاء حقيقية لمكتبة بصيرة' },
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? items
    : items.filter(item => item.category.includes(activeFilter));

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">
          {t('Portfolio', 'معرض الأعمال')}
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          {t('Some of my work samples', 'بعض من نماذج أعمالي')}
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
              }`}
            >
              {t(filter.en, filter.ar)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredItems.map((item, index) => {
            const content = t(item.en, item.ar) as { title: string; description: string };
            return (
              <Card
                key={`${item.en.title}-${index}`}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border animate-scale-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {item.type === 'video' ? (
                  <div className="relative aspect-[9/16] max-h-80 overflow-hidden bg-black">
                    <iframe
                      src={item.videoUrl}
                      title={content.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={content.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold mb-1">{content.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{content.description}</p>
                  {item.link && (
                    <Button variant="outline" size="sm" className="w-full border-primary/30 hover:bg-primary hover:text-primary-foreground" asChild>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t('View Details', 'عرض التفاصيل')}
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

export default PortfolioSection;
