/// <reference types="vite/client" />

// vite-imagetools type declarations
declare module '*?format=webp' {
  const src: string;
  export default src;
}

declare module '*?format=webp&w=*' {
  const src: string;
  export default src;
}

declare module '*?w=*&format=webp' {
  const src: string;
  export default src;
}

declare module '*?quality=*' {
  const src: string;
  export default src;
}

declare module '*&as=picture' {
  const src: {
    sources: { srcset: string; type: string }[];
    img: { src: string; w: number; h: number };
  };
  export default src;
}

interface Window {
  __lovableEvents?: {
    track?: (event: string, properties?: Record<string, unknown>) => string | null;
  };
}
