import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Filosofia from "./pages/Filosofia";
import Cultura from "./pages/Cultura";
import Voluntariado from "./pages/Voluntariado";
import Inscripcion from "./pages/Inscripcion";
import QuienesSomos from "./pages/QuienesSomos";
import Sedes from "./pages/Sedes";
import SedesAdmin from "./pages/SedesAdmin";
import UsersAdmin from "./pages/UsersAdmin";
import Auth from "./pages/Auth";
import DesignSystem from "./pages/DesignSystem";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/filosofia" element={<Filosofia />} />
            <Route path="/cultura" element={<Cultura />} />
            <Route path="/voluntariado" element={<Voluntariado />} />
            <Route path="/inscripcion" element={<Inscripcion />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/sedes" element={<Sedes />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/sedes/admin" element={<SedesAdmin />} />
            <Route path="/admin/users" element={<UsersAdmin />} />
            <Route path="/design-system" element={<DesignSystem />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
