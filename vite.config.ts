import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setupTest.ts",
    coverage: {
      provider: "istanbul",
      exclude: [
        "**/*.stories.tsx",
        "./.storybook/**/*",
        "./src/stories/presentation/**/*",
        "./src/App.tsx",
        "./src/main.tsx",
      ],
    },
  },
});
