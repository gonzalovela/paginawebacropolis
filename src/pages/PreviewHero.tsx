import { Link } from "react-router-dom";
import { MapPin, BookOpen, ArrowUpRight, ArrowRight, Heart, Compass, Target, Sparkles, Users2, Users, Clock, CalendarDays, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sunset-wide.jpg";
import philosophyImage from "@/assets/philosophy-contemplation-peru.jpg";
import cultureImage from "@/assets/cultura-filosofica-sacsayhuaman.jpg";
import volunteeringImage from "@/assets/banner-voluntariado.jpg";
import { PageLayout } from "@/components/layouts";
import { principios } from "@/data/principios-data";
import CourseAdvisor from "@/components/preview/CourseAdvisor";

const gradientText = "bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent";

const Hero = () => (
  <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
    <img src={heroImage} alt="Joven profesional contemplando el atardecer en la playa" width={1672} height={940}
      className="absolute inset-0 w-full h-full object-cover object-center"
      style={{ filter: "contrast(1.08) saturate(1.12)" }} />
    <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/25 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
    <div className="relative z-10 container px-6 pb-10 pt-32">
      <div className="max-w-3xl animate-fade-in-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-md px-4 py-1.5 text-xs text-primary-foreground mb-8">
          <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" /> Inscripciones abiertas
        </span>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-primary-foreground leading-[0.95] mb-6">
          Filosofía<br /><span className={gradientText}>para la vida.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mb-10">
          Respuestas profundas, cultura viva y voluntariado. Una escuela para conocerte a ti mismo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" variant="secondary" className="px-8 py-6 shadow-medium hover:shadow-[0_0_30px_hsl(var(--secondary)/0.6)] transition-shadow" asChild>
            <Link to="/quienes-somos"><BookOpen className="mr-2 h-4 w-4" />Quiénes Somos</Link>
          </Button>
          <Button size="lg" variant="ghost" className="px-8 py-6 text-primary-foreground border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-md hover:bg-primary-foreground/20 hover:text-primary-foreground" asChild>
            <Link to="/sedes"><MapPin className="mr-2 h-4 w-4" />Encuentra tu Sede</Link>
          </Button>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-3 max-w-2xl rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-xl divide-x divide-primary-foreground/20">
        {[["65+", "Sedes en Perú"], ["+40", "Años en Perú"], ["3", "Pilares"]].map(([n, l]) => (
          <div key={l} className="p-4 md:p-6 text-center">
            <div className="text-2xl md:text-4xl font-bold text-primary-foreground">{n}</div>
            <div className="text-xs md:text-sm text-primary-foreground/75">{l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SectionTitle = ({ kicker, a, b }: { kicker: string; a: string; b: string }) => (
  <div className="max-w-3xl mb-10 md:mb-14">
    <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-4">{kicker}</p>
    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-foreground">
      {a} <span className={gradientText}>{b}</span>
    </h2>
  </div>
);

const Principles = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container px-6">
      <SectionTitle kicker="Nuestros principios" a="Tres principios," b="un camino." />
      <div className="grid md:grid-cols-3 gap-6">
        {principios.map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={i} className="group rounded-2xl border bg-card p-6 md:p-8 hover:shadow-medium hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between mb-8">
                <div className={`w-12 h-12 rounded-full bg-secondary/15 text-secondary flex items-center justify-center`}><Icon className="h-6 w-6" /></div>
                <span className="text-5xl font-bold text-muted-foreground/20">0{i + 1}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">{p.title}</h3>
              <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-4">{p.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const pillars = [
  { img: philosophyImage, t: "Filosofía", s: "para conocerse", to: "/filosofia" },
  { img: cultureImage, t: "Cultura", s: "para encontrarnos", to: "/cultura" },
  { img: volunteeringImage, t: "Voluntariado", s: "para transformar", to: "/voluntariado" },
];

const Pillars = () => (
  <section className="py-16 md:py-24 bg-muted/40">
    <div className="container px-6">
      <SectionTitle kicker="Nuestros pilares" a="Aprende, vive" b="y transforma." />
      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((p) => (
          <Link key={p.t} to={p.to} className="group relative h-[360px] md:h-[480px] rounded-2xl overflow-hidden">
            <img src={p.img} alt={p.t} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 p-8 w-full flex items-end justify-between">
              <div>
                <h3 className="text-4xl font-bold text-primary-foreground tracking-tight">{p.t}</h3>
                <p className={`text-xl font-semibold ${gradientText}`}>{p.s}</p>
              </div>
              <span className="w-12 h-12 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-md flex items-center justify-center text-primary-foreground group-hover:bg-secondary transition-colors">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const benefits = [
  { icon: Heart, text: "Conocerte más para desarrollar tus fortalezas y ser mejor persona." },
  { icon: Compass, text: "Encontrar respuestas a tus interrogantes sobre la vida." },
  { icon: Target, text: "Descubrir el sentido profundo de la existencia." },
  { icon: Sparkles, text: "Definir tus valores, para dejar una huella en el mundo." },
  { icon: Users2, text: "Comprender a los demás y el porqué de las circunstancias que vives." },
  { icon: BookOpen, text: "Tomar mejores decisiones, con la sabiduría de grandes filósofos y civilizaciones." },
];
const details = [
  { icon: Clock, t: "Duración", d: "24 horas pedagógicas" },
  { icon: Users, t: "Modalidad", d: "Presencial en tu sede más cercana" },
  { icon: CalendarDays, t: "Frecuencia", d: "1 vez por semana" },
];

const Course = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container px-6">
      <div className="max-w-3xl mb-10 md:mb-14">
        <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-4">Curso introductorio</p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-foreground mb-6">Conócete <span className={gradientText}>a ti mismo.</span></h2>
        <p className="text-lg text-muted-foreground">¿Quién eres en realidad? Acompáñanos en un apasionante viaje hacia la autoconciencia y descubre las fortalezas de tu mundo interior.</p>
      </div>
      <div className="grid lg:grid-cols-5 gap-8 items-start">
        <div className="lg:col-span-3">
          <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-6">En este curso aprenderás a</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="group rounded-2xl border bg-card p-6 hover:shadow-medium hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center"><b.icon className="h-5 w-5" /></div>
                  <span className="text-3xl font-bold text-muted-foreground/20">0{i + 1}</span>
                </div>
                <p className="text-foreground/80 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 rounded-3xl border border-secondary/20 bg-secondary/5 text-foreground p-6 md:p-10 lg:sticky lg:top-24">
          <h3 className="text-3xl font-bold tracking-tight mb-4">Información <span className={gradientText}>del curso</span></h3>
          <p className="text-muted-foreground leading-relaxed mb-8">A través de las enseñanzas de grandes pensadores y civilizaciones, exploraremos la filosofía de manera práctica y vivencial para convertirnos en mejores personas y tomar decisiones acertadas.</p>
          <div className="divide-y divide-border border-y border-border mb-8">
            {details.map((d) => (
              <div key={d.t} className="flex items-center gap-4 py-4">
                <div className="w-10 h-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0"><d.icon className="h-5 w-5" /></div>
                <div className="flex-1 flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4"><span className="font-semibold">{d.t}</span><span className="text-muted-foreground sm:text-right">{d.d}</span></div>
              </div>
            ))}
          </div>
          <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-3">Incluye</p>
          <ul className="space-y-2 mb-8 text-foreground/80">
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />Prácticas y dinámicas en clase</li>
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" /><a href="http://acropolischannel.pe/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">Acceso gratuito a Acrópolis Channel por 3 meses</a></li>
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />Certificado de participación</li>
          </ul>
          <div className="flex flex-col gap-3">
            <Button size="lg" variant="secondary" className="py-6 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.6)] transition-shadow" asChild>
              <Link to="/inscripcion#formulario">Inscríbete ahora<ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="ghost" className="py-6 border border-border text-foreground hover:bg-secondary/10" asChild>
              <Link to="/filosofia#conocete-a-ti-mismo">Ver programa completo</Link>
            </Button>
            <Link to="/filosofia#cursos-avanzados" className="text-center text-sm text-secondary hover:underline pt-1">Programa de Cursos Avanzados</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function PreviewHero() {
  return (
    <PageLayout>
      <Hero /><Principles /><Pillars /><Course /><CourseAdvisor />
    </PageLayout>
  );
}
