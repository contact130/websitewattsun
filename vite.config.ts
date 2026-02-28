import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const plugins = [react(), tailwindcss(), vitePluginManusRuntime()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "client", "dist"),
    emptyOutDir: true,
    // Optimisation : diviser le JS en chunks pour réduire le JS inutilisé par page
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer React du reste
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Séparer les librairies de carte (Leaflet) - très lourdes
          'vendor-map': ['leaflet', 'react-leaflet'],
          // Séparer les composants UI (shadcn/radix)
          'vendor-ui': ['@radix-ui/react-dialog', '@radix-ui/react-tooltip', '@radix-ui/react-accordion'],
        },
      },
    },
    // Activer la compression pour réduire la taille des fichiers
    cssCodeSplit: true,
    sourcemap: false,
  },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
