import { useEffect, useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
}

export const ParallaxImage = ({ src, alt, speed = 0.5 }: ParallaxImageProps) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const rect = imageRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate if element is in viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const yPos = -(scrolled - elementTop) * speed;
        imageRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ willChange: "transform" }}
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
