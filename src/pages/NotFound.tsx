import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Página no encontrada"
        description="La página que buscas no existe. Regresa a la página principal de Nueva Acrópolis Perú."
        noindex={true}
      />
      <div className="flex min-h-screen items-center justify-center bg-gradient-subtle px-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <span className="text-8xl md:text-9xl font-bold text-primary/20">404</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Página no encontrada
          </h1>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            La página que buscas no existe o ha sido movida. 
            Te invitamos a explorar nuestro sitio desde el inicio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="default" size="lg">
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Ir al Inicio
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
              <span className="flex items-center gap-2 cursor-pointer">
                <ArrowLeft className="h-4 w-4" />
                Volver Atrás
              </span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
