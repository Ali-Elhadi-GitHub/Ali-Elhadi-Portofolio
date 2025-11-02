import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: 'Ahmed Hassan',
      role: 'E-commerce Founder',
      text: 'Ali helped us turn marketing chaos into a clear system. Our sales doubled in 3 months.',
      rating: 5,
    },
    {
      name: 'Sara Mohamed',
      role: 'Digital Entrepreneur',
      text: 'Smart, practical, and structured — exactly what entrepreneurs need. No fluff, just results.',
      rating: 5,
    },
    {
      name: 'Omar Abdullah',
      role: 'Startup Owner',
      text: 'The strategic approach Ali brings is invaluable. He understands both business and technology.',
      rating: 5,
    },
    {
      name: 'Mona Youssef',
      role: 'Online Business Owner',
      text: 'Finally, someone who combines marketing knowledge with practical business systems.',
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
          What Clients Say
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Real feedback from entrepreneurs building their online businesses
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
              "{reviews[currentIndex].text}"
            </p>

            <div>
              <p className="font-bold text-lg">{reviews[currentIndex].name}</p>
              <p className="text-sm text-muted-foreground">{reviews[currentIndex].role}</p>
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
