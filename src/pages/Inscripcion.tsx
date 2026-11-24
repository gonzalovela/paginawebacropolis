import { ContactForm } from "@/components/ContactForm";
import { SEO, seoConfig } from "@/components/SEO";
import bannerInscripcion from "@/assets/banner-inscripcion.jpg";
import { PageHeroBanner, SparkleWord } from "@/components/PageHeroBanner";
import { PageLayout } from "@/components/layouts";

const Inscripcion = () => {
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
          title={<><SparkleWord>Contáctanos</SparkleWord></>}
          description="Completa el formulario y nos pondremos en contacto contigo. Estamos aquí para acompañarte en tu camino filosófico."
          imageScale={1.2}
          decorativeVariant="inscripcion"
        />

        {/* Form Section with Animated Map Background */}
        <section id="formulario" className="py-16 md:py-24 bg-muted/40 scroll-mt-20">
          <div className="container px-6">
            <div className="max-w-2xl mx-auto mb-10 md:mb-14 text-center">
              <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-4">Da el primer paso</p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[0.95] text-foreground">Empieza tu <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">camino filosófico.</span></h2>
            </div>
            <ContactForm />
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Inscripcion;
