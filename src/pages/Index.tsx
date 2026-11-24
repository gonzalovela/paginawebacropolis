import HomeSections from "@/components/home/HomeSections";
import { SEO, seoConfig } from "@/components/SEO";
import { PageLayout } from "@/components/layouts";

const Index = () => {
  // Course structured data for rich snippets
  const courseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Conócete a Ti Mismo",
    "description": "Curso introductorio de filosofía práctica para el autoconocimiento y desarrollo personal.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Nueva Acrópolis Perú",
      "sameAs": "https://acropolisperu.org"
    },
    "educationalLevel": "Beginner",
    "inLanguage": "es",
    "isAccessibleForFree": false,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "onsite",
      "courseWorkload": "PT16H"
    }
  };

  return (
    <>
      <SEO 
        {...seoConfig.home}
        url="https://acropolisperu.org/"
        structuredData={courseStructuredData}
        faq={seoConfig.home.faq}
      />
      <PageLayout>
        <HomeSections />
      </PageLayout>
    </>
  );
};

export default Index;
