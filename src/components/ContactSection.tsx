import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Mail, Instagram, Calendar, Palette } from 'lucide-react';

export function ContactSection() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: '',
      value: 'hola@ivangomezaparicio.com',
      href: 'mailto:hola@ivangomezaparicio.com'
    },
    {
      icon: Instagram,
      label: '',
      value: '@ivangomezescultor',
      href: `https://www.instagram.com/ivangomezescultor`
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 hero-text">
              {t('contact.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Interesado en una obra personalizada o en conocer más sobre el proceso creativo?
              No dudes en ponerte en contacto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="subtle-shadow hover:elegant-shadow transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-6 text-primary">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-accent/50 transition-smooth"
                    >
                      <info.icon className="h-5 w-5 text-primary" />
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Exhibitions & Commissions */}
            <Card className="subtle-shadow hover:elegant-shadow transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-semibold mb-6 text-primary">
                  {t('contact.exhibition')}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Calendar className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Galería Arte Contemporáneo</p>
                      <p className="text-sm text-muted-foreground">Madrid • Marzo 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Palette className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">{t('contact.available')}</p>
                      <p className="text-sm text-muted-foreground">Consulta disponibilidad</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up">
          </div>
        </div>
      </div>
    </section>
  );
}