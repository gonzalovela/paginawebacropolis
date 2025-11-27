import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SedesAdminPanel } from "@/components/SedesAdminPanel";
import { ProtectedAdminRoute } from "@/components/ProtectedAdminRoute";

const SedesAdmin = () => {
  return (
    <ProtectedAdminRoute requiredRole="editor">
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <SedesAdminPanel />
        </main>
        <Footer />
      </div>
    </ProtectedAdminRoute>
  );
};

export default SedesAdmin;
