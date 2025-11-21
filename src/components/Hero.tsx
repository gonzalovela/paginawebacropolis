import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, MapPin } from "lucide-react";
import logo from "@/assets/logo-escuela-filosofia.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C46.569 0 60 13.431 60 30s-13.431 30-30 30S0 46.569 0 30 13.431 0 30 0zm0 58C45.464 58 58 45.464 58 30S45.464 2 30 2 2 14.536 2 30s12.536 28 28 28z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

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
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
