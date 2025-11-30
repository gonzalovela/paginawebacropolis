import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Palette, Users, ArrowRight, BookOpen, Globe, Music, Lightbulb, LucideIcon } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SEO, seoConfig } from "@/components/SEO";
import culturaFilosoficaImage from "@/assets/cultura-filosofica-intro.jpg";
import bannerCultura from "@/assets/banner-cultura.jpg";
import { OptimizedImage } from "@/components/OptimizedImage";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { AnimatedButton } from "@/components/ui/animated-button";
import { PageHeroBanner, SparkleWord } from "@/components/PageHeroBanner";
import { ProgramActivityCard } from "@/components/ProgramActivityCard";
import { culturaActivities as defaultActivities, culturaValues } from "@/data/cultura-data";
import { supabase } from "@/integrations/supabase/client";

// Icon mapping for database activities
const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Globe,
  Music,
  Lightbulb,
};

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
  const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation();
  const { elementRef: activitiesRef, isVisible: activitiesVisible } = useScrollAnimation();
  const { elementRef: participationRef, isVisible: participationVisible } = useScrollAnimation();

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
      <div className="min-h-screen">
        <Navigation />

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
        <section 
          ref={introRef}
          className={`py-10 md:py-20 bg-background transition-all duration-1000 ${
            introVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
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
        </section>

        {/* Activities */}
        <section 
          ref={activitiesRef}
          className={`py-10 md:py-20 bg-gradient-subtle transition-all duration-1000 ${
            activitiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
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
        </section>

        {/* Participation */}
        <section 
          ref={participationRef}
          className={`py-10 md:py-20 bg-background transition-all duration-1000 ${
            participationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Card className="p-6 md:p-8 lg:p-12 bg-gradient-hero text-primary-foreground">
                <div className="text-center space-y-4 md:space-y-6">
                  <Users className="h-12 w-12 md:h-16 md:w-16 mx-auto opacity-90" />
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    Únete a Nuestras Actividades
                  </h3>
                  <p className="text-sm md:text-lg opacity-90 max-w-2xl mx-auto">
                    No importa si eres artista, estudiante, profesional o simplemente alguien curioso. 
                    En Nueva Acrópolis todos son bienvenidos. La cultura nos enriquece a todos.
                  </p>
                  <div className="space-y-3 md:space-y-4 pt-4 md:pt-6">
                    <p className="text-xs md:text-sm opacity-75">
                      Muchas de nuestras actividades son gratuitas y no requieren inscripción previa.
                      Si quieres participar activamente en la organización o como artista, contáctanos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <AnimatedButton size="lg" variant="secondary" asChild>
                        <Link to="/inscripcion">
                          Quiero participar
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

export default Cultura;
