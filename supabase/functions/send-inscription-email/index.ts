import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Restrict CORS to allowed origins
const allowedOrigins = [
  "https://acropolisperu.org",
  "https://www.acropolisperu.org",
];

const getCorsHeaders = (origin: string | null) => {
  // In development, allow localhost
  const isDev = origin?.includes("localhost") || origin?.includes("lovable.app");
  const isAllowed = isDev || (origin && allowedOrigins.some(allowed => origin.startsWith(allowed)));
  
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin || "*" : allowedOrigins[0],
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
};

interface InscriptionEmailRequest {
  nombre: string;
  email: string;
  telefono: string;
  interes: string;
  mensaje: string;
  sedeId: string;
}

// Input validation
const validateInput = (data: InscriptionEmailRequest): string | null => {
  if (!data.nombre || typeof data.nombre !== 'string' || data.nombre.length > 200) {
    return "Nombre inválido";
  }
  if (!data.email || typeof data.email !== 'string' || !data.email.includes('@') || data.email.length > 255) {
    return "Email inválido";
  }
  if (!data.telefono || typeof data.telefono !== 'string' || data.telefono.length > 20) {
    return "Teléfono inválido";
  }
  if (!data.interes || typeof data.interes !== 'string') {
    return "Interés inválido";
  }
  if (!data.mensaje || typeof data.mensaje !== 'string' || data.mensaje.length > 2000) {
    return "Mensaje inválido o demasiado largo";
  }
  if (!data.sedeId || typeof data.sedeId !== 'string') {
    return "Sede inválida";
  }
  return null;
};

// Sanitize HTML to prevent XSS in emails
const sanitizeHtml = (text: string): string => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const handler = async (req: Request): Promise<Response> => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const data: InscriptionEmailRequest = await req.json();

    // Validate input
    const validationError = validateInput(data);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const { nombre, email, telefono, interes, mensaje, sedeId } = data;

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Get sede information
    const { data: sede, error: sedeError } = await supabase
      .from("sedes")
      .select("nombre, ciudad, whatsapp, email")
      .eq("id", sedeId)
      .single();

    if (sedeError || !sede) {
      return new Response(JSON.stringify({ error: "Sede no encontrada" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Sanitize user inputs for email
    const safeNombre = sanitizeHtml(nombre);
    const safeEmail = sanitizeHtml(email);
    const safeTelefono = sanitizeHtml(telefono);
    const safeMensaje = sanitizeHtml(mensaje);
    const safeSedeNombre = sanitizeHtml(sede.nombre);
    const safeSedeCiudad = sanitizeHtml(sede.ciudad);

    // Use sede email if available, otherwise fallback to default
    const sedeEmail = sede.email || "info@acropolisperu.org";

    // Interest labels mapping
    const interestLabels: Record<string, string> = {
      curso: 'Curso "Conócete a Ti Mismo"',
      filosofia: "Escuela de Filosofía",
      cultura: "Actividades Culturales",
      voluntariado: "Voluntariado",
      otro: "Otro",
    };

    // Central email that always receives a copy
    const centralEmail = "informes@acropolisperu.org";

    // Build recipients list: sede email + central email
    const recipients = [sedeEmail];
    if (sedeEmail !== centralEmail) {
      recipients.push(centralEmail);
    }

    // Format current date/time in Peru timezone (America/Lima, UTC-5)
    const fechaRegistro = new Intl.DateTimeFormat("es-PE", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "America/Lima",
    }).format(new Date());

    // Send email to sede and central
    await resend.emails.send({
      from: "Nueva Acrópolis <inscripciones@send.acropolisperu.org>",
      to: recipients,
      subject: `Nueva Inscripción - ${safeSedeNombre}`,
      html: `
        <h1>Nueva Inscripción Recibida</h1>
        <p><strong>Sede:</strong> ${safeSedeNombre}, ${safeSedeCiudad}</p>
        <p><strong>Fecha de registro:</strong> ${fechaRegistro}</p>
        <hr />
        <h2>Datos del Interesado</h2>
        <p><strong>Nombre:</strong> ${safeNombre}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Teléfono:</strong> ${safeTelefono}</p>
        <p><strong>Interés:</strong> ${interestLabels[interes] || sanitizeHtml(interes)}</p>
        <h3>Mensaje:</h3>
        <p>${safeMensaje.replace(/\n/g, "<br>")}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">
          Este mensaje fue enviado desde el formulario de inscripción del sitio web de Nueva Acrópolis Perú.
        </p>
      `,
    });

    // Send confirmation email to the user
    await resend.emails.send({
      from: "Nueva Acrópolis Perú <inscripciones@send.acropolisperu.org>",
      to: [email],
      subject: "¡Gracias por tu inscripción! - Nueva Acrópolis Perú",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
                        ¡Gracias por tu interés, ${safeNombre}!
                      </h1>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        Hemos recibido tu inscripción exitosamente. Un miembro de nuestro equipo de <strong>${safeSedeNombre}</strong> se pondrá en contacto contigo pronto.
                      </p>
                      
                      <!-- Details Box -->
                      <div style="background-color: #f8f9fa; border-radius: 8px; padding: 25px; margin: 25px 0; border-left: 4px solid #2E7D32;">
                        <h2 style="color: #2E7D32; font-size: 18px; margin: 0 0 15px 0;">Resumen de tu inscripción</h2>
                        <p style="margin: 8px 0; color: #555;"><strong>Fecha de registro:</strong> ${fechaRegistro}</p>
                        <p style="margin: 8px 0; color: #555;"><strong>Interés:</strong> ${interestLabels[interes] || sanitizeHtml(interes)}</p>
                        <p style="margin: 8px 0; color: #555;"><strong>Sede seleccionada:</strong> ${safeSedeNombre}, ${safeSedeCiudad}</p>
                        <p style="margin: 8px 0; color: #555;"><strong>Tu mensaje:</strong></p>
                        <p style="margin: 8px 0; color: #666; font-style: italic; padding-left: 15px; border-left: 2px solid #ddd;">${safeMensaje.replace(/\n/g, "<br>")}</p>
                      </div>
                      
                      <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 20px 0;">
                        Mientras tanto, te invitamos a conocer más sobre nosotros:
                      </p>
                      
                      <!-- CTA Button -->
                      <div style="text-align: center; margin: 30px 0;">
                        <a href="https://acropolisperu.org" style="display: inline-block; background-color: #2E7D32; color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-weight: 600; font-size: 16px;">
                          Visitar nuestro sitio web
                        </a>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 25px 30px; text-align: center; border-top: 1px solid #eee;">
                      <p style="color: #666666; font-size: 14px; margin: 0 0 10px 0;">
                        <strong>Nueva Acrópolis Perú</strong><br>
                        Escuela de Filosofía
                      </p>
                      <p style="color: #999999; font-size: 12px; margin: 0;">
                        © ${new Date().getFullYear()} Nueva Acrópolis Perú. Todos los derechos reservados.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    // Don't expose internal error details
    return new Response(
      JSON.stringify({ error: "Error al procesar la solicitud" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);