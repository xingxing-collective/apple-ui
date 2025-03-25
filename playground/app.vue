<script setup lang="ts">
import { type ActionSheetProps, AiActionSheet } from "apple-ui";
import '@apple-ui/styles/src/index.css'

const actions = [
  { text: 'Action' },
  { text: 'Action', type: 'disabled' },
  { text: 'Action', type: 'destructive' }
] as ActionSheetProps['actions']
</script>

<template>
  <div>
    <AiActionSheet :actions="actions" />
  </div>
</template>