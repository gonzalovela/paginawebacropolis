import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Upload, Image as ImageIcon, Save } from "lucide-react";
import { BookOpen, Globe, Music, Lightbulb } from "lucide-react";

interface CulturaActividad {
  id: string;
  slug: string;
  titulo: string;
  descripcion: string;
  imagen_url: string | null;
  icono: string;
  imagen_position: string | null;
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
      const fileExt = file.name.split('.').pop();
      const fileName = `${actividadId}-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('cultura-actividades')
        .upload(fileName, file, { upsert: true });

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

      toast.success("Imagen actualizada correctamente");
    } catch (error) {
      toast.error("Error al subir la imagen");
    } finally {
      setUploading(null);
    }
  };

  const handleDescriptionUpdate = async (actividadId: string, descripcion: string) => {
    setSaving(actividadId);

    try {
      const { error } = await supabase
        .from('cultura_actividades')
        .update({ descripcion, updated_at: new Date().toISOString() })
        .eq('id', actividadId);

      if (error) throw error;

      setActividades(prev =>
        prev.map(a => a.id === actividadId ? { ...a, descripcion } : a)
      );

      toast.success("Descripción actualizada");
    } catch (error) {
      toast.error("Error al actualizar la descripción");
    } finally {
      setSaving(null);
    }
  };

  const handlePositionUpdate = async (actividadId: string, imagen_position: string) => {
    try {
      const { error } = await supabase
        .from('cultura_actividades')
        .update({ imagen_position, updated_at: new Date().toISOString() })
        .eq('id', actividadId);

      if (error) throw error;

      setActividades(prev =>
        prev.map(a => a.id === actividadId ? { ...a, imagen_position } : a)
      );

      toast.success("Posición de imagen actualizada");
    } catch (error) {
      toast.error("Error al actualizar la posición");
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
          Gestiona las imágenes y descripciones de las 4 actividades culturales principales que aparecen en la página de Cultura.
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
                    {actividad.imagen_url ? (
                      <img
                        src={actividad.imagen_url}
                        alt={actividad.titulo}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: actividad.imagen_position || 'center' }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        <ImageIcon className="h-12 w-12" />
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

                    <div className="space-y-2">
                      <Label htmlFor={`desc-${actividad.id}`}>Descripción</Label>
                      <Textarea
                        id={`desc-${actividad.id}`}
                        value={actividad.descripcion}
                        onChange={(e) => {
                          setActividades(prev =>
                            prev.map(a => a.id === actividad.id ? { ...a, descripcion: e.target.value } : a)
                          );
                        }}
                        rows={4}
                        className="resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`pos-${actividad.id}`}>Posición de imagen</Label>
                      <Input
                        id={`pos-${actividad.id}`}
                        value={actividad.imagen_position || 'center'}
                        onChange={(e) => {
                          setActividades(prev =>
                            prev.map(a => a.id === actividad.id ? { ...a, imagen_position: e.target.value } : a)
                          );
                        }}
                        placeholder="center, center 25%, top, etc."
                      />
                      <p className="text-xs text-muted-foreground">
                        Usa valores como: center, top, bottom, center 25%, etc.
                      </p>
                    </div>

                    <Button
                      onClick={() => {
                        handleDescriptionUpdate(actividad.id, actividad.descripcion);
                        if (actividad.imagen_position) {
                          handlePositionUpdate(actividad.id, actividad.imagen_position);
                        }
                      }}
                      disabled={saving === actividad.id}
                      className="w-full"
                    >
                      {saving === actividad.id ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      ) : (
                        <Save className="h-4 w-4 mr-2" />
                      )}
                      Guardar cambios
                    </Button>
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
