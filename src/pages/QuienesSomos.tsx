import { Navigation } from "@/components/Navigation";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Footer } from "@/components/Footer";
import { SEO, seoConfig } from "@/components/SEO";

const QuienesSomos = () => {
  return (
    <>
      <SEO 
        {...seoConfig.quienesSomos}
        url="https://acropolisperu.org/quienes-somos"
        breadcrumbs={[{ name: "¿Qué es Nueva Acrópolis?", url: "https://acropolisperu.org/quienes-somos" }]}
        faq={seoConfig.quienesSomos.faq}
      />
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <WhoWeAre />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default QuienesSomos;
