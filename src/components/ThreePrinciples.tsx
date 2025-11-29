import { Users, Lightbulb, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ThreePrinciples = () => {
  const principles = [
    {
      icon: Users,
      title: "Fraternidad",
      subtitle: "Respeto a la dignidad humana",
      description: "Promover un ideal de fraternidad basado en el respeto a la dignidad humana, más allá de las diferencias de sexo, culturales, religiosas, sociales, etc.",
      detail: "Este ideal de fraternidad halla su fuerza en lo que nos une más que en lo que nos separa. Se afirma en el reconocimiento de valores universales que trascienden los propios usos y costumbres locales.",
      color: "bg-primary",
    },
    {
      icon: Lightbulb,
      title: "Conocimiento",
      subtitle: "Amor a la sabiduría",
      description: "Fomentar el amor a la sabiduría a través del estudio comparado de filosofías, religiones, ciencias y artes, para promover el conocimiento del ser humano, de la Naturaleza y del Universo.",
      detail: "Entendemos la filosofía como eje relacionador de las diferentes facetas del conocimiento humano, uniendo las fuentes del pasado y el presente en una visión global e integradora.",
      color: "bg-secondary",
    },
    {
      icon: Sparkles,
      title: "Desarrollo",
      subtitle: "Realizar lo mejor de uno mismo",
      description: "Desarrollar lo mejor del ser humano, promoviendo su realización como individuo y como miembro activo de la sociedad. Actuar en armonía con la Naturaleza para mejorar el mundo.",
      detail: "El logro de la armonía entre pensamiento, sentimiento y acción es una meta para todo ser humano. Un desarrollo equilibrado de uno mismo es la única garantía hacia un mundo mejor.",
      color: "bg-accent",
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
              <Card
                key={index}
                className="relative overflow-hidden group hover:shadow-medium transition-all duration-500 animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 ${principle.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative p-8 space-y-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${principle.color} text-primary-foreground`}>
                    <Icon className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm font-medium text-secondary uppercase tracking-wider mb-4">
                      {principle.subtitle}
                    </p>
                    <p className="text-foreground/70 leading-relaxed mb-3">
                      {principle.description}
                    </p>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {principle.detail}
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
