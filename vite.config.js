import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/"
  // If deploying to GitHub Pages under a repo subpath, set base: "/<repo-name>/"
  // For Vercel, leave base as default ("/").
});