import { Hero } from "@/components/Hero";
import { ThreePrinciples } from "@/components/ThreePrinciples";
import { ThreePillars } from "@/components/ThreePillars";
import { CourseSection } from "@/components/CourseSection";
import { SEO, seoConfig } from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PageLayout } from "@/components/layouts";

const Index = () => {
  const { elementRef: principlesRef, isVisible: principlesVisible } = useScrollAnimation();
  const { elementRef: pillarsRef, isVisible: pillarsVisible } = useScrollAnimation();
  const { elementRef: courseRef, isVisible: courseVisible } = useScrollAnimation();

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
        <Hero />
        <div 
          ref={principlesRef}
          className={`-mt-8 transition-all duration-1000 ${
            principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <ThreePrinciples />
        </div>
        <div 
          ref={pillarsRef}
          className={`transition-all duration-1000 ${
            pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <ThreePillars />
        </div>
        <div 
          ref={courseRef}
          className={`transition-all duration-1000 ${
            courseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <CourseSection />
        </div>
      </PageLayout>
    </>
  );
};

export default Index;
