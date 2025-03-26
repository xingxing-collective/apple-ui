import { tv } from "tailwind-variants"
import type { ButtonProps, ButtonSlots } from "./button"
import { actionSheetTheme as theme } from '@apple-ui/theme'
import { HeaderSlots } from "./header"

export const actionSheet = tv(theme)

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