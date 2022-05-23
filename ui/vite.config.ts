import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    outDir: "../srv/static",
    target: 'esnext',
    polyfillDynamicImport: false,
  },
});
