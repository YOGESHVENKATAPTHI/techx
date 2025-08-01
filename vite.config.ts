import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  root: "client",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src")
    }
  },
  build: {
    outDir: "../client/dist",
    emptyOutDir: true
  },
  plugins: [
    react(),
    tsconfigPaths()
  ]
});
