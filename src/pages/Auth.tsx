import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import { Shield, ShieldCheck, UserPlus } from "lucide-react";
import logo from "@/assets/logo-escuela-filosofia.png";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

const signupSchema = loginSchema.extend({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre es muy largo"),
});

interface Invitation {
  id: string;
  email: string;
  role: string;
  status: string;
  expires_at: string;
}

const Auth = () => {
  const [searchParams] = useSearchParams();
  const invitationToken = searchParams.get("invitation");
  
  const [isLogin, setIsLogin] = useState(!invitationToken);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [loading, setLoading] = useState(false);
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [loadingInvitation, setLoadingInvitation] = useState(!!invitationToken);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/admin");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (invitationToken) {
      loadInvitation(invitationToken);
    }
  }, [invitationToken]);

  const loadInvitation = async (token: string) => {
    try {
      const { data, error } = await supabase
        .from('invitations')
        .select('*')
        .eq('token', token)
        .eq('status', 'pending')
        .single();

      if (error || !data) {
        toast.error("Invitación no válida o expirada");
        setLoadingInvitation(false);
        return;
      }

      if (new Date(data.expires_at) < new Date()) {
        toast.error("Esta invitación ha expirado");
        setLoadingInvitation(false);
        return;
      }

      setInvitation(data);
      setEmail(data.email);
      setIsLogin(false);
    } catch {
      toast.error("Error al verificar la invitación");
    } finally {
      setLoadingInvitation(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const validation = loginSchema.safeParse({ email, password });
        if (!validation.success) {
          toast.error(validation.error.issues[0].message);
          setLoading(false);
          return;
        }

        const { error } = await signIn(email, password);
        if (error) {
          toast.error(error.message || "Error al iniciar sesión");
        } else {
          toast.success("Sesión iniciada correctamente");
          navigate("/admin");
        }
      } else {
        const validation = signupSchema.safeParse({ email, password, nombre });
        if (!validation.success) {
          toast.error(validation.error.issues[0].message);
          setLoading(false);
          return;
        }

        const { error } = await signUp(email, password, nombre);
        if (error) {
          if (error.message?.includes("User already registered")) {
            toast.error("Este email ya está registrado");
          } else {
            toast.error(error.message || "Error al crear la cuenta");
          }
        } else {
          if (invitation) {
            toast.success("Cuenta creada exitosamente. ¡Bienvenido al equipo!");
            // The trigger will handle assigning the role from the invitation
          } else {
            toast.success("Cuenta creada exitosamente.");
          }
        }
      }
    } catch {
      toast.error("Error inesperado. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (loadingInvitation) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted p-4">
        <p className="text-muted-foreground">Verificando invitación...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-8">
          <img 
            src={logo} 
            alt="Nueva Acrópolis" 
            className="h-16 mb-4"
          />
          <h1 className="text-2xl font-bold">
            {invitation ? "Aceptar Invitación" : isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
          </h1>
          <p className="text-muted-foreground text-sm mt-2">
            Panel de Administración
          </p>
        </div>

        {invitation && (
          <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <UserPlus className="h-5 w-5 text-primary" />
              <span className="font-medium">Has sido invitado</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Crea tu cuenta para acceder al panel de administración con el rol de:
            </p>
            <Badge variant={invitation.role === 'admin' ? 'default' : 'secondary'} className="gap-1">
              {invitation.role === 'admin' ? <ShieldCheck className="h-3 w-3" /> : <Shield className="h-3 w-3" />}
              {invitation.role === 'admin' ? 'Administrador' : 'Editor'}
            </Badge>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <Label htmlFor="nombre">Nombre completo</Label>
              <Input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                placeholder="Tu nombre"
              />
            </div>
          )}

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="tunombre@ejemplo.com"
              disabled={!!invitation}
            />
            {invitation && (
              <p className="text-xs text-muted-foreground mt-1">
                Email de la invitación (no modificable)
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Mínimo 6 caracteres"
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading 
              ? "Procesando..." 
              : invitation 
                ? "Crear Cuenta y Aceptar"
                : isLogin 
                  ? "Iniciar Sesión" 
                  : "Crear Cuenta"
            }
          </Button>
        </form>

        {!invitation && (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-primary hover:underline"
            >
              {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
            </button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Auth;
