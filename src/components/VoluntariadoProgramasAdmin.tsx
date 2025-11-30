import { HandHeart } from "lucide-react";
import { ContentImageAdmin } from "@/components/admin/ContentImageAdmin";

// Default images for preview when no database image exists
import yoAmoLecturaImage from "@/assets/voluntariado-yo-amo-lectura-warm.jpg";
import adultoMayorImage from "@/assets/voluntariado-adulto-mayor.jpg";
import humanitarioSocialImage from "@/assets/voluntariado-humanitario-social-warm.jpg";
import medioAmbienteImage from "@/assets/voluntariado-medio-ambiente.jpg";
import formacionImage from "@/assets/voluntariado-formacion.jpg";
import talleresArtisticosImage from "@/assets/voluntariado-talleres-artisticos.jpg";

const DEFAULT_IMAGES: Record<string, string> = {
  "yo-amo-lectura": yoAmoLecturaImage,
  "adulto-mayor": adultoMayorImage,
  "humanitario-social": humanitarioSocialImage,
  "medio-ambiente": medioAmbienteImage,
  "formacion-voluntarios": formacionImage,
  "talleres-artisticos": talleresArtisticosImage,
};

export const VoluntariadoProgramasAdmin = () => {
  return (
    <ContentImageAdmin
      title="Programas de Voluntariado"
      description="Gestiona las imágenes de los 6 programas de voluntariado. Los textos descriptivos se mantienen fijos para preservar el SEO."
      tableName="voluntariado_programas"
      storageBucket="voluntariado-programas"
      defaultImages={DEFAULT_IMAGES}
      titleIcon={<HandHeart className="h-5 w-5" />}
      accentColor="secondary"
    />
  );
};
