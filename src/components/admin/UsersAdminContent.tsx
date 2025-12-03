import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { 
  Shield, 
  ShieldCheck, 
  UserPlus, 
  Trash2, 
  RefreshCw, 
  PauseCircle, 
  PlayCircle,
  Mail,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Send,
  MailCheck,
  MailX
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
import { z } from "zod";

const emailSchema = z.string().email({ message: "Formato de email inválido" });

interface UserProfile {
  id: string;
  nombre: string;
  email: string;
  roles: string[];
  created_at: string;
  status: string;
}

interface Invitation {
  id: string;
  email: string;
  role: string;
  status: string;
  email_status: string;
  created_at: string;
  expires_at: string;
  token: string;
}

export const UsersAdminContent = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [loading, setLoading] = useState(true);
  const [showInviteDialog, setShowInviteDialog] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<"admin" | "editor">("editor");
  const [inviting, setInviting] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [deleteUserId, setDeleteUserId] = useState<string | null>(null);
  const [deleteInvitationId, setDeleteInvitationId] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await Promise.all([loadUsers(), loadInvitations()]);
    setLoading(false);
  };

  const loadUsers = async () => {
    try {
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id, nombre, created_at, status');

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
          status: profile.status || 'active',
        };
      });

      setUsers(basicUsers);
    } catch {
      toast.error('Error al cargar usuarios');
    }
  };

  const loadInvitations = async () => {
    try {
      const { data, error } = await supabase
        .from('invitations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInvitations(data || []);
    } catch {
      // Invitations table might not exist yet
      setInvitations([]);
    }
  };

  const handleInviteUser = async () => {
    const validation = emailSchema.safeParse(inviteEmail);
    if (!validation.success) {
      setEmailError(validation.error.issues[0].message);
      return;
    }
    
    // Validate domain for admin role - only @acropolisperu.org allowed
    if (inviteRole === 'admin' && !inviteEmail.toLowerCase().endsWith('@acropolisperu.org')) {
      setEmailError('Los administradores deben tener un email @acropolisperu.org');
      return;
    }
    
    setEmailError(null);
    setInviting(true);

    try {
      // Check if email already exists as a user
      const { data: existingInvitation } = await supabase
        .from('invitations')
        .select('id')
        .eq('email', inviteEmail)
        .eq('status', 'pending')
        .maybeSingle();

      if (existingInvitation) {
        toast.error('Ya existe una invitación pendiente para este email');
        setInviting(false);
        return;
      }

      // Create invitation
      const { data: invitation, error: insertError } = await supabase
        .from('invitations')
        .insert({
          email: inviteEmail,
          role: inviteRole,
          invited_by: user?.id,
        })
        .select()
        .single();

      if (insertError) throw insertError;

      // Get current user's name for the email
      const { data: profile } = await supabase
        .from('profiles')
        .select('nombre')
        .eq('id', user?.id)
        .single();

      // Send invitation email
      const { error: emailError } = await supabase.functions.invoke('send-invitation-email', {
        body: {
          email: inviteEmail,
          role: inviteRole,
          inviterName: profile?.nombre || 'Un administrador',
          token: invitation.token,
          baseUrl: window.location.origin,
        },
      });

      if (emailError) {
        console.error('Error sending email:', emailError);
        toast.error('Invitación creada pero hubo un error al enviar el email');
      } else {
        toast.success('Invitación enviada exitosamente');
      }

      setShowInviteDialog(false);
      setInviteEmail("");
      setInviteRole("editor");
      loadInvitations();
    } catch (error: any) {
      console.error('Error inviting user:', error);
      toast.error('Error al crear la invitación');
    } finally {
      setInviting(false);
    }
  };

  const handleResendInvitation = async (invitation: Invitation) => {
    try {
      // Update expiration and reset email status
      const { error: updateError } = await supabase
        .from('invitations')
        .update({ 
          expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          token: crypto.randomUUID(),
          email_status: 'pending',
          status: 'pending',
        })
        .eq('id', invitation.id)
        .select()
        .single();

      if (updateError) throw updateError;

      // Get updated invitation
      const { data: updatedInvitation } = await supabase
        .from('invitations')
        .select('*')
        .eq('id', invitation.id)
        .single();

      // Get current user's name
      const { data: profile } = await supabase
        .from('profiles')
        .select('nombre')
        .eq('id', user?.id)
        .single();

      // Resend email
      await supabase.functions.invoke('send-invitation-email', {
        body: {
          email: invitation.email,
          role: invitation.role,
          inviterName: profile?.nombre || 'Un administrador',
          token: updatedInvitation?.token,
          baseUrl: window.location.origin,
        },
      });

      toast.success('Invitación reenviada');
      loadInvitations();
    } catch {
      toast.error('Error al reenviar la invitación');
    }
  };

  const handleDeleteInvitation = async () => {
    if (!deleteInvitationId) return;
    
    try {
      const { error } = await supabase
        .from('invitations')
        .delete()
        .eq('id', deleteInvitationId);

      if (error) throw error;

      toast.success('Invitación eliminada');
      loadInvitations();
    } catch {
      toast.error('Error al eliminar la invitación');
    } finally {
      setDeleteInvitationId(null);
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

  const handleToggleUserStatus = async (userId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'suspended' : 'active';
    
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ status: newStatus })
        .eq('id', userId);

      if (error) throw error;

      toast.success(newStatus === 'suspended' ? 'Usuario suspendido' : 'Usuario reactivado');
      loadUsers();
    } catch {
      toast.error('Error al cambiar el estado del usuario');
    }
  };

  const handleDeleteUser = async () => {
    if (!deleteUserId) return;
    
    try {
      // Delete user roles first
      await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', deleteUserId);

      // Delete profile
      const { error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', deleteUserId);

      if (error) throw error;

      toast.success('Usuario eliminado');
      loadUsers();
    } catch {
      toast.error('Error al eliminar el usuario');
    } finally {
      setDeleteUserId(null);
    }
  };

  const isExpired = (expiresAt: string) => new Date(expiresAt) < new Date();

  const getEmailStatusBadge = (emailStatus: string) => {
    switch (emailStatus) {
      case 'sent':
        return (
          <Badge variant="outline" className="gap-1 bg-green-50 text-green-700 border-green-200">
            <MailCheck className="h-3 w-3" />
            Email enviado
          </Badge>
        );
      case 'failed':
        return (
          <Badge variant="outline" className="gap-1 bg-red-50 text-red-700 border-red-200">
            <MailX className="h-3 w-3" />
            Error al enviar
          </Badge>
        );
      default:
        return (
          <Badge variant="outline" className="gap-1 bg-yellow-50 text-yellow-700 border-yellow-200">
            <Send className="h-3 w-3" />
            Enviando...
          </Badge>
        );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-muted-foreground">Cargando...</p>
      </div>
    );
  }

  const pendingInvitations = invitations.filter(i => i.status === 'pending' && !isExpired(i.expires_at));
  const expiredInvitations = invitations.filter(i => i.status === 'pending' && isExpired(i.expires_at));
  const acceptedInvitations = invitations.filter(i => i.status === 'accepted');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Gestión de Roles y Accesos</h2>
          <p className="text-sm text-muted-foreground">
            Controla quién puede acceder al panel de administración
          </p>
        </div>
        <Button onClick={() => setShowInviteDialog(true)} className="gap-2">
          <UserPlus className="h-4 w-4" />
          Invitar Usuario
        </Button>
      </div>

      {/* Pending Invitations */}
      {(pendingInvitations.length > 0 || expiredInvitations.length > 0 || acceptedInvitations.length > 0) && (
        <Card className="p-6">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Invitaciones
          </h3>
          <div className="space-y-3">
            {/* Pending */}
            {pendingInvitations.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Pendientes ({pendingInvitations.length})
                </p>
                {pendingInvitations.map((invitation) => (
                  <div key={invitation.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-muted/50 rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{invitation.email}</p>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <Badge variant="outline" className="gap-1">
                          {invitation.role === 'admin' ? <ShieldCheck className="h-3 w-3" /> : <Shield className="h-3 w-3" />}
                          {invitation.role === 'admin' ? 'Admin' : 'Editor'}
                        </Badge>
                        {getEmailStatusBadge(invitation.email_status)}
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          Expira: {new Date(invitation.expires_at).toLocaleDateString('es-PE')}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleResendInvitation(invitation)}>
                        <RefreshCw className="h-4 w-4 mr-1" />
                        Reenviar
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => setDeleteInvitationId(invitation.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Expired */}
            {expiredInvitations.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-destructive flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  Expiradas ({expiredInvitations.length})
                </p>
                {expiredInvitations.map((invitation) => (
                  <div key={invitation.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-destructive/10 rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium text-muted-foreground">{invitation.email}</p>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <Badge variant="outline" className="gap-1">
                          {invitation.role === 'admin' ? <ShieldCheck className="h-3 w-3" /> : <Shield className="h-3 w-3" />}
                          {invitation.role === 'admin' ? 'Admin' : 'Editor'}
                        </Badge>
                        <Badge variant="destructive" className="gap-1">
                          <XCircle className="h-3 w-3" />
                          Expirada
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleResendInvitation(invitation)}>
                        <RefreshCw className="h-4 w-4 mr-1" />
                        Reenviar
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => setDeleteInvitationId(invitation.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Accepted */}
            {acceptedInvitations.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-green-600 flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  Aceptadas ({acceptedInvitations.length})
                </p>
                {acceptedInvitations.map((invitation) => (
                  <div key={invitation.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-green-50 rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium text-green-800">{invitation.email}</p>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <Badge variant="outline" className="gap-1 bg-green-100 text-green-700 border-green-200">
                          <CheckCircle className="h-3 w-3" />
                          Usuario registrado
                        </Badge>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" onClick={() => setDeleteInvitationId(invitation.id)}>
                      <Trash2 className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Active Users */}
      <div className="space-y-4">
        <h3 className="font-bold flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-primary" />
          Usuarios Activos ({users.length})
        </h3>
        {users.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No hay usuarios registrados</p>
          </Card>
        ) : (
          users.map((userProfile) => (
            <Card key={userProfile.id} className={`p-6 ${userProfile.status === 'suspended' ? 'opacity-60' : ''}`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
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
                    {userProfile.status === 'suspended' && (
                      <Badge variant="destructive">Suspendido</Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Registrado: {new Date(userProfile.created_at).toLocaleDateString('es-PE')}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {userProfile.id !== user?.id ? (
                    <>
                      <Select
                        value={userProfile.roles.includes('admin') ? 'admin' : 'editor'}
                        onValueChange={(value) => handleRoleChange(userProfile.id, value as 'admin' | 'editor')}
                      >
                        <SelectTrigger className="w-36">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">
                            <div className="flex items-center gap-2">
                              <ShieldCheck className="h-4 w-4" />
                              Admin
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
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => handleToggleUserStatus(userProfile.id, userProfile.status)}
                        title={userProfile.status === 'active' ? 'Suspender' : 'Reactivar'}
                      >
                        {userProfile.status === 'active' ? (
                          <PauseCircle className="h-4 w-4" />
                        ) : (
                          <PlayCircle className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => setDeleteUserId(userProfile.id)}
                        title="Eliminar"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
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
              <span className="font-medium text-foreground">Administrador:</span> Puede gestionar sedes, fotos, inscripciones, usuarios y roles.
              <span className="text-xs block text-amber-600">Solo emails @acropolisperu.org</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Shield className="h-4 w-4 mt-0.5 text-secondary" />
            <div>
              <span className="font-medium text-foreground">Editor:</span> Puede gestionar sedes, fotos e inscripciones (no usuarios).
              <span className="text-xs block">Cualquier email invitado</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Invite Dialog */}
      <Dialog open={showInviteDialog} onOpenChange={setShowInviteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invitar Nuevo Usuario</DialogTitle>
            <DialogDescription>
              Envía una invitación por email para dar acceso al panel de administración.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div>
              <Label htmlFor="invite-email">Email</Label>
              <Input
                id="invite-email"
                type="email"
                placeholder="usuario@ejemplo.com"
                value={inviteEmail}
                onChange={(e) => {
                  setInviteEmail(e.target.value);
                  if (emailError) setEmailError(null);
                }}
                className={emailError ? "border-destructive" : ""}
              />
              {emailError && <p className="text-sm text-destructive mt-1">{emailError}</p>}
            </div>
            <div>
              <Label htmlFor="invite-role">Rol</Label>
              <Select value={inviteRole} onValueChange={(v) => setInviteRole(v as 'admin' | 'editor')}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="editor">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Editor - Gestiona contenido
                    </div>
                  </SelectItem>
                  <SelectItem value="admin">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" />
                      Administrador - Control total
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-2">
                {inviteRole === 'admin' 
                  ? "⚠️ Los administradores deben tener email @acropolisperu.org"
                  : "Los editores pueden tener cualquier email"}
              </p>
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setShowInviteDialog(false)}>
                Cancelar
              </Button>
              <Button onClick={handleInviteUser} disabled={inviting || !inviteEmail}>
                {inviting ? "Enviando..." : "Enviar Invitación"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete User Confirmation */}
      <AlertDialog open={!!deleteUserId} onOpenChange={() => setDeleteUserId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar usuario?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. El usuario perderá todo acceso al panel de administración.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteUser} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Delete Invitation Confirmation */}
      <AlertDialog open={!!deleteInvitationId} onOpenChange={() => setDeleteInvitationId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar invitación?</AlertDialogTitle>
            <AlertDialogDescription>
              La invitación será cancelada y el usuario no podrá registrarse con ella.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteInvitation} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Eliminar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
