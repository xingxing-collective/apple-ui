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
  /**
   * Whether this is the last button in the group
   * @defaultValue false
   */
  isLast?: boolean
  ui?: Partial<typeof button.slots>
  class?: any
}

export interface ButtonSlots {
  default: (props?: {}) => any
}

const theme = {
  slots: {
    wrapper: 'flex items-center justify-center',
    container: 'w-full h-14 text-center',
    text: 'text-[17px] leading-13.5'
  },
  variants: {
    color: {
      destructive: {
        text: 'text-red'
      },
      disabled: {
        text: 'text-trolleygray/55'
      },
      default: {
        text: 'text-blue'
      }
    },
    border: {
      true: {
        container: 'border-trolleygray/55 border-b-[length:var(--border-width)] border-solid'
      },
      false: {
        container: ''
      }
    }
  }
}
const button = tv(theme)
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  as: 'button',
  isLast: false
})
const ui = computed(() => button({
  color: props.type,
  border: !props.isLast
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