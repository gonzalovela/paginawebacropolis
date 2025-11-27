import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Shield, ShieldCheck, LogOut, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
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

export const UsersAdminPanel = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminStatus();
    loadUsers();
  }, []);

  const checkAdminStatus = async () => {
    if (!user) return;
    
    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .maybeSingle();

    if (error) {
      setIsAdmin(false);
      return;
    }

    setIsAdmin(!!data);
    
    if (!data) {
      toast.error('No tienes permisos de administrador');
      navigate('/sedes/admin');
    }
  };

  const loadUsers = async () => {
    try {
      // Get all profiles with their emails from auth.users
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id, nombre, created_at');

      if (profilesError) throw profilesError;

      // Get all user roles
      const { data: roles, error: rolesError } = await supabase
        .from('user_roles')
        .select('user_id, role');

      if (rolesError) throw rolesError;

      // Get emails from auth metadata (we need to use a different approach)
      // Since we can't directly query auth.users, we'll get the email from the user's session
      const usersWithDetails = await Promise.all(
        profiles.map(async (profile) => {
          // Get user metadata
          const { data: { user: authUser } } = await supabase.auth.admin.getUserById(profile.id);
          
          const userRoles = roles
            .filter(r => r.user_id === profile.id)
            .map(r => r.role);

          return {
            id: profile.id,
            nombre: profile.nombre,
            email: authUser?.email || 'Sin email',
            roles: userRoles,
            created_at: profile.created_at,
          };
        })
      );

      setUsers(usersWithDetails);
    } catch {
      // Fallback: show basic profile info without emails
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
            email: 'Email no disponible',
            roles: userRoles,
            created_at: profile.created_at,
          };
        });

        setUsers(basicUsers);
      } catch {
        toast.error('Error al cargar usuarios');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId: string, newRole: 'admin' | 'editor') => {
    if (!isAdmin) {
      toast.error('No tienes permisos para cambiar roles');
      return;
    }

    try {
      // Remove all existing roles for this user
      const { error: deleteError } = await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', userId);

      if (deleteError) throw deleteError;

      // Add the new role
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

  const handleSignOut = async () => {
    await signOut();
    toast.success("Sesión cerrada");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="container px-4 py-16">
        <p className="text-center text-muted-foreground">Cargando usuarios...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <section className="container px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-2">
            <Users className="h-8 w-8" />
            Administrar Usuarios
          </h1>
          {user && (
            <p className="text-muted-foreground mt-2">
              {user.email}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate('/sedes/admin')}>
            Volver a Sedes
          </Button>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Cerrar Sesión
          </Button>
        </div>
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
                  <p className="text-sm text-muted-foreground">{userProfile.email}</p>
                  <p className="text-xs text-muted-foreground mt-1">
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

      <Card className="mt-8 p-6 bg-muted/50">
        <h3 className="font-bold mb-2">Roles del sistema</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <ShieldCheck className="h-4 w-4 mt-0.5 text-primary" />
            <div>
              <span className="font-medium text-foreground">Administrador:</span> Puede gestionar sedes, usuarios y roles
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Shield className="h-4 w-4 mt-0.5 text-secondary" />
            <div>
              <span className="font-medium text-foreground">Editor:</span> Puede gestionar sedes pero no usuarios
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
