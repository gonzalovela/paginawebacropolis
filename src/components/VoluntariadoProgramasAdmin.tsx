import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, Upload, Image as ImageIcon, Save, Heart, BookOpen, HandHeart, Sprout, Users, Lightbulb } from "lucide-react";
import { optimizeImage, IMAGE_PRESETS } from "@/hooks/useImageOptimization";

interface VoluntariadoPrograma {
  id: string;
  slug: string;
  titulo: string;
  descripcion: string;
  imagen_url: string | null;
  icono: string;
  actividades: string[];
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

  const handleSaveChanges = async (programaId: string, programa: VoluntariadoPrograma) => {
    setSaving(programaId);

    try {
      const { error } = await supabase
        .from('voluntariado_programas')
        .update({ 
          descripcion: programa.descripcion,
          updated_at: new Date().toISOString() 
        })
        .eq('id', programaId);

      if (error) throw error;

      toast.success("Cambios guardados correctamente");
    } catch (error) {
      toast.error("Error al guardar los cambios");
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
          Gestiona las imágenes y descripciones de los 6 programas de voluntariado que aparecen en la página de Voluntariado.
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
                    {programa.imagen_url ? (
                      <img
                        src={programa.imagen_url}
                        alt={programa.titulo}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        <ImageIcon className="h-12 w-12" />
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

                    <div className="space-y-2">
                      <Label htmlFor={`desc-vol-${programa.id}`}>Descripción</Label>
                      <Textarea
                        id={`desc-vol-${programa.id}`}
                        value={programa.descripcion}
                        onChange={(e) => {
                          setProgramas(prev =>
                            prev.map(p => p.id === programa.id ? { ...p, descripcion: e.target.value } : p)
                          );
                        }}
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Actividades</Label>
                      <div className="flex flex-wrap gap-1">
                        {programa.actividades.map((act, i) => (
                          <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                            {act}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => handleSaveChanges(programa.id, programa)}
                      disabled={saving === programa.id}
                      className="w-full"
                    >
                      {saving === programa.id ? (
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
