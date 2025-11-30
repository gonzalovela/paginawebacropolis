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
import { Loader2, Upload, Image as ImageIcon, Save, Heart, BookOpen, HandHeart, Sprout, Users, Lightbulb } from "lucide-react";
import { optimizeImage, IMAGE_PRESETS } from "@/hooks/useImageOptimization";

// Default images for preview when no database image exists
import yoAmoLecturaImage from "@/assets/voluntariado-yo-amo-lectura-warm.jpg";
import adultoMayorImage from "@/assets/voluntariado-adulto-mayor.jpg";
import humanitarioSocialImage from "@/assets/voluntariado-humanitario-social-warm.jpg";
import medioAmbienteImage from "@/assets/voluntariado-medio-ambiente.jpg";
import formacionImage from "@/assets/voluntariado-formacion.jpg";
import talleresArtisticosImage from "@/assets/voluntariado-talleres-artisticos.jpg";

const DEFAULT_IMAGES: Record<string, string> = {
  "yo-amo-lectura": yoAmoLecturaImage,
  "adulto-mayor": adultoMayorImage,
  "humanitario-social": humanitarioSocialImage,
  "medio-ambiente": medioAmbienteImage,
  "formacion-voluntarios": formacionImage,
  "talleres-artisticos": talleresArtisticosImage,
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

interface VoluntariadoPrograma {
  id: string;
  slug: string;
  titulo: string;
  descripcion: string;
  imagen_url: string | null;
  icono: string;
  actividades: string[];
  imagen_position: string | null;
  alt_text: string | null;
  orden: number;
}

const iconMap: Record<string, React.ElementType> = {
  Heart,
  BookOpen,
  HandHeart,
  Sprout,
  Users,
  Lightbulb,
};

export const VoluntariadoProgramasAdmin = () => {
  const [programas, setProgramas] = useState<VoluntariadoPrograma[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [uploading, setUploading] = useState<string | null>(null);

  useEffect(() => {
    fetchProgramas();
  }, []);

  const fetchProgramas = async () => {
    try {
      const { data, error } = await supabase
        .from('voluntariado_programas')
        .select('*')
        .order('orden', { ascending: true });

      if (error) throw error;
      setProgramas(data || []);
    } catch (error) {
      toast.error("Error al cargar los programas");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (programaId: string, file: File) => {
    setUploading(programaId);
    
    try {
      // Optimize image before upload (resize and compress)
      toast.info("Optimizando imagen...");
      const optimizedFile = await optimizeImage(file, IMAGE_PRESETS.programCard);
      
      const fileExt = optimizedFile.name.split('.').pop();
      const fileName = `${programaId}-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('voluntariado-programas')
        .upload(fileName, optimizedFile, { 
          upsert: true,
          contentType: optimizedFile.type,
        });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('voluntariado-programas')
        .getPublicUrl(fileName);

      const { error: updateError } = await supabase
        .from('voluntariado_programas')
        .update({ imagen_url: publicUrl, updated_at: new Date().toISOString() })
        .eq('id', programaId);

      if (updateError) throw updateError;

      setProgramas(prev => 
        prev.map(p => p.id === programaId ? { ...p, imagen_url: publicUrl } : p)
      );

      toast.success("Imagen optimizada y actualizada correctamente");
    } catch (error) {
      toast.error("Error al subir la imagen");
    } finally {
      setUploading(null);
    }
  };

  const handleSavePosition = async (programaId: string, position: string) => {
    setSaving(programaId);

    try {
      const { error } = await supabase
        .from('voluntariado_programas')
        .update({ 
          imagen_position: position,
          updated_at: new Date().toISOString() 
        })
        .eq('id', programaId);

      if (error) throw error;

      toast.success("Posición guardada correctamente");
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
          <HandHeart className="h-5 w-5" />
          Programas de Voluntariado
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Gestiona las imágenes de los 6 programas de voluntariado. Los textos descriptivos se mantienen fijos para preservar el SEO.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {programas.map((programa) => {
            const IconComponent = iconMap[programa.icono] || Heart;
            
            return (
              <Card key={programa.id} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Image Section */}
                  <div className="relative aspect-video bg-muted">
                    {(() => {
                      const imageUrl = programa.imagen_url || DEFAULT_IMAGES[programa.slug];
                      return imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={programa.titulo}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: programa.imagen_position || 'center' }}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                          <ImageIcon className="h-12 w-12" />
                        </div>
                      );
                    })()}
                    
                    {/* Current image indicator */}
                    {!programa.imagen_url && DEFAULT_IMAGES[programa.slug] && (
                      <div className="absolute top-2 left-2 bg-yellow-500/90 text-white text-xs px-2 py-1 rounded">
                        Imagen por defecto
                      </div>
                    )}
                    {programa.imagen_url && (
                      <div className="absolute top-2 left-2 bg-green-500/90 text-white text-xs px-2 py-1 rounded">
                        Imagen personalizada
                      </div>
                    )}
                    
                    {/* Upload overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Label
                        htmlFor={`upload-vol-${programa.id}`}
                        className="cursor-pointer"
                      >
                        <div className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-md">
                          {uploading === programa.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Upload className="h-4 w-4" />
                          )}
                          Cambiar imagen
                        </div>
                      </Label>
                      <Input
                        id={`upload-vol-${programa.id}`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload(programa.id, file);
                        }}
                        disabled={uploading === programa.id}
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary/20 rounded-lg">
                        <IconComponent className="h-5 w-5 text-secondary" />
                      </div>
                      <h3 className="font-semibold text-lg">{programa.titulo}</h3>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {programa.descripcion}
                    </p>

                    <div className="space-y-2">
                      <Label className="text-xs">Actividades del programa</Label>
                      <div className="flex flex-wrap gap-1">
                        {programa.actividades?.map((act, i) => (
                          <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                            {act}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Posición de imagen</Label>
                      <Select
                        value={programa.imagen_position || 'center'}
                        onValueChange={(value) => {
                          setProgramas(prev =>
                            prev.map(p => p.id === programa.id ? { ...p, imagen_position: value } : p)
                          );
                          handleSavePosition(programa.id, value);
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
