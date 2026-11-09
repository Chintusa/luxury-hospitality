import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const port = Number(process.env.PORT || "19280");

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/luxury-hospitality/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port,
    host: "0.0.0.0",
    strictPort: false,
  },
  preview: {
    port,
    host: "0.0.0.0",
  },
});

