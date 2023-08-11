import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './src/main.jsx', // Chemin relatif vers votre fichier HTML principal
      },
    },
    assetsDir: 'assets', // Chemin relatif vers le dossier assets
  },
  base: '/newportfolio/',
});
