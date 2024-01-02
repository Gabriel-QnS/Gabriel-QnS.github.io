// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'prism': './nested/prism-docs/index.html',
        'tribute': './nested/tribute/index.html',
        'red-cuisine': './nested/red-cuisine/index.html',
        'cat-shop': './nested/luxury-cat-shop',
        'survey-form': './nested/survey-form'
      },
    },
  },
})