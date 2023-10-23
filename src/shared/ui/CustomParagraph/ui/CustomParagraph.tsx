import { type ReactNode, type FC } from 'react';

import { ClassNames } from 'shared/lib';

import cls from './CustomParagraph.module.scss';

export enum CustomParagraphTheme {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
    ERROR = 'error',
}

interface CustomParagraphProps {
    className?: string;
    theme: CustomParagraphTheme;
    children: ReactNode;
}

/**
 * @param className - Class for controlling a component from outside.
 * @param theme - Paragraph theme.
 * @param children - React node.
 */

export const CustomParagraph: FC<CustomParagraphProps> = (props) => {
    const { className = '', children, theme, ...other } = props;

    return (
        <p
            className={ClassNames(cls.customParagraph, {}, [
                className,
                cls[theme],
            ])}
            {...other}
        >
            {children}
        </p>
    );
};
