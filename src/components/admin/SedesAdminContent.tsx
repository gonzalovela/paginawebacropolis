import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Pencil, Trash2 } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().email({ message: "Formato de email inválido" }).or(z.literal(""));

interface Sede {
  id: string;
  nombre: string;
  ciudad: string;
  departamento?: string;
  distrito?: string;
  direccion: string;
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  es_principal: boolean;
  google_maps_url?: string;
  email?: string;
}

interface SedeFormData {
  nombre: string;
  ciudad: string;
  departamento: string;
  distrito: string;
  direccion: string;
  whatsapp: string;
  facebook: string;
  instagram: string;
  tiktok: string;
  es_principal: boolean;
  google_maps_url: string;
  email: string;
}

const emptyForm: SedeFormData = {
  nombre: "",
  ciudad: "",
  departamento: "",
  distrito: "",
  direccion: "",
  whatsapp: "",
  facebook: "",
  instagram: "",
  tiktok: "",
  es_principal: false,
  google_maps_url: "",
  email: "",
};

export const SedesAdminContent = () => {
  const [sedes, setSedes] = useState<Sede[]>([]);
  const [formData, setFormData] = useState<SedeFormData>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  useEffect(() => {
    loadSedes();
  }, []);

  const loadSedes = async () => {
    try {
      const { data, error } = await supabase
        .from('sedes')
        .select('*')
        .order('es_principal', { ascending: false })
        .order('ciudad', { ascending: true });

      if (error) throw error;
      setSedes(data || []);
    } catch {
      toast.error('Error al cargar las sedes');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.email) {
      const emailValidation = emailSchema.safeParse(formData.email);
      if (!emailValidation.success) {
        setEmailError(emailValidation.error.issues[0].message);
        toast.error("Por favor corrige el formato del email");
        return;
      }
    }
    setEmailError(null);
    setLoading(true);

    try {
      const sedeData = {
        nombre: formData.nombre,
        ciudad: formData.ciudad,
        departamento: formData.departamento,
        distrito: formData.distrito || null,
        direccion: formData.direccion,
        whatsapp: formData.whatsapp || null,
        facebook: formData.facebook || null,
        instagram: formData.instagram || null,
        tiktok: formData.tiktok || null,
        es_principal: formData.es_principal,
        google_maps_url: formData.google_maps_url || null,
        email: formData.email || null,
      };

      if (editingId) {
        const { error } = await supabase
          .from('sedes')
          .update(sedeData)
          .eq('id', editingId);

        if (error) {
          console.error('Error updating sede:', error);
          if (error.code === '42501' || error.message?.includes('policy')) {
            toast.error('No tienes permisos para actualizar esta sede');
          } else {
            toast.error(`Error al actualizar: ${error.message}`);
          }
          return;
        }
        toast.success('Sede actualizada exitosamente');
      } else {
        const { error } = await supabase
          .from('sedes')
          .insert([sedeData]);

        if (error) {
          console.error('Error creating sede:', error);
          if (error.code === '42501' || error.message?.includes('policy')) {
            toast.error('No tienes permisos para crear sedes');
          } else {
            toast.error(`Error al crear: ${error.message}`);
          }
          return;
        }
        toast.success('Sede creada exitosamente');
      }

      setFormData(emptyForm);
      setEditingId(null);
      loadSedes();
    } catch (err: any) {
      console.error('Unexpected error:', err);
      toast.error(`Error inesperado: ${err?.message || 'Error desconocido'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (sede: Sede) => {
    setFormData({
      nombre: sede.nombre,
      ciudad: sede.ciudad,
      departamento: sede.departamento || "",
      distrito: sede.distrito || "",
      direccion: sede.direccion,
      whatsapp: sede.whatsapp || "",
      facebook: sede.facebook || "",
      instagram: sede.instagram || "",
      tiktok: sede.tiktok || "",
      es_principal: sede.es_principal,
      google_maps_url: sede.google_maps_url || "",
      email: sede.email || "",
    });
    setEditingId(sede.id);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar esta sede?')) return;

    try {
      const { error } = await supabase
        .from('sedes')
        .delete()
        .eq('id', id);

      if (error) {
        if (error.code === 'PGRST301') {
          toast.error('No tienes permisos para eliminar sedes');
        } else {
          toast.error('Error al eliminar la sede');
        }
        return;
      }

      toast.success('Sede eliminada exitosamente');
      
      if (editingId === id) {
        setEditingId(null);
        setFormData(emptyForm);
      }
      
      loadSedes();
    } catch {
      toast.error('Error inesperado al eliminar la sede');
    }
  };

  const handleCancel = () => {
    setFormData(emptyForm);
    setEditingId(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-6">
          {editingId ? 'Editar Sede' : 'Nueva Sede'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="nombre">Nombre de la Sede *</Label>
            <Input
              id="nombre"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="departamento">Departamento *</Label>
              <Input
                id="departamento"
                value={formData.departamento}
                onChange={(e) => setFormData({ ...formData, departamento: e.target.value })}
                placeholder="Lima, Arequipa, Cusco..."
                required
              />
            </div>
            <div>
              <Label htmlFor="ciudad">Ciudad *</Label>
              <Input
                id="ciudad"
                value={formData.ciudad}
                onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                placeholder="Lima, Arequipa, Huancayo..."
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="distrito">Distrito</Label>
            <Input
              id="distrito"
              value={formData.distrito}
              onChange={(e) => setFormData({ ...formData, distrito: e.target.value })}
              placeholder="San Isidro, Miraflores, Cayma..."
            />
          </div>

          <div>
            <Label htmlFor="direccion">Dirección *</Label>
            <Input
              id="direccion"
              value={formData.direccion}
              onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              placeholder="+51999999999"
            />
          </div>

          <div>
            <Label htmlFor="facebook">Facebook</Label>
            <Input
              id="facebook"
              value={formData.facebook}
              onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
              placeholder="https://facebook.com/..."
            />
          </div>

          <div>
            <Label htmlFor="instagram">Instagram</Label>
            <Input
              id="instagram"
              value={formData.instagram}
              onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
              placeholder="https://instagram.com/..."
            />
          </div>

          <div>
            <Label htmlFor="tiktok">TikTok</Label>
            <Input
              id="tiktok"
              value={formData.tiktok}
              onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })}
              placeholder="https://tiktok.com/@..."
            />
          </div>

          <div>
            <Label htmlFor="google_maps_url">URL de Google Maps</Label>
            <Input
              id="google_maps_url"
              value={formData.google_maps_url}
              onChange={(e) => setFormData({ ...formData, google_maps_url: e.target.value })}
              placeholder="https://maps.app.goo.gl/..."
            />
            <p className="text-xs text-muted-foreground mt-1">
              Copia el enlace completo desde Google Maps
            </p>
          </div>

          <div>
            <Label htmlFor="email">Email de contacto</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (emailError) setEmailError(null);
              }}
              placeholder="sede@acropolisperu.org"
              className={emailError ? "border-destructive" : ""}
            />
            {emailError && <p className="text-sm text-destructive mt-1">{emailError}</p>}
            <p className="text-xs text-muted-foreground mt-1">
              Los formularios de inscripción se enviarán a este correo
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="es_principal"
              checked={formData.es_principal}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, es_principal: checked as boolean })
              }
            />
            <Label htmlFor="es_principal" className="cursor-pointer">
              Sede Principal
            </Label>
          </div>

          <div className="flex gap-2 pt-4">
            <Button type="submit" disabled={loading}>
              {editingId ? 'Actualizar' : 'Crear'} Sede
            </Button>
            {editingId && (
              <Button type="button" variant="outline" onClick={handleCancel}>
                Cancelar
              </Button>
            )}
          </div>
        </form>
      </Card>

      {/* List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Sedes Registradas ({sedes.length})</h2>
        {sedes.length === 0 ? (
          <p className="text-muted-foreground">No hay sedes registradas</p>
        ) : (
          sedes.map((sede) => (
            <Card key={sede.id} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold">{sede.nombre}</h3>
                  {sede.es_principal && (
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                      Sede Principal
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => handleEdit(sede)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="destructive"
                    onClick={() => handleDelete(sede.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {sede.departamento}{sede.ciudad !== sede.departamento ? ` - ${sede.ciudad}` : ''}{sede.distrito ? ` - ${sede.distrito}` : ''}
              </p>
              <p className="text-sm">{sede.direccion}</p>
              {sede.email && (
                <p className="text-sm text-muted-foreground">Email: {sede.email}</p>
              )}
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
