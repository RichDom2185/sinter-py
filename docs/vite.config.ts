import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "path", replacement: "path-browserify" },
      { find: "node-fetch", replacement: "isomorphic-fetch" },
      // Use UMD bundle for xmlhttprequest-ts dependency
      {
        find: "xmlhttprequest-ts",
        replacement:
          "./node_modules/xmlhttprequest-ts/bundles/xmlhttprequest-ts.umd.js",
      },
    ],
  },
  plugins: [preact()],
});
