import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  server: { port: 4322, host: true },
  output: "hybrid",
  vite: {
    ssr: {
      noExternal: ["modern-normalize"]
    }
  }
});
