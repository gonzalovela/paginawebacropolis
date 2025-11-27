import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Trash2, Upload, Eye, EyeOff, Pencil, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

type VolunteerPhoto = {
  id: string;
  titulo: string;
  descripcion: string | null;
  categoria: string;
  imagen_url: string;
  orden: number;
  activo: boolean;
  sede_id: string | null;
};

type Sede = {
  id: string;
  nombre: string;
  ciudad: string;
};

const MAX_PHOTOS_PER_CATEGORY = 6;

const CATEGORIAS = [
  { value: "yo_amo_lectura", label: "Yo Amo la Lectura" },
  { value: "adulto_mayor", label: "Acompañamiento al Adulto Mayor" },
  { value: "humanitario_social", label: "Acción Humanitaria y Social" },
  { value: "medio_ambiente", label: "Protección del Medio Ambiente" },
  { value: "formacion_voluntarios", label: "Formación de Voluntarios" },
  { value: "talleres_artisticos", label: "Talleres Artísticos" },
];

export const VoluntariadoFotosAdmin = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    categoria: "yo_amo_lectura",
    sede_id: "",
    file: null as File | null,
  });

  const { data: sedes } = useQuery({
    queryKey: ["sedes-list"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("sedes")
        .select("id, nombre, ciudad")
        .order("nombre", { ascending: true });

      if (error) throw error;
      return data as Sede[];
    },
  });

  const { data: photos, isLoading } = useQuery({
    queryKey: ["voluntariado-fotos-admin"],
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
        .order("orden", { ascending: true });

      if (error) throw error;
      return data as any[];
    },
  });

  // Count photos per category
  const photosPerCategory = useMemo(() => {
    if (!photos) return {};
    return photos.reduce((acc: Record<string, number>, photo) => {
      acc[photo.categoria] = (acc[photo.categoria] || 0) + 1;
      return acc;
    }, {});
  }, [photos]);

  const getCategoryCount = (categoria: string) => {
    return photosPerCategory[categoria] || 0;
  };

  const isCategoryFull = (categoria: string) => {
    return getCategoryCount(categoria) >= MAX_PHOTOS_PER_CATEGORY;
  };

  const uploadMutation = useMutation({
    mutationFn: async () => {
      if (!formData.file || !formData.titulo) {
        throw new Error("Título y foto son requeridos");
      }

      // Check category limit
      if (isCategoryFull(formData.categoria)) {
        throw new Error(`Esta categoría ya tiene el máximo de ${MAX_PHOTOS_PER_CATEGORY} fotos. Elimina una foto antes de agregar otra.`);
      }

      setUploading(true);

      // Upload image
      const fileExt = formData.file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("voluntariado-fotos")
        .upload(filePath, formData.file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("voluntariado-fotos")
        .getPublicUrl(filePath);

      // Insert record
      const { error: insertError } = await supabase
        .from("voluntariado_fotos")
        .insert({
          titulo: formData.titulo,
          descripcion: formData.descripcion || null,
          categoria: formData.categoria,
          sede_id: formData.sede_id || null,
          imagen_url: urlData.publicUrl,
          orden: (photos?.length || 0) + 1,
        });

      if (insertError) throw insertError;
    },
    onSuccess: () => {
      toast.success("Foto agregada exitosamente");
      queryClient.invalidateQueries({ queryKey: ["voluntariado-fotos-admin"] });
      queryClient.invalidateQueries({ queryKey: ["voluntariado-fotos"] });
      setFormData({ titulo: "", descripcion: "", categoria: "yo_amo_lectura", sede_id: "", file: null });
      setIsAdding(false);
      setUploading(false);
    },
    onError: (error: Error) => {
      toast.error(`Error: ${error.message}`);
      setUploading(false);
    },
  });

  const toggleActiveMutation = useMutation({
    mutationFn: async ({ id, activo }: { id: string; activo: boolean }) => {
      const { error } = await supabase
        .from("voluntariado_fotos")
        .update({ activo: !activo })
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["voluntariado-fotos-admin"] });
      queryClient.invalidateQueries({ queryKey: ["voluntariado-fotos"] });
      toast.success("Estado actualizado");
    },
    onError: () => {
      toast.error("Error al actualizar estado");
    },
  });

  const updateMutation = useMutation({
    mutationFn: async () => {
      if (!editingId || !formData.titulo) {
        throw new Error("Datos incompletos");
      }

      // If changing category, check if new category is full (excluding current photo)
      const currentPhoto = photos?.find(p => p.id === editingId);
      if (currentPhoto && currentPhoto.categoria !== formData.categoria) {
        if (isCategoryFull(formData.categoria)) {
          throw new Error(`La categoría destino ya tiene el máximo de ${MAX_PHOTOS_PER_CATEGORY} fotos.`);
        }
      }

      const { error } = await supabase
        .from("voluntariado_fotos")
        .update({
          titulo: formData.titulo.trim(),
          descripcion: formData.descripcion.trim() || null,
          categoria: formData.categoria,
          sede_id: formData.sede_id || null,
        })
        .eq("id", editingId);

      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Foto actualizada exitosamente");
      queryClient.invalidateQueries({ queryKey: ["voluntariado-fotos-admin"] });
      queryClient.invalidateQueries({ queryKey: ["voluntariado-fotos"] });
      setFormData({ titulo: "", descripcion: "", categoria: "yo_amo_lectura", sede_id: "", file: null });
      setEditingId(null);
    },
    onError: (error: Error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const photo = photos?.find((p) => p.id === id);
      if (!photo) throw new Error("Foto no encontrada");

      // Delete from storage
      const fileName = photo.imagen_url.split("/").pop();
      if (fileName) {
        await supabase.storage.from("voluntariado-fotos").remove([fileName]);
      }

      // Delete record
      const { error } = await supabase
        .from("voluntariado_fotos")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Foto eliminada");
      queryClient.invalidateQueries({ queryKey: ["voluntariado-fotos-admin"] });
      queryClient.invalidateQueries({ queryKey: ["voluntariado-fotos"] });
      setDeleteId(null);
    },
    onError: () => {
      toast.error("Error al eliminar foto");
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleEdit = (photo: any) => {
    setEditingId(photo.id);
    setFormData({
      titulo: photo.titulo,
      descripcion: photo.descripcion || "",
      categoria: photo.categoria,
      sede_id: photo.sede_id || "",
      file: null,
    });
    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
    setFormData({ titulo: "", descripcion: "", categoria: "yo_amo_lectura", sede_id: "", file: null });
  };

  const getCategoryLabel = (value: string) => {
    return CATEGORIAS.find(c => c.value === value)?.label || value;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Galería de Fotos de Voluntariado</h2>
        <Button onClick={() => {
          if (isAdding || editingId) {
            handleCancel();
          } else {
            setIsAdding(true);
          }
        }}>
          {(isAdding || editingId) ? "Cancelar" : "Agregar Foto"}
        </Button>
      </div>

      {/* Category counts summary */}
      <Card className="p-4">
        <h3 className="text-sm font-semibold mb-3 text-foreground/70">Fotos por categoría (máximo {MAX_PHOTOS_PER_CATEGORY} por categoría)</h3>
        <div className="flex flex-wrap gap-2">
          {CATEGORIAS.map((cat) => {
            const count = getCategoryCount(cat.value);
            const isFull = count >= MAX_PHOTOS_PER_CATEGORY;
            return (
              <Badge 
                key={cat.value} 
                variant={isFull ? "destructive" : "secondary"}
                className="text-xs"
              >
                {cat.label}: {count}/{MAX_PHOTOS_PER_CATEGORY}
                {isFull && <AlertTriangle className="h-3 w-3 ml-1" />}
              </Badge>
            );
          })}
        </div>
      </Card>

      {(isAdding || editingId) && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">
            {editingId ? "Editar Foto" : "Agregar Nueva Foto"}
          </h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="titulo">Título *</Label>
              <Input
                id="titulo"
                value={formData.titulo}
                onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                placeholder="Título de la actividad"
              />
            </div>

            <div>
              <Label htmlFor="descripcion">Descripción</Label>
              <Textarea
                id="descripcion"
                value={formData.descripcion}
                onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                placeholder="Descripción breve de la actividad"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="categoria">Categoría *</Label>
              <Select
                value={formData.categoria}
                onValueChange={(value) => setFormData({ ...formData, categoria: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIAS.map((cat) => {
                    const count = getCategoryCount(cat.value);
                    const isFull = count >= MAX_PHOTOS_PER_CATEGORY;
                    // When editing, allow selecting current category even if full
                    const currentPhoto = editingId ? photos?.find(p => p.id === editingId) : null;
                    const isCurrentCategory = currentPhoto?.categoria === cat.value;
                    const disabled = isFull && !isCurrentCategory && !editingId;
                    
                    return (
                      <SelectItem 
                        key={cat.value} 
                        value={cat.value}
                        disabled={disabled && isAdding}
                      >
                        {cat.label} ({count}/{MAX_PHOTOS_PER_CATEGORY})
                        {isFull && !isCurrentCategory && " - LLENO"}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              {isAdding && isCategoryFull(formData.categoria) && (
                <p className="text-sm text-destructive mt-1 flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3" />
                  Esta categoría está llena. Selecciona otra o elimina una foto existente.
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="sede">Sede</Label>
              <Select
                value={formData.sede_id}
                onValueChange={(value) => setFormData({ ...formData, sede_id: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una sede (opcional)" />
                </SelectTrigger>
                <SelectContent>
                  {sedes?.map((sede) => (
                    <SelectItem key={sede.id} value={sede.id}>
                      {sede.nombre} - {sede.ciudad}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {!editingId && (
              <div>
                <Label htmlFor="foto">Foto *</Label>
                <Input
                  id="foto"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
            )}

            <Button
              onClick={() => editingId ? updateMutation.mutate() : uploadMutation.mutate()}
              disabled={
                editingId 
                  ? !formData.titulo 
                  : (uploading || !formData.titulo || !formData.file || (isAdding && isCategoryFull(formData.categoria)))
              }
              className="w-full"
            >
              {editingId 
                ? "Actualizar Foto" 
                : (uploading ? "Subiendo..." : "Agregar Foto")
              }
            </Button>
          </div>
        </Card>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <p>Cargando...</p>
        ) : photos?.length === 0 ? (
          <p className="col-span-full text-center text-foreground/60 py-8">
            No hay fotos agregadas aún
          </p>
        ) : (
          photos?.map((photo) => (
            <Card key={photo.id} className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={photo.imagen_url}
                  alt={photo.titulo}
                  className="w-full h-full object-cover"
                />
                {!photo.activo && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-bold">OCULTA</span>
                  </div>
                )}
                <Badge className="absolute top-2 right-2 text-xs">
                  {getCategoryLabel(photo.categoria)}
                </Badge>
              </div>
              <div className="p-4 space-y-3">
                <h3 className="font-bold line-clamp-1">{photo.titulo}</h3>
                <p className="text-sm text-foreground/60 line-clamp-2">
                  {photo.descripcion || "Sin descripción"}
                </p>
                {photo.sedes && (
                  <p className="text-xs text-primary font-medium">
                    📍 {photo.sedes.nombre}
                  </p>
                )}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleActiveMutation.mutate({ id: photo.id, activo: photo.activo })}
                    title={photo.activo ? "Ocultar" : "Mostrar"}
                  >
                    {photo.activo ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(photo)}
                    title="Editar"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => setDeleteId(photo.id)}
                    title="Eliminar"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar foto?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. La foto será eliminada permanentemente.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && deleteMutation.mutate(deleteId)}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};