import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://shazaaam101.github.io/interactive-pricing-component",
  plugins: [react()],
});
