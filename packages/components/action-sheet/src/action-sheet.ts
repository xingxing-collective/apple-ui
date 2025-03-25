import { ButtonProps } from "./button";

export interface ActionSheetProps {
    actions: Array<{
        text: string;
        as: ButtonProps['as'];
        type: ButtonProps['type'];
    }>
}