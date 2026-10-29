// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // TODO(Athos): set the final domain once it is chosen.
  site: 'https://example.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
