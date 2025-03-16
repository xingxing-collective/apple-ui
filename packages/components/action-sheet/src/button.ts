export enum ButtonType {
    Default,
    Disabled,
    Destructive
}

export interface ButtonProps {
    /**
     * @defaultValue ```ButtonType.Default```
     */
    type?: ButtonType,
    /**
     * @defaultValue ```button```
     */
    tag?: keyof HTMLElementTagNameMap
}

export type ButtonEmits = {
    click: [evt: MouseEvent]
}