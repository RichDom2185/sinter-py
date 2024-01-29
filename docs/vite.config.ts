import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      path: "path-browserify",
      "node-fetch": "isomorphic-fetch",
      // Use UMD bundle for xmlhttprequest-ts dependency
      "xmlhttprequest-ts":
        "./node_modules/xmlhttprequest-ts/bundles/xmlhttprequest-ts.umd.js",
    },
  },
  plugins: [preact()],
});
