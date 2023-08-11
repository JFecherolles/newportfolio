import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: 'assets',
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            { src: 'src/assets/*', dest: 'dist/assets' },
          ],
        }),
      ],
    },
  },
  base: '/newportfolio/', // Assurez-vous que c'est le bon chemin
});
