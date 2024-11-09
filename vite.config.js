import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "./dist", // Ensure output is in a `dist` folder in the root
  },
  base: "/cencol-link/", // Make sure this matches the repository name
});
