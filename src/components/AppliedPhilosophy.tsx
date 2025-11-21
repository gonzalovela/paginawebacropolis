import { Lightbulb, Target, Compass, Sparkles } from "lucide-react";

export const AppliedPhilosophy = () => {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Comprendernos mejor",
      description: "Descubrir nuestros talentos y áreas de mejora",
    },
    {
      icon: Target,
      title: "Mejorar nuestro carácter",
      description: "Desarrollar virtudes y superar limitaciones",
    },
    {
      icon: Compass,
      title: "Actuar con sentido",
      description: "Tomar decisiones alineadas con nuestros valores",
    },
    {
      icon: Sparkles,
      title: "Vivir conscientemente",
      description: "Transformar ideas en experiencias cotidianas",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Filosofía Aplicada
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                La filosofía es un camino de transformación interior. No es solo teoría académica, sino una herramienta práctica para la vida.
              </p>
              <p>
                Nos ayuda a comprendernos, mejorar nuestro carácter y actuar con sentido en un mundo complejo. Es un arte de vivir que integra lo mejor de las enseñanzas de Oriente y Occidente.
              </p>
              <p className="text-accent font-semibold">
                "Cabeza en el cielo, pies en la tierra"
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-subtle border border-border hover:shadow-soft transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
