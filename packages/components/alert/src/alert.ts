import { tv } from "tailwind-variants"
import { alertTheme as theme } from "@apple-ui/theme"

export const alert = tv(theme)

export interface AlertProps {
  as?: keyof HTMLElementTagNameMap
  overlay?: boolean
  title?: string
  description?: string
  class?: any
  ui?: Partial<typeof theme.slots>
}