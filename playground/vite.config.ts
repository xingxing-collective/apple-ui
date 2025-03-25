import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import { AppleUI } from '../packages/plugins/index'

export default defineConfig({
  plugins: [vue(), AppleUI()]
})
