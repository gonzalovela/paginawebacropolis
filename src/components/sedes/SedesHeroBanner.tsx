import { PageHeroBanner } from "@/components/PageHeroBanner";
import fachadaImage from "@/assets/fachada-san-isidro-full.jpg";

export const SedesHeroBanner = () => {
  return (
    <PageHeroBanner
      bannerImage={fachadaImage}
      bannerAlt="Comunidad de Nueva Acrópolis Perú - Encuentra tu sede más cercana"
      badgeText="SEDES"
      badgeVariant="secondary"
      title="Nuestras Sedes"
      description="Encuentra la sede más cercana a ti y comienza tu viaje filosófico"
      objectPosition="center 0%"
      imageScale={1}
      decorativeVariant="sedes"
    />
  );
};
