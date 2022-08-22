import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-alpha.vercel.app/',
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel()
});