<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { HeaderProps } from './header'
const props = withDefaults(defineProps<HeaderProps>(), {
  as: 'div'
});

const ui = {
  wrapper: 'flex flex-col px-4 pt-3 pb-[14px] border-[rgba(128,128,128,0.55)] border-b-[0.33px] h-[66px] text-[13px] text-center text-[rgba(127,127,127,0.5)]',
  title: 'font-[600] ',
  description: 'font-[400]'
};
</script>
<template>
  <div :class="ui.wrapper">
    <div :class="ui.title"><span>{{ props.title }}</span></div>
    <div :class="ui.description"><span>{{ props.description }}</span></div>
  </div>
</template>