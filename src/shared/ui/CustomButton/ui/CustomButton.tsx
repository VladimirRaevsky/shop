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
    REGISTER = 'register',
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
    disabled?: boolean;
}

/**
 * @param className - Class for controlling a component from outside.
 * @param theme - Button theme.
 * @param children - React node.
 * @param type - Button type.
 * @param disabled - Button activation.
 */

export const CustomButton: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        theme = ButtonTheme.SECONDARY,
        type,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, any> = {
        [cls.disabled]: disabled,
    };

    return (
        <button
            type={type}
            className={ClassNames('', mods, [className, cls[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
