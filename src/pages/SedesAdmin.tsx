import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SedesAdminPanel } from "@/components/SedesAdminPanel";

const SedesAdmin = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <SedesAdminPanel />
      </main>
      <Footer />
    </div>
  );
};

export default SedesAdmin;
