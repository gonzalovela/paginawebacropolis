import { WhoWeAre } from "@/components/WhoWeAre";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo-escuela-filosofia.png";

const QuienesSomos = () => {
  return (
    <div className="min-h-screen">
      {/* Header with logo and back button */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img 
              src={logo} 
              alt="Nueva Acrópolis - Escuela de Filosofía" 
              className="h-12 md:h-14"
            />
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden sm:inline">Volver</span>
          </Link>
        </div>
      </header>

      {/* Main content with padding for fixed header */}
      <main className="pt-24">
        <WhoWeAre />
      </main>

      <Footer />
    </div>
  );
};

export default QuienesSomos;
