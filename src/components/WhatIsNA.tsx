import { Brain, Heart, Users } from "lucide-react";

export const WhatIsNA = () => {
  const features = [
    {
      icon: Brain,
      title: "Filosofía activa",
      description: "Una filosofía comparada de Oriente y Occidente, aplicada a la vida diaria para transformar el pensamiento en acción.",
    },
    {
      icon: Heart,
      title: "Desarrollo interior",
      description: "Buscamos la armonía entre pensamiento, sentimiento y acción para el desarrollo integral de cada persona.",
    },
    {
      icon: Users,
      title: "Comunidad y fraternidad",
      description: "Promovemos un ideal de fraternidad basado en el respeto a la dignidad humana, más allá de las diferencias.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            ¿Qué es Nueva Acrópolis?
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            Nueva Acrópolis es una organización internacional filosófica, humanista y voluntaria, que promueve una filosofía comparada de Oriente y Occidente, aplicada a la vida diaria, buscando la armonía entre pensamiento, sentimiento y acción y el desarrollo integral del individuo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-card hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
