import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { UsersAdminPanel } from "@/components/UsersAdminPanel";
import { ProtectedAdminRoute } from "@/components/ProtectedAdminRoute";

const UsersAdmin = () => {
  return (
    <ProtectedAdminRoute requiredRole="admin">
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          <UsersAdminPanel />
        </main>
        <Footer />
      </div>
    </ProtectedAdminRoute>
  );
};

export default UsersAdmin;
