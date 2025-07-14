<script setup lang="ts">
import { type ActionSheetProps, ActionSheet } from "../packages/components/ActionSheet";
import { ref } from "vue";

const actions = [
  { text: 'Action', click: (e) => { console.log(e) } }, { text: 'Action' }, { text: 'Action' },
  { text: 'Disabled Action', type: 'disabled' },
  { text: 'Destructive Action', type: 'destructive' }
] as ActionSheetProps['actions']
const title = ref('A Short Title is Best')
const description = ref('A message should be a short, complete sentence.')
const showActionSheet = ref(false)
</script>

<template>
  <div>
    <button class=" border" @click="showActionSheet = !showActionSheet">Toggle</button>
    <ActionSheet v-model="showActionSheet" :actions="actions" :title="title" :description="description" />
  </div>
</template>