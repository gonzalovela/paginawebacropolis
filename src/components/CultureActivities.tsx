import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Lightbulb, Music } from "lucide-react";

export const CultureActivities = () => {
  const activities = [
    {
      icon: Calendar,
      title: "Charlas culturales",
      description: "Conferencias sobre filosofía, historia y civilizaciones antiguas. Exploramos las grandes ideas que han marcado a la humanidad.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Lightbulb,
      title: "Talleres prácticos",
      description: "Sesiones interactivas donde la filosofía se vuelve experiencia vivencial. Desde meditación hasta retórica.",
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Music,
      title: "Arte y humanidades",
      description: "Teatro, música, pintura y expresión artística como vías de desarrollo personal y comprensión cultural.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Users,
      title: "Encuentros filosóficos",
      description: "Tertulias y debates sobre temas de actualidad desde una perspectiva filosófica atemporal.",
      color: "bg-turquoise/10 text-turquoise",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Cultura y Actividades
          </h2>
          <p className="text-lg md:text-xl text-foreground/80">
            La cultura es una vía de acceso a la comprensión entre personas, épocas y mentalidades. Construir puentes, no trincheras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${activity.color} flex-shrink-0`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-primary">
                      {activity.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-subtle">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                ¿Quieres participar en nuestras actividades?
              </h3>
              <p className="text-foreground/80 max-w-md">
                Todas las actividades culturales son gratuitas y abiertas al público.
              </p>
              <Button size="lg">
                Ver calendario de eventos
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
