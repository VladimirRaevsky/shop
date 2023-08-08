import { type ButtonHTMLAttributes, type FC } from 'react'
import { ClassNames } from 'shared/lib'
import cls from './Button.module.scss'

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export enum ButtonTheme {
    CLEAR = 'clear',
    BORDER = 'border',
    ACTIVE = 'active',
    ERROR = 'error',
    BACKGROUND = 'background',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    sqare?: boolean
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        sqare = false,
        size = '',
        theme = ButtonTheme.CLEAR,
        ...otherProps
    } = props

    const mods: Record<string, boolean> = {
        [cls.sqare]: sqare,
    }

    return (
        <button
            className={ClassNames(cls.button, mods, [className, cls[size], cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
