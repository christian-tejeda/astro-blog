import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/christian-tejeda/astro-blog',
  integrations: [tailwind()],
  adapter: vercel(),
  output: 'static'
});