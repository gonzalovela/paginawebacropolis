import { Card } from "@/components/ui/card";
import { principios } from "@/data/principios-data";

export const ThreePrinciples = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Nuestros Tres Principios
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 px-2">
            Fundados en la tradición de antiguas escuelas de sabiduría, estos principios son para nosotros medios y fines que guían todo nuestro programa de actividades.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {principios.map((principio, index) => {
            const Icon = principio.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden group hover:shadow-medium transition-all duration-500 animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 ${principio.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full ${principio.color} text-primary-foreground`}>
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1.5 sm:mb-2">
                      {principio.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-secondary uppercase tracking-wider mb-2 sm:mb-3 md:mb-4">
                      {principio.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-2 sm:mb-3">
                      {principio.description}
                    </p>
                    <p className="text-foreground/60 text-xs sm:text-sm leading-relaxed">
                      {principio.detail}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
