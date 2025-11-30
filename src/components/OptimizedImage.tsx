import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  style?: React.CSSProperties;
  sizes?: string;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className, 
  containerClassName,
  priority = false,
  width,
  height,
  loading,
  style,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);
  const imageElementRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Check if image is already cached
  useEffect(() => {
    if (isInView && imageElementRef.current) {
      if (imageElementRef.current.complete && imageElementRef.current.naturalHeight !== 0) {
        setIsLoaded(true);
      }
    }
  }, [isInView]);

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", containerClassName)}>
      {/* Placeholder skeleton - only show if not loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      {/* Actual image */}
      {isInView && (
        <img
          ref={imageElementRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={loading || (priority ? "eager" : "lazy")}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
          style={style}
          className={cn(
            "transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
        />
      )}
    </div>
  );
};
