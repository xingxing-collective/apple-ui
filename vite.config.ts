import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    dts({
      include: ['packages/**/**/*.vue', 'packages/**/**/*.ts']
    })
  ],
  build: {
    lib: {
      entry: [resolve(__dirname, 'packages/components/index.ts')],
      name: 'AppleUI',
      fileName: (format) => `apple-ui.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    sourcemap: true,
    cssCodeSplit: true
  }
})
