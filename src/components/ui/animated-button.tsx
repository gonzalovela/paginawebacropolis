import * as React from "react";
import { Button, ButtonProps } from "@/components/ui/button";

interface AnimatedButtonProps extends ButtonProps {
  beamSize?: number;
  beamDuration?: number;
}

// Plain button: animated border beams were removed from the visual line.
const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ beamSize: _s, beamDuration: _d, ...props }, ref) => <Button ref={ref} {...props} />
);
AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
