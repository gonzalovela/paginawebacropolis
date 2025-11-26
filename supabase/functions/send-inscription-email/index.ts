import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface InscriptionEmailRequest {
  nombre: string;
  email: string;
  telefono: string;
  interes: string;
  mensaje: string;
  sedeId: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nombre, email, telefono, interes, mensaje, sedeId }: InscriptionEmailRequest = await req.json();

    console.log("Processing inscription email for:", { nombre, sedeId });

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get sede information
    const { data: sede, error: sedeError } = await supabase
      .from("sedes")
      .select("nombre, ciudad, whatsapp")
      .eq("id", sedeId)
      .single();

    if (sedeError || !sede) {
      console.error("Error fetching sede:", sedeError);
      throw new Error("No se pudo obtener la información de la sede");
    }

    console.log("Sede found:", sede.nombre);

    // For now, we'll use a default email since sedes don't have email field yet
    // You can update the database schema to add email field to sedes table
    const sedeEmail = "info@acropolisperu.org"; // Default email

    // Interest labels mapping
    const interestLabels: Record<string, string> = {
      curso: 'Curso "Conócete a Ti Mismo"',
      filosofia: "Escuela de Filosofía",
      cultura: "Actividades Culturales",
      voluntariado: "Voluntariado",
      otro: "Otro",
    };

    // Send email to sede
    const emailResponse = await resend.emails.send({
      from: "Nueva Acrópolis <onboarding@resend.dev>",
      to: [sedeEmail],
      subject: `Nueva Inscripción - ${sede.nombre}`,
      html: `
        <h1>Nueva Inscripción Recibida</h1>
        <p><strong>Sede:</strong> ${sede.nombre}, ${sede.ciudad}</p>
        <hr />
        <h2>Datos del Interesado</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Interés:</strong> ${interestLabels[interes] || interes}</p>
        <h3>Mensaje:</h3>
        <p>${mensaje.replace(/\n/g, "<br>")}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">
          Este mensaje fue enviado desde el formulario de inscripción del sitio web de Nueva Acrópolis Perú.
        </p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-inscription-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);