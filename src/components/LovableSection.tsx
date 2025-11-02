import { useEffect, useRef, useState } from 'react';
import { Sparkles, MousePointer, Gauge, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LovableSection = () => {
  const [counters, setCounters] = useState({ years: 0, skills: 0, reach: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { years: 3, skills: 15, reach: 1000 };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        years: Math.floor(targets.years * progress),
        skills: Math.floor(targets.skills * progress),
        reach: Math.floor(targets.reach * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const features = [
    {
      icon: MousePointer,
      title: 'Hover Interactions',
      description: 'Buttons that pulse, icons that rotate, and elements that respond to your cursor',
    },
    {
      icon: Sparkles,
      title: 'Scroll-Triggered Motion',
      description: 'Cards fade and slide as you scroll, creating a dynamic storytelling experience',
    },
    {
      icon: Gauge,
      title: 'Animated Counters',
      description: 'Live statistics that count up when they enter the viewport',
    },
    {
      icon: Eye,
      title: 'Parallax Effects',
      description: 'Layers move at different speeds creating depth and visual interest',
    },
  ];

  return (
    <section id="lovable" ref={sectionRef} className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold mb-6 animate-pulse-glow">
            <Sparkles className="h-4 w-4" />
            Motion & Interactions Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            Lovable Animations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Demonstrating smooth motion, micro-interactions, and animation capabilities — because great design moves.
          </p>
        </div>

        {/* Animated Counter Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {[
            { value: counters.years, label: 'Years Experience', suffix: '+' },
            { value: counters.skills, label: 'Skills Mastered', suffix: '+' },
            { value: counters.reach, label: 'Entrepreneurs Reached', suffix: '+' },
          ].map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 border-2 border-primary/20 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl font-bold text-gradient-primary mb-2">
                {stat.suffix && stat.value > 0 ? `${stat.value}${stat.suffix}` : stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Feature Cards with Hover Effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group border-2 hover:border-accent/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-accent/10 rounded-lg inline-flex mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Interactive Demo Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
            Hover Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 animate-pulse-glow"
          >
            <MousePointer className="mr-2 h-5 w-5" />
            Click to Interact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LovableSection;
