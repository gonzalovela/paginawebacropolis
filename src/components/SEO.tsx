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
  breadcrumbs?: Array<{ name: string; url: string }>;
  faq?: Array<{ question: string; answer: string }>;
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
  breadcrumbs,
  faq,
}: SEOProps) => {
  const fullTitle = title === "Escuela de Filosofía" 
    ? `${SITE_NAME} | ${title}` 
    : `${title} | ${SITE_NAME}`;

  // Organization Schema - Core identity for search engines
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${BASE_URL}/#organization`,
    "name": "Nueva Acrópolis Perú",
    "alternateName": ["Escuela de Filosofía Nueva Acrópolis", "Nueva Acrópolis", "OINA Perú"],
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/logo-escuela-filosofia.png`,
      "width": 400,
      "height": 100
    },
    "image": DEFAULT_IMAGE,
    "description": "Escuela de Filosofía práctica presente en Perú desde hace más de 50 años. Promovemos el autoconocimiento, la cultura y el voluntariado como vías de desarrollo personal y social.",
    "foundingDate": "1957",
    "foundingLocation": {
      "@type": "Place",
      "name": "Buenos Aires, Argentina"
    },
    "founder": {
      "@type": "Person",
      "name": "Jorge Ángel Livraga Rizzi",
      "birthDate": "1930",
      "deathDate": "1991"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jr. Colina 108, Barranco",
      "addressLocality": "Lima",
      "addressRegion": "Lima",
      "postalCode": "15063",
      "addressCountry": "PE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -12.1464,
      "longitude": -77.0228
    },
    "sameAs": [
      "https://www.facebook.com/acropolisperu",
      "https://www.instagram.com/nuevacropolis/",
      "https://www.youtube.com/@perunuevacropolis",
      "https://www.acropolis.org"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Peru",
      "sameAs": "https://en.wikipedia.org/wiki/Peru"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 5000,
      "unitText": "active members"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "informes@acropolisperu.org",
        "contactType": "customer service",
        "availableLanguage": "Spanish",
        "areaServed": "PE"
      }
    ],
    "knowsAbout": [
      "Filosofía práctica",
      "Desarrollo personal",
      "Autoconocimiento",
      "Voluntariado",
      "Cultura",
      "Historia de las civilizaciones",
      "Filosofía oriental y occidental"
    ],
    "slogan": "Somos una Escuela de Filosofía para la vida"
  };

  // WebSite Schema for search box
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    "url": BASE_URL,
    "name": SITE_NAME,
    "description": description,
    "publisher": {
      "@id": `${BASE_URL}/#organization`
    },
    "inLanguage": "es-PE",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/sedes?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    "url": url,
    "name": fullTitle,
    "description": description,
    "isPartOf": {
      "@id": `${BASE_URL}/#website`
    },
    "about": {
      "@id": `${BASE_URL}/#organization`
    },
    "inLanguage": "es-PE",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": BASE_URL
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.name,
        "item": crumb.url
      }))
    ]
  } : {
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

  // FAQ Schema if provided
  const faqSchema = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Nueva Acrópolis Perú" />
      <meta name="publisher" content="Nueva Acrópolis Perú" />
      
      {/* Language and Region */}
      <html lang="es" />
      <meta httpEquiv="content-language" content="es-PE" />
      <meta name="geo.region" content="PE" />
      <meta name="geo.placename" content="Lima, Perú" />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
      
      {/* Alternate Language */}
      <link rel="alternate" hrefLang="es-PE" href={url} />
      <link rel="alternate" hrefLang="es" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${fullTitle} - Escuela de Filosofía en Perú`} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_PE" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${fullTitle} - Escuela de Filosofía en Perú`} />
      <meta name="twitter:site" content="@NuevaAcropolisPE" />
      <meta name="twitter:creator" content="@NuevaAcropolisPE" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1B5E3C" />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
      <meta name="application-name" content={SITE_NAME} />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      
      {/* Structured Data - Website */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      
      {/* Structured Data - WebPage */}
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      
      {/* Structured Data - Breadcrumb */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {/* Structured Data - FAQ (if provided) */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      
      {/* Custom Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Page-specific SEO configurations with rich data
export const seoConfig = {
  home: {
    title: "Escuela de Filosofía",
    description: "Nueva Acrópolis Perú: Escuela de Filosofía práctica con más de 65 sedes. Cursos de autoconocimiento, actividades culturales y voluntariado. Inscríbete al curso Conócete a Ti Mismo.",
    keywords: "escuela de filosofía perú, nueva acrópolis, filosofía práctica, conócete a ti mismo, autoconocimiento, desarrollo personal, voluntariado lima, cursos filosofía",
    faq: [
      {
        question: "¿Qué es Nueva Acrópolis?",
        answer: "Nueva Acrópolis es una organización filosófica, cultural y de voluntariado presente en más de 60 países. En Perú, funciona como una Escuela de Filosofía práctica donde puedes desarrollar autoconocimiento y participar en actividades culturales y de voluntariado."
      },
      {
        question: "¿Cómo puedo inscribirme en los cursos de filosofía?",
        answer: "Puedes inscribirte visitando nuestra página de inscripción o contactando directamente a la sede más cercana. El curso principal es 'Conócete a Ti Mismo', un programa introductorio de filosofía práctica."
      },
      {
        question: "¿Cuántas sedes tiene Nueva Acrópolis en Perú?",
        answer: "Nueva Acrópolis cuenta con más de 65 sedes distribuidas en todo el Perú, incluyendo Lima, Arequipa, Cusco, Trujillo y otras ciudades principales."
      }
    ]
  },
  filosofia: {
    title: "Filosofía Práctica - Cursos y Enseñanzas",
    description: "Aprende filosofía aplicada a la vida diaria. Curso Conócete a Ti Mismo: autoconocimiento, desarrollo del carácter y sabiduría práctica. Maestros de Oriente y Occidente.",
    keywords: "filosofía práctica perú, curso conócete a ti mismo, autoconocimiento, desarrollo personal, sabiduría práctica, escuela filosofía lima, filosofía oriental occidental",
    faq: [
      {
        question: "¿Qué es el curso Conócete a Ti Mismo?",
        answer: "Es un curso introductorio de filosofía práctica que explora el autoconocimiento a través de las enseñanzas de grandes maestros de Oriente y Occidente. Incluye temas como la naturaleza humana, el desarrollo del carácter y herramientas para la vida cotidiana."
      },
      {
        question: "¿Necesito conocimientos previos de filosofía?",
        answer: "No se requieren conocimientos previos. Nuestros cursos están diseñados para personas de todas las edades y formaciones que buscan herramientas prácticas para mejorar su vida."
      }
    ]
  },
  cultura: {
    title: "Cultura y Arte - Actividades Culturales",
    description: "Actividades culturales en Lima y Perú: cine forums, conversatorios, ferias del libro, talleres de arte y música clásica. Conectamos civilizaciones antiguas con el presente.",
    keywords: "actividades culturales lima, cine forum perú, talleres arte, música clásica, historia civilizaciones, encuentros culturales, nueva acrópolis cultura",
    faq: [
      {
        question: "¿Qué tipo de actividades culturales organizan?",
        answer: "Organizamos cine forums, conversatorios, ferias del libro, talleres de arte (pintura, escultura, dibujo), talleres de música clásica, visitas a museos y recorridos históricos por el patrimonio cultural."
      },
      {
        question: "¿Las actividades culturales son gratuitas?",
        answer: "Muchas de nuestras actividades culturales son gratuitas o tienen un costo accesible. Consulta el calendario de cada sede para conocer los próximos eventos."
      }
    ]
  },
  voluntariado: {
    title: "Voluntariado Filosófico - Programas Sociales",
    description: "Voluntariado con propósito en Perú: programa Yo Amo la Lectura, atención al adulto mayor, cuidado del medio ambiente y acción humanitaria. Únete y transforma.",
    keywords: "voluntariado perú, yo amo la lectura, voluntariado adulto mayor, voluntariado medio ambiente, acción social lima, voluntariado filosófico, nueva acrópolis voluntariado",
    faq: [
      {
        question: "¿Cuáles son los programas de voluntariado disponibles?",
        answer: "Tenemos seis programas principales: Yo Amo la Lectura (fomento de lectura en niños), Adulto Mayor (compañía y actividades para personas mayores), Humanitario Social (apoyo a comunidades vulnerables), Medio Ambiente (limpieza y educación ambiental), Formación de Voluntarios y Talleres Artísticos."
      },
      {
        question: "¿Cómo puedo ser voluntario?",
        answer: "Puedes registrarte como voluntario a través de nuestra página de inscripción o contactando a la sede más cercana. No necesitas experiencia previa, solo disposición para ayudar."
      }
    ]
  },
  quienesSomos: {
    title: "¿Qué es Nueva Acrópolis? - Historia y Principios",
    description: "Conoce Nueva Acrópolis: fundada en 1957 por Jorge Ángel Livraga. Organización filosófica internacional en más de 60 países. Principios de fraternidad, conocimiento y desarrollo humano.",
    keywords: "nueva acrópolis historia, jorge livraga fundador, organización filosófica internacional, principios nueva acrópolis, escuela filosofía historia, delia steinberg",
    faq: [
      {
        question: "¿Quién fundó Nueva Acrópolis?",
        answer: "Nueva Acrópolis fue fundada en 1957 en Buenos Aires, Argentina, por el filósofo Jorge Ángel Livraga Rizzi (1930-1991). Su visión fue crear una escuela de filosofía práctica basada en la tradición clásica."
      },
      {
        question: "¿Cuáles son los principios de Nueva Acrópolis?",
        answer: "Nuestros tres principios fundamentales son: Fraternidad (respeto a la dignidad humana), Conocimiento (amor a la sabiduría a través del estudio comparado) y Desarrollo (realización del potencial humano en armonía con la naturaleza)."
      },
      {
        question: "¿En cuántos países está presente Nueva Acrópolis?",
        answer: "Nueva Acrópolis tiene presencia en más de 60 países de los cinco continentes, con miles de miembros activos participando en actividades de filosofía, cultura y voluntariado."
      }
    ]
  },
  sedes: {
    title: "Sedes en Perú - Encuentra tu Escuela de Filosofía",
    description: "Encuentra la sede de Nueva Acrópolis más cercana. Más de 65 ubicaciones en Lima, Arequipa, Cusco, Trujillo y todo el Perú. Horarios, direcciones y contacto.",
    keywords: "sedes nueva acrópolis perú, escuela filosofía lima, nueva acrópolis arequipa, nueva acrópolis cusco, nueva acrópolis trujillo, direcciones sedes, horarios",
    faq: [
      {
        question: "¿Dónde están ubicadas las sedes de Nueva Acrópolis?",
        answer: "Tenemos más de 65 sedes en todo el Perú, incluyendo Lima (sede principal en Barranco), Arequipa, Cusco, Trujillo, Chiclayo, Piura, Huancayo y muchas otras ciudades."
      },
      {
        question: "¿Cómo puedo contactar a una sede específica?",
        answer: "En nuestra página de sedes puedes encontrar la dirección, WhatsApp y redes sociales de cada ubicación. También puedes usar el buscador para encontrar la sede más cercana."
      }
    ]
  },
  inscripcion: {
    title: "Inscríbete - Cursos de Filosofía Práctica",
    description: "Inscríbete en Nueva Acrópolis Perú. Inicia tu camino en la filosofía práctica con el curso Conócete a Ti Mismo. Formulario de inscripción y contacto directo con tu sede.",
    keywords: "inscripción nueva acrópolis, curso filosofía inscripción, conócete a ti mismo inscribirse, formulario inscripción, matrícula escuela filosofía",
  },
};
