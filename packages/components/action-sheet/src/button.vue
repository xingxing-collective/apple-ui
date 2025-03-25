<script setup lang="ts">
import { computed } from 'vue';
import { ButtonEmits, ButtonProps } from './button';

const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'default',
    as: 'button'
})

const emits = defineEmits<ButtonEmits>()


const handleClick = (evt: MouseEvent) => {
    emits('click', evt)
}


const ui = computed(() => ({
    wrapper: 'flex items-center justify-center',
    container: 'w-full border-[#808080] border-b-[0.33px]  h-[56px]',
    text: ["text-[17px] leading-[54px] ", props.type == 'destructive' ? "text-[#FF3B30]" : props.type == 'disabled' ? "text-[#AEAEB2]" : "text-[#007AFF]"],
}));

</script>

<template>
    <component :class="ui.wrapper" :is="props.as" @click="handleClick">
        <div :class="ui.container">
            <span :class="ui.text">
                <slot />
            </span>
        </div>
    </component>
</template>