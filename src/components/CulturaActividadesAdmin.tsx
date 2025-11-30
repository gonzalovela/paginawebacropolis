import { Image as ImageIcon } from "lucide-react";
import { ContentImageAdmin } from "@/components/admin/ContentImageAdmin";

// Default images for preview when no database image exists
import charlasConferenciasImage from "@/assets/cultura-charlas-conferencias.jpg";
import musicaArtesImage from "@/assets/cultura-musica-artes-original.jpg";
import encuentrosCulturalesImage from "@/assets/cultura-encuentros-culturales-tight.jpg";
import desarrolloPersonalImage from "@/assets/cultura-desarrollo-personal.jpg";

const DEFAULT_IMAGES: Record<string, string> = {
  "charlas-conferencias": charlasConferenciasImage,
  "encuentros-culturales": encuentrosCulturalesImage,
  "musica-artes": musicaArtesImage,
  "desarrollo-personal": desarrolloPersonalImage,
};

export const CulturaActividadesAdmin = () => {
  return (
    <ContentImageAdmin
      title="Actividades Culturales"
      description="Gestiona las imágenes de las 4 actividades culturales. Los textos descriptivos se mantienen fijos para preservar el SEO."
      tableName="cultura_actividades"
      storageBucket="cultura-actividades"
      defaultImages={DEFAULT_IMAGES}
      titleIcon={<ImageIcon className="h-5 w-5" />}
      accentColor="primary"
    />
  );
};
