import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProtectedAdminRoute } from "@/components/ProtectedAdminRoute";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { MapPin, Camera, Mail, Users, LogOut, Shield, Palette, HandHeart } from "lucide-react";

// Import admin panels
import { SedesAdminContent } from "@/components/admin/SedesAdminContent";
import { VoluntariadoFotosAdmin } from "@/components/VoluntariadoFotosAdmin";
import { VoluntariadoProgramasAdmin } from "@/components/VoluntariadoProgramasAdmin";
import { InscripcionesAdminPanel } from "@/components/InscripcionesAdminPanel";
import { UsersAdminContent } from "@/components/admin/UsersAdminContent";
import { CulturaActividadesAdmin } from "@/components/CulturaActividadesAdmin";

const AdminDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isContentManager, setIsContentManager] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    checkUserRoles();
  }, [user]);

  const checkUserRoles = async () => {
    if (!user) return;
    
    const { data } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id);

    if (data && data.length > 0) {
      const roles = data.map(r => r.role);
      setIsAdmin(roles.includes('admin'));
      setIsContentManager(roles.includes('content_manager'));
      // Set primary role for display
      if (roles.includes('admin')) setUserRole('admin');
      else if (roles.includes('content_manager')) setUserRole('content_manager');
      else setUserRole('editor');
    }
  };

  const handleSignOut = async () => {
    await signOut();
    toast.success("Sesión cerrada");
    navigate("/");
  };

  // Calculate which tabs to show based on role
  const canViewFotos = true; // All roles can see photos
  const canViewCultura = isAdmin || isContentManager;
  const canViewVoluntariado = isAdmin || isContentManager;
  const canViewRoles = isAdmin;

  // Calculate number of columns for TabsList
  const tabCount = 2 + // Sedes, Inscripciones (always visible)
    (canViewFotos ? 1 : 0) +
    (canViewCultura ? 1 : 0) +
    (canViewVoluntariado ? 1 : 0) +
    (canViewRoles ? 1 : 0);

  return (
    <section className="container px-4 py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            Panel de Administración
          </h1>
          {user && (
            <p className="text-muted-foreground mt-2">
              {user.email}
            </p>
          )}
        </div>
        <Button variant="outline" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Cerrar Sesión
        </Button>
      </div>

      <Tabs defaultValue="sedes" className="w-full">
        <TabsList className={`grid w-full mb-8`} style={{ gridTemplateColumns: `repeat(${tabCount}, minmax(0, 1fr))` }}>
          <TabsTrigger value="sedes" className="flex items-center gap-2 text-xs sm:text-sm">
            <MapPin className="h-4 w-4" />
            <span className="hidden sm:inline">Sedes</span>
          </TabsTrigger>
          {canViewFotos && (
            <TabsTrigger value="fotos" className="flex items-center gap-2 text-xs sm:text-sm">
              <Camera className="h-4 w-4" />
              <span className="hidden sm:inline">Fotos</span>
            </TabsTrigger>
          )}
          {canViewVoluntariado && (
            <TabsTrigger value="voluntariado" className="flex items-center gap-2 text-xs sm:text-sm">
              <HandHeart className="h-4 w-4" />
              <span className="hidden sm:inline">Voluntariado</span>
            </TabsTrigger>
          )}
          {canViewCultura && (
            <TabsTrigger value="cultura" className="flex items-center gap-2 text-xs sm:text-sm">
              <Palette className="h-4 w-4" />
              <span className="hidden sm:inline">Cultura</span>
            </TabsTrigger>
          )}
          <TabsTrigger value="inscripciones" className="flex items-center gap-2 text-xs sm:text-sm">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Inscripciones</span>
          </TabsTrigger>
          {canViewRoles && (
            <TabsTrigger value="roles" className="flex items-center gap-2 text-xs sm:text-sm">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Roles</span>
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="sedes" className="mt-0">
          <SedesAdminContent />
        </TabsContent>

        {canViewFotos && (
          <TabsContent value="fotos" className="mt-0">
            <VoluntariadoFotosAdmin />
          </TabsContent>
        )}

        {canViewVoluntariado && (
          <TabsContent value="voluntariado" className="mt-0">
            <VoluntariadoProgramasAdmin />
          </TabsContent>
        )}

        {canViewCultura && (
          <TabsContent value="cultura" className="mt-0">
            <CulturaActividadesAdmin />
          </TabsContent>
        )}

        <TabsContent value="inscripciones" className="mt-0">
          <InscripcionesAdminPanel />
        </TabsContent>

        {canViewRoles && (
          <TabsContent value="roles" className="mt-0">
            <UsersAdminContent />
          </TabsContent>
        )}
      </Tabs>
    </section>
  );
};

const Admin = () => {
  return (
    <ProtectedAdminRoute requiredRole="editor">
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <AdminDashboard />
        </main>
        <Footer />
      </div>
    </ProtectedAdminRoute>
  );
};

export default Admin;
