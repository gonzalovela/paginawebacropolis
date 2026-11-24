import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sunset-vibrant.jpg";
import logo from "@/assets/logo-escuela-filosofia.png";

const HeroOption1 = () => (
  <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
    <img src={heroImage} alt="Atardecer" className="absolute inset-0 w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]" style={{ filter: "saturate(1.1) contrast(1.05)" }} />
    <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-background" />
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, hsl(var(--foreground) / 0.55) 100%)" }} />
    <div className="relative z-10 container px-6 text-center max-w-4xl animate-fade-in-up">
      <img src={logo} alt="Nueva Acrópolis" className="h-16 md:h-20 mx-auto mb-8 brightness-0 invert opacity-90" />
      <p className="uppercase tracking-[0.4em] text-xs md:text-sm text-primary-foreground/80 mb-6">Filosofía · Cultura · Voluntariado</p>
      <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-6">
        Una escuela de filosofía<br /><em className="text-secondary not-italic font-light italic">para la vida</em>
      </h1>
      <div className="w-16 h-px bg-secondary mx-auto mb-6" />
      <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 font-light">
        Encuentra respuestas profundas sobre la vida y vive la experiencia práctica de la cultura y el voluntariado.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary" className="px-8 py-6 rounded-full shadow-medium" asChild>
          <Link to="/quienes-somos">Quiénes Somos <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
        <Button size="lg" variant="outline" className="px-8 py-6 rounded-full bg-primary-foreground/10 border-primary-foreground/40 text-primary-foreground backdrop-blur-md hover:bg-primary-foreground/20 hover:text-primary-foreground" asChild>
          <Link to="/sedes"><MapPin className="mr-2 h-4 w-4" />Encuentra tu Sede</Link>
        </Button>
      </div>
      <p className="mt-14 text-sm tracking-widest uppercase text-primary-foreground/70">Más de 65 sedes en todo el Perú</p>
    </div>
  </section>
);

const HeroOption2 = () => (
  <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
    <img src={heroImage} alt="Atardecer" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/40 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
    <div className="relative z-10 container px-6 pb-10 pt-32">
      <div className="max-w-3xl animate-fade-in-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-md px-4 py-1.5 text-xs text-primary-foreground mb-8">
          <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" /> Inscripciones abiertas
        </span>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-primary-foreground leading-[0.95] mb-6">
          Filosofía<br />
          <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">para la vida.</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 max-w-xl mb-10">
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

export default function PreviewHero() {
  const [opt, setOpt] = useState<1 | 2>(1);
  return (
    <div className="relative bg-background">
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-1 rounded-full bg-background/90 backdrop-blur p-1 shadow-medium border">
        {[1, 2].map((n) => (
          <button key={n} onClick={() => setOpt(n as 1 | 2)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${opt === n ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}>
            Opción {n}
          </button>
        ))}
      </div>
      {opt === 1 ? <HeroOption1 /> : <HeroOption2 />}
      <div className="h-40" />
    </div>
  );
}
