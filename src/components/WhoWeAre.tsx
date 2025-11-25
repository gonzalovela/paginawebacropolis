import { Card } from "@/components/ui/card";
import { Heart, BookOpen, Users, Sparkles, Globe, Building2, HandHeart } from "lucide-react";
import { ParallaxImage } from "@/components/ParallaxImage";
import bannerImage from "@/assets/banner-quienes-somos.jpg";
import jorgeLivragaPortrait from "@/assets/jorge-livraga-real.jpg";
import carlosAdelantadoPortrait from "@/assets/carlos-adelantado-real.jpg";
import beatrizDiezCansecoPortrait from "@/assets/beatriz-diez-canseco-portrait.jpg";

export const WhoWeAre = () => {
  const principles = [
    {
      icon: Heart,
      title: "Fraternidad",
      description: "Promover un ideal de fraternidad basado en el respeto a la dignidad humana, más allá de cualquier diferencia de género, cultura, religión o clase social.",
      detail: "La fuerza de este ideal de fraternidad reside más en lo que nos une que en lo que nos separa. Se basa firmemente en el reconocimiento de valores universales que, respetando la diversidad, trascienden las prácticas y costumbres locales."
    },
    {
      icon: BookOpen,
      title: "Conocimiento",
      description: "Fomentar el amor a la sabiduría a través del estudio comparado de filosofías, religiones, ciencias y artes.",
      detail: "La filosofía puede reunir las fuentes del pasado y del presente en esa visión global, amplia e integradora, para que se convierta en una fuerza real de progreso que busca no solo explorar los caminos de la vida, sino profundizar en sus fines últimos."
    },
    {
      icon: Sparkles,
      title: "Desarrollo",
      description: "Desarrollar lo mejor del ser humano promoviendo la realización de cada persona como individuo y como miembro activo de la sociedad.",
      detail: "El ser humano todavía tiene un enorme potencial latente. Conocerlo y desarrollarlo es uno de los pilares fundamentales de la vida misma y proporciona una fuente de satisfacción duradera."
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <ParallaxImage src={bannerImage} alt="Nueva Acrópolis - Filosofía en comunidad" speed={0.3} isHero={true} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[1]" />
        
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            ¿Qué es Nueva Acrópolis?
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Una Escuela de Filosofía que promueve la cultura y practica el voluntariado
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto space-y-20">
            
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
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <p className="text-2xl font-semibold text-foreground">
                Propone un ideal de valores permanentes para contribuir a la evolución individual y colectiva.
              </p>
            </div>

            {/* Fundador - Jorge Ángel Livraga Rizzi */}
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-4">
                  <Users className="h-4 w-4" />
                  Nuestro Fundador
                </div>
              </div>
              
              <Card className="overflow-hidden border-2 border-primary/10 bg-gradient-to-br from-background via-background to-primary/5">
                <div className="grid lg:grid-cols-[400px,1fr] gap-0">
                  {/* Columna Izquierda - Imagen y Datos Principales */}
                  <div className="bg-gradient-to-b from-primary/10 to-primary/5 p-8 md:p-10 flex flex-col items-center justify-center space-y-6">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative w-64 h-64 rounded-3xl overflow-hidden shadow-elegant ring-4 ring-background">
                        <img 
                          src={jorgeLivragaPortrait} 
                          alt="Jorge Ángel Livraga Rizzi - Fundador de Nueva Acrópolis"
                          className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        Jorge Ángel Livraga Rizzi
                      </h3>
                      <p className="text-lg font-medium text-primary">
                        1930 - 1991
                      </p>
                      <p className="text-sm text-foreground/60 italic">
                        Fundador y Primer Presidente
                      </p>
                    </div>

                    <div className="w-full space-y-3 pt-4">
                      <div className="flex items-start gap-3 p-3 bg-background/50 rounded-xl">
                        <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-foreground/80 mb-1">Lugar de Nacimiento</p>
                          <p className="text-sm text-foreground/70">Buenos Aires, Argentina</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-background/50 rounded-xl">
                        <BookOpen className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-foreground/80 mb-1">Formación</p>
                          <p className="text-sm text-foreground/70">Medicina, Historia del Arte y Filosofía</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Columna Derecha - Contenido Biográfico */}
                  <div className="p-8 md:p-10 space-y-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-lg border border-primary/10">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">Visión Filosófica</span>
                      </div>
                      
                      <p className="text-foreground/90 leading-relaxed text-lg">
                        Su propuesta innovadora fue revivir la idea de <strong className="text-primary">Escuela de Filosofía en la Tradición Clásica</strong>, reintroduciendo el método socrático como búsqueda de la sabiduría y conocimiento del ser humano.
                      </p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                        <Heart className="h-5 w-5 text-secondary" />
                        Su Legado
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/20 transition-colors">
                          <p className="text-sm font-semibold text-foreground mb-1">Filosofía Práctica</p>
                          <p className="text-xs text-foreground/70">Como forma de vida aplicada al día a día</p>
                        </div>
                        <div className="p-4 bg-secondary/5 rounded-xl border border-secondary/10 hover:border-secondary/20 transition-colors">
                          <p className="text-sm font-semibold text-foreground mb-1">Método Socrático</p>
                          <p className="text-xs text-foreground/70">Aplicado a la cultura contemporánea</p>
                        </div>
                        <div className="p-4 bg-accent/5 rounded-xl border border-accent/10 hover:border-accent/20 transition-colors">
                          <p className="text-sm font-semibold text-foreground mb-1">Humanismo Ecléctico</p>
                          <p className="text-xs text-foreground/70">Integración de Oriente y Occidente</p>
                        </div>
                        <div className="p-4 bg-muted rounded-xl border border-border hover:border-primary/20 transition-colors">
                          <p className="text-sm font-semibold text-foreground mb-1">Fraternidad Universal</p>
                          <p className="text-xs text-foreground/70">Entre individuos y naciones</p>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        Reconocimientos
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-l-2 border-primary">
                          <span className="text-primary font-bold text-sm">1951</span>
                          <p className="text-sm text-foreground/70">Primer Premio Nacional de Poesía en Argentina</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-secondary/5 to-transparent rounded-lg border-l-2 border-secondary">
                          <span className="text-secondary font-bold text-sm">1976</span>
                          <p className="text-sm text-foreground/70">Cruz de París en Artes, Ciencias y Literatura</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-accent/5 to-transparent rounded-lg border-l-2 border-accent">
                          <span className="text-accent font-bold text-sm">—</span>
                          <p className="text-sm text-foreground/70">Miembro de la Academia Burckhardt</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-xl border border-primary/20">
                      <p className="text-foreground/80 leading-relaxed italic">
                        "Dedicó su vida a promover esta aventura espiritual, estableciendo centros en más de 50 países de los cinco continentes. Su visión de una filosofía práctica y transformadora continúa inspirando a miles de personas alrededor del mundo."
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Presidente Actual - Carlos Adelantado Puchal */}
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-5 py-2 bg-secondary/10 rounded-full text-secondary font-bold text-sm mb-4">
                  <Users className="h-4 w-4" />
                  Presidente Internacional
                </div>
              </div>
              
              <Card className="overflow-hidden border-2 border-secondary/10 bg-gradient-to-br from-background via-background to-secondary/5">
                <div className="grid lg:grid-cols-[1fr,400px] gap-0">
                  {/* Columna Izquierda - Contenido Biográfico */}
                  <div className="p-8 md:p-10 space-y-6 order-2 lg:order-1">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/5 rounded-lg border border-secondary/10">
                        <Sparkles className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-semibold text-secondary">Liderazgo Actual</span>
                      </div>
                      
                      <p className="text-foreground/90 leading-relaxed text-lg">
                        Continuó el trabajo de su maestra y predecesora, <strong className="text-secondary">Delia Steinberg Guzmán</strong>, así como del fundador Jorge Ángel Livraga Rizzi. Ha aportado nuevas perspectivas para lograr una identidad filosófica más clara en un mundo complejo, donde las nuevas tecnologías de comunicación y redes sociales representan un desafío.
                      </p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                        <Globe className="h-5 w-5 text-primary" />
                        Logros Principales (2020-2025)
                      </h4>
                      <div className="space-y-3">
                        <div className="p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border-l-2 border-primary hover:border-primary/60 transition-colors">
                          <p className="text-sm font-semibold text-foreground mb-1">Días Internacionales</p>
                          <p className="text-xs text-foreground/70">Actividades compartidas en más de 60 países en los cinco continentes: Día Mundial de la Filosofía (UNESCO), Día de las Artes y Día de la Madre Tierra.</p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-secondary/5 to-transparent rounded-xl border-l-2 border-secondary hover:border-secondary/60 transition-colors">
                          <p className="text-sm font-semibold text-foreground mb-1">Universitas - Estudios Generales</p>
                          <p className="text-xs text-foreground/70">Plataforma de aprendizaje online que ofrece educación de nivel universitario, conectando filosofía con diferentes áreas del conocimiento.</p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-accent/5 to-transparent rounded-xl border-l-2 border-accent hover:border-accent/60 transition-colors">
                          <p className="text-sm font-semibold text-foreground mb-1">Obra Filosófica</p>
                          <p className="text-xs text-foreground/70">Autor de "Las Esferas de la Consciencia: Yo, los Otros y el Mundo", traducido a múltiples idiomas como preparación para caminar conscientemente por el sendero de la vida.</p>
                        </div>
                        <div className="p-4 bg-gradient-to-r from-muted/50 to-transparent rounded-xl border-l-2 border-border hover:border-primary/40 transition-colors">
                          <p className="text-sm font-semibold text-foreground mb-1">Voluntariado Filosófico</p>
                          <p className="text-xs text-foreground/70">Promoción del voluntariado como práctica de la filosofía a través de la ayuda humanitaria con capacitación especializada.</p>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-secondary" />
                        Formación y Experiencia
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="p-4 bg-secondary/5 rounded-xl border border-secondary/10 hover:border-secondary/20 transition-colors">
                          <p className="text-sm font-semibold text-foreground mb-1">Más de 35 años</p>
                          <p className="text-xs text-foreground/70">Enseñando en la Escuela de Filosofía</p>
                        </div>
                        <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/20 transition-colors">
                          <p className="text-sm font-semibold text-foreground mb-1">23 años</p>
                          <p className="text-xs text-foreground/70">Director de Nueva Acrópolis Castellón</p>
                        </div>
                        <div className="p-4 bg-accent/5 rounded-xl border border-accent/10 hover:border-accent/20 transition-colors">
                          <p className="text-sm font-semibold text-foreground mb-1">2017-2020</p>
                          <p className="text-xs text-foreground/70">Vicepresidente Internacional</p>
                        </div>
                        <div className="p-4 bg-muted rounded-xl border border-border hover:border-secondary/20 transition-colors">
                          <p className="text-sm font-semibold text-foreground mb-1">Maestro en Filosofía</p>
                          <p className="text-xs text-foreground/70">Oriental y Occidental (OINA)</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-gradient-to-br from-secondary/10 via-primary/5 to-transparent rounded-xl border border-secondary/20">
                      <p className="text-foreground/80 leading-relaxed italic">
                        "Enfatiza la necesidad de poner la filosofía en práctica y hacerla relevante para los problemas del mundo actual, participando activamente en congresos y conferencias internacionales."
                      </p>
                    </div>
                  </div>

                  {/* Columna Derecha - Imagen y Datos Principales */}
                  <div className="bg-gradient-to-b from-secondary/10 to-secondary/5 p-8 md:p-10 flex flex-col items-center justify-center space-y-6 order-1 lg:order-2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative w-64 h-64 rounded-3xl overflow-hidden shadow-elegant ring-4 ring-background">
                        <img 
                          src={carlosAdelantadoPortrait} 
                          alt="Carlos Adelantado Puchal - Presidente Internacional"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        Carlos Adelantado Puchal
                      </h3>
                      <p className="text-lg font-medium text-secondary">
                        Presidente desde 2020
                      </p>
                      <p className="text-sm text-foreground/60 italic">
                        Presidente Internacional
                      </p>
                    </div>

                    <div className="w-full space-y-3 pt-4">
                      <div className="flex items-start gap-3 p-3 bg-background/50 rounded-xl">
                        <Globe className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-foreground/80 mb-1">Lugar de Nacimiento</p>
                          <p className="text-sm text-foreground/70">Onda, Castellón, España</p>
                          <p className="text-xs text-foreground/60">1 de enero de 1964</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-background/50 rounded-xl">
                        <BookOpen className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-foreground/80 mb-1">Trayectoria</p>
                          <p className="text-sm text-foreground/70">Comenzó a los 19 años estudiando filosofía</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-background/50 rounded-xl">
                        <Heart className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-foreground/80 mb-1">Presencia Global</p>
                          <p className="text-sm text-foreground/70">Más de 50 países en 5 continentes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Presidenta Nueva Acrópolis Perú */}
            <div className="max-w-5xl mx-auto">
              <Card className="p-8 md:p-12 bg-gradient-subtle border-2 border-secondary/20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="w-48 h-48 mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-elegant">
                      <img 
                        src={beatrizDiezCansecoPortrait} 
                        alt="Beatriz Diez Canseco - Presidenta Nueva Acrópolis Perú"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold text-sm mb-2">
                      Presidenta Nueva Acrópolis Perú
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                      Beatriz Diez Canseco
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Líder comprometida con la promoción de la filosofía práctica y el desarrollo cultural en el Perú. Su gestión ha fortalecido la presencia de Nueva Acrópolis en el país, expandiendo sus actividades educativas y de voluntariado.
                    </p>
                    <p className="text-foreground/70 leading-relaxed">
                      Bajo su dirección, Nueva Acrópolis Perú continúa desarrollando programas filosóficos, culturales y de servicio a la comunidad, manteniendo vivo el espíritu de la filosofía como forma de vida y herramienta de transformación personal y social.
                    </p>
                    <div className="bg-secondary/5 p-6 rounded-xl mt-6">
                      <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Heart className="h-5 w-5 text-secondary" />
                        Visión
                      </h4>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        Promover el desarrollo integral del ser humano a través de la educación filosófica, 
                        el encuentro cultural y la acción voluntaria, contribuyendo al bienestar de la sociedad peruana.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Foundation & Organization */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-medium transition-all">
                <Globe className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Fundación</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Nueva Acrópolis fue fundada en 1957 en Buenos Aires, Argentina, por el profesor Jorge Ángel Livraga Rizzi. Hoy está presente en más de 50 países de los cinco continentes.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-medium transition-all">
                <Building2 className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Organización</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Registrada en el Registro Internacional de Asociaciones del Reino de Bélgica como asociación internacional sin fines de lucro, con sede en Bruselas.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-medium transition-all">
                <HandHeart className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">Estructura</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Su estructura garantiza el respeto por la diversidad, autonomía e iniciativa de cada asociación miembro, con total independencia de intereses políticos, religiosos o financieros.
                </p>
              </Card>
            </div>

            {/* Symbolism */}
            <Card className="p-8 md:p-12 bg-gradient-subtle">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  El Simbolismo de Nueva Acrópolis
                </h3>
                <div className="space-y-4 text-foreground/70 leading-relaxed text-lg">
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
                  <p className="text-xl font-semibold text-foreground pt-4">
                    Nuestro mundo necesita nuevas acrópolis, no hechas de piedra sino de seres humanos, 
                    elevadas en el corazón de nuestras ciudades para crecer internamente y restablecer 
                    los lazos profundos que pueden unirnos.
                  </p>
                </div>
              </div>
            </Card>

            {/* Principles */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-12">
                Nuestros Principios
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <Card key={index} className="p-8 text-center hover:shadow-medium transition-all">
                      <div className="mb-6">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {principle.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed mb-4">
                        {principle.description}
                      </p>
                      <p className="text-sm text-foreground/60 leading-relaxed">
                        {principle.detail}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Philosophy as way of life */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-full text-secondary font-semibold mb-4">
                <BookOpen className="h-5 w-5" />
                Filosofía como Forma de Vida
              </div>
              <p className="text-xl text-foreground/90 leading-relaxed font-medium">
                Trabajamos para mejorar el mundo y al ser humano por medio de la Filosofía en la tradición clásica: 
                una búsqueda filosófica que ofrece respuestas a los problemas contemporáneos.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                No solo a través de la lectura y el conocimiento teórico, sino estableciéndonos la meta 
                de aprender a vivir bien, con fuerza y eficiencia, en cada momento de nuestras vidas. 
                Aprovechando las oportunidades que surgen y aprendiendo algo positivo incluso de la adversidad.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};