import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv'

// https://vitejs.dev/config/

dotenv.config()

const outDir = process.env.VITE_BUILD_OUTDIR || 'dist'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: outDir,
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
