import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">
          Experience & Education
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Real-world business building and academic foundation in information systems
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Experience */}
          <Card className="p-8 border-l-4 border-l-primary hover:shadow-xl transition-all duration-300 animate-slide-in-left">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl font-bold">Founder & Director</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Jan 2024 – Present</span>
                  </div>
                </div>
                <p className="text-lg font-semibold text-primary mb-3">Bassera Bookstore • Egypt</p>
                <p className="text-foreground/80 leading-relaxed">
                  Built and managed a digital-first bookstore from scratch — overseeing strategy, UX, marketing, and automation systems to drive growth. 
                  This real-world laboratory allowed me to test, validate, and refine business systems that actually work in the marketplace.
                </p>
              </div>
            </div>
          </Card>

          {/* Education */}
          <Card className="p-8 border-l-4 border-l-accent hover:shadow-xl transition-all duration-300 animate-slide-in-right">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">B.Sc. in Computer & Information Sciences</h3>
                <p className="text-lg font-semibold text-accent mb-3">Zagazig University • Information Systems</p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Blended management, analytics, and technology for better business design.
                </p>
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Key Coursework:</p>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-foreground/80">
                    <li>• Strategic Planning</li>
                    <li>• Business Process Management</li>
                    <li>• Data Analytics</li>
                    <li>• Social Media Analytics</li>
                    <li>• Software Project Management</li>
                    <li>• Information Systems Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
