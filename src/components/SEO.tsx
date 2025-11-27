import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "organization";
  noindex?: boolean;
  structuredData?: object;
}

const BASE_URL = "https://acropolisperu.org";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = "Nueva Acrópolis Perú";

export const SEO = ({
  title = "Escuela de Filosofía",
  description = "Escuela de Filosofía que promueve filosofía práctica, cultura y voluntariado. Más de 65 años transformando vidas a través de la filosofía aplicada.",
  keywords = "filosofía, escuela de filosofía, nueva acrópolis, perú, cultura, voluntariado, conócete a ti mismo, filosofía práctica",
  image = DEFAULT_IMAGE,
  url = BASE_URL,
  type = "website",
  noindex = false,
  structuredData,
}: SEOProps) => {
  const fullTitle = title === "Escuela de Filosofía" 
    ? `${SITE_NAME} | ${title}` 
    : `${title} | ${SITE_NAME}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Nueva Acrópolis Perú",
    "alternateName": "Escuela de Filosofía Nueva Acrópolis",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo-escuela-filosofia.png`,
    "description": description,
    "foundingDate": "1957",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lima",
      "addressCountry": "PE"
    },
    "sameAs": [
      "https://www.facebook.com/NuevaAcropolisPeru",
      "https://www.instagram.com/nuevaacropolisperu",
      "https://www.youtube.com/NuevaAcropolisPeru"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Peru"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "informes@acropolisperu.org",
      "contactType": "customer service",
      "availableLanguage": "Spanish"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": BASE_URL
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Nueva Acrópolis Perú" />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_PE" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@NuevaAcropolisPE" />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Structured Data - Breadcrumb */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {/* Custom Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Page-specific SEO configurations
export const seoConfig = {
  home: {
    title: "Escuela de Filosofía",
    description: "Nueva Acrópolis Perú: Escuela de Filosofía práctica, cultura y voluntariado. Descubre el curso Conócete a Ti Mismo y transforma tu vida con filosofía aplicada.",
    keywords: "filosofía práctica, escuela filosofía perú, nueva acrópolis, conócete a ti mismo, desarrollo personal, voluntariado",
  },
  filosofia: {
    title: "Filosofía Práctica",
    description: "Descubre la filosofía como forma de vida. Aprende herramientas prácticas para el autoconocimiento, desarrollo del carácter y una vida con propósito.",
    keywords: "filosofía práctica, autoconocimiento, desarrollo personal, conócete a ti mismo, curso filosofía, sabiduría práctica",
  },
  cultura: {
    title: "Cultura y Arte",
    description: "Actividades culturales para unir diferencias: encuentros, exposiciones, cine forums y talleres artísticos que conectan civilizaciones antiguas con el mundo moderno.",
    keywords: "actividades culturales perú, encuentros culturales, cine forum, talleres arte, historia civilizaciones, nueva acrópolis cultura",
  },
  voluntariado: {
    title: "Voluntariado Filosófico",
    description: "Voluntariado con propósito: programas de lectura, adulto mayor, medio ambiente y acción humanitaria. Transforma filosofía en acción concreta.",
    keywords: "voluntariado perú, voluntariado filosófico, yo amo la lectura, adulto mayor, medio ambiente, acción social",
  },
  quienesSomos: {
    title: "¿Qué es Nueva Acrópolis?",
    description: "Conoce la historia, principios y liderazgo de Nueva Acrópolis. Una organización filosófica internacional presente en más de 50 países desde 1957.",
    keywords: "nueva acrópolis historia, jorge livraga, escuela filosofía, organización filosófica, principios nueva acrópolis",
  },
  sedes: {
    title: "Encuentra tu Sede",
    description: "Encuentra la sede de Nueva Acrópolis más cercana en Perú. Más de 65 sedes a nivel nacional con actividades de filosofía, cultura y voluntariado.",
    keywords: "sedes nueva acrópolis, escuela filosofía lima, nueva acrópolis perú ubicaciones, direcciones sedes",
  },
  inscripcion: {
    title: "Inscríbete",
    description: "Inscríbete en Nueva Acrópolis Perú. Comienza tu camino en la filosofía práctica con el curso Conócete a Ti Mismo.",
    keywords: "inscripción nueva acrópolis, curso filosofía, conócete a ti mismo inscripción, escuela filosofía perú",
  },
};
