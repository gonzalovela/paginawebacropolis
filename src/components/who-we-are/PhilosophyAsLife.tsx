import { BookOpen } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";
import philosophyImage from "@/assets/filosofia-vida-banner.jpg";

export const PhilosophyAsLife = () => {
  return (
    <div className="space-y-8">
      {/* Image with Headline */}
      <div className="relative -mx-4 md:-mx-6 lg:-mx-12 xl:-mx-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <OptimizedImage 
            src={philosophyImage} 
            alt="Filosofía como forma de vida - Nueva Acrópolis" 
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>
        
        {/* Content on Image */}
        <div className="relative py-20 sm:py-28 md:py-36 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-secondary/90 backdrop-blur-sm rounded-full text-white font-semibold shadow-lg text-sm sm:text-base">
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
              Filosofía como Forma de Vida
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight drop-shadow-lg px-2">
              Formando mejores personas, mejoramos el mundo
            </h2>
          </div>
        </div>
      </div>

      {/* Text below image */}
      <div className="max-w-4xl mx-auto text-center space-y-4 px-4">
        <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
          Trabajamos para mejorar el mundo y al ser humano por medio de la Filosofía en la tradición clásica: 
          una búsqueda filosófica que ofrece respuestas a los problemas contemporáneos.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed">
          No solo a través de la lectura y el conocimiento teórico, sino estableciéndonos la meta 
          de aprender a vivir bien, con fuerza y eficiencia, en cada momento de nuestras vidas.
        </p>
      </div>
    </div>
  );
};
