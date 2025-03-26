import { tv } from "tailwind-variants"
import { headerTheme as theme } from '@apple-ui/theme'

export const header = tv(theme)

export interface HeaderProps {
    title?: string
    description?: string
    class?: any
    ui?: Partial<typeof header.slots>
    as?: keyof HTMLElementTagNameMap
}

export interface HeaderSlots {
    title: (props?: {}) => any
    description: (props?: {}) => any
}