<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';
import { tv } from "tailwind-variants"

export interface HeaderProps {
  title?: string
  description?: string
  class?: any
  ui?: Partial<typeof header.slots>
  as?: keyof HTMLElementTagNameMap
}

export interface HeaderSlots {
  title: (props?: {}) => any
  description: (props?: {}) => any
}

const theme = {
  slots: {
    wrapper: 'bg-[rgba(var(--ui-color-white))] flex flex-col px-4 pt-3 pb-[14px] border-[rgba(128,128,128,0.55)] border-b-[0.33px] h-[66px] text-[13px] text-center text-[rgba(127,127,127,0.5)]',
    title: 'font-[600]',
    description: 'font-[400]'
  }
}
const header = tv(theme)
const props = withDefaults(defineProps<HeaderProps>(), {
  as: 'div'
})
const slots = defineSlots<HeaderSlots>()
const ui = computed(() => header())

</script>
<template>
  <div :class="ui.wrapper({ class: props.ui?.wrapper })">
    <slot name="title">
      <div :class="ui.title({ class: props.ui?.title })"><span>{{ props.title }}</span></div>
    </slot>
    <slot name="description">
      <div :class="ui.description({ class: props.ui?.description })"><span>{{ props.description }}</span></div>
    </slot>
  </div>
</template>