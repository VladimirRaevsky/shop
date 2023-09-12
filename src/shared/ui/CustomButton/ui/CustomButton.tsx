import { type ButtonHTMLAttributes, type FC } from 'react';

import { ClassNames } from 'shared/lib';

import cls from './CustomButton.module.scss';

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export enum ButtonTheme {
    SECONDARY = 'secondary',
    PRIMARY = 'primary',
    DEFAULT = 'default',
    ERROR = 'error',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme: ButtonTheme;
    shape?: boolean;
    size?: ButtonSize;
}

export const CustomButton: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        shape = false,
        size = '',
        theme = ButtonTheme.DEFAULT,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.circle]: shape,
    };

    return (
        <button
            className={ClassNames(cls.button, mods, [
                className,
                cls[size],
                cls[theme],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
