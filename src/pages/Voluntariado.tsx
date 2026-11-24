import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Users, HandHeart, Heart } from "lucide-react";
import { SEO, seoConfig } from "@/components/SEO";
import volunteeringImage from "@/assets/voluntariado-filosofico-intro-warm.jpg";
import bannerVoluntariado from "@/assets/banner-voluntariado.jpg";
import { OptimizedImage } from "@/components/OptimizedImage";
import { VoluntariadoGallery } from "@/components/VoluntariadoGallery";
import { PageHeroBanner, SparkleWord } from "@/components/PageHeroBanner";
import { ProgramActivityCard } from "@/components/ProgramActivityCard";
import { voluntariadoPrinciples, voluntariadoAreas as defaultAreas, voluntariadoValues } from "@/data/voluntariado-data";
import { supabase } from "@/integrations/supabase/client";
import { PageLayout } from "@/components/layouts";
import { CTASection } from "@/components/CTASection";
import { iconMap } from "@/utils/admin-constants";
import { AnimatedSection } from "@/components/AnimatedSection";

interface VoluntariadoPrograma {
  id: string;
  slug: string;
  titulo: string;
  descripcion: string;
  imagen_url: string | null;
  icono: string;
  actividades: string[];
  imagen_position: string | null;
  alt_text: string | null;
  orden: number;
}

const Voluntariado = () => {
  const [dbPrograms, setDbPrograms] = useState<VoluntariadoPrograma[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const { data } = await supabase
        .from('voluntariado_programas')
        .select('*')
        .eq('activo', true)
        .order('orden', { ascending: true });
      
      if (data && data.length > 0) {
        setDbPrograms(data);
      }
    };
    fetchPrograms();
  }, []);

  // Merge DB programs with default areas (DB images take precedence)
  const voluntariadoAreas = dbPrograms.length > 0
    ? dbPrograms.map((dbProg, index) => {
        const defaultArea = defaultAreas[index];
        return {
          icon: iconMap[dbProg.icono] || defaultArea?.icon || Heart,
          title: dbProg.titulo,
          description: dbProg.descripcion,
          activities: dbProg.actividades || defaultArea?.activities || [],
          image: dbProg.imagen_url || defaultArea?.image,
          imageAlt: `${dbProg.titulo} - Programa de voluntariado Nueva Acrópolis Perú`,
          imagePosition: dbProg.imagen_position || 'center',
        };
      })
    : defaultAreas.map(area => ({
        ...area,
        imageAlt: `${area.title} - Programa de voluntariado Nueva Acrópolis Perú`,
        imagePosition: 'center',
      }));

  return (
    <>
      <SEO 
        {...seoConfig.voluntariado}
        url="https://acropolisperu.org/voluntariado"
        breadcrumbs={[{ name: "Voluntariado Filosófico", url: "https://acropolisperu.org/voluntariado" }]}
        faq={seoConfig.voluntariado.faq}
      />
      <PageLayout>
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
        <AnimatedSection as="section" className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/5 to-background">
          <div className="container px-6">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-foreground mb-4 md:mb-6">
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
                      <div className="w-12 h-12 rounded-full bg-secondary/15 text-secondary flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-soft">
                        <Icon className="h-6 w-6" />
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
        </AnimatedSection>

        {/* Introduction */}
        <AnimatedSection as="section" className="py-16 md:py-24 bg-gradient-subtle">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
              {/* Hero Image */}
              <div className="relative h-[250px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden">
                <OptimizedImage 
                  src={volunteeringImage} 
                  alt="Equipo de voluntarios de Nueva Acrópolis realizando labor social en comunidad peruana" 
                  className="w-full h-full object-cover object-[center_20%]"
                  containerClassName="w-full h-full"
                />
              </div>
              
              <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-foreground">
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
                  <Card key={index} className="p-4 md:p-6 rounded-2xl hover:shadow-medium hover:-translate-y-1 transition-all">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{value.title}</h3>
                    <p className="text-sm md:text-base text-foreground/60 leading-relaxed">{value.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Areas of Action */}
        <AnimatedSection as="section" className="py-16 md:py-24 bg-background">
          <div className="container px-6">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-foreground mb-4 md:mb-6">
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
                  imageAlt={area.imageAlt}
                  imagePosition={area.imagePosition}
                  items={area.activities}
                  variant="full"
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-foreground mb-4 sm:mb-6">
                Galería de Programas en Acción
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-foreground/70 px-2">
                Fotos de nuestros programas de voluntariado y las actividades que realizamos en todo el Perú
              </p>
            </div>
            <VoluntariadoGallery />
          </div>
        </section>

        {/* Call to Action */}
        <CTASection
          icon={Users}
          title="Únete a Nuestra Comunidad de Voluntarios"
          description="No necesitas experiencia previa, solo ganas de contribuir y aprender. El voluntariado filosófico transforma tanto al que da como al que recibe. Es un camino de crecimiento personal y servicio a la comunidad."
          note="Las actividades de voluntariado se realizan regularmente. Puedes participar ocasionalmente o ser parte permanente de nuestros equipos."
          primaryButtonText="Quiero ser voluntario"
        />
      </PageLayout>
    </>
  );
};

export default Voluntariado;
