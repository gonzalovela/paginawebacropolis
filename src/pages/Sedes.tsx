import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SedesDirectory } from "@/components/SedesDirectory";
import { SEO, seoConfig } from "@/components/SEO";

const Sedes = () => {
  return (
    <>
      <SEO 
        {...seoConfig.sedes}
        url="https://acropolisperu.org/sedes"
      />
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <SedesDirectory />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Sedes;
