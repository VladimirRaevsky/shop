import {
    type ButtonHTMLAttributes,
    type ReactNode,
    type RefObject,
} from 'react';

export enum ButtonTheme {
    SECONDARY = 'secondary',
    PRIMARY = 'primary',
    CLEAR = 'clear',
    CIRCLE = 'circle',
    SQARE = 'sqare',
    SUBMIT = 'submit',
    SUBSCRIBE = 'subscribe',
    REGISTER = 'register',
}

export enum ButtonType {
    BUTTON = 'button',
    SUBMIT = 'submit',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme: ButtonTheme;
    type: ButtonType;
    children: ReactNode;
    disabled?: boolean;
    buttonRef?: RefObject<HTMLButtonElement>;
}
