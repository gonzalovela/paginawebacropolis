import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Facebook, Instagram, Music2, Map } from "lucide-react";

export interface Sede {
  id: string;
  nombre: string;
  ciudad: string;
  departamento?: string;
  distrito?: string;
  direccion: string;
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  es_principal: boolean;
  google_maps_url?: string;
}

interface SedeCardProps {
  sede: Sede;
  isPrincipal?: boolean;
  onOpenMap?: (sede: Sede) => void;
}

const formatWhatsApp = (number: string) => {
  return `https://wa.me/${number.replace(/\D/g, '')}`;
};

export const SedeCard = ({ sede, isPrincipal = false, onOpenMap }: SedeCardProps) => {
  return (
    <Card className={`p-4 md:p-6 hover:shadow-lg transition-shadow ${isPrincipal ? 'border-l-4 border-l-primary' : 'border-l-4 border-l-primary'}`}>
      {isPrincipal && (
        <div className="mb-3 md:mb-4">
          <span className="bg-primary text-primary-foreground px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-medium">
            Sede Principal
          </span>
        </div>
      )}
      
      <h3 className="text-lg md:text-xl font-bold mb-2">{sede.nombre}</h3>
      
      <div className="space-y-2 md:space-y-3 text-muted-foreground mb-3 md:mb-4">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 mt-0.5 text-primary" />
          <div>
            {sede.distrito && <p className="font-medium text-foreground text-sm md:text-base">{sede.distrito}</p>}
            <p className="text-xs md:text-sm">{sede.direccion}</p>
          </div>
        </div>

        {sede.whatsapp && (
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0 text-primary" />
            <a 
              href={formatWhatsApp(sede.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm hover:text-primary transition-colors font-medium"
            >
              {sede.whatsapp}
            </a>
          </div>
        )}
      </div>

      {sede.google_maps_url && onOpenMap && (
        <Button
          variant="outline"
          size="sm"
          className="w-full mb-3 md:mb-4 hover:bg-primary hover:text-primary-foreground transition-colors text-xs md:text-sm"
          onClick={() => onOpenMap(sede)}
        >
          <Map className="h-3.5 w-3.5 md:h-4 md:w-4 mr-2" />
          Ver en el mapa
        </Button>
      )}

      {(sede.facebook || sede.instagram || sede.tiktok) && (
        <div className="flex gap-2 pt-3 md:pt-4 border-t">
          {sede.facebook && (
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8 md:h-10 md:w-10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              asChild
            >
              <a 
                href={sede.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </a>
            </Button>
          )}
          {sede.instagram && (
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8 md:h-10 md:w-10 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-colors"
              asChild
            >
              <a 
                href={sede.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </a>
            </Button>
          )}
          {sede.tiktok && (
            <Button 
              variant="outline" 
              size="icon"
              className="h-8 w-8 md:h-10 md:w-10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              asChild
            >
              <a 
                href={sede.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <Music2 className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </a>
            </Button>
          )}
        </div>
      )}
    </Card>
  );
};
