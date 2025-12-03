import { WhoWeAre } from "@/components/WhoWeAre";
import { SEO, seoConfig } from "@/components/SEO";
import { PageLayout } from "@/components/layouts";

const QuienesSomos = () => {
  return (
    <>
      <SEO 
        {...seoConfig.quienesSomos}
        url="https://acropolisperu.org/quienes-somos"
        breadcrumbs={[{ name: "¿Qué es Nueva Acrópolis?", url: "https://acropolisperu.org/quienes-somos" }]}
        faq={seoConfig.quienesSomos.faq}
      />
      <PageLayout withTopPadding>
        <WhoWeAre />
      </PageLayout>
    </>
  );
};

export default QuienesSomos;
