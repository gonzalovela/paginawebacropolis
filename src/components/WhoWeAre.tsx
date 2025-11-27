import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, BookOpen, Users, Sparkles, Globe, Building2, HandHeart, Trophy } from "lucide-react";
import { ParallaxImage } from "@/components/ParallaxImage";
import { ThreePillars } from "@/components/ThreePillars";
import { OptimizedImage } from "@/components/OptimizedImage";
import bannerImage from "@/assets/banner-quienes-somos.jpg";
import jorgeLivragaPortrait from "@/assets/jorge-livraga-real.jpg";
import deliaSteinbergPortrait from "@/assets/delia-steinberg-guzman-portrait.jpg";
import carlosAdelantadoPortrait from "@/assets/carlos-adelantado-real.jpg";
import beatrizDiezCansecoPortrait from "@/assets/beatriz-diez-canseco-portrait.jpg";
import philosophyImage from "@/assets/philosophy-study-group.jpg";
import acropolisImage from "@/assets/acropolis-athens-elevated-clean.jpg";

export const WhoWeAre = () => {
  const principles = [
    {
      icon: Heart,
      title: "Fraternidad",
      description: "Promover un ideal de fraternidad basado en el respeto a la dignidad humana, más allá de cualquier diferencia de género, cultura, religión, clase social, etc.",
      detail: "La fuerza de este ideal reside más en lo que nos une que en lo que nos separa, basándose en valores universales que trascienden prácticas locales y promueven el respeto por los derechos humanos y principios éticos comunes."
    },
    {
      icon: BookOpen,
      title: "Conocimiento",
      description: "Fomentar el amor a la sabiduría a través del estudio comparado de filosofías, religiones, ciencias y artes, para lograr un conocimiento del ser humano, la naturaleza y el universo.",
      detail: "La filosofía puede reunir las fuentes del pasado y del presente en una visión global e integradora, convirtiéndose en una fuerza real de progreso que explora los caminos de la vida y profundiza en sus fines últimos."
    },
    {
      icon: Sparkles,
      title: "Desarrollo",
      description: "Desarrollar lo mejor del ser humano promoviendo la realización de cada persona como individuo y como miembro activo de la sociedad. Actuar en armonía con la Naturaleza para mejorar el mundo.",
      detail: "El logro de la armonía entre pensamiento, sentimiento y acción es un objetivo para cada ser humano. El desarrollo equilibrado de nuestras mejores cualidades es la garantía de avanzar hacia un mundo mejor."
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      {/* Hero Banner */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <ParallaxImage src={bannerImage} alt="Grupo de estudiantes y profesores de filosofía de Nueva Acrópolis Perú en actividad comunitaria - Escuela de Filosofía" speed={0.3} isHero={true} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[1]" />
        
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 md:mb-6 animate-fade-in-up">
            ¿Qué es Nueva Acrópolis?
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up px-2" style={{ animationDelay: "0.2s" }}>
            Una Escuela de Filosofía que promueve la cultura y practica el voluntariado
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
            
            {/* Video Section */}
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/NgxhR_ppPmI"
                  title="¿Qué es Nueva Acrópolis?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Introduction */}
            <div className="text-center max-w-4xl mx-auto space-y-6 px-2">
              <p className="text-xl sm:text-2xl font-semibold text-foreground">
                Propone un ideal de valores permanentes para contribuir a la evolución individual y colectiva.
              </p>
            </div>

            {/* Symbolism */}
            <Card className="overflow-hidden bg-gradient-subtle">
              <div className="space-y-0">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground px-4 sm:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6">
                  El Simbolismo de Nueva Acrópolis
                </h3>
                
                {/* Wide horizontal image */}
                <div className="w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
                  <OptimizedImage 
                    src={acropolisImage} 
                    alt="Vista panorámica de la Acrópolis de Atenas desde la ciudad baja - Simbolismo de Nueva Acrópolis como ciudad alta del pensamiento filosófico" 
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full"
                  />
                </div>
                
                {/* Text below image */}
                <div className="px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10">
                  <div className="max-w-4xl mx-auto space-y-4 text-foreground/70 leading-relaxed text-base sm:text-lg">
                    <p>
                      En la antigua Grecia, la <strong className="text-foreground">Acrópolis</strong> designaba la parte más alta de la ciudad, 
                      donde se establecía el contacto entre lo visible y lo invisible.
                    </p>
                    <p>
                      <span className="text-secondary font-semibold">"Acro"</span> significa buscar lo mejor en uno mismo, 
                      <span className="text-secondary font-semibold"> "polis"</span> implica compromiso con la sociedad, 
                      y <span className="text-secondary font-semibold"> "nueva"</span> significa dar forma contemporánea 
                      a estos valores filosóficos atemporales.
                    </p>
                    <p className="text-lg sm:text-xl font-semibold text-foreground pt-4">
                      Nuestro mundo necesita nuevas acrópolis, no hechas de piedra sino de seres humanos, 
                      elevadas en el corazón de nuestras ciudades para crecer internamente y restablecer
                      los lazos profundos que pueden unirnos.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Principles */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground text-center mb-8 sm:mb-12">
                Nuestros Principios
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <Card key={index} className="p-5 sm:p-6 md:p-8 text-center hover:shadow-medium transition-all">
                      <div className="mb-4 sm:mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl sm:rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                          <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                        {principle.title}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground/70 leading-relaxed mb-3 sm:mb-4">
                        {principle.description}
                      </p>
                      <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed">
                        {principle.detail}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Leadership Tabs */}
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">
                  Fundador y Dirección
                </h2>
                <p className="text-foreground/70 text-base sm:text-lg px-2">
                  Historia y dirección de la Escuela de Filosofía
                </p>
              </div>

              <Tabs defaultValue="fundador" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 sm:mb-8 h-auto gap-1 sm:gap-2 p-1">
                  <TabsTrigger value="fundador" className="flex flex-col gap-0.5 sm:gap-1 py-2 sm:py-3 px-1.5 sm:px-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary min-h-[52px] sm:min-h-[60px]">
                    <span className="text-[9px] sm:text-xs md:text-sm font-semibold leading-tight">Fundador</span>
                    <span className="text-[8px] sm:text-xs text-muted-foreground leading-tight hidden xs:block">Jorge Á. Livraga</span>
                  </TabsTrigger>
                  <TabsTrigger value="delia" className="flex flex-col gap-0.5 sm:gap-1 py-2 sm:py-3 px-1.5 sm:px-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary min-h-[52px] sm:min-h-[60px]">
                    <span className="text-[9px] sm:text-xs md:text-sm font-semibold leading-tight">Pres. Honoraria</span>
                    <span className="text-[8px] sm:text-xs text-muted-foreground leading-tight hidden xs:block">Delia Steinberg</span>
                  </TabsTrigger>
                  <TabsTrigger value="internacional" className="flex flex-col gap-0.5 sm:gap-1 py-2 sm:py-3 px-1.5 sm:px-2 data-[state=active]:bg-secondary/10 data-[state=active]:text-secondary min-h-[52px] sm:min-h-[60px]">
                    <span className="text-[9px] sm:text-xs md:text-sm font-semibold leading-tight">Pres. Internacional</span>
                    <span className="text-[8px] sm:text-xs text-muted-foreground leading-tight hidden xs:block">Carlos Adelantado</span>
                  </TabsTrigger>
                  <TabsTrigger value="peru" className="flex flex-col gap-0.5 sm:gap-1 py-2 sm:py-3 px-1.5 sm:px-2 data-[state=active]:bg-accent/10 data-[state=active]:text-accent min-h-[52px] sm:min-h-[60px]">
                    <span className="text-[9px] sm:text-xs md:text-sm font-semibold leading-tight">Dir. Nacional</span>
                    <span className="text-[8px] sm:text-xs text-muted-foreground leading-tight hidden xs:block">Beatriz D.C.</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="fundador" className="mt-0">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm">
                      <Users className="h-4 w-4" />
                      Nuestro Fundador
                    </div>
                  </div>
              
              <Card className="overflow-hidden border-2 border-primary/10 bg-gradient-to-br from-background via-background to-primary/5">
                <div className="grid lg:grid-cols-[350px,1fr] gap-0">
                  {/* Columna Izquierda - Imagen y Datos Principales */}
                  <div className="bg-gradient-to-b from-primary/10 to-primary/5 p-5 sm:p-8 md:p-10 flex flex-col items-center justify-center space-y-4 sm:space-y-6">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant ring-2 sm:ring-4 ring-background">
                        <OptimizedImage 
                          src={jorgeLivragaPortrait} 
                          alt="Retrato de Jorge Ángel Livraga Rizzi (1930-1991), fundador de Nueva Acrópolis y primer presidente de la organización filosófica internacional"
                          className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                          containerClassName="w-full h-full"
                          priority
                        />
                      </div>
                    </div>
                    
                    <div className="text-center space-y-1 sm:space-y-2">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Jorge Ángel Livraga Rizzi
                      </h3>
                      <p className="text-base sm:text-lg font-medium text-primary">
                        1930 - 1991
                      </p>
                      <p className="text-xs sm:text-sm text-foreground/60 italic">
                        Fundador y Primer Presidente
                      </p>
                    </div>

                    <div className="w-full space-y-2 sm:space-y-3 pt-2 sm:pt-4">
                      <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-background/50 rounded-lg sm:rounded-xl">
                        <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] sm:text-xs font-semibold text-foreground/80 mb-0.5 sm:mb-1">Lugar de Nacimiento</p>
                          <p className="text-xs sm:text-sm text-foreground/70">Buenos Aires, Argentina</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-background/50 rounded-lg sm:rounded-xl">
                        <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] sm:text-xs font-semibold text-foreground/80 mb-0.5 sm:mb-1">Formación</p>
                          <p className="text-xs sm:text-sm text-foreground/70">Medicina, Historia del Arte y Filosofía</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Columna Derecha - Contenido Biográfico */}
                  <div className="p-5 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/5 rounded-lg border border-primary/10">
                        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                        <span className="text-xs sm:text-sm font-semibold text-primary">Visión Filosófica</span>
                      </div>
                      
                      <p className="text-foreground/90 leading-relaxed text-base sm:text-lg">
                        Su propuesta innovadora fue revivir la idea de <strong className="text-primary">Escuela de Filosofía en la Tradición Clásica</strong>, reintroduciendo el método socrático como búsqueda de la sabiduría y conocimiento del ser humano.
                      </p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                        <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                        Su Legado
                      </h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="p-2.5 sm:p-4 bg-primary/5 rounded-lg sm:rounded-xl border border-primary/10 hover:border-primary/20 transition-colors">
                          <p className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">Filosofía Práctica</p>
                          <p className="text-[10px] sm:text-xs text-foreground/70">Como forma de vida aplicada al día a día</p>
                        </div>
                        <div className="p-2.5 sm:p-4 bg-secondary/5 rounded-lg sm:rounded-xl border border-secondary/10 hover:border-secondary/20 transition-colors">
                          <p className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">Método Socrático</p>
                          <p className="text-[10px] sm:text-xs text-foreground/70">Aplicado a la cultura contemporánea</p>
                        </div>
                        <div className="p-2.5 sm:p-4 bg-accent/5 rounded-lg sm:rounded-xl border border-accent/10 hover:border-accent/20 transition-colors">
                          <p className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">Humanismo Ecléctico</p>
                          <p className="text-[10px] sm:text-xs text-foreground/70">Integración de Oriente y Occidente</p>
                        </div>
                        <div className="p-2.5 sm:p-4 bg-muted rounded-lg sm:rounded-xl border border-border hover:border-primary/20 transition-colors">
                          <p className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">Fraternidad Universal</p>
                          <p className="text-[10px] sm:text-xs text-foreground/70">Entre individuos y naciones</p>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>

                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                        <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        Reconocimientos
                      </h4>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-l-2 border-primary">
                          <span className="text-primary font-bold text-xs sm:text-sm">1951</span>
                          <p className="text-xs sm:text-sm text-foreground/70">Primer Premio Nacional de Poesía en Argentina</p>
                        </div>
                        <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-2 border-secondary">
                          <span className="text-secondary font-bold text-xs sm:text-sm">1976</span>
                          <p className="text-xs sm:text-sm text-foreground/70">Cruz de París en Artes, Ciencias y Literatura</p>
                        </div>
                        <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-accent/5 to-transparent rounded-lg border-l-2 border-accent">
                          <span className="text-accent font-bold text-xs sm:text-sm">—</span>
                          <p className="text-xs sm:text-sm text-foreground/70">Miembro de la Academia Burckhardt</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-lg sm:rounded-xl border border-primary/20">
                      <p className="text-sm sm:text-base text-foreground/80 leading-relaxed italic">
                        "Dedicó su vida a promover esta aventura espiritual, estableciendo centros en más de 50 países de los cinco continentes. Su visión de una filosofía práctica y transformadora continúa inspirando a miles de personas alrededor del mundo."
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
                </TabsContent>

                <TabsContent value="delia" className="mt-0">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm">
                      <Users className="h-4 w-4" />
                      Presidenta Honoraria Internacional
                    </div>
                  </div>
              
              <Card className="overflow-hidden border-2 border-primary/10 bg-gradient-to-br from-background via-background to-primary/5">
                <div className="grid lg:grid-cols-[350px,1fr] gap-0">
                  {/* Columna Izquierda - Imagen y Datos Principales */}
                  <div className="bg-gradient-to-b from-primary/10 to-primary/5 p-5 sm:p-8 md:p-10 flex flex-col items-center justify-center space-y-4 sm:space-y-6">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant ring-2 sm:ring-4 ring-background">
                        <OptimizedImage 
                          src={deliaSteinbergPortrait} 
                          alt="Retrato de Delia Steinberg Guzmán (1943-2023), Presidenta Internacional de Nueva Acrópolis 1991-2020 y Presidenta Honoraria hasta 2023"
                          className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                          containerClassName="w-full h-full"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center space-y-1 sm:space-y-2">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Delia Steinberg Guzmán
                      </h3>
                      <p className="text-base sm:text-lg font-medium text-primary">
                        1943 - 2023
                      </p>
                      <p className="text-xs sm:text-sm text-foreground/60 italic">
                        Presidenta Honoraria Internacional
                      </p>
                    </div>

                    <div className="w-full space-y-2 sm:space-y-3 pt-2 sm:pt-4">
                      <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-background/50 rounded-lg sm:rounded-xl">
                        <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] sm:text-xs font-semibold text-foreground/80 mb-0.5 sm:mb-1">Lugar de Nacimiento</p>
                          <p className="text-xs sm:text-sm text-foreground/70">Buenos Aires, Argentina</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-background/50 rounded-lg sm:rounded-xl">
                        <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] sm:text-xs font-semibold text-foreground/80 mb-0.5 sm:mb-1">Formación</p>
                          <p className="text-xs sm:text-sm text-foreground/70">Filosofía, Piano y Composición</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-background/50 rounded-lg sm:rounded-xl">
                        <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] sm:text-xs font-semibold text-foreground/80 mb-0.5 sm:mb-1">Presidencia</p>
                          <p className="text-xs sm:text-sm text-foreground/70">1991 - 2020</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-background/50 rounded-lg sm:rounded-xl">
                        <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] sm:text-xs font-semibold text-foreground/80 mb-0.5 sm:mb-1">Presidenta Honoraria</p>
                          <p className="text-xs sm:text-sm text-foreground/70">2020 - 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Columna Derecha - Contenido Biográfico */}
                  <div className="p-5 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/5 rounded-lg border border-primary/10">
                        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                        <span className="text-xs sm:text-sm font-semibold text-primary">Continuidad y Renovación</span>
                      </div>
                      
                      <p className="text-foreground/90 leading-relaxed text-sm sm:text-base md:text-lg">
                        Nombrada Presidenta Internacional de Nueva Acrópolis tras el fallecimiento del fundador, el Profesor Jorge Ángel Livraga en 1991. Estuvo a cargo de la gestión y coordinación del trabajo educativo y cultural de Nueva Acrópolis en todos los países donde la Asociación está presente hasta 2020, cuando asumió Carlos Adelantado Puchal y ella continuó como Presidenta Honoraria Internacional hasta su fallecimiento en 2023.
                      </p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                        <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                        Trayectoria Destacada
                      </h4>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="p-3 sm:p-4 bg-primary/5 rounded-lg sm:rounded-xl border border-primary/10 hover:border-primary/20 transition-colors">
                          <p className="text-xs sm:text-sm font-semibold text-foreground mb-1 sm:mb-2">Educación Filosófica</p>
                          <p className="text-[10px] sm:text-xs text-foreground/70 leading-relaxed">Profesora de Historia de Filosofía, Filosofía Moral, Historia de las Religiones, Filosofía Oriental, Psicología, Estética Metafísica y Oratoria.</p>
                        </div>
                        <div className="p-3 sm:p-4 bg-secondary/5 rounded-lg sm:rounded-xl border border-secondary/10 hover:border-secondary/20 transition-colors">
                          <p className="text-xs sm:text-sm font-semibold text-foreground mb-1 sm:mb-2">Música y Cultura</p>
                          <p className="text-[10px] sm:text-xs text-foreground/70 leading-relaxed">Pianista concertista. En 1988 fundó el Instituto de Música Tristán, presente en España, Brasil, Francia, Israel y Alemania.</p>
                        </div>
                        <div className="p-3 sm:p-4 bg-accent/5 rounded-lg sm:rounded-xl border border-accent/10 hover:border-accent/20 transition-colors">
                          <p className="text-xs sm:text-sm font-semibold text-foreground mb-1 sm:mb-2">Cuadernos de Cultura</p>
                          <p className="text-[10px] sm:text-xs text-foreground/70 leading-relaxed">En 1972 fundó la revista «Cuadernos de Cultura» con series dedicadas a la filosofía práctica en la vida cotidiana.</p>
                        </div>
                        <div className="p-3 sm:p-4 bg-muted rounded-lg sm:rounded-xl border border-border hover:border-primary/20 transition-colors">
                          <p className="text-xs sm:text-sm font-semibold text-foreground mb-1 sm:mb-2">Publicaciones</p>
                          <p className="text-[10px] sm:text-xs text-foreground/70 leading-relaxed">Más de 30 libros sobre Filosofía Práctica traducidos a múltiples idiomas.</p>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>

                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                        <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        Reconocimientos
                      </h4>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-l-2 border-primary">
                          <span className="text-primary font-bold text-xs sm:text-sm">1980</span>
                          <p className="text-xs sm:text-sm text-foreground/70">Medalla de Plata de la Académie Française</p>
                        </div>
                        <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-2 border-secondary">
                          <span className="text-secondary font-bold text-xs sm:text-sm">1982</span>
                          <p className="text-xs sm:text-sm text-foreground/70">Fundó el Concurso Internacional de Piano</p>
                        </div>
                        <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-accent/5 to-transparent rounded-lg border-l-2 border-accent">
                          <span className="text-accent font-bold text-xs sm:text-sm">2000</span>
                          <p className="text-xs sm:text-sm text-foreground/70">Directora de la revista cultural Esfinge</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-lg sm:rounded-xl border border-primary/20">
                      <p className="text-sm sm:text-base text-foreground/80 leading-relaxed italic">
                        "Dedicó más de 40 años a promover la filosofía como forma de vida. Su legado continúa inspirando a miles de estudiantes y voluntarios en todo el mundo."
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
                </TabsContent>

                <TabsContent value="internacional" className="mt-0">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-secondary/10 rounded-full text-secondary font-bold text-sm">
                      <Users className="h-4 w-4" />
                      Presidente Internacional
                    </div>
                  </div>
              
              <Card className="overflow-hidden border-2 border-secondary/10 bg-gradient-to-br from-background via-background to-secondary/5">
                <div className="grid lg:grid-cols-[1fr,350px] gap-0">
                  {/* Columna Izquierda - Contenido Biográfico */}
                  <div className="p-5 sm:p-8 md:p-10 space-y-4 sm:space-y-6 order-2 lg:order-1">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/5 rounded-lg border border-secondary/10">
                        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-secondary" />
                        <span className="text-xs sm:text-sm font-semibold text-secondary">Liderazgo Actual</span>
                      </div>
                      
                      <p className="text-foreground/90 leading-relaxed text-sm sm:text-base md:text-lg">
                        Continuó el trabajo de su maestra y predecesora, <strong className="text-secondary">Delia Steinberg Guzmán</strong>, así como del fundador Jorge Ángel Livraga Rizzi. Ha aportado nuevas perspectivas para lograr una identidad filosófica más clara en un mundo complejo.
                      </p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>

                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                        <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                        Contribuciones (2020-2025)
                      </h4>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="p-3 sm:p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg sm:rounded-xl border-l-2 border-primary hover:border-primary/60 transition-colors">
                          <p className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">Días Internacionales</p>
                          <p className="text-[10px] sm:text-xs text-foreground/70">Actividades en más de 60 países: Día Mundial de la Filosofía, Día de las Artes y Día de la Madre Tierra.</p>
                        </div>
                        <div className="p-3 sm:p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg sm:rounded-xl border-l-2 border-secondary hover:border-secondary/60 transition-colors">
                          <p className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">Universitas - Estudios Generales</p>
                          <p className="text-[10px] sm:text-xs text-foreground/70">Plataforma online de educación universitaria conectando filosofía con diferentes áreas.</p>
                        </div>
                        <div className="p-3 sm:p-4 bg-gradient-to-r from-accent/5 to-transparent rounded-lg sm:rounded-xl border-l-2 border-accent hover:border-accent/60 transition-colors">
                          <p className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">Obra Filosófica</p>
                          <p className="text-[10px] sm:text-xs text-foreground/70">Autor de "Las Esferas de la Consciencia: Yo, los Otros y el Mundo".</p>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                        <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                        Formación y Experiencia
                      </h4>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="p-2.5 sm:p-4 bg-secondary/5 rounded-lg sm:rounded-xl border border-secondary/10 hover:border-secondary/20 transition-colors">
                          <p className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">Más de 35 años</p>
                          <p className="text-[10px] sm:text-xs text-foreground/70">Enseñando filosofía</p>
                        </div>
                        <div className="p-2.5 sm:p-4 bg-primary/5 rounded-lg sm:rounded-xl border border-primary/10 hover:border-primary/20 transition-colors">
                          <p className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">23 años</p>
                          <p className="text-[10px] sm:text-xs text-foreground/70">Director NA Castellón</p>
                        </div>
                        <div className="p-2.5 sm:p-4 bg-accent/5 rounded-lg sm:rounded-xl border border-accent/10 hover:border-accent/20 transition-colors">
                          <p className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">2017-2020</p>
                          <p className="text-[10px] sm:text-xs text-foreground/70">Vicepresidente Internacional</p>
                        </div>
                        <div className="p-2.5 sm:p-4 bg-muted rounded-lg sm:rounded-xl border border-border hover:border-secondary/20 transition-colors">
                          <p className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">Maestro OINA</p>
                          <p className="text-[10px] sm:text-xs text-foreground/70">Filosofía Oriental y Occidental</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 bg-gradient-to-br from-secondary/10 via-primary/5 to-transparent rounded-lg sm:rounded-xl border border-secondary/20">
                      <p className="text-sm sm:text-base text-foreground/80 leading-relaxed italic">
                        "Enfatiza la necesidad de poner la filosofía en práctica y hacerla relevante para los problemas del mundo actual."
                      </p>
                    </div>
                  </div>

                  {/* Columna Derecha - Imagen y Datos Principales */}
                  <div className="bg-gradient-to-b from-secondary/10 to-secondary/5 p-5 sm:p-8 md:p-10 flex flex-col items-center justify-center space-y-4 sm:space-y-6 order-1 lg:order-2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant ring-2 sm:ring-4 ring-background">
                        <OptimizedImage 
                          src={carlosAdelantadoPortrait} 
                          alt="Carlos Adelantado Puchal - Presidente Internacional"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          containerClassName="w-full h-full"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center space-y-1 sm:space-y-2">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Carlos Adelantado Puchal
                      </h3>
                      <p className="text-base sm:text-lg font-medium text-secondary">
                        Presidente desde 2020
                      </p>
                      <p className="text-xs sm:text-sm text-foreground/60 italic">
                        Presidente Internacional
                      </p>
                    </div>

                    <div className="w-full space-y-2 sm:space-y-3 pt-2 sm:pt-4">
                      <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-background/50 rounded-lg sm:rounded-xl">
                        <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] sm:text-xs font-semibold text-foreground/80 mb-0.5 sm:mb-1">Lugar de Nacimiento</p>
                          <p className="text-xs sm:text-sm text-foreground/70">Onda, Castellón, España</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-background/50 rounded-lg sm:rounded-xl">
                        <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] sm:text-xs font-semibold text-foreground/80 mb-0.5 sm:mb-1">Trayectoria</p>
                          <p className="text-xs sm:text-sm text-foreground/70">Desde los 19 años estudiando filosofía</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-background/50 rounded-lg sm:rounded-xl">
                        <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] sm:text-xs font-semibold text-foreground/80 mb-0.5 sm:mb-1">Presencia Global</p>
                          <p className="text-xs sm:text-sm text-foreground/70">Más de 50 países en 5 continentes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
                </TabsContent>

                <TabsContent value="peru" className="mt-0">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/10 rounded-full text-accent font-bold text-sm">
                      <Users className="h-4 w-4" />
                      Directora Nacional Perú
                    </div>
                  </div>
              
              <Card className="overflow-hidden border-2 border-accent/10 bg-gradient-to-br from-background via-background to-accent/5">
                <div className="grid lg:grid-cols-[350px,1fr] gap-0">
                  {/* Columna Izquierda - Imagen y Datos Principales */}
                  <div className="bg-gradient-to-b from-accent/10 to-accent/5 p-5 sm:p-8 md:p-10 flex flex-col items-center justify-center space-y-4 sm:space-y-6">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant ring-2 sm:ring-4 ring-background">
                        <OptimizedImage 
                          src={beatrizDiezCansecoPortrait} 
                          alt="Beatriz Diez Canseco - Presidenta Nacional Nueva Acrópolis Perú"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          containerClassName="w-full h-full"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center space-y-1 sm:space-y-2">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        Beatriz Diez Canseco
                      </h3>
                      <p className="text-base sm:text-lg font-medium text-accent">
                        Directora Nacional Perú
                      </p>
                      <p className="text-xs sm:text-sm text-foreground/60 italic">
                        Más de 30 años de trayectoria
                      </p>
                    </div>

                    <div className="w-full space-y-2 sm:space-y-3 pt-2 sm:pt-4">
                      <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-background/50 rounded-lg sm:rounded-xl">
                        <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] sm:text-xs font-semibold text-foreground/80 mb-0.5 sm:mb-1">Formación</p>
                          <p className="text-xs sm:text-sm text-foreground/70">Maestra en Filosofía Oriental y Occidental (OINA)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-background/50 rounded-lg sm:rounded-xl">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] sm:text-xs font-semibold text-foreground/80 mb-0.5 sm:mb-1">Comunidad</p>
                          <p className="text-xs sm:text-sm text-foreground/70">5,000+ miembros activos y 65+ sedes</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Columna Derecha - Contenido Biográfico */}
                  <div className="p-5 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/5 rounded-lg border border-accent/10">
                        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                        <span className="text-xs sm:text-sm font-semibold text-accent">Directora Nacional desde 1986</span>
                      </div>
                      
                      <p className="text-foreground/90 leading-relaxed text-sm sm:text-base md:text-lg">
                        Maestra en Filosofía Oriental y Occidental (OINA), con más de 30 años enseñando filosofía. Bajo su dirección, Nueva Acrópolis Perú ha crecido hasta 5,000+ miembros activos en 65+ sedes.
                      </p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>

                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                        <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                        Trayectoria y Legado
                      </h4>
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-start gap-2 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-l-2 sm:border-l-4 border-primary">
                          <span className="text-primary font-bold text-xs sm:text-base min-w-[60px] sm:min-w-[80px]">1983-2020</span>
                          <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">Fundó el Concurso Nacional de Música con 20,000+ escolares participantes</p>
                        </div>
                        <div className="flex items-start gap-2 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-2 sm:border-l-4 border-secondary">
                          <span className="text-secondary font-bold text-xs sm:text-base min-w-[60px] sm:min-w-[80px]">Desde 1986</span>
                          <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">Directora Nacional liderando la expansión a nivel nacional</p>
                        </div>
                        <div className="flex items-start gap-2 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-accent/5 to-transparent rounded-lg border-l-2 sm:border-l-4 border-accent">
                          <span className="text-accent font-bold text-xs sm:text-base min-w-[60px] sm:min-w-[80px]">Hoy</span>
                          <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">Maestra OINA compartiendo sabiduría práctica con miles de estudiantes</p>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>

                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                        <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                        Publicaciones
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-1 gap-1.5 sm:gap-2">
                        <div className="p-2 sm:p-3 bg-gradient-to-r from-accent/5 to-transparent rounded-lg border-l-2 border-accent/40 hover:border-accent transition-colors">
                          <p className="text-xs sm:text-sm font-medium text-foreground">Sabiduría para vivir mejor</p>
                        </div>
                        <div className="p-2 sm:p-3 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-2 border-secondary/40 hover:border-secondary transition-colors">
                          <p className="text-xs sm:text-sm font-medium text-foreground">Descubriendo tu mundo interior</p>
                        </div>
                        <div className="p-2 sm:p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-l-2 border-primary/40 hover:border-primary transition-colors">
                          <p className="text-xs sm:text-sm font-medium text-foreground">Más Filosofía, menos Estrés</p>
                        </div>
                        <div className="p-2 sm:p-3 bg-gradient-to-r from-accent/5 to-transparent rounded-lg border-l-2 border-accent/40 hover:border-accent transition-colors">
                          <p className="text-xs sm:text-sm font-medium text-foreground">La Aventura de Vivir y Ser Feliz</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6 bg-gradient-to-br from-accent/10 via-secondary/5 to-transparent rounded-lg sm:rounded-xl border border-accent/20">
                      <p className="text-sm sm:text-base text-foreground/80 leading-relaxed italic">
                        "Bajo su liderazgo, Nueva Acrópolis Perú se ha convertido en una comunidad de 5,000+ miembros en 65+ sedes, manteniendo vivo el ideal de una filosofía práctica y transformadora."
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Philosophy as way of life */}
            <div className="relative -mx-4 md:-mx-6 lg:-mx-12 xl:-mx-24 overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <OptimizedImage 
                  src={philosophyImage} 
                  alt="Filosofía como forma de vida" 
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
              </div>
              
              {/* Content */}
              <div className="relative py-16 sm:py-24 md:py-32 px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-secondary/90 backdrop-blur-sm rounded-full text-white font-semibold mb-2 sm:mb-4 shadow-lg text-sm sm:text-base">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                    Filosofía como Forma de Vida
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed font-medium drop-shadow-lg px-2">
                    Trabajamos para mejorar el mundo y al ser humano por medio de la Filosofía en la tradición clásica: 
                    una búsqueda filosófica que ofrece respuestas a los problemas contemporáneos.
                  </p>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed drop-shadow-md px-2">
                    No solo a través de la lectura y el conocimiento teórico, sino estableciéndonos la meta 
                    de aprender a vivir bien, con fuerza y eficiencia, en cada momento de nuestras vidas.
                  </p>
                </div>
              </div>
            </div>

            {/* Foundation & Organization */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <Card className="p-5 sm:p-6 md:p-8 hover:shadow-medium transition-all">
                <Globe className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Fundación</h3>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Nueva Acrópolis fue fundada en 1957 en Buenos Aires, Argentina. Hoy está presente en más de 50 países.
                </p>
              </Card>

              <Card className="p-5 sm:p-6 md:p-8 hover:shadow-medium transition-all">
                <Building2 className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Organización</h3>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Registrada como asociación internacional sin fines de lucro, con sede en Bruselas.
                </p>
              </Card>

              <Card className="p-5 sm:p-6 md:p-8 hover:shadow-medium transition-all sm:col-span-2 md:col-span-1">
                <HandHeart className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Estructura</h3>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  Garantiza el respeto por la diversidad y autonomía de cada asociación miembro.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars / Areas de Acción */}
      <ThreePillars />
    </>
  );
};