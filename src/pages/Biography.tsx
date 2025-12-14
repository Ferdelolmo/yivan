
import { useLanguage } from '@/hooks/useLanguage';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Biography = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Note: CV Items are kept in Spanish/Original language as they are proper names/historical records
  const sections = [
    {
      title: t('biography.cv.scholarships'),
      items: t('biography.cv.scholarships_items') as string[]
    },
    {
      title: t('biography.cv.symposiums'),
      items: t('biography.cv.symposiums_items') as string[]
    },
    {
      title: t('biography.cv.awards'),
      items: t('biography.cv.awards_items') as string[]
    },
    {
      title: t('biography.cv.solo'),
      items: t('biography.cv.solo_items') as string[]
    },
    {
      title: t('biography.cv.group'),
      items: t('biography.cv.group_items') as string[]
    },
    {
      title: t('biography.cv.institutions'),
      items: t('biography.cv.institutions_items') as string[]
    },
    {
      title: t('biography.cv.monumental'),
      items: t('biography.cv.monumental_items') as string[]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-24">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('common.back')}
        </Button>

        <article className="max-w-4xl mx-auto animate-fade-in-up">
          <header className="mb-12 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 hero-text">
              Iván Gómez Aparicio
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-8" />
            <p className="text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              {t('biography.intro')}
            </p>
          </header>

          {/* Main Portrait Placeholder */}
          <div className="mb-16 rounded-xl overflow-hidden bg-muted shadow-lg animate-fade-in-up delay-75 group relative">
            <img
              src="https://i.imgur.com/J2esGBU.jpeg"
              alt="Portrait of Iván Gómez Aparicio"
              className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-12 mb-16 animate-fade-in-up delay-100">
            <section className="bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-border/30">
              <h3 className="font-display text-2xl font-semibold mb-4 text-primary">{t('biography.vision.mastery.title')}</h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {t('biography.vision.mastery.text')}
              </p>
            </section>

            <section className="bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-border/30">
              <h3 className="font-display text-2xl font-semibold mb-4 text-primary">{t('biography.vision.archetype.title')}</h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {t('biography.vision.archetype.text')}
              </p>
            </section>

            {/* Vision Gallery Placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="rounded-lg bg-muted aspect-[4/5] overflow-hidden group relative border border-border/50">
                <img
                  src="https://i.imgur.com/8WbAwXG.jpeg"
                  alt="Featured Sculpture 1"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="rounded-lg bg-muted aspect-[4/5] overflow-hidden group relative border border-border/50">
                <img
                  src="https://i.imgur.com/OLOwFXI.jpeg"
                  alt="Featured Sculpture 2"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <section className="bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-border/30">
              <h3 className="font-display text-2xl font-semibold mb-4 text-primary">{t('biography.vision.ontology.title')}</h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {t('biography.vision.ontology.text')}
              </p>
            </section>

            <section className="bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-border/30">
              <h3 className="font-display text-2xl font-semibold mb-4 text-primary">{t('biography.vision.exhibition.title')}</h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {t('biography.vision.exhibition.text')}
              </p>
            </section>
          </div>

          {/* Workshop/Studio Placeholder - Local Video */}
          <div className="mb-16 flex justify-center">
            <div className="rounded-xl overflow-hidden bg-muted aspect-[9/16] w-full max-w-[400px] border border-border/50 shadow-lg group relative">
              <video
                src={`${import.meta.env.BASE_URL}media/video_ivan.mp4`}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          <div className="grid gap-12">
            {sections.map((section, index) => (
              <section key={index} className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50 subtle-shadow hover:elegant-shadow transition-all duration-300">
                <h2 className="font-display text-2xl font-semibold mb-6 text-primary flex items-center">
                  <span className="w-2 h-8 bg-primary/20 rounded-full mr-4" />
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start text-foreground/80 leading-relaxed">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Biography;
