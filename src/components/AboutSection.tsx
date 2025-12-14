import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { Hammer, Palette, Award } from 'lucide-react';

export function AboutSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Hammer,
      title: 'Técnica Artesanal',
      description: 'Combinando técnicas tradicionales con visión contemporánea'
    },
    {
      icon: Palette,
      title: 'Materiales Nobles',
      description: 'Metal, piedra y madera trabajados con maestría'
    },
    {
      icon: Award,
      title: 'Reconocimiento',
      description: 'Obras expuestas en galerías nacionales e internacionales'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 hero-text">
                {t('about.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full mb-8" />

              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                {t('about.text')}
              </p>



              <div className="mb-12">
                <a href="/biography" className="inline-flex items-center text-primary font-medium hover:text-primary-glow transition-colors">
                  Ver Biografía Completa
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="text-center subtle-shadow hover:elegant-shadow transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <feature.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Image placeholder - could be replaced with actual artist photo */}
            <div className="animate-scale-in">
              <Card className="elegant-shadow">
                <CardContent className="p-8">
                  <div className="aspect-square bg-gradient-to-br from-accent to-muted rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.imgur.com/E4kymfL.jpeg"
                      alt="Iván Gómez Aparicio"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}