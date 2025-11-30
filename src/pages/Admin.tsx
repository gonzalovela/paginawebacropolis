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
import { MapPin, Camera, Mail, Users, LogOut, Shield } from "lucide-react";

// Import admin panels
import { SedesAdminContent } from "@/components/admin/SedesAdminContent";
import { VoluntariadoFotosAdmin } from "@/components/VoluntariadoFotosAdmin";
import { InscripcionesAdminPanel } from "@/components/InscripcionesAdminPanel";
import { UsersAdminContent } from "@/components/admin/UsersAdminContent";

const AdminDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminStatus();
  }, [user]);

  const checkAdminStatus = async () => {
    if (!user) return;
    
    const { data } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .maybeSingle();

    setIsAdmin(!!data);
  };

  const handleSignOut = async () => {
    await signOut();
    toast.success("Sesión cerrada");
    navigate("/");
  };

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
        <TabsList className={`grid w-full mb-8 ${isAdmin ? 'grid-cols-4' : 'grid-cols-3'}`}>
          <TabsTrigger value="sedes" className="flex items-center gap-2 text-xs sm:text-sm">
            <MapPin className="h-4 w-4" />
            <span className="hidden sm:inline">Sedes</span>
          </TabsTrigger>
          <TabsTrigger value="fotos" className="flex items-center gap-2 text-xs sm:text-sm">
            <Camera className="h-4 w-4" />
            <span className="hidden sm:inline">Fotos</span>
          </TabsTrigger>
          <TabsTrigger value="inscripciones" className="flex items-center gap-2 text-xs sm:text-sm">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Inscripciones</span>
          </TabsTrigger>
          {isAdmin && (
            <TabsTrigger value="usuarios" className="flex items-center gap-2 text-xs sm:text-sm">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Usuarios</span>
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="sedes" className="mt-0">
          <SedesAdminContent />
        </TabsContent>

        <TabsContent value="fotos" className="mt-0">
          <VoluntariadoFotosAdmin />
        </TabsContent>

        <TabsContent value="inscripciones" className="mt-0">
          <InscripcionesAdminPanel />
        </TabsContent>

        {isAdmin && (
          <TabsContent value="usuarios" className="mt-0">
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
