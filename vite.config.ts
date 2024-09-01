import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "PrologComponentJS",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@mui/material", "@mui/styles"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@mui/material": "MaterialUI",
          "@mui/styles": "MaterialUIStyles",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setupTest.ts",
    coverage: {
      provider: "istanbul",
      exclude: [
        "./vite.config.ts",
        "./dist",
        "**/*.stories.tsx",
        "./.storybook/**/*",
        "./src/stories/presentation/**/*",
        "./src/App.tsx",
        "./src/main.tsx",
      ],
    },
  },
});
