import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { AnimatedButton } from "@/components/ui/animated-button";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { trackFormInteraction } from "@/utils/analytics";

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "El nombre debe tener al menos 2 caracteres" }).max(100, { message: "El nombre es muy largo" }),
  email: z.string().trim().email({ message: "Correo electrónico inválido" }).max(255, { message: "El correo es muy largo" }),
  phone: z.string().trim().min(6, { message: "Teléfono inválido" }).max(20, { message: "Teléfono muy largo" }),
  interest: z.enum(["curso", "filosofia", "cultura", "voluntariado", "otro"], { message: "Selecciona una opción" }),
  message: z.string().trim().min(10, { message: "El mensaje es muy corto" }).max(1000, { message: "El mensaje es muy largo" }),
  sedeId: z.string().min(1, { message: "Selecciona una sede" }),
  acceptPrivacy: z.literal(true, { message: "Debes aceptar la política de privacidad" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface Sede {
  id: string;
  nombre: string;
  ciudad: string;
  es_principal: boolean;
}

export const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<Omit<ContactFormData, 'acceptPrivacy'> & { acceptPrivacy: boolean }>({
    name: "",
    email: "",
    phone: "",
    interest: "curso",
    message: "",
    sedeId: "",
    acceptPrivacy: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sedes, setSedes] = useState<Sede[]>([]);
  const [loadingSedes, setLoadingSedes] = useState(true);

  // Load sedes
  useEffect(() => {
    const fetchSedes = async () => {
      try {
        const { data, error } = await supabase
          .from("sedes")
          .select("id, nombre, ciudad, es_principal");
        
        if (error) throw error;
        
        // Sort: principal first, then alphabetically by ciudad, then by nombre
        const sortedData = (data || []).sort((a, b) => {
          // Principal always first
          if (a.es_principal && !b.es_principal) return -1;
          if (!a.es_principal && b.es_principal) return 1;
          
          // Then by ciudad alphabetically
          const ciudadCompare = a.ciudad.localeCompare(b.ciudad, 'es');
          if (ciudadCompare !== 0) return ciudadCompare;
          
          // Then by nombre alphabetically
          return a.nombre.localeCompare(b.nombre, 'es');
        });
        
        setSedes(sortedData);
      } catch {
        toast.error("Error al cargar las sedes");
      } finally {
        setLoadingSedes(false);
      }
    };

    fetchSedes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    trackFormInteraction('Inscripción', 'start');
    
    // Validate
    const result = contactSchema.safeParse(formData);
    
      if (!result.success) {
      const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          newErrors[issue.path[0] as keyof ContactFormData] = issue.message;
        }
      });
      setErrors(newErrors);
      trackFormInteraction('Inscripción', 'error');
      toast.error("Por favor corrige los errores en el formulario");
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to database
      const { error: insertError } = await supabase
        .from("inscripciones")
        .insert({
          nombre: result.data.name,
          email: result.data.email,
          telefono: result.data.phone,
          interes: result.data.interest,
          mensaje: result.data.message,
          sede_id: result.data.sedeId,
        });

      if (insertError) throw insertError;

      // Send email to sede
      const { error: emailError } = await supabase.functions.invoke("send-inscription-email", {
        body: {
          nombre: result.data.name,
          email: result.data.email,
          telefono: result.data.phone,
          interes: result.data.interest,
          mensaje: result.data.message,
          sedeId: result.data.sedeId,
        },
      });

      // Email error is secondary - data already saved

      // Get sede name for tracking
      const selectedSede = sedes.find(s => s.id === result.data.sedeId);
      const sedeName = selectedSede ? `${selectedSede.ciudad} - ${selectedSede.nombre}` : 'Unknown';
      
      // Track successful submission with sede info
      trackFormInteraction('Inscripción', 'submit');
      
      // Redirect to thank you page with sede info for conversion tracking
      navigate(`/gracias?registro=ok&nombre=${encodeURIComponent(result.data.name)}&sede=${encodeURIComponent(sedeName)}&interes=${encodeURIComponent(result.data.interest)}`);
    } catch {
      toast.error("Hubo un error al enviar la inscripción. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="relative p-6 md:p-10 max-w-2xl mx-auto rounded-3xl border bg-card shadow-medium">
      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre completo *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Tu nombre"
            maxLength={100}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="tu@email.com"
            maxLength={255}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono / WhatsApp *</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+51 999 999 999"
            maxLength={20}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="sede">Sede de tu interés *</Label>
          <Select
            value={formData.sedeId}
            onValueChange={(value) => setFormData({ ...formData, sedeId: value })}
            disabled={loadingSedes}
          >
            <SelectTrigger className={errors.sedeId ? "border-destructive" : ""}>
              <SelectValue placeholder={loadingSedes ? "Cargando sedes..." : "Selecciona una sede"} />
            </SelectTrigger>
            <SelectContent>
              {sedes.map((sede) => (
                <SelectItem key={sede.id} value={sede.id}>
                  {sede.ciudad} - {sede.nombre}
                  {sede.es_principal && " (Principal)"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.sedeId && <p className="text-sm text-destructive">{errors.sedeId}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="interest">¿Qué te interesa? *</Label>
          <Select
            value={formData.interest}
            onValueChange={(value) => setFormData({ ...formData, interest: value as any })}
          >
            <SelectTrigger className={errors.interest ? "border-destructive" : ""}>
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="curso">Curso "Conócete a Ti Mismo"</SelectItem>
              <SelectItem value="filosofia">Escuela de Filosofía</SelectItem>
              <SelectItem value="cultura">Actividades Culturales</SelectItem>
              <SelectItem value="voluntariado">Voluntariado</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
          {errors.interest && <p className="text-sm text-destructive">{errors.interest}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Mensaje *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Cuéntanos más sobre tu interés..."
            rows={5}
            maxLength={1000}
            className={errors.message ? "border-destructive" : ""}
          />
          {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
          <p className="text-xs text-muted-foreground">{formData.message.length}/1000 caracteres</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-start space-x-3">
            <Checkbox
              id="acceptPrivacy"
              checked={formData.acceptPrivacy}
              onCheckedChange={(checked) => setFormData({ ...formData, acceptPrivacy: checked === true })}
              className={errors.acceptPrivacy ? "border-destructive" : ""}
            />
            <Label htmlFor="acceptPrivacy" className="text-sm leading-relaxed cursor-pointer">
              He leído y acepto la{" "}
              <Link to="/privacidad" target="_blank" className="text-primary underline hover:text-primary/80">
                Política de Privacidad
              </Link>{" "}
              y el tratamiento de mis datos personales conforme a la Ley N° 29733. *
            </Label>
          </div>
          {errors.acceptPrivacy && <p className="text-sm text-destructive">{errors.acceptPrivacy}</p>}
        </div>

        <AnimatedButton type="submit" size="lg" variant="secondary" className="w-full py-6 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.6)] transition-shadow" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </AnimatedButton>
      </form>
    </Card>
  );
};
