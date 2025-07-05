import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/shri2025-task-perfomance/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
