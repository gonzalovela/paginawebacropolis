import { BookOpen, Palette, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ThreePrinciples = () => {
  const principles = [
    {
      icon: BookOpen,
      title: "Filosofía",
      subtitle: "Ideas que se viven",
      description: "Filosofía práctica para el desarrollo interior. Una filosofía comparada que integra lo mejor de Oriente y Occidente, aplicada a los desafíos de la vida moderna.",
      color: "bg-primary",
      link: "/filosofia",
    },
    {
      icon: Palette,
      title: "Cultura",
      subtitle: "Unir diferencias",
      description: "Encuentros culturales para aprender de civilizaciones antiguas, comprender la diversidad y construir puentes entre culturas, épocas y mentalidades.",
      color: "bg-secondary",
      link: "/cultura",
    },
    {
      icon: Heart,
      title: "Voluntariado",
      subtitle: "Somos lo que hacemos",
      description: "Acción con propósito en la naturaleza, cultura y acción social. Vivir en armonía con los demás y el ambiente, construyendo un mundo mejor.",
      color: "bg-accent",
      link: "/voluntariado",
    },
  ];

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
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <a
                key={index}
                href={principle.link}
                className="block"
              >
                <Card
                  className="relative overflow-hidden group hover:shadow-medium transition-all duration-500 animate-fade-in-up cursor-pointer h-full"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`absolute inset-0 ${principle.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative p-8 space-y-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${principle.color} text-primary-foreground`}>
                      <Icon className="h-8 w-8" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {principle.title}
                      </h3>
                      <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                        {principle.subtitle}
                      </p>
                      <p className="text-foreground/70 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
