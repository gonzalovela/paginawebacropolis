import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  isHero?: boolean;
  objectPosition?: string;
  scale?: number;
}

export const ParallaxImage = ({ src, alt, speed = 0.5, isHero = false, objectPosition = "center", scale = 1 }: ParallaxImageProps) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const imgElementRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobileRaw = useIsMobile();
  
  // Default to mobile-friendly behavior until we know for sure
  const isMobile = isMobileRaw === undefined ? true : isMobileRaw;
  
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const disableParallax = isMobile || prefersReducedMotion;

  // Preload hero images immediately
  useEffect(() => {
    if (isHero && src) {
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
    }
  }, [isHero, src]);

  useEffect(() => {
    // Check if image is already cached
    if (imgElementRef.current?.complete && imgElementRef.current?.naturalHeight !== 0) {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    // Disable parallax on mobile or if user prefers reduced motion
    if (disableParallax) return;
    
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
  }, [speed, isHero, disableParallax]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Gradient placeholder for better UX while loading */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-muted to-secondary/20 animate-pulse"
          style={{ animationDuration: '1.5s' }}
        />
      )}
      
      <div 
        ref={imageRef}
        className="absolute inset-0"
        data-parallax={!disableParallax ? "true" : "false"}
        style={disableParallax ? {} : { 
          willChange: "transform",
          top: isHero ? "-20%" : "-15%",
          bottom: isHero ? "-20%" : "-15%",
          height: isHero ? "140%" : "130%",
          left: 0,
          right: 0
        }}
      >
        <img 
          ref={imgElementRef}
          src={src} 
          alt={alt}
          loading={isHero ? "eager" : "lazy"}
          decoding={isHero ? "sync" : "async"}
          fetchPriority={isHero ? "high" : "auto"}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition, transform: scale !== 1 ? `scale(${scale})` : undefined }}
        />
      </div>
    </div>
  );
};
