import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, CalendarDays, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedButton } from "@/components/ui/animated-button";
import { courseModules } from "@/data/filosofia-data";

export const CourseModulesSection = () => {
  return (
    <section 
      id="conocete-a-ti-mismo"
      className="py-12 md:py-20 relative overflow-hidden scroll-mt-20"
    >
      {/* Colorful background */}
      
      {/* Floating decorative elements */}

      <div className="container px-6 relative z-10">
        {/* Header with colorful accent */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-6">
            <BookOpen className="w-4 h-4" />
            CURSO INTRODUCTORIO
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-foreground mb-6">
            Curso <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">"Conócete a Ti Mismo"</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Descubre las fortalezas de tu mundo interior. A través de un apasionante viaje de autoconocimiento, exploraremos las enseñanzas de grandes pensadores para encontrarle un sentido más profundo a la vida.
          </p>
        </div>

        {/* Course modules */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-xl md:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-foreground text-center mb-6 md:mb-8">
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
              const numberColors = ["bg-secondary/15 text-secondary","bg-secondary/15 text-secondary","bg-secondary/15 text-secondary"];
              const numberColor = numberColors[index % 3];
              
              return (
                <Card 
                  key={index} 
                  className={`p-6 rounded-2xl border bg-card hover:shadow-medium hover:-translate-y-1 transition-all`}
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
            <Clock className="h-3.5 w-3.5 md:h-4 md:w-4 text-secondary" />
            <span>24 horas pedagógicas</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-3.5 w-3.5 md:h-4 md:w-4 text-secondary" />
            <span>Presencial</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5 md:h-4 md:w-4 text-secondary" />
            <span>1 vez por semana</span>
          </div>
        </div>

        {/* CTA - Integrated */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 lg:p-12 rounded-3xl border border-secondary/20 bg-secondary/5 text-foreground text-center overflow-hidden">
            {/* Decorative elements inside CTA */}
            
            <div className="relative z-10">
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 opacity-80" />
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] mb-3 md:mb-4">
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
                <Button size="lg" variant="ghost" className="text-lg border border-border hover:bg-secondary/10" asChild>
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
