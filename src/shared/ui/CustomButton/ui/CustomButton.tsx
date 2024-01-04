import { type FC } from 'react';

import { type ButtonProps, ButtonTheme } from '../types';

import { ClassNames } from 'shared/lib';

import cls from './CustomButton.module.scss';

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
        buttonRef,
        ...otherProps
    } = props;

    const mods: Record<string, any> = {
        [cls.disabled]: disabled,
    };

    return (
        <button
            ref={buttonRef}
            type={type}
            className={ClassNames('', mods, [className, cls[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
