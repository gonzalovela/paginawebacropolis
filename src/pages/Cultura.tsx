import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palette, Music, Theater, BookOpen, Globe, Users, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import cultureImage from "@/assets/culture-chavin-archaeological.jpg";
import bannerCultura from "@/assets/banner-cultura.jpg";
import { ParallaxImage } from "@/components/ParallaxImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const Cultura = () => {
  const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation();
  const { elementRef: activitiesRef, isVisible: activitiesVisible } = useScrollAnimation();
  const { elementRef: participationRef, isVisible: participationVisible } = useScrollAnimation();

  const activities = [
    {
      icon: BookOpen,
      title: "Charlas y Conferencias",
      description: "Exploramos temas de historia, filosofía, arte y ciencias desde una perspectiva humanista. Cada charla busca conectar el pasado con el presente para comprender mejor el mundo actual.",
      topics: ["Filosofía antigua", "Civilizaciones perdidas", "Arte y simbolismo", "Ciencia y ética"],
    },
    {
      icon: Theater,
      title: "Teatro y Expresión",
      description: "El teatro como herramienta de autoconocimiento. Montamos obras con contenido filosófico y desarrollamos talleres de expresión corporal y vocal.",
      topics: ["Teatro filosófico", "Expresión corporal", "Voz y retórica", "Improvisación"],
    },
    {
      icon: Music,
      title: "Música y Artes",
      description: "La música como lenguaje universal. Conciertos, talleres de instrumentos, canto coral y exploración de tradiciones musicales del mundo.",
      topics: ["Canto coral", "Instrumentos tradicionales", "Historia de la música", "Musicoterapia"],
    },
    {
      icon: Globe,
      title: "Encuentros Culturales",
      description: "Celebraciones de culturas del mundo, exposiciones de arte, proyecciones de cine con debate y tertulias filosóficas en un ambiente cercano y fraternal.",
      topics: ["Festivales culturales", "Cine-debates", "Tertulias", "Exposiciones"],
    },
  ];

  const values = [
    {
      title: "Unir Diferencias",
      description: "La cultura es un puente entre personas, épocas y civilizaciones. Reunimos las diferencias en lugar de separarlas.",
    },
    {
      title: "Aprender del Pasado",
      description: "Tenemos mucho pasado por delante. Las antiguas civilizaciones tienen mucho que enseñarnos sobre cómo vivir hoy.",
    },
    {
      title: "Cultivarse",
      description: "Cultura es cultivarse. Cada actividad cultural es una oportunidad para desarrollar nuevas capacidades y sensibilidades.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <ParallaxImage src={bannerCultura} alt="Cultura" speed={0.5} isHero />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/50 z-[1]" />
        
        {/* Decorative orange graphic elements */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          {/* Large orange circles */}
          <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-secondary/40 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/35 rounded-full blur-3xl animate-float-slow"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-1/4 left-20 w-56 h-56 border-4 border-orange/70 rounded-3xl rotate-12 animate-float-slower"></div>
          <div className="absolute bottom-1/4 right-32 w-40 h-40 bg-secondary/60 clip-path-triangle animate-float-slow"></div>
          
          {/* SVG patterns */}
          <svg className="absolute top-1/3 left-10 w-72 h-72 opacity-60 animate-float-slower" viewBox="0 0 200 200">
            <rect x="40" y="40" width="120" height="120" fill="none" stroke="hsl(35, 90%, 55%)" strokeWidth="4" rx="20" />
            <rect x="60" y="60" width="80" height="80" fill="none" stroke="hsl(35, 90%, 55%)" strokeWidth="3" opacity="0.7" rx="10" />
            <circle cx="100" cy="100" r="30" fill="hsl(35, 90%, 55%)" opacity="0.4" />
          </svg>
          
          <svg className="absolute bottom-1/4 left-1/3 w-48 h-48 opacity-70" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" fill="hsl(35, 90%, 55%)" opacity="0.5" />
          </svg>
          
          {/* Accent elements */}
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-secondary rounded-full opacity-75 animate-pulse-glow"></div>
          <div className="absolute bottom-1/3 left-1/2 w-14 h-14 bg-orange rotate-45 opacity-65"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/90 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-4 shadow-lg">
              <Palette className="h-4 w-4" />
              CULTURA FILOSÓFICA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Cultura con Sentido
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
              La cultura es una vía de acceso a la comprensión entre personas, épocas y civilizaciones. 
              Construimos puentes, no trincheras.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section 
        ref={introRef}
        className={`py-20 md:py-32 bg-background transition-all duration-1000 ${
          introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Hero Image */}
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-elegant">
              <img 
                src={cultureImage} 
                alt="Grupo en sitio arqueológico Chavín" 
                className="w-full h-full object-cover object-[center_55%]"
                style={{ filter: 'brightness(1.08) saturate(1.15) contrast(1.05) sepia(0.06)' }}
              />
            </div>
            
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                ¿Qué es la Cultura Filosófica?
              </h2>
              <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                <p>
                  Para nosotros, la cultura no es solo entretenimiento o erudición. 
                  Es un <strong>camino de transformación personal y social</strong>.
                </p>
                <p>
                  A través del arte, la música, el teatro, la historia y las humanidades, 
                  buscamos desarrollar lo mejor del ser humano: la sensibilidad, la creatividad, 
                  el pensamiento crítico y la capacidad de conectar con otros.
                </p>
                <p className="text-xl font-semibold text-foreground">
                  "Trabajar por la cultura es trabajar por la vida"
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-all">
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section 
        ref={activitiesRef}
        className={`py-20 md:py-32 bg-gradient-subtle transition-all duration-1000 ${
          activitiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Nuestras Actividades Culturales
            </h2>
            <p className="text-lg md:text-xl text-foreground/70">
              Todas nuestras actividades culturales son gratuitas y abiertas al público. 
              Te invitamos a participar, aprender y compartir.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-medium transition-all">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {activity.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed mb-4">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                  <div className="pl-20">
                    <p className="text-sm font-semibold text-foreground/60 mb-2">Temas que exploramos:</p>
                    <div className="flex flex-wrap gap-2">
                      {activity.topics.map((topic, idx) => (
                        <span key={idx} className="px-3 py-1 bg-muted text-foreground/70 rounded-full text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Participation */}
      <section 
        ref={participationRef}
        className={`py-20 md:py-32 bg-background transition-all duration-1000 ${
          participationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-hero text-primary-foreground">
              <div className="text-center space-y-6">
                <Users className="h-16 w-16 mx-auto opacity-90" />
                <h3 className="text-3xl md:text-4xl font-bold">
                  Únete a Nuestras Actividades
                </h3>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  No importa si eres artista, estudiante, profesional o simplemente alguien curioso. 
                  En Nueva Acrópolis todos son bienvenidos. La cultura nos enriquece a todos.
                </p>
                <div className="space-y-4 pt-6">
                  <p className="text-sm opacity-75">
                    Todas las actividades son gratuitas y no requieren inscripción previa.
                    Si quieres participar activamente en la organización o como artista, contáctanos.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                      <Link to="/inscripcion">
                        Quiero participar
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
  );
};

export default Cultura;
