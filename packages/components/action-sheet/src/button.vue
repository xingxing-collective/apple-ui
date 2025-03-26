<script setup lang="ts">
import { computed } from 'vue';
import { button, type ButtonProps } from './button';

const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'default',
    as: 'button'
})

const ui = computed(() => button({
    color: props.type
}))

</script>

<template>
    <component :class="ui.wrapper({ class: props.ui?.wrapper })" :is="props.as">
        <div :class="ui.container({ class: props.ui?.container })">
            <slot>
                <span :class="ui.text({ class: props.ui?.text })">{{ props.text }}</span>
            </slot>
        </div>
    </component>
</template>