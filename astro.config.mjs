import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lzuna0032-design.github.io',
  base: '/izuna.github.io',
  integrations: [sitemap()],
});
