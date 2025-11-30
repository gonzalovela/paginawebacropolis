import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle, Mail, Phone, MapPin, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { fireCelebration } from "@/components/ui/confetti";
import { PageLayout } from "@/components/layouts";

const Gracias = () => {
  const [searchParams] = useSearchParams();
  const nombre = searchParams.get("nombre") || "participante";

  // Fire confetti celebration when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      fireCelebration();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO
        title="¡Gracias por tu registro!"
        description="Tu inscripción ha sido recibida exitosamente. El equipo de Nueva Acrópolis Perú se pondrá en contacto contigo pronto."
        noindex={true}
      />
      <PageLayout withTopPadding>
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              {/* Success Icon */}
              <div className="mb-6 sm:mb-8 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-ping bg-primary/20 rounded-full" />
                  <div className="relative bg-primary rounded-full p-4 sm:p-5 md:p-6">
                    <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary-foreground" />
                  </div>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6 px-2">
                ¡Gracias por tu registro, {nombre}!
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
                Tu inscripción ha sido recibida exitosamente. Hemos enviado una confirmación a tu correo electrónico.
              </p>

              <Card className="p-5 sm:p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20 mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  ¿Qué sigue?
                </h2>
                <ul className="text-left space-y-3 sm:space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      <strong className="text-foreground">Revisa tu correo:</strong> Te hemos enviado un email de confirmación con los detalles de tu inscripción.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      <strong className="text-foreground">Te contactaremos:</strong> Un miembro de nuestro equipo se comunicará contigo en las próximas 24-48 horas.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      <strong className="text-foreground">Visita tu sede:</strong> Mientras tanto, puedes acercarte a la sede que seleccionaste para más información.
                    </span>
                  </li>
                </ul>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link to="/inscripcion">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Nueva inscripción
                  </Link>
                </Button>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Ir al inicio
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-10 sm:py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-semibold text-center text-foreground mb-6 sm:mb-8">
                Mientras esperas, explora más sobre nosotros
              </h2>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Filosofía</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    Descubre nuestra propuesta de filosofía práctica para la vida diaria.
                  </p>
                  <Button asChild variant="link" className="text-primary text-sm sm:text-base">
                    <Link to="/filosofia">Conocer más →</Link>
                  </Button>
                </Card>
                
                <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Cultura</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    Explora nuestras actividades culturales y encuentros artísticos.
                  </p>
                  <Button asChild variant="link" className="text-primary text-sm sm:text-base">
                    <Link to="/cultura">Conocer más →</Link>
                  </Button>
                </Card>
                
                <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
                  <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Voluntariado</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    Conoce cómo puedes hacer la diferencia en tu comunidad.
                  </p>
                  <Button asChild variant="link" className="text-primary text-sm sm:text-base">
                    <Link to="/voluntariado">Conocer más →</Link>
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Gracias;
