import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Heart, Compass, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import logo from "@/assets/logo-escuela-filosofia.png";

const Filosofia = () => {
  const courseModules = [
    {
      title: "El Ser Humano",
      description: "Quién soy, de dónde vengo, hacia dónde voy. Las grandes preguntas de la existencia.",
    },
    {
      title: "El Conocimiento",
      description: "Cómo conocemos el mundo y a nosotros mismos. Filosofía del conocimiento.",
    },
    {
      title: "Ética y Moral",
      description: "Los valores que guían nuestra vida. El bien, la virtud y la felicidad.",
    },
    {
      title: "Filosofía Oriental",
      description: "Sabiduría de Oriente: budismo, taoísmo, hinduismo y sus enseñanzas prácticas.",
    },
    {
      title: "Filosofía Occidental",
      description: "De los presocráticos al existencialismo. El pensamiento que forjó Occidente.",
    },
    {
      title: "Vivir Filosóficamente",
      description: "Integración y práctica. Cómo aplicar la filosofía en la vida cotidiana.",
    },
  ];

  const benefits = [
    "Desarrollar pensamiento crítico y reflexivo",
    "Comprender las grandes corrientes filosóficas",
    "Aplicar principios filosóficos a tu vida diaria",
    "Conocer la filosofía comparada de Oriente y Occidente",
    "Cultivar virtudes y fortaleza interior",
    "Conectar con una comunidad de buscadores",
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
      <section className="py-20 md:py-32 bg-gradient-hero text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-semibold mb-4">
              ESCUELA DE FILOSOFÍA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">
              Filosofía para la Vida
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Una propuesta diferente de filosofía: práctica, viva y aplicable a los desafíos del mundo moderno.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
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

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: BookOpen, title: "Estudiar", desc: "Las grandes ideas de la humanidad" },
                { icon: Heart, title: "Sentir", desc: "Conectar con valores profundos" },
                { icon: Compass, title: "Actuar", desc: "Aplicar principios a la vida" },
                { icon: Star, title: "Transformar", desc: "Desarrollar todo tu potencial" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-medium transition-all">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/60">{item.desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Course Section */}
      <section className="py-20 md:py-32 bg-gradient-subtle">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Curso "Conócete a Ti Mismo"
            </h2>
            <p className="text-lg md:text-xl text-foreground/70">
              Nuestro curso fundamental de 12 semanas. Un viaje de descubrimiento interior basado en la máxima socrática inscrita en el templo de Delfos.
            </p>
          </div>

          {/* Course modules */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                  <p className="font-bold text-foreground">12 semanas</p>
                  <p className="text-sm text-foreground/60">Duración</p>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <p className="font-bold text-foreground">Presencial</p>
                  <p className="text-sm text-foreground/60">Modalidad</p>
                </div>
                <div className="p-4 rounded-lg bg-muted">
                  <p className="font-bold text-foreground">Certificado</p>
                  <p className="text-sm text-foreground/60">Incluido</p>
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
      <section className="py-20 md:py-32 bg-background">
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
