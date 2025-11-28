import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SEO, seoConfig } from "@/components/SEO";

const Inscripcion = () => {
  return (
    <>
      <SEO 
        {...seoConfig.inscripcion}
        url="https://acropolisperu.org/inscripcion"
      />
      <div className="min-h-screen">
        <Navigation />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-subtle mt-20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Contáctanos
            </h1>
            <p className="text-lg md:text-xl text-foreground/70">
              Completa el formulario y nos pondremos en contacto contigo. 
              Estamos aquí para acompañarte en tu camino filosófico.
            </p>
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
