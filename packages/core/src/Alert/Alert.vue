<script setup lang="ts">
import { computed } from 'vue'
import { tv } from "tailwind-variants"

const theme = {
  slots: {
    overlay: 'fixed inset-0 bg-black/20',
    wrapper: 'fixed inset-0 flex items-center justify-center overflow-auto',
    container: 'flex flex-col min-h-35 min-w-67.5 bg-white rounded-[var(--radius)]',
    header: 'h-24 py-4.75 flex flex-col items-center border-trolleygray/55 border-b-[length:var(--border-width)] border-solid',
    title: 'w-59.5 h-5.5 text-center font-semibold text-black text-[17px] leading-5.5',
    description: 'w-59.5 text-[13px] text-center text-black font-normal leading-4.5',
    action: 'h-11 text-center text-blue text-[17px] flex items-center justify-center',
  },
  variants: {
    transition: {
      true: {
        overlay: 'data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out',
        container: 'data-[state=open]:animate-scale-in data-[state=closed]:animate-scale-out'
      }
    },
    border: {
      true: {
        action: 'border-trolleygray/55 border-b-[length:var(--border-width)] border-solid last:border-none',
      }
    }
  },
}

const alert = tv(theme)

export interface AlertProps {
  as?: keyof HTMLElementTagNameMap
  overlay?: boolean
  title?: string | number
  description?: string | number
  class?: any
  ui?: Partial<typeof theme.slots>
  direction?: 'horizontal' | 'vertical'
  actions: Array<{
    text: string
    class?: any
    click?: (evt: MouseEvent) => any
  }>
}

const props = withDefaults(defineProps<AlertProps>(), {
  as: 'div',
  direction: 'vertical',
  overlay: true
})

const open = defineModel({ type: Boolean, default: false })

const ui = computed(() => alert({
  transition: props.overlay,
  border: props.direction === 'vertical',
}))

</script>
<template>
  <component v-if="open" :data-state="open ? 'open' : 'closed'" :is="as"
    :class="ui.overlay({ class: props.ui?.overlay })">
    <div :class="ui.wrapper({ class: props.ui?.wrapper })">
      <div :class="ui.container({ class: [props.class, props.ui?.container] })">
        <div :class="ui.header({ class: props.ui?.header })">
          <div :class="ui.title({ class: props.ui?.title })">
            <span>{{ props.title }}</span>
          </div>
          <div :class="ui.description({ class: props.ui?.description })">
            <span>{{ props.description }}</span>
          </div>
        </div>
        <template v-for="(action, index) in actions">
          <button :class="ui.action({ class: [action.class, props.ui?.action] })" @click="action.click">
            <span>{{ action.text }}</span>
          </button>
        </template>
      </div>
    </div>
  </component>
</template>