import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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

      {/* Contact Info */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Otras formas de contacto
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-card border border-border space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Sede Principal</p>
                    <p className="text-sm text-foreground/70">San Isidro, Lima, Perú</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <p className="text-sm text-foreground/70">+51 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:info@acropolisperu.org" className="text-sm text-primary hover:underline">
                      info@acropolisperu.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Horario de atención</p>
                    <p className="text-sm text-foreground/70">Lunes a Viernes: 6:00 PM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 space-y-4">
                <h3 className="font-bold text-foreground text-lg">
                  ¿Tienes preguntas?
                </h3>
                <div className="space-y-3 text-sm text-foreground/70">
                  <p>
                    <strong className="text-foreground">¿Necesito experiencia previa?</strong><br />
                    No, nuestros cursos están diseñados para todos los niveles.
                  </p>
                  <p>
                    <strong className="text-foreground">¿Cuánto cuesta?</strong><br />
                    El curso tiene un costo accesible. Contáctanos para más información.
                  </p>
                  <p>
                    <strong className="text-foreground">¿Hay otras sedes?</strong><br />
                    Sí, tenemos sedes en Arequipa, Cusco, Trujillo y más ciudades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Inscripcion;
