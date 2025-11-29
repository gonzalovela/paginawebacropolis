import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Users, CalendarDays, ArrowRight, Sparkles, BookOpen, Heart, Target, Compass, Users2 } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedButton } from "@/components/ui/animated-button";

export const CourseSection = () => {
  const benefits = [
    {
      icon: Heart,
      text: "Conocerte más para desarrollar tus fortalezas y ser mejor persona.",
    },
    {
      icon: Compass,
      text: "Encontrar respuestas a tus interrogantes sobre la vida.",
    },
    {
      icon: Target,
      text: "Descubrir el sentido profundo de la existencia.",
    },
    {
      icon: Sparkles,
      text: "Definir tus valores, para dejar una huella en el mundo.",
    },
    {
      icon: Users2,
      text: "Comprender a los demás y el porqué de las circunstancias que vives.",
    },
    {
      icon: BookOpen,
      text: "Tomar mejores decisiones, con la sabiduría de grandes filósofos y civilizaciones.",
    },
  ];

  const courseModules = [
    "El ser humano y el universo",
    "La guerra interior",
    "El dominio de la mente",
    "Cómo desarrollar la fortaleza interior",
    "La búsqueda de la felicidad",
    "Importancia del eclecticismo para lograr la convivencia",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/10 text-secondary font-semibold rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
            CURSO INTRODUCTORIO
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Conócete a Ti Mismo
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 leading-relaxed px-2">
            ¿Quién eres en realidad? Acompáñanos en un apasionante viaje hacia la autoconciencia y descubre las fortalezas de tu mundo interior.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start mb-10 sm:mb-16">
          {/* Benefits */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-8">
              En este curso aprenderás a:
            </h3>
            <div className="grid gap-3 sm:gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground/80 leading-relaxed pt-1 sm:pt-2">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Course Info Card */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-5 sm:p-6 lg:p-8 bg-card border-border shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">
                Información del curso
              </h3>
              
              <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-6 sm:mb-8">
                A través de las enseñanzas de grandes pensadores y civilizaciones, exploraremos la filosofía de manera práctica y vivencial para convertirnos en mejores personas y tomar decisiones acertadas.
              </p>

              {/* Course Details */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/50">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">Duración</p>
                    <p className="text-xs sm:text-sm text-foreground/60">24 horas pedagógicas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/50">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">Modalidad</p>
                    <p className="text-xs sm:text-sm text-foreground/60">Presencial en tu sede más cercana</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/50">
                  <CalendarDays className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm sm:text-base">Frecuencia</p>
                    <p className="text-xs sm:text-sm text-foreground/60">1 vez por semana</p>
                  </div>
                </div>
              </div>

              {/* Includes */}
              <div className="border-t border-border pt-4 sm:pt-6 mb-6 sm:mb-8">
                <p className="font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">Incluye:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground/70 text-sm sm:text-base">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Prácticas y dinámicas en clase
                  </li>
                  <li className="flex items-center gap-2 text-foreground/70 text-sm sm:text-base">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    <a href="http://acropolischannel.pe/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      Acceso gratuito a Acrópolis Channel por 3 meses
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-foreground/70 text-sm sm:text-base">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    Certificado de participación
                  </li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <AnimatedButton size="lg" className="w-full text-base sm:text-lg bg-primary hover:bg-primary/90" asChild>
                  <Link to="/inscripcion">
                    Inscríbete ahora
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </AnimatedButton>
                <Button size="lg" variant="outline" className="w-full text-base sm:text-lg" asChild>
                  <Link to="/filosofia">Ver programa completo</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Course Modules Preview */}
        <div className="bg-card/50 rounded-xl sm:rounded-2xl border border-border/50 p-5 sm:p-8 md:p-10 lg:p-12">
          <div className="text-center mb-6 sm:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Temas que explorarás
            </h3>
            <p className="text-sm sm:text-base text-foreground/60 max-w-2xl mx-auto px-2">
              Un viaje por las grandes tradiciones filosóficas de Oriente y Occidente
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {courseModules.map((module, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors"
              >
                <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center text-xs sm:text-sm">
                  {index + 1}
                </span>
                <span className="text-sm sm:text-base text-foreground/80 font-medium">{module}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Button variant="link" className="text-primary text-sm sm:text-base" asChild>
              <Link to="/filosofia">
                Ver temario completo
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
