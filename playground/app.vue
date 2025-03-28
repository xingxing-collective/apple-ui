<script setup lang="ts">
import { AiAlert } from "apple-ui";
import { ref } from "vue";

const title = ref('A Short Title is Best')
const description = ref('A message should be a short, complete sentence.')

const open = ref(false)
</script>

<template>
  <div>
    <button class="border" @click="open = !open">Toggle</button>
    <AiAlert v-model="open" :title="title" :description="description" />
  </div>
</template>