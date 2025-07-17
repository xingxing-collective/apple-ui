import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import dts from 'unplugin-dts/vite'
import tailwindcss from '@tailwindcss/vite'
import icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    icons(),
    dts({
      tsconfigPath: './tsconfig.app.json',
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: [resolve(__dirname, 'src/index.ts'), resolve(__dirname, 'src/index.css')],
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    sourcemap: true,
    cssCodeSplit: true
  }
})
