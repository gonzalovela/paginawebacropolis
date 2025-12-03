import { useEffect } from "react";
import { SedesDirectory } from "@/components/SedesDirectory";
import { SEO, seoConfig } from "@/components/SEO";
import { PageLayout } from "@/components/layouts";

const Sedes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        {...seoConfig.sedes}
        url="https://acropolisperu.org/sedes"
        breadcrumbs={[{ name: "Sedes en Perú", url: "https://acropolisperu.org/sedes" }]}
        faq={seoConfig.sedes.faq}
      />
      <PageLayout withTopPadding>
        <SedesDirectory />
      </PageLayout>
    </>
  );
};

export default Sedes;
