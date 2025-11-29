import { Users, Lightbulb, Sparkles, type LucideIcon } from "lucide-react";

export interface Principio {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
  color: string;
}

export const principios: Principio[] = [
  {
    icon: Users,
    title: "Fraternidad",
    subtitle: "Respeto a la dignidad humana",
    description: "Promover un ideal de fraternidad basado en el respeto a la dignidad humana, más allá de las diferencias de sexo, culturales, religiosas, sociales, etc.",
    detail: "Este ideal de fraternidad halla su fuerza en lo que nos une más que en lo que nos separa. Se afirma en el reconocimiento de valores universales que trascienden los propios usos y costumbres locales.",
    color: "bg-primary",
  },
  {
    icon: Lightbulb,
    title: "Conocimiento",
    subtitle: "Amor a la sabiduría",
    description: "Fomentar el amor a la sabiduría a través del estudio comparado de filosofías, religiones, ciencias y artes, para promover el conocimiento del ser humano, de la Naturaleza y del Universo.",
    detail: "Entendemos la filosofía como eje relacionador de las diferentes facetas del conocimiento humano, uniendo las fuentes del pasado y el presente en una visión global e integradora.",
    color: "bg-secondary",
  },
  {
    icon: Sparkles,
    title: "Desarrollo",
    subtitle: "Realizar lo mejor de uno mismo",
    description: "Desarrollar lo mejor del ser humano, promoviendo su realización como individuo y como miembro activo de la sociedad. Actuar en armonía con la Naturaleza para mejorar el mundo.",
    detail: "El logro de la armonía entre pensamiento, sentimiento y acción es una meta para todo ser humano. Un desarrollo equilibrado de uno mismo es la única garantía hacia un mundo mejor.",
    color: "bg-accent",
  },
];
