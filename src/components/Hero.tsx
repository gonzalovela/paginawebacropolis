import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, MapPin, Heart } from "lucide-react";
import logo from "@/assets/logo-escuela-filosofia.png";
import heroImage from "@/assets/hero-sunset-vibrant.jpg";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Link } from "react-router-dom";
import { Pointer } from "@/components/ui/pointer";
import { SparklesText } from "@/components/ui/sparkles-text";
import { trackButtonClick } from "@/utils/analytics";

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

      <div className="container relative z-10 px-4 sm:px-6 text-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8">
        <div className="animate-fade-in-up mb-4 sm:mb-6">
        <img 
            src={logo} 
            alt="Logo de Nueva Acrópolis Perú - Escuela de Filosofía práctica con más de 65 sedes en el país" 
            className="h-20 sm:h-28 md:h-36 w-auto mx-auto brightness-0 invert"
          />
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: "0.2s" }}>
          Somos una <SparklesText sparklesCount={12} colors={{ first: "#d4a855", second: "#e8934a" }}>Escuela de Filosofía</SparklesText> <br className="hidden sm:block" />para la vida
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-6 sm:mb-10 animate-fade-in-up px-2" style={{ animationDelay: "0.4s" }}>
          Encuentra respuestas profundas sobre la vida y vive la experiencia práctica de la cultura y el voluntariado.
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
              onClick={() => trackButtonClick('Hero', 'Quiénes Somos', '/quienes-somos')}
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
              onClick={() => trackButtonClick('Hero', 'Encuentra tu Sede', '/sedes')}
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

      {/* Wave decoration at bottom - with background fill to prevent gaps */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] -mb-1">
        {/* Background fill to cover any gaps at corners */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#2a1810] via-[#4a2520] to-transparent -z-10" />
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 180L48 165C96 150 192 120 288 97.5C384 75 480 60 576 67.5C672 75 768 105 864 120C960 135 1056 135 1152 120C1248 105 1344 75 1392 60L1440 45V180H1392C1344 180 1248 180 1152 180C1056 180 960 180 864 180C768 180 672 180 576 180C480 180 384 180 288 180C192 180 96 180 48 180H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};
