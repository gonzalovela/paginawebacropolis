import { BookOpen, Palette, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import philosophyImage from "@/assets/philosophy-study-group.jpg";
import cultureImage from "@/assets/culture-mountain-group.jpg";
import volunteeringImage from "@/assets/volunteering-action.jpg";

export const ThreePillars = () => {
  const pillars = [
    {
      image: philosophyImage,
      title: "¡Filosofía para despertar!",
      description: "La filosofía como camino de autoconocimiento y transformación personal. Estudiamos el pensamiento de grandes maestros de Oriente y Occidente para aplicarlo a la vida cotidiana.",
      link: "/filosofia",
      titleColor: "text-primary",
    },
    {
      image: cultureImage,
      title: "¡Cultura para encontrarnos!",
      description: "La cultura como vía de encuentro entre personas, épocas y civilizaciones. Arte, música, teatro e historia para desarrollar sensibilidad y pensamiento crítico.",
      link: "/cultura",
      titleColor: "text-secondary",
    },
    {
      image: volunteeringImage,
      title: "¡Voluntariado para unir!",
      description: "El voluntariado como expresión práctica de nuestros ideales. Acción ambiental, social y cultural para construir un mundo más justo y fraternal.",
      link: "/voluntariado",
      titleColor: "text-[#e74c3c]",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Áreas de Acción
          </h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Nueva Acrópolis se sostiene sobre tres líneas de acción que se complementan entre sí: 
            filosofía para conocernos, cultura para unirnos, y voluntariado para actuar.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 group cursor-pointer"
              onClick={() => window.location.href = pillar.link}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={index === 1 ? { filter: 'brightness(1.05) saturate(1.1) sepia(0.08)' } : undefined}
                />
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className={`text-2xl md:text-3xl font-bold ${pillar.titleColor}`}>
                  {pillar.title}
                </h3>

                <p className="text-foreground/70 leading-relaxed">
                  {pillar.description}
                </p>

                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to={pillar.link}>
                    Conoce más
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
