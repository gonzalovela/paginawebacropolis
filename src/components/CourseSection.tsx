import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Users, ArrowRight } from "lucide-react";

export const CourseSection = () => {
  const benefits = [
    "Descubre quién eres realmente y tu propósito de vida",
    "Desarrolla autoconocimiento y fortaleza interior",
    "Aprende a tomar mejores decisiones",
    "Conecta con una comunidad de buscadores",
    "Aplica filosofía antigua a problemas modernos",
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
                Nuestro curso fundamental de filosofía práctica. Un viaje de descubrimiento interior basado en la máxima socrática que ha transformado miles de vidas.
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
              <Button size="lg" className="text-lg bg-primary hover:bg-primary/90">
                Inscríbete ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Ver programa completo
              </Button>
            </div>

            {/* Info boxes */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Duración</p>
                  <p className="text-xs text-foreground/60">12 semanas</p>
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
                  <p className="text-sm font-semibold text-foreground">Certificado</p>
                  <p className="text-xs text-foreground/60">Incluido</p>
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
