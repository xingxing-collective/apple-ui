<script setup lang="ts">
import { computed } from 'vue';
import AiButton from './button.vue'

const ui = computed(() => ({
    wrapper: 'flex w-full flex-col px-4'
}))
</script>

<template>
    <div :class="ui.wrapper">
        <AiButton>Action</AiButton>
    </div>
</template>