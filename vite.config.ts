import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": env,
    },
    plugins: [
      react(),
      sentryVitePlugin({
        org: "kickdrum-d3",
        project: "javascript-react",
      }),
    ],

    // plugins: [react()],

    build: {
      // sourcemap: true
    },
  };
});
