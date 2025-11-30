import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, BookOpen, Users, Sparkles, Globe, Trophy } from "lucide-react";
import { LeaderProfile } from "./LeaderProfile";
import jorgeLivragaPortrait from "@/assets/jorge-livraga-real.jpg";
import deliaSteinbergPortrait from "@/assets/delia-steinberg-guzman-portrait.jpg";
import carlosAdelantadoPortrait from "@/assets/carlos-adelantado-real.jpg";
import beatrizDiezCansecoPortrait from "@/assets/beatriz-diez-canseco-portrait.jpg";

export const LeadershipTabs = () => {
  return (
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
          <LeaderProfile
            name="Jorge Ángel Livraga Rizzi"
            years="1930 - 1991"
            role="Fundador y Primer Presidente"
            image={jorgeLivragaPortrait}
            imageAlt="Retrato de Jorge Ángel Livraga Rizzi (1930-1991), fundador de Nueva Acrópolis"
            infoItems={[
              { icon: Globe, label: "Lugar de Nacimiento", value: "Buenos Aires, Argentina" },
              { icon: BookOpen, label: "Formación", value: "Medicina, Historia del Arte y Filosofía" },
            ]}
            tagLabel="Visión Filosófica"
            tagColorClass="text-primary"
            introduction={
              <p>Su propuesta innovadora fue revivir la idea de <strong className="text-primary">Escuela de Filosofía en la Tradición Clásica</strong>, reintroduciendo el método socrático como búsqueda de la sabiduría y conocimiento del ser humano.</p>
            }
            legacyTitle="Su Legado"
            legacyIcon={Heart}
            legacyItems={[
              { title: "Filosofía Práctica", description: "Como forma de vida aplicada al día a día", colorClass: "bg-primary/5 border-primary/10" },
              { title: "Método Socrático", description: "Aplicado a la cultura contemporánea", colorClass: "bg-secondary/5 border-secondary/10" },
              { title: "Humanismo Ecléctico", description: "Integración de Oriente y Occidente", colorClass: "bg-accent/5 border-accent/10" },
              { title: "Libros", description: "Ankor el Discípulo, El Alquimista, El Teatro mistérico en Grecia: la Tragedia, Los Espíritus Elementales de la Naturaleza, Tebas, Magia, Religión y Ciencia para el Tercer Milenio (7 volúmenes)", colorClass: "bg-muted border-border" },
            ]}
            timelineTitle="Reconocimientos"
            timelineIcon={Sparkles}
            timelineItems={[
              { year: "1951", description: "Primer Premio Nacional de Poesía en Argentina", colorClass: "from-primary/5 to-transparent border-primary text-primary" },
              { year: "1976", description: "Cruz de París en Artes, Ciencias y Literatura", colorClass: "from-secondary/5 to-transparent border-secondary text-secondary" },
              { year: "—", description: "Miembro de la Academia Burckhardt", colorClass: "from-accent/5 to-transparent border-accent text-accent" },
            ]}
            quote="Dedicó su vida a promover esta aventura espiritual, estableciendo centros en más de 50 países de los cinco continentes."
            cardBorderColor="border-primary/10"
            cardGradient="bg-gradient-to-br from-background via-background to-primary/5"
            sidebarGradient="bg-gradient-to-b from-primary/10 to-primary/5"
            priority
            grayscale
          />
        </TabsContent>

        <TabsContent value="delia" className="mt-0">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm">
              <Users className="h-4 w-4" />
              Presidenta Honoraria Internacional
            </div>
          </div>
          <LeaderProfile
            name="Delia Steinberg Guzmán"
            years="1943 - 2023"
            role="Presidenta Honoraria Internacional"
            image={deliaSteinbergPortrait}
            imageAlt="Retrato de Delia Steinberg Guzmán (1943-2023), Presidenta Honoraria Internacional"
            infoItems={[
              { icon: Globe, label: "Lugar de Nacimiento", value: "Buenos Aires, Argentina" },
              { icon: BookOpen, label: "Formación", value: "Filosofía, Piano y Composición" },
              { icon: Trophy, label: "Presidencia", value: "1991 - 2020" },
              { icon: Heart, label: "Presidenta Honoraria", value: "2020 - 2023" },
            ]}
            tagLabel="Continuidad y Renovación"
            tagColorClass="text-primary"
            introduction={
              <p>Nombrada Presidenta Internacional de Nueva Acrópolis tras el fallecimiento del fundador en 1991. Estuvo a cargo de la gestión y coordinación del trabajo educativo y cultural hasta 2020, cuando continuó como Presidenta Honoraria Internacional hasta su fallecimiento en 2023.</p>
            }
            legacyTitle="Trayectoria Destacada"
            legacyIcon={Heart}
            legacyItems={[
              { title: "Educación Filosófica", description: "Profesora de Historia de Filosofía, Filosofía Moral y más", colorClass: "bg-primary/5 border-primary/10" },
              { title: "Música y Cultura", description: "Pianista concertista. Fundó el Instituto de Música Tristán", colorClass: "bg-secondary/5 border-secondary/10" },
              { title: "Cuadernos de Cultura", description: "Fundó la revista dedicada a la filosofía práctica", colorClass: "bg-accent/5 border-accent/10" },
              { title: "Publicaciones", description: "Más de 30 libros sobre Filosofía Práctica", colorClass: "bg-muted border-border" },
            ]}
            timelineTitle="Reconocimientos"
            timelineIcon={Sparkles}
            timelineItems={[
              { year: "1980", description: "Medalla de Plata de la Académie Française", colorClass: "from-primary/5 to-transparent border-primary text-primary" },
              { year: "1982", description: "Fundó el Concurso Internacional de Piano", colorClass: "from-secondary/5 to-transparent border-secondary text-secondary" },
              { year: "2000", description: "Directora de la revista cultural Esfinge", colorClass: "from-accent/5 to-transparent border-accent text-accent" },
            ]}
            quote="Dedicó más de 40 años a promover la filosofía como forma de vida. Su legado continúa inspirando a miles de estudiantes y voluntarios en todo el mundo."
            cardBorderColor="border-primary/10"
            cardGradient="bg-gradient-to-br from-background via-background to-primary/5"
            sidebarGradient="bg-gradient-to-b from-primary/10 to-primary/5"
          />
        </TabsContent>

        <TabsContent value="internacional" className="mt-0">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-secondary/10 rounded-full text-secondary font-bold text-sm">
              <Users className="h-4 w-4" />
              Presidente Internacional
            </div>
          </div>
          <LeaderProfile
            name="Carlos Adelantado Puchal"
            years="Presidente internacional desde 2020"
            role=""
            image={carlosAdelantadoPortrait}
            imageAlt="Carlos Adelantado Puchal - Presidente Internacional"
            instagramUrl="https://www.instagram.com/carlosadelantado_acropolis/"
            infoItems={[
              { icon: Globe, label: "Lugar de Nacimiento", value: "Onda, Castellón, España" },
              { icon: BookOpen, label: "Formación", value: "Máster en Filosofía de Oriente y Occidente (OINA)" },
              { icon: Heart, label: "Experiencia", value: "Profesor de Filosofía aplicada desde hace más de 35 años" },
            ]}
            tagLabel="Liderazgo Actual"
            tagColorClass="text-secondary"
            introduction={
              <p>Continuó el trabajo de su maestra y predecesora, <strong className="text-secondary">Delia Steinberg Guzmán</strong>, así como del fundador Jorge Ángel Livraga Rizzi. Ha aportado nuevas perspectivas para lograr una identidad filosófica más clara en un mundo complejo. Es autor del libro <em>"Las esferas de la Conciencia. Yo, los demás y el mundo"</em>, traducido a numerosos idiomas.</p>
            }
            legacyTitle="Trayectoria"
            legacyIcon={Sparkles}
            timelineTitle="Trayectoria"
            timelineIcon={Sparkles}
            timelineItems={[
              { year: "23 años", description: "Director de la sede Castellón, España", colorClass: "from-primary/5 to-transparent border-primary text-primary" },
              { year: "2013", description: "Asume la dirección de la sede central de España, en Madrid", colorClass: "from-secondary/5 to-transparent border-secondary text-secondary" },
              { year: "2017-2020", description: "Presidente internacional adjunto", colorClass: "from-accent/5 to-transparent border-accent text-accent" },
              { year: "2020", description: "Asume la Dirección internacional de Nueva Acrópolis", colorClass: "from-primary/5 to-transparent border-primary text-primary" },
            ]}
            quote="Ha aportado nuevas perspectivas para lograr una identidad filosófica más clara en un mundo complejo, manteniendo viva la tradición de la escuela."
            cardBorderColor="border-secondary/10"
            cardGradient="bg-gradient-to-br from-background via-background to-secondary/5"
            sidebarGradient="bg-gradient-to-b from-secondary/10 to-secondary/5"
            reversed
          />
        </TabsContent>

        <TabsContent value="peru" className="mt-0">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent/10 rounded-full text-accent font-bold text-sm">
              <Users className="h-4 w-4" />
              Directora Nacional Perú
            </div>
          </div>
          <LeaderProfile
            name="Beatriz Diez Canseco"
            years="Directora Nacional Perú"
            role="Más de 30 años de trayectoria"
            image={beatrizDiezCansecoPortrait}
            imageAlt="Beatriz Diez Canseco - Presidenta Nacional Nueva Acrópolis Perú"
            instagramUrl="https://www.instagram.com/beatriz_diezcanseco/"
            infoItems={[
              { icon: BookOpen, label: "Formación", value: "Maestra en Filosofía Oriental y Occidental (OINA)" },
              { icon: Users, label: "Comunidad", value: "5,000+ miembros activos y 65+ sedes" },
            ]}
            tagLabel="Directora Nacional desde 1986"
            tagColorClass="text-accent"
            introduction={
              <p>Maestra en Filosofía Oriental y Occidental (OINA), con más de 30 años enseñando filosofía. Bajo su dirección, Nueva Acrópolis Perú ha crecido hasta 5,000+ miembros activos en 65+ sedes.</p>
            }
            legacyTitle="Trayectoria y Legado"
            legacyIcon={Sparkles}
            timelineTitle="Trayectoria y Legado"
            timelineIcon={Sparkles}
            timelineItems={[
              { year: "1983-2020", description: "Fundó el Concurso Nacional de Música con 20,000+ escolares participantes", colorClass: "from-primary/5 to-transparent border-primary text-primary" },
              { year: "Desde 1986", description: "Directora Nacional liderando la expansión a nivel nacional", colorClass: "from-secondary/5 to-transparent border-secondary text-secondary" },
              { year: "Hoy", description: "Maestra OINA compartiendo sabiduría práctica con miles de estudiantes", colorClass: "from-accent/5 to-transparent border-accent text-accent" },
            ]}
            quote="Bajo su liderazgo, Nueva Acrópolis Perú se ha convertido en una comunidad de 5,000+ miembros en 65+ sedes, manteniendo vivo el ideal de una filosofía práctica y transformadora."
            cardBorderColor="border-accent/10"
            cardGradient="bg-gradient-to-br from-background via-background to-accent/5"
            sidebarGradient="bg-gradient-to-b from-accent/10 to-accent/5"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};
