import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import { AppleUiVite } from '../packages/plugins/index'

export default defineConfig({
  plugins: [vue(), AppleUiVite()]
})
