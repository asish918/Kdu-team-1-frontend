/// <reference types="vitest" />
/// <reference types="vite/client" />


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
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      css: true,
    },

    // plugins: [react()],

    build: {
      // sourcemap: true
    },
  };
});
