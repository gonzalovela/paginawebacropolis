import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SEO, seoConfig } from "@/components/SEO";
import { ParallaxImage } from "@/components/ParallaxImage";
import bannerInscripcion from "@/assets/banner-inscripcion.jpg";

const Inscripcion = () => {
  return (
    <>
      <SEO 
        {...seoConfig.inscripcion}
        url="https://acropolisperu.org/inscripcion"
      />
      <div className="min-h-screen">
        <Navigation />

        {/* Hero Banner */}
        <section className="relative h-[50vh] md:h-[60vh] mt-20 overflow-hidden">
          <ParallaxImage
            src={bannerInscripcion}
            alt="Grupo de personas caminando juntas hacia una escuela de filosofía al atardecer - Nueva Acrópolis Perú"
            speed={0.5}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          <div className="absolute inset-0 flex items-end pb-12 md:pb-16">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
                  Contáctanos
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 max-w-2xl">
                  Completa el formulario y nos pondremos en contacto contigo. 
                  Estamos aquí para acompañarte en tu camino filosófico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <ContactForm />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Inscripcion;
