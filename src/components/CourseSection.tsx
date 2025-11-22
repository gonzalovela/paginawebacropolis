import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Users, ArrowRight } from "lucide-react";

export const CourseSection = () => {
  const benefits = [
    "Conocerte más para desarrollar tus fortalezas y ser mejor persona",
    "Encontrar respuestas a tus interrogantes sobre la vida",
    "Descubrir el sentido profundo de la existencia",
    "Definir tus valores, para dejar una huella en el mundo",
    "Comprender a los demás y el porqué de las circunstancias que vives",
    "Tomar mejores decisiones, con la sabiduría de grandes filósofos y civilizaciones",
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
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full text-sm">
                CURSO FUNDAMENTAL
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Conócete a Ti Mismo
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Descubre los secretos de tu mundo interior. A través de un apasionante viaje de autoconocimiento, exploraremos las enseñanzas de grandes pensadores para encontrarle un sentido más profundo a la vida.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg bg-primary hover:bg-primary/90" asChild>
                <a href="/inscripcion">
                  Inscríbete ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <a href="/filosofia">Ver programa completo</a>
              </Button>
            </div>

            {/* Info boxes */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Duración</p>
                  <p className="text-xs text-foreground/60">24 horas pedagógicas</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <Users className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Modalidad</p>
                  <p className="text-xs text-foreground/60">Presencial</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Frecuencia</p>
                  <p className="text-xs text-foreground/60">1 vez por semana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Lo que dicen nuestros estudiantes
            </h3>
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                <div className="space-y-4">
                  <p className="text-foreground/70 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-foreground/50">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
