import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Pointer } from "@/components/ui/pointer";
import { Heart } from "lucide-react";
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
      alt: "Grupo de estudiantes en clase de filosofía práctica - Curso Conócete a Ti Mismo en Nueva Acrópolis",
    },
    {
      image: cultureImage,
      title: "¡Cultura para encontrarnos!",
      description: "La cultura como vía de encuentro entre personas, épocas y civilizaciones. Arte, música, teatro e historia para desarrollar sensibilidad y pensamiento crítico.",
      link: "/cultura",
      titleColor: "text-secondary",
      imageFilter: 'brightness(1.05) saturate(1.1) sepia(0.08)',
      alt: "Grupo cultural visitando sitio arqueológico en los Andes peruanos - Actividades culturales Nueva Acrópolis",
    },
    {
      image: volunteeringImage,
      title: "¡Voluntariado para unir!",
      description: "El voluntariado como expresión práctica de nuestros ideales. Acción ambiental, social y cultural para construir un mundo más justo y fraternal.",
      link: "/voluntariado",
      titleColor: "text-[#e74c3c]",
      alt: "Voluntarios de Nueva Acrópolis en actividad de ayuda comunitaria - Programas de voluntariado en Perú",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-subtle">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Áreas de Acción
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/70 px-2">
            Nueva Acrópolis se sostiene sobre tres líneas de acción que se complementan entre sí: 
            filosofía para conocernos, cultura para unirnos, y voluntariado para actuar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 group cursor-pointer relative"
              onClick={() => window.location.href = pillar.link}
            >
              <Pointer>
                <Heart className="w-6 h-6 text-secondary fill-secondary drop-shadow-lg ml-1" />
              </Pointer>
              <figure className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <OptimizedImage 
                  src={pillar.image} 
                  alt={pillar.alt}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                    pillar.imageFilter ? '' : ''
                  }`}
                  containerClassName="w-full h-full"
                  priority={index === 0}
                />
              </figure>
              
              <div className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
                <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${pillar.titleColor}`}>
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {pillar.description}
                </p>

                <Button variant="outline" className="w-full mt-2 sm:mt-4" asChild>
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
