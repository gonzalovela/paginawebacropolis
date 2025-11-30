import { Card } from "@/components/ui/card";
import { OptimizedImage } from "@/components/OptimizedImage";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgramActivityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  imagePosition?: string;
  items?: string[];
  itemsLabel?: string;
  variant?: "compact" | "full";
  className?: string;
}

export const ProgramActivityCard = ({
  icon: Icon,
  title,
  description,
  image,
  imageAlt,
  imagePosition = "center",
  items = [],
  itemsLabel = "Temas que exploramos:",
  variant = "compact",
  className,
}: ProgramActivityCardProps) => {
  if (variant === "full") {
    return (
      <Card className={cn("overflow-hidden hover:shadow-elevated transition-all duration-500 group border-0", className)}>
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
          {/* Background Image with Overlay */}
          <OptimizedImage
            src={image}
            alt={imageAlt || title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            containerClassName="absolute inset-0"
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:from-black/70 md:via-black/30 group-hover:from-black/80 group-hover:via-black/40 transition-all duration-500" />
          
          {/* Content Overlay */}
          <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-10 text-white">
            {/* Icon and Title */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 md:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-accent/90 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                {title}
              </h3>
            </div>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-2 md:mb-4 line-clamp-2 sm:line-clamp-3 group-hover:line-clamp-none transition-all">
              {description}
            </p>
            
            {/* Activities List - Hidden by default, shown on hover (desktop only) */}
            {items.length > 0 && (
              <div className="hidden md:block max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-500">
                <ul className="space-y-2 pt-2 border-t border-white/20">
                  {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80">
                      <span className="text-accent mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Card>
    );
  }

  // Compact variant (default) - for Cultura page grid
  return (
    <Card className={cn("overflow-hidden hover:shadow-medium transition-all group", className)}>
      {/* Image Section */}
      <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
        <OptimizedImage 
          src={image} 
          alt={imageAlt || title}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`}
          containerClassName="w-full h-full"
          style={{ objectPosition: imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 flex items-center gap-2 md:gap-3">
          <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-secondary/90 backdrop-blur-sm text-white flex items-center justify-center shadow-lg">
            <Icon className="h-4 w-4 md:h-6 md:w-6" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">
            {title}
          </h3>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-4 md:p-6 space-y-3 md:space-y-4">
        <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
          {description}
        </p>
        {items.length > 0 && (
          <div>
            <p className="text-xs md:text-sm font-semibold text-foreground/60 mb-2">{itemsLabel}</p>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {items.map((item, idx) => (
                <span key={idx} className="px-2 md:px-3 py-0.5 md:py-1 bg-muted text-foreground/70 rounded-full text-[10px] md:text-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
