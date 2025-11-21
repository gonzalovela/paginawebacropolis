import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sprout, Heart, BookOpen, HandHeart } from "lucide-react";

export const Volunteering = () => {
  const messages = [
    "Creemos en un mundo mejor",
    "No hay imposibles",
    "Cabeza en el cielo, pies en la tierra",
    "Somos lo que hacemos",
    "Vivir es construir",
    "Somos parte activa de la Naturaleza",
  ];

  const programs = [
    {
      icon: Sprout,
      title: "Acción Ambiental",
      description: "Reforestación, limpieza de espacios naturales y educación ambiental. Trabajamos en armonía con la Madre Tierra.",
      color: "bg-secondary",
    },
    {
      icon: Heart,
      title: "Acción Social",
      description: "Apoyo a comunidades vulnerables, bancos de alimentos y programas educativos para niños y jóvenes.",
      color: "bg-accent",
    },
    {
      icon: BookOpen,
      title: "Programas Culturales",
      description: "Bibliotecas comunitarias, talleres gratuitos y difusión cultural en espacios públicos.",
      color: "bg-primary",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Voluntariado Filosófico
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-8">
            El voluntariado es la puesta en práctica de nuestras ideas, y nuestro propósito de vivir en armonía con los demás y el ambiente.
          </p>
          
          {/* Key messages */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {messages.map((message, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {message}
              </div>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="relative overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 ${program.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative p-8 space-y-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${program.color} text-primary-foreground`}>
                    <Icon className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {program.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <Card className="p-8 md:p-12 bg-gradient-hero text-primary-foreground text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <HandHeart className="h-16 w-16 mx-auto" />
            <h3 className="text-3xl md:text-4xl font-bold">
              Únete a nuestra comunidad de voluntarios
            </h3>
            <p className="text-lg opacity-90">
              No necesitas experiencia previa, solo ganas de contribuir y aprender. 
              El voluntariado filosófico transforma tanto al que da como al que recibe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary">
                Quiero ser voluntario
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-background/10 hover:bg-background/20 text-primary-foreground border-primary-foreground/30"
              >
                Conocer más
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
