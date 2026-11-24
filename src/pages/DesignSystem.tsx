import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Palette, Heart, ArrowRight, Sparkles, Users, Compass } from "lucide-react";
import { SparkleWord } from "@/components/PageHeroBanner";

const DesignSystem = () => {
  const colors = [
    { name: "Primary (Verde Heket)", value: "hsl(var(--primary))", hex: "#086357", usage: "Main brand color, primary buttons, headings" },
    { name: "Secondary (Turquesa Kefer)", value: "hsl(var(--secondary))", hex: "#009485", usage: "Secondary actions, accents" },
    { name: "Accent (Naranja Amón)", value: "hsl(var(--accent))", hex: "#F39300", usage: "Highlights, CTAs, important elements" },
    { name: "Yellow (Amarillo Helios)", value: "hsl(var(--yellow))", hex: "#FFCA00", usage: "Warm accents, positive emphasis" },
    { name: "Muted (Gris Delfos)", value: "hsl(var(--muted))", hex: "#D8D9DB", usage: "Backgrounds, subtle elements" },
  ];

  const gradients = [
    { name: "Hero Gradient", class: "bg-gradient-hero", usage: "Hero sections, primary banners" },
    { name: "Warm Gradient", class: "bg-gradient-warm", usage: "Call-to-action sections, warm atmospheres" },
    { name: "Subtle Gradient", class: "bg-gradient-subtle", usage: "Section backgrounds, subtle depth" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border py-8 bg-gradient-hero">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
            Sistema de Diseño
          </h1>
          <p className="text-lg text-primary-foreground/80">
            Nueva Acrópolis Perú - Escuela de Filosofía
          </p>
        </div>
      </header>

      <div className="container px-4 md:px-6 py-12 space-y-16">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-4">Introducción</h2>
          <p className="text-foreground/80 leading-relaxed max-w-3xl">
            Este sistema de diseño está basado en el Manual de Marca OINA 2025 y define todos los elementos visuales 
            de Nueva Acrópolis Perú. Siguiendo los principios de diseño cálido, claro y vertical, cada componente 
            está diseñado para reflejar nuestra identidad filosófica y humanista.
          </p>
        </section>

        {/* Línea Visual 2026 */}
        <section>
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-3">Línea visual 2026</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 leading-tight">Títulos <SparkleWord>editoriales</SparkleWord></h2>
          <p className="text-foreground/80 max-w-3xl mb-10">Kicker en mayúsculas + título grande con palabra clave en degradado dorado (componente SparkleWord). Se usa en héroes y encabezados de sección de todas las páginas.</p>

          <h3 className="text-xl font-semibold text-primary mb-4">Iconos en círculo dorado</h3>
          <div className="flex gap-4 mb-10">
            {[Sparkles, Users, Compass, Heart].map((I, i) => (
              <div key={i} className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <I className="w-5 h-5 text-amber-600" />
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-primary mb-4">Tarjetas e imágenes</h3>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4"><BookOpen className="w-5 h-5 text-amber-600" /></div>
              <h4 className="font-semibold text-primary mb-2">Tarjeta estándar</h4>
              <p className="text-sm text-foreground/70">rounded-2xl, borde sutil, elevación suave al pasar el cursor. Sin bordes animados.</p>
            </div>
            <div className="rounded-2xl p-6 bg-amber-500/5 border border-amber-500/20">
              <h4 className="font-semibold text-primary mb-2">Panel destacado</h4>
              <p className="text-sm text-foreground/70">Fondo dorado claro para información clave (no usar bloques oscuros que opaquen el contenido).</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-primary mb-4">Botones y badges</h3>
          <div className="rounded-2xl bg-gradient-hero p-6 flex flex-wrap items-center gap-4">
            <Button variant="secondary" size="lg" className="shadow-lg shadow-secondary/30">Inscríbete <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-primary-foreground/10">Conocer más</Button>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground">Badge translúcido</span>
          </div>
          <p className="text-sm text-foreground/60 mt-3">Botones planos, sin animaciones de borde. Imágenes siempre con bordes redondeados (rounded-2xl).</p>
        </section>

        {/* Color Palette */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Paleta de Colores</h2>
          <p className="text-foreground/80 mb-8 max-w-3xl">
            Nuestra paleta de colores está extraída directamente del Manual de Marca 2025, 
            utilizando los colores institucionales que nos identifican.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((color, index) => (
              <Card key={index} className="overflow-hidden">
                <div 
                  className="h-32 w-full"
                  style={{ backgroundColor: color.value }}
                />
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-primary">{color.name}</h3>
                  <p className="text-sm text-muted-foreground font-mono">{color.hex}</p>
                  <p className="text-sm text-foreground/70">{color.usage}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Gradients */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Gradientes</h2>
          <p className="text-foreground/80 mb-8 max-w-3xl">
            Gradientes inspirados en las curvas suaves del anagrama de Nueva Acrópolis, 
            creando transiciones armoniosas y envolventes.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {gradients.map((gradient, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`h-32 w-full ${gradient.class}`} />
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-primary">{gradient.name}</h3>
                  <p className="text-sm text-foreground/70">{gradient.usage}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Tipografía</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-bold text-primary">Heading 1</h1>
              <p className="text-sm text-muted-foreground">text-5xl font-bold</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-primary">Heading 2</h2>
              <p className="text-sm text-muted-foreground">text-4xl font-bold</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">Heading 3</h3>
              <p className="text-sm text-muted-foreground">text-3xl font-bold</p>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-foreground">
                Body Large - La filosofía es un camino de transformación interior que nos ayuda a comprendernos mejor.
              </p>
              <p className="text-sm text-muted-foreground">text-lg</p>
            </div>
            <div className="space-y-2">
              <p className="text-base text-foreground">
                Body Regular - Nueva Acrópolis promueve una filosofía práctica aplicada a la vida diaria.
              </p>
              <p className="text-sm text-muted-foreground">text-base</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Botones</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default" size="lg">
              <BookOpen className="mr-2 h-5 w-5" />
              Primary Button
            </Button>
            <Button variant="secondary" size="lg">
              Secondary Button
            </Button>
            <Button variant="outline" size="lg">
              Outline Button
            </Button>
            <Button variant="default" size="lg">
              With Icon
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Icons */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Iconografía</h2>
          <p className="text-foreground/80 mb-8 max-w-3xl">
            Utilizamos Lucide Icons con un estilo minimalista, inspirado en las curvas suaves del anagrama oficial.
          </p>
          <div className="flex flex-wrap gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-2">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <p className="text-sm text-foreground/70">Filosofía</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-2">
                <Palette className="h-8 w-8 text-secondary" />
              </div>
              <p className="text-sm text-foreground/70">Cultura</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-2">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <p className="text-sm text-foreground/70">Voluntariado</p>
            </div>
          </div>
        </section>

        {/* Component Cards */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Tarjetas y Cards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Card Título</h3>
              <p className="text-foreground/70">
                Descripción de la tarjeta con contenido relevante para el usuario.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 mb-4">
                <Palette className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Card con Hover</h3>
              <p className="text-foreground/70">
                Efecto de elevación al pasar el cursor sobre la tarjeta.
              </p>
            </Card>

            <Card className="relative overflow-hidden p-6">
              <div className="absolute inset-0 bg-accent opacity-5" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Card con Fondo</h3>
                <p className="text-foreground/70">
                  Fondo sutil con color de acento para destacar.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Tone of Communication */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Tono de Comunicación</h2>
          <p className="text-foreground/80 mb-8 max-w-3xl">
            Basado en el Manual de Marca (página 15), nuestra comunicación debe ser:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-xl font-bold text-primary mb-3">🔥 Cálido</h3>
              <p className="text-foreground/70">
                Humano, cercano, fraternal. Cada mensaje debe transmitir calidez y esperanza en el ser humano.
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-l-secondary">
              <h3 className="text-xl font-bold text-primary mb-3">💎 Claro</h3>
              <p className="text-foreground/70">
                Simple, directo, bello. Palabras justas que hablan con el ejemplo. Una imagen vale más que mil palabras.
              </p>
            </Card>
            <Card className="p-6 border-l-4 border-l-accent">
              <h3 className="text-xl font-bold text-primary mb-3">⬆️ Vertical</h3>
              <p className="text-foreground/70">
                Inspirador, elevador. Mensajes que motivan a ser mejores, a construir y valorar lo mejor de cada momento.
              </p>
            </Card>
          </div>
        </section>

        {/* Spacing & Grid */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-6">Espaciado y Grid</h2>
          <p className="text-foreground/80 mb-8 max-w-3xl">
            Sistema de espaciado basado en múltiplos de 8px para mantener consistencia y ritmo visual.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-primary" />
              <span className="text-sm text-foreground/70">8px - Espaciado mínimo</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary" />
              <span className="text-sm text-foreground/70">16px - Espaciado pequeño</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-primary" />
              <span className="text-sm text-foreground/70">24px - Espaciado medio</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 h-32 bg-primary" />
              <span className="text-sm text-foreground/70">32px - Espaciado grande</span>
            </div>
          </div>
        </section>

        {/* Back to home */}
        <section className="pt-12 border-t border-border">
          <Button variant="default" size="lg" asChild>
            <a href="/">
              Volver al inicio
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default DesignSystem;
