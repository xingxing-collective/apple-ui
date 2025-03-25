export type ButtonType ='default' | 'disabled' | 'destructive'

export interface ButtonProps {
    /**
     * @defaultValue ```ButtonType.Default```
     */
    type?: ButtonType,
    /**
     * @defaultValue ```button```
     */
    as?: keyof HTMLElementTagNameMap
}

export type ButtonEmits = {
    click: [evt: MouseEvent]
}