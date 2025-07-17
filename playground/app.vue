<script setup lang="ts">
import { ref } from "vue"
import { Alert } from '../packages/core/src/index'
const model = ref(false)
const title = ref('A Short Title Is Best')
const description = ref('A description should be a short, complete sentence.')
const actions = ref([
  { text: 'Action 1', click: () => {
    console.log('Action 1 clicked')
    model.value=false
  } },
  { text: 'Action 2', click: () => console.log('Action 2 clicked') },
  { text: 'Action 3', click: () => console.log('Action 3 clicked') }
])
</script>

<template>
  <div>
    <button @click="model = !model">Click me</button>
    <Alert v-model="model" :description="description" :title="title" :actions="actions"></Alert>
  </div>
</template>