import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://imwinterer.github.io',
  base: '/astro-view-transitions-first-look',
  trailingSlash: 'always',
  server: {
    host: true,
  },

});
