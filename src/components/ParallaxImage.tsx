import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  isHero?: boolean;
}

export const ParallaxImage = ({ src, alt, speed = 0.5, isHero = false }: ParallaxImageProps) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const imgElementRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();
  
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  useEffect(() => {
    // Check if image is already cached
    if (imgElementRef.current?.complete && imgElementRef.current?.naturalHeight !== 0) {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    // Disable parallax on mobile or if user prefers reduced motion
    if (isMobile || prefersReducedMotion) return;
    
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
  }, [speed, isHero, isMobile, prefersReducedMotion]);

  // Simplified styles for mobile (no extra height for parallax)
  const containerStyle = isMobile || prefersReducedMotion
    ? { top: 0, bottom: 0, height: "100%" }
    : { 
        willChange: "transform",
        top: isHero ? "-20%" : "-15%",
        bottom: isHero ? "-20%" : "-15%",
        height: isHero ? "140%" : "130%"
      };

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Skeleton placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      <div 
        ref={imageRef}
        className="absolute w-full"
        data-parallax={!isMobile && !prefersReducedMotion ? "true" : "false"}
        style={containerStyle}
      >
        <img 
          ref={imgElementRef}
          src={src} 
          alt={alt}
          loading={isHero ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};
