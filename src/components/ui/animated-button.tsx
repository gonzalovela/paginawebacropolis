import * as React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends ButtonProps {
  beamSize?: number;
  beamDuration?: number;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, beamSize = 40, beamDuration = 4, children, ...props }, ref) => {
    return (
      <div className="relative overflow-hidden rounded-md">
        <Button ref={ref} className={cn(className)} {...props}>
          {children}
        </Button>
        <BorderBeam 
          size={beamSize} 
          duration={beamDuration} 
          colorFrom="hsl(var(--primary))" 
          colorTo="hsl(var(--secondary))" 
        />
        <BorderBeam 
          size={beamSize} 
          duration={beamDuration} 
          colorFrom="hsl(var(--secondary))" 
          colorTo="hsl(var(--primary))" 
          delay={beamDuration / 2} 
        />
      </div>
    );
  }
);
AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
