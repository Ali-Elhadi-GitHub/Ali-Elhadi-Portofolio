import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const reviews = [
    {
      en: {
        name: 'Bassera Bookstore Customer',
        role: 'Book Lover',
        text: 'Excellent service and amazing book collection. The shopping experience was smooth and professional.',
      },
      ar: {
        name: 'عميل مكتبة باصيرة',
        role: 'محب للكتب',
        text: 'خدمة ممتازة ومجموعة كتب رائعة. تجربة الشراء كانت سلسة واحترافية.',
      },
      rating: 5,
      source: 'https://www.facebook.com/share/p/17VguoCNuH/',
    },
    {
      en: {
        name: 'Verified Customer',
        role: 'E-commerce Client',
        text: 'Professional handling and great attention to customer needs. Highly recommend this service!',
      },
      ar: {
        name: 'عميل موثق',
        role: 'عميل تجارة إلكترونية',
        text: 'تعامل احترافي واهتمام كبير باحتياجات العملاء. أنصح بالخدمة بشدة!',
      },
      rating: 5,
      source: 'https://www.facebook.com/share/p/17g99a3gNX/',
    },
    {
      en: {
        name: 'Business Owner',
        role: 'Entrepreneur',
        text: 'Smart, practical, and structured — exactly what entrepreneurs need to build their business online.',
      },
      ar: {
        name: 'صاحب عمل',
        role: 'رائد أعمال',
        text: 'ذكي، عملي، ومنظم — بالضبط اللي رواد الأعمال محتاجينه لبناء أعمالهم على الإنترنت.',
      },
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section id="reviews" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">
          {t('What Clients Say', 'ماذا يقول العملاء')}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {t('Real feedback from entrepreneurs building their online businesses', 'تعليقات حقيقية من رواد الأعمال الذين يبنون أعمالهم على الإنترنت')}
        </p>

        <div className="max-w-4xl mx-auto relative">
          <Card className="p-8 md:p-12 border-2 hover:shadow-2xl transition-all duration-500 animate-fade-in">
            <Quote className="h-12 w-12 text-accent/20 mb-6" />
            
            <div className="flex mb-4">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>

            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-foreground/90">
              "{(t(reviews[currentIndex].en, reviews[currentIndex].ar) as any).text}"
            </p>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-lg">{(t(reviews[currentIndex].en, reviews[currentIndex].ar) as any).name}</p>
                <p className="text-sm text-muted-foreground">{(t(reviews[currentIndex].en, reviews[currentIndex].ar) as any).role}</p>
              </div>
              {reviews[currentIndex].source && (
                <a
                  href={reviews[currentIndex].source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  {t('View on Facebook', 'عرض على فيسبوك')}
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
              )}
            </div>
          </Card>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
