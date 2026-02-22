import { useEffect, useState, useRef } from 'react';
import { Briefcase, Video, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const useCountUp = (target: number, duration: number = 2000, startCounting: boolean = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!startCounting) return;
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
  }, [target, duration, startCounting]);

  return count;
};

const StatsCounter = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const projects = useCountUp(4, 1500, visible);
  const videos = useCountUp(15, 1500, visible);
  const clients = useCountUp(3, 1500, visible);

  const stats = [
    { icon: Briefcase, value: projects, label: t('Projects', 'مشاريع') },
    { icon: Video, value: videos, prefix: '+', label: t('Videos', 'فيديو') },
    { icon: Users, value: clients, label: t('Clients', 'عملاء') },
  ];

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2 animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <stat.icon className="h-8 w-8 mx-auto text-primary-foreground/80" />
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground">
                {stat.prefix && stat.value > 0 ? stat.prefix : ''}{stat.value}
              </div>
              <p className="text-primary-foreground/80 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
