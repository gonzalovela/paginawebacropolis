import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Facebook, Instagram, Music2, Search, Map } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { ParallaxImage } from "@/components/ParallaxImage";
import { MapDialog } from "@/components/MapDialog";
import sedesImage from "@/assets/sedes-community-banner.jpg";

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
  google_maps_url?: string;
}

export const SedesDirectory = () => {
  const [sedes, setSedes] = useState<Sede[]>([]);
  const [filteredSedes, setFilteredSedes] = useState<Sede[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [mapDialogOpen, setMapDialogOpen] = useState(false);
  const [selectedSede, setSelectedSede] = useState<Sede | null>(null);

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
    } catch {
      // Error handled silently
    } finally {
      setLoading(false);
    }
  };

  // Separate main sede from others
  const sedePrincipal = filteredSedes.find(sede => sede.es_principal);
  const otherSedes = filteredSedes.filter(sede => !sede.es_principal);

  // Group other sedes by city
  const sedesByCity = otherSedes.reduce((acc, sede) => {
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

  const openMapDialog = (sede: Sede) => {
    setSelectedSede(sede);
    setMapDialogOpen(true);
  };

  const renderSedeCard = (sede: Sede, isPrincipal: boolean = false) => (
    <Card key={sede.id} className={`p-4 md:p-6 hover:shadow-lg transition-shadow ${isPrincipal ? 'border-l-4 border-l-primary' : 'border-l-4 border-l-primary'}`}>
      {isPrincipal && (
        <div className="mb-3 md:mb-4">
          <span className="bg-primary text-primary-foreground px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-medium">
            Sede Principal
          </span>
        </div>
      )}
      
      <h3 className="text-lg md:text-xl font-bold mb-2">{sede.nombre}</h3>
      
      <div className="space-y-2 md:space-y-3 text-muted-foreground mb-3 md:mb-4">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 mt-0.5 text-primary" />
          <div>
            {isPrincipal && <p className="font-medium text-foreground text-sm md:text-base">{sede.ciudad}</p>}
            <p className="text-xs md:text-sm">{sede.direccion}</p>
          </div>
        </div>

        {sede.whatsapp && (
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-primary" />
            <a 
              href={formatWhatsApp(sede.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm hover:text-primary transition-colors font-medium"
            >
              {sede.whatsapp}
            </a>
          </div>
        )}
      </div>

      {sede.google_maps_url && (
        <Button
          variant="outline"
          size="sm"
          className="w-full mb-3 md:mb-4 hover:bg-primary hover:text-primary-foreground transition-colors text-xs md:text-sm"
          onClick={() => openMapDialog(sede)}
        >
          <Map className="h-3.5 w-3.5 md:h-4 md:w-4 mr-2" />
          Ver en el mapa
        </Button>
      )}

      {(sede.facebook || sede.instagram || sede.tiktok) && (
        <div className="flex gap-2 pt-3 md:pt-4 border-t">
          {sede.facebook && (
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8 md:h-10 md:w-10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              asChild
            >
              <a 
                href={sede.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </a>
            </Button>
          )}
          {sede.instagram && (
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8 md:h-10 md:w-10 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-colors"
              asChild
            >
              <a 
                href={sede.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </a>
            </Button>
          )}
          {sede.tiktok && (
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8 md:h-10 md:w-10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              asChild
            >
              <a 
                href={sede.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <Music2 className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </a>
            </Button>
          )}
        </div>
      )}
    </Card>
  );

  return (
    <section className="relative min-h-screen">
      {/* Banner with parallax */}
      <div className="relative h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden">
        <ParallaxImage src={sedesImage} alt="Nuestras Sedes" speed={0.15} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80 z-[1]" />
        
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="container px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2 md:mb-4">
              Nuestras Sedes
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto px-2">
              Encuentra la sede más cercana a ti y comienza tu viaje filosófico
            </p>
          </div>
        </div>
      </div>

      {/* Directory content */}
      <div className="container px-4 py-8 md:py-16">
        {/* Search bar */}
        <div className="mb-6 md:mb-8 max-w-xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar por ciudad, nombre o dirección..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 md:pl-10 py-5 md:py-6 text-sm md:text-lg"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-8 md:py-12">
            <p className="text-muted-foreground text-sm md:text-base">Cargando sedes...</p>
          </div>
        ) : filteredSedes.length === 0 ? (
          <div className="text-center py-8 md:py-12">
            <p className="text-muted-foreground text-sm md:text-base">
              {searchTerm ? "No se encontraron sedes con ese criterio de búsqueda." : "No hay sedes disponibles en este momento."}
            </p>
          </div>
        ) : (
          <div className="space-y-8 md:space-y-12">
            {/* Sede Principal - Always first */}
            {sedePrincipal && (
              <div className="space-y-3 md:space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary sticky top-16 md:top-20 bg-background/95 backdrop-blur py-3 md:py-4 z-10">
                  Sede Principal
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {renderSedeCard(sedePrincipal, true)}
                </div>
              </div>
            )}

            {/* Other sedes grouped by city */}
            {cities.map((city) => (
              <div key={city} className="space-y-3 md:space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-primary sticky top-16 md:top-20 bg-background/95 backdrop-blur py-3 md:py-4 z-10">
                  {city}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {sedesByCity[city].map((sede) => renderSedeCard(sede, false))}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Map Dialog */}
        {selectedSede && selectedSede.google_maps_url && (
          <MapDialog
            isOpen={mapDialogOpen}
            onClose={() => setMapDialogOpen(false)}
            mapsUrl={selectedSede.google_maps_url}
            sedeName={selectedSede.nombre}
          />
        )}
      </div>
    </section>
  );
};
