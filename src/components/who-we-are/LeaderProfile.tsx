import { Card } from "@/components/ui/card";
import { OptimizedImage } from "@/components/OptimizedImage";
import { LucideIcon, Instagram } from "lucide-react";

interface InfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface LegacyItem {
  title: string;
  description: string;
  colorClass: string;
}

interface TimelineItem {
  year: string;
  description: string;
  colorClass: string;
}

interface LeaderProfileProps {
  name: string;
  years: string;
  role: string;
  image: string;
  imageAlt: string;
  infoItems: InfoItem[];
  tagLabel: string;
  tagColorClass: string;
  introduction: React.ReactNode;
  legacyTitle: string;
  legacyIcon: LucideIcon;
  legacyItems?: LegacyItem[];
  timelineTitle?: string;
  timelineIcon?: LucideIcon;
  timelineItems?: TimelineItem[];
  quote: string;
  cardBorderColor: string;
  cardGradient: string;
  sidebarGradient: string;
  reversed?: boolean;
  priority?: boolean;
  grayscale?: boolean;
  instagramUrl?: string;
}

export const LeaderProfile = ({
  name,
  years,
  role,
  image,
  imageAlt,
  infoItems,
  tagLabel,
  tagColorClass,
  introduction,
  legacyTitle,
  legacyIcon: LegacyIcon,
  legacyItems,
  timelineTitle,
  timelineIcon: TimelineIcon,
  timelineItems,
  quote,
  cardBorderColor,
  cardGradient,
  sidebarGradient,
  reversed = false,
  priority = false,
  grayscale = false,
  instagramUrl,
}: LeaderProfileProps) => {
  const imageContent = (
    <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant ring-2 sm:ring-4 ring-background">
      <OptimizedImage 
        src={image} 
        alt={imageAlt}
        className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${grayscale ? 'grayscale-[30%] group-hover:grayscale-0' : ''}`}
        containerClassName="w-full h-full"
        priority={priority}
      />
      {instagramUrl && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
          <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-white drop-shadow-lg" />
        </div>
      )}
    </div>
  );

  const sidebarContent = (
    <div className={`${sidebarGradient} p-5 sm:p-8 md:p-10 flex flex-col items-center justify-center space-y-4 sm:space-y-6`}>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        {instagramUrl ? (
          <a 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative block cursor-pointer"
            aria-label={`Ver perfil de Instagram`}
          >
            {imageContent}
          </a>
        ) : (
          <div className="relative">
            {imageContent}
          </div>
        )}
      </div>
      
      <div className="text-center space-y-1 sm:space-y-2">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
          {name}
        </h3>
        <p className={`text-base sm:text-lg font-medium ${tagColorClass}`}>
          {years}
        </p>
        <p className="text-xs sm:text-sm text-foreground/60 italic">
          {role}
        </p>
      </div>

      <div className="w-full space-y-2 sm:space-y-3 pt-2 sm:pt-4">
        {infoItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-background/50 rounded-lg sm:rounded-xl">
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[10px] sm:text-xs font-semibold text-foreground/80 mb-0.5 sm:mb-1">{item.label}</p>
                <p className="text-xs sm:text-sm text-foreground/70">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const contentSection = (
    <div className="p-6 sm:p-8 md:p-10 space-y-5 sm:space-y-6">
      <div className="space-y-3 sm:space-y-4">
        <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 ${tagColorClass.replace('text-', 'bg-')}/5 rounded-lg border ${tagColorClass.replace('text-', 'border-')}/10`}>
          <span className={`text-xs sm:text-sm font-semibold ${tagColorClass}`}>{tagLabel}</span>
        </div>
        
        <div className="text-foreground/90 leading-relaxed text-sm sm:text-base md:text-lg">
          {introduction}
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      {legacyItems && legacyItems.length > 0 && (
        <>
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
              <LegacyIcon className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
              {legacyTitle}
            </h4>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {legacyItems.map((item, index) => (
                <div key={index} className={`p-2.5 sm:p-4 ${item.colorClass} rounded-lg sm:rounded-xl border hover:opacity-80 transition-colors`}>
                  <p className="text-xs sm:text-sm font-semibold text-foreground mb-0.5 sm:mb-1">{item.title}</p>
                  <p className="text-[10px] sm:text-xs text-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
        </>
      )}

      {timelineItems && timelineItems.length > 0 && TimelineIcon && (
        <>
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
              <TimelineIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              {timelineTitle}
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {timelineItems.map((item, index) => (
                <div key={index} className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r ${item.colorClass} rounded-xl border-l-4`}>
                  <span className="font-bold text-sm sm:text-base min-w-[80px] sm:min-w-[90px]">{item.year}</span>
                  <p className="text-sm sm:text-base text-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
        </>
      )}

      <div className="p-4 sm:p-6 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-lg sm:rounded-xl border border-primary/20">
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed italic">
          "{quote}"
        </p>
      </div>
    </div>
  );

  return (
    <Card className={`overflow-hidden border-2 ${cardBorderColor} ${cardGradient}`}>
      <div className={`grid lg:grid-cols-2 gap-0`}>
        {reversed ? (
          <>
            <div className="order-2 lg:order-1">{contentSection}</div>
            <div className="order-1 lg:order-2">{sidebarContent}</div>
          </>
        ) : (
          <>
            {sidebarContent}
            {contentSection}
          </>
        )}
      </div>
    </Card>
  );
};
