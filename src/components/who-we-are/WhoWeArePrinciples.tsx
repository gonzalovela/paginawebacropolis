import { Card } from "@/components/ui/card";
import { Heart, BookOpen, Sparkles } from "lucide-react";

const principles = [
  {
    icon: Heart,
    title: "Fraternidad",
    description: "Promover un ideal de fraternidad basado en el respeto a la dignidad humana, más allá de cualquier diferencia de género, cultura, religión, clase social, etc.",
    detail: "La fuerza de este ideal reside más en lo que nos une que en lo que nos separa, basándose en valores universales que trascienden prácticas locales y promueven el respeto por los derechos humanos y principios éticos comunes."
  },
  {
    icon: BookOpen,
    title: "Conocimiento",
    description: "Fomentar el amor a la sabiduría a través del estudio comparado de filosofías, religiones, ciencias y artes, para lograr un conocimiento del ser humano, la naturaleza y el universo.",
    detail: "La filosofía puede reunir las fuentes del pasado y del presente en una visión global e integradora, convirtiéndose en una fuerza real de progreso que explora los caminos de la vida y profundiza en sus fines últimos."
  },
  {
    icon: Sparkles,
    title: "Desarrollo",
    description: "Desarrollar lo mejor del ser humano promoviendo la realización de cada persona como individuo y como miembro activo de la sociedad. Actuar en armonía con la Naturaleza para mejorar el mundo.",
    detail: "El logro de la armonía entre pensamiento, sentimiento y acción es un objetivo para cada ser humano. El desarrollo equilibrado de nuestras mejores cualidades es la garantía de avanzar hacia un mundo mejor."
  },
];

export const WhoWeArePrinciples = () => {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground text-center mb-8 sm:mb-12">
        Nuestros Principios
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
        {principles.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <Card key={index} className="p-5 sm:p-6 md:p-8 text-center hover:shadow-medium transition-all">
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl sm:rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                {principle.title}
              </h3>
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-3 sm:mb-4">
                {principle.description}
              </p>
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                {principle.detail}
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
