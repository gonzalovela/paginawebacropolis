import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palette, Music, Theater, BookOpen, Globe, Users, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import logo from "@/assets/logo-escuela-filosofia.png";

const Cultura = () => {
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
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Nueva Acrópolis" className="h-12" />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/filosofia" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Filosofía</a>
            <a href="/cultura" className="text-sm font-medium text-primary">Cultura</a>
            <a href="/voluntariado" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Voluntariado</a>
            <Button size="sm" asChild>
              <a href="/inscripcion">Inscríbete</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-warm text-secondary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/20 rounded-full text-sm font-semibold mb-4">
              <Palette className="h-4 w-4" />
              CULTURA FILOSÓFICA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Cultura con Sentido
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              La cultura es una vía de acceso a la comprensión entre personas, épocas y civilizaciones. 
              Construimos puentes, no trincheras.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
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
      <section className="py-20 md:py-32 bg-gradient-subtle">
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
      <section className="py-20 md:py-32 bg-background">
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
                      <a href="/inscripcion">
                        Quiero participar
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="bg-background/10 hover:bg-background/20 border-primary-foreground/30"
                      asChild
                    >
                      <a href="/">Volver al inicio</a>
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
