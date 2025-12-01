import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-escuela-filosofia.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackButtonClick } from "@/utils/analytics";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/quienes-somos", label: "Quiénes Somos" },
    { to: "/filosofia", label: "Filosofía" },
    { to: "/cultura", label: "Cultura" },
    { to: "/voluntariado", label: "Voluntariado" },
    { to: "/sedes", label: "Sedes" },
    { to: "/inscripcion", label: "Inscripción" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-background border-b border-border">
        <div className="container px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <img 
                src={logo} 
                alt="Nueva Acrópolis - Escuela de Filosofía" 
                className="h-10 sm:h-12 md:h-14"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => trackButtonClick('Navigation Desktop', link.label, link.to)}
                  className={cn(
                    "px-3 xl:px-4 py-2 rounded-lg font-medium transition-all hover:bg-primary/10 text-sm xl:text-base",
                    isActive(link.to)
                      ? "text-primary bg-primary/10"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden relative z-[110]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay - Separate from header for proper stacking */}
      {isOpen && (
        <div 
          className="fixed inset-0 top-16 sm:top-20 z-[99] lg:hidden"
          style={{ backgroundColor: 'hsl(var(--background))' }}
        >
          <nav className="container px-4 sm:px-6 py-6 h-full overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => {
                    trackButtonClick('Navigation Mobile', link.label, link.to);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "px-4 py-4 rounded-xl font-semibold transition-all text-lg",
                    isActive(link.to)
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:text-primary hover:bg-muted active:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
