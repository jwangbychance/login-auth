import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "dotenv/config.js";

const CLIENT_PORT = process.env.CLIENT_PORT;
const PROXY_PORT = process.env.PROXY_PORT;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: CLIENT_PORT,
    proxy: {
      "/api": `http://localhost:${PROXY_PORT}`,
    },
  },
  test: {
    environment: "jsdom",
  },
});
