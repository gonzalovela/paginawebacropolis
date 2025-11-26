import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
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
import { Trash2, Upload, Eye, EyeOff } from "lucide-react";
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

export const VoluntariadoFotosAdmin = () => {
  const [isAdding, setIsAdding] = useState(false);
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

  const uploadMutation = useMutation({
    mutationFn: async () => {
      if (!formData.file || !formData.titulo) {
        throw new Error("Título y foto son requeridos");
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Galería de Fotos de Voluntariado</h2>
        <Button onClick={() => setIsAdding(!isAdding)}>
          {isAdding ? "Cancelar" : "Agregar Foto"}
        </Button>
      </div>

      {isAdding && (
        <Card className="p-6">
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
                  <SelectItem value="yo_amo_lectura">Yo Amo la Lectura</SelectItem>
                  <SelectItem value="adulto_mayor">Acompañamiento al Adulto Mayor</SelectItem>
                  <SelectItem value="humanitario_social">Acción Humanitaria y Social</SelectItem>
                  <SelectItem value="medio_ambiente">Protección del Medio Ambiente</SelectItem>
                  <SelectItem value="formacion_voluntarios">Formación de Voluntarios</SelectItem>
                  <SelectItem value="talleres_artisticos">Talleres Artísticos</SelectItem>
                </SelectContent>
              </Select>
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

            <div>
              <Label htmlFor="foto">Foto *</Label>
              <Input
                id="foto"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            <Button
              onClick={() => uploadMutation.mutate()}
              disabled={uploading || !formData.titulo || !formData.file}
              className="w-full"
            >
              {uploading ? "Subiendo..." : "Agregar Foto"}
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
                    className="flex-1"
                  >
                    {photo.activo ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => setDeleteId(photo.id)}
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
