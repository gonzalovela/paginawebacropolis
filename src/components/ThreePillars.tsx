import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Pointer } from "@/components/ui/pointer";
import { Heart } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import philosophyImage from "@/assets/philosophy-contemplation-peru.jpg";
import cultureImage from "@/assets/cultura-filosofica-sacsayhuaman.jpg";
import volunteeringImage from "@/assets/banner-voluntariado.jpg";

export const ThreePillars = () => {
  const pillars = [
    {
      image: philosophyImage,
      title: "Filosofía para conocerse",
      description: "La Filosofía es un camino de autoconocimiento y transformación. Aprendemos de la sabiduría filosófica de Oriente y Occidente para enfrentar con éxito los desafíos de la vida.",
      link: "/filosofia",
      titleColor: "text-primary",
      alt: "Grupo de estudiantes en clase de filosofía práctica - Curso Conócete a Ti Mismo en Nueva Acrópolis",
    },
    {
      image: cultureImage,
      title: "Cultura para encontrarnos",
      description: "La cultura es una vía de encuentro entre personas, épocas, conocimientos y civilizaciones. Promovemos el arte, la música, la danza, el teatro y la historia para desarrollar sensibilidad y pensamiento crítico.",
      link: "/cultura",
      titleColor: "text-secondary",
      imageFilter: 'brightness(1.05) saturate(1.1) sepia(0.08)',
      alt: "Grupo cultural visitando sitio arqueológico en los Andes peruanos - Actividades culturales Nueva Acrópolis",
    },
    {
      image: volunteeringImage,
      title: "Voluntariado para transformar",
      description: "Nuestro voluntariado expresa los valores de nuestra Filosofía de vida. Beneficiamos la educación de niños y jóvenes, fomentamos el cuidado a la naturaleza y brindamos apoyo social a quienes más lo necesitan.",
      link: "/voluntariado",
      titleColor: "text-[#e74c3c]",
      alt: "Voluntarios de Nueva Acrópolis en actividad de ayuda comunitaria - Programas de voluntariado en Perú",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-subtle">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Áreas de Acción
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 group cursor-pointer relative h-full flex flex-col"
              onClick={() => window.location.href = pillar.link}
            >
              <Pointer>
                <Heart className="w-6 h-6 text-secondary fill-secondary drop-shadow-lg ml-1" />
              </Pointer>
              <figure className="relative h-48 sm:h-56 lg:h-64 overflow-hidden flex-shrink-0">
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
              
              <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-grow">
                <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${pillar.titleColor} mb-3 sm:mb-4`}>
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed flex-grow">
                  {pillar.description}
                </p>

                <div className="relative w-full mt-4 sm:mt-6 overflow-hidden rounded-md">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={pillar.link}>
                      Conoce más
                    </Link>
                  </Button>
                  <BorderBeam size={30} duration={4} colorFrom="hsl(var(--primary))" colorTo="hsl(var(--secondary))" />
                  <BorderBeam size={30} duration={4} colorFrom="hsl(var(--secondary))" colorTo="hsl(var(--primary))" delay={2} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
