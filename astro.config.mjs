// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://karate-shotokai-lacroix-falgarde.netlify.app',
  output: 'static',
  integrations: [sitemap()],
});
