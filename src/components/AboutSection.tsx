import { GraduationCap, Store, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'B.Sc. in Information Systems',
      subtitle: 'Zagazig University',
    },
    {
      icon: Store,
      title: 'Founder of Bassera Bookstore',
      subtitle: 'Digital Business from Zero',
    },
    {
      icon: TrendingUp,
      title: 'Real-World Experience',
      subtitle: 'Not Theory, Practice',
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gradient-primary">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed mb-12">
            <p>
              I started my journey in programming but realized <strong>success in business isn't just about code</strong> — it's about systems.
              So I merged <strong>management, marketing, and sales engineering</strong> to help entrepreneurs build online businesses that sell with purpose, not luck.
            </p>
            
            <p>
              I founded <strong>Bassera Bookstore</strong> as a live experiment to build a digital business from zero — analyzing the market, designing the customer journey, and engineering repeat sales.
            </p>
            
            <p>
              This portfolio is built on <strong className="text-accent">real-world experience</strong>, not theory.
            </p>
            
            <p className="text-xl font-semibold text-primary">
              If you're ready to start or grow your project, let's build it step by step. 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
