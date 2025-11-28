import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SEO, seoConfig } from "@/components/SEO";
import { AnimatedMapBackground } from "@/components/AnimatedMapBackground";
import bannerInscripcion from "@/assets/banner-inscripcion.jpg";
import { PageHeroBanner } from "@/components/PageHeroBanner";

const Inscripcion = () => {
  return (
    <>
      <SEO 
        {...seoConfig.inscripcion}
        url="https://acropolisperu.org/inscripcion"
      />
      <div className="min-h-screen">
        <Navigation />

        <PageHeroBanner
          bannerImage={bannerInscripcion}
          bannerAlt="Grupo de personas caminando juntas hacia una escuela de filosofía al atardecer - Nueva Acrópolis Perú"
          badgeText="INSCRIPCIÓN"
          badgeVariant="secondary"
          title="Contáctanos"
          description="Completa el formulario y nos pondremos en contacto contigo. Estamos aquí para acompañarte en tu camino filosófico."
          decorativeVariant="inscripcion"
        />

        {/* Form Section with Animated Map Background */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
          <AnimatedMapBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <ContactForm />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Inscripcion;
