import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config.js";

const PORT = process.env.PORT || 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": `http://localhost:${PORT}`,
    },
  },
});
