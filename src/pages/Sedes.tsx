import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SedesDirectory } from "@/components/SedesDirectory";

const Sedes = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <SedesDirectory />
      </main>
      <Footer />
    </div>
  );
};

export default Sedes;
