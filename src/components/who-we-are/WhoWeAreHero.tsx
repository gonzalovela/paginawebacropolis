import { PageHeroBanner, SparkleWord } from "@/components/PageHeroBanner";
import bannerImage from "@/assets/banner-quienes-somos.jpg";

export const WhoWeAreHero = () => (
  <PageHeroBanner
    bannerImage={bannerImage}
    bannerAlt="Grupo de estudiantes y profesores de filosofía de Nueva Acrópolis Perú en actividad comunitaria - Escuela de Filosofía"
    badgeText="Quiénes somos"
    title={<>¿Qué es <SparkleWord>Nueva Acrópolis</SparkleWord>?</>}
    description="Una Escuela de Filosofía que promueve la cultura y practica el voluntariado. Propone un ideal de valores permanentes para contribuir a la evolución individual y colectiva."
  />
);
