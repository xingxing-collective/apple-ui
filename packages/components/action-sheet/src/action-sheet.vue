<script setup lang="ts">
import { computed } from 'vue';
import AiButton from './button.vue'
import { ActionSheetProps } from './action-sheet';

const ui = computed(() => ({
    wrapper: ''
}))

const props = defineProps<ActionSheetProps>();

</script>

<template>
    <div class="inset-0 z-50 fixed bg-[rgba(0, 0, 0, 0.2)]">
        <div class="absolute bottom-0 w-full flex flex-col px-2 pb-[34px] bg-[rgba(179, 179, 179, 0.82)]">
            <div class="flex w-full flex-col pb-[56px]  rounded-2xl">
                <template v-for="action in props.actions">
                    <AiButton :as="action.as" :type="action.type">{{ action.text }}</AiButton>
                </template>
            </div>
            <div class="pt-[8px]">
                <slot>
                    <div class="h-[56px] flex items-center justify-center bg-[rgba(92, 92, 92, 1)]">
                        <button class="">Cancel</button>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>