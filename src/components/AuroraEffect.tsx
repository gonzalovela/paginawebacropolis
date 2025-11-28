import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

// Brand colors for aurora effect
const COLORS_TOP = ["#2e7d32", "#e8934a", "#d4a855", "#1b5e20"];

export const AuroraEffect = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, transparent 50%, ${color})`;

  return (
    <>
      {/* Aurora gradient overlay */}
      <motion.div
        style={{ backgroundImage }}
        className="absolute inset-0 z-[1] pointer-events-none opacity-40"
      />
      
      {/* Stars canvas */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-60">
        <Canvas>
          <Stars radius={50} count={1500} factor={4} fade speed={1.5} />
        </Canvas>
      </div>
    </>
  );
};
