<script setup lang="ts">
import { computed } from 'vue';
import { ButtonProps } from './button';

const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'default',
    as: 'button'
})

const ui = computed(() => ({
    wrapper: 'flex items-center justify-center',
    container: 'w-full border-[rgba(128,128,128,0.55)] border-b-[0.33px]  h-[56px]',
    text: ["text-[17px] leading-[54px] ", props.type == 'destructive' ? "text-[rgba(var(--ui-color-red))]" : props.type == 'disabled' ? "text-[rgba(128,128,128,0.55)]" : "text-[rgba(var(--ui-color-blue))]"],
}));

</script>

<template>
    <component :class="ui.wrapper" :is="props.as">
        <div :class="ui.container">
            <span :class="ui.text">
                <slot />
            </span>
        </div>
    </component>
</template>