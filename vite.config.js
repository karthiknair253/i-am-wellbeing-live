import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    allowedHosts: ["www.iamwellbeing.org", "iamwellbeing.org"],
    // optional: set host and port
    host: "0.0.0.0",
    port: 5173,
  },
  //      allowedHosts: ['www.iamwellbeing.org'] // Allows all hosts (not recommended for production)
});
