import { useEffect, useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  isHero?: boolean;
}

export const ParallaxImage = ({ src, alt, speed = 0.5, isHero = false }: ParallaxImageProps) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const rect = imageRef.current.parentElement?.getBoundingClientRect();
      if (!rect) return;
      
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Calculate if element is in viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // For hero, use a different calculation to ensure coverage
        if (isHero) {
          const yPos = scrolled * speed;
          imageRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
        } else {
          const elementTop = rect.top + scrolled - viewportHeight;
          const yPos = (scrolled - elementTop) * speed;
          imageRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, isHero]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div 
        ref={imageRef}
        className="absolute w-full"
        style={{ 
          willChange: "transform",
          top: isHero ? "-20%" : "-10%",
          bottom: isHero ? "-20%" : "-10%",
          height: isHero ? "140%" : "120%"
        }}
      >
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
