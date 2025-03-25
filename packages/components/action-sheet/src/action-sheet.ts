import { ButtonProps } from "./button";

export interface ActionSheetProps {
    as?: keyof HTMLElementTagNameMap;
    title?: string;
    description?: string;
    cancelText?: string;
    beforeClose?: () => void;
    actions: Array<{
        text: string;
        as: ButtonProps['as'];
        type: ButtonProps['type'];
        click?: ((evt: MouseEvent) => any);
    }>
}