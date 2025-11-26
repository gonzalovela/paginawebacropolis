import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "El nombre debe tener al menos 2 caracteres" }).max(100, { message: "El nombre es muy largo" }),
  email: z.string().trim().email({ message: "Correo electrónico inválido" }).max(255, { message: "El correo es muy largo" }),
  phone: z.string().trim().min(6, { message: "Teléfono inválido" }).max(20, { message: "Teléfono muy largo" }),
  interest: z.enum(["curso", "filosofia", "cultura", "voluntariado", "otro"], { message: "Selecciona una opción" }),
  message: z.string().trim().min(10, { message: "El mensaje es muy corto" }).max(1000, { message: "El mensaje es muy largo" }),
  sedeId: z.string().min(1, { message: "Selecciona una sede" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface Sede {
  id: string;
  nombre: string;
  ciudad: string;
  es_principal: boolean;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    interest: "curso",
    message: "",
    sedeId: "",
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
          .select("id, nombre, ciudad, es_principal")
          .order("es_principal", { ascending: false })
          .order("ciudad");
        
        if (error) throw error;
        setSedes(data || []);
      } catch (error) {
        console.error("Error loading sedes:", error);
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

      if (emailError) {
        console.error("Error sending email:", emailError);
        // Don't throw - data is saved, email is secondary
      }

      toast.success("¡Inscripción enviada! Te contactaremos pronto.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "curso",
        message: "",
        sedeId: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Hubo un error al enviar la inscripción. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-8 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
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
                  {sede.nombre} - {sede.ciudad}
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

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Al enviar este formulario, aceptas que Nueva Acrópolis se ponga en contacto contigo.
        </p>
      </form>
    </Card>
  );
};
