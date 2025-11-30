import { ParallaxImage } from "@/components/ParallaxImage";
import { SparklesText } from "@/components/ui/sparkles-text";
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
  decorativeVariant?: "default" | "cultura" | "voluntariado" | "inscripcion" | "sedes";
}

// Helper component to wrap sparkle text
export const SparkleWord = ({ children }: { children: string }) => (
  <SparklesText sparklesCount={12} colors={{ first: "#d4a855", second: "#e8934a" }}>
    {children}
  </SparklesText>
);

const DecorativeElements = ({ variant }: { variant: PageHeroBannerProps["decorativeVariant"] }) => {
  switch (variant) {
    case "cultura":
      return (
        <>
          <div className="absolute top-0 left-0 w-72 lg:w-[450px] h-72 lg:h-[450px] bg-secondary/40 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-orange/35 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/4 left-20 w-32 lg:w-56 h-32 lg:h-56 border-4 border-orange/70 rounded-3xl rotate-12 animate-float-slower"></div>
          <div className="absolute bottom-1/4 right-32 w-24 lg:w-40 h-24 lg:h-40 bg-secondary/60 clip-path-triangle animate-float-slow"></div>
          <svg className="absolute top-1/3 left-10 w-40 lg:w-72 h-40 lg:h-72 opacity-60 animate-float-slower" viewBox="0 0 200 200">
            <rect x="40" y="40" width="120" height="120" fill="none" stroke="hsl(35, 90%, 55%)" strokeWidth="4" rx="20" />
            <rect x="60" y="60" width="80" height="80" fill="none" stroke="hsl(35, 90%, 55%)" strokeWidth="3" opacity="0.7" rx="10" />
            <circle cx="100" cy="100" r="30" fill="hsl(35, 90%, 55%)" opacity="0.4" />
          </svg>
          <svg className="absolute bottom-1/4 left-1/3 w-32 lg:w-48 h-32 lg:h-48 opacity-70" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" fill="hsl(35, 90%, 55%)" opacity="0.5" />
          </svg>
          <div className="absolute top-1/3 right-1/4 w-12 lg:w-20 h-12 lg:h-20 bg-secondary rounded-full opacity-75 animate-pulse-glow"></div>
          <div className="absolute bottom-1/3 left-1/2 w-10 lg:w-14 h-10 lg:h-14 bg-orange rotate-45 opacity-65"></div>
        </>
      );
    case "voluntariado":
      return (
        <>
          <div className="absolute top-1/4 right-10 w-64 lg:w-[420px] h-64 lg:h-[420px] bg-secondary/40 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-1/4 left-10 w-48 lg:w-80 h-48 lg:h-80 bg-orange/35 rounded-full blur-3xl animate-float-slower"></div>
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] lg:w-[600px] h-[350px] lg:h-[600px] opacity-50 animate-rotate-slow" viewBox="0 0 800 800">
            <circle cx="400" cy="400" r="300" stroke="hsl(35, 90%, 55%)" strokeWidth="4" fill="none" opacity="0.4" />
            <circle cx="400" cy="400" r="220" stroke="hsl(35, 90%, 55%)" strokeWidth="4" fill="none" opacity="0.5" />
            <circle cx="400" cy="400" r="140" stroke="hsl(35, 90%, 55%)" strokeWidth="4" fill="none" opacity="0.6" />
            <circle cx="400" cy="400" r="80" fill="hsl(35, 90%, 55%)" opacity="0.3" />
          </svg>
          <div className="absolute top-1/3 right-1/4 w-20 lg:w-32 h-20 lg:h-32 border-4 border-secondary/80 rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-1/3 left-1/3 w-16 lg:w-24 h-16 lg:h-24 bg-orange/70 rotate-45 animate-float-slow"></div>
          <svg className="absolute top-20 right-1/3 w-24 lg:w-40 h-24 lg:h-40 opacity-70" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="hsl(35, 90%, 55%)" opacity="0.5" />
          </svg>
          <svg className="absolute bottom-20 left-1/4 w-20 lg:w-36 h-20 lg:h-36 opacity-65 animate-float-slower" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" fill="hsl(35, 90%, 55%)" opacity="0.5" rx="10" />
          </svg>
        </>
      );
    case "inscripcion":
      return (
        <>
          <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-secondary/40 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 left-0 w-72 lg:w-[400px] h-72 lg:h-[400px] bg-orange/30 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute top-16 right-16 w-32 lg:w-48 h-32 lg:h-48 border-4 border-secondary/50 rounded-full animate-float-slower"></div>
          <div className="absolute bottom-24 right-1/4 w-24 lg:w-32 h-24 lg:h-32 bg-secondary/40 rotate-45 animate-float-slow"></div>
          <svg className="absolute top-1/3 right-10 w-40 lg:w-64 h-40 lg:h-64 opacity-50" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(35, 90%, 55%)" strokeWidth="3" />
            <circle cx="100" cy="100" r="50" fill="hsl(35, 90%, 55%)" opacity="0.3" />
          </svg>
          <div className="absolute top-32 right-1/3 w-10 lg:w-14 h-10 lg:h-14 bg-secondary rounded-full opacity-60"></div>
          <div className="absolute bottom-36 left-1/5 w-6 lg:w-10 h-6 lg:h-10 bg-orange rounded-full opacity-50 animate-pulse-glow"></div>
        </>
      );
    case "sedes":
      return (
        <>
          <div className="absolute top-0 left-0 w-72 lg:w-[400px] h-72 lg:h-[400px] bg-secondary/40 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-orange/35 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-20 left-20 w-32 lg:w-48 h-32 lg:h-48 border-4 border-secondary/50 rounded-full animate-float-slower"></div>
          <svg className="absolute bottom-1/3 right-10 w-40 lg:w-64 h-40 lg:h-64 opacity-50" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(35, 90%, 55%)" strokeWidth="3" />
            <circle cx="100" cy="100" r="50" fill="hsl(35, 90%, 55%)" opacity="0.3" />
          </svg>
          <div className="absolute top-24 right-1/4 w-24 lg:w-32 h-24 lg:h-32 bg-secondary/40 rotate-45 animate-float-slow"></div>
          <div className="absolute bottom-32 left-1/3 w-10 lg:w-14 h-10 lg:h-14 bg-secondary rounded-full opacity-60"></div>
        </>
      );
    default: // "default" - Filosofía style
      return (
        <>
          <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-secondary/40 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 left-0 w-72 lg:w-[500px] h-72 lg:h-[500px] bg-orange/35 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute top-20 right-20 w-40 lg:w-64 h-40 lg:h-64 border-4 border-secondary/60 rounded-full animate-float-slower"></div>
          <div className="absolute bottom-32 left-32 w-32 lg:w-48 h-32 lg:h-48 bg-secondary/50 rotate-45 animate-float-slow"></div>
          <svg className="absolute top-1/4 right-0 w-48 lg:w-80 h-48 lg:h-80 opacity-60" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(35, 90%, 55%)" strokeWidth="4" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(35, 90%, 55%)" strokeWidth="3" opacity="0.7" />
            <circle cx="100" cy="100" r="40" fill="hsl(35, 90%, 55%)" opacity="0.4" />
          </svg>
          <svg className="absolute bottom-20 right-1/4 w-24 lg:w-40 h-24 lg:h-40 opacity-70 animate-rotate-slow" viewBox="0 0 100 100">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="hsl(35, 90%, 55%)" opacity="0.5" />
          </svg>
          <div className="absolute top-40 right-1/3 w-12 lg:w-16 h-12 lg:h-16 bg-secondary rounded-full opacity-70"></div>
          <div className="absolute bottom-40 left-1/4 w-8 lg:w-12 h-8 lg:h-12 bg-orange rounded-full opacity-60 animate-pulse-glow"></div>
        </>
      );
  }
};

