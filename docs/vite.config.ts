import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      path: "path-browserify",
      "node-fetch": "isomorphic-fetch",
    },
  },
  plugins: [preact()],
  legacy: {
    // Needed for react-ace
    // https://github.com/vitejs/rolldown-vite/issues/457
    inconsistentCjsInterop: true,
  },
});
