import { type ButtonHTMLAttributes, type FC } from 'react';
import { ClassNames } from 'shared/lib';
import cls from './MyButton.module.scss';

export enum MyButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export enum MyButtonTheme {
    CLEAR = 'clear',
    BORDER = 'border',
    ACTIVE = 'active',
    ERROR = 'error',
    BACKGROUND = 'background',
}

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: MyButtonTheme;
    sqare?: boolean;
    size?: MyButtonSize;
}

export const MyButton: FC<MyButtonProps> = (props) => {
    const {
        className = '',
        children,
        sqare = false,
        size = '',
        theme = MyButtonTheme.CLEAR,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.sqare]: sqare,
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
