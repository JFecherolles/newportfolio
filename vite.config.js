import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy'; // Assurez-vous que rollup-plugin-copy est installé

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'assets/*', dest: 'dist/assets/' }, // Copiez les fichiers d'images
      ],
     
    })
  ],
  root: './',
  publicDir: 'public',
  envDir: '.',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  base: './',
});
