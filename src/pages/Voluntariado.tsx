import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sprout, Users, Lightbulb, HandHeart, TreePine, ArrowRight, BookOpen } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SEO, seoConfig } from "@/components/SEO";
import volunteeringImage from "@/assets/volunteering-action.jpg";
import bannerVoluntariado from "@/assets/banner-voluntariado.jpg";
import yoAmoLecturaImage from "@/assets/voluntariado-yo-amo-lectura-warm.jpg";
import adultoMayorImage from "@/assets/voluntariado-adulto-mayor.jpg";
import humanitarioSocialImage from "@/assets/voluntariado-humanitario-social-warm.jpg";
import medioAmbienteImage from "@/assets/voluntariado-medio-ambiente.jpg";
import formacionImage from "@/assets/voluntariado-formacion.jpg";
import talleresArtisticosImage from "@/assets/voluntariado-talleres-artisticos.jpg";
import { ParallaxImage } from "@/components/ParallaxImage";
import { OptimizedImage } from "@/components/OptimizedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { VoluntariadoGallery } from "@/components/VoluntariadoGallery";

const Voluntariado = () => {
  const { elementRef: principlesRef, isVisible: principlesVisible } = useScrollAnimation();
  const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation();
  const { elementRef: areasRef, isVisible: areasVisible } = useScrollAnimation();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const principles = [
    {
      icon: Heart,
      message: "Creemos en un mundo mejor",
      description: "La utopía no es imposible, es el motor de la transformación"
    },
    {
      icon: Lightbulb,
      message: "No hay imposibles",
      description: "Los límites están en nuestra mente, no en la realidad"
    },
    {
      icon: TreePine,
      message: "Cabeza en el cielo, pies en la tierra",
      description: "Ideales elevados con acción práctica y concreta"
    },
    {
      icon: HandHeart,
      message: "Somos lo que hacemos",
      description: "Nuestras acciones definen quiénes somos realmente"
    },
    {
      icon: Users,
      message: "Vivir es construir",
      description: "Cada día es una oportunidad para crear y transformar"
    },
    {
      icon: Sprout,
      message: "Somos parte activa de la Naturaleza",
      description: "No somos dueños, somos parte del todo viviente"
    },
    {
      icon: Heart,
      message: "La fraternidad nos une",
      description: "Más allá de diferencias, somos una familia humana"
    },
    {
      icon: BookOpen,
      message: "Aprender haciendo",
      description: "El voluntariado es escuela de vida y sabiduría práctica"
    },
  ];

  const areas = [
    {
      icon: BookOpen,
      title: "Programa 'Yo Amo la Lectura'",
      description: "Dirigido a beneficiar a escolares de nivel primaria en situación de vulnerabilidad social o económica. Realizamos jornadas periódicas para que los niños cultiven el amor por la lectura y los valores que estas promueven. En algunas ciudades hemos implementado bibliotecas para colegios de escasos recursos económicos.",
      activities: [
        "Jornadas de lectura en colegios",
        "Bibliotecas comunitarias",
        "Talleres de valores",
        "Donación de libros",
      ],
      image: yoAmoLecturaImage,
    },
    {
      icon: Heart,
      title: "Programa de Acompañamiento al Adulto Mayor",
      description: "Brindamos compañía, escucha activa y actividades recreativas para adultos mayores. Promovemos su bienestar emocional y social mediante visitas regulares y programas de integración.",
      activities: [
        "Visitas a asilos",
        "Actividades recreativas",
        "Talleres de memoria",
        "Apoyo emocional",
      ],
      image: adultoMayorImage,
    },
    {
      icon: HandHeart,
      title: "Acciones de Voluntariado Humanitario y Social",
      description: "Brindamos apoyo oportuno a damnificados por friaje, huaycos y desastres naturales. Organizamos colectas y donaciones de víveres, ropa de abrigo, productos de aseo y mantenimiento. En nuestras Escuelas, equipos de voluntarios participan de talleres de tejido y confección de ropa de abrigo para donarla a comunidades altoandinas afectadas por el friaje.",
      activities: [
        "Colectas de víveres y ropa",
        "Apoyo en desastres naturales",
        "Talleres de tejido",
        "Donaciones a comunidades altoandinas",
      ],
      image: humanitarioSocialImage,
    },
    {
      icon: Sprout,
      title: "Programa de Protección del Medio Ambiente",
      description: "Eventos de concientización para el cuidado del medioambiente. Acciones ecológicas en más de 50 comunidades por el Día Internacional de la Madre Tierra. Limpieza de centros arqueológicos, playas, ríos y áreas verdes. Sembrado de árboles.",
      activities: [
        "Jornadas de reforestación",
        "Limpieza de playas y ríos",
        "Limpieza de centros arqueológicos",
        "Eventos de concientización ambiental",
      ],
      image: medioAmbienteImage,
    },
    {
      icon: Users,
      title: "Programa de Formación de Voluntarios",
      description: "Nuestros voluntarios participan de capacitaciones técnicas, formación filosófica y desarrollo de habilidades blandas. De esta manera, les damos herramientas para conocerse, desarrollar sus valores y cultivar las fortalezas que les permiten dar lo mejor de sí en el servicio a los demás.",
      activities: [
        "Capacitaciones técnicas",
        "Formación filosófica",
        "Desarrollo de habilidades",
        "Talleres de liderazgo",
      ],
      image: formacionImage,
    },
    {
      icon: Lightbulb,
      title: "Talleres Artísticos",
      description: "Desarrollamos talleres para llevar alegría y compañía. En nuestras Escuelas, el Área de Voluntariado desarrolla algunos talleres artísticos, como teatro, baile o manualidades, en el que nuestros voluntarios preparan lo que habrán de ofrecer en nuestras obras de voluntariado.",
      activities: [
        "Teatro",
        "Baile",
        "Manualidades",
        "Presentaciones artísticas",
      ],
      image: talleresArtisticosImage,
    },
  ];

  const values = [
    {
      title: "Servicio Desinteresado",
      description: "El voluntariado no busca recompensa material, sino la satisfacción de contribuir al bienestar común.",
    },
    {
      title: "Aprendizaje Continuo",
      description: "Cada acción de voluntariado es una oportunidad para aprender y crecer como personas.",
    },
    {
      title: "Fraternidad en Acción",
      description: "El voluntariado es fraternidad hecha realidad. Nos une el propósito de construir un mundo mejor.",
    },
    {
      title: "Conexión con la Naturaleza",
      description: "Reconocemos que somos parte de la naturaleza, no sus dueños. Actuamos en armonía con ella.",
    },
  ];

  return (
    <>
      <SEO 
        {...seoConfig.voluntariado}
        url="https://acropolisperu.org/voluntariado"
      />
      <div className="min-h-screen">
        <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-36 overflow-hidden mt-16 md:mt-20">
        <ParallaxImage src={bannerVoluntariado} alt="Voluntariado" speed={0.5} isHero />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-[1]" />
        
        {/* Decorative orange graphic elements - hidden on mobile for performance */}
        <div className="absolute inset-0 z-[2] pointer-events-none hidden md:block">
          {/* Large orange circles */}
          <div className="absolute top-1/4 right-10 w-64 lg:w-[420px] h-64 lg:h-[420px] bg-secondary/40 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 left-10 w-48 lg:w-80 h-48 lg:h-80 bg-orange/35 rounded-full blur-3xl animate-float-slower"></div>
          
          {/* Concentric circles animation */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] lg:w-[600px] h-[350px] lg:h-[600px] opacity-50 animate-rotate-slow" viewBox="0 0 800 800">
            <circle cx="400" cy="400" r="300" stroke="hsl(35, 90%, 55%)" strokeWidth="4" fill="none" opacity="0.4" />
            <circle cx="400" cy="400" r="220" stroke="hsl(35, 90%, 55%)" strokeWidth="4" fill="none" opacity="0.5" />
            <circle cx="400" cy="400" r="140" stroke="hsl(35, 90%, 55%)" strokeWidth="4" fill="none" opacity="0.6" />
            <circle cx="400" cy="400" r="80" fill="hsl(35, 90%, 55%)" opacity="0.3" />
          </svg>
          
          {/* Geometric accents */}
          <div className="absolute top-1/3 right-1/4 w-20 lg:w-32 h-20 lg:h-32 border-4 border-secondary/80 rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-1/3 left-1/3 w-16 lg:w-24 h-16 lg:h-24 bg-orange/70 rotate-45 animate-float-slow"></div>
          
          <svg className="absolute top-20 right-1/3 w-24 lg:w-40 h-24 lg:h-40 opacity-70" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="hsl(35, 90%, 55%)" opacity="0.5" />
          </svg>
          
          <svg className="absolute bottom-20 left-1/4 w-20 lg:w-36 h-20 lg:h-36 opacity-65 animate-float-slower" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="hsl(35, 90%, 55%)" opacity="0.5" rx="10" />
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-primary/90 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-bold mb-2 md:mb-4 shadow-lg">
              <HandHeart className="h-3.5 w-3.5 md:h-4 md:w-4" />
              VOLUNTARIADO FILOSÓFICO
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg px-2">
              Somos lo que Hacemos
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/95 leading-relaxed drop-shadow-md px-2">
              El voluntariado es la filosofía en acción. No basta con pensar en un mundo mejor, 
              hay que construirlo con nuestras propias manos.
            </p>
          </div>
        </div>
      </section>

      {/* Key Messages */}
      <section 
        ref={principlesRef}
        className={`py-10 md:py-20 bg-gradient-to-br from-background via-secondary/5 to-background transition-all duration-1000 ${
          principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Mensajes que nos Inspiran
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-foreground/70">
              Ideas que guían nuestra acción voluntaria y transforman la filosofía en realidad
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-7xl mx-auto">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <Card
                  key={index}
                  className="group p-3 md:p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                      <Icon className="h-5 w-5 md:h-8 md:w-8 text-white" />
                    </div>
                    <div className="space-y-1 md:space-y-2">
                      <h3 className="font-bold text-sm md:text-lg text-foreground leading-tight">
                        {principle.message}
                      </h3>
                      <p className="text-xs md:text-sm text-foreground/60 leading-relaxed hidden sm:block">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section 
        ref={introRef}
        className={`py-10 md:py-20 bg-gradient-subtle transition-all duration-1000 ${
          introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
            {/* Hero Image */}
            <div className="relative h-[250px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-elegant">
              <OptimizedImage 
                src={volunteeringImage} 
                alt="Voluntariado en acción" 
                className="w-full h-full object-cover"
                containerClassName="w-full h-full"
              />
            </div>
            
            <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
                ¿Qué es el Voluntariado Filosófico?
              </h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-foreground/70 leading-relaxed">
                <p>
                  El voluntariado filosófico es la puesta en práctica de nuestras ideas. 
                  Es <strong>filosofía vivida</strong>, donde los principios se transforman en acción concreta.
                </p>
                <p>
                  No se trata solo de "hacer el bien", sino de <strong>vivir coherentemente</strong> con nuestros valores. 
                  Cabeza en el cielo (ideales elevados) y pies en la tierra (acción práctica).
                </p>
                <p className="text-lg md:text-xl font-semibold text-foreground">
                  "No hay imposibles. Vivir es construir."
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-8">
              {values.map((value, index) => (
                <Card key={index} className="p-4 md:p-6 hover:shadow-medium transition-all">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{value.title}</h3>
                  <p className="text-sm md:text-base text-foreground/60 leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Action */}
      <section 
        ref={areasRef}
        className={`py-10 md:py-20 bg-background transition-all duration-1000 ${
          areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Nuestros Programas de Voluntariado
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-foreground/70">
              Programas concretos de acción solidaria que realizamos en Nueva Acrópolis Perú. 
              Cada uno responde a necesidades específicas de nuestra comunidad.
            </p>
          </div>

          <div className="space-y-4 md:space-y-8 max-w-6xl mx-auto">
          {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-elevated transition-all duration-500 group border-0">
                  <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
                    {/* Background Image with Overlay */}
                    <OptimizedImage
                      src={area.image}
                      alt={area.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      containerClassName="absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:from-black/70 md:via-black/30 group-hover:from-black/80 group-hover:via-black/40 transition-all duration-500" />
                    
                    {/* Content Overlay */}
                    <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10 text-white">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 md:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-accent/90 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                          {area.title}
                        </h3>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-2 md:mb-4 line-clamp-2 sm:line-clamp-3 group-hover:line-clamp-none transition-all">
                        {area.description}
                      </p>
                      
                      {/* Activities List - Hidden by default, shown on hover (desktop only) */}
                      <div className="hidden md:block max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-500">
                        <ul className="space-y-2 pt-2 border-t border-white/20">
                          {area.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-white/80">
                              <span className="text-accent mt-1">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Galería de Programas en Acción
            </h2>
            <p className="text-lg md:text-xl text-foreground/70">
              Fotos de nuestros programas de voluntariado y las actividades que realizamos en todo el Perú
            </p>
          </div>
          <VoluntariadoGallery />
        </div>
      </section>

      {/* Call to Action */}
      <section
        ref={ctaRef}
        className={`py-12 md:py-20 bg-gradient-subtle transition-all duration-1000 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-hero text-primary-foreground">
              <div className="text-center space-y-6">
                <Users className="h-16 w-16 mx-auto opacity-90" />
                <h3 className="text-3xl md:text-4xl font-bold">
                  Únete a Nuestra Comunidad de Voluntarios
                </h3>
                <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
                  No necesitas experiencia previa, solo ganas de contribuir y aprender. 
                  El voluntariado filosófico transforma tanto al que da como al que recibe. 
                  Es un camino de crecimiento personal y servicio a la comunidad.
                </p>
                <div className="space-y-4 pt-6">
                  <p className="text-sm opacity-75">
                    Las actividades de voluntariado se realizan regularmente. 
                    Puedes participar ocasionalmente o ser parte permanente de nuestros equipos.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                      <Link to="/inscripcion">
                        Quiero ser voluntario
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="bg-background/10 hover:bg-background/20 border-primary-foreground/30"
                      asChild
                    >
                      <Link to="/">Volver al inicio</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Voluntariado;
