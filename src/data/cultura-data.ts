import { BookOpen, Theater, Music, Globe } from "lucide-react";
import charlasConferenciasImage from "@/assets/cultura-charlas-conferencias.jpg";
import teatroExpresionImage from "@/assets/cultura-teatro-expresion-bright.jpg";
import musicaArtesImage from "@/assets/cultura-musica-artes-original.jpg";
import encuentrosCulturalesImage from "@/assets/cultura-encuentros-culturales-tight.jpg";

export const culturaActivities = [
  {
    icon: BookOpen,
    title: "Charlas y Conferencias",
    description: "Exploramos temas de historia, filosofía, arte y ciencias desde una perspectiva humanista. Cada charla busca conectar el pasado con el presente para comprender mejor el mundo actual.",
    topics: ["Filosofía antigua", "Civilizaciones perdidas", "Arte y simbolismo", "Ciencia y ética"],
    image: charlasConferenciasImage,
  },
  {
    icon: Theater,
    title: "Teatro y Expresión",
    description: "El teatro como herramienta de autoconocimiento. Montamos obras con contenido filosófico y desarrollamos talleres de expresión corporal y vocal.",
    topics: ["Teatro filosófico", "Expresión corporal", "Voz y retórica", "Improvisación"],
    image: teatroExpresionImage,
  },
  {
    icon: Music,
    title: "Música y Artes",
    description: "La música como lenguaje universal. Conciertos, talleres de instrumentos, canto coral y exploración de tradiciones musicales del mundo.",
    topics: ["Canto coral", "Instrumentos tradicionales", "Historia de la música", "Talleres de música clásica"],
    image: musicaArtesImage,
  },
  {
    icon: Globe,
    title: "Encuentros Culturales",
    description: "Celebraciones de culturas del mundo, exposiciones de arte, proyecciones de cine con debate, viajes culturales y tertulias filosóficas en un ambiente cercano y fraternal.",
    topics: ["Festivales culturales", "Cine forums", "Viajes culturales", "Tertulias", "Exposiciones", "Conversatorios", "Ferias del libro"],
    image: encuentrosCulturalesImage,
  },
];

export const culturaValues = [
  {
    title: "Unir Diferencias",
    description: "La cultura es un puente entre personas, épocas y civilizaciones. Reunimos las diferencias en lugar de separarlas.",
  },
  {
    title: "Aprender del Pasado",
    description: "Tenemos mucho pasado por delante. Las antiguas civilizaciones tienen mucho que enseñarnos sobre cómo vivir hoy.",
  },
  {
    title: "Cultivarse",
    description: "Cultura es cultivarse. Cada actividad cultural es una oportunidad para desarrollar nuevas capacidades y sensibilidades.",
  },
];
