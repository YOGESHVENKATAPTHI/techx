import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  // your client folder is the Vite project root
  root: "client",

  resolve: {
    alias: {
      // make sure @/… always points here:
      "@": path.resolve(__dirname, "client/src")
    }
  },

  plugins: [
    react(),

    // loads the same `paths` from tsconfig.json automatically
    tsconfigPaths()
  ],

  build: {
    // your build output—adjust if you changed it
    outDir: "../client/dist",
    emptyOutDir: true
  }
});
