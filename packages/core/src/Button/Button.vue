<script setup lang="ts">
import { tv } from 'tailwind-variants'
import { computed } from 'vue'

const theme = {
  slots: {
    wrapper: 'px-2.5 py-1 flex items-center justify-center',
    container: 'flex w-full h-full items-center justify-center gap-0.75',
  },
  variants: {
    size: {
      small: {
        wrapper: 'w-16.5 h-7 rounded-[40px] text-white text-[15px]'
      },
      medium: {
        wrapper: 'w-18.75 h-8.75 rounded-[40px] text-white text-[15px]'
      },
      large: {
        wrapper: 'w-23 h-12.5 rounded-[12px] text-white text-[17px]'
      }
    },
    state: {
      enabled: {
        wrapper: 'bg-blue text-white'
      },
      disabled: {
        wrapper: 'bg-slategray/12 dark:bg-slategray/24 text-navy/30 '
      }
    }
  }
}
export interface ButtonProps {
  /**
   * @defaultValue ```button```
   */
  as?: keyof HTMLElementTagNameMap
  text?: string
  ui?: Partial<typeof button.slots>
  class?: any,
  size?: 'small' | 'medium' | 'large',
  state?: 'enabled' | 'disabled'
}

const button = tv(theme)
const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  size: 'medium',
  state: 'enabled'
})
const ui = computed(() => button({
  size: props.size,
  state: props.state
}))
</script>
<template>
  <component :is="props.as" :class="ui.wrapper({ class: [props.class, props.ui?.wrapper] })">
    <div :class="ui.container({ class: props.ui?.container })">
      <span class="icon-[material-symbols--play-arrow] w-4 h-4 text-white"></span>
      <slot>
        <span>{{ props.text }}</span>
      </slot>
    </div>
  </component>
</template>