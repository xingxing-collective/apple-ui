<script setup lang="ts">
import { Button } from '../packages/core/src/index'

</script>

<template>
  <div class=" flex flex-col gap-4">
    <div class=" flex gap-4 items-center justify-center h-20">
      <Button :size="'small'">Play</Button>
      <Button :size="'medium'">Play</Button>
      <Button :size="'large'">Play</Button>
    </div>
    <div class=" flex gap-4 items-center justify-center h-20">
      <Button :size="'small'" :state="'disabled'">Play</Button>
      <Button :size="'medium'" :state="'disabled'">Play</Button>
      <Button :size="'large'" :state="'disabled'">Play</Button>
    </div>
  </div>
</template>