import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, HandHeart, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SEO, seoConfig } from "@/components/SEO";
import volunteeringImage from "@/assets/volunteering-action.jpg";
import bannerVoluntariado from "@/assets/banner-voluntariado.jpg";
import { OptimizedImage } from "@/components/OptimizedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { VoluntariadoGallery } from "@/components/VoluntariadoGallery";
import { AnimatedButton } from "@/components/ui/animated-button";
import { PageHeroBanner, SparkleWord } from "@/components/PageHeroBanner";
import { ProgramActivityCard } from "@/components/ProgramActivityCard";
import { voluntariadoPrinciples, voluntariadoAreas, voluntariadoValues } from "@/data/voluntariado-data";

const Voluntariado = () => {
  const { elementRef: principlesRef, isVisible: principlesVisible } = useScrollAnimation();
  const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation();
  const { elementRef: areasRef, isVisible: areasVisible } = useScrollAnimation();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  return (
    <>
      <SEO 
        {...seoConfig.voluntariado}
        url="https://acropolisperu.org/voluntariado"
        breadcrumbs={[{ name: "Voluntariado Filosófico", url: "https://acropolisperu.org/voluntariado" }]}
        faq={seoConfig.voluntariado.faq}
      />
      <div className="min-h-screen">
        <Navigation />

        <PageHeroBanner
          bannerImage={bannerVoluntariado}
          bannerAlt="Voluntarios de Nueva Acrópolis en acción solidaria - Programas de voluntariado filosófico en Perú"
          badgeText="VOLUNTARIADO FILOSÓFICO"
          badgeIcon={HandHeart}
          title={<>Somos lo que <SparkleWord>Hacemos</SparkleWord></>}
          description="El voluntariado es la filosofía en acción. No basta con pensar en un mundo mejor, hay que construirlo con nuestras propias manos."
          objectPosition="center 70%"
          decorativeVariant="voluntariado"
        />

        {/* Key Messages */}
        <section 
          ref={principlesRef}
          className={`py-10 md:py-20 bg-gradient-to-br from-background via-secondary/5 to-background transition-all duration-1000 ${
            principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
                Mensajes que nos Inspiran
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-foreground/70">
                Ideas que guían nuestra acción voluntaria y transforman la filosofía en realidad
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-7xl mx-auto">
              {voluntariadoPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <Card
                    key={index}
                    className="group p-3 md:p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center text-center space-y-2 md:space-y-4">
                      <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-soft">
                        <Icon className="h-5 w-5 md:h-8 md:w-8 text-white" />
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <h3 className="font-bold text-sm md:text-lg text-foreground leading-tight">
                          {principle.message}
                        </h3>
                        <p className="text-xs md:text-sm text-foreground/60 leading-relaxed hidden sm:block">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section 
          ref={introRef}
          className={`py-10 md:py-20 bg-gradient-subtle transition-all duration-1000 ${
            introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
              {/* Hero Image */}
              <div className="relative h-[250px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-elegant">
                <OptimizedImage 
                  src={volunteeringImage} 
                  alt="Equipo de voluntarios de Nueva Acrópolis realizando labor social en comunidad peruana" 
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
              
              <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
                  ¿Qué es el Voluntariado Filosófico?
                </h2>
                <div className="space-y-3 md:space-y-4 text-base md:text-lg text-foreground/70 leading-relaxed">
                  <p>
                    El voluntariado filosófico es la puesta en práctica de nuestras ideas. 
                    Es <strong>filosofía vivida</strong>, donde los principios se transforman en acción concreta.
                  </p>
                  <p>
                    No se trata solo de "hacer el bien", sino de <strong>vivir coherentemente</strong> con nuestros valores. 
                    Cabeza en el cielo (ideales elevados) y pies en la tierra (acción práctica).
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-foreground">
                    "No hay imposibles. Vivir es construir."
                  </p>
                </div>
              </div>

              {/* Values Grid */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-8">
                {voluntariadoValues.map((value, index) => (
                  <Card key={index} className="p-4 md:p-6 hover:shadow-medium transition-all">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{value.title}</h3>
                    <p className="text-sm md:text-base text-foreground/60 leading-relaxed">{value.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Action */}
        <section 
          ref={areasRef}
          className={`py-10 md:py-20 bg-background transition-all duration-1000 ${
            areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
                Nuestros Programas de Voluntariado
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-foreground/70">
                Programas concretos de acción solidaria que realizamos en Nueva Acrópolis Perú. 
                Cada uno responde a necesidades específicas de nuestra comunidad.
              </p>
            </div>

            <div className="space-y-4 md:space-y-8 max-w-6xl mx-auto">
              {voluntariadoAreas.map((area, index) => (
                <ProgramActivityCard
                  key={index}
                  icon={area.icon}
                  title={area.title}
                  description={area.description}
                  image={area.image}
                  items={area.activities}
                  variant="full"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Galería de Programas en Acción
              </h2>
              <p className="text-lg md:text-xl text-foreground/70">
                Fotos de nuestros programas de voluntariado y las actividades que realizamos en todo el Perú
              </p>
            </div>
            <VoluntariadoGallery />
          </div>
        </section>

        {/* Call to Action */}
        <section
          ref={ctaRef}
          className={`py-12 md:py-20 bg-gradient-subtle transition-all duration-1000 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-gradient-hero text-primary-foreground">
                <div className="text-center space-y-6">
                  <Users className="h-16 w-16 mx-auto opacity-90" />
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Únete a Nuestra Comunidad de Voluntarios
                  </h3>
                  <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
                    No necesitas experiencia previa, solo ganas de contribuir y aprender. 
                    El voluntariado filosófico transforma tanto al que da como al que recibe. 
                    Es un camino de crecimiento personal y servicio a la comunidad.
                  </p>
                  <div className="space-y-4 pt-6">
                    <p className="text-sm opacity-75">
                      Las actividades de voluntariado se realizan regularmente. 
                      Puedes participar ocasionalmente o ser parte permanente de nuestros equipos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <AnimatedButton size="lg" variant="secondary" asChild>
                        <Link to="/inscripcion">
                          Quiero ser voluntario
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </AnimatedButton>
                      <Button
                        size="lg" 
                        variant="outline"
                        className="bg-background/10 hover:bg-background/20 border-primary-foreground/30"
                        asChild
                      >
                        <Link to="/">Volver al inicio</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Voluntariado;
