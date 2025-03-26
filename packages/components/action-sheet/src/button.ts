import { buttonTheme as theme } from "@apple-ui/theme"
import { tv } from "tailwind-variants"

export type ButtonType = 'default' | 'disabled' | 'destructive'

export const button = tv(theme)

export interface ButtonProps {
    /**
     * @defaultValue ```ButtonType.Default```
     */
    type?: ButtonType,
    /**
     * @defaultValue ```button```
     */
    as?: keyof HTMLElementTagNameMap
    text?: string
    ui?: Partial<typeof button.slots>
    class?: any
}

export interface ButtonSlots {
    default: (props?: {}) => any
}