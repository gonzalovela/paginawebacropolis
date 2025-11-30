import { 
  Heart, 
  BookOpen, 
  HandHeart, 
  Sprout, 
  Users, 
  Lightbulb, 
  Globe, 
  Music,
  type LucideIcon 
} from "lucide-react";

export const IMAGE_POSITIONS = [
  { value: "center", label: "Centro", description: "La imagen se centra" },
  { value: "top", label: "Arriba", description: "Muestra la parte superior" },
  { value: "bottom", label: "Abajo", description: "Muestra la parte inferior" },
  { value: "center 20%", label: "Casi arriba", description: "Enfoca cerca del tope" },
  { value: "center 35%", label: "Arriba-centro", description: "Entre arriba y centro" },
  { value: "center 65%", label: "Centro-abajo", description: "Entre centro y abajo" },
  { value: "center 80%", label: "Casi abajo", description: "Enfoca cerca del fondo" },
];

/** Centralized icon map for database-driven content */
export const iconMap: Record<string, LucideIcon> = {
  Heart,
  BookOpen,
  HandHeart,
  Sprout,
  Users,
  Lightbulb,
  Globe,
  Music,
};
