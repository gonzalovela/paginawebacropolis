import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Heart, Compass, Star, CheckCircle2, ArrowRight, Clock, Users, CalendarDays, Sparkles, Quote } from "lucide-react";
import { Footer } from "@/components/Footer";
import philosophyImage from "@/assets/philosophy-study-group.jpg";
import bannerFilosofia from "@/assets/banner-filosofia.jpg";
import { ParallaxImage } from "@/components/ParallaxImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const Filosofia = () => {
  const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation();
  const { elementRef: courseRef, isVisible: courseVisible } = useScrollAnimation();
  const { elementRef: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation();

  const courseModules = [
    {
      title: "El ser humano y el universo",
      description: "Constitución humana y de la naturaleza. Filosofía activa: una forma de vida.",
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      title: "La guerra interior",
      description: "Simbolismo del Bhagavad Gîta. El conflicto interior y la recta acción.",
      color: "bg-secondary/10 text-secondary border-secondary/20",
    },
    {
      title: "El dominio de la mente",
      description: "Pensamiento tibetano y niveles de concentración. La Voz del Silencio.",
      color: "bg-accent/10 text-accent border-accent/20",
    },
    {
      title: "Cómo desarrollar la fortaleza interior",
      description: "Las crisis. La vida del Buda y las cuatro nobles verdades.",
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      title: "La búsqueda de la felicidad",
      description: "Aristóteles y la autarquía. La ética aristotélica y los grados del saber.",
      color: "bg-secondary/10 text-secondary border-secondary/20",
    },
    {
      title: "Importancia del eclecticismo",
      description: "La Escuela de Alejandría. La unidad del universo y el amor.",
      color: "bg-accent/10 text-accent border-accent/20",
    },
    {
      title: "El reto de vivir en sociedad",
      description: "La necesidad de la política. Los problemas del hombre actual.",
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      title: "Visión filosófica del ser humano",
      description: "El Mito de la caverna. El ideal platónico del ser humano y el mundo.",
      color: "bg-secondary/10 text-secondary border-secondary/20",
    },
    {
      title: "Educación para la convivencia",
      description: "El ciudadano y su protagonismo. El valor de la educación.",
      color: "bg-accent/10 text-accent border-accent/20",
    },
    {
      title: "La justicia",
      description: "La regla de Maat. La justicia como impulso colectivo.",
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      title: "Claves para construir el futuro",
      description: "¿Qué es la historia? Filosofía de la historia.",
      color: "bg-secondary/10 text-secondary border-secondary/20",
    },
    {
      title: "Mitos y símbolos",
      description: "Sentido de la Historia y la Mitología. Realidad psicológica de los mitos.",
      color: "bg-accent/10 text-accent border-accent/20",
    },
    {
      title: "Ideal y Filosofía",
      description: "Qué es un Ideal. La Escuela de filosofía y la vivencia de los Ideales.",
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      title: "Ciclos de la historia",
      description: "La rueda de la historia. Teoría del eterno retorno.",
      color: "bg-secondary/10 text-secondary border-secondary/20",
    },
    {
      title: "Libertad y destino",
      description: "Teoría histórica de Cicerón. Cómo transformarse en agente consciente de la historia.",
      color: "bg-accent/10 text-accent border-accent/20",
    },
  ];

  const testimonials = [
    {
      text: "El curso transformó mi forma de ver la vida. Ahora tengo herramientas prácticas para enfrentar cualquier desafío.",
      author: "María González",
      role: "Estudiante",
    },
    {
      text: "Encontré respuestas a preguntas que tenía hace años. La filosofía se volvió algo vivo y aplicable.",
      author: "Carlos Ruiz",
      role: "Estudiante",
    },
    {
      text: "La filosofía dejó de ser algo abstracto. Ahora la aplico en mi día a día y me ha ayudado a conocerme mejor.",
      author: "Ana Martínez",
      role: "Estudiante",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 md:py-36 overflow-hidden mt-20">
        <ParallaxImage src={bannerFilosofia} alt="Filosofía" speed={0.5} isHero />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-[1]" />
        
        {/* Decorative orange graphic elements */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/40 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange/35 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute top-20 right-20 w-64 h-64 border-4 border-secondary/60 rounded-full animate-float-slower"></div>
          <div className="absolute bottom-32 left-32 w-48 h-48 bg-secondary/50 rotate-45 animate-float-slow"></div>
          
          <svg className="absolute top-1/4 right-0 w-80 h-80 opacity-60" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(35, 90%, 55%)" strokeWidth="4" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(35, 90%, 55%)" strokeWidth="3" opacity="0.7" />
            <circle cx="100" cy="100" r="40" fill="hsl(35, 90%, 55%)" opacity="0.4" />
          </svg>
          
          <svg className="absolute bottom-20 right-1/4 w-40 h-40 opacity-70 animate-rotate-slow" viewBox="0 0 100 100">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="hsl(35, 90%, 55%)" opacity="0.5" />
          </svg>
          
          <div className="absolute top-40 right-1/3 w-16 h-16 bg-secondary rounded-full opacity-70"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-orange rounded-full opacity-60 animate-pulse-glow"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-6 py-3 bg-secondary/90 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-4 shadow-lg">
              ESCUELA DE FILOSOFÍA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Filosofía para la Vida
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed drop-shadow-md">
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
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-elegant order-2 lg:order-1 group">
              <img 
                src={philosophyImage} 
                alt="Grupo de estudio filosófico" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Filosofía Práctica
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                ¿Qué es la Filosofía?
              </h2>
              <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
                <p>
                  La filosofía es amor a la sabiduría. No es solo teoría académica, sino un camino de transformación interior que nos ayuda a vivir mejor.
                </p>
                <p>
                  En Nueva Acrópolis, promovemos una <strong className="text-foreground">filosofía comparada</strong> que integra lo mejor de Oriente y Occidente. Estudiamos a los grandes maestros del pensamiento, desde Platón hasta Confucio, desde Sócrates hasta Buda.
                </p>
                <p>
                  Pero más importante aún: <strong className="text-foreground">llevamos la filosofía a la práctica</strong>. No se trata solo de pensar diferente, sino de vivir diferente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Section - Redesigned */}
      <section 
        ref={courseRef}
        className={`py-20 md:py-32 relative overflow-hidden transition-all duration-1000 ${
          courseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Colorful background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float-slower" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse-glow" />

        <div className="container px-4 md:px-6 relative z-10">
          {/* Header with colorful accent */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-bold mb-6">
              <BookOpen className="w-4 h-4" />
              CURSO FUNDAMENTAL
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Curso <span className="text-primary">"Conócete a Ti Mismo"</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/70">
              Un apasionante viaje por las grandes tradiciones filosóficas de Oriente y Occidente
            </p>
          </div>

          {/* Course Info Cards - Horizontal */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">24 horas</p>
                  <p className="text-sm text-foreground/60">Duración pedagógica</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Users className="h-7 w-7 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Presencial</p>
                  <p className="text-sm text-foreground/60">En tu sede más cercana</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                  <CalendarDays className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Semanal</p>
                  <p className="text-sm text-foreground/60">1 vez por semana</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Course modules with colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Temario del Curso
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {courseModules.map((module, index) => (
                <Card 
                  key={index} 
                  className={`p-5 border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${module.color}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-current/10 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{module.title}</h4>
                      <p className="text-sm text-foreground/60">{module.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA - Integrated */}
          <div className="relative max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-r from-primary via-primary/90 to-secondary text-white text-center overflow-hidden">
              {/* Decorative elements inside CTA */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl" />
              
              <div className="relative z-10">
                <Sparkles className="w-10 h-10 mx-auto mb-4 opacity-80" />
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Comienza tu camino filosófico
                </h3>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  La filosofía te espera. No importa tu edad, formación o experiencia previa. 
                  Solo necesitas curiosidad y ganas de conocerte mejor.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="text-lg" asChild>
                    <Link to="/inscripcion">
                      Inscríbete ahora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 border-white/30 text-white" asChild>
                    <Link to="/sedes">Encuentra tu sede</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className={`py-20 md:py-32 bg-muted/30 transition-all duration-1000 ${
          testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              <Quote className="w-4 h-4" />
              Testimonios
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Lo que dicen nuestros estudiantes
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <Quote className="w-8 h-8 text-secondary/30 mb-4 group-hover:text-secondary/50 transition-colors" />
                <p className="text-foreground/70 italic leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/50">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Filosofia;
