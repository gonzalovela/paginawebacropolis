import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import { SEO, seoConfig } from "@/components/SEO";
import { AnimatedMapBackground } from "@/components/AnimatedMapBackground";
import bannerInscripcion from "@/assets/banner-inscripcion.jpg";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import { PageLayout } from "@/components/layouts";

const Inscripcion = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#formulario") {
      const element = document.getElementById("formulario");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      // Scroll to top when no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <SEO 
        {...seoConfig.inscripcion}
        url="https://acropolisperu.org/inscripcion"
      />
      <PageLayout>
        <PageHeroBanner
          bannerImage={bannerInscripcion}
          bannerAlt="Grupo de personas caminando juntas hacia una escuela de filosofía al atardecer - Nueva Acrópolis Perú"
          badgeText="INSCRIPCIÓN"
          badgeVariant="secondary"
          title="Contáctanos"
          description="Completa el formulario y nos pondremos en contacto contigo. Estamos aquí para acompañarte en tu camino filosófico."
          imageScale={1.2}
          decorativeVariant="inscripcion"
        />

        {/* Form Section with Animated Map Background */}
        <section id="formulario" className="py-10 sm:py-12 md:py-16 lg:py-24 bg-background relative overflow-hidden scroll-mt-20">
          <AnimatedMapBackground />
          <div className="container px-4 sm:px-6 relative z-10">
            <ContactForm />
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Inscripcion;
