import { Card } from "@/components/ui/card";
import { Heart, BookOpen, Users, Sparkles, Globe, Building2, HandHeart } from "lucide-react";
import { ParallaxImage } from "@/components/ParallaxImage";
import bannerImage from "@/assets/banner-quienes-somos.jpg";

export const WhoWeAre = () => {
  const principles = [
    {
      icon: Heart,
      title: "Fraternidad",
      description: "Promover un ideal de fraternidad basado en el respeto a la dignidad humana, más allá de cualquier diferencia de género, cultura, religión o clase social.",
      detail: "La fuerza de este ideal de fraternidad reside más en lo que nos une que en lo que nos separa. Se basa firmemente en el reconocimiento de valores universales que, respetando la diversidad, trascienden las prácticas y costumbres locales."
    },
    {
      icon: BookOpen,
      title: "Conocimiento",
      description: "Fomentar el amor a la sabiduría a través del estudio comparado de filosofías, religiones, ciencias y artes.",
      detail: "La filosofía puede reunir las fuentes del pasado y del presente en esa visión global, amplia e integradora, para que se convierta en una fuerza real de progreso que busca no solo explorar los caminos de la vida, sino profundizar en sus fines últimos."
    },
    {
      icon: Sparkles,
      title: "Desarrollo",
      description: "Desarrollar lo mejor del ser humano promoviendo la realización de cada persona como individuo y como miembro activo de la sociedad.",
      detail: "El ser humano todavía tiene un enorme potencial latente. Conocerlo y desarrollarlo es uno de los pilares fundamentales de la vida misma y proporciona una fuente de satisfacción duradera."
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <ParallaxImage src={bannerImage} alt="Nueva Acrópolis - Filosofía en comunidad" speed={0.3} isHero={true} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[1]" />
        
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            ¿Qué es Nueva Acrópolis?
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Una Escuela de Filosofía que promueve la cultura y practica el voluntariado
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-20">
            
            {/* Video Section */}
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/DRU5bhj8wb8"
                  title="¿Qué es Nueva Acrópolis?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Introduction */}
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <p className="text-2xl font-semibold text-foreground">
                Propone un ideal de valores permanentes para contribuir a la evolución individual y colectiva.
              </p>
            </div>

            {/* Foundation & Organization */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-medium transition-all">
                <Globe className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Fundación</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Nueva Acrópolis fue fundada en 1957 en Buenos Aires, Argentina, por el profesor Jorge Ángel Livraga Rizzi. Hoy está presente en más de 50 países de los cinco continentes.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-medium transition-all">
                <Building2 className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Organización</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Registrada en el Registro Internacional de Asociaciones del Reino de Bélgica como asociación internacional sin fines de lucro, con sede en Bruselas.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-medium transition-all">
                <HandHeart className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Estructura</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Su estructura garantiza el respeto por la diversidad, autonomía e iniciativa de cada asociación miembro, con total independencia de intereses políticos, religiosos o financieros.
                </p>
              </Card>
            </div>

            {/* Symbolism */}
            <Card className="p-8 md:p-12 bg-gradient-subtle">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  El Simbolismo de Nueva Acrópolis
                </h3>
                <div className="space-y-4 text-foreground/70 leading-relaxed text-lg">
                  <p>
                    En la antigua Grecia, la <strong className="text-foreground">Acrópolis</strong> designaba la parte más alta de la ciudad, 
                    donde se establecía el contacto entre lo visible y lo invisible.
                  </p>
                  <p>
                    <span className="text-secondary font-semibold">"Acro"</span> significa buscar lo mejor en uno mismo, 
                    <span className="text-secondary font-semibold"> "polis"</span> implica compromiso con la sociedad, 
                    y <span className="text-secondary font-semibold"> "nueva"</span> significa dar forma contemporánea 
                    a estos valores filosóficos atemporales.
                  </p>
                  <p className="text-xl font-semibold text-foreground pt-4">
                    Nuestro mundo necesita nuevas acrópolis, no hechas de piedra sino de seres humanos, 
                    elevadas en el corazón de nuestras ciudades para crecer internamente y restablecer 
                    los lazos profundos que pueden unirnos.
                  </p>
                </div>
              </div>
            </Card>

            {/* Principles */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
                Nuestros Principios
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <Card key={index} className="p-8 text-center hover:shadow-medium transition-all">
                      <div className="mb-6">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {principle.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed mb-4">
                        {principle.description}
                      </p>
                      <p className="text-sm text-foreground/60 leading-relaxed">
                        {principle.detail}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Philosophy as way of life */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-full text-secondary font-semibold mb-4">
                <BookOpen className="h-5 w-5" />
                Filosofía como Forma de Vida
              </div>
              <p className="text-xl text-foreground/90 leading-relaxed font-medium">
                Trabajamos para mejorar el mundo y al ser humano por medio de la Filosofía en la tradición clásica: 
                una búsqueda filosófica que ofrece respuestas a los problemas contemporáneos.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                No solo a través de la lectura y el conocimiento teórico, sino estableciéndonos la meta 
                de aprender a vivir bien, con fuerza y eficiencia, en cada momento de nuestras vidas. 
                Aprovechando las oportunidades que surgen y aprendiendo algo positivo incluso de la adversidad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};