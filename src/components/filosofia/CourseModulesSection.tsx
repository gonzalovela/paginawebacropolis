import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, CalendarDays, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedButton } from "@/components/ui/animated-button";
import { courseModules } from "@/data/filosofia-data";

interface CourseModulesSectionProps {
  isVisible: boolean;
}

export const CourseModulesSection = ({ isVisible }: CourseModulesSectionProps) => {
  return (
    <section 
      className={`py-12 md:py-20 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
            CURSO INTRODUCTORIO
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
                <AnimatedButton size="lg" variant="secondary" className="text-lg" asChild>
                  <Link to="/inscripcion">
                    Inscríbete ahora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </AnimatedButton>
                <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 border-white/30 text-white" asChild>
                  <Link to="/sedes">Encuentra tu sede</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
