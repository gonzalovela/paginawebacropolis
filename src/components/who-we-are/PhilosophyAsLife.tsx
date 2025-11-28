import { BookOpen } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";
import philosophyImage from "@/assets/philosophy-study-group.jpg";

export const PhilosophyAsLife = () => {
  return (
    <div className="relative -mx-4 md:-mx-6 lg:-mx-12 xl:-mx-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage 
          src={philosophyImage} 
          alt="Filosofía como forma de vida" 
          className="w-full h-full object-cover"
          containerClassName="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
      </div>
      
      {/* Content */}
      <div className="relative py-16 sm:py-24 md:py-32 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-secondary/90 backdrop-blur-sm rounded-full text-white font-semibold mb-2 sm:mb-4 shadow-lg text-sm sm:text-base">
            <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
            Filosofía como Forma de Vida
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-medium drop-shadow-lg px-2">
            Trabajamos para mejorar el mundo y al ser humano por medio de la Filosofía en la tradición clásica: 
            una búsqueda filosófica que ofrece respuestas a los problemas contemporáneos.
          </p>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed drop-shadow-md px-2">
            No solo a través de la lectura y el conocimiento teórico, sino estableciéndonos la meta 
            de aprender a vivir bien, con fuerza y eficiencia, en cada momento de nuestras vidas.
          </p>
        </div>
      </div>
    </div>
  );
};
