import { Heart, Sprout, Users, Lightbulb, HandHeart, TreePine, BookOpen } from "lucide-react";
import yoAmoLecturaImage from "@/assets/voluntariado-yo-amo-lectura-warm.jpg";
import adultoMayorImage from "@/assets/voluntariado-adulto-mayor.jpg";
import humanitarioSocialImage from "@/assets/voluntariado-humanitario-social-warm.jpg";
import medioAmbienteImage from "@/assets/voluntariado-medio-ambiente.jpg";
import formacionImage from "@/assets/voluntariado-formacion.jpg";
import talleresArtisticosImage from "@/assets/voluntariado-talleres-artisticos.jpg";

export const voluntariadoPrinciples = [
  {
    icon: Heart,
    message: "Creemos en un mundo mejor",
    description: "La utopía no es imposible, es el motor de la transformación"
  },
  {
    icon: Lightbulb,
    message: "No hay imposibles",
    description: "Los límites están en nuestra mente, no en la realidad"
  },
  {
    icon: TreePine,
    message: "Cabeza en el cielo, pies en la tierra",
    description: "Ideales elevados con acción práctica y concreta"
  },
  {
    icon: HandHeart,
    message: "Somos lo que hacemos",
    description: "Nuestras acciones definen quiénes somos realmente"
  },
  {
    icon: Users,
    message: "Vivir es construir",
    description: "Cada día es una oportunidad para crear y transformar"
  },
  {
    icon: Sprout,
    message: "Somos parte activa de la Naturaleza",
    description: "No somos dueños, somos parte del todo viviente"
  },
  {
    icon: Heart,
    message: "La fraternidad nos une",
    description: "Más allá de diferencias, somos una familia humana"
  },
  {
    icon: BookOpen,
    message: "Aprender haciendo",
    description: "El voluntariado es escuela de vida y sabiduría práctica"
  },
];

export const voluntariadoAreas = [
  {
    icon: BookOpen,
    title: "Programa 'Yo Amo la Lectura'",
    description: "Dirigido a beneficiar a escolares de nivel primaria en situación de vulnerabilidad social o económica. Realizamos jornadas periódicas para que los niños cultiven el amor por la lectura y los valores que estas promueven. En algunas ciudades hemos implementado bibliotecas para colegios de escasos recursos económicos.",
    activities: [
      "Jornadas de lectura en colegios",
      "Bibliotecas comunitarias",
      "Talleres de valores",
      "Donación de libros",
    ],
    image: yoAmoLecturaImage,
  },
  {
    icon: Heart,
    title: "Programa de Acompañamiento al Adulto Mayor",
    description: "Brindamos compañía, escucha activa y actividades recreativas para adultos mayores. Promovemos su bienestar emocional y social mediante visitas regulares y programas de integración.",
    activities: [
      "Visitas a asilos",
      "Actividades recreativas",
      "Talleres de memoria",
      "Apoyo emocional",
    ],
    image: adultoMayorImage,
  },
  {
    icon: HandHeart,
    title: "Acciones de Voluntariado Humanitario y Social",
    description: "Brindamos apoyo oportuno a damnificados por friaje, huaycos y desastres naturales. Organizamos colectas y donaciones de víveres, ropa de abrigo, productos de aseo y mantenimiento. En nuestras Escuelas, equipos de voluntarios participan de talleres de tejido y confección de ropa de abrigo para donarla a comunidades altoandinas afectadas por el friaje.",
    activities: [
      "Colectas de víveres y ropa",
      "Apoyo en desastres naturales",
      "Talleres de tejido",
      "Donaciones a comunidades altoandinas",
    ],
    image: humanitarioSocialImage,
  },
  {
    icon: Sprout,
    title: "Programa de Protección del Medio Ambiente",
    description: "Eventos de concientización para el cuidado del medioambiente. Acciones ecológicas en más de 50 comunidades por el Día Internacional de la Madre Tierra. Limpieza de centros arqueológicos, playas, ríos y áreas verdes. Sembrado de árboles.",
    activities: [
      "Jornadas de reforestación",
      "Limpieza de playas y ríos",
      "Limpieza de centros arqueológicos",
      "Eventos de concientización ambiental",
    ],
    image: medioAmbienteImage,
  },
  {
    icon: Users,
    title: "Programa de Formación de Voluntarios",
    description: "Nuestros voluntarios participan de capacitaciones técnicas, formación filosófica y desarrollo de habilidades blandas. De esta manera, les damos herramientas para conocerse, desarrollar sus valores y cultivar las fortalezas que les permiten dar lo mejor de sí en el servicio a los demás.",
    activities: [
      "Capacitaciones técnicas",
      "Formación filosófica",
      "Desarrollo de habilidades",
      "Talleres de liderazgo",
    ],
    image: formacionImage,
  },
  {
    icon: Lightbulb,
    title: "Talleres Artísticos",
    description: "Desarrollamos talleres para llevar alegría y compañía. En nuestras Escuelas, el Área de Voluntariado desarrolla algunos talleres artísticos, como teatro, baile o manualidades, en el que nuestros voluntarios preparan lo que habrán de ofrecer en nuestras obras de voluntariado.",
    activities: [
      "Teatro",
      "Baile",
      "Manualidades",
      "Presentaciones artísticas",
    ],
    image: talleresArtisticosImage,
  },
];

export const voluntariadoValues = [
  {
    title: "Servicio Desinteresado",
    description: "El voluntariado no busca recompensa material, sino la satisfacción de contribuir al bienestar común.",
  },
  {
    title: "Aprendizaje Continuo",
    description: "Cada acción de voluntariado es una oportunidad para aprender y crecer como personas.",
  },
  {
    title: "Fraternidad en Acción",
    description: "El voluntariado es fraternidad hecha realidad. Nos une el propósito de construir un mundo mejor.",
  },
  {
    title: "Conexión con la Naturaleza",
    description: "Reconocemos que somos parte de la naturaleza, no sus dueños. Actuamos en armonía con ella.",
  },
];
