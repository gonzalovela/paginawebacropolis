import { ParallaxImage } from "@/components/ParallaxImage";
import { SparklesText } from "@/components/ui/sparkles-text";
import bannerImage from "@/assets/banner-quienes-somos.jpg";

export const WhoWeAreHero = () => {
  return (
    <section className="relative py-14 sm:py-16 md:py-28 lg:py-36 overflow-hidden mt-16 sm:mt-20">
      <ParallaxImage src={bannerImage} alt="Grupo de estudiantes y profesores de filosofía de Nueva Acrópolis Perú en actividad comunitaria - Escuela de Filosofía" speed={0.5} isHero />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-[1]" />
      
      {/* Decorative orange graphic elements - hidden on mobile for performance */}
      <div className="absolute inset-0 z-[2] pointer-events-none hidden md:block">
        <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-secondary/40 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-0 w-72 lg:w-[450px] h-72 lg:h-[450px] bg-orange/35 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute top-16 right-16 w-32 lg:w-48 h-32 lg:h-48 border-4 border-secondary/50 rounded-full animate-float-slower"></div>
        
        <svg className="absolute top-1/3 right-10 w-40 lg:w-64 h-40 lg:h-64 opacity-50" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(35, 90%, 55%)" strokeWidth="3" />
          <circle cx="100" cy="100" r="50" fill="hsl(35, 90%, 55%)" opacity="0.3" />
        </svg>
        
        <div className="absolute bottom-24 right-1/4 w-24 lg:w-32 h-24 lg:h-32 bg-secondary/40 rotate-45 animate-float-slow"></div>
        <div className="absolute top-32 right-1/3 w-10 lg:w-14 h-10 lg:h-14 bg-secondary rounded-full opacity-60"></div>
      </div>
      
        <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4 md:space-y-6">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 bg-primary/90 backdrop-blur-sm text-white rounded-full text-[10px] sm:text-xs md:text-sm font-bold mb-2 md:mb-4 shadow-lg">
            QUIÉNES SOMOS
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg px-2">
            ¿Qué es <SparklesText sparklesCount={12} colors={{ first: "#d4a855", second: "#e8934a" }}>Nueva Acrópolis</SparklesText>?
          </h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/95 leading-relaxed drop-shadow-md px-2">
            Una Escuela de Filosofía que promueve la cultura y practica el voluntariado. Propone un ideal de valores permanentes para contribuir a la evolución individual y colectiva.
          </p>
        </div>
      </div>
    </section>
  );
};
