import { BookOpen, Palette, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ThreePillars = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: "Filosofía",
      subtitle: "Conocimiento Interior",
      description: "La filosofía como camino de autoconocimiento y transformación personal. Estudiamos el pensamiento de grandes maestros de Oriente y Occidente para aplicarlo a la vida cotidiana.",
      link: "/filosofia",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Palette,
      title: "Cultura",
      subtitle: "Puentes de Unión",
      description: "La cultura como vía de encuentro entre personas, épocas y civilizaciones. Arte, música, teatro e historia para desarrollar sensibilidad y pensamiento crítico.",
      link: "/cultura",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Heart,
      title: "Voluntariado",
      subtitle: "Filosofía en Acción",
      description: "El voluntariado como expresión práctica de nuestros ideales. Acción ambiental, social y cultural para construir un mundo más justo y fraternal.",
      link: "/voluntariado",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Tres Pilares
          </h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Nueva Acrópolis se sostiene sobre tres líneas de acción que se complementan entre sí: 
            filosofía para conocernos, cultura para unirnos, y voluntariado para actuar.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-elegant transition-all duration-300 flex flex-col"
              >
                <div className="text-center space-y-6 flex-1">
                  <div className={`mx-auto w-16 h-16 rounded-2xl ${pillar.bgColor} ${pillar.color} flex items-center justify-center`}>
                    <Icon className="h-8 w-8" strokeWidth={2} />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-foreground/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Button variant="outline" className="w-full" asChild>
                    <a href={pillar.link}>
                      Conoce más
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
