import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  server: { port: 4322, host: true },
  output: 'server',
  adapter: netlify(),
  vite: {
    ssr: {
      noExternal: ["modern-normalize"]
    }
  }
});
