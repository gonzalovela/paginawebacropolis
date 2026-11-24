import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedButton } from "@/components/ui/animated-button";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { trackButtonClick } from "@/utils/analytics";

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
}: CTASectionProps) => {
  return (
    <AnimatedSection
      as="section"
      className={`py-16 md:py-24 bg-gradient-subtle ${className}`}
    >
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8 md:p-12 rounded-3xl border border-secondary/20 bg-secondary/5 text-foreground">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="w-12 h-12 mx-auto rounded-full bg-secondary/15 text-secondary flex items-center justify-center"><Icon className="h-6 w-6" /></div>
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95]">
                <span className="bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent">{title}</span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
                {description}
              </p>
              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                {note && (
                  <p className="text-xs sm:text-sm text-muted-foreground px-2">{note}</p>
                )}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <AnimatedButton
                    size="lg"
                    variant="secondary"
                    className="w-full sm:w-auto hover:shadow-[0_0_30px_hsl(var(--secondary)/0.6)] transition-shadow"
                    asChild
                    onClick={() => trackButtonClick('CTA Section', primaryButtonText, primaryButtonLink)}
                  >
                    <Link to={primaryButtonLink}>
                      {primaryButtonText}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Link>
                  </AnimatedButton>
                  {secondaryButtonText && (
                    <Button
                      size="lg"
                      variant="ghost"
                      className="w-full sm:w-auto border border-border hover:bg-secondary/10"
                      asChild
                      onClick={() => trackButtonClick('CTA Section', secondaryButtonText, secondaryButtonLink)}
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
    </AnimatedSection>
  );
};
