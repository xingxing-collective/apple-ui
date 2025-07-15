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
    wrapper: 'bg-white flex flex-col px-4 pt-3 border-trolleygray/55 border-b-[length:var(--border-width)] border-solid h-16.5 text-[13px] text-center ',
    title: 'font-semibold text-trolleygray/55',
    description: 'font-normal text-trolleygray/55'
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
  <component :is="props.as" :class="ui.wrapper({ class: props.ui?.wrapper })">
    <slot name="title">
      <div :class="ui.title({ class: props.ui?.title })"><span>{{ props.title }}</span></div>
    </slot>
    <slot name="description">
      <div :class="ui.description({ class: props.ui?.description })"><span>{{ props.description }}</span></div>
    </slot>
  </component>
</template>