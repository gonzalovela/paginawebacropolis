import { Card } from "@/components/ui/card";
import { OptimizedImage } from "@/components/OptimizedImage";
import acropolisImage from "@/assets/acropolis-athens-elevated-clean.jpg";

export const WhoWeAreSymbolism = () => {
  return (
    <Card className="overflow-hidden bg-gradient-subtle">
      <div className="space-y-0">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground px-4 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6">
          El Simbolismo de Nueva Acrópolis
        </h3>
        
        {/* Wide horizontal image */}
        <div className="w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
          <OptimizedImage 
            src={acropolisImage} 
            alt="Vista panorámica de la Acrópolis de Atenas desde la ciudad baja - Simbolismo de Nueva Acrópolis como ciudad alta del pensamiento filosófico" 
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
        </div>
        
        {/* Text below image */}
        <div className="px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10">
          <div className="max-w-4xl mx-auto space-y-4 text-foreground/70 leading-relaxed text-base sm:text-lg">
            <p>
              En la antigua Grecia, la <strong className="text-foreground">Acrópolis</strong> designaba la parte más alta de la ciudad, 
              donde se establecía el contacto entre lo visible y lo invisible.
            </p>
            <p>
              <span className="text-secondary font-semibold">"Acro"</span> significa buscar lo mejor en uno mismo, 
              <span className="text-secondary font-semibold"> "polis"</span> implica compromiso con la sociedad, 
              y <span className="text-secondary font-semibold"> "nueva"</span> significa dar forma contemporánea 
              a estos valores filosóficos atemporales.
            </p>
            <p className="text-lg sm:text-xl font-semibold text-foreground pt-4">
              Nuestro mundo necesita nuevas acrópolis, no hechas de piedra sino de seres humanos, 
              elevadas en el corazón de nuestras ciudades para crecer internamente y restablecer
              los lazos profundos que pueden unirnos.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
