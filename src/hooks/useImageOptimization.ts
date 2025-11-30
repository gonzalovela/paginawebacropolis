/**
 * Hook for client-side image optimization before upload
 * Maintains consistent image quality and file sizes across the site
 */

interface OptimizationOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  format?: 'jpeg' | 'webp';
}

const DEFAULT_OPTIONS: OptimizationOptions = {
  maxWidth: 1200,
  maxHeight: 800,
  quality: 0.85,
  format: 'jpeg',
};

export const optimizeImage = async (
  file: File,
  options: OptimizationOptions = {}
): Promise<File> => {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  
  return new Promise((resolve, reject) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      reject(new Error('Could not get canvas context'));
      return;
    }

    img.onload = () => {
      // Calculate new dimensions while maintaining aspect ratio
      let { width, height } = img;
      
      if (width > opts.maxWidth!) {
        height = (height * opts.maxWidth!) / width;
        width = opts.maxWidth!;
      }
      
      if (height > opts.maxHeight!) {
        width = (width * opts.maxHeight!) / height;
        height = opts.maxHeight!;
      }
      
      // Set canvas dimensions
      canvas.width = width;
      canvas.height = height;
      
      // Enable image smoothing for better quality
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      
      // Draw image
      ctx.drawImage(img, 0, 0, width, height);
      
      // Convert to blob
      const mimeType = opts.format === 'webp' ? 'image/webp' : 'image/jpeg';
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Could not create blob'));
            return;
          }
          
          // Create new file with optimized content
          const extension = opts.format === 'webp' ? 'webp' : 'jpg';
          const originalName = file.name.replace(/\.[^/.]+$/, '');
          const optimizedFile = new File(
            [blob],
            `${originalName}.${extension}`,
            { type: mimeType }
          );
          
          resolve(optimizedFile);
        },
        mimeType,
        opts.quality
      );
    };
    
    img.onerror = () => {
      reject(new Error('Could not load image'));
    };
    
    // Load image from file
    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };
    reader.onerror = () => {
      reject(new Error('Could not read file'));
    };
    reader.readAsDataURL(file);
  });
};

// Preset configurations for different use cases
export const IMAGE_PRESETS = {
  // For cultura/voluntariado program cards (displayed at ~600x400)
  programCard: {
    maxWidth: 1200,
    maxHeight: 800,
    quality: 0.85,
    format: 'jpeg' as const,
  },
  // For gallery photos (displayed smaller)
  gallery: {
    maxWidth: 1000,
    maxHeight: 700,
    quality: 0.82,
    format: 'jpeg' as const,
  },
  // For banner images (need higher resolution)
  banner: {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 0.88,
    format: 'jpeg' as const,
  },
};

export const useImageOptimization = () => {
  return {
    optimizeImage,
    presets: IMAGE_PRESETS,
  };
};
