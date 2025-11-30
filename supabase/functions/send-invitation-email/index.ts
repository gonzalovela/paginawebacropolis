import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface InvitationEmailRequest {
  email: string;
  role: string;
  inviterName: string;
  token: string;
  baseUrl: string;
}

const getRoleName = (role: string) => {
  return role === 'admin' ? 'Administrador' : 'Editor';
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, role, inviterName, token, baseUrl }: InvitationEmailRequest = await req.json();

    console.log("Sending invitation email to:", email);

    const registrationUrl = `${baseUrl}/auth?invitation=${token}`;

    const emailResponse = await resend.emails.send({
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
            <p><strong>${inviterName}</strong> te ha invitado a unirte al panel de administración de Nueva Acrópolis Perú con el rol de <strong>${getRoleName(role)}</strong>.</p>
            
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

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-invitation-email function:", error);
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
