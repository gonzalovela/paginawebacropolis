import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Facebook, Instagram, Music2, Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { ParallaxImage } from "@/components/ParallaxImage";
import sedesImage from "@/assets/hero-sunset-vibrant.jpg";

interface Sede {
  id: string;
  nombre: string;
  ciudad: string;
  direccion: string;
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  es_principal: boolean;
}

export const SedesDirectory = () => {
  const [sedes, setSedes] = useState<Sede[]>([]);
  const [filteredSedes, setFilteredSedes] = useState<Sede[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSedes();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredSedes(sedes);
    } else {
      const filtered = sedes.filter(sede => 
        sede.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sede.ciudad.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sede.direccion.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSedes(filtered);
    }
  }, [searchTerm, sedes]);

  const loadSedes = async () => {
    try {
      const { data, error } = await supabase
        .from('sedes')
        .select('*')
        .order('ciudad', { ascending: true })
        .order('nombre', { ascending: true });

      if (error) throw error;
      setSedes(data || []);
      setFilteredSedes(data || []);
    } catch (error) {
      console.error('Error loading sedes:', error);
    } finally {
      setLoading(false);
    }
  };

  // Group sedes by city
  const sedesByCity = filteredSedes.reduce((acc, sede) => {
    if (!acc[sede.ciudad]) {
      acc[sede.ciudad] = [];
    }
    acc[sede.ciudad].push(sede);
    return acc;
  }, {} as Record<string, Sede[]>);

  const cities = Object.keys(sedesByCity).sort();

  const formatWhatsApp = (number: string) => {
    return `https://wa.me/${number.replace(/\D/g, '')}`;
  };

  return (
    <section className="relative min-h-screen">
      {/* Banner with parallax */}
      <div className="relative h-[400px] overflow-hidden">
        <ParallaxImage src={sedesImage} alt="Nuestras Sedes" speed={0.3} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-[1]" />
        
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="container px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Nuestras Sedes
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Encuentra la sede más cercana a ti y comienza tu viaje filosófico
            </p>
          </div>
        </div>
      </div>

      {/* Directory content */}
      <div className="container px-4 py-16">
        {/* Search bar */}
        <div className="mb-8 max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar por ciudad, nombre o dirección..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6 text-lg"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Cargando sedes...</p>
          </div>
        ) : filteredSedes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {searchTerm ? "No se encontraron sedes con ese criterio de búsqueda." : "No hay sedes disponibles en este momento."}
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {cities.map((city) => (
              <div key={city} className="space-y-4">
                <h2 className="text-3xl font-bold text-primary sticky top-20 bg-background/95 backdrop-blur py-4 z-10">
                  {city}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sedesByCity[city].map((sede) => (
                    <Card key={sede.id} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                      {sede.es_principal && (
                        <div className="mb-4">
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            Sede Principal
                          </span>
                        </div>
                      )}
                      
                      <h3 className="text-xl font-bold mb-2">{sede.nombre}</h3>
                      
                      <div className="space-y-3 text-muted-foreground mb-4">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                          <div>
                            <p className="text-sm">{sede.direccion}</p>
                          </div>
                        </div>

                        {sede.whatsapp && (
                          <div className="flex items-center gap-2">
                            <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                            <a 
                              href={formatWhatsApp(sede.whatsapp)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm hover:text-primary transition-colors font-medium"
                            >
                              {sede.whatsapp}
                            </a>
                          </div>
                        )}
                      </div>

                      {(sede.facebook || sede.instagram || sede.tiktok) && (
                        <div className="flex gap-2 pt-4 border-t">
                          {sede.facebook && (
                            <Button 
                              variant="outline" 
                              size="icon"
                              className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                              asChild
                            >
                              <a 
                                href={sede.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                              >
                                <Facebook className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {sede.instagram && (
                            <Button 
                              variant="outline" 
                              size="icon"
                              className="hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-colors"
                              asChild
                            >
                              <a 
                                href={sede.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                              >
                                <Instagram className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {sede.tiktok && (
                            <Button 
                              variant="outline" 
                              size="icon"
                              className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                              asChild
                            >
                              <a 
                                href={sede.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                              >
                                <Music2 className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
