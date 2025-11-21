import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

export const SimplifiedLocations = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Encuentra tu Escuela
          </h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Tenemos sedes en las principales ciudades del Perú. Comienza tu camino filosófico cerca de ti.
          </p>
        </div>

        {/* Main contact card */}
        <div className="max-w-3xl mx-auto mb-12">
          <Card className="p-8 md:p-12 text-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Sede Principal - Lima
              </h3>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-foreground/70">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>San Isidro, Lima</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+51 XXX XXX XXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:info@acropolisperu.org" className="hover:text-primary transition-colors">
                    info@acropolisperu.org
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-foreground/60 mb-6">
                También contamos con sedes en Arequipa, Cusco, Trujillo, Piura y otras ciudades.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <a href="/inscripcion">Contáctanos para más información</a>
              </Button>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="inline-block p-8 md:p-12 bg-gradient-warm text-secondary-foreground max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para comenzar?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Únete a nuestra próxima promoción del curso "Conócete a Ti Mismo"
            </p>
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90" asChild>
              <a href="/inscripcion">Inscríbete ahora</a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
