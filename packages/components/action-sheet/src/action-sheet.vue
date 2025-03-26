<script setup lang="ts">
import AiButton from './button.vue'
import AiHeader from './header.vue'
import { ActionSheetProps, ActionSheetSlots, actionSheet } from './action-sheet'
import { computed } from 'vue'

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

const visible = defineModel({ type: Boolean, default: false })

const handleCancel = () => {
    props.beforeClose?.()
    visible.value = false
}
</script>

<template>
    <component v-if="visible" :data-state="visible ? 'open' : 'closed'" :is="as"
        :class="ui.overlay({ class: props.ui?.overlay })">
        <div :class="ui.wrapper({ class: props.ui?.wrapper })">
            <div :class="ui.container({ class: props.ui?.container })">
                <div :class="ui.header({ class: props.ui?.header })">
                    <slot name="header">
                        <AiHeader :title="props.title" :description="props.description">
                            <template #title>
                                <slot name="title"></slot>
                            </template>
                            <template #description>
                                <slot name="description"></slot>
                            </template>
                        </AiHeader>
                    </slot>
                </div>
                <div :class="ui.content({ class: props.ui?.content })">
                    <template v-for="(action,index) in props.actions" :key="index">
                        <AiButton :as="action.as" :text="action.text" :type="action.type" @click="action.click">
                            <template v-if="action.text" #default>
                                <slot></slot>
                            </template>
                        </AiButton>
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