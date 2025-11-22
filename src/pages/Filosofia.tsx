import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Heart, Compass, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import logo from "@/assets/logo-escuela-filosofia.png";
import philosophyImage from "@/assets/philosophy-study-group.jpg";
import bannerFilosofia from "@/assets/banner-filosofia.jpg";
import { ParallaxImage } from "@/components/ParallaxImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Filosofia = () => {
  const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation();
  const { elementRef: courseRef, isVisible: courseVisible } = useScrollAnimation();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const courseModules = [
    {
      title: "El ser humano y el universo",
      description: "Constitución humana y de la naturaleza. Filosofía activa: una forma de vida.",
    },
    {
      title: "La guerra interior",
      description: "Simbolismo del Bhagavad Gîta. El conflicto interior y la recta acción.",
    },
    {
      title: "El dominio de la mente",
      description: "Pensamiento tibetano y niveles de concentración. La Voz del Silencio.",
    },
    {
      title: "Cómo desarrollar la fortaleza interior",
      description: "Las crisis. La vida del Buda y las cuatro nobles verdades.",
    },
    {
      title: "La búsqueda de la felicidad",
      description: "Aristóteles y la autarquía. La ética aristotélica y los grados del saber.",
    },
    {
      title: "Importancia del eclecticismo",
      description: "La Escuela de Alejandría. La unidad del universo y el amor.",
    },
    {
      title: "El reto de vivir en sociedad",
      description: "La necesidad de la política. Los problemas del hombre actual.",
    },
    {
      title: "Visión filosófica del ser humano",
      description: "El Mito de la caverna. El ideal platónico del ser humano y el mundo.",
    },
    {
      title: "Educación para la convivencia",
      description: "El ciudadano y su protagonismo. El valor de la educación.",
    },
    {
      title: "La justicia",
      description: "La regla de Maat. La justicia como impulso colectivo.",
    },
    {
      title: "Claves para construir el futuro",
      description: "¿Qué es la historia? Filosofía de la historia.",
    },
    {
      title: "Mitos y símbolos",
      description: "Sentido de la Historia y la Mitología. Realidad psicológica de los mitos.",
    },
    {
      title: "Ideal y Filosofía",
      description: "Qué es un Ideal. La Escuela de filosofía y la vivencia de los Ideales.",
    },
    {
      title: "Ciclos de la historia",
      description: "La rueda de la historia. Teoría del eterno retorno.",
    },
    {
      title: "Libertad y destino",
      description: "Teoría histórica de Cicerón. Cómo transformarse en agente consciente de la historia.",
    },
  ];

  const benefits = [
    "Conocerte más para desarrollar tus fortalezas y ser mejor persona",
    "Encontrar respuestas a tus interrogantes sobre la vida",
    "Descubrir el sentido profundo de la existencia",
    "Definir tus valores, para dejar una huella en el mundo",
    "Comprender a los demás y el porqué de las circunstancias que vives",
    "Tomar mejores decisiones, con la sabiduría de grandes filósofos y civilizaciones",
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="hover:bg-muted">
              <a href="/" aria-label="Volver al inicio">
                <ArrowRight className="h-5 w-5 rotate-180" />
              </a>
            </Button>
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={logo} alt="Nueva Acrópolis - Escuela de Filosofía" className="h-12 md:h-14" />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/filosofia" className="text-sm font-medium text-primary">Filosofía</a>
            <a href="/cultura" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Cultura</a>
            <a href="/voluntariado" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">Voluntariado</a>
            <Button size="sm" asChild>
              <a href="/inscripcion">Inscríbete</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <ParallaxImage src={bannerFilosofia} alt="Filosofía" speed={0.5} isHero />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-[1]" />
        
        {/* Decorative orange elements */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-glow"></div>
          <svg className="absolute top-0 right-0 w-1/3 h-full opacity-30 animate-float-slower" viewBox="0 0 400 800" fill="none">
            <path d="M0 0 Q200 200 400 400 Q200 600 0 800 Z" fill="url(#orangeGradient)" />
            <defs>
              <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4 border border-accent/30">
              ESCUELA DE FILOSOFÍA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Filosofía para la Vida
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Una propuesta diferente de filosofía: práctica, viva y aplicable a los desafíos del mundo moderno.
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-elegant order-2 lg:order-1">
              <img 
                src={philosophyImage} 
                alt="Grupo de estudio filosófico" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                ¿Qué es la Filosofía?
              </h2>
              <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                <p>
                  La filosofía es amor a la sabiduría. No es solo teoría académica, sino un camino de transformación interior que nos ayuda a vivir mejor.
                </p>
                <p>
                  En Nueva Acrópolis, promovemos una <strong>filosofía comparada</strong> que integra lo mejor de Oriente y Occidente. Estudiamos a los grandes maestros del pensamiento, desde Platón hasta Confucio, desde Sócrates hasta Buda.
                </p>
                <p>
                  Pero más importante aún: <strong>llevamos la filosofía a la práctica</strong>. No se trata solo de pensar diferente, sino de vivir diferente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section 
        ref={courseRef}
        className={`py-20 md:py-32 bg-gradient-subtle transition-all duration-1000 ${
          courseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Curso "Conócete a Ti Mismo"
            </h2>
            <p className="text-lg md:text-xl text-foreground/70">
              Descubre los secretos de tu mundo interior. A través de un apasionante viaje de autoconocimiento, exploraremos las enseñanzas de grandes pensadores para encontrarle un sentido más profundo a la vida. Aprenderemos filosofía de manera práctica y vivencial para convertirnos en mejores personas y tomar decisiones acertadas.
            </p>
          </div>

          {/* Course modules */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
            {courseModules.map((module, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-all">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{module.title}</h3>
                    <p className="text-sm text-foreground/60">{module.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <Card className="p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              ¿Qué aprenderás?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center space-y-4">
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-muted">
                  <p className="font-bold text-foreground">24 horas pedagógicas</p>
                  <p className="text-sm text-foreground/60">Duración</p>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <p className="font-bold text-foreground">Presencial</p>
                  <p className="text-sm text-foreground/60">Modalidad</p>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <p className="font-bold text-foreground">1 vez por semana</p>
                  <p className="text-sm text-foreground/60">Frecuencia</p>
                </div>
              </div>
              <Button size="lg" asChild>
                <a href="/inscripcion">
                  Inscríbete al curso
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        ref={ctaRef}
        className={`py-20 md:py-32 bg-background transition-all duration-1000 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container px-4 md:px-6">
          <Card className="p-8 md:p-12 bg-gradient-warm text-secondary-foreground text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Comienza tu camino filosófico
            </h3>
            <p className="text-lg opacity-90 mb-8">
              La filosofía te espera. No importa tu edad, formación o experiencia previa. 
              Solo necesitas curiosidad y ganas de conocerte mejor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/inscripcion">Inscríbete ahora</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/10 hover:bg-background/20 border-secondary-foreground/30" asChild>
                <a href="/">Volver al inicio</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Filosofia;
