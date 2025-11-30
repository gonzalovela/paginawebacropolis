import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Filosofia from "./pages/Filosofia";
import Cultura from "./pages/Cultura";
import Voluntariado from "./pages/Voluntariado";
import Inscripcion from "./pages/Inscripcion";
import Gracias from "./pages/Gracias";
import QuienesSomos from "./pages/QuienesSomos";
import Sedes from "./pages/Sedes";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import DesignSystem from "./pages/DesignSystem";
import Instalar from "./pages/Instalar";
import AvisoLegal from "./pages/AvisoLegal";
import Privacidad from "./pages/Privacidad";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
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
              <Route path="/gracias" element={<Gracias />} />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/sedes" element={<Sedes />} />
              <Route path="/instalar" element={<Instalar />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/design-system" element={<DesignSystem />} />
              <Route path="/aviso-legal" element={<AvisoLegal />} />
              <Route path="/privacidad" element={<Privacidad />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
