import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { UsersAdminPanel } from "@/components/UsersAdminPanel";
import { ProtectedRoute } from "@/components/ProtectedRoute";

const UsersAdmin = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <UsersAdminPanel />
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default UsersAdmin;
