<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue';
import { type HeaderProps, type HeaderSlots, header } from './header'

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