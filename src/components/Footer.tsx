import { useState, useEffect } from "react";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-escuela-filosofia.png";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface SedePrincipal {
  nombre: string;
  ciudad: string;
  direccion: string;
  whatsapp: string | null;
  email: string | null;
  facebook: string | null;
  instagram: string | null;
}

export const Footer = () => {
  const [sedePrincipal, setSedePrincipal] = useState<SedePrincipal | null>(null);

  useEffect(() => {
    const fetchSedePrincipal = async () => {
      const { data, error } = await supabase
        .from("sedes")
        .select("nombre, ciudad, direccion, whatsapp, email, facebook, instagram")
        .eq("es_principal", true)
        .single();

      if (!error && data) {
        setSedePrincipal(data);
      }
    };

    fetchSedePrincipal();
  }, []);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <img 
              src={logo} 
              alt="Nueva Acrópolis" 
              className="h-16 mb-4 brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/80 mb-4">
              Escuela de Filosofía
            </p>
            <p className="text-sm text-primary-foreground/70">
              Filosofía · Cultura · Voluntariado
            </p>
          </div>

          {/* Quick links */}
          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/quienes-somos" className="hover:text-accent transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/filosofia" className="hover:text-accent transition-colors">
                  Curso Conócete a Ti Mismo
                </Link>
              </li>
              <li>
                <Link to="/cultura" className="hover:text-accent transition-colors">
                  Actividades Culturales
                </Link>
              </li>
              <li>
                <Link to="/voluntariado" className="hover:text-accent transition-colors">
                  Voluntariado
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  {sedePrincipal ? (
                    <>
                      {sedePrincipal.direccion}
                      <br />
                      {sedePrincipal.ciudad}
                    </>
                  ) : (
                    "Lima, Perú"
                  )}
                </span>
              </li>
              {sedePrincipal?.whatsapp && (
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <a 
                    href={`https://wa.me/${sedePrincipal.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {sedePrincipal.whatsapp}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a 
                  href={`mailto:${sedePrincipal?.email || 'info@acropolisperu.org'}`} 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {sedePrincipal?.email || 'info@acropolisperu.org'}
                </a>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h3 className="font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              {sedePrincipal?.facebook ? (
                <a 
                  href={sedePrincipal.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              ) : (
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {sedePrincipal?.instagram ? (
                <a 
                  href={sedePrincipal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              ) : (
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              <a 
                href="https://www.youtube.com/@NuevaAcropolisPeru" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>
              © {new Date().getFullYear()} Nueva Acrópolis Perú. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 items-center">
              <a href="#" className="hover:text-accent transition-colors">
                Aviso Legal
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Privacidad
              </a>
              <Link to="/auth" className="hover:text-accent transition-colors opacity-50 hover:opacity-100 text-[10px]">
                admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
