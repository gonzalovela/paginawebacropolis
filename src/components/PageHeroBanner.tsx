import { ParallaxImage } from "@/components/ParallaxImage";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface PageHeroBannerProps {
  bannerImage: string;
  bannerAlt: string;
  badgeText: string;
  badgeIcon?: LucideIcon;
  badgeVariant?: "primary" | "secondary";
  title: ReactNode;
  description: string;
  objectPosition?: string;
  imageScale?: number;
  decorativeVariant?: "default" | "filosofia" | "cultura" | "voluntariado" | "inscripcion" | "sedes";
}

// Helper component to wrap sparkle text
export const SparkleWord = ({ children }: { children: string }) => (
  <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">{children}</span>
);

export const PageHeroBanner = ({
  bannerImage,
  bannerAlt,
  badgeText,
  badgeIcon: BadgeIcon,
  badgeVariant = "primary",
  title,
  description,
  objectPosition,
  imageScale,
  decorativeVariant = "default",
}: PageHeroBannerProps) => {
  void badgeVariant; void decorativeVariant;
  return (
    <section className="relative min-h-[70svh] md:min-h-[75vh] flex flex-col justify-end overflow-hidden">
      <ParallaxImage src={bannerImage} alt={bannerAlt} speed={0.5} isHero objectPosition={objectPosition} scale={imageScale} />
      <div className="absolute inset-0 bg-foreground/25 sm:hidden z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/30 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent z-[1]" />
      <div className="container px-6 relative z-10 pb-12 md:pb-16 pt-32">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary-foreground mb-6">
            {BadgeIcon ? <BadgeIcon className="h-3.5 w-3.5 text-secondary" /> : <span className="h-2 w-2 rounded-full bg-secondary" />}
            {badgeText}
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-primary-foreground mb-5 [text-shadow:0_2px_16px_hsl(var(--foreground)/0.4)]">
            {title}
          </h1>
          <p className="text-base md:text-xl text-primary-foreground/90 max-w-xl">{description}</p>
        </div>
      </div>
    </section>
  );
};
