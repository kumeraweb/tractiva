// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  output: 'server',
  security: {
    // Prevent false 403 responses on POST endpoints behind Vercel/custom domains.
    checkOrigin: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
