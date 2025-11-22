import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, MapPin } from "lucide-react";
import logo from "@/assets/logo-escuela-filosofia.png";
import heroImage from "@/assets/hero-sunset-vibrant.jpg";
import { ParallaxImage } from "@/components/ParallaxImage";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image with parallax */}
      <ParallaxImage src={heroImage} alt="Contemplación filosófica" speed={0.3} isHero={true} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-[1]" />

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <div className="animate-fade-in-up mb-8">
          <img 
            src={logo} 
            alt="Nueva Acrópolis - Escuela de Filosofía" 
            className="h-24 md:h-32 mx-auto mb-8 brightness-0 invert"
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Somos una Escuela de Filosofía para la vida
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          Aprende filosofía aplicada, desarrolla tu carácter y vive una experiencia práctica de cultura y voluntariado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6 shadow-medium hover:scale-105 transition-transform"
            asChild
          >
            <a href="/filosofia">
              <BookOpen className="mr-2 h-5 w-5" />
              Conoce nuestra Escuela
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>

          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 bg-background/10 hover:bg-background/20 text-primary-foreground border-primary-foreground/30 hover:border-primary-foreground/50"
            asChild
          >
            <a href="/inscripcion">
              <MapPin className="mr-2 h-5 w-5" />
              Inscríbete ahora
            </a>
          </Button>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-[2]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
