import { useEffect, useRef, useState } from 'react';
import { Briefcase, Video, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const useCountUp = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
};

const StatsCounter = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Briefcase, value: 4, en: 'Projects', ar: 'مشاريع', prefix: '' },
    { icon: Video, value: 15, en: 'Videos', ar: 'فيديو', prefix: '+' },
    { icon: Users, value: 3, en: 'Clients', ar: 'عملاء', prefix: '' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value);
            return (
              <div
                key={index}
                ref={ref}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-3">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">
                  {stat.prefix}{count}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{t(stat.en, stat.ar)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
