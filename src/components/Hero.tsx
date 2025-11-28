import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, MapPin, Heart } from "lucide-react";
import logo from "@/assets/logo-escuela-filosofia.png";
import heroImage from "@/assets/hero-sunset-vibrant.jpg";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Link } from "react-router-dom";
import { Pointer } from "@/components/ui/pointer";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Hero background image with parallax - SEO optimized alt */}
      <ParallaxImage 
        src={heroImage} 
        alt="Persona contemplando el atardecer desde un mirador - Filosofía práctica y reflexión en Nueva Acrópolis Perú" 
        speed={0.3} 
        isHero={true} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-[1]" />

      <div className="container relative z-10 px-4 sm:px-6 text-center py-8">
        <div className="animate-fade-in-up mb-4 sm:mb-6 -mt-4 sm:-mt-8">
          <img 
            src={logo} 
            alt="Logo de Nueva Acrópolis Perú - Escuela de Filosofía práctica con más de 65 sedes en el país" 
            className="h-20 sm:h-28 md:h-36 mx-auto brightness-0 invert"
            width={288}
            height={144}
          />
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: "0.2s" }}>
          Somos una Escuela de Filosofía <br className="hidden sm:block" />para la vida
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-6 sm:mb-10 animate-fade-in-up px-2" style={{ animationDelay: "0.4s" }}>
          Aprende filosofía aplicada, desarrolla tu carácter y vive una experiencia práctica de cultura y voluntariado.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up px-4" style={{ animationDelay: "0.6s" }}>
          <div className="relative w-full sm:w-auto">
            <Pointer>
              <Heart className="w-6 h-6 text-secondary fill-secondary drop-shadow-lg ml-1" />
            </Pointer>
            <Button 
              size="lg" 
              variant="default"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-medium hover:scale-105 transition-transform"
              asChild
            >
              <Link to="/quienes-somos">
                <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Quiénes Somos
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>

          <div className="relative w-full sm:w-auto">
            <Pointer>
              <Heart className="w-6 h-6 text-secondary fill-secondary drop-shadow-lg ml-1" />
            </Pointer>
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-medium hover:scale-105 transition-transform"
              asChild
            >
              <Link to="/sedes">
                <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Encuentra tu Sede
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] -mb-1">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};
