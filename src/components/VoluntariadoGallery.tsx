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
  const { data: photos, isLoading, error } = useQuery({
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

  console.log("VoluntariadoGallery photos", { photos, isLoading, error });

  const categorias = [
    { value: "todos", label: "Todos los Programas" },
    { value: "yo_amo_lectura", label: "Yo Amo la Lectura" },
    { value: "adulto_mayor", label: "Acompañamiento al Adulto Mayor" },
    { value: "humanitario_social", label: "Acción Humanitaria y Social" },
    { value: "medio_ambiente", label: "Protección del Medio Ambiente" },
    { value: "formacion_voluntarios", label: "Formación de Voluntarios" },
    { value: "talleres_artisticos", label: "Talleres Artísticos" },
  ];

  const filteredPhotos = (categoria: string) => {
    if (!photos) return [];
    if (categoria === "todos") return photos;
    return photos.filter((photo) => photo.categoria === categoria);
  };

  if (isLoading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i} className="overflow-hidden border-0">
            <Skeleton className="w-full aspect-square" />
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
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8 h-auto gap-2 bg-muted/30">
        {categorias.map((cat) => (
          <TabsTrigger 
            key={cat.value} 
            value={cat.value} 
            className="text-xs sm:text-sm py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            {cat.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {categorias.map((cat) => (
        <TabsContent key={cat.value} value={cat.value} className="mt-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredPhotos(cat.value).map((photo) => (
              <Card
                key={photo.id}
                className="overflow-hidden border-0 hover:shadow-elevated transition-all duration-300 group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={photo.imagen_url}
                    alt={photo.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-xl mb-2 line-clamp-2">
                      {photo.titulo}
                    </h3>
                    {photo.descripcion && (
                      <p className="text-sm text-white/90 line-clamp-3">
                        {photo.descripcion}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};
