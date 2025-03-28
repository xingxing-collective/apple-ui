<script setup lang="ts">
import { computed } from 'vue';
import { AlertProps } from './alert'
import { alert } from './alert';

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
      <div :class="ui.container({ class: [props.class, props.ui?.container] })"></div>
    </div>
  </component>
</template>