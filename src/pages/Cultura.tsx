import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Palette, Users, BookOpen } from "lucide-react";
import { SEO, seoConfig } from "@/components/SEO";
import culturaFilosoficaImage from "@/assets/cultura-filosofica-intro.jpg";
import bannerCultura from "@/assets/banner-cultura.jpg";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageHeroBanner, SparkleWord } from "@/components/PageHeroBanner";
import { ProgramActivityCard } from "@/components/ProgramActivityCard";
import { culturaActivities as defaultActivities, culturaValues } from "@/data/cultura-data";
import { supabase } from "@/integrations/supabase/client";
import { PageLayout } from "@/components/layouts";
import { CTASection } from "@/components/CTASection";
import { iconMap } from "@/utils/admin-constants";
import { AnimatedSection } from "@/components/AnimatedSection";

interface CulturaActividad {
  id: string;
  slug: string;
  titulo: string;
  descripcion: string;
  imagen_url: string | null;
  icono: string;
  imagen_position: string | null;
  alt_text: string | null;
  orden: number;
}

const Cultura = () => {
  const [dbActivities, setDbActivities] = useState<CulturaActividad[]>([]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchActivities = async () => {
      const { data } = await supabase
        .from('cultura_actividades')
        .select('*')
        .eq('activo', true)
        .order('orden', { ascending: true });
      
      if (data && data.length > 0) {
        setDbActivities(data);
      }
    };
    fetchActivities();
  }, []);

  // Merge DB activities with default activities (DB images take precedence)
  const activities = dbActivities.length > 0
    ? dbActivities.map((dbAct, index) => {
        const defaultAct = defaultActivities[index];
        return {
          icon: iconMap[dbAct.icono] || defaultAct?.icon || BookOpen,
          title: dbAct.titulo,
          description: dbAct.descripcion,
          image: dbAct.imagen_url || defaultAct?.image,
          imageAlt: dbAct.alt_text || `${dbAct.titulo} - Actividad cultural Nueva Acrópolis Perú`,
          imagePosition: dbAct.imagen_position || (defaultAct as any)?.imagePosition,
        };
      })
    : defaultActivities.map(act => ({
        ...act,
        imageAlt: `${act.title} - Actividad cultural Nueva Acrópolis Perú`,
      }));

  return (
    <>
      <SEO 
        {...seoConfig.cultura}
        url="https://acropolisperu.org/cultura"
        breadcrumbs={[{ name: "Cultura y Arte", url: "https://acropolisperu.org/cultura" }]}
        faq={seoConfig.cultura.faq}
      />
      <PageLayout>
        <PageHeroBanner
          bannerImage={bannerCultura}
          bannerAlt="Actividad cultural al aire libre con grupo de personas - Encuentros culturales de Nueva Acrópolis en Perú"
          badgeText="CULTURA FILOSÓFICA"
          badgeIcon={Palette}
          title={<><SparkleWord>Cultura</SparkleWord> con Sentido</>}
          description="La cultura es una vía de acceso a la comprensión entre personas, épocas y civilizaciones. Construimos puentes, no trincheras."
          decorativeVariant="cultura"
        />

        {/* Introduction */}
        <AnimatedSection as="section" className="py-10 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
              {/* Hero Image */}
              <div className="relative h-[250px] sm:h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow-elegant">
                <OptimizedImage 
                  src={culturaFilosoficaImage} 
                  alt="Grupo cultural visitando Sacsayhuamán - Viajes culturales Nueva Acrópolis Perú" 
                  className="w-full h-full object-cover object-[center_35%]"
                  containerClassName="w-full h-full"
                  priority
                />
              </div>
              
              <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
                  ¿Qué es la Cultura Filosófica?
                </h2>
                <div className="space-y-3 md:space-y-4 text-base md:text-lg text-foreground/70 leading-relaxed">
                  <p>
                    Para nosotros, la cultura no es solo entretenimiento o erudición. 
                    Es un <strong>camino de transformación personal y social</strong>.
                  </p>
                  <p>
                    A través del arte, la música, el teatro, la historia y las humanidades, 
                    buscamos desarrollar lo mejor del ser humano: la sensibilidad, la creatividad, 
                    el pensamiento crítico y la capacidad de conectar con otros.
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-foreground">
                    Esta cultura sirve para unir diferencias, aprender del pasado y cultivarse.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {culturaValues.map((value, index) => (
                  <Card key={index} className="p-4 md:p-6 text-center hover:shadow-medium transition-all">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">{value.title}</h3>
                    <p className="text-sm md:text-base text-foreground/60 leading-relaxed">{value.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Activities */}
        <AnimatedSection as="section" className="py-10 md:py-20 bg-gradient-subtle">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
                Nuestras Actividades Culturales
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-foreground/70">
                Muchas de nuestras actividades culturales son gratuitas y abiertas al público. 
                Te invitamos a participar, aprender y compartir.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
              {activities.map((activity, index) => (
                <ProgramActivityCard
                  key={index}
                  icon={activity.icon}
                  title={activity.title}
                  description={activity.description}
                  image={activity.image}
                  imageAlt={activity.imageAlt}
                  imagePosition={activity.imagePosition}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Participation CTA */}
        <CTASection
          icon={Users}
          title="Únete a Nuestras Actividades"
          description="No importa si eres artista, estudiante, profesional o simplemente alguien curioso. En Nueva Acrópolis todos son bienvenidos. La cultura nos enriquece a todos."
          note="Muchas de nuestras actividades son gratuitas y no requieren inscripción previa. Si quieres participar activamente en la organización o como artista, contáctanos."
          primaryButtonText="Quiero participar"
          className="bg-background"
        />
      </PageLayout>
    </>
  );
};

export default Cultura;
