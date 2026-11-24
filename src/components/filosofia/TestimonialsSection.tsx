import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/filosofia-data";

export const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container px-6 mb-8 md:mb-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-3 md:mb-4">
            <Quote className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Testimonios
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] text-foreground">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">estudiantes</span>
          </h2>
        </div>
      </div>
      
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-muted/30 to-transparent z-10" />
        
        <Marquee pauseOnHover className="[--duration:30s] [--gap:1.5rem]">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={cn(
                "w-[320px] md:w-[380px] p-6 rounded-2xl bg-card border border-border/60 hover:-translate-y-1",
                "hover:shadow-lg transition-all duration-300 group cursor-pointer"
              )}
            >
              <Quote className="w-8 h-8 text-secondary/30 mb-4 group-hover:text-secondary/50 transition-colors" />
              <p className="text-foreground/70 italic leading-relaxed mb-6 line-clamp-4">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-foreground/50">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
