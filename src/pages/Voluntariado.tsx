import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sprout, Users, Lightbulb, HandHeart, TreePine, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import logo from "@/assets/logo-escuela-filosofia.png";

const Voluntariado = () => {
  const principles = [
    "Creemos en un mundo mejor",
    "No hay imposibles",
    "Cabeza en el cielo, pies en la tierra",
    "Somos lo que hacemos",
    "Vivir es construir",
    "Somos parte activa de la Naturaleza",
  ];

  const areas = [
    {
      icon: Sprout,
      title: "Acción Ambiental",
      description: "Trabajamos por la Madre Tierra a través de reforestaciones, limpiezas de espacios naturales, huertos urbanos y educación ambiental.",
      activities: [
        "Jornadas de reforestación",
        "Limpieza de playas y parques",
        "Huertos urbanos comunitarios",
        "Talleres de educación ambiental",
      ],
    },
    {
      icon: Heart,
      title: "Acción Social",
      description: "Apoyamos a comunidades vulnerables con programas educativos, bancos de alimentos, visitas a asilos y actividades con niños.",
      activities: [
        "Apoyo a comedores comunitarios",
        "Talleres educativos para niños",
        "Visitas a asilos y hospitales",
        "Recolección de alimentos y ropa",
      ],
    },
    {
      icon: Lightbulb,
      title: "Acción Cultural",
      description: "Llevamos cultura y filosofía a espacios públicos, escuelas y comunidades. Creemos que el acceso a la cultura es un derecho.",
      activities: [
        "Bibliotecas comunitarias",
        "Charlas en escuelas públicas",
        "Teatro callejero",
        "Exposiciones itinerantes",
      ],
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
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Nueva Acrópolis" className="h-12" />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/filosofia" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Filosofía</a>
            <a href="/cultura" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Cultura</a>
            <a href="/voluntariado" className="text-sm font-medium text-primary">Voluntariado</a>
            <Button size="sm" asChild>
              <a href="/inscripcion">Inscríbete</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-accent text-accent-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/20 rounded-full text-sm font-semibold mb-4">
              <HandHeart className="h-4 w-4" />
              VOLUNTARIADO FILOSÓFICO
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Somos lo que Hacemos
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              El voluntariado es la filosofía en acción. No basta con pensar en un mundo mejor, 
              hay que construirlo con nuestras propias manos.
            </p>
          </div>
        </div>
      </section>

      {/* Key Messages */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nuestros Principios
            </h2>
            <p className="text-lg text-foreground/70">
              Mensajes que guían nuestra acción voluntaria
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-subtle border border-border rounded-full text-foreground font-medium hover:shadow-soft transition-all"
              >
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-gradient-subtle">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                ¿Qué es el Voluntariado Filosófico?
              </h2>
              <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                <p>
                  El voluntariado filosófico es la puesta en práctica de nuestras ideas. 
                  Es <strong>filosofía vivida</strong>, donde los principios se transforman en acción concreta.
                </p>
                <p>
                  No se trata solo de "hacer el bien", sino de <strong>vivir coherentemente</strong> con nuestros valores. 
                  Cabeza en el cielo (ideales elevados) y pies en la tierra (acción práctica).
                </p>
                <p className="text-xl font-semibold text-foreground">
                  "No hay imposibles. Vivir es construir."
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-6 pt-8">
              {values.map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-all">
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Action */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Áreas de Acción
            </h2>
            <p className="text-lg md:text-xl text-foreground/70">
              Trabajamos en tres grandes áreas: ambiente, sociedad y cultura. 
              Cada una aporta a la construcción de un mundo más justo y armonioso.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="p-8 md:p-10 hover:shadow-medium transition-all">
                  <div className="grid md:grid-cols-[auto,1fr] gap-8">
                    <div className="flex md:flex-col items-center md:items-start gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        {area.title}
                      </h3>
                      <p className="text-lg text-foreground/70 leading-relaxed">
                        {area.description}
                      </p>
                      <div className="pt-4">
                        <p className="text-sm font-semibold text-foreground/60 mb-3">Actividades:</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {area.activities.map((activity, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <TreePine className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-foreground/70">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-gradient-subtle">
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
                      <a href="/inscripcion">
                        Quiero ser voluntario
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

export default Voluntariado;
