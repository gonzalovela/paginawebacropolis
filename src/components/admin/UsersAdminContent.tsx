import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Shield, ShieldCheck } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface UserProfile {
  id: string;
  nombre: string;
  email: string;
  roles: string[];
  created_at: string;
}

export const UsersAdminContent = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id, nombre, created_at');

      if (profilesError) throw profilesError;

      const { data: roles, error: rolesError } = await supabase
        .from('user_roles')
        .select('user_id, role');

      if (rolesError) throw rolesError;

      const basicUsers = profiles.map(profile => {
        const userRoles = roles
          .filter(r => r.user_id === profile.id)
          .map(r => r.role);

        return {
          id: profile.id,
          nombre: profile.nombre,
          email: 'Email privado',
          roles: userRoles,
          created_at: profile.created_at,
        };
      });

      setUsers(basicUsers);
    } catch {
      toast.error('Error al cargar usuarios');
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId: string, newRole: 'admin' | 'editor') => {
    try {
      const { error: deleteError } = await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', userId);

      if (deleteError) throw deleteError;

      const { error: insertError } = await supabase
        .from('user_roles')
        .insert({ user_id: userId, role: newRole });

      if (insertError) throw insertError;

      toast.success('Rol actualizado exitosamente');
      loadUsers();
    } catch {
      toast.error('Error al actualizar el rol');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-muted-foreground">Cargando usuarios...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Gestión de Usuarios y Roles</h2>
        <p className="text-sm text-muted-foreground">
          {users.length} usuarios registrados
        </p>
      </div>

      <div className="space-y-4">
        {users.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No hay usuarios registrados</p>
          </Card>
        ) : (
          users.map((userProfile) => (
            <Card key={userProfile.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold">{userProfile.nombre}</h3>
                    {userProfile.roles.includes('admin') && (
                      <Badge variant="default" className="gap-1">
                        <ShieldCheck className="h-3 w-3" />
                        Admin
                      </Badge>
                    )}
                    {userProfile.roles.includes('editor') && !userProfile.roles.includes('admin') && (
                      <Badge variant="secondary" className="gap-1">
                        <Shield className="h-3 w-3" />
                        Editor
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Registrado: {new Date(userProfile.created_at).toLocaleDateString('es-PE')}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {userProfile.id !== user?.id && (
                    <div className="w-48">
                      <Select
                        value={userProfile.roles.includes('admin') ? 'admin' : 'editor'}
                        onValueChange={(value) => handleRoleChange(userProfile.id, value as 'admin' | 'editor')}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="h-4 w-4" />
                              Administrador
                            </div>
                          </SelectItem>
                          <SelectItem value="editor">
                            <div className="flex items-center gap-2">
                              <Shield className="h-4 w-4" />
                              Editor
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  {userProfile.id === user?.id && (
                    <Badge variant="outline">Tu cuenta</Badge>
                  )}
                </div>
              </div>
            </Card>
          ))
        )}
      </div>

      <Card className="p-6 bg-muted/50">
        <h3 className="font-bold mb-2">Roles del sistema</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <ShieldCheck className="h-4 w-4 mt-0.5 text-primary" />
            <div>
              <span className="font-medium text-foreground">Administrador:</span> Puede gestionar sedes, fotos, inscripciones, usuarios y roles
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Shield className="h-4 w-4 mt-0.5 text-secondary" />
            <div>
              <span className="font-medium text-foreground">Editor:</span> Puede gestionar sedes, fotos e inscripciones (no usuarios)
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
