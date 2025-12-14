import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram } from 'lucide-react';

export function WorkshopSection() {
    const { t } = useLanguage();

    return (
        <section id="workshop" className="py-24 bg-background overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column: Video Placeholder */}
                    <div className="flex justify-center md:justify-end animate-fade-in-left">
                        <div className="relative w-full max-w-[350px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl bg-muted border border-border/50 group">
                            {/* Fallback/Placeholder content until video is provided */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 text-zinc-500 p-8 text-center group-hover:bg-zinc-800 transition-colors duration-500">
                                <Instagram className="w-16 h-16 mb-4 opacity-50 group-hover:scale-110 transition-transform duration-500" />
                                <p className="font-medium text-sm border border-zinc-700 px-4 py-2 rounded-full backdrop-blur-sm">
                                    Instagram Short Video
                                </p>
                            </div>

                            {/* When the actual video is available, replace the div above with this iframe/video structure:
              <iframe 
                src="https://www.instagram.com/reel/VIDEO_ID/embed"
                className="w-full h-full object-cover"
                allowFullScreen
              />
              */}

                            <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 rounded-2xl" />
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="animate-fade-in-right">
                        <div className="space-y-8">
                            <div className="inline-block">
                                <h2 className="font-display text-4xl md:text-5xl font-bold mb-2 hero-text">
                                    {t('workshop.title')}
                                </h2>
                                <div className="h-1 w-full bg-gradient-to-r from-primary to-transparent rounded-full" />
                            </div>

                            <Card className="subtle-shadow hover:elegant-shadow transition-all duration-300 bg-card/50 backdrop-blur-sm border-l-4 border-l-primary/50">
                                <CardContent className="p-8">
                                    <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
                                        {t('workshop.text')}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
