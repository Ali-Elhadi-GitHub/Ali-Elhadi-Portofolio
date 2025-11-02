import { 
  Briefcase, 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings, 
  Target, 
  Globe, 
  PieChart, 
  Zap, 
  UsersRound, 
  CheckCircle 
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    { icon: Briefcase, label: 'Business Management' },
    { icon: TrendingUp, label: 'Digital Marketing' },
    { icon: ShoppingCart, label: 'E-commerce Strategy' },
    { icon: Users, label: 'Customer Journey Mapping' },
    { icon: BarChart3, label: 'Performance Analysis' },
    { icon: Settings, label: 'Operations Management' },
    { icon: Target, label: 'Strategic Planning' },
    { icon: Globe, label: 'Web & Social Media Analytics' },
    { icon: PieChart, label: 'Data Visualization' },
    { icon: Zap, label: 'Process Optimization' },
    { icon: UsersRound, label: 'Team Leadership' },
    { icon: CheckCircle, label: 'Decision Making' },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient-primary">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A blend of business strategy, marketing insight, and data-driven decision making
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <skill.icon className="h-10 w-10 mx-auto mb-3 text-primary group-hover:text-accent transition-colors duration-300" />
              <p className="font-semibold text-sm">{skill.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
