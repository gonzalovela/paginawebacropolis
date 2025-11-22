import { Card } from "@/components/ui/card";
import { Heart, BookOpen, Users, Sparkles } from "lucide-react";

export const WhoWeAre = () => {
  const principles = [
    {
      icon: Heart,
      title: "Fraternidad",
      description: "Promovemos un ideal de fraternidad basado en el respeto a la dignidad humana, más allá de cualquier diferencia de género, cultura, religión o clase social.",
    },
    {
      icon: BookOpen,
      title: "Conocimiento",
      description: "Fomentamos el amor a la sabiduría a través del estudio comparado de filosofías, religiones, ciencias y artes para lograr un conocimiento del ser humano y el universo.",
    },
    {
      icon: Sparkles,
      title: "Desarrollo",
      description: "Desarrollamos lo mejor del ser humano promoviendo la realización individual y como miembro activo de la sociedad, en armonía con la naturaleza.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main intro */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              ¿Quiénes Somos?
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p className="text-xl font-semibold text-foreground">
                Nueva Acrópolis es una Escuela de Filosofía que promueve la cultura y practica el voluntariado.
              </p>
              <p>
                Fundada en 1957 en Buenos Aires, Argentina, por el profesor Jorge Ángel Livraga Rizzi, 
                hoy Nueva Acrópolis está presente en más de 50 países de los cinco continentes, 
                ofreciendo un espacio de encuentro donde la filosofía se vive de manera práctica y actual.
              </p>
            </div>
          </div>

          {/* Symbolism */}
          <Card className="p-8 md:p-12 mb-16 bg-gradient-subtle">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <Users className="h-12 w-12 mx-auto text-primary mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                El Simbolismo de Nueva Acrópolis
              </h3>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  En la antigua Grecia, la <strong>Acrópolis</strong> designaba la parte más alta de la ciudad, 
                  donde se establecía el contacto entre lo visible y lo invisible.
                </p>
                <p>
                  <span className="text-secondary font-semibold">"Acro"</span> significa buscar lo mejor en uno mismo, 
                  <span className="text-secondary font-semibold"> "polis"</span> implica compromiso con la sociedad, 
                  y <span className="text-secondary font-semibold">"nueva"</span> significa dar forma contemporánea 
                  a estos valores filosóficos atemporales.
                </p>
                <p className="text-lg font-semibold text-foreground pt-4">
                  Nuestro mundo necesita nuevas acrópolis, no hechas de piedra sino de seres humanos, 
                  elevadas en el corazón de nuestras ciudades para crecer internamente y restablecer 
                  los lazos profundos que pueden unirnos.
                </p>
              </div>
            </div>
          </Card>

          {/* Principles */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-12">
              Nuestros Principios
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <Card key={index} className="p-8 text-center hover:shadow-medium transition-all">
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-4">
                      {principle.title}
                    </h4>
                    <p className="text-foreground/70 leading-relaxed">
                      {principle.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Philosophy as way of life */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-full text-secondary font-semibold mb-4">
              <BookOpen className="h-5 w-5" />
              Filosofía como Forma de Vida
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Trabajamos para mejorar el mundo y al ser humano por medio de la Filosofía en la tradición clásica: 
              una búsqueda filosófica que ofrece respuestas a los problemas contemporáneos.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              No solo a través de la lectura y el conocimiento teórico, sino estableciéndonos la meta 
              de aprender a vivir bien, con fuerza y eficiencia, en cada momento de nuestras vidas. 
              Aprovechando las oportunidades que surgen y aprendiendo algo positivo incluso de la adversidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};