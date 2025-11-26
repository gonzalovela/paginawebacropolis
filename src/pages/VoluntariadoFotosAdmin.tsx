import { Navigation } from "@/components/Navigation";
import { VoluntariadoFotosAdmin } from "@/components/VoluntariadoFotosAdmin";
import { Footer } from "@/components/Footer";

const VoluntariadoFotosAdminPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <VoluntariadoFotosAdmin />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VoluntariadoFotosAdminPage;
