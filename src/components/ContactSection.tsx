import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { 
  MessageSquare,
  Facebook,
  Instagram,
  Send as TelegramIcon,
  Music,
  Linkedin,
  Twitter,
  Youtube
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const ContactSection = () => {
  const { t } = useLanguage();
  
  const contactInfo = [
    { 
      icon: Mail, 
      en: { label: 'Email', value: 'alielhadi.contact@gmail.com' },
      ar: { label: 'البريد الإلكتروني', value: 'alielhadi.contact@gmail.com' },
      href: 'mailto:alielhadi.contact@gmail.com' 
    },
    { 
      icon: Phone, 
      en: { label: 'Phone', value: '+20 111 124 5487' },
      ar: { label: 'الهاتف', value: '+20 111 124 5487' },
      href: 'tel:+201111245487' 
    },
    { 
      icon: MapPin, 
      en: { label: 'Location', value: 'Egypt' },
      ar: { label: 'الموقع', value: 'مصر' },
      href: null 
    },
  ];

  const socialLinks = [
    { icon: MessageSquare, label: 'WhatsApp', href: 'https://wa.me/201111245487' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/bizeng.alielhadi' },
    { icon: TelegramIcon, label: 'Telegram', href: 'https://t.me/bizeng_alielhadi' },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const projectType = formData.get('projectType') as string;
    const message = formData.get('message') as string;
    
    const whatsappMessage = `${t('Hello, my name is', 'مرحباً، اسمي')} ${name}\n${t('Phone:', 'الهاتف:')} ${phone}\n${t('Project type:', 'نوع المشروع:')} ${projectType}\n\n${message}`;
    const whatsappUrl = `https://wa.me/201111245487?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-primary">
            {t('Contact Me', 'تواصل معي')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const content = t(item.en, item.ar) as any;
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.href ? (
                      <a href={item.href} className="flex items-center gap-4 group">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{content.label}</p>
                          <p className="font-semibold group-hover:text-primary transition-colors">{content.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{content.label}</p>
                          <p className="font-semibold">{content.value}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card border hover:border-primary/40 hover:shadow-md transition-all duration-300 hover:scale-105"
                  title={social.label}
                >
                  <social.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t('Your Name', 'الاسم')}
                </label>
                <Input id="name" name="name" type="text" placeholder={t('Full name', 'الاسم الكامل') as string} required />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  {t('Phone Number', 'رقم الهاتف')}
                </label>
                <Input id="phone" name="phone" type="tel" placeholder={t('+20 xxx xxx xxxx', '+20 xxx xxx xxxx') as string} required />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                  {t('Project Type', 'نوع المشروع')}
                </label>
                <Input id="projectType" name="projectType" type="text" placeholder={t('e.g. Online store, clinic page...', 'مثال: متجر إلكتروني، صفحة عيادة...') as string} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t('Your Message', 'رسالتك')}
                </label>
                <Textarea id="message" name="message" placeholder={t('Tell me about your project...', 'أخبرني عن مشروعك...') as string} rows={5} required />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                {t('Send Message', 'إرسال الرسالة')}
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
