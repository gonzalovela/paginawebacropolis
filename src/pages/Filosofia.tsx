import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Heart, Compass, Star, CheckCircle2, ArrowRight, Clock, Users, CalendarDays, Sparkles, Quote } from "lucide-react";
import { Footer } from "@/components/Footer";
import philosophyImage from "@/assets/philosophy-contemplation-peru.jpg";
import bannerFilosofia from "@/assets/banner-filosofia.jpg";
import { ParallaxImage } from "@/components/ParallaxImage";
import { OptimizedImage } from "@/components/OptimizedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const Filosofia = () => {
  const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation();
  const { elementRef: courseRef, isVisible: courseVisible } = useScrollAnimation();
  const { elementRef: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation();

  const courseModules = [
    {
      title: "El ser humano y el universo",
      description: "Constitución humana y de la naturaleza. Filosofía activa: una forma de vida. ¿Cómo reconocer y desarrollar los valores humanos?",
    },
    {
      title: "La guerra interior",
      description: "Simbolismo del Bhagavad Gîta. Planteamiento del conflicto interior. Las 3 Gunas. La recta acción.",
    },
    {
      title: "El dominio de la mente",
      description: "Características del pensamiento tibetano. Niveles de concentración. Lectura comentada de La Voz del Silencio.",
    },
    {
      title: "Cómo desarrollar la fortaleza interior",
      description: "Las crisis. La vida del Buda Sidharta Gautama. Las enseñanzas del Buda. Las cuatro nobles verdades.",
    },
    {
      title: "La búsqueda de la felicidad",
      description: "Aristóteles y la autarquía. La ética aristotélica. Los grados del saber.",
    },
    {
      title: "Importancia del eclecticismo para lograr la convivencia",
      description: "La Escuela Ecléctica de Alejandría. La comprensión de la unidad del universo. Eros o el Amor.",
    },
    {
      title: "El reto de vivir en sociedad",
      description: "La necesidad de la política para la convivencia. Los problemas del hombre y del mundo actual.",
    },
    {
      title: "Visión filosófica del ser humano y la sociedad",
      description: "El Mito de la caverna. El Ideal platónico del ser humano y el mundo.",
    },
    {
      title: "Educación para la convivencia",
      description: "El ciudadano y su protagonismo. El valor de la educación. El alma y sus fuerzas (virtudes platónicas).",
    },
    {
      title: "La justicia en el ser humano y la sociedad",
      description: "La regla de Maat. La justicia como impulso colectivo.",
    },
    {
      title: "Claves para construir el futuro",
      description: "¿Qué es la historia? Filosofía de la historia.",
    },
    {
      title: "Mitos y símbolos para entender la vida",
      description: "Sentido de la Historia y la Mitología. Realidad psicológica de los mitos.",
    },
    {
      title: "Ideal y Filosofía",
      description: "Qué es un Ideal. La Escuela de filosofía y la vivencia de los Ideales.",
    },
    {
      title: "Ciclos de la historia",
      description: "La rueda de la historia. Teoría del eterno retorno y los ciclos históricos.",
    },
    {
      title: "Libertad y destino",
      description: "Teoría histórica de Cicerón. Teoría del logos platónico y la historia futura. Cómo transformarse en agente consciente de la historia.",
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
      <section className="relative py-16 sm:py-20 md:py-36 overflow-hidden mt-16 md:mt-20">
        <ParallaxImage src={bannerFilosofia} alt="Filosofía" speed={0.5} isHero />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-[1]" />
        
        {/* Decorative orange graphic elements - hidden on mobile for performance */}
        <div className="absolute inset-0 z-[2] pointer-events-none hidden md:block">
          <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-secondary/40 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 left-0 w-72 lg:w-[500px] h-72 lg:h-[500px] bg-orange/35 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute top-20 right-20 w-40 lg:w-64 h-40 lg:h-64 border-4 border-secondary/60 rounded-full animate-float-slower"></div>
          <div className="absolute bottom-32 left-32 w-32 lg:w-48 h-32 lg:h-48 bg-secondary/50 rotate-45 animate-float-slow"></div>
          
          <svg className="absolute top-1/4 right-0 w-48 lg:w-80 h-48 lg:h-80 opacity-60" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(35, 90%, 55%)" strokeWidth="4" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(35, 90%, 55%)" strokeWidth="3" opacity="0.7" />
            <circle cx="100" cy="100" r="40" fill="hsl(35, 90%, 55%)" opacity="0.4" />
          </svg>
          
          <svg className="absolute bottom-20 right-1/4 w-24 lg:w-40 h-24 lg:h-40 opacity-70 animate-rotate-slow" viewBox="0 0 100 100">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="hsl(35, 90%, 55%)" opacity="0.5" />
          </svg>
          
          <div className="absolute top-40 right-1/3 w-12 lg:w-16 h-12 lg:h-16 bg-secondary rounded-full opacity-70"></div>
          <div className="absolute bottom-40 left-1/4 w-8 lg:w-12 h-8 lg:h-12 bg-orange rounded-full opacity-60 animate-pulse-glow"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
            <div className="inline-block px-4 py-2 md:px-6 md:py-3 bg-secondary/90 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-bold mb-2 md:mb-4 shadow-lg">
              ESCUELA DE FILOSOFÍA
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg px-2">
              Filosofía para la Vida
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/95 leading-relaxed drop-shadow-md px-2">
              Una propuesta diferente de filosofía: práctica, viva y aplicable a los desafíos del mundo moderno.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section 
        ref={introRef}
        className={`py-10 md:py-20 bg-background transition-all duration-1000 ${
          introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-[280px] sm:h-[350px] lg:h-[500px] rounded-xl lg:rounded-2xl overflow-hidden shadow-elegant order-2 lg:order-1 group">
              <OptimizedImage 
                src={philosophyImage} 
                alt="Grupo de estudio filosófico" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                containerClassName="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                Filosofía Práctica
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
                ¿Qué es la Filosofía?
              </h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-foreground/70 leading-relaxed">
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
        className={`py-12 md:py-20 relative overflow-hidden transition-all duration-1000 ${
          courseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Colorful background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float-slower" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse-glow" />

        <div className="container px-4 md:px-6 relative z-10">
          {/* Header with colorful accent */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-bold mb-6">
              <BookOpen className="w-4 h-4" />
              CURSO FUNDAMENTAL
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Curso <span className="text-primary">"Conócete a Ti Mismo"</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Descubre los secretos de tu mundo interior. A través de un apasionante viaje de autoconocimiento, exploraremos las enseñanzas de grandes pensadores para encontrarle un sentido más profundo a la vida.
            </p>
          </div>

          {/* Course modules */}
          <div className="mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6 md:mb-8">
              Temario del Curso
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">
              {courseModules.map((module, index) => {
                const colors = [
                  "bg-primary/5 border-primary/20 hover:bg-primary/10",
                  "bg-secondary/5 border-secondary/20 hover:bg-secondary/10",
                  "bg-accent/5 border-accent/20 hover:bg-accent/10",
                ];
                const colorClass = colors[index % 3];
                const numberColors = ["bg-primary/20 text-primary", "bg-secondary/20 text-secondary", "bg-accent/20 text-accent"];
                const numberColor = numberColors[index % 3];
                
                return (
                  <Card 
                    key={index} 
                    className={`p-5 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${colorClass}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${numberColor}`}>
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{module.title}</h4>
                        <p className="text-sm text-foreground/60">{module.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Course Info - Subtle, at bottom */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12 text-xs md:text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
              <span>24 horas pedagógicas</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
              <span>Presencial</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
              <span>1 vez por semana</span>
            </div>
          </div>

          {/* CTA - Integrated */}
          <div className="relative max-w-4xl mx-auto">
            <Card className="p-6 md:p-8 lg:p-12 bg-gradient-to-r from-primary via-primary/90 to-secondary text-white text-center overflow-hidden">
              {/* Decorative elements inside CTA */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl" />
              
              <div className="relative z-10">
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 opacity-80" />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                  Comienza tu camino filosófico
                </h3>
                <p className="text-sm md:text-lg opacity-90 mb-6 md:mb-8 max-w-2xl mx-auto">
                  La filosofía te espera. No importa tu edad, formación o experiencia previa. 
                  Solo necesitas curiosidad y ganas de conocerte mejor.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
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
        className={`py-10 md:py-20 bg-muted/30 transition-all duration-1000 ${
          testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-secondary/10 text-secondary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              <Quote className="w-3.5 h-3.5 md:w-4 md:h-4" />
              Testimonios
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Lo que dicen nuestros estudiantes
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
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
