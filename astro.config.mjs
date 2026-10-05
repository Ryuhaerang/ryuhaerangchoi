import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://ryuhaerang.github.io',
  base: '/ryuhaerangchoi',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  vite: {
    server: { watch: { usePolling: true, interval: 300 } },
  },
});
