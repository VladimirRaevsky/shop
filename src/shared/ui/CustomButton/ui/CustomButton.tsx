import { type ReactNode, type ButtonHTMLAttributes, type FC } from 'react';

import { ClassNames } from 'shared/lib';

import cls from './CustomButton.module.scss';

export enum ButtonTheme {
    SECONDARY = 'secondary',
    PRIMARY = 'primary',
    CLEAR = 'clear',
    CIRCLE = 'circle',
    SQARE = 'sqare',
    SUBMIT = 'submit',
    SUBSCRIBE = 'subscribe',
}

export enum ButtonType {
    BUTTON = 'button',
    SUBMIT = 'submit',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme: ButtonTheme;
    type: ButtonType;
    children: ReactNode;
}

/**
 * @param className - Class for controlling a component from outside.
 * @param theme - Button theme.
 * @param children - React node.
 * @param type - Button type.
 */

export const CustomButton: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        theme = ButtonTheme.SECONDARY,
        type,
        ...otherProps
    } = props;

    return (
        <button
            type={type}
            className={ClassNames('', {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
