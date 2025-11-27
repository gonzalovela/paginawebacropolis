import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { 
  Smartphone, 
  Download, 
  CheckCircle2, 
  Share, 
  PlusSquare, 
  MoreVertical,
  Wifi,
  Zap,
  Bell
} from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const Instalar = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Detect platform
    const userAgent = navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));
    setIsAndroid(/android/.test(userAgent));

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for successful install
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  const features = [
    {
      icon: Zap,
      title: "Acceso Rápido",
      description: "Abre la app directamente desde tu pantalla de inicio"
    },
    {
      icon: Wifi,
      title: "Funciona Sin Conexión",
      description: "Accede a contenido guardado incluso sin internet"
    },
    {
      icon: Bell,
      title: "Experiencia Nativa",
      description: "Se siente como una app real en tu dispositivo"
    }
  ];

  return (
    <>
      <SEO 
        title="Instalar App - Nueva Acrópolis"
        description="Instala la app de Nueva Acrópolis en tu dispositivo. Acceso rápido, funciona sin conexión y experiencia nativa."
        url="https://acropolisperu.org/instalar"
        noindex
      />
      <div className="min-h-screen">
        <Navigation />
        
        <main className="pt-24 pb-16">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
                <Smartphone className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Instala Nueva Acrópolis
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Lleva la filosofía contigo. Instala nuestra app en tu dispositivo para acceso rápido y sin conexión.
              </p>
            </div>

            {/* Already Installed */}
            {isInstalled && (
              <Card className="p-8 text-center bg-primary/5 border-primary/20 mb-12">
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  ¡App Instalada!
                </h2>
                <p className="text-foreground/70">
                  Ya tienes Nueva Acrópolis instalada en tu dispositivo. Búscala en tu pantalla de inicio.
                </p>
              </Card>
            )}

            {/* Install Button (Android/Desktop with prompt) */}
            {!isInstalled && deferredPrompt && (
              <Card className="p-8 text-center mb-12 bg-gradient-to-br from-primary/10 to-secondary/10">
                <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Instalación Rápida
                </h2>
                <Button 
                  size="lg" 
                  onClick={handleInstallClick}
                  className="text-lg px-8 py-6"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Instalar Ahora
                </Button>
              </Card>
            )}

            {/* iOS Instructions */}
            {!isInstalled && isIOS && (
              <Card className="p-6 md:p-8 mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Share className="w-6 h-6 text-primary" />
                  Instrucciones para iPhone/iPad
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Toca el botón Compartir</p>
                      <p className="text-sm text-foreground/60">En Safari, toca el ícono <Share className="inline w-4 h-4" /> en la barra inferior</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Selecciona "Agregar a Inicio"</p>
                      <p className="text-sm text-foreground/60">Desliza hacia abajo y toca <PlusSquare className="inline w-4 h-4" /> Agregar a pantalla de inicio</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Confirma "Agregar"</p>
                      <p className="text-sm text-foreground/60">Toca "Agregar" en la esquina superior derecha</p>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Android Instructions (fallback when no prompt) */}
            {!isInstalled && isAndroid && !deferredPrompt && (
              <Card className="p-6 md:p-8 mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <MoreVertical className="w-6 h-6 text-primary" />
                  Instrucciones para Android
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Abre el menú del navegador</p>
                      <p className="text-sm text-foreground/60">Toca los tres puntos <MoreVertical className="inline w-4 h-4" /> en la esquina superior</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Selecciona "Instalar app" o "Agregar a inicio"</p>
                      <p className="text-sm text-foreground/60">Busca la opción para agregar a la pantalla de inicio</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Confirma la instalación</p>
                      <p className="text-sm text-foreground/60">Toca "Instalar" o "Agregar" para confirmar</p>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                ¿Por qué instalar la app?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-foreground/60">{feature.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* App Preview */}
            <Card className="p-6 md:p-8 bg-gradient-subtle">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                  <img 
                    src="/logo-escuela-filosofia.png" 
                    alt="Logo Nueva Acrópolis"
                    className="w-16 h-16 object-contain brightness-0 invert"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-foreground mb-1">Nueva Acrópolis Perú</h3>
                  <p className="text-sm text-foreground/60 mb-2">Escuela de Filosofía</p>
                  <div className="flex items-center justify-center md:justify-start gap-1 text-xs text-foreground/50">
                    <span>★★★★★</span>
                    <span>Filosofía • Cultura • Voluntariado</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Instalar;