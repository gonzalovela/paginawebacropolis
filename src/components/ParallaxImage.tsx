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
    let rafId: number;
    
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      rafId = requestAnimationFrame(() => {
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
            // More natural parallax calculation for banners
            const elementTop = rect.top + scrolled;
            const relativeScroll = scrolled - elementTop + viewportHeight;
            const yPos = relativeScroll * speed;
            imageRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [speed, isHero]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div 
        ref={imageRef}
        className="absolute w-full"
        style={{ 
          willChange: "transform",
          top: isHero ? "-20%" : "-15%",
          bottom: isHero ? "-20%" : "-15%",
          height: isHero ? "140%" : "130%"
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
