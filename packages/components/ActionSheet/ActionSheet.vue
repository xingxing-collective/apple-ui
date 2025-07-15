<script setup lang="ts">
import Button from './ActionSheetButton.vue'
import Header from './ActionSheetHeader.vue'
import { computed } from 'vue'
import { tv } from "tailwind-variants"
import type { ButtonProps, ButtonSlots } from "./ActionSheetButton.vue"
import { HeaderSlots } from "./ActionSheetHeader.vue"

export interface ActionSheetProps {
    as?: keyof HTMLElementTagNameMap
    title?: string
    /**
     * Render an overlay behind the action sheet.
     * @defaultValue true
     */
    overlay?: boolean
    /**
     * Animate the action sheet when opening or closing.
     * @defaultValue true
     */
    transition?: boolean
    description?: string
    cancelText?: string
    beforeClose?: () => void
    class?: any
    ui?: Partial<typeof actionSheet.slots>
    actions: Array<{
        text: string
        as?: ButtonProps['as']
        type?: ButtonProps['type']
        click?: ((evt: MouseEvent) => any)
    }>
}

export interface ActionSheetSlots extends HeaderSlots, ButtonSlots {
    header(props?: {}): any
    cancel: (props?: {}) => any
}

const theme = {
    slots: {
        overlay: 'fixed inset-0 bg-black/20',
        wrapper: 'fixed inset-0 flex items-end overflow-auto',
        container: 'w-full flex flex-col p-3 break-words',
        header: 'rounded-t-[var(--radius)]',
        content: 'rounded-b-[var(--radius)] flex w-full flex-col bg-white',
        footer: 'mt-2 h-14 w-full flex items-center justify-center bg-white rounded-[var(--radius)] text-blue'
    },
    variants: {
        transition: {
            true: {
                overlay: 'data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]',
                container: 'data-[state=open]:animate-[scale-in_200ms_ease-out] data-[state=closed]:animate-[scale-out_200ms_ease-in]'
            }
        },
    },
}
const actionSheet = tv(theme)
const props = withDefaults(defineProps<ActionSheetProps>(), {
    as: 'div',
    overlay: true,
    transition: true,
    cancelText: 'Cancel'
})
const slots = defineSlots<ActionSheetSlots>()
const ui = computed(() => actionSheet({
    transition: props.transition
}))
const open = defineModel({ type: Boolean, default: false })
const handleCancel = () => {
    props.beforeClose?.()
    open.value = false
}
</script>

<template>
    <component v-if="open" :data-state="open ? 'open' : 'closed'" :is="as"
        :class="ui.overlay({ class: props.ui?.overlay })">
        <div :class="ui.wrapper({ class: props.ui?.wrapper })">
            <div :class="ui.container({ class: props.ui?.container })">
                <slot name="header">
                    <Header :ui="{ wrapper: ui.header({ class: props.ui?.header }) }" :title="props.title"
                        :description="props.description">
                        <template #title>
                            <slot name="title"></slot>
                        </template>
                        <template #description>
                            <slot name="description"></slot>
                        </template>
                    </Header>
                </slot>
                <div :class="ui.content({ class: props.ui?.content })">
                    <template v-for="(action, _index) in props.actions" :key="_index">
                        <Button :as="action.as" :text="action.text" :type="action.type" @click="action.click">
                            <template v-if="action.text" #default>
                                <slot></slot>
                            </template>
                        </Button>
                    </template>
                </div>
                <slot name="cancel">
                    <button :class="ui.footer({ class: props.ui?.footer })" @click="handleCancel">
                        <span>{{ props.cancelText }}</span>
                    </button>
                </slot>
            </div>
        </div>
    </component>
</template>