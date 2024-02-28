import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import copy from 'vite-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    copy({
      targets: [
        { src: '.htaccess', dest: '/var/www/bas/site/public/' }
      ],
      hook: 'writeBundle' // Use the appropriate hook to ensure it happens at the right time
    })
  ],
  build: {
    outDir: '/var/www/bas/site/public/',
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    }
  }
});
