import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  preview: {
    host: "::",
    port: 8080,
    allowedHosts: "all",
  },
  plugins: [
    dyadComponentTagger(),
    react(),
    visualizer({
      filename: "dist/stats.html",
      template: "treemap",
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor_react: ["react", "react-dom", "react-router-dom"],
          vendor_radix: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-select",
            "@radix-ui/react-popover",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-label",
            "@radix-ui/react-toggle",
            "@radix-ui/react-slot",
          ],
          vendor_charts: ["recharts"],
        },
      },
    },
  },
});
