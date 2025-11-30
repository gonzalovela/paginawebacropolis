import { PageHeroBanner } from "@/components/PageHeroBanner";
import sedesImage from "@/assets/culture-mountain-group.jpg";

export const SedesHeroBanner = () => {
  return (
    <PageHeroBanner
      bannerImage={sedesImage}
      bannerAlt="Comunidad de Nueva Acrópolis Perú - Encuentra tu sede más cercana"
      badgeText="SEDES"
      badgeVariant="secondary"
      title="Nuestras Sedes"
      description="Encuentra la sede más cercana a ti y comienza tu viaje filosófico"
      objectPosition="center 60%"
      decorativeVariant="sedes"
    />
  );
};
