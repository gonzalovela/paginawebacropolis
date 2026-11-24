import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { OptimizedImage } from "@/components/OptimizedImage";

type VolunteerPhoto = {
  id: string;
  titulo: string;
  descripcion: string | null;
  categoria: string;
  imagen_url: string;
  orden: number;
  sedes?: {
    nombre: string;
    ciudad: string;
  } | null;
};

const PHOTOS_PER_PAGE = 6;

export const VoluntariadoGallery = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const { data: photos, isLoading, error } = useQuery({
    queryKey: ["voluntariado-fotos"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("voluntariado_fotos")
        .select(`
          *,
          sedes (
            nombre,
            ciudad
          )
        `)
        .eq("activo", true)
        .order("orden", { ascending: true });

      if (error) throw error;
      return data as any[];
    },
  });

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

  const toggleExpanded = (categoria: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoria)) {
        newSet.delete(categoria);
      } else {
        newSet.add(categoria);
      }
      return newSet;
    });
  };

  const getVisiblePhotos = (categoria: string) => {
    const allPhotos = filteredPhotos(categoria);
    const isExpanded = expandedCategories.has(categoria);
    return isExpanded ? allPhotos : allPhotos.slice(0, PHOTOS_PER_PAGE);
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
      <TabsList className="flex flex-wrap w-full justify-center mb-6 sm:mb-8 h-auto gap-1.5 sm:gap-2 bg-muted/30 p-1.5 sm:p-2 rounded-lg">
        {categorias.map((cat) => (
          <TabsTrigger 
            key={cat.value} 
            value={cat.value} 
            className="text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 whitespace-nowrap data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-md"
          >
            {cat.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {categorias.map((cat) => {
        const allPhotos = filteredPhotos(cat.value);
        const visiblePhotos = getVisiblePhotos(cat.value);
        const hasMore = allPhotos.length > PHOTOS_PER_PAGE;
        const isExpanded = expandedCategories.has(cat.value);
        const remainingCount = allPhotos.length - PHOTOS_PER_PAGE;

        return (
          <TabsContent key={cat.value} value={cat.value} className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
              {visiblePhotos.map((photo, index) => (
                <Card
                  key={photo.id}
                  className="overflow-hidden border-0 hover:shadow-elevated transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <OptimizedImage
                      src={photo.imagen_url}
                      alt={photo.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      containerClassName="w-full h-full"
                      priority={index < 4}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content Overlay - Always visible on mobile */}
                    <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6 text-primary-foreground opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-bold text-sm sm:text-base md:text-xl mb-1 sm:mb-2 line-clamp-2">
                        {photo.titulo}
                      </h3>
                      {photo.descripcion && (
                        <p className="text-xs sm:text-sm text-primary-foreground/90 line-clamp-2 sm:line-clamp-3 hidden sm:block">
                          {photo.descripcion}
                        </p>
                      )}
                    </div>

                    {photo.sedes && (
                      <div className="absolute left-2 sm:left-3 top-2 sm:top-3 bg-foreground/70 text-primary-foreground text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md">
                        📍 {photo.sedes.nombre}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-6 sm:mt-8">
                <Button
                  variant="outline"
                  onClick={() => toggleExpanded(cat.value)}
                  className="gap-2 text-sm sm:text-base"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Ver menos
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      Ver más ({remainingCount})
                    </>
                  )}
                </Button>
              </div>
            )}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};
