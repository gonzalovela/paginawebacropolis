import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

type Rec = { intro: string; aprendizajes: { titulo: string; porque: string }[]; actividades: string[] };
const ejemplos = ["Quiero manejar mejor el estrés", "Busco un propósito en mi vida", "Me interesa la filosofía estoica"];
const gradientText = "bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent";

export default function CourseAdvisor() {
  const [texto, setTexto] = useState("");
  const [loading, setLoading] = useState(false);
  const [rec, setRec] = useState<Rec | null>(null);
  const [error, setError] = useState("");

  const enviar = async () => {
    if (texto.trim().length < 5) return setError("Cuéntanos un poco más (mínimo 5 caracteres).");
    setLoading(true); setError(""); setRec(null);
    const { data, error } = await supabase.functions.invoke("recomendar-curso", { body: { texto } });
    setLoading(false);
    if (error || data?.error) return setError(data?.error || "No pudimos generar tu recomendación. Intenta de nuevo.");
    setRec(data);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container px-6 max-w-4xl">
        <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-4 flex items-center gap-2"><Sparkles className="h-4 w-4" />Orientador con IA</p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[0.95] text-foreground mb-4">¿Qué buscas <span className={gradientText}>aprender?</span></h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-8">Cuéntanos con tus palabras qué te inquieta o te interesa y te mostramos lo que el curso tiene para ti.</p>
        <div className="rounded-3xl border bg-card p-4 sm:p-6 shadow-soft">
          <Textarea value={texto} onChange={(e) => setTexto(e.target.value.slice(0, 600))} placeholder="Ej.: Siento mucho estrés y quiero aprender a dominar mis pensamientos…" className="min-h-[110px] text-base resize-none border-0 focus-visible:ring-0 p-0 shadow-none" />
          <div className="flex flex-wrap gap-2 my-4">
            {ejemplos.map((e) => (
              <button key={e} type="button" onClick={() => setTexto(e)} className="text-xs sm:text-sm rounded-full border border-secondary/30 px-3 py-1.5 text-foreground/80 hover:bg-secondary/10">{e}</button>
            ))}
          </div>
          <Button onClick={enviar} disabled={loading} size="lg" variant="secondary" className="w-full sm:w-auto py-6">
            {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Pensando…</> : <>Recomiéndame<ArrowRight className="ml-2 h-4 w-4" /></>}
          </Button>
          {error && <p className="text-destructive text-sm mt-3">{error}</p>}
        </div>
        {rec && (
          <div className="mt-8 rounded-3xl border border-secondary/20 bg-secondary/5 p-5 sm:p-8 animate-fade-in">
            <p className="text-lg text-foreground mb-6">{rec.intro}</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {rec.aprendizajes.map((a, i) => (
                <div key={i} className="rounded-2xl border bg-card p-5">
                  <p className="font-semibold text-foreground mb-1">{a.titulo}</p>
                  <p className="text-sm text-muted-foreground">{a.porque}</p>
                </div>
              ))}
            </div>
            {rec.actividades.length > 0 && <>
              <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-3">Actividades para ti</p>
              <ul className="space-y-2 mb-6">{rec.actividades.map((a, i) => <li key={i} className="flex gap-2 text-foreground/80"><CheckCircle2 className="h-4 w-4 text-secondary mt-1 shrink-0" />{a}</li>)}</ul>
            </>}
            <Button size="lg" variant="secondary" className="w-full sm:w-auto py-6" asChild><Link to="/inscripcion#formulario">Inscríbete en tu sede<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
        )}
      </div>
    </section>
  );
}
