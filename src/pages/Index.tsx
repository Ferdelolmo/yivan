import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { GallerySection } from '@/components/GallerySection';
import { AboutSection } from '@/components/AboutSection';
import { WorkshopSection } from '@/components/WorkshopSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <GallerySection />
        <AboutSection />
        <WorkshopSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
