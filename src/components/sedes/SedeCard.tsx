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
    <Card className="p-6 rounded-2xl border bg-card hover:shadow-medium hover:-translate-y-1 transition-all">
      {isPrincipal && (
        <div className="mb-3 md:mb-4">
          <span className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold">
            Sede Principal
          </span>
        </div>
      )}
      
      <h3 className="text-lg md:text-xl font-bold mb-2">{sede.nombre}</h3>
      
      <div className="space-y-2 md:space-y-3 text-muted-foreground mb-3 md:mb-4">
        <div className="flex items-start gap-3">
          <span className="w-9 h-9 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0"><MapPin className="h-4 w-4" /></span>
          <div>
            {sede.distrito && <p className="font-medium text-foreground text-sm md:text-base">{sede.distrito}</p>}
            <p className="text-xs md:text-sm">{sede.direccion}</p>
          </div>
        </div>

        {sede.whatsapp && (
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0"><Phone className="h-4 w-4" /></span>
            <a 
              href={formatWhatsApp(sede.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm hover:text-secondary transition-colors font-medium"
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
          className="w-full mb-3 md:mb-4 rounded-full hover:bg-secondary/10 hover:text-secondary hover:border-secondary/40 transition-colors text-xs md:text-sm"
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
              className="h-10 w-10 rounded-full border-secondary/20 bg-secondary/10 text-secondary hover:bg-secondary/20 hover:text-secondary transition-colors"
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
              className="h-10 w-10 rounded-full border-secondary/20 bg-secondary/10 text-secondary hover:bg-secondary/20 hover:text-secondary transition-colors"
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
              className="h-10 w-10 rounded-full border-secondary/20 bg-secondary/10 text-secondary hover:bg-secondary/20 hover:text-secondary transition-colors"
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
