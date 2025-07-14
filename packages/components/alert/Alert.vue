<script setup lang="ts">
import { computed } from 'vue'
import { tv } from "tailwind-variants"

const theme = {
  slots: {
    overlay: 'fixed inset-0 bg-[rgba(0,0,0,0.2)]',
    wrapper: 'fixed inset-0 flex items-center justify-center overflow-auto',
    container: 'flex flex-col min-h-[140px] min-w-[270px] bg-white rounded-[14px]',
  },
  variants: {
    transition: {
      true: {
        overlay: 'data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]',
        container: 'data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]'
      }
    },
  },
}

const alert = tv(theme)

export interface AlertProps {
  as?: keyof HTMLElementTagNameMap
  overlay?: boolean
  title?: string
  description?: string
  class?: any
  ui?: Partial<typeof theme.slots>
}


const props = withDefaults(defineProps<AlertProps>(), {
  as: 'div',
  overlay: true
})

const open = defineModel({ type: Boolean, default: false })

const ui = computed(() => alert({
  transition: props.overlay
}))

</script>
<template>
  <component v-if="open" :data-state="open ? 'open' : 'closed'" :is="as"
    :class="ui.overlay({ class: props.ui?.overlay })">
    <div :class="ui.wrapper({ class: props.ui?.wrapper })">
      <div :class="ui.container({ class: [props.class, props.ui?.container] })">
        <span>{{ description }}</span>
      </div>
    </div>
  </component>
</template>