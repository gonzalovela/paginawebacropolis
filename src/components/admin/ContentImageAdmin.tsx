import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Loader2, Upload, Image as ImageIcon } from "lucide-react";
import { optimizeImage, IMAGE_PRESETS } from "@/hooks/useImageOptimization";
import { IMAGE_POSITIONS, iconMap } from "@/utils/admin-constants";

interface ContentItem {
  id: string;
  slug: string;
  titulo: string;
  descripcion: string;
  imagen_url: string | null;
  icono: string;
  imagen_position: string | null;
  actividades?: string[];
}

interface ContentImageAdminProps {
  title: string;
  description: string;
  tableName: "voluntariado_programas" | "cultura_actividades";
  storageBucket: string;
  defaultImages: Record<string, string>;
  titleIcon: React.ReactNode;
  accentColor?: "primary" | "secondary";
}

export const ContentImageAdmin = ({
  title,
  description,
  tableName,
  storageBucket,
  defaultImages,
  titleIcon,
  accentColor = "primary",
}: ContentImageAdminProps) => {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [uploading, setUploading] = useState<string | null>(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const { data, error } = await supabase
        .from(tableName)
        .select("*")
        .order("orden", { ascending: true });

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      toast.error("Error al cargar los datos");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (itemId: string, file: File) => {
    setUploading(itemId);

    try {
      toast.info("Optimizando imagen...");
      const optimizedFile = await optimizeImage(file, IMAGE_PRESETS.programCard);

      const fileExt = optimizedFile.name.split(".").pop();
      const fileName = `${itemId}-${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from(storageBucket)
        .upload(fileName, optimizedFile, {
          upsert: true,
          contentType: optimizedFile.type,
        });

      if (uploadError) throw uploadError;

      const {
        data: { publicUrl },
      } = supabase.storage.from(storageBucket).getPublicUrl(fileName);

      const { error: updateError } = await supabase
        .from(tableName)
        .update({ imagen_url: publicUrl, updated_at: new Date().toISOString() })
        .eq("id", itemId);

      if (updateError) throw updateError;

      setItems((prev) =>
        prev.map((item) =>
          item.id === itemId ? { ...item, imagen_url: publicUrl } : item
        )
      );

      toast.success("Imagen optimizada y actualizada correctamente");
    } catch (error) {
      toast.error("Error al subir la imagen");
    } finally {
      setUploading(null);
    }
  };

  const handleSavePosition = async (itemId: string, position: string) => {
    setSaving(itemId);

    try {
      const { error } = await supabase
        .from(tableName)
        .update({
          imagen_position: position,
          updated_at: new Date().toISOString(),
        })
        .eq("id", itemId);

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

  const bgColorClass = accentColor === "secondary" ? "bg-secondary/20" : "bg-primary/10";
  const textColorClass = accentColor === "secondary" ? "text-secondary" : "text-primary";
  const buttonBgClass = accentColor === "secondary" 
    ? "bg-secondary text-secondary-foreground" 
    : "bg-primary text-primary-foreground";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {titleIcon}
          {title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {items.map((item) => {
            const IconComponent = iconMap[item.icono] || ImageIcon;
            const imageUrl = item.imagen_url || defaultImages[item.slug];

            return (
              <Card key={item.id} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Image Section */}
                  <div className="relative aspect-video bg-muted">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={item.titulo}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: item.imagen_position || "center" }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        <ImageIcon className="h-12 w-12" />
                      </div>
                    )}

                    {/* Current image indicator */}
                    {!item.imagen_url && defaultImages[item.slug] && (
                      <div className="absolute top-2 left-2 bg-yellow-500/90 text-white text-xs px-2 py-1 rounded">
                        Imagen por defecto
                      </div>
                    )}
                    {item.imagen_url && (
                      <div className="absolute top-2 left-2 bg-green-500/90 text-white text-xs px-2 py-1 rounded">
                        Imagen personalizada
                      </div>
                    )}

                    {/* Upload overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Label
                        htmlFor={`upload-${tableName}-${item.id}`}
                        className="cursor-pointer"
                      >
                        <div className={`flex items-center gap-2 ${buttonBgClass} px-4 py-2 rounded-md`}>
                          {uploading === item.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Upload className="h-4 w-4" />
                          )}
                          Cambiar imagen
                        </div>
                      </Label>
                      <Input
                        id={`upload-${tableName}-${item.id}`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleImageUpload(item.id, file);
                        }}
                        disabled={uploading === item.id}
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 ${bgColorClass} rounded-lg`}>
                        <IconComponent className={`h-5 w-5 ${textColorClass}`} />
                      </div>
                      <h3 className="font-semibold text-lg">{item.titulo}</h3>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {item.descripcion}
                    </p>

                    {item.actividades && item.actividades.length > 0 && (
                      <div className="space-y-2">
                        <Label className="text-xs">Actividades del programa</Label>
                        <div className="flex flex-wrap gap-1">
                          {item.actividades.map((act, i) => (
                            <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                              {act}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label>Posición de imagen</Label>
                      <Select
                        value={item.imagen_position || "center"}
                        onValueChange={(value) => {
                          setItems((prev) =>
                            prev.map((i) =>
                              i.id === item.id ? { ...i, imagen_position: value } : i
                            )
                          );
                          handleSavePosition(item.id, value);
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
                                <span className="text-xs text-muted-foreground">
                                  {pos.description}
                                </span>
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
