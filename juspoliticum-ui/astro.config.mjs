import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    host: true
  },
  integrations: [vue()]
});