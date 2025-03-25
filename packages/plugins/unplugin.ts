import type { UnpluginOptions } from 'unplugin'
import { createUnplugin } from 'unplugin'
import tailwindcss from '@tailwindcss/vite'

export const AppleUIPlugin = createUnplugin(() => {
  return [tailwindcss()].flat(1) as UnpluginOptions[]
})