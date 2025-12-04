import { BookOpen, Music, Globe, Lightbulb } from "lucide-react";
import charlasConferenciasImage from "@/assets/cultura-charlas-conferencias.jpg";
import musicaArtesImage from "@/assets/cultura-musica-artes-original.jpg";
import encuentrosCulturalesImage from "@/assets/cultura-encuentros-culturales-tight.jpg";
import desarrolloPersonalImage from "@/assets/cultura-desarrollo-personal.jpg";

export const culturaActivities = [
  {
    icon: BookOpen,
    title: "Charlas y Conferencias",
    description: "Exploramos temas de filosofía, arte, mitología, historia y ciencias desde una perspectiva humanista. Conectamos lo mejor del pasado con el presente para enriquecer la visión sobre la vida y sobre sí mismo.",
    image: charlasConferenciasImage,
  },
  {
    icon: Globe,
    title: "Eventos y Encuentros Culturales",
    description: "Exposiciones de arte, mitología e historia de diversas civilizaciones, cinefórums, viajes culturales y eventos filosóficos interactivos realizados en un ambiente cercano y fraternal.",
    image: encuentrosCulturalesImage,
  },
  {
    icon: Music,
    title: "Música y Arte",
    description: "Promovemos un arte con mensajes que elevan el alma, a través de conciertos didácticos, recitales de música y poesía, así como presentaciones teatrales.",
    image: musicaArtesImage,
  },
  {
    icon: Lightbulb,
    title: "Cursos de Desarrollo Personal",
    description: "Somos pioneros en el desarrollo de habilidades blandas mediante cursos y talleres que ayudan a comunicarse mejor, manejar el estrés, mejorar las relaciones personales y desarrollar el liderazgo.",
    image: desarrolloPersonalImage,
    imagePosition: "center 25%",
  },
];

// Default images mapped by slug for database fallback
export const culturaDefaultImages: Record<string, { image: string; imagePosition?: string }> = {
  "charlas-conferencias": { image: charlasConferenciasImage },
  "encuentros-culturales": { image: encuentrosCulturalesImage },
  "musica-arte": { image: musicaArtesImage },
  "desarrollo-personal": { image: desarrolloPersonalImage, imagePosition: "center 25%" },
};

export const culturaValues = [
  {
    title: "Unir diferencias",
    description: "La cultura es un puente entre personas, épocas y civilizaciones. Reunimos las diferencias en lugar de separarlas.",
  },
  {
    title: "Aprender del pasado",
    description: "Tenemos mucho pasado por delante. Las antiguas civilizaciones tienen mucho que enseñarnos sobre cómo vivir hoy.",
  },
  {
    title: "Cultivarse",
    description: "Cultura es cultivarse. Cada actividad cultural es una oportunidad para desarrollar nuevas capacidades y sensibilidades.",
  },
];
