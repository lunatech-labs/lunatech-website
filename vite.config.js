const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        en: resolve(__dirname, 'index.html'),
        fr: resolve(__dirname, 'fr.html')
      }
    }
  }
})