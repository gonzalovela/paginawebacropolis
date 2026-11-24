import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { MapDialog } from "@/components/MapDialog";
import { SedeCard, SedesHeroBanner, type Sede } from "@/components/sedes";

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
      const searchLower = searchTerm.toLowerCase();
      const filtered = sedes.filter(sede => 
        (sede.nombre?.toLowerCase() || '').includes(searchLower) ||
        (sede.ciudad?.toLowerCase() || '').includes(searchLower) ||
        (sede.departamento?.toLowerCase() || '').includes(searchLower) ||
        (sede.distrito?.toLowerCase() || '').includes(searchLower) ||
        (sede.direccion?.toLowerCase() || '').includes(searchLower)
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

  // Group other sedes by departamento then ciudad
  const sedesByDepartamento = otherSedes.reduce((acc, sede) => {
    const deptKey = sede.departamento || sede.ciudad;
    if (!acc[deptKey]) {
      acc[deptKey] = [];
    }
    acc[deptKey].push(sede);
    return acc;
  }, {} as Record<string, Sede[]>);

  const departamentos = Object.keys(sedesByDepartamento).sort();

  const openMapDialog = (sede: Sede) => {
    setSelectedSede(sede);
    setMapDialogOpen(true);
  };

  return (
    <section className="relative min-h-screen">
      {/* Banner with parallax */}
      <SedesHeroBanner />

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
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-primary sticky top-16 md:top-20 bg-background/95 backdrop-blur py-3 md:py-4 z-10">
                  Sede Principal
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <SedeCard sede={sedePrincipal} isPrincipal onOpenMap={openMapDialog} />
                </div>
              </div>
            )}

            {/* Other sedes grouped by departamento */}
            {departamentos.map((dept) => (
              <div key={dept} className="space-y-3 md:space-y-4">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-primary sticky top-16 md:top-20 bg-background/95 backdrop-blur py-3 md:py-4 z-10">
                  {dept}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {sedesByDepartamento[dept].map((sede) => (
                    <SedeCard key={sede.id} sede={sede} onOpenMap={openMapDialog} />
                  ))}
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
