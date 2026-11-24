import { Card } from "@/components/ui/card";
import { OptimizedImage } from "@/components/OptimizedImage";
import acropolisImage from "@/assets/acropolis-athens-elevated-clean.jpg";

export const WhoWeAreSymbolism = () => {
  return (
    <Card className="overflow-hidden rounded-3xl border border-secondary/20 bg-secondary/5">
      <div className="space-y-0">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-center text-foreground px-4 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6">
          El Simbolismo de <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">Nueva Acrópolis</span>
        </h3>
        
        {/* Wide horizontal image */}
        <div className="w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl">
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
              En la antigua Grecia, la <strong className="text-foreground">Acrópolis</strong> designaba la parte más elevada de la ciudad. 
              Allí se establecía el contacto entre <span className="text-secondary font-semibold">lo visible y lo invisible</span>.
            </p>
            <p>
              Se trata de un lugar simbólico para nuestra imaginación, que sugiere <span className="text-secondary font-semibold">ascender hacia lo más elevado de uno mismo</span>.
            </p>
            <p>
              <span className="text-secondary font-semibold">«Acro»</span> (<em>"elevado"</em>) se refiere a alcanzar <span className="text-secondary font-semibold">lo mejor de uno mismo</span>; <span className="text-secondary font-semibold">«polis»</span> (<em>"ciudad"</em>) implica estar <span className="text-secondary font-semibold">comprometidos con la sociedad</span>; y <span className="text-secondary font-semibold">«nueva»</span> significa dar una forma actual a estos <span className="text-secondary font-semibold">valores filosóficos atemporales</span>.
            </p>
            <p className="text-lg sm:text-xl font-semibold text-foreground pt-4">
              Consideramos que el mundo actual necesita <span className="text-secondary">nuevas acrópolis</span>, no hechas de piedra sino de <span className="text-secondary">seres humanos</span>, levantadas en el <span className="text-secondary">corazón</span> de nuestras ciudades, para <span className="text-secondary">crecer interiormente</span> y recuperar los <span className="text-secondary">lazos profundos</span> que nos unan con <span className="text-secondary">los demás y con la naturaleza</span>.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
