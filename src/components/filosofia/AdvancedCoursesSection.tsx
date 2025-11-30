import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Brain, Globe, Heart, Users, Mic2, History, Compass, Sparkles, Star, Telescope, FlaskConical, Palette } from "lucide-react";

const advancedCourses = [
  { name: "Psicología", icon: Brain, description: "Comprensión profunda de la mente humana" },
  { name: "Sabiduría de Oriente y Occidente", icon: Globe, description: "Síntesis de las grandes tradiciones filosóficas" },
  { name: "Simbología de las Civilizaciones", icon: Compass, description: "El lenguaje universal de los símbolos" },
  { name: "Filosofía Aplicada y Ética", icon: Heart, description: "Principios para la vida diaria" },
  { name: "Sociopolítica", icon: Users, description: "Análisis filosófico de la sociedad" },
  { name: "Prácticas de Psicología", icon: Brain, description: "Ejercicios de autoconocimiento" },
  { name: "Oratoria", icon: Mic2, description: "El arte de la expresión verbal" },
  { name: "Historia de la Filosofía", icon: History, description: "Evolución del pensamiento humano" },
  { name: "Historia de las Religiones", icon: Sparkles, description: "Estudio comparado de tradiciones espirituales" },
  { name: "Dialéctica", icon: BookOpen, description: "El arte del razonamiento" },
  { name: "Antropogénesis", icon: Star, description: "Orígenes y evolución del ser humano" },
  { name: "Cosmogénesis", icon: Telescope, description: "Orígenes y estructura del universo" },
  { name: "Astrología", icon: Star, description: "Lenguaje simbólico del cosmos" },
  { name: "Filosofía de la Ciencia", icon: FlaskConical, description: "Fundamentos del conocimiento científico" },
  { name: "Estética y Metafísica", icon: Palette, description: "Belleza y realidades trascendentes" },
];

export const AdvancedCoursesSection = () => {
  return (
    <section 
      id="cursos-avanzados"
      className="py-12 md:py-20 bg-muted/30 scroll-mt-20"
    >
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
            <GraduationCap className="w-4 h-4" />
            FORMACIÓN CONTINUA
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Programa de <span className="text-secondary">Cursos Avanzados</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Después del curso introductorio, continúa tu formación filosófica con nuestro programa de cursos especializados. 
            Un viaje más profundo por las grandes tradiciones del pensamiento universal.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
          {advancedCourses.map((course, index) => {
            const IconComponent = course.icon;
            const colors = [
              "border-primary/20 hover:border-primary/40 hover:bg-primary/5",
              "border-secondary/20 hover:border-secondary/40 hover:bg-secondary/5",
              "border-accent/20 hover:border-accent/40 hover:bg-accent/5",
            ];
            const iconColors = ["text-primary", "text-secondary", "text-accent"];
            const colorClass = colors[index % 3];
            const iconColor = iconColors[index % 3];
            
            return (
              <Card 
                key={index}
                className={`p-5 bg-card border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${colorClass}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-background flex items-center justify-center ${iconColor}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground mb-1 text-sm md:text-base">{course.name}</h3>
                    <p className="text-xs md:text-sm text-foreground/60">{course.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Info Note */}
        <div className="text-center mt-10 md:mt-12">
          <p className="text-sm text-foreground/60 max-w-2xl mx-auto">
            Los cursos avanzados están disponibles para quienes hayan completado el curso introductorio "Conócete a Ti Mismo". 
            Consulta en tu sede más cercana sobre fechas y disponibilidad.
          </p>
        </div>
      </div>
    </section>
  );
};
