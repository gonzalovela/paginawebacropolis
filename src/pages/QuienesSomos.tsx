import { Navigation } from "@/components/Navigation";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Footer } from "@/components/Footer";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <WhoWeAre />
      </main>
      <Footer />
    </div>
  );
};

export default QuienesSomos;
