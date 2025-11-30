import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Upload, Image as ImageIcon, Save } from "lucide-react";
import { BookOpen, Globe, Music, Lightbulb } from "lucide-react";
import { optimizeImage, IMAGE_PRESETS } from "@/hooks/useImageOptimization";

// Default images for preview when no database image exists
import charlasConferenciasImage from "@/assets/cultura-charlas-conferencias.jpg";
import musicaArtesImage from "@/assets/cultura-musica-artes-original.jpg";
import encuentrosCulturalesImage from "@/assets/cultura-encuentros-culturales-tight.jpg";
import desarrolloPersonalImage from "@/assets/cultura-desarrollo-personal.jpg";

const DEFAULT_IMAGES: Record<string, string> = {
  "charlas-conferencias": charlasConferenciasImage,
  "encuentros-culturales": encuentrosCulturalesImage,
  "musica-artes": musicaArtesImage,
  "desarrollo-personal": desarrolloPersonalImage,
};

const IMAGE_POSITIONS = [
  { value: "center", label: "Centro", description: "La imagen se centra" },
  { value: "top", label: "Arriba", description: "Muestra la parte superior" },
  { value: "bottom", label: "Abajo", description: "Muestra la parte inferior" },
  { value: "center 20%", label: "Casi arriba", description: "Enfoca cerca del tope" },
  { value: "center 35%", label: "Arriba-centro", description: "Entre arriba y centro" },
  { value: "center 65%", label: "Centro-abajo", description: "Entre centro y abajo" },
  { value: "center 80%", label: "Casi abajo", description: "Enfoca cerca del fondo" },
];

interface CulturaActividad {
  id: string;
  slug: string;
  titulo: string;
  descripcion: string;
  imagen_url: string | null;
  icono: string;
  imagen_position: string | null;
  alt_text: string | null;
  orden: number;
}

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Globe,
  Music,
  Lightbulb,
};

export const CulturaActividadesAdmin = () => {
  const [actividades, setActividades] = useState<CulturaActividad[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [uploading, setUploading] = useState<string | null>(null);

  useEffect(() => {
    fetchActividades();
  }, []);

  const fetchActividades = async () => {
    try {
      const { data, error } = await supabase
        .from('cultura_actividades')
        .select('*')
        .order('orden', { ascending: true });

      if (error) throw error;
      setActividades(data || []);
    } catch (error) {
      toast.error("Error al cargar las actividades");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (actividadId: string, file: File) => {
    setUploading(actividadId);
    
    try {
      // Optimize image before upload (resize and compress)
      toast.info("Optimizando imagen...");
      const optimizedFile = await optimizeImage(file, IMAGE_PRESETS.programCard);
      
      const fileExt = optimizedFile.name.split('.').pop();
      const fileName = `${actividadId}-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('cultura-actividades')
        .upload(fileName, optimizedFile, { 
          upsert: true,
          contentType: optimizedFile.type,
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('cultura-actividades')
        .getPublicUrl(fileName);

      const { error: updateError } = await supabase
        .from('cultura_actividades')
        .update({ imagen_url: publicUrl, updated_at: new Date().toISOString() })
        .eq('id', actividadId);

      if (updateError) throw updateError;

      setActividades(prev => 
        prev.map(a => a.id === actividadId ? { ...a, imagen_url: publicUrl } : a)
      );

      toast.success("Imagen optimizada y actualizada correctamente");
    } catch (error) {
      toast.error("Error al subir la imagen");
    } finally {
      setUploading(null);
    }
  };

  const handleSavePosition = async (actividadId: string, position: string) => {
    setSaving(actividadId);

    try {
      const { error } = await supabase
        .from('cultura_actividades')
        .update({ 
          imagen_position: position,
          updated_at: new Date().toISOString() 
        })
        .eq('id', actividadId);

      if (error) throw error;

      toast.success("Posición guardada");
    } catch (error) {
      toast.error("Error al guardar la posición");
    } finally {
      setSaving(null);
    }
  };


  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="h-5 w-5" />
          Actividades Culturales
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Gestiona las imágenes de las 4 actividades culturales. Los textos descriptivos se mantienen fijos para preservar el SEO.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {actividades.map((actividad) => {
            const IconComponent = iconMap[actividad.icono] || BookOpen;
            
            return (
              <Card key={actividad.id} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Image Section */}
                  <div className="relative aspect-video bg-muted">
                    {(() => {
                      const imageUrl = actividad.imagen_url || DEFAULT_IMAGES[actividad.slug];
                      return imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={actividad.titulo}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: actividad.imagen_position || 'center' }}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                          <ImageIcon className="h-12 w-12" />
                        </div>
                      );
                    })()}
                    
                    {/* Current image indicator */}
                    {!actividad.imagen_url && DEFAULT_IMAGES[actividad.slug] && (
                      <div className="absolute top-2 left-2 bg-yellow-500/90 text-white text-xs px-2 py-1 rounded">
                        Imagen por defecto
                      </div>
                    )}
                    {actividad.imagen_url && (
                      <div className="absolute top-2 left-2 bg-green-500/90 text-white text-xs px-2 py-1 rounded">
                        Imagen personalizada
                      </div>
                    )}
                    
                    {/* Upload overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Label
                        htmlFor={`upload-${actividad.id}`}
                        className="cursor-pointer"
                      >
                        <div className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md">
                          {uploading === actividad.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Upload className="h-4 w-4" />
                          )}
                          Cambiar imagen
                        </div>
                      </Label>
                      <Input
                        id={`upload-${actividad.id}`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload(actividad.id, file);
                        }}
                        disabled={uploading === actividad.id}
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg">{actividad.titulo}</h3>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {actividad.descripcion}
                    </p>

                    <div className="space-y-2">
                      <Label>Posición de imagen</Label>
                      <Select
                        value={actividad.imagen_position || 'center'}
                        onValueChange={(value) => {
                          setActividades(prev =>
                            prev.map(a => a.id === actividad.id ? { ...a, imagen_position: value } : a)
                          );
                          handleSavePosition(actividad.id, value);
                        }}
                      >
                        <SelectTrigger className="w-full bg-background">
                          <SelectValue placeholder="Selecciona posición" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border shadow-lg">
                          {IMAGE_POSITIONS.map((pos) => (
                            <SelectItem key={pos.value} value={pos.value}>
                              <div className="flex flex-col">
                                <span className="font-medium">{pos.label}</span>
                                <span className="text-xs text-muted-foreground">{pos.description}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
