import { Sparkles } from "lucide-react";
import { SEO, seoConfig } from "@/components/SEO";
import philosophyImage from "@/assets/philosophy-contemplation-peru.jpg";
import bannerFilosofia from "@/assets/banner-filosofia.jpg";
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageHeroBanner, SparkleWord } from "@/components/PageHeroBanner";
import { CourseModulesSection, TestimonialsSection, AdvancedCoursesSection } from "@/components/filosofia";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageLayout } from "@/components/layouts";
import { AnimatedSection } from "@/components/AnimatedSection";

const Filosofia = () => {
  const location = useLocation();

  // Scroll to section if hash is present
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <SEO 
        {...seoConfig.filosofia}
        url="https://acropolisperu.org/filosofia"
        breadcrumbs={[{ name: "Filosofía Práctica", url: "https://acropolisperu.org/filosofia" }]}
        faq={seoConfig.filosofia.faq}
      />
      <PageLayout>
        <PageHeroBanner
          bannerImage={bannerFilosofia}
          bannerAlt="Persona en postura contemplativa frente a paisaje peruano al amanecer - Filosofía práctica y meditación en Nueva Acrópolis"
          badgeText="ESCUELA DE FILOSOFÍA"
          title={<><SparkleWord>Filosofía</SparkleWord> para la Vida</>}
          description="Una propuesta diferente de filosofía: práctica, viva y aplicable a los desafíos del mundo moderno."
          decorativeVariant="default"
        />

        {/* Introduction */}
        <AnimatedSection as="section" className="py-10 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative h-[280px] sm:h-[350px] lg:h-[500px] rounded-xl lg:rounded-2xl overflow-hidden shadow-elegant order-2 lg:order-1 group">
                <OptimizedImage 
                  src={philosophyImage} 
                  alt="Grupo de estudiantes en sesión de filosofía práctica - Curso Conócete a Ti Mismo en Nueva Acrópolis Perú" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                  Filosofía Práctica
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
                  ¿Qué es la Filosofía?
                </h2>
                <div className="space-y-3 md:space-y-4 text-base md:text-lg text-foreground/70 leading-relaxed">
                  <p>
                    La filosofía es amor a la sabiduría. No es solo teoría académica, sino un camino de transformación interior que nos ayuda a vivir mejor.
                  </p>
                  <p>
                    En Nueva Acrópolis, promovemos una <strong className="text-foreground">filosofía comparada</strong> que integra lo mejor de Oriente y Occidente. Estudiamos a los grandes maestros del pensamiento, desde Platón hasta Confucio, desde Sócrates hasta Buda.
                  </p>
                  <p>
                    Pero más importante aún: <strong className="text-foreground">llevamos la filosofía a la práctica</strong>. No se trata solo de pensar diferente, sino de vivir diferente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Course Section */}
        <AnimatedSection>
          <CourseModulesSection />
        </AnimatedSection>

        {/* Advanced Courses Section */}
        <AnimatedSection>
          <AdvancedCoursesSection />
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection>
          <TestimonialsSection />
        </AnimatedSection>
      </PageLayout>
    </>
  );
};

export default Filosofia;
