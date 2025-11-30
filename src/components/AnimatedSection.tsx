import { ReactNode, ElementType } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  threshold?: number;
}

export const AnimatedSection = ({
  children,
  className,
  as: Component = "div",
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const { elementRef, isVisible } = useScrollAnimation(threshold);

  return (
    <Component
      ref={elementRef}
      className={cn(
        "transition-all duration-1000",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
    >
      {children}
    </Component>
  );
};
