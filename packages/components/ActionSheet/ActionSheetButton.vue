<script setup lang="ts">
import { computed } from 'vue';
import { tv } from "tailwind-variants"

export type ButtonType = 'default' | 'disabled' | 'destructive'

export interface ButtonProps {
  /**
   * @defaultValue ```ButtonType.Default```
   */
  type?: ButtonType,
  /**
   * @defaultValue ```button```
   */
  as?: keyof HTMLElementTagNameMap
  text?: string
  ui?: Partial<typeof button.slots>
  class?: any
}

export interface ButtonSlots {
  default: (props?: {}) => any
}

const theme = {
  slots: {
    wrapper: 'flex items-center justify-center',
    container: 'w-full border-[rgba(128,128,128,0.55)] border-b-[0.33px]  h-[56px]',
    text: 'text-[17px] leading-[54px]'
  },
  variants: {
    color: {
      destructive: {
        text: 'text-[rgba(var(--ui-color-red))]'
      },
      disabled: {
        text: 'text-[rgba(128,128,128,0.55)]'
      },
      default: {
        text: 'text-[rgba(var(--ui-color-blue))]'
      }
    }
  }
}
const button = tv(theme)
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  as: 'button'
})
const ui = computed(() => button({
  color: props.type
}))
</script>

<template>
  <component :class="ui.wrapper({ class: props.ui?.wrapper })" :is="props.as">
    <div :class="ui.container({ class: props.ui?.container })">
      <slot>
        <span :class="ui.text({ class: props.ui?.text })">{{ props.text }}</span>
      </slot>
    </div>
  </component>
</template>