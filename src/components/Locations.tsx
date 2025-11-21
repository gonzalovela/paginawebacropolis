import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Locations = () => {
  const locations = [
    {
      city: "Lima - San Isidro",
      address: "Av. Petit Thouars 5390, San Isidro",
      phone: "+51 XXX XXX XXX",
      email: "sanisidro@acropolisperu.org",
      schedule: "Lun - Vie: 6:00 PM - 10:00 PM",
      isMain: true,
    },
    {
      city: "Lima - Miraflores",
      address: "Av. Larco 345, Miraflores",
      phone: "+51 XXX XXX XXX",
      email: "miraflores@acropolisperu.org",
      schedule: "Mar - Sáb: 5:30 PM - 9:30 PM",
      isMain: false,
    },
    {
      city: "Arequipa",
      address: "Calle Santa Catalina 120, Centro Histórico",
      phone: "+51 XXX XXX XXX",
      email: "arequipa@acropolisperu.org",
      schedule: "Lun - Vie: 6:30 PM - 9:30 PM",
      isMain: false,
    },
    {
      city: "Cusco",
      address: "Av. El Sol 567, Cusco",
      phone: "+51 XXX XXX XXX",
      email: "cusco@acropolisperu.org",
      schedule: "Mar - Sáb: 6:00 PM - 9:00 PM",
      isMain: false,
    },
    {
      city: "Trujillo",
      address: "Jr. Pizarro 234, Centro Histórico",
      phone: "+51 XXX XXX XXX",
      email: "trujillo@acropolisperu.org",
      schedule: "Lun - Vie: 7:00 PM - 10:00 PM",
      isMain: false,
    },
    {
      city: "Piura",
      address: "Calle Lima 456, Piura",
      phone: "+51 XXX XXX XXX",
      email: "piura@acropolisperu.org",
      schedule: "Mar - Jue: 6:30 PM - 9:30 PM",
      isMain: false,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Nuestras Sedes en Perú
          </h2>
          <p className="text-lg md:text-xl text-foreground/80">
            Encuentra la sede más cercana a ti y comienza tu viaje filosófico. 
            Todas nuestras sedes ofrecen el mismo nivel de calidad y compromiso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {locations.map((location, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-medium transition-all duration-300 ${
                location.isMain ? "border-2 border-primary" : ""
              }`}
            >
              {location.isMain && (
                <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-4">
                  SEDE PRINCIPAL
                </div>
              )}
              
              <h3 className="text-xl font-bold text-primary mb-6">
                {location.city}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground/70">{location.address}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-sm text-foreground/70">{location.phone}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a 
                    href={`mailto:${location.email}`}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    {location.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-sm text-foreground/70">{location.schedule}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <Button variant="outline" className="w-full">
                  Ver en mapa
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="inline-block p-8 md:p-12 bg-gradient-hero text-primary-foreground max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para comenzar tu camino filosófico?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Elige tu sede y únete a nuestra próxima promoción del curso "Conócete a Ti Mismo"
            </p>
            <Button size="lg" variant="secondary">
              Quiero estudiar filosofía
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
