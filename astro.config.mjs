import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  base: "/base-path",
  trailingSlash: "ignore",
  integrations: [react()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
