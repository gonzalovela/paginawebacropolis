import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        const params = new URLSearchParams();
        // Apply default quality compression and WebP format for all images
        if (!url.searchParams.has('format') && !url.searchParams.has('w')) {
          params.set('quality', '80');
          // Enable WebP for supported browsers
          params.set('format', 'webp');
        }
        return params;
      },
    }),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-tabs', '@radix-ui/react-tooltip'],
        },
      },
    },
    // Generate source maps for debugging
    sourcemap: false,
    // Minify for production
    minify: 'esbuild',
  },
}));
