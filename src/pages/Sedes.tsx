import { SedesDirectory } from "@/components/SedesDirectory";
import { SEO, seoConfig } from "@/components/SEO";
import { PageLayout } from "@/components/layouts";

const Sedes = () => {
  return (
    <>
      <SEO 
        {...seoConfig.sedes}
        url="https://acropolisperu.org/sedes"
        breadcrumbs={[{ name: "Sedes en Perú", url: "https://acropolisperu.org/sedes" }]}
        faq={seoConfig.sedes.faq}
      />
      <PageLayout>
        <SedesDirectory />
      </PageLayout>
    </>
  );
};

export default Sedes;
