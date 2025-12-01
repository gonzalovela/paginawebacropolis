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
  // In development, allow localhost, lovable.app and lovableproject.com
  const isDev = origin?.includes("localhost") || origin?.includes("lovable.app") || origin?.includes("lovableproject.com");
  const isAllowed = isDev || (origin && allowedOrigins.some(allowed => origin.startsWith(allowed)));
  
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin || "*" : allowedOrigins[0],
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
};

interface InvitationEmailRequest {
  email: string;
  role: string;
  inviterName: string;
  token: string;
  baseUrl: string;
}

// Input validation
const validateInput = (data: InvitationEmailRequest): string | null => {
  if (!data.email || typeof data.email !== 'string' || !data.email.includes('@') || data.email.length > 255) {
    return "Email inválido";
  }
  if (!data.role || !['admin', 'editor'].includes(data.role)) {
    return "Rol inválido";
  }
  if (!data.inviterName || typeof data.inviterName !== 'string' || data.inviterName.length > 200) {
    return "Nombre del invitador inválido";
  }
  if (!data.token || typeof data.token !== 'string') {
    return "Token inválido";
  }
  if (!data.baseUrl || typeof data.baseUrl !== 'string') {
    return "URL base inválida";
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

const getRoleName = (role: string) => {
  return role === 'admin' ? 'Administrador' : 'Editor';
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
    const data: InvitationEmailRequest = await req.json();

    // Validate input
    const validationError = validateInput(data);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const { email, role, inviterName, token, baseUrl } = data;

    // Verify the invitation exists and is valid using service role
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Verify invitation exists in database (additional security layer)
    const { data: invitation, error: invError } = await supabase
      .from("invitations")
      .select("id, email, token, status, expires_at")
      .eq("token", token)
      .eq("status", "pending")
      .single();

    if (invError || !invitation) {
      return new Response(JSON.stringify({ error: "Invitación no válida" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Verify email matches
    if (invitation.email !== email) {
      return new Response(JSON.stringify({ error: "Email no coincide con la invitación" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Sanitize inputs
    const safeInviterName = sanitizeHtml(inviterName);
    
    // Only allow specific base URLs
    const allowedBaseUrls = [
      "https://acropolisperu.org",
      "https://www.acropolisperu.org",
    ];
    const isDev = baseUrl.includes("localhost") || baseUrl.includes("lovable.app") || baseUrl.includes("lovableproject.com");
    const isValidBaseUrl = isDev || allowedBaseUrls.some(url => baseUrl.startsWith(url));
    
    if (!isValidBaseUrl) {
      return new Response(JSON.stringify({ error: "URL base no permitida" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const registrationUrl = `${baseUrl}/auth?invitation=${token}`;

    await resend.emails.send({
      from: "Nueva Acrópolis <onboarding@resend.dev>",
      to: [email],
      subject: "Invitación al Panel de Administración - Nueva Acrópolis Perú",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1a5f4a; margin: 0;">Nueva Acrópolis Perú</h1>
            <p style="color: #666; margin: 5px 0;">Escuela de Filosofía</p>
          </div>
          
          <div style="background: #f8f9fa; border-radius: 10px; padding: 30px; margin-bottom: 20px;">
            <h2 style="color: #1a5f4a; margin-top: 0;">¡Has sido invitado!</h2>
            <p>Hola,</p>
            <p><strong>${safeInviterName}</strong> te ha invitado a unirte al panel de administración de Nueva Acrópolis Perú con el rol de <strong>${getRoleName(role)}</strong>.</p>
            
            <div style="background: #e8f5e9; border-left: 4px solid #1a5f4a; padding: 15px; margin: 20px 0;">
              <p style="margin: 0;"><strong>Tu rol:</strong> ${getRoleName(role)}</p>
              <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">
                ${role === 'admin' 
                  ? 'Podrás gestionar sedes, fotos, inscripciones, usuarios y roles.' 
                  : 'Podrás gestionar sedes, fotos e inscripciones.'}
              </p>
            </div>
            
            <p>Para aceptar la invitación y crear tu cuenta, haz clic en el siguiente botón:</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${registrationUrl}" style="background: #1a5f4a; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                Aceptar Invitación
              </a>
            </div>
            
            <p style="font-size: 14px; color: #666;">
              Si el botón no funciona, copia y pega este enlace en tu navegador:<br>
              <a href="${registrationUrl}" style="color: #1a5f4a; word-break: break-all;">${registrationUrl}</a>
            </p>
          </div>
          
          <div style="text-align: center; color: #999; font-size: 12px;">
            <p>Esta invitación expira en 7 días.</p>
            <p>Si no esperabas esta invitación, puedes ignorar este correo.</p>
            <p style="margin-top: 20px;">© ${new Date().getFullYear()} Nueva Acrópolis Perú</p>
          </div>
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