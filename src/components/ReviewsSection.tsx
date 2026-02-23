import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const ReviewsSection = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      en: {
        name: 'Dr. Ashraf Kotob',
        role: 'Video Editing, Voice Over & Social Media Management Client',
        text: 'Good luck, God willing. Skilled and hardworking.',
      },
      ar: {
        name: 'دكتور أشرف قطب',
        role: 'عميل مونتاج وتعليق صوتي وإدارة سوشيال ميديا',
        text: 'بالتوفيق إن شاء الله، شاطر ومجتهد.',
      },
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">
          {t('Client Reviews', 'آراء العملاء')}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          {t('Real feedback from clients I worked with', 'تقييمات حقيقية من عملاء تعاملت معهم')}
        </p>

        <div className="max-w-3xl mx-auto">
          {reviews.map((review, index) => {
            const content = t(review.en, review.ar) as { name: string; role: string; text: string };
            return (
              <Card key={index} className="p-8 md:p-12 border-2 hover:shadow-2xl transition-all duration-500 animate-fade-in">
                <Quote className="h-12 w-12 text-accent/20 mb-6" />

                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-foreground/90">
                  "{content.text}"
                </p>

                <div>
                  <p className="font-bold text-lg">{content.name}</p>
                  <p className="text-sm text-muted-foreground">{content.role}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
