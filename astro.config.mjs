import { defineConfig } from 'astro/config';
import { z } from "astro/zod";
import astroEnv from "astro-env";
import lighthouse from "astro-lighthouse";
import metaTags from "astro-meta-tags";

import rename from "astro-rename";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  output: "static",
  assetsInline: true,
  inlineStylesheets: 'always',
  integrations: [astroEnv({
    schema: z.object({
      ABC: z.string()
    }),
    generateEnvTemplate: true
  }), lighthouse(), metaTags(), rename()]
});
