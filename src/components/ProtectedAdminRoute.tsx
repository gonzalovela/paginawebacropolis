import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'editor';
}

export const ProtectedAdminRoute = ({ 
  children, 
  requiredRole = 'editor' 
}: ProtectedAdminRouteProps) => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);
  const [checkingRole, setCheckingRole] = useState(true);

  useEffect(() => {
    const checkAccess = async () => {
      if (authLoading) return;
      
      if (!user) {
        navigate("/auth");
        return;
      }

      try {
        // Check if user has required role (admin or editor)
        const { data, error } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .in('role', requiredRole === 'admin' ? ['admin'] : ['admin', 'editor']);

        if (error) {
          setHasAccess(false);
          setCheckingRole(false);
          return;
        }

        const hasRole = data && data.length > 0;
        setHasAccess(hasRole);
        
        if (!hasRole) {
          navigate("/");
        }
      } catch {
        setHasAccess(false);
      } finally {
        setCheckingRole(false);
      }
    };

    checkAccess();
  }, [user, authLoading, navigate, requiredRole]);

  if (authLoading || checkingRole) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Verificando permisos...</p>
      </div>
    );
  }

  if (!user || !hasAccess) {
    return null;
  }

  return <>{children}</>;
};
