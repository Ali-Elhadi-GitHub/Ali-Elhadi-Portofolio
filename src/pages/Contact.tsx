import { Mail, Phone, MapPin, Send, MessageCircle, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollToTop from '@/components/ScrollToTop';

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const projectType = formData.get('projectType') as string;
    const message = formData.get('message') as string;

    const whatsappMessage = `Hi, my name is ${name}\nPhone: ${phone}\nProject Type: ${projectType}\n\n${message}`;
    window.open(`https://wa.me/201111245487?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const socialLinks = [
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/201111245487', color: 'hover:bg-[hsl(142,70%,45%)] hover:text-white hover:border-transparent' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/bizeng.alielhadi', color: 'hover:bg-primary hover:text-primary-foreground hover:border-transparent' },
    { icon: Send, label: 'Telegram', href: 'https://t.me/bizeng_alielhadi', color: 'hover:bg-primary hover:text-primary-foreground hover:border-transparent' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary mb-2">{t('GET IN TOUCH', 'تواصل معي')}</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('Contact Me', 'تواصل معي')}
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                {t("Have a project in mind? Let's discuss how I can help you grow.", 'عندك مشروع؟ دعنا نناقش كيف أساعدك على النمو.')}
              </p>
            </div>
          </ScrollAnimation>

          {/* WhatsApp CTA */}
          <ScrollAnimation animation="scale" delay={100}>
            <div className="text-center mb-12">
              <Button size="lg" className="h-14 px-10 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white shadow-lg text-lg" asChild>
                <a href="https://wa.me/201111245487?text=Hi%20Ali%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t('Message on WhatsApp', 'راسلني على واتساب')}
                </a>
              </Button>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              <ScrollAnimation animation="fade-right" delay={150}>
                {[
                  { icon: MapPin, label: t('Location', 'الموقع'), value: t('Zagazig, Egypt', 'الزقازيق، مصر') },
                  { icon: Phone, label: t('Phone', 'الهاتف'), value: '01111245487', href: 'tel:+201111245487' },
                  { icon: Mail, label: t('Email', 'البريد'), value: 'alielhadi.contact@gmail.com', href: 'mailto:alielhadi.contact@gmail.com' },
                ].map((item, i) => (
                  <Card key={i} className="p-4 border-border">
                    {item.href ? (
                      <a href={item.href} className="flex items-center gap-3 group">
                        <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className="text-sm font-medium group-hover:text-primary transition-colors">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-primary/10">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className="text-sm font-medium">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={200}>
                <div className="flex gap-2 pt-2">
                  {socialLinks.map((social, i) => (
                    <Button key={i} variant="outline" size="icon" className={`border-border ${social.color} transition-all`} asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </ScrollAnimation>
            </div>

            {/* Form */}
            <ScrollAnimation animation="fade-left" delay={200} className="lg:col-span-3">
              <Card className="p-6 border-border">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1.5">{t('Name', 'الاسم')}</label>
                      <Input id="name" name="name" placeholder={t('Your name', 'اسمك') as string} required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1.5">{t('Phone', 'الهاتف')}</label>
                      <Input id="phone" name="phone" type="tel" placeholder={t('Phone number', 'رقم الهاتف') as string} required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-1.5">{t('Project Type', 'نوع المشروع')}</label>
                    <Input id="projectType" name="projectType" placeholder={t('e.g. SaaS, E-commerce...', 'مثال: SaaS، تجارة إلكترونية...') as string} required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">{t('Message', 'رسالتك')}</label>
                    <Textarea id="message" name="message" placeholder={t('Tell me about your project...', 'أخبرني عن مشروعك...') as string} rows={4} required />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                    {t('Send Message', 'إرسال الرسالة')}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
