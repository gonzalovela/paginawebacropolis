import { ReactNode, RefObject } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/ui/animated-button";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface CTASectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  note?: string;
  primaryButtonText: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
  isVisible?: boolean;
  sectionRef?: RefObject<HTMLElement | null>;
}

export const CTASection = ({
  icon: Icon,
  title,
  description,
  note,
  primaryButtonText,
  primaryButtonLink = "/inscripcion",
  secondaryButtonText = "Volver al inicio",
  secondaryButtonLink = "/",
  className = "",
  isVisible = true,
  sectionRef,
}: CTASectionProps) => {
  return (
    <section
      ref={sectionRef}
      className={`py-10 sm:py-12 md:py-20 bg-gradient-subtle transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8 md:p-12 bg-gradient-hero text-primary-foreground">
            <div className="text-center space-y-4 sm:space-y-6">
              <Icon className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 mx-auto opacity-90" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed px-2">
                {description}
              </p>
              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                {note && (
                  <p className="text-xs sm:text-sm opacity-75 px-2">{note}</p>
                )}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <AnimatedButton
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-auto"
                    asChild
                  >
                    <Link to={primaryButtonLink}>
                      {primaryButtonText}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                  </AnimatedButton>
                  {secondaryButtonText && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto bg-background/10 hover:bg-background/20 border-primary-foreground/30"
                      asChild
                    >
                      <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
