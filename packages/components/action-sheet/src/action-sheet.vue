<script setup lang="ts">
import { computed } from 'vue';
import AiButton from './button.vue'
import AiHeader from './header.vue'
import { ActionSheetProps } from './action-sheet';

const ui = computed(() => ({
    wrapper: 'inset-0 z-50 fixed flex items-end p-3 bg-[rgba(0,0,0,0.2)]',
    container: 'w-full flex flex-col pb-[34px]',
    header: {
        base: 'bg-[rgba(var(--ui-color-white))] rounded-t-[14px]'
    },
    content: {
        base: 'flex w-full flex-col bg-[rgba(var(--ui-color-white))] rounded-b-[14px]'
    },
    footer: {
        wrapper: 'pt-2',
        container: 'h-[56px] flex items-center justify-center bg-[rgba(var(--ui-color-white))] rounded-[14px]',
        text: 'text-[rgba(var(--ui-color-blue))]'
    }
}))

const props = withDefaults(defineProps<ActionSheetProps>(), {
    as: 'div',
    cancelText: 'Cancel'
});

 const visible = defineModel({ type: Boolean, default: false });

const handleCancel = () => {
    props.beforeClose?.();
    visible.value = false;
}
</script>

<template>
    <Transition>
        <component v-if="visible" :is="as" :class="ui.wrapper">
            <div :class="ui.container">
                <div :class="ui.header.base">
                    <AiHeader :title="props.title" :description="props.description" />
                </div>
                <div :class="ui.content.base">
                    <template v-for="action in props.actions">
                        <AiButton :as="action.as" :type="action.type" @click="action.click">{{ action.text }}
                        </AiButton>
                    </template>
                </div>
                <div :class="ui.footer.wrapper">
                    <slot name="cancel">
                        <div :class="ui.footer.container">
                            <button :class="ui.footer.text" @click="handleCancel">
                                {{ props.cancelText }}
                            </button>
                        </div>
                    </slot>
                </div>
            </div>
        </component>
    </Transition>
</template>