export const PageHeroBanner = ({
  bannerImage,
  bannerAlt,
  badgeText,
  badgeIcon: BadgeIcon,
  badgeVariant = "primary",
  title,
  description,
  objectPosition,
  decorativeVariant = "default",
}: PageHeroBannerProps) => {
  const badgeClasses = badgeVariant === "secondary" 
    ? "bg-secondary/90" 
    : "bg-primary/90";

  return (
    <section className="relative py-14 sm:py-16 md:py-28 lg:py-36 overflow-hidden mt-16 sm:mt-20">
      <ParallaxImage
        src={bannerImage} 
        alt={bannerAlt} 
        speed={0.5} 
        isHero 
        objectPosition={objectPosition}
      />
      {/* Base gradient - symmetric for sedes, original for others */}
      {decorativeVariant === "sedes" ? (
        <>
          {/* Symmetric side gradients for sedes to focus on center building */}
          <div className="absolute inset-y-0 left-0 w-[35%] bg-gradient-to-r from-black/90 via-black/70 to-transparent z-[1]" />
          <div className="absolute inset-y-0 right-0 w-[35%] bg-gradient-to-l from-black/90 via-black/70 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-black/30 z-[1]" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-[1]" />
      )}
      
      {/* Decorative orange graphic elements - hidden on mobile for performance */}
      <div className="absolute inset-0 z-[2] pointer-events-none hidden md:block">
        <DecorativeElements variant={decorativeVariant} />
      </div>

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4 md:space-y-6">
          <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 ${badgeClasses} backdrop-blur-sm text-white rounded-full text-[10px] sm:text-xs md:text-sm font-bold mb-2 md:mb-4 shadow-lg`}>
            {BadgeIcon && <BadgeIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />}
            {badgeText}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg px-2">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/95 leading-relaxed drop-shadow-md px-2">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};
