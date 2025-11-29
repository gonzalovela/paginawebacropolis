import { Card } from "@/components/ui/card";
import { principios } from "@/data/principios-data";

export const WhoWeArePrinciples = () => {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground text-center mb-8 sm:mb-12">
        Nuestros Principios
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
        {principios.map((principio, index) => {
          const Icon = principio.icon;
          return (
            <Card key={index} className="p-5 sm:p-6 md:p-8 text-center hover:shadow-medium transition-all">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl sm:rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                {principio.title}
              </h3>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-3 sm:mb-4">
                {principio.description}
              </p>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                {principio.detail}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
