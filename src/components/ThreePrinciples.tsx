import { Card } from "@/components/ui/card";
import { principios } from "@/data/principios-data";

export const ThreePrinciples = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Nuestros Tres Principios
          </h2>
          <p className="text-lg md:text-xl text-foreground/80">
            Fundados en la tradición de antiguas escuelas de sabiduría, estos principios son para nosotros medios y fines que guían todo nuestro programa de actividades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {principios.map((principio, index) => {
            const Icon = principio.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden group hover:shadow-medium transition-all duration-500 animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 ${principio.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative p-8 space-y-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${principio.color} text-primary-foreground`}>
                    <Icon className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {principio.title}
                    </h3>
                    <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                      {principio.subtitle}
                    </p>
                    <p className="text-foreground/70 leading-relaxed mb-3">
                      {principio.description}
                    </p>
                    <p className="text-foreground/60 text-sm leading-relaxed">
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
