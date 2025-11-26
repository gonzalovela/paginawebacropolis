import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

type VolunteerPhoto = {
  id: string;
  titulo: string;
  descripcion: string | null;
  categoria: string;
  imagen_url: string;
  orden: number;
};

export const VoluntariadoGallery = () => {
  const { data: photos, isLoading } = useQuery({
    queryKey: ["voluntariado-fotos"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("voluntariado_fotos")
        .select("*")
        .eq("activo", true)
        .order("orden", { ascending: true });

      if (error) throw error;
      return data as VolunteerPhoto[];
    },
  });

  const categorias = [
    { value: "todos", label: "Todas las Actividades" },
    { value: "ambiental", label: "Acción Ambiental" },
    { value: "social", label: "Acción Social" },
    { value: "cultural", label: "Acción Cultural" },
  ];

  const filteredPhotos = (categoria: string) => {
    if (!photos) return [];
    if (categoria === "todos") return photos;
    return photos.filter((photo) => photo.categoria === categoria);
  };

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="overflow-hidden">
            <Skeleton className="w-full h-64" />
            <div className="p-4 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-full" />
            </div>
          </Card>
        ))}
      </div>
    );
  }

  if (!photos || photos.length === 0) {
    return (
      <Card className="p-8 text-center">
        <p className="text-foreground/60">
          Próximamente compartiremos fotos de nuestras actividades de voluntariado.
        </p>
      </Card>
    );
  }

  return (
    <Tabs defaultValue="todos" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
        {categorias.map((cat) => (
          <TabsTrigger key={cat.value} value={cat.value}>
            {cat.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {categorias.map((cat) => (
        <TabsContent key={cat.value} value={cat.value} className="mt-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos(cat.value).map((photo) => (
              <Card
                key={photo.id}
                className="overflow-hidden hover:shadow-medium transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={photo.imagen_url}
                    alt={photo.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-foreground line-clamp-1">
                    {photo.titulo}
                  </h3>
                  {photo.descripcion && (
                    <p className="text-sm text-foreground/60 line-clamp-2">
                      {photo.descripcion}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
