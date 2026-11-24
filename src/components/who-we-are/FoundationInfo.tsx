import { Card } from "@/components/ui/card";
import { Globe, Building2, HandHeart } from "lucide-react";

export const FoundationInfo = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      <Card className="p-5 sm:p-6 md:p-8 rounded-2xl hover:shadow-medium hover:-translate-y-1 transition-all">
        <Globe className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4 sm:mb-6" />
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Fundación</h3>
        <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
          Nueva Acrópolis fue fundada en 1957 en Buenos Aires, Argentina. Hoy está presente en más de 50 países.
        </p>
      </Card>

      <Card className="p-5 sm:p-6 md:p-8 rounded-2xl hover:shadow-medium hover:-translate-y-1 transition-all">
        <Building2 className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4 sm:mb-6" />
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Organización</h3>
        <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
          Registrada como asociación internacional sin fines de lucro, con sede en Bruselas.
        </p>
      </Card>

      <Card className="p-5 sm:p-6 md:p-8 rounded-2xl hover:shadow-medium hover:-translate-y-1 transition-all sm:col-span-2 md:col-span-1">
        <HandHeart className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4 sm:mb-6" />
        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Estructura</h3>
        <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
          Garantiza el respeto por la diversidad y autonomía de cada asociación miembro.
        </p>
      </Card>
    </div>
  );
};
