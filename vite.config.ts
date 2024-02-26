import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: '/',
  plugins: [react()],
  build: {
    outDir: '/var/www/bas/site/public/',
=======
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
>>>>>>> 5ddc631 (Fix: deploy clever cloud)
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
})
