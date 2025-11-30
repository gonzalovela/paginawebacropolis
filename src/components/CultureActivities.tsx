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
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Cultura y Actividades
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 px-2">
            La cultura es una vía de acceso a la comprensión entre personas, épocas y mentalidades. Construir puentes, no trincheras.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card
                key={index}
                className="p-4 sm:p-6 md:p-8 hover:shadow-medium transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                  <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl ${activity.color} flex-shrink-0`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-primary">
                      {activity.title}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
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
          <Card className="inline-block p-5 sm:p-6 md:p-8 bg-gradient-subtle max-w-md mx-auto">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                ¿Quieres participar en nuestras actividades?
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 max-w-md">
                Todas las actividades culturales son gratuitas y abiertas al público.
              </p>
              <Button size="lg" className="w-full sm:w-auto">
                Ver calendario de eventos
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
