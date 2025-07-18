// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  site: 'https://seusite.com',
  vite: {
    plugins: [tailwindcss()]
  }
});