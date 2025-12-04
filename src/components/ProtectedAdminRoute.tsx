import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'content_manager' | 'editor';
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
        // Determine which roles grant access based on required role
        type AppRole = "admin" | "content_manager" | "editor";
        let allowedRoles: AppRole[] = [];
        if (requiredRole === 'admin') {
          allowedRoles = ['admin'];
        } else if (requiredRole === 'content_manager') {
          allowedRoles = ['admin', 'content_manager'];
        } else {
          allowedRoles = ['admin', 'content_manager', 'editor'];
        }

        // Check if user has required role
        const { data, error } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .in('role', allowedRoles);

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